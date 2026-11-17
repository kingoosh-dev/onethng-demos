cd /home/claude/reels2
for V in "$@"; do
  N=$(python3 -c "import json;print(int(json.load(open('tl_$V.json'))['total']*30)+40)")
  Q=$(( (N+2)/3 ))
  for k in 0 1 2; do a=$((k*Q)); b=$(( (k+1)*Q )); [ $b -gt $N ] && b=$N; node render.js $V all $a $b > log_$V$k.txt 2>&1 & done; wait
  T=$(python3 -c "import json;print(json.load(open('tl_$V.json'))['total']+1.2)")
  ffmpeg -y -v error -i audio/m3.wav -af "atrim=0:$T,afade=t=in:d=0.3,afade=t=out:st=$(python3 -c "print($T-2.5)"):d=2.5,volume=0.18" audio/bed_$V.wav
  ffmpeg -y -v error -i audio/vo_$V.wav -i audio/bed_$V.wav -filter_complex "[0]apad[v];[v][1]amix=inputs=2:duration=longest:normalize=0,volume=1.18,alimiter=limit=0.93[o]" -map "[o]" -ar 44100 -t $T audio/mix_$V.wav
  ffmpeg -y -v error -framerate 30 -i f_$V/%05d.jpg -i audio/mix_$V.wav -map 0:v -map 1:a -c:v libx264 -preset veryfast -crf 23 -maxrate 12M -bufsize 24M -pix_fmt yuv420p -c:a aac -b:a 192k -movflags +faststart -shortest out/$V.mp4
  echo "$V done $(ffprobe -v error -show_entries format=duration -of csv=p=0 out/$V.mp4)"
done
