import json,re,subprocess,sys
f=sys.argv[1]
S=json.load(open(__import__('os').environ.get('SCR','/home/claude/ad5/script.json')))
out=subprocess.run(['ffmpeg','-hide_banner','-i',f,'-af','silencedetect=n=-38dB:d=0.12','-f','null','-'],capture_output=True,text=True).stderr
st=[float(x) for x in re.findall(r'silence_start: ([\d.]+)',out)]; en=[float(x) for x in re.findall(r'silence_end: ([\d.]+)',out)]
dur=float(subprocess.run(['ffprobe','-v','error','-show_entries','format=duration','-of','csv=p=0',f],capture_output=True,text=True).stdout)
gaps=list(zip(st,en))
# leading silence
lead=gaps[0][1] if gaps and gaps[0][0]<0.05 else 0
if gaps and gaps[0][0]<0.05: gaps=gaps[1:]
if gaps and gaps[-1][1]>dur-0.05: tail=gaps[-1][0]; gaps=gaps[:-1]
else: tail=dur
N=len(S)
w=[len(re.sub(r'\[.*?\]','',s[0])) for s in S]
# DP choose N-1 gaps in order
import math
G=len(gaps)
pts=[lead]+[None]*0
def segdur(a,b): # speech start a(end of gap or lead) to b (start of gap or tail) 
    return b-a
total_speech=tail-lead-sum(e-s for s,e in gaps)
rate=total_speech/sum(w)
INF=1e18
# dp[i][j]: first i segments done, last boundary is gap j (j=-1 for lead)
from functools import lru_cache
starts=[lead]+[e for s,e in gaps]; ends=[s for s,e in gaps]+[tail]
# boundary k in 0..G : segment begins at starts[k]; segment ending at gap k ends at ends[k] (k<G) or tail (k=G)
def cost(i,a,b): # segment i from start index a to end index b (b>=a), internal gaps count partially
    d=ends[b]-starts[a]
    internal=sum(gaps[k][1]-gaps[k][0] for k in range(a,b))
    exp=rate*w[i]
    gl=(gaps[b][1]-gaps[b][0]) if b<G else 0.5
    return ((d-internal)-exp)**2/ (exp+0.3) - 0.8*min(gl,0.6)
dp={(0,0):(0,None)}
best={}
cur={0:(0.0,[])}
for i in range(N):
    nxt={}
    for a,(c,path) in cur.items():
        for b in range(a,G+1):
            if i<N-1 and b==G: break
            if i==N-1 and b!=G: continue
            cc=c+cost(i,a,b)
            na=b+1
            if na not in nxt or nxt[na][0]>cc: nxt[na]=(cc,path+[(starts[a],ends[b])])
    cur=nxt
c,path=cur[G+1]
for i,(a,b) in enumerate(path): print(f"{i:2d} {a:7.2f} {b:7.2f} {b-a:5.2f} exp {rate*w[i]:5.2f}  {S[i][0][:50]}")
json.dump(path,open(f+'.seg.json','w'))
print('lead',lead,'tail',tail,'dur',dur,'speech',total_speech)
