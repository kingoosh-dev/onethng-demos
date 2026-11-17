import json,subprocess,re
import sys,os
SCR=os.environ.get('SCR','/home/claude/ad5/script.json');TAKE=os.environ.get('TAKE','take1.mp3');OUT=os.environ.get('OUT','vo.wav');TLO=os.environ.get('TLO','/home/claude/ad5/timeline.json')
S=json.load(open(SCR))
seg=json.load(open(TAKE+'.seg.json'))
IDX=[x[2] if len(x)>2 else k for k,x in enumerate(S)]
TEMPO=float(os.environ.get('TEMPO','1.15')); LEAD=0.3
SKIP=set(json.loads(os.environ.get('SKIP','[35,47]')))
gapafter={int(k):v for k,v in json.loads(os.environ.get('GAPS','{"21":0.5,"22":0.45,"32":0.35,"36":0.45,"40":0.35,"46":0.3}')).items()}
parts=[];t=LEAD;sent=[];caps=[]
subprocess.run(['ffmpeg','-y','-v','error','-i',TAKE,'-ar','44100','-ac','1','t1.wav'])
filt=[];
keep=[i for i in range(len(seg)) if i not in SKIP]
for n,i in enumerate(keep):
    a,b=seg[i]
    a2=max(0,a-0.03); b2=b+0.07
    filt.append(f"[0:a]atrim={a2:.3f}:{b2:.3f},asetpts=PTS-STARTPTS[s{i}]")
    g=gapafter.get(i,0.17) if n<len(keep)-1 else 0.8
    filt.append(f"aevalsrc=0:d={g}:s=44100[g{i}]")
    d=b2-a2
    t0=t; t1=t+d
    sent.append({'i':IDX[i],'t0':round(t0/TEMPO,3),'t1':round(t1/TEMPO,3)})
    # captions by char count
    chunks=S[i][1]; L=[len(c)+3 for c in chunks]; tot=sum(L); x=t0+0.02
    for c,l in zip(chunks,L):
        y=x+(d-0.05)*l/tot
        caps.append({'t0':round(x/TEMPO,3),'t1':round(y/TEMPO,3),'text':c,'s':IDX[i]}); x=y
    t=t1+g
lead=f"aevalsrc=0:d={LEAD}:s=44100[ld]"
cat="[ld]"+"".join(f"[s{i}][g{i}]" for i in keep)+f"concat=n={2*len(keep)+1}:v=0:a=1,atempo={TEMPO}[o]"
fc=";".join([lead]+filt+[cat])
subprocess.run(['ffmpeg','-y','-v','error','-i','t1.wav','-filter_complex',fc,'-map','[o]','-ar','44100',OUT],check=True)
total=round(t/TEMPO,3)
# extend caption t1 to next caption start when within same sentence or small gap
for k in range(len(caps)-1):
    nx=caps[k+1]['t0']
    if nx-caps[k]['t1']<0.6: caps[k]['t1']=nx
caps[-1]['t1']=total
json.dump({'caps':caps,'sent':sent,'total':total},open(TLO,'w'))
print(total, subprocess.run(['ffprobe','-v','error','-show_entries','format=duration','-of','csv=p=0',OUT],capture_output=True,text=True).stdout)
