# Weekly reel pipeline
Setup: copy this repo to /home/claude/reels2; copy themes_preview/_fonts to /home/claude/themes/preview/_fonts; copy seg2.py to /home/claude/ad5/, build_vo.py to /home/claude/ad6/.
Per video V: write V.json (kind pack|theme, story, segs) like examples/, add shots to shots.json, add V's HOT words in render.js, make VO (ElevenLabs eleven_v4, voice qxePw1S1QmBgjlU3GIy5 "Older Joe") -> audio/vo_V.wav, build timeline tl_V.json with build_vo.py/seg2.py (see examples), stills img/<v>_N.jpg 1080x1920 (Higgsfield nano_banana_2_1 2k, image_references = style ref), animate 3-4 shots with minimax_h3 (start_image, 9:16, 5s) -> clips_mp4/<name>.mp4, `bash ext.sh <name>`, then `bash all.sh V` -> out/V.mp4.
used_topics.txt lists topics already made — never repeat.
