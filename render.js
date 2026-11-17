const { chromium } = require('playwright'); const fs=require('fs');
const ROOT='/home/claude/themes/preview'; const V=process.argv[2], mode=process.argv[3];
const D='/home/claude/reels2';
const meta=JSON.parse(fs.readFileSync(`${D}/${V}.json`)); const shots=JSON.parse(fs.readFileSync(`${D}/shots.json`))[V==='wombat'?'wombat':V];
const HOT={emu:['AND LOST.','OF TANKS.”'],wombat:['CUBES.'],titicaca:['THE NAME.'],shitterton:['SH*TTERTON.','TRY STEALING THAT.'],boring:['BLAND.']}[V];
const CL={};try{for(const d of fs.readdirSync(D+'/clips'))CL[d]=fs.readdirSync(D+'/clips/'+d).length}catch(e){}
const CFG={kind:meta.kind,story:meta.story,shots:shots.map(s=>[s[0],s[1],s[3]]),hot:HOT,clips:CL};
(async()=>{
  const b=await chromium.launch(); const ctx=await b.newContext({viewport:{width:1080,height:1920}});
  await ctx.route('http://localhost:8811/**', r=>{ const p=ROOT+decodeURIComponent(new URL(r.request().url()).pathname);
    try{ r.fulfill({status:200,contentType:p.endsWith('.css')?'text/css':'font/woff2',headers:{'Access-Control-Allow-Origin':'*'},body:fs.readFileSync(p)}) }catch(e){ r.fulfill({status:404,body:''}) } });
  const html=fs.readFileSync(`${D}/tpl.html`,'utf8').replace('__TIMELINE__',fs.readFileSync(`${D}/tl_${V}.json`,'utf8')).replace('__CFG__',JSON.stringify(CFG));
  await ctx.route('http://localhost:8812/**', r=>{ const f=D+decodeURIComponent(new URL(r.request().url()).pathname); try{ r.fulfill({status:200,contentType:f.endsWith('.png')?'image/png':f.endsWith('.jpg')?'image/jpeg':'text/html',body:fs.readFileSync(f)}) }catch(e){ r.fulfill({status:404,body:''}) } });
  const p=await ctx.newPage(); p.on('pageerror',e=>console.log('ERR',e.message));
  await p.route('http://localhost:8812/ad.html', r=>r.fulfill({status:200,contentType:'text/html',body:html})); await p.goto('http://localhost:8812/ad.html',{waitUntil:'load'}); await p.evaluate(()=>document.fonts.ready);
  for (const f of ['800 50px Outfit','700 50px Oswald','800 30px "Nunito Sans"']) await p.evaluate(f=>document.fonts.load(f),f);
  // preload theme shots
  await p.evaluate(()=>Promise.all(['dewy','fetch','ember','vigor','lustre','roast','drape','snug','nook','flux'].map(n=>new Promise(r=>{const i=new Image();i.onload=i.onerror=r;i.src=`img/${n}-mobile.jpg`}))));
  await p.waitForTimeout(400);
  if(mode==='sample'){ fs.mkdirSync(`${D}/s`,{recursive:true}); for(const t of process.argv[4].split(',').map(Number)){ await p.evaluate(t=>render(t),t); await p.evaluate(()=>window.ready()); await p.waitForTimeout(60); await p.screenshot({path:`${D}/s/${V}_${t.toFixed(2)}.jpg`,type:'jpeg',quality:80}); } }
  else { const a=+process.argv[4], bb=+process.argv[5]; const FD=`${D}/f_${V}`; fs.mkdirSync(FD,{recursive:true});
    for(let i=a;i<bb;i++){ await p.evaluate(t=>render(t),i/30); await p.evaluate(()=>window.ready()); await p.screenshot({path:`${FD}/${String(i).padStart(5,'0')}.jpg`,type:'jpeg',quality:92}); } }
  await b.close();
})();
