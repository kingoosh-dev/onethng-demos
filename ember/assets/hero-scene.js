/* Ember hero scene. Built with three.js (MIT License, Copyright 2010-2024 three.js authors). */
(()=>{var Wa="169";var ql=0,fo=1,Yl=2;var pl=1,Zl=2,Qe=3,mn=0,me=1,ze=2,fn=0,ni=1,ai=2,po=3,mo=4,Jl=5,Cn=100,$l=101,Kl=102,Ql=103,jl=104,tc=200,ec=201,nc=202,ic=203,Ar=204,Tr=205,sc=206,rc=207,ac=208,oc=209,lc=210,cc=211,hc=212,uc=213,dc=214,Cr=0,Rr=1,Pr=2,oi=3,Ir=4,Lr=5,Ur=6,Dr=7,ml=0,fc=1,pc=2,pn=0,mc=1,gc=2,_c=3,Xa=4,xc=5,vc=6,yc=7;var gl=300,li=301,ci=302,Nr=303,Fr=304,Bs=306,Or=1e3,In=1001,Br=1002,Le=1003,Mc=1004;var ki=1005;var ke=1006,Ys=1007;var Ln=1008;var nn=1009,_l=1010,xl=1011,Pi=1012,qa=1013,Un=1014,tn=1015,Ni=1016,Ya=1017,Za=1018,hi=1020,vl=35902,yl=1021,Ml=1022,Ve=1023,Sl=1024,bl=1025,ii=1026,ui=1027,wl=1028,Ja=1029,El=1030,$a=1031;var Ka=1033,hs=33776,us=33777,ds=33778,fs=33779,zr=35840,kr=35841,Vr=35842,Hr=35843,Gr=36196,Wr=37492,Xr=37496,qr=37808,Yr=37809,Zr=37810,Jr=37811,$r=37812,Kr=37813,Qr=37814,jr=37815,ta=37816,ea=37817,na=37818,ia=37819,sa=37820,ra=37821,ps=36492,aa=36494,oa=36495,Al=36283,la=36284,ca=36285,ha=36286;var gs=2300,ua=2301,Zs=2302,go=2400,_o=2401,xo=2402;var Sc=3200,bc=3201;var Tl=0,wc=1,dn="",Ie="srgb",vn="srgb-linear",Qa="display-p3",zs="display-p3-linear",_s="linear",jt="srgb",xs="rec709",vs="p3";var Vn=7680;var vo=519,Ec=512,Ac=513,Tc=514,Cl=515,Cc=516,Rc=517,Pc=518,Ic=519,yo=35044;var Mo="300 es",en=2e3,ys=2001,gn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},de=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Js=Math.PI/180,da=180/Math.PI;function Fi(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(de[i&255]+de[i>>8&255]+de[i>>16&255]+de[i>>24&255]+"-"+de[t&255]+de[t>>8&255]+"-"+de[t>>16&15|64]+de[t>>24&255]+"-"+de[e&63|128]+de[e>>8&255]+"-"+de[e>>16&255]+de[e>>24&255]+de[n&255]+de[n>>8&255]+de[n>>16&255]+de[n>>24&255]).toLowerCase()}function _e(i,t,e){return Math.max(t,Math.min(e,i))}function Lc(i,t){return(i%t+t)%t}function $s(i,t,e){return(1-e)*i+e*t}function Mi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Me(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Ut=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(_e(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Lt=class i{constructor(t,e,n,s,r,a,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],f=n[7],u=n[2],m=n[5],_=n[8],y=s[0],d=s[3],p=s[6],E=s[1],S=s[4],w=s[7],D=s[2],C=s[5],A=s[8];return r[0]=a*y+o*E+l*D,r[3]=a*d+o*S+l*C,r[6]=a*p+o*w+l*A,r[1]=c*y+h*E+f*D,r[4]=c*d+h*S+f*C,r[7]=c*p+h*w+f*A,r[2]=u*y+m*E+_*D,r[5]=u*d+m*S+_*C,r[8]=u*p+m*w+_*A,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],f=h*a-o*c,u=o*l-h*r,m=c*r-a*l,_=e*f+n*u+s*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/_;return t[0]=f*y,t[1]=(s*c-h*n)*y,t[2]=(o*n-s*a)*y,t[3]=u*y,t[4]=(h*e-s*l)*y,t[5]=(s*r-o*e)*y,t[6]=m*y,t[7]=(n*l-c*e)*y,t[8]=(a*e-n*r)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Ks.makeScale(t,e)),this}rotate(t){return this.premultiply(Ks.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ks.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Ks=new Lt;function Rl(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Ms(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Uc(){let i=Ms("canvas");return i.style.display="block",i}var So={};function ms(i){i in So||(So[i]=!0,console.warn(i))}function Dc(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Nc(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Fc(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var bo=new Lt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),wo=new Lt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Si={[vn]:{transfer:_s,primaries:xs,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[Ie]:{transfer:jt,primaries:xs,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[zs]:{transfer:_s,primaries:vs,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(wo),fromReference:i=>i.applyMatrix3(bo)},[Qa]:{transfer:jt,primaries:vs,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(wo),fromReference:i=>i.applyMatrix3(bo).convertLinearToSRGB()}},Oc=new Set([vn,zs]),Yt={enabled:!0,_workingColorSpace:vn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Oc.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;let n=Si[t].toReference,s=Si[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return Si[i].primaries},getTransfer:function(i){return i===dn?_s:Si[i].transfer},getLuminanceCoefficients:function(i,t=this._workingColorSpace){return i.fromArray(Si[t].luminanceCoefficients)}};function si(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Qs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Hn,fa=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Hn===void 0&&(Hn=Ms("canvas")),Hn.width=t.width,Hn.height=t.height;let n=Hn.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Hn}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=Ms("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=si(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(si(e[n]/255)*255):e[n]=si(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Bc=0,Ss=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Bc++}),this.uuid=Fi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(js(s[a].image)):r.push(js(s[a]))}else r=js(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function js(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?fa.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var zc=0,Ue=class i extends gn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=In,s=In,r=ke,a=Ln,o=Ve,l=nn,c=i.DEFAULT_ANISOTROPY,h=dn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:zc++}),this.uuid=Fi(),this.name="",this.source=new Ss(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ut(0,0),this.repeat=new Ut(1,1),this.center=new Ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Lt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==gl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Or:t.x=t.x-Math.floor(t.x);break;case In:t.x=t.x<0?0:1;break;case Br:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Or:t.y=t.y-Math.floor(t.y);break;case In:t.y=t.y<0?0:1;break;case Br:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Ue.DEFAULT_IMAGE=null;Ue.DEFAULT_MAPPING=gl;Ue.DEFAULT_ANISOTROPY=1;var Jt=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],f=l[8],u=l[1],m=l[5],_=l[9],y=l[2],d=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(f-y)<.01&&Math.abs(_-d)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+y)<.1&&Math.abs(_+d)<.1&&Math.abs(c+m+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let S=(c+1)/2,w=(m+1)/2,D=(p+1)/2,C=(h+u)/4,A=(f+y)/4,R=(_+d)/4;return S>w&&S>D?S<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(S),s=C/n,r=A/n):w>D?w<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(w),n=C/s,r=R/s):D<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(D),n=A/r,s=R/r),this.set(n,s,r,e),this}let E=Math.sqrt((d-_)*(d-_)+(f-y)*(f-y)+(u-h)*(u-h));return Math.abs(E)<.001&&(E=1),this.x=(d-_)/E,this.y=(f-y)/E,this.z=(u-h)/E,this.w=Math.acos((c+m+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},pa=class extends gn{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Jt(0,0,t,e),this.scissorTest=!1,this.viewport=new Jt(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ke,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new Ue(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Ss(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},sn=class extends pa{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},bs=class extends Ue{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Le,this.minFilter=Le,this.wrapR=In,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var ma=class extends Ue{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Le,this.minFilter=Le,this.wrapR=In,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var _n=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],f=n[s+3],u=r[a+0],m=r[a+1],_=r[a+2],y=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f;return}if(o===1){t[e+0]=u,t[e+1]=m,t[e+2]=_,t[e+3]=y;return}if(f!==y||l!==u||c!==m||h!==_){let d=1-o,p=l*u+c*m+h*_+f*y,E=p>=0?1:-1,S=1-p*p;if(S>Number.EPSILON){let D=Math.sqrt(S),C=Math.atan2(D,p*E);d=Math.sin(d*C)/D,o=Math.sin(o*C)/D}let w=o*E;if(l=l*d+u*w,c=c*d+m*w,h=h*d+_*w,f=f*d+y*w,d===1-o){let D=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=D,c*=D,h*=D,f*=D}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],f=r[a],u=r[a+1],m=r[a+2],_=r[a+3];return t[e]=o*_+h*f+l*m-c*u,t[e+1]=l*_+h*u+c*f-o*m,t[e+2]=c*_+h*m+o*u-l*f,t[e+3]=h*_-o*f-l*u-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),f=o(r/2),u=l(n/2),m=l(s/2),_=l(r/2);switch(a){case"XYZ":this._x=u*h*f+c*m*_,this._y=c*m*f-u*h*_,this._z=c*h*_+u*m*f,this._w=c*h*f-u*m*_;break;case"YXZ":this._x=u*h*f+c*m*_,this._y=c*m*f-u*h*_,this._z=c*h*_-u*m*f,this._w=c*h*f+u*m*_;break;case"ZXY":this._x=u*h*f-c*m*_,this._y=c*m*f+u*h*_,this._z=c*h*_+u*m*f,this._w=c*h*f-u*m*_;break;case"ZYX":this._x=u*h*f-c*m*_,this._y=c*m*f+u*h*_,this._z=c*h*_-u*m*f,this._w=c*h*f+u*m*_;break;case"YZX":this._x=u*h*f+c*m*_,this._y=c*m*f+u*h*_,this._z=c*h*_-u*m*f,this._w=c*h*f-u*m*_;break;case"XZY":this._x=u*h*f-c*m*_,this._y=c*m*f-u*h*_,this._z=c*h*_+u*m*f,this._w=c*h*f+u*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],f=e[10],u=n+o+f;if(u>0){let m=.5/Math.sqrt(u+1);this._w=.25/m,this._x=(h-l)*m,this._y=(r-c)*m,this._z=(a-s)*m}else if(n>o&&n>f){let m=2*Math.sqrt(1+n-o-f);this._w=(h-l)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+c)/m}else if(o>f){let m=2*Math.sqrt(1+o-n-f);this._w=(r-c)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(l+h)/m}else{let m=2*Math.sqrt(1+f-n-o);this._w=(a-s)/m,this._x=(r+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(_e(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let m=1-e;return this._w=m*a+e*this._w,this._x=m*n+e*this._x,this._y=m*s+e*this._y,this._z=m*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),f=Math.sin((1-e)*h)/c,u=Math.sin(e*h)/c;return this._w=a*f+this._w*u,this._x=n*f+this._x*u,this._y=s*f+this._y*u,this._z=r*f+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},U=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Eo.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Eo.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),f=2*(r*n-a*e);return this.x=e+l*c+a*f-o*h,this.y=n+l*h+o*c-r*f,this.z=s+l*f+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return tr.copy(this).projectOnVector(t),this.sub(tr)}reflect(t){return this.sub(tr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(_e(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},tr=new U,Eo=new _n,Dn=class{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Fe.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Fe.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Fe.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Fe):Fe.fromBufferAttribute(r,a),Fe.applyMatrix4(t.matrixWorld),this.expandByPoint(Fe);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Vi.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Vi.copy(n.boundingBox)),Vi.applyMatrix4(t.matrixWorld),this.union(Vi)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Fe),Fe.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(bi),Hi.subVectors(this.max,bi),Gn.subVectors(t.a,bi),Wn.subVectors(t.b,bi),Xn.subVectors(t.c,bi),an.subVectors(Wn,Gn),on.subVectors(Xn,Wn),Mn.subVectors(Gn,Xn);let e=[0,-an.z,an.y,0,-on.z,on.y,0,-Mn.z,Mn.y,an.z,0,-an.x,on.z,0,-on.x,Mn.z,0,-Mn.x,-an.y,an.x,0,-on.y,on.x,0,-Mn.y,Mn.x,0];return!er(e,Gn,Wn,Xn,Hi)||(e=[1,0,0,0,1,0,0,0,1],!er(e,Gn,Wn,Xn,Hi))?!1:(Gi.crossVectors(an,on),e=[Gi.x,Gi.y,Gi.z],er(e,Gn,Wn,Xn,Hi))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Fe).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Fe).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ye[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ye[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ye[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ye[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ye[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ye[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ye[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ye[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ye),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Ye=[new U,new U,new U,new U,new U,new U,new U,new U],Fe=new U,Vi=new Dn,Gn=new U,Wn=new U,Xn=new U,an=new U,on=new U,Mn=new U,bi=new U,Hi=new U,Gi=new U,Sn=new U;function er(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Sn.fromArray(i,r);let o=s.x*Math.abs(Sn.x)+s.y*Math.abs(Sn.y)+s.z*Math.abs(Sn.z),l=t.dot(Sn),c=e.dot(Sn),h=n.dot(Sn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var kc=new Dn,wi=new U,nr=new U,di=class{constructor(t=new U,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):kc.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;wi.subVectors(t,this.center);let e=wi.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(wi,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(nr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(wi.copy(t.center).add(nr)),this.expandByPoint(wi.copy(t.center).sub(nr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Ze=new U,ir=new U,Wi=new U,ln=new U,sr=new U,Xi=new U,rr=new U,ws=class{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ze)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Ze.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ze.copy(this.origin).addScaledVector(this.direction,e),Ze.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){ir.copy(t).add(e).multiplyScalar(.5),Wi.copy(e).sub(t).normalize(),ln.copy(this.origin).sub(ir);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Wi),o=ln.dot(this.direction),l=-ln.dot(Wi),c=ln.lengthSq(),h=Math.abs(1-a*a),f,u,m,_;if(h>0)if(f=a*l-o,u=a*o-l,_=r*h,f>=0)if(u>=-_)if(u<=_){let y=1/h;f*=y,u*=y,m=f*(f+a*u+2*o)+u*(a*f+u+2*l)+c}else u=r,f=Math.max(0,-(a*u+o)),m=-f*f+u*(u+2*l)+c;else u=-r,f=Math.max(0,-(a*u+o)),m=-f*f+u*(u+2*l)+c;else u<=-_?(f=Math.max(0,-(-a*r+o)),u=f>0?-r:Math.min(Math.max(-r,-l),r),m=-f*f+u*(u+2*l)+c):u<=_?(f=0,u=Math.min(Math.max(-r,-l),r),m=u*(u+2*l)+c):(f=Math.max(0,-(a*r+o)),u=f>0?r:Math.min(Math.max(-r,-l),r),m=-f*f+u*(u+2*l)+c);else u=a>0?-r:r,f=Math.max(0,-(a*u+o)),m=-f*f+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(ir).addScaledVector(Wi,u),m}intersectSphere(t,e){Ze.subVectors(t.center,this.origin);let n=Ze.dot(this.direction),s=Ze.dot(Ze)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(t.min.z-u.z)*f,l=(t.max.z-u.z)*f):(o=(t.max.z-u.z)*f,l=(t.min.z-u.z)*f),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Ze)!==null}intersectTriangle(t,e,n,s,r){sr.subVectors(e,t),Xi.subVectors(n,t),rr.crossVectors(sr,Xi);let a=this.direction.dot(rr),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ln.subVectors(this.origin,t);let l=o*this.direction.dot(Xi.crossVectors(ln,Xi));if(l<0)return null;let c=o*this.direction.dot(sr.cross(ln));if(c<0||l+c>a)return null;let h=-o*ln.dot(rr);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ee=class i{constructor(t,e,n,s,r,a,o,l,c,h,f,u,m,_,y,d){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,f,u,m,_,y,d)}set(t,e,n,s,r,a,o,l,c,h,f,u,m,_,y,d){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=f,p[14]=u,p[3]=m,p[7]=_,p[11]=y,p[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/qn.setFromMatrixColumn(t,0).length(),r=1/qn.setFromMatrixColumn(t,1).length(),a=1/qn.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){let u=a*h,m=a*f,_=o*h,y=o*f;e[0]=l*h,e[4]=-l*f,e[8]=c,e[1]=m+_*c,e[5]=u-y*c,e[9]=-o*l,e[2]=y-u*c,e[6]=_+m*c,e[10]=a*l}else if(t.order==="YXZ"){let u=l*h,m=l*f,_=c*h,y=c*f;e[0]=u+y*o,e[4]=_*o-m,e[8]=a*c,e[1]=a*f,e[5]=a*h,e[9]=-o,e[2]=m*o-_,e[6]=y+u*o,e[10]=a*l}else if(t.order==="ZXY"){let u=l*h,m=l*f,_=c*h,y=c*f;e[0]=u-y*o,e[4]=-a*f,e[8]=_+m*o,e[1]=m+_*o,e[5]=a*h,e[9]=y-u*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let u=a*h,m=a*f,_=o*h,y=o*f;e[0]=l*h,e[4]=_*c-m,e[8]=u*c+y,e[1]=l*f,e[5]=y*c+u,e[9]=m*c-_,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let u=a*l,m=a*c,_=o*l,y=o*c;e[0]=l*h,e[4]=y-u*f,e[8]=_*f+m,e[1]=f,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=m*f+_,e[10]=u-y*f}else if(t.order==="XZY"){let u=a*l,m=a*c,_=o*l,y=o*c;e[0]=l*h,e[4]=-f,e[8]=c*h,e[1]=u*f+y,e[5]=a*h,e[9]=m*f-_,e[2]=_*f-m,e[6]=o*h,e[10]=y*f+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Vc,t,Hc)}lookAt(t,e,n){let s=this.elements;return Ae.subVectors(t,e),Ae.lengthSq()===0&&(Ae.z=1),Ae.normalize(),cn.crossVectors(n,Ae),cn.lengthSq()===0&&(Math.abs(n.z)===1?Ae.x+=1e-4:Ae.z+=1e-4,Ae.normalize(),cn.crossVectors(n,Ae)),cn.normalize(),qi.crossVectors(Ae,cn),s[0]=cn.x,s[4]=qi.x,s[8]=Ae.x,s[1]=cn.y,s[5]=qi.y,s[9]=Ae.y,s[2]=cn.z,s[6]=qi.z,s[10]=Ae.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],f=n[5],u=n[9],m=n[13],_=n[2],y=n[6],d=n[10],p=n[14],E=n[3],S=n[7],w=n[11],D=n[15],C=s[0],A=s[4],R=s[8],G=s[12],g=s[1],M=s[5],k=s[9],B=s[13],H=s[2],$=s[6],z=s[10],Y=s[14],V=s[3],nt=s[7],st=s[11],et=s[15];return r[0]=a*C+o*g+l*H+c*V,r[4]=a*A+o*M+l*$+c*nt,r[8]=a*R+o*k+l*z+c*st,r[12]=a*G+o*B+l*Y+c*et,r[1]=h*C+f*g+u*H+m*V,r[5]=h*A+f*M+u*$+m*nt,r[9]=h*R+f*k+u*z+m*st,r[13]=h*G+f*B+u*Y+m*et,r[2]=_*C+y*g+d*H+p*V,r[6]=_*A+y*M+d*$+p*nt,r[10]=_*R+y*k+d*z+p*st,r[14]=_*G+y*B+d*Y+p*et,r[3]=E*C+S*g+w*H+D*V,r[7]=E*A+S*M+w*$+D*nt,r[11]=E*R+S*k+w*z+D*st,r[15]=E*G+S*B+w*Y+D*et,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],f=t[6],u=t[10],m=t[14],_=t[3],y=t[7],d=t[11],p=t[15];return _*(+r*l*f-s*c*f-r*o*u+n*c*u+s*o*m-n*l*m)+y*(+e*l*m-e*c*u+r*a*u-s*a*m+s*c*h-r*l*h)+d*(+e*c*f-e*o*m-r*a*f+n*a*m+r*o*h-n*c*h)+p*(-s*o*h-e*l*f+e*o*u+s*a*f-n*a*u+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],f=t[9],u=t[10],m=t[11],_=t[12],y=t[13],d=t[14],p=t[15],E=f*d*c-y*u*c+y*l*m-o*d*m-f*l*p+o*u*p,S=_*u*c-h*d*c-_*l*m+a*d*m+h*l*p-a*u*p,w=h*y*c-_*f*c+_*o*m-a*y*m-h*o*p+a*f*p,D=_*f*l-h*y*l-_*o*u+a*y*u+h*o*d-a*f*d,C=e*E+n*S+s*w+r*D;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/C;return t[0]=E*A,t[1]=(y*u*r-f*d*r-y*s*m+n*d*m+f*s*p-n*u*p)*A,t[2]=(o*d*r-y*l*r+y*s*c-n*d*c-o*s*p+n*l*p)*A,t[3]=(f*l*r-o*u*r-f*s*c+n*u*c+o*s*m-n*l*m)*A,t[4]=S*A,t[5]=(h*d*r-_*u*r+_*s*m-e*d*m-h*s*p+e*u*p)*A,t[6]=(_*l*r-a*d*r-_*s*c+e*d*c+a*s*p-e*l*p)*A,t[7]=(a*u*r-h*l*r+h*s*c-e*u*c-a*s*m+e*l*m)*A,t[8]=w*A,t[9]=(_*f*r-h*y*r-_*n*m+e*y*m+h*n*p-e*f*p)*A,t[10]=(a*y*r-_*o*r+_*n*c-e*y*c-a*n*p+e*o*p)*A,t[11]=(h*o*r-a*f*r-h*n*c+e*f*c+a*n*m-e*o*m)*A,t[12]=D*A,t[13]=(h*y*s-_*f*s+_*n*u-e*y*u-h*n*d+e*f*d)*A,t[14]=(_*o*s-a*y*s-_*n*l+e*y*l+a*n*d-e*o*d)*A,t[15]=(a*f*s-h*o*s+h*n*l-e*f*l-a*n*u+e*o*u)*A,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,f=o+o,u=r*c,m=r*h,_=r*f,y=a*h,d=a*f,p=o*f,E=l*c,S=l*h,w=l*f,D=n.x,C=n.y,A=n.z;return s[0]=(1-(y+p))*D,s[1]=(m+w)*D,s[2]=(_-S)*D,s[3]=0,s[4]=(m-w)*C,s[5]=(1-(u+p))*C,s[6]=(d+E)*C,s[7]=0,s[8]=(_+S)*A,s[9]=(d-E)*A,s[10]=(1-(u+y))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=qn.set(s[0],s[1],s[2]).length(),a=qn.set(s[4],s[5],s[6]).length(),o=qn.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Oe.copy(this);let c=1/r,h=1/a,f=1/o;return Oe.elements[0]*=c,Oe.elements[1]*=c,Oe.elements[2]*=c,Oe.elements[4]*=h,Oe.elements[5]*=h,Oe.elements[6]*=h,Oe.elements[8]*=f,Oe.elements[9]*=f,Oe.elements[10]*=f,e.setFromRotationMatrix(Oe),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=en){let l=this.elements,c=2*r/(e-t),h=2*r/(n-s),f=(e+t)/(e-t),u=(n+s)/(n-s),m,_;if(o===en)m=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===ys)m=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=en){let l=this.elements,c=1/(e-t),h=1/(n-s),f=1/(a-r),u=(e+t)*c,m=(n+s)*h,_,y;if(o===en)_=(a+r)*f,y=-2*f;else if(o===ys)_=r*f,y=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=y,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},qn=new U,Oe=new ee,Vc=new U(0,0,0),Hc=new U(1,1,1),cn=new U,qi=new U,Ae=new U,Ao=new ee,To=new _n,Xe=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],f=s[2],u=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(_e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-_e(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(_e(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-_e(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(_e(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-_e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ao.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ao,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return To.setFromEuler(this),this.setFromQuaternion(To,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Xe.DEFAULT_ORDER="XYZ";var Es=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Gc=0,Co=new U,Yn=new _n,Je=new ee,Yi=new U,Ei=new U,Wc=new U,Xc=new _n,Ro=new U(1,0,0),Po=new U(0,1,0),Io=new U(0,0,1),Lo={type:"added"},qc={type:"removed"},Zn={type:"childadded",child:null},ar={type:"childremoved",child:null},Se=class i extends gn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Gc++}),this.uuid=Fi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new U,e=new Xe,n=new _n,s=new U(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ee},normalMatrix:{value:new Lt}}),this.matrix=new ee,this.matrixWorld=new ee,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Es,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Yn.setFromAxisAngle(t,e),this.quaternion.multiply(Yn),this}rotateOnWorldAxis(t,e){return Yn.setFromAxisAngle(t,e),this.quaternion.premultiply(Yn),this}rotateX(t){return this.rotateOnAxis(Ro,t)}rotateY(t){return this.rotateOnAxis(Po,t)}rotateZ(t){return this.rotateOnAxis(Io,t)}translateOnAxis(t,e){return Co.copy(t).applyQuaternion(this.quaternion),this.position.add(Co.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ro,t)}translateY(t){return this.translateOnAxis(Po,t)}translateZ(t){return this.translateOnAxis(Io,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Je.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Yi.copy(t):Yi.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Ei.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Je.lookAt(Ei,Yi,this.up):Je.lookAt(Yi,Ei,this.up),this.quaternion.setFromRotationMatrix(Je),s&&(Je.extractRotation(s.matrixWorld),Yn.setFromRotationMatrix(Je),this.quaternion.premultiply(Yn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Lo),Zn.child=t,this.dispatchEvent(Zn),Zn.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(qc),ar.child=t,this.dispatchEvent(ar),ar.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Je.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Je.multiply(t.parent.matrixWorld)),t.applyMatrix4(Je),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Lo),Zn.child=t,this.dispatchEvent(Zn),Zn.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ei,t,Wc),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ei,Xc,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let f=l[c];r(t.shapes,f)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),f=a(t.shapes),u=a(t.skeletons),m=a(t.animations),_=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),u.length>0&&(n.skeletons=u),m.length>0&&(n.animations=m),_.length>0&&(n.nodes=_)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Se.DEFAULT_UP=new U(0,1,0);Se.DEFAULT_MATRIX_AUTO_UPDATE=!0;Se.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Be=new U,$e=new U,or=new U,Ke=new U,Jn=new U,$n=new U,Uo=new U,lr=new U,cr=new U,hr=new U,ur=new Jt,dr=new Jt,fr=new Jt,Rn=class i{constructor(t=new U,e=new U,n=new U){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Be.subVectors(t,e),s.cross(Be);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Be.subVectors(s,e),$e.subVectors(n,e),or.subVectors(t,e);let a=Be.dot(Be),o=Be.dot($e),l=Be.dot(or),c=$e.dot($e),h=$e.dot(or),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;let u=1/f,m=(c*l-o*h)*u,_=(a*h-o*l)*u;return r.set(1-m-_,_,m)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Ke)===null?!1:Ke.x>=0&&Ke.y>=0&&Ke.x+Ke.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,Ke)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ke.x),l.addScaledVector(a,Ke.y),l.addScaledVector(o,Ke.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return ur.setScalar(0),dr.setScalar(0),fr.setScalar(0),ur.fromBufferAttribute(t,e),dr.fromBufferAttribute(t,n),fr.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(ur,r.x),a.addScaledVector(dr,r.y),a.addScaledVector(fr,r.z),a}static isFrontFacing(t,e,n,s){return Be.subVectors(n,e),$e.subVectors(t,e),Be.cross($e).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Be.subVectors(this.c,this.b),$e.subVectors(this.a,this.b),Be.cross($e).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;Jn.subVectors(s,n),$n.subVectors(r,n),lr.subVectors(t,n);let l=Jn.dot(lr),c=$n.dot(lr);if(l<=0&&c<=0)return e.copy(n);cr.subVectors(t,s);let h=Jn.dot(cr),f=$n.dot(cr);if(h>=0&&f<=h)return e.copy(s);let u=l*f-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(Jn,a);hr.subVectors(t,r);let m=Jn.dot(hr),_=$n.dot(hr);if(_>=0&&m<=_)return e.copy(r);let y=m*c-l*_;if(y<=0&&c>=0&&_<=0)return o=c/(c-_),e.copy(n).addScaledVector($n,o);let d=h*_-m*f;if(d<=0&&f-h>=0&&m-_>=0)return Uo.subVectors(r,s),o=(f-h)/(f-h+(m-_)),e.copy(s).addScaledVector(Uo,o);let p=1/(d+y+u);return a=y*p,o=u*p,e.copy(n).addScaledVector(Jn,a).addScaledVector($n,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Pl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hn={h:0,s:0,l:0},Zi={h:0,s:0,l:0};function pr(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Ct=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ie){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Yt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Yt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Yt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Yt.workingColorSpace){if(t=Lc(t,1),e=_e(e,0,1),n=_e(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=pr(a,r,t+1/3),this.g=pr(a,r,t),this.b=pr(a,r,t-1/3)}return Yt.toWorkingColorSpace(this,s),this}setStyle(t,e=Ie){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ie){let n=Pl[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=si(t.r),this.g=si(t.g),this.b=si(t.b),this}copyLinearToSRGB(t){return this.r=Qs(t.r),this.g=Qs(t.g),this.b=Qs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ie){return Yt.fromWorkingColorSpace(fe.copy(this),t),Math.round(_e(fe.r*255,0,255))*65536+Math.round(_e(fe.g*255,0,255))*256+Math.round(_e(fe.b*255,0,255))}getHexString(t=Ie){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Yt.workingColorSpace){Yt.fromWorkingColorSpace(fe.copy(this),e);let n=fe.r,s=fe.g,r=fe.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let f=a-o;switch(c=h<=.5?f/(a+o):f/(2-a-o),a){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Yt.workingColorSpace){return Yt.fromWorkingColorSpace(fe.copy(this),e),t.r=fe.r,t.g=fe.g,t.b=fe.b,t}getStyle(t=Ie){Yt.fromWorkingColorSpace(fe.copy(this),t);let e=fe.r,n=fe.g,s=fe.b;return t!==Ie?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(hn),this.setHSL(hn.h+t,hn.s+e,hn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(hn),t.getHSL(Zi);let n=$s(hn.h,Zi.h,e),s=$s(hn.s,Zi.s,e),r=$s(hn.l,Zi.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},fe=new Ct;Ct.NAMES=Pl;var Yc=0,xn=class extends gn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Yc++}),this.uuid=Fi(),this.name="",this.type="Material",this.blending=ni,this.side=mn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ar,this.blendDst=Tr,this.blendEquation=Cn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ct(0,0,0),this.blendAlpha=0,this.depthFunc=oi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=vo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Vn,this.stencilZFail=Vn,this.stencilZPass=Vn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ni&&(n.blending=this.blending),this.side!==mn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ar&&(n.blendSrc=this.blendSrc),this.blendDst!==Tr&&(n.blendDst=this.blendDst),this.blendEquation!==Cn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==oi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==vo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Vn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Vn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Vn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},fi=class extends xn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xe,this.combine=ml,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var re=new U,Ji=new Ut,xe=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=yo,this.updateRanges=[],this.gpuType=tn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ji.fromBufferAttribute(this,e),Ji.applyMatrix3(t),this.setXY(e,Ji.x,Ji.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)re.fromBufferAttribute(this,e),re.applyMatrix3(t),this.setXYZ(e,re.x,re.y,re.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)re.fromBufferAttribute(this,e),re.applyMatrix4(t),this.setXYZ(e,re.x,re.y,re.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)re.fromBufferAttribute(this,e),re.applyNormalMatrix(t),this.setXYZ(e,re.x,re.y,re.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)re.fromBufferAttribute(this,e),re.transformDirection(t),this.setXYZ(e,re.x,re.y,re.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Mi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Me(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Mi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Me(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Mi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Me(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Mi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Me(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Mi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Me(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Me(e,this.array),n=Me(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Me(e,this.array),n=Me(n,this.array),s=Me(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Me(e,this.array),n=Me(n,this.array),s=Me(s,this.array),r=Me(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==yo&&(t.usage=this.usage),t}};var As=class extends xe{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Ts=class extends xe{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var ce=class extends xe{constructor(t,e,n){super(new Float32Array(t),e,n)}},Zc=0,Pe=new ee,mr=new Se,Kn=new U,Te=new Dn,Ai=new Dn,le=new U,Ce=class i extends gn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Zc++}),this.uuid=Fi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Rl(t)?Ts:As)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Lt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Pe.makeRotationFromQuaternion(t),this.applyMatrix4(Pe),this}rotateX(t){return Pe.makeRotationX(t),this.applyMatrix4(Pe),this}rotateY(t){return Pe.makeRotationY(t),this.applyMatrix4(Pe),this}rotateZ(t){return Pe.makeRotationZ(t),this.applyMatrix4(Pe),this}translate(t,e,n){return Pe.makeTranslation(t,e,n),this.applyMatrix4(Pe),this}scale(t,e,n){return Pe.makeScale(t,e,n),this.applyMatrix4(Pe),this}lookAt(t){return mr.lookAt(t),mr.updateMatrix(),this.applyMatrix4(mr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Kn).negate(),this.translate(Kn.x,Kn.y,Kn.z),this}setFromPoints(t){let e=[];for(let n=0,s=t.length;n<s;n++){let r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new ce(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Dn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Te.setFromBufferAttribute(r),this.morphTargetsRelative?(le.addVectors(this.boundingBox.min,Te.min),this.boundingBox.expandByPoint(le),le.addVectors(this.boundingBox.max,Te.max),this.boundingBox.expandByPoint(le)):(this.boundingBox.expandByPoint(Te.min),this.boundingBox.expandByPoint(Te.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new di);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(t){let n=this.boundingSphere.center;if(Te.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Ai.setFromBufferAttribute(o),this.morphTargetsRelative?(le.addVectors(Te.min,Ai.min),Te.expandByPoint(le),le.addVectors(Te.max,Ai.max),Te.expandByPoint(le)):(Te.expandByPoint(Ai.min),Te.expandByPoint(Ai.max))}Te.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)le.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(le));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)le.fromBufferAttribute(o,c),l&&(Kn.fromBufferAttribute(t,c),le.add(Kn)),s=Math.max(s,n.distanceToSquared(le))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new xe(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let R=0;R<n.count;R++)o[R]=new U,l[R]=new U;let c=new U,h=new U,f=new U,u=new Ut,m=new Ut,_=new Ut,y=new U,d=new U;function p(R,G,g){c.fromBufferAttribute(n,R),h.fromBufferAttribute(n,G),f.fromBufferAttribute(n,g),u.fromBufferAttribute(r,R),m.fromBufferAttribute(r,G),_.fromBufferAttribute(r,g),h.sub(c),f.sub(c),m.sub(u),_.sub(u);let M=1/(m.x*_.y-_.x*m.y);isFinite(M)&&(y.copy(h).multiplyScalar(_.y).addScaledVector(f,-m.y).multiplyScalar(M),d.copy(f).multiplyScalar(m.x).addScaledVector(h,-_.x).multiplyScalar(M),o[R].add(y),o[G].add(y),o[g].add(y),l[R].add(d),l[G].add(d),l[g].add(d))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let R=0,G=E.length;R<G;++R){let g=E[R],M=g.start,k=g.count;for(let B=M,H=M+k;B<H;B+=3)p(t.getX(B+0),t.getX(B+1),t.getX(B+2))}let S=new U,w=new U,D=new U,C=new U;function A(R){D.fromBufferAttribute(s,R),C.copy(D);let G=o[R];S.copy(G),S.sub(D.multiplyScalar(D.dot(G))).normalize(),w.crossVectors(C,G);let M=w.dot(l[R])<0?-1:1;a.setXYZW(R,S.x,S.y,S.z,M)}for(let R=0,G=E.length;R<G;++R){let g=E[R],M=g.start,k=g.count;for(let B=M,H=M+k;B<H;B+=3)A(t.getX(B+0)),A(t.getX(B+1)),A(t.getX(B+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new xe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,m=n.count;u<m;u++)n.setXYZ(u,0,0,0);let s=new U,r=new U,a=new U,o=new U,l=new U,c=new U,h=new U,f=new U;if(t)for(let u=0,m=t.count;u<m;u+=3){let _=t.getX(u+0),y=t.getX(u+1),d=t.getX(u+2);s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,y),a.fromBufferAttribute(e,d),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,d),o.add(h),l.add(h),c.add(h),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(d,c.x,c.y,c.z)}else for(let u=0,m=e.count;u<m;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)le.fromBufferAttribute(t,e),le.normalize(),t.setXYZ(e,le.x,le.y,le.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,f=o.normalized,u=new c.constructor(l.length*h),m=0,_=0;for(let y=0,d=l.length;y<d;y++){o.isInterleavedBufferAttribute?m=l[y]*o.data.stride+o.offset:m=l[y]*h;for(let p=0;p<h;p++)u[_++]=c[m++]}return new xe(u,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,f=c.length;h<f;h++){let u=c[h],m=t(u,n);l.push(m)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let f=0,u=c.length;f<u;f++){let m=c[f];h.push(m.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],f=r[c];for(let u=0,m=f.length;u<m;u++)h.push(f[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Do=new ee,bn=new ws,$i=new di,No=new U,Ki=new U,Qi=new U,ji=new U,gr=new U,ts=new U,Fo=new U,es=new U,Bt=class extends Se{constructor(t=new Ce,e=new fi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){ts.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],f=r[l];h!==0&&(gr.fromBufferAttribute(f,t),a?ts.addScaledVector(gr,h):ts.addScaledVector(gr.sub(e),h))}e.add(ts)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),$i.copy(n.boundingSphere),$i.applyMatrix4(r),bn.copy(t.ray).recast(t.near),!($i.containsPoint(bn.origin)===!1&&(bn.intersectSphere($i,No)===null||bn.origin.distanceToSquared(No)>(t.far-t.near)**2))&&(Do.copy(r).invert(),bn.copy(t.ray).applyMatrix4(Do),!(n.boundingBox!==null&&bn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,bn)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,u=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,y=u.length;_<y;_++){let d=u[_],p=a[d.materialIndex],E=Math.max(d.start,m.start),S=Math.min(o.count,Math.min(d.start+d.count,m.start+m.count));for(let w=E,D=S;w<D;w+=3){let C=o.getX(w),A=o.getX(w+1),R=o.getX(w+2);s=ns(this,p,t,n,c,h,f,C,A,R),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=d.materialIndex,e.push(s))}}else{let _=Math.max(0,m.start),y=Math.min(o.count,m.start+m.count);for(let d=_,p=y;d<p;d+=3){let E=o.getX(d),S=o.getX(d+1),w=o.getX(d+2);s=ns(this,a,t,n,c,h,f,E,S,w),s&&(s.faceIndex=Math.floor(d/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,y=u.length;_<y;_++){let d=u[_],p=a[d.materialIndex],E=Math.max(d.start,m.start),S=Math.min(l.count,Math.min(d.start+d.count,m.start+m.count));for(let w=E,D=S;w<D;w+=3){let C=w,A=w+1,R=w+2;s=ns(this,p,t,n,c,h,f,C,A,R),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=d.materialIndex,e.push(s))}}else{let _=Math.max(0,m.start),y=Math.min(l.count,m.start+m.count);for(let d=_,p=y;d<p;d+=3){let E=d,S=d+1,w=d+2;s=ns(this,a,t,n,c,h,f,E,S,w),s&&(s.faceIndex=Math.floor(d/3),e.push(s))}}}};function Jc(i,t,e,n,s,r,a,o){let l;if(t.side===me?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===mn,o),l===null)return null;es.copy(o),es.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(es);return c<e.near||c>e.far?null:{distance:c,point:es.clone(),object:i}}function ns(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,Ki),i.getVertexPosition(l,Qi),i.getVertexPosition(c,ji);let h=Jc(i,t,e,n,Ki,Qi,ji,Fo);if(h){let f=new U;Rn.getBarycoord(Fo,Ki,Qi,ji,f),s&&(h.uv=Rn.getInterpolatedAttribute(s,o,l,c,f,new Ut)),r&&(h.uv1=Rn.getInterpolatedAttribute(r,o,l,c,f,new Ut)),a&&(h.normal=Rn.getInterpolatedAttribute(a,o,l,c,f,new U),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new U,materialIndex:0};Rn.getNormal(Ki,Qi,ji,u.normal),h.face=u,h.barycoord=f}return h}var Nn=class i extends Ce{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],f=[],u=0,m=0;_("z","y","x",-1,-1,n,e,t,a,r,0),_("z","y","x",1,-1,n,e,-t,a,r,1),_("x","z","y",1,1,t,n,e,s,a,2),_("x","z","y",1,-1,t,n,-e,s,a,3),_("x","y","z",1,-1,t,e,n,s,r,4),_("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ce(c,3)),this.setAttribute("normal",new ce(h,3)),this.setAttribute("uv",new ce(f,2));function _(y,d,p,E,S,w,D,C,A,R,G){let g=w/A,M=D/R,k=w/2,B=D/2,H=C/2,$=A+1,z=R+1,Y=0,V=0,nt=new U;for(let st=0;st<z;st++){let et=st*M-B;for(let Ft=0;Ft<$;Ft++){let zt=Ft*g-k;nt[y]=zt*E,nt[d]=et*S,nt[p]=H,c.push(nt.x,nt.y,nt.z),nt[y]=0,nt[d]=0,nt[p]=C>0?1:-1,h.push(nt.x,nt.y,nt.z),f.push(Ft/A),f.push(1-st/R),Y+=1}}for(let st=0;st<R;st++)for(let et=0;et<A;et++){let Ft=u+et+$*st,zt=u+et+$*(st+1),X=u+(et+1)+$*(st+1),K=u+(et+1)+$*st;l.push(Ft,zt,K),l.push(zt,X,K),V+=6}o.addGroup(m,V,G),m+=V,u+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function pi(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function ge(i){let t={};for(let e=0;e<i.length;e++){let n=pi(i[e]);for(let s in n)t[s]=n[s]}return t}function $c(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Il(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Yt.workingColorSpace}var Kc={clone:pi,merge:ge},Qc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,jc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,be=class extends xn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Qc,this.fragmentShader=jc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=pi(t.uniforms),this.uniformsGroups=$c(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Cs=class extends Se{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ee,this.projectionMatrix=new ee,this.projectionMatrixInverse=new ee,this.coordinateSystem=en}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},un=new U,Oo=new Ut,Bo=new Ut,pe=class extends Cs{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=da*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Js*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return da*2*Math.atan(Math.tan(Js*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){un.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(un.x,un.y).multiplyScalar(-t/un.z),un.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(un.x,un.y).multiplyScalar(-t/un.z)}getViewSize(t,e){return this.getViewBounds(t,Oo,Bo),e.subVectors(Bo,Oo)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Js*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Qn=-90,jn=1,ga=class extends Se{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new pe(Qn,jn,t,e);s.layers=this.layers,this.add(s);let r=new pe(Qn,jn,t,e);r.layers=this.layers,this.add(r);let a=new pe(Qn,jn,t,e);a.layers=this.layers,this.add(a);let o=new pe(Qn,jn,t,e);o.layers=this.layers,this.add(o);let l=new pe(Qn,jn,t,e);l.layers=this.layers,this.add(l);let c=new pe(Qn,jn,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===en)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ys)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,f=t.getRenderTarget(),u=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=y,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(f,u,m),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}},Rs=class extends Ue{constructor(t,e,n,s,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:li,super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},_a=class extends sn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Rs(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:ke}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Nn(5,5,5),r=new be({name:"CubemapFromEquirect",uniforms:pi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:me,blending:fn});r.uniforms.tEquirect.value=e;let a=new Bt(s,r),o=e.minFilter;return e.minFilter===Ln&&(e.minFilter=ke),new ga(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},_r=new U,th=new U,eh=new Lt,je=class{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=_r.subVectors(n,e).cross(th.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(_r),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||eh.getNormalMatrix(t),s=this.coplanarPoint(_r).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},wn=new di,is=new U,Ii=class{constructor(t=new je,e=new je,n=new je,s=new je,r=new je,a=new je){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=en){let n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],f=s[6],u=s[7],m=s[8],_=s[9],y=s[10],d=s[11],p=s[12],E=s[13],S=s[14],w=s[15];if(n[0].setComponents(l-r,u-c,d-m,w-p).normalize(),n[1].setComponents(l+r,u+c,d+m,w+p).normalize(),n[2].setComponents(l+a,u+h,d+_,w+E).normalize(),n[3].setComponents(l-a,u-h,d-_,w-E).normalize(),n[4].setComponents(l-o,u-f,d-y,w-S).normalize(),e===en)n[5].setComponents(l+o,u+f,d+y,w+S).normalize();else if(e===ys)n[5].setComponents(o,f,y,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),wn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),wn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(wn)}intersectsSprite(t){return wn.center.set(0,0,0),wn.radius=.7071067811865476,wn.applyMatrix4(t.matrixWorld),this.intersectsSphere(wn)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(is.x=s.normal.x>0?t.max.x:t.min.x,is.y=s.normal.y>0?t.max.y:t.min.y,is.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(is)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Ll(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function nh(i){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,f=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),o.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){let h=l.array,f=l.updateRanges;if(i.bindBuffer(c,o),f.length===0)i.bufferSubData(c,0,h);else{f.sort((m,_)=>m.start-_.start);let u=0;for(let m=1;m<f.length;m++){let _=f[u],y=f[m];y.start<=_.start+_.count+1?_.count=Math.max(_.count,y.start+y.count-_.start):(++u,f[u]=y)}f.length=u+1;for(let m=0,_=f.length;m<_;m++){let y=f[m];i.bufferSubData(c,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Fn=class i extends Ce{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,f=t/o,u=e/l,m=[],_=[],y=[],d=[];for(let p=0;p<h;p++){let E=p*u-a;for(let S=0;S<c;S++){let w=S*f-r;_.push(w,-E,0),y.push(0,0,1),d.push(S/o),d.push(1-p/l)}}for(let p=0;p<l;p++)for(let E=0;E<o;E++){let S=E+c*p,w=E+c*(p+1),D=E+1+c*(p+1),C=E+1+c*p;m.push(S,w,C),m.push(w,D,C)}this.setIndex(m),this.setAttribute("position",new ce(_,3)),this.setAttribute("normal",new ce(y,3)),this.setAttribute("uv",new ce(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},ih=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,sh=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,rh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ah=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,oh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,lh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ch=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,hh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,uh=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,dh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,fh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ph=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,mh=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,gh=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,_h=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,xh=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,vh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,yh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Mh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Sh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,bh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,wh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Eh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Ah=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Th=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Ch=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Rh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ph=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ih=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Lh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Uh="gl_FragColor = linearToOutputTexel( gl_FragColor );",Dh=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Nh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Fh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Oh=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Bh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,zh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,kh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Vh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Hh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Gh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Wh=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Xh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,qh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Yh=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Zh=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Jh=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,$h=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Kh=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Qh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,jh=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,tu=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,eu=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,nu=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,iu=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,su=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ru=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,au=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ou=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lu=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,cu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,hu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,uu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,du=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,pu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,mu=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,gu=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,_u=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xu=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,vu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Mu=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Su=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Eu=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Au=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Tu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Cu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ru=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Pu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Iu=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Lu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Uu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Du=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Nu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Fu=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ou=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Bu=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,zu=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ku=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Vu=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Hu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Gu=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Wu=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Xu=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,qu=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Yu=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Zu=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ju=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,$u=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Ku=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Qu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ju=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,td=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,ed=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,nd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,id=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rd=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ad=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,od=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ld=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,cd=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,hd=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,ud=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,dd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,fd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pd=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,md=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,gd=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,_d=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xd=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vd=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yd=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Md=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sd=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,bd=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,wd=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ed=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ad=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Td=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cd=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Rd=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pd=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Id=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ld=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ud=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Dd=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Nd=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,It={alphahash_fragment:ih,alphahash_pars_fragment:sh,alphamap_fragment:rh,alphamap_pars_fragment:ah,alphatest_fragment:oh,alphatest_pars_fragment:lh,aomap_fragment:ch,aomap_pars_fragment:hh,batching_pars_vertex:uh,batching_vertex:dh,begin_vertex:fh,beginnormal_vertex:ph,bsdfs:mh,iridescence_fragment:gh,bumpmap_pars_fragment:_h,clipping_planes_fragment:xh,clipping_planes_pars_fragment:vh,clipping_planes_pars_vertex:yh,clipping_planes_vertex:Mh,color_fragment:Sh,color_pars_fragment:bh,color_pars_vertex:wh,color_vertex:Eh,common:Ah,cube_uv_reflection_fragment:Th,defaultnormal_vertex:Ch,displacementmap_pars_vertex:Rh,displacementmap_vertex:Ph,emissivemap_fragment:Ih,emissivemap_pars_fragment:Lh,colorspace_fragment:Uh,colorspace_pars_fragment:Dh,envmap_fragment:Nh,envmap_common_pars_fragment:Fh,envmap_pars_fragment:Oh,envmap_pars_vertex:Bh,envmap_physical_pars_fragment:Jh,envmap_vertex:zh,fog_vertex:kh,fog_pars_vertex:Vh,fog_fragment:Hh,fog_pars_fragment:Gh,gradientmap_pars_fragment:Wh,lightmap_pars_fragment:Xh,lights_lambert_fragment:qh,lights_lambert_pars_fragment:Yh,lights_pars_begin:Zh,lights_toon_fragment:$h,lights_toon_pars_fragment:Kh,lights_phong_fragment:Qh,lights_phong_pars_fragment:jh,lights_physical_fragment:tu,lights_physical_pars_fragment:eu,lights_fragment_begin:nu,lights_fragment_maps:iu,lights_fragment_end:su,logdepthbuf_fragment:ru,logdepthbuf_pars_fragment:au,logdepthbuf_pars_vertex:ou,logdepthbuf_vertex:lu,map_fragment:cu,map_pars_fragment:hu,map_particle_fragment:uu,map_particle_pars_fragment:du,metalnessmap_fragment:fu,metalnessmap_pars_fragment:pu,morphinstance_vertex:mu,morphcolor_vertex:gu,morphnormal_vertex:_u,morphtarget_pars_vertex:xu,morphtarget_vertex:vu,normal_fragment_begin:yu,normal_fragment_maps:Mu,normal_pars_fragment:Su,normal_pars_vertex:bu,normal_vertex:wu,normalmap_pars_fragment:Eu,clearcoat_normal_fragment_begin:Au,clearcoat_normal_fragment_maps:Tu,clearcoat_pars_fragment:Cu,iridescence_pars_fragment:Ru,opaque_fragment:Pu,packing:Iu,premultiplied_alpha_fragment:Lu,project_vertex:Uu,dithering_fragment:Du,dithering_pars_fragment:Nu,roughnessmap_fragment:Fu,roughnessmap_pars_fragment:Ou,shadowmap_pars_fragment:Bu,shadowmap_pars_vertex:zu,shadowmap_vertex:ku,shadowmask_pars_fragment:Vu,skinbase_vertex:Hu,skinning_pars_vertex:Gu,skinning_vertex:Wu,skinnormal_vertex:Xu,specularmap_fragment:qu,specularmap_pars_fragment:Yu,tonemapping_fragment:Zu,tonemapping_pars_fragment:Ju,transmission_fragment:$u,transmission_pars_fragment:Ku,uv_pars_fragment:Qu,uv_pars_vertex:ju,uv_vertex:td,worldpos_vertex:ed,background_vert:nd,background_frag:id,backgroundCube_vert:sd,backgroundCube_frag:rd,cube_vert:ad,cube_frag:od,depth_vert:ld,depth_frag:cd,distanceRGBA_vert:hd,distanceRGBA_frag:ud,equirect_vert:dd,equirect_frag:fd,linedashed_vert:pd,linedashed_frag:md,meshbasic_vert:gd,meshbasic_frag:_d,meshlambert_vert:xd,meshlambert_frag:vd,meshmatcap_vert:yd,meshmatcap_frag:Md,meshnormal_vert:Sd,meshnormal_frag:bd,meshphong_vert:wd,meshphong_frag:Ed,meshphysical_vert:Ad,meshphysical_frag:Td,meshtoon_vert:Cd,meshtoon_frag:Rd,points_vert:Pd,points_frag:Id,shadow_vert:Ld,shadow_frag:Ud,sprite_vert:Dd,sprite_frag:Nd},it={common:{diffuse:{value:new Ct(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Lt},alphaMap:{value:null},alphaMapTransform:{value:new Lt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Lt}},envmap:{envMap:{value:null},envMapRotation:{value:new Lt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Lt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Lt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Lt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Lt},normalScale:{value:new Ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Lt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Lt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Lt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Lt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Lt},alphaTest:{value:0},uvTransform:{value:new Lt}},sprite:{diffuse:{value:new Ct(16777215)},opacity:{value:1},center:{value:new Ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Lt},alphaMap:{value:null},alphaMapTransform:{value:new Lt},alphaTest:{value:0}}},Ge={basic:{uniforms:ge([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.fog]),vertexShader:It.meshbasic_vert,fragmentShader:It.meshbasic_frag},lambert:{uniforms:ge([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.fog,it.lights,{emissive:{value:new Ct(0)}}]),vertexShader:It.meshlambert_vert,fragmentShader:It.meshlambert_frag},phong:{uniforms:ge([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.fog,it.lights,{emissive:{value:new Ct(0)},specular:{value:new Ct(1118481)},shininess:{value:30}}]),vertexShader:It.meshphong_vert,fragmentShader:It.meshphong_frag},standard:{uniforms:ge([it.common,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.roughnessmap,it.metalnessmap,it.fog,it.lights,{emissive:{value:new Ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:It.meshphysical_vert,fragmentShader:It.meshphysical_frag},toon:{uniforms:ge([it.common,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.gradientmap,it.fog,it.lights,{emissive:{value:new Ct(0)}}]),vertexShader:It.meshtoon_vert,fragmentShader:It.meshtoon_frag},matcap:{uniforms:ge([it.common,it.bumpmap,it.normalmap,it.displacementmap,it.fog,{matcap:{value:null}}]),vertexShader:It.meshmatcap_vert,fragmentShader:It.meshmatcap_frag},points:{uniforms:ge([it.points,it.fog]),vertexShader:It.points_vert,fragmentShader:It.points_frag},dashed:{uniforms:ge([it.common,it.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:It.linedashed_vert,fragmentShader:It.linedashed_frag},depth:{uniforms:ge([it.common,it.displacementmap]),vertexShader:It.depth_vert,fragmentShader:It.depth_frag},normal:{uniforms:ge([it.common,it.bumpmap,it.normalmap,it.displacementmap,{opacity:{value:1}}]),vertexShader:It.meshnormal_vert,fragmentShader:It.meshnormal_frag},sprite:{uniforms:ge([it.sprite,it.fog]),vertexShader:It.sprite_vert,fragmentShader:It.sprite_frag},background:{uniforms:{uvTransform:{value:new Lt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:It.background_vert,fragmentShader:It.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Lt}},vertexShader:It.backgroundCube_vert,fragmentShader:It.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:It.cube_vert,fragmentShader:It.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:It.equirect_vert,fragmentShader:It.equirect_frag},distanceRGBA:{uniforms:ge([it.common,it.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:It.distanceRGBA_vert,fragmentShader:It.distanceRGBA_frag},shadow:{uniforms:ge([it.lights,it.fog,{color:{value:new Ct(0)},opacity:{value:1}}]),vertexShader:It.shadow_vert,fragmentShader:It.shadow_frag}};Ge.physical={uniforms:ge([Ge.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Lt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Lt},clearcoatNormalScale:{value:new Ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Lt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Lt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Lt},sheen:{value:0},sheenColor:{value:new Ct(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Lt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Lt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Lt},transmissionSamplerSize:{value:new Ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Lt},attenuationDistance:{value:0},attenuationColor:{value:new Ct(0)},specularColor:{value:new Ct(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Lt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Lt},anisotropyVector:{value:new Ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Lt}}]),vertexShader:It.meshphysical_vert,fragmentShader:It.meshphysical_frag};var ss={r:0,b:0,g:0},En=new Xe,Fd=new ee;function Od(i,t,e,n,s,r,a){let o=new Ct(0),l=r===!0?0:1,c,h,f=null,u=0,m=null;function _(E){let S=E.isScene===!0?E.background:null;return S&&S.isTexture&&(S=(E.backgroundBlurriness>0?e:t).get(S)),S}function y(E){let S=!1,w=_(E);w===null?p(o,l):w&&w.isColor&&(p(w,1),S=!0);let D=i.xr.getEnvironmentBlendMode();D==="additive"?n.buffers.color.setClear(0,0,0,1,a):D==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function d(E,S){let w=_(S);w&&(w.isCubeTexture||w.mapping===Bs)?(h===void 0&&(h=new Bt(new Nn(1,1,1),new be({name:"BackgroundCubeMaterial",uniforms:pi(Ge.backgroundCube.uniforms),vertexShader:Ge.backgroundCube.vertexShader,fragmentShader:Ge.backgroundCube.fragmentShader,side:me,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(D,C,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),En.copy(S.backgroundRotation),En.x*=-1,En.y*=-1,En.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(En.y*=-1,En.z*=-1),h.material.uniforms.envMap.value=w,h.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Fd.makeRotationFromEuler(En)),h.material.toneMapped=Yt.getTransfer(w.colorSpace)!==jt,(f!==w||u!==w.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,f=w,u=w.version,m=i.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null)):w&&w.isTexture&&(c===void 0&&(c=new Bt(new Fn(2,2),new be({name:"BackgroundMaterial",uniforms:pi(Ge.background.uniforms),vertexShader:Ge.background.vertexShader,fragmentShader:Ge.background.fragmentShader,side:mn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=w,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=Yt.getTransfer(w.colorSpace)!==jt,w.matrixAutoUpdate===!0&&w.updateMatrix(),c.material.uniforms.uvTransform.value.copy(w.matrix),(f!==w||u!==w.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,f=w,u=w.version,m=i.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function p(E,S){E.getRGB(ss,Il(i)),n.buffers.color.setClear(ss.r,ss.g,ss.b,S,a)}return{getClearColor:function(){return o},setClearColor:function(E,S=1){o.set(E),l=S,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,p(o,l)},render:y,addToRenderList:d}}function Bd(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,a=!1;function o(g,M,k,B,H){let $=!1,z=f(B,k,M);r!==z&&(r=z,c(r.object)),$=m(g,B,k,H),$&&_(g,B,k,H),H!==null&&t.update(H,i.ELEMENT_ARRAY_BUFFER),($||a)&&(a=!1,w(g,M,k,B),H!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function l(){return i.createVertexArray()}function c(g){return i.bindVertexArray(g)}function h(g){return i.deleteVertexArray(g)}function f(g,M,k){let B=k.wireframe===!0,H=n[g.id];H===void 0&&(H={},n[g.id]=H);let $=H[M.id];$===void 0&&($={},H[M.id]=$);let z=$[B];return z===void 0&&(z=u(l()),$[B]=z),z}function u(g){let M=[],k=[],B=[];for(let H=0;H<e;H++)M[H]=0,k[H]=0,B[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:M,enabledAttributes:k,attributeDivisors:B,object:g,attributes:{},index:null}}function m(g,M,k,B){let H=r.attributes,$=M.attributes,z=0,Y=k.getAttributes();for(let V in Y)if(Y[V].location>=0){let st=H[V],et=$[V];if(et===void 0&&(V==="instanceMatrix"&&g.instanceMatrix&&(et=g.instanceMatrix),V==="instanceColor"&&g.instanceColor&&(et=g.instanceColor)),st===void 0||st.attribute!==et||et&&st.data!==et.data)return!0;z++}return r.attributesNum!==z||r.index!==B}function _(g,M,k,B){let H={},$=M.attributes,z=0,Y=k.getAttributes();for(let V in Y)if(Y[V].location>=0){let st=$[V];st===void 0&&(V==="instanceMatrix"&&g.instanceMatrix&&(st=g.instanceMatrix),V==="instanceColor"&&g.instanceColor&&(st=g.instanceColor));let et={};et.attribute=st,st&&st.data&&(et.data=st.data),H[V]=et,z++}r.attributes=H,r.attributesNum=z,r.index=B}function y(){let g=r.newAttributes;for(let M=0,k=g.length;M<k;M++)g[M]=0}function d(g){p(g,0)}function p(g,M){let k=r.newAttributes,B=r.enabledAttributes,H=r.attributeDivisors;k[g]=1,B[g]===0&&(i.enableVertexAttribArray(g),B[g]=1),H[g]!==M&&(i.vertexAttribDivisor(g,M),H[g]=M)}function E(){let g=r.newAttributes,M=r.enabledAttributes;for(let k=0,B=M.length;k<B;k++)M[k]!==g[k]&&(i.disableVertexAttribArray(k),M[k]=0)}function S(g,M,k,B,H,$,z){z===!0?i.vertexAttribIPointer(g,M,k,H,$):i.vertexAttribPointer(g,M,k,B,H,$)}function w(g,M,k,B){y();let H=B.attributes,$=k.getAttributes(),z=M.defaultAttributeValues;for(let Y in $){let V=$[Y];if(V.location>=0){let nt=H[Y];if(nt===void 0&&(Y==="instanceMatrix"&&g.instanceMatrix&&(nt=g.instanceMatrix),Y==="instanceColor"&&g.instanceColor&&(nt=g.instanceColor)),nt!==void 0){let st=nt.normalized,et=nt.itemSize,Ft=t.get(nt);if(Ft===void 0)continue;let zt=Ft.buffer,X=Ft.type,K=Ft.bytesPerElement,dt=X===i.INT||X===i.UNSIGNED_INT||nt.gpuType===qa;if(nt.isInterleavedBufferAttribute){let at=nt.data,bt=at.stride,yt=nt.offset;if(at.isInstancedInterleavedBuffer){for(let Dt=0;Dt<V.locationSize;Dt++)p(V.location+Dt,at.meshPerAttribute);g.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let Dt=0;Dt<V.locationSize;Dt++)d(V.location+Dt);i.bindBuffer(i.ARRAY_BUFFER,zt);for(let Dt=0;Dt<V.locationSize;Dt++)S(V.location+Dt,et/V.locationSize,X,st,bt*K,(yt+et/V.locationSize*Dt)*K,dt)}else{if(nt.isInstancedBufferAttribute){for(let at=0;at<V.locationSize;at++)p(V.location+at,nt.meshPerAttribute);g.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let at=0;at<V.locationSize;at++)d(V.location+at);i.bindBuffer(i.ARRAY_BUFFER,zt);for(let at=0;at<V.locationSize;at++)S(V.location+at,et/V.locationSize,X,st,et*K,et/V.locationSize*at*K,dt)}}else if(z!==void 0){let st=z[Y];if(st!==void 0)switch(st.length){case 2:i.vertexAttrib2fv(V.location,st);break;case 3:i.vertexAttrib3fv(V.location,st);break;case 4:i.vertexAttrib4fv(V.location,st);break;default:i.vertexAttrib1fv(V.location,st)}}}}E()}function D(){R();for(let g in n){let M=n[g];for(let k in M){let B=M[k];for(let H in B)h(B[H].object),delete B[H];delete M[k]}delete n[g]}}function C(g){if(n[g.id]===void 0)return;let M=n[g.id];for(let k in M){let B=M[k];for(let H in B)h(B[H].object),delete B[H];delete M[k]}delete n[g.id]}function A(g){for(let M in n){let k=n[M];if(k[g.id]===void 0)continue;let B=k[g.id];for(let H in B)h(B[H].object),delete B[H];delete k[g.id]}}function R(){G(),a=!0,r!==s&&(r=s,c(r.object))}function G(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:R,resetDefaultState:G,dispose:D,releaseStatesOfGeometry:C,releaseStatesOfProgram:A,initAttributes:y,enableAttribute:d,disableUnusedAttributes:E}}function zd(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,f){f!==0&&(i.drawArraysInstanced(n,c,h,f),e.update(h,n,f))}function o(c,h,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,f);let m=0;for(let _=0;_<f;_++)m+=h[_];e.update(m,n,1)}function l(c,h,f,u){if(f===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<c.length;_++)a(c[_],h[_],u[_]);else{m.multiDrawArraysInstancedWEBGL(n,c,0,h,0,u,0,f);let _=0;for(let y=0;y<f;y++)_+=h[y];for(let y=0;y<u.length;y++)e.update(_,n,u[y])}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function kd(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let A=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(A){return!(A!==Ve&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){let R=A===Ni&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==nn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==tn&&!R)}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let f=e.logarithmicDepthBuffer===!0,u=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(u===!0){let A=t.get("EXT_clip_control");A.clipControlEXT(A.LOWER_LEFT_EXT,A.ZERO_TO_ONE_EXT)}let m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),d=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),w=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),D=_>0,C=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:u,maxTextures:m,maxVertexTextures:_,maxTextureSize:y,maxCubemapSize:d,maxAttributes:p,maxVertexUniforms:E,maxVaryings:S,maxFragmentUniforms:w,vertexTextures:D,maxSamples:C}}function Vd(i){let t=this,e=null,n=0,s=!1,r=!1,a=new je,o=new Lt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){let m=f.length!==0||u||n!==0||s;return s=u,n=f.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,u){e=h(f,u,0)},this.setState=function(f,u,m){let _=f.clippingPlanes,y=f.clipIntersection,d=f.clipShadows,p=i.get(f);if(!s||_===null||_.length===0||r&&!d)r?h(null):c();else{let E=r?0:n,S=E*4,w=p.clippingState||null;l.value=w,w=h(_,u,S,m);for(let D=0;D!==S;++D)w[D]=e[D];p.clippingState=w,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(f,u,m,_){let y=f!==null?f.length:0,d=null;if(y!==0){if(d=l.value,_!==!0||d===null){let p=m+y*4,E=u.matrixWorldInverse;o.getNormalMatrix(E),(d===null||d.length<p)&&(d=new Float32Array(p));for(let S=0,w=m;S!==y;++S,w+=4)a.copy(f[S]).applyMatrix4(E,o),a.normal.toArray(d,w),d[w+3]=a.constant}l.value=d,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,d}}function Hd(i){let t=new WeakMap;function e(a,o){return o===Nr?a.mapping=li:o===Fr&&(a.mapping=ci),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===Nr||o===Fr)if(t.has(a)){let l=t.get(a).texture;return e(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new _a(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var xa=class extends Cs{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},ei=4,zo=[.125,.215,.35,.446,.526,.582],Pn=20,xr=new xa,ko=new Ct,vr=null,yr=0,Mr=0,Sr=!1,Tn=(1+Math.sqrt(5))/2,ti=1/Tn,Vo=[new U(-Tn,ti,0),new U(Tn,ti,0),new U(-ti,0,Tn),new U(ti,0,Tn),new U(0,Tn,-ti),new U(0,Tn,ti),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)],mi=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){vr=this._renderer.getRenderTarget(),yr=this._renderer.getActiveCubeFace(),Mr=this._renderer.getActiveMipmapLevel(),Sr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Wo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Go(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(vr,yr,Mr),this._renderer.xr.enabled=Sr,t.scissorTest=!1,rs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===li||t.mapping===ci?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),vr=this._renderer.getRenderTarget(),yr=this._renderer.getActiveCubeFace(),Mr=this._renderer.getActiveMipmapLevel(),Sr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:ke,minFilter:ke,generateMipmaps:!1,type:Ni,format:Ve,colorSpace:vn,depthBuffer:!1},s=Ho(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ho(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Gd(r)),this._blurMaterial=Wd(r,t,e)}return s}_compileMaterial(t){let e=new Bt(this._lodPlanes[0],t);this._renderer.compile(e,xr)}_sceneToCubeUV(t,e,n,s){let o=new pe(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,u=h.toneMapping;h.getClearColor(ko),h.toneMapping=pn,h.autoClear=!1;let m=new fi({name:"PMREM.Background",side:me,depthWrite:!1,depthTest:!1}),_=new Bt(new Nn,m),y=!1,d=t.background;d?d.isColor&&(m.color.copy(d),t.background=null,y=!0):(m.color.copy(ko),y=!0);for(let p=0;p<6;p++){let E=p%3;E===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):E===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));let S=this._cubeSize;rs(s,E*S,p>2?S:0,S,S),h.setRenderTarget(s),y&&h.render(_,o),h.render(t,o)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=u,h.autoClear=f,t.background=d}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===li||t.mapping===ci;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Wo()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Go());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new Bt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;rs(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,xr)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Vo[(s-r-1)%Vo.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,f=new Bt(this._lodPlanes[s],c),u=c.uniforms,m=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Pn-1),y=r/_,d=isFinite(r)?1+Math.floor(h*y):Pn;d>Pn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${Pn}`);let p=[],E=0;for(let A=0;A<Pn;++A){let R=A/y,G=Math.exp(-R*R/2);p.push(G),A===0?E+=G:A<d&&(E+=2*G)}for(let A=0;A<p.length;A++)p[A]=p[A]/E;u.envMap.value=t.texture,u.samples.value=d,u.weights.value=p,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);let{_lodMax:S}=this;u.dTheta.value=_,u.mipInt.value=S-n;let w=this._sizeLods[s],D=3*w*(s>S-ei?s-S+ei:0),C=4*(this._cubeSize-w);rs(e,D,C,3*w,2*w),l.setRenderTarget(e),l.render(f,xr)}};function Gd(i){let t=[],e=[],n=[],s=i,r=i-ei+1+zo.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);e.push(o);let l=1/o;a>i-ei?l=zo[a-i+ei-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),h=-c,f=1+c,u=[h,h,f,h,f,f,h,h,f,f,h,f],m=6,_=6,y=3,d=2,p=1,E=new Float32Array(y*_*m),S=new Float32Array(d*_*m),w=new Float32Array(p*_*m);for(let C=0;C<m;C++){let A=C%3*2/3-1,R=C>2?0:-1,G=[A,R,0,A+2/3,R,0,A+2/3,R+1,0,A,R,0,A+2/3,R+1,0,A,R+1,0];E.set(G,y*_*C),S.set(u,d*_*C);let g=[C,C,C,C,C,C];w.set(g,p*_*C)}let D=new Ce;D.setAttribute("position",new xe(E,y)),D.setAttribute("uv",new xe(S,d)),D.setAttribute("faceIndex",new xe(w,p)),t.push(D),s>ei&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Ho(i,t,e){let n=new sn(i,t,e);return n.texture.mapping=Bs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function rs(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Wd(i,t,e){let n=new Float32Array(Pn),s=new U(0,1,0);return new be({name:"SphericalGaussianBlur",defines:{n:Pn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ja(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:fn,depthTest:!1,depthWrite:!1})}function Go(){return new be({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ja(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:fn,depthTest:!1,depthWrite:!1})}function Wo(){return new be({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ja(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:fn,depthTest:!1,depthWrite:!1})}function ja(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Xd(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===Nr||l===Fr,h=l===li||l===ci;if(c||h){let f=t.get(o),u=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==u)return e===null&&(e=new mi(i)),f=c?e.fromEquirectangular(o,f):e.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,t.set(o,f),f.texture;if(f!==void 0)return f.texture;{let m=o.image;return c&&m&&m.height>0||h&&m&&s(m)?(e===null&&(e=new mi(i)),f=c?e.fromEquirectangular(o):e.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,t.set(o,f),o.addEventListener("dispose",r),f.texture):null}}}return o}function s(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function qd(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&ms("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Yd(i,t,e,n){let s={},r=new WeakMap;function a(f){let u=f.target;u.index!==null&&t.remove(u.index);for(let _ in u.attributes)t.remove(u.attributes[_]);for(let _ in u.morphAttributes){let y=u.morphAttributes[_];for(let d=0,p=y.length;d<p;d++)t.remove(y[d])}u.removeEventListener("dispose",a),delete s[u.id];let m=r.get(u);m&&(t.remove(m),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(f,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,e.memory.geometries++),u}function l(f){let u=f.attributes;for(let _ in u)t.update(u[_],i.ARRAY_BUFFER);let m=f.morphAttributes;for(let _ in m){let y=m[_];for(let d=0,p=y.length;d<p;d++)t.update(y[d],i.ARRAY_BUFFER)}}function c(f){let u=[],m=f.index,_=f.attributes.position,y=0;if(m!==null){let E=m.array;y=m.version;for(let S=0,w=E.length;S<w;S+=3){let D=E[S+0],C=E[S+1],A=E[S+2];u.push(D,C,C,A,A,D)}}else if(_!==void 0){let E=_.array;y=_.version;for(let S=0,w=E.length/3-1;S<w;S+=3){let D=S+0,C=S+1,A=S+2;u.push(D,C,C,A,A,D)}}else return;let d=new(Rl(u)?Ts:As)(u,1);d.version=y;let p=r.get(f);p&&t.remove(p),r.set(f,d)}function h(f){let u=r.get(f);if(u){let m=f.index;m!==null&&u.version<m.version&&c(f)}else c(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:h}}function Zd(i,t,e){let n;function s(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,m){i.drawElements(n,m,r,u*a),e.update(m,n,1)}function c(u,m,_){_!==0&&(i.drawElementsInstanced(n,m,r,u*a,_),e.update(m,n,_))}function h(u,m,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,r,u,0,_);let d=0;for(let p=0;p<_;p++)d+=m[p];e.update(d,n,1)}function f(u,m,_,y){if(_===0)return;let d=t.get("WEBGL_multi_draw");if(d===null)for(let p=0;p<u.length;p++)c(u[p]/a,m[p],y[p]);else{d.multiDrawElementsInstancedWEBGL(n,m,0,r,u,0,y,0,_);let p=0;for(let E=0;E<_;E++)p+=m[E];for(let E=0;E<y.length;E++)e.update(p,n,y[E])}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function Jd(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function $d(i,t,e){let n=new WeakMap,s=new Jt;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0,u=n.get(o);if(u===void 0||u.count!==f){let G=function(){A.dispose(),n.delete(o),o.removeEventListener("dispose",G)};u!==void 0&&u.texture.dispose();let m=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],E=o.morphAttributes.color||[],S=0;m===!0&&(S=1),_===!0&&(S=2),y===!0&&(S=3);let w=o.attributes.position.count*S,D=1;w>t.maxTextureSize&&(D=Math.ceil(w/t.maxTextureSize),w=t.maxTextureSize);let C=new Float32Array(w*D*4*f),A=new bs(C,w,D,f);A.type=tn,A.needsUpdate=!0;let R=S*4;for(let g=0;g<f;g++){let M=d[g],k=p[g],B=E[g],H=w*D*4*g;for(let $=0;$<M.count;$++){let z=$*R;m===!0&&(s.fromBufferAttribute(M,$),C[H+z+0]=s.x,C[H+z+1]=s.y,C[H+z+2]=s.z,C[H+z+3]=0),_===!0&&(s.fromBufferAttribute(k,$),C[H+z+4]=s.x,C[H+z+5]=s.y,C[H+z+6]=s.z,C[H+z+7]=0),y===!0&&(s.fromBufferAttribute(B,$),C[H+z+8]=s.x,C[H+z+9]=s.y,C[H+z+10]=s.z,C[H+z+11]=B.itemSize===4?s.w:1)}}u={count:f,texture:A,size:new Ut(w,D)},n.set(o,u),o.addEventListener("dispose",G)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let m=0;for(let y=0;y<c.length;y++)m+=c[y];let _=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function Kd(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,f=t.get(l,h);if(s.get(f)!==c&&(t.update(f),s.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let u=l.skeleton;s.get(u)!==c&&(u.update(),s.set(u,c))}return f}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}var Ps=class extends Ue{constructor(t,e,n,s,r,a,o,l,c,h=ii){if(h!==ii&&h!==ui)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ii&&(n=Un),n===void 0&&h===ui&&(n=hi),super(null,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Le,this.minFilter=l!==void 0?l:Le,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Ul=new Ue,Xo=new Ps(1,1),Dl=new bs,Nl=new ma,Fl=new Rs,qo=[],Yo=[],Zo=new Float32Array(16),Jo=new Float32Array(9),$o=new Float32Array(4);function vi(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=qo[s];if(r===void 0&&(r=new Float32Array(s),qo[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function ae(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function oe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ks(i,t){let e=Yo[t];e===void 0&&(e=new Int32Array(t),Yo[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Qd(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function jd(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ae(e,t))return;i.uniform2fv(this.addr,t),oe(e,t)}}function tf(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ae(e,t))return;i.uniform3fv(this.addr,t),oe(e,t)}}function ef(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ae(e,t))return;i.uniform4fv(this.addr,t),oe(e,t)}}function nf(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ae(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),oe(e,t)}else{if(ae(e,n))return;$o.set(n),i.uniformMatrix2fv(this.addr,!1,$o),oe(e,n)}}function sf(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ae(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),oe(e,t)}else{if(ae(e,n))return;Jo.set(n),i.uniformMatrix3fv(this.addr,!1,Jo),oe(e,n)}}function rf(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ae(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),oe(e,t)}else{if(ae(e,n))return;Zo.set(n),i.uniformMatrix4fv(this.addr,!1,Zo),oe(e,n)}}function af(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function of(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ae(e,t))return;i.uniform2iv(this.addr,t),oe(e,t)}}function lf(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ae(e,t))return;i.uniform3iv(this.addr,t),oe(e,t)}}function cf(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ae(e,t))return;i.uniform4iv(this.addr,t),oe(e,t)}}function hf(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function uf(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ae(e,t))return;i.uniform2uiv(this.addr,t),oe(e,t)}}function df(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ae(e,t))return;i.uniform3uiv(this.addr,t),oe(e,t)}}function ff(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ae(e,t))return;i.uniform4uiv(this.addr,t),oe(e,t)}}function pf(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Xo.compareFunction=Cl,r=Xo):r=Ul,e.setTexture2D(t||r,s)}function mf(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Nl,s)}function gf(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Fl,s)}function _f(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Dl,s)}function xf(i){switch(i){case 5126:return Qd;case 35664:return jd;case 35665:return tf;case 35666:return ef;case 35674:return nf;case 35675:return sf;case 35676:return rf;case 5124:case 35670:return af;case 35667:case 35671:return of;case 35668:case 35672:return lf;case 35669:case 35673:return cf;case 5125:return hf;case 36294:return uf;case 36295:return df;case 36296:return ff;case 35678:case 36198:case 36298:case 36306:case 35682:return pf;case 35679:case 36299:case 36307:return mf;case 35680:case 36300:case 36308:case 36293:return gf;case 36289:case 36303:case 36311:case 36292:return _f}}function vf(i,t){i.uniform1fv(this.addr,t)}function yf(i,t){let e=vi(t,this.size,2);i.uniform2fv(this.addr,e)}function Mf(i,t){let e=vi(t,this.size,3);i.uniform3fv(this.addr,e)}function Sf(i,t){let e=vi(t,this.size,4);i.uniform4fv(this.addr,e)}function bf(i,t){let e=vi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function wf(i,t){let e=vi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Ef(i,t){let e=vi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Af(i,t){i.uniform1iv(this.addr,t)}function Tf(i,t){i.uniform2iv(this.addr,t)}function Cf(i,t){i.uniform3iv(this.addr,t)}function Rf(i,t){i.uniform4iv(this.addr,t)}function Pf(i,t){i.uniform1uiv(this.addr,t)}function If(i,t){i.uniform2uiv(this.addr,t)}function Lf(i,t){i.uniform3uiv(this.addr,t)}function Uf(i,t){i.uniform4uiv(this.addr,t)}function Df(i,t,e){let n=this.cache,s=t.length,r=ks(e,s);ae(n,r)||(i.uniform1iv(this.addr,r),oe(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||Ul,r[a])}function Nf(i,t,e){let n=this.cache,s=t.length,r=ks(e,s);ae(n,r)||(i.uniform1iv(this.addr,r),oe(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Nl,r[a])}function Ff(i,t,e){let n=this.cache,s=t.length,r=ks(e,s);ae(n,r)||(i.uniform1iv(this.addr,r),oe(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Fl,r[a])}function Of(i,t,e){let n=this.cache,s=t.length,r=ks(e,s);ae(n,r)||(i.uniform1iv(this.addr,r),oe(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Dl,r[a])}function Bf(i){switch(i){case 5126:return vf;case 35664:return yf;case 35665:return Mf;case 35666:return Sf;case 35674:return bf;case 35675:return wf;case 35676:return Ef;case 5124:case 35670:return Af;case 35667:case 35671:return Tf;case 35668:case 35672:return Cf;case 35669:case 35673:return Rf;case 5125:return Pf;case 36294:return If;case 36295:return Lf;case 36296:return Uf;case 35678:case 36198:case 36298:case 36306:case 35682:return Df;case 35679:case 36299:case 36307:return Nf;case 35680:case 36300:case 36308:case 36293:return Ff;case 36289:case 36303:case 36311:case 36292:return Of}}var va=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=xf(e.type)}},ya=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Bf(e.type)}},Ma=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},br=/(\w+)(\])?(\[|\.)?/g;function Ko(i,t){i.seq.push(t),i.map[t.id]=t}function zf(i,t,e){let n=i.name,s=n.length;for(br.lastIndex=0;;){let r=br.exec(n),a=br.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Ko(e,c===void 0?new va(o,i,t):new ya(o,i,t));break}else{let f=e.map[o];f===void 0&&(f=new Ma(o),Ko(e,f)),e=f}}}var ri=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);zf(r,a,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function Qo(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var kf=37297,Vf=0;function Hf(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function Gf(i){let t=Yt.getPrimaries(Yt.workingColorSpace),e=Yt.getPrimaries(i),n;switch(t===e?n="":t===vs&&e===xs?n="LinearDisplayP3ToLinearSRGB":t===xs&&e===vs&&(n="LinearSRGBToLinearDisplayP3"),i){case vn:case zs:return[n,"LinearTransferOETF"];case Ie:case Qa:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function jo(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Hf(i.getShaderSource(t),a)}else return s}function Wf(i,t){let e=Gf(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Xf(i,t){let e;switch(t){case mc:e="Linear";break;case gc:e="Reinhard";break;case _c:e="Cineon";break;case Xa:e="ACESFilmic";break;case vc:e="AgX";break;case yc:e="Neutral";break;case xc:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var as=new U;function qf(){Yt.getLuminanceCoefficients(as);let i=as.x.toFixed(4),t=as.y.toFixed(4),e=as.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Yf(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ci).join(`
`)}function Zf(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Jf(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Ci(i){return i!==""}function tl(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function el(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var $f=/^[ \t]*#include +<([\w\d./]+)>/gm;function Sa(i){return i.replace($f,Qf)}var Kf=new Map;function Qf(i,t){let e=It[t];if(e===void 0){let n=Kf.get(t);if(n!==void 0)e=It[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Sa(e)}var jf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function nl(i){return i.replace(jf,tp)}function tp(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function il(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function ep(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===pl?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Zl?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Qe&&(t="SHADOWMAP_TYPE_VSM"),t}function np(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case li:case ci:t="ENVMAP_TYPE_CUBE";break;case Bs:t="ENVMAP_TYPE_CUBE_UV";break}return t}function ip(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ci:t="ENVMAP_MODE_REFRACTION";break}return t}function sp(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ml:t="ENVMAP_BLENDING_MULTIPLY";break;case fc:t="ENVMAP_BLENDING_MIX";break;case pc:t="ENVMAP_BLENDING_ADD";break}return t}function rp(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function ap(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=ep(e),c=np(e),h=ip(e),f=sp(e),u=rp(e),m=Yf(e),_=Zf(r),y=s.createProgram(),d,p,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Ci).join(`
`),d.length>0&&(d+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Ci).join(`
`),p.length>0&&(p+=`
`)):(d=[il(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ci).join(`
`),p=[il(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==pn?"#define TONE_MAPPING":"",e.toneMapping!==pn?It.tonemapping_pars_fragment:"",e.toneMapping!==pn?Xf("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",It.colorspace_pars_fragment,Wf("linearToOutputTexel",e.outputColorSpace),qf(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ci).join(`
`)),a=Sa(a),a=tl(a,e),a=el(a,e),o=Sa(o),o=tl(o,e),o=el(o,e),a=nl(a),o=nl(o),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,d=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,p=["#define varying in",e.glslVersion===Mo?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Mo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let S=E+d+a,w=E+p+o,D=Qo(s,s.VERTEX_SHADER,S),C=Qo(s,s.FRAGMENT_SHADER,w);s.attachShader(y,D),s.attachShader(y,C),e.index0AttributeName!==void 0?s.bindAttribLocation(y,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function A(M){if(i.debug.checkShaderErrors){let k=s.getProgramInfoLog(y).trim(),B=s.getShaderInfoLog(D).trim(),H=s.getShaderInfoLog(C).trim(),$=!0,z=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if($=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,y,D,C);else{let Y=jo(s,D,"vertex"),V=jo(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+M.name+`
Material Type: `+M.type+`

Program Info Log: `+k+`
`+Y+`
`+V)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(B===""||H==="")&&(z=!1);z&&(M.diagnostics={runnable:$,programLog:k,vertexShader:{log:B,prefix:d},fragmentShader:{log:H,prefix:p}})}s.deleteShader(D),s.deleteShader(C),R=new ri(s,y),G=Jf(s,y)}let R;this.getUniforms=function(){return R===void 0&&A(this),R};let G;this.getAttributes=function(){return G===void 0&&A(this),G};let g=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return g===!1&&(g=s.getProgramParameter(y,kf)),g},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Vf++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=D,this.fragmentShader=C,this}var op=0,ba=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new wa(t),e.set(t,n)),n}},wa=class{constructor(t){this.id=op++,this.code=t,this.usedTimes=0}};function lp(i,t,e,n,s,r,a){let o=new Es,l=new ba,c=new Set,h=[],f=s.logarithmicDepthBuffer,u=s.reverseDepthBuffer,m=s.vertexTextures,_=s.precision,y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(g){return c.add(g),g===0?"uv":`uv${g}`}function p(g,M,k,B,H){let $=B.fog,z=H.geometry,Y=g.isMeshStandardMaterial?B.environment:null,V=(g.isMeshStandardMaterial?e:t).get(g.envMap||Y),nt=V&&V.mapping===Bs?V.image.height:null,st=y[g.type];g.precision!==null&&(_=s.getMaxPrecision(g.precision),_!==g.precision&&console.warn("THREE.WebGLProgram.getParameters:",g.precision,"not supported, using",_,"instead."));let et=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Ft=et!==void 0?et.length:0,zt=0;z.morphAttributes.position!==void 0&&(zt=1),z.morphAttributes.normal!==void 0&&(zt=2),z.morphAttributes.color!==void 0&&(zt=3);let X,K,dt,at;if(st){let ye=Ge[st];X=ye.vertexShader,K=ye.fragmentShader}else X=g.vertexShader,K=g.fragmentShader,l.update(g),dt=l.getVertexShaderID(g),at=l.getFragmentShaderID(g);let bt=i.getRenderTarget(),yt=H.isInstancedMesh===!0,Dt=H.isBatchedMesh===!0,Gt=!!g.map,Nt=!!g.matcap,T=!!V,ue=!!g.aoMap,Pt=!!g.lightMap,Ot=!!g.bumpMap,wt=!!g.normalMap,Kt=!!g.displacementMap,Tt=!!g.emissiveMap,b=!!g.metalnessMap,x=!!g.roughnessMap,N=g.anisotropy>0,Z=g.clearcoat>0,Q=g.dispersion>0,q=g.iridescence>0,_t=g.sheen>0,rt=g.transmission>0,ut=N&&!!g.anisotropyMap,Ht=Z&&!!g.clearcoatMap,j=Z&&!!g.clearcoatNormalMap,ft=Z&&!!g.clearcoatRoughnessMap,Et=q&&!!g.iridescenceMap,At=q&&!!g.iridescenceThicknessMap,pt=_t&&!!g.sheenColorMap,kt=_t&&!!g.sheenRoughnessMap,Rt=!!g.specularMap,$t=!!g.specularColorMap,P=!!g.specularIntensityMap,ct=rt&&!!g.transmissionMap,W=rt&&!!g.thicknessMap,J=!!g.gradientMap,ot=!!g.alphaMap,ht=g.alphaTest>0,Vt=!!g.alphaHash,se=!!g.extensions,ve=pn;g.toneMapped&&(bt===null||bt.isXRRenderTarget===!0)&&(ve=i.toneMapping);let Wt={shaderID:st,shaderType:g.type,shaderName:g.name,vertexShader:X,fragmentShader:K,defines:g.defines,customVertexShaderID:dt,customFragmentShaderID:at,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:_,batching:Dt,batchingColor:Dt&&H._colorsTexture!==null,instancing:yt,instancingColor:yt&&H.instanceColor!==null,instancingMorph:yt&&H.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:bt===null?i.outputColorSpace:bt.isXRRenderTarget===!0?bt.texture.colorSpace:vn,alphaToCoverage:!!g.alphaToCoverage,map:Gt,matcap:Nt,envMap:T,envMapMode:T&&V.mapping,envMapCubeUVHeight:nt,aoMap:ue,lightMap:Pt,bumpMap:Ot,normalMap:wt,displacementMap:m&&Kt,emissiveMap:Tt,normalMapObjectSpace:wt&&g.normalMapType===wc,normalMapTangentSpace:wt&&g.normalMapType===Tl,metalnessMap:b,roughnessMap:x,anisotropy:N,anisotropyMap:ut,clearcoat:Z,clearcoatMap:Ht,clearcoatNormalMap:j,clearcoatRoughnessMap:ft,dispersion:Q,iridescence:q,iridescenceMap:Et,iridescenceThicknessMap:At,sheen:_t,sheenColorMap:pt,sheenRoughnessMap:kt,specularMap:Rt,specularColorMap:$t,specularIntensityMap:P,transmission:rt,transmissionMap:ct,thicknessMap:W,gradientMap:J,opaque:g.transparent===!1&&g.blending===ni&&g.alphaToCoverage===!1,alphaMap:ot,alphaTest:ht,alphaHash:Vt,combine:g.combine,mapUv:Gt&&d(g.map.channel),aoMapUv:ue&&d(g.aoMap.channel),lightMapUv:Pt&&d(g.lightMap.channel),bumpMapUv:Ot&&d(g.bumpMap.channel),normalMapUv:wt&&d(g.normalMap.channel),displacementMapUv:Kt&&d(g.displacementMap.channel),emissiveMapUv:Tt&&d(g.emissiveMap.channel),metalnessMapUv:b&&d(g.metalnessMap.channel),roughnessMapUv:x&&d(g.roughnessMap.channel),anisotropyMapUv:ut&&d(g.anisotropyMap.channel),clearcoatMapUv:Ht&&d(g.clearcoatMap.channel),clearcoatNormalMapUv:j&&d(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ft&&d(g.clearcoatRoughnessMap.channel),iridescenceMapUv:Et&&d(g.iridescenceMap.channel),iridescenceThicknessMapUv:At&&d(g.iridescenceThicknessMap.channel),sheenColorMapUv:pt&&d(g.sheenColorMap.channel),sheenRoughnessMapUv:kt&&d(g.sheenRoughnessMap.channel),specularMapUv:Rt&&d(g.specularMap.channel),specularColorMapUv:$t&&d(g.specularColorMap.channel),specularIntensityMapUv:P&&d(g.specularIntensityMap.channel),transmissionMapUv:ct&&d(g.transmissionMap.channel),thicknessMapUv:W&&d(g.thicknessMap.channel),alphaMapUv:ot&&d(g.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(wt||N),vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!z.attributes.uv&&(Gt||ot),fog:!!$,useFog:g.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:g.flatShading===!0,sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:u,skinning:H.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:Ft,morphTextureStride:zt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:g.dithering,shadowMapEnabled:i.shadowMap.enabled&&k.length>0,shadowMapType:i.shadowMap.type,toneMapping:ve,decodeVideoTexture:Gt&&g.map.isVideoTexture===!0&&Yt.getTransfer(g.map.colorSpace)===jt,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===ze,flipSided:g.side===me,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:se&&g.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(se&&g.extensions.multiDraw===!0||Dt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return Wt.vertexUv1s=c.has(1),Wt.vertexUv2s=c.has(2),Wt.vertexUv3s=c.has(3),c.clear(),Wt}function E(g){let M=[];if(g.shaderID?M.push(g.shaderID):(M.push(g.customVertexShaderID),M.push(g.customFragmentShaderID)),g.defines!==void 0)for(let k in g.defines)M.push(k),M.push(g.defines[k]);return g.isRawShaderMaterial===!1&&(S(M,g),w(M,g),M.push(i.outputColorSpace)),M.push(g.customProgramCacheKey),M.join()}function S(g,M){g.push(M.precision),g.push(M.outputColorSpace),g.push(M.envMapMode),g.push(M.envMapCubeUVHeight),g.push(M.mapUv),g.push(M.alphaMapUv),g.push(M.lightMapUv),g.push(M.aoMapUv),g.push(M.bumpMapUv),g.push(M.normalMapUv),g.push(M.displacementMapUv),g.push(M.emissiveMapUv),g.push(M.metalnessMapUv),g.push(M.roughnessMapUv),g.push(M.anisotropyMapUv),g.push(M.clearcoatMapUv),g.push(M.clearcoatNormalMapUv),g.push(M.clearcoatRoughnessMapUv),g.push(M.iridescenceMapUv),g.push(M.iridescenceThicknessMapUv),g.push(M.sheenColorMapUv),g.push(M.sheenRoughnessMapUv),g.push(M.specularMapUv),g.push(M.specularColorMapUv),g.push(M.specularIntensityMapUv),g.push(M.transmissionMapUv),g.push(M.thicknessMapUv),g.push(M.combine),g.push(M.fogExp2),g.push(M.sizeAttenuation),g.push(M.morphTargetsCount),g.push(M.morphAttributeCount),g.push(M.numDirLights),g.push(M.numPointLights),g.push(M.numSpotLights),g.push(M.numSpotLightMaps),g.push(M.numHemiLights),g.push(M.numRectAreaLights),g.push(M.numDirLightShadows),g.push(M.numPointLightShadows),g.push(M.numSpotLightShadows),g.push(M.numSpotLightShadowsWithMaps),g.push(M.numLightProbes),g.push(M.shadowMapType),g.push(M.toneMapping),g.push(M.numClippingPlanes),g.push(M.numClipIntersection),g.push(M.depthPacking)}function w(g,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),g.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reverseDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.alphaToCoverage&&o.enable(20),g.push(o.mask)}function D(g){let M=y[g.type],k;if(M){let B=Ge[M];k=Kc.clone(B.uniforms)}else k=g.uniforms;return k}function C(g,M){let k;for(let B=0,H=h.length;B<H;B++){let $=h[B];if($.cacheKey===M){k=$,++k.usedTimes;break}}return k===void 0&&(k=new ap(i,M,g,r),h.push(k)),k}function A(g){if(--g.usedTimes===0){let M=h.indexOf(g);h[M]=h[h.length-1],h.pop(),g.destroy()}}function R(g){l.remove(g)}function G(){l.dispose()}return{getParameters:p,getProgramCacheKey:E,getUniforms:D,acquireProgram:C,releaseProgram:A,releaseShaderCache:R,programs:h,dispose:G}}function cp(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function hp(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function sl(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function rl(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(f,u,m,_,y,d){let p=i[t];return p===void 0?(p={id:f.id,object:f,geometry:u,material:m,groupOrder:_,renderOrder:f.renderOrder,z:y,group:d},i[t]=p):(p.id=f.id,p.object=f,p.geometry=u,p.material=m,p.groupOrder=_,p.renderOrder=f.renderOrder,p.z=y,p.group=d),t++,p}function o(f,u,m,_,y,d){let p=a(f,u,m,_,y,d);m.transmission>0?n.push(p):m.transparent===!0?s.push(p):e.push(p)}function l(f,u,m,_,y,d){let p=a(f,u,m,_,y,d);m.transmission>0?n.unshift(p):m.transparent===!0?s.unshift(p):e.unshift(p)}function c(f,u){e.length>1&&e.sort(f||hp),n.length>1&&n.sort(u||sl),s.length>1&&s.sort(u||sl)}function h(){for(let f=t,u=i.length;f<u;f++){let m=i[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function up(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new rl,i.set(n,[a])):s>=r.length?(a=new rl,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function dp(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new U,color:new Ct};break;case"SpotLight":e={position:new U,direction:new U,color:new Ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new Ct,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new Ct,groundColor:new Ct};break;case"RectAreaLight":e={color:new Ct,position:new U,halfWidth:new U,halfHeight:new U};break}return i[t.id]=e,e}}}function fp(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var pp=0;function mp(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function gp(i){let t=new dp,e=fp(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new U);let s=new U,r=new ee,a=new ee;function o(c){let h=0,f=0,u=0;for(let G=0;G<9;G++)n.probe[G].set(0,0,0);let m=0,_=0,y=0,d=0,p=0,E=0,S=0,w=0,D=0,C=0,A=0;c.sort(mp);for(let G=0,g=c.length;G<g;G++){let M=c[G],k=M.color,B=M.intensity,H=M.distance,$=M.shadow&&M.shadow.map?M.shadow.map.texture:null;if(M.isAmbientLight)h+=k.r*B,f+=k.g*B,u+=k.b*B;else if(M.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(M.sh.coefficients[z],B);A++}else if(M.isDirectionalLight){let z=t.get(M);if(z.color.copy(M.color).multiplyScalar(M.intensity),M.castShadow){let Y=M.shadow,V=e.get(M);V.shadowIntensity=Y.intensity,V.shadowBias=Y.bias,V.shadowNormalBias=Y.normalBias,V.shadowRadius=Y.radius,V.shadowMapSize=Y.mapSize,n.directionalShadow[m]=V,n.directionalShadowMap[m]=$,n.directionalShadowMatrix[m]=M.shadow.matrix,E++}n.directional[m]=z,m++}else if(M.isSpotLight){let z=t.get(M);z.position.setFromMatrixPosition(M.matrixWorld),z.color.copy(k).multiplyScalar(B),z.distance=H,z.coneCos=Math.cos(M.angle),z.penumbraCos=Math.cos(M.angle*(1-M.penumbra)),z.decay=M.decay,n.spot[y]=z;let Y=M.shadow;if(M.map&&(n.spotLightMap[D]=M.map,D++,Y.updateMatrices(M),M.castShadow&&C++),n.spotLightMatrix[y]=Y.matrix,M.castShadow){let V=e.get(M);V.shadowIntensity=Y.intensity,V.shadowBias=Y.bias,V.shadowNormalBias=Y.normalBias,V.shadowRadius=Y.radius,V.shadowMapSize=Y.mapSize,n.spotShadow[y]=V,n.spotShadowMap[y]=$,w++}y++}else if(M.isRectAreaLight){let z=t.get(M);z.color.copy(k).multiplyScalar(B),z.halfWidth.set(M.width*.5,0,0),z.halfHeight.set(0,M.height*.5,0),n.rectArea[d]=z,d++}else if(M.isPointLight){let z=t.get(M);if(z.color.copy(M.color).multiplyScalar(M.intensity),z.distance=M.distance,z.decay=M.decay,M.castShadow){let Y=M.shadow,V=e.get(M);V.shadowIntensity=Y.intensity,V.shadowBias=Y.bias,V.shadowNormalBias=Y.normalBias,V.shadowRadius=Y.radius,V.shadowMapSize=Y.mapSize,V.shadowCameraNear=Y.camera.near,V.shadowCameraFar=Y.camera.far,n.pointShadow[_]=V,n.pointShadowMap[_]=$,n.pointShadowMatrix[_]=M.shadow.matrix,S++}n.point[_]=z,_++}else if(M.isHemisphereLight){let z=t.get(M);z.skyColor.copy(M.color).multiplyScalar(B),z.groundColor.copy(M.groundColor).multiplyScalar(B),n.hemi[p]=z,p++}}d>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=it.LTC_FLOAT_1,n.rectAreaLTC2=it.LTC_FLOAT_2):(n.rectAreaLTC1=it.LTC_HALF_1,n.rectAreaLTC2=it.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=u;let R=n.hash;(R.directionalLength!==m||R.pointLength!==_||R.spotLength!==y||R.rectAreaLength!==d||R.hemiLength!==p||R.numDirectionalShadows!==E||R.numPointShadows!==S||R.numSpotShadows!==w||R.numSpotMaps!==D||R.numLightProbes!==A)&&(n.directional.length=m,n.spot.length=y,n.rectArea.length=d,n.point.length=_,n.hemi.length=p,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=w,n.spotShadowMap.length=w,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=w+D-C,n.spotLightMap.length=D,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=A,R.directionalLength=m,R.pointLength=_,R.spotLength=y,R.rectAreaLength=d,R.hemiLength=p,R.numDirectionalShadows=E,R.numPointShadows=S,R.numSpotShadows=w,R.numSpotMaps=D,R.numLightProbes=A,n.version=pp++)}function l(c,h){let f=0,u=0,m=0,_=0,y=0,d=h.matrixWorldInverse;for(let p=0,E=c.length;p<E;p++){let S=c[p];if(S.isDirectionalLight){let w=n.directional[f];w.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(d),f++}else if(S.isSpotLight){let w=n.spot[m];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(d),w.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(d),m++}else if(S.isRectAreaLight){let w=n.rectArea[_];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(d),a.identity(),r.copy(S.matrixWorld),r.premultiply(d),a.extractRotation(r),w.halfWidth.set(S.width*.5,0,0),w.halfHeight.set(0,S.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),_++}else if(S.isPointLight){let w=n.point[u];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(d),u++}else if(S.isHemisphereLight){let w=n.hemi[y];w.direction.setFromMatrixPosition(S.matrixWorld),w.direction.transformDirection(d),y++}}}return{setup:o,setupView:l,state:n}}function al(i){let t=new gp(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function _p(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new al(i),t.set(s,[o])):r>=a.length?(o=new al(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var Ea=class extends xn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Sc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Aa=class extends xn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},xp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,vp=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function yp(i,t,e){let n=new Ii,s=new Ut,r=new Ut,a=new Jt,o=new Ea({depthPacking:bc}),l=new Aa,c={},h=e.maxTextureSize,f={[mn]:me,[me]:mn,[ze]:ze},u=new be({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ut},radius:{value:4}},vertexShader:xp,fragmentShader:vp}),m=u.clone();m.defines.HORIZONTAL_PASS=1;let _=new Ce;_.setAttribute("position",new xe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new Bt(_,u),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=pl;let p=this.type;this.render=function(C,A,R){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||C.length===0)return;let G=i.getRenderTarget(),g=i.getActiveCubeFace(),M=i.getActiveMipmapLevel(),k=i.state;k.setBlending(fn),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);let B=p!==Qe&&this.type===Qe,H=p===Qe&&this.type!==Qe;for(let $=0,z=C.length;$<z;$++){let Y=C[$],V=Y.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);let nt=V.getFrameExtents();if(s.multiply(nt),r.copy(V.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/nt.x),s.x=r.x*nt.x,V.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/nt.y),s.y=r.y*nt.y,V.mapSize.y=r.y)),V.map===null||B===!0||H===!0){let et=this.type!==Qe?{minFilter:Le,magFilter:Le}:{};V.map!==null&&V.map.dispose(),V.map=new sn(s.x,s.y,et),V.map.texture.name=Y.name+".shadowMap",V.camera.updateProjectionMatrix()}i.setRenderTarget(V.map),i.clear();let st=V.getViewportCount();for(let et=0;et<st;et++){let Ft=V.getViewport(et);a.set(r.x*Ft.x,r.y*Ft.y,r.x*Ft.z,r.y*Ft.w),k.viewport(a),V.updateMatrices(Y,et),n=V.getFrustum(),w(A,R,V.camera,Y,this.type)}V.isPointLightShadow!==!0&&this.type===Qe&&E(V,R),V.needsUpdate=!1}p=this.type,d.needsUpdate=!1,i.setRenderTarget(G,g,M)};function E(C,A){let R=t.update(y);u.defines.VSM_SAMPLES!==C.blurSamples&&(u.defines.VSM_SAMPLES=C.blurSamples,m.defines.VSM_SAMPLES=C.blurSamples,u.needsUpdate=!0,m.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new sn(s.x,s.y)),u.uniforms.shadow_pass.value=C.map.texture,u.uniforms.resolution.value=C.mapSize,u.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(A,null,R,u,y,null),m.uniforms.shadow_pass.value=C.mapPass.texture,m.uniforms.resolution.value=C.mapSize,m.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(A,null,R,m,y,null)}function S(C,A,R,G){let g=null,M=R.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(M!==void 0)g=M;else if(g=R.isPointLight===!0?l:o,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){let k=g.uuid,B=A.uuid,H=c[k];H===void 0&&(H={},c[k]=H);let $=H[B];$===void 0&&($=g.clone(),H[B]=$,A.addEventListener("dispose",D)),g=$}if(g.visible=A.visible,g.wireframe=A.wireframe,G===Qe?g.side=A.shadowSide!==null?A.shadowSide:A.side:g.side=A.shadowSide!==null?A.shadowSide:f[A.side],g.alphaMap=A.alphaMap,g.alphaTest=A.alphaTest,g.map=A.map,g.clipShadows=A.clipShadows,g.clippingPlanes=A.clippingPlanes,g.clipIntersection=A.clipIntersection,g.displacementMap=A.displacementMap,g.displacementScale=A.displacementScale,g.displacementBias=A.displacementBias,g.wireframeLinewidth=A.wireframeLinewidth,g.linewidth=A.linewidth,R.isPointLight===!0&&g.isMeshDistanceMaterial===!0){let k=i.properties.get(g);k.light=R}return g}function w(C,A,R,G,g){if(C.visible===!1)return;if(C.layers.test(A.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&g===Qe)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,C.matrixWorld);let B=t.update(C),H=C.material;if(Array.isArray(H)){let $=B.groups;for(let z=0,Y=$.length;z<Y;z++){let V=$[z],nt=H[V.materialIndex];if(nt&&nt.visible){let st=S(C,nt,G,g);C.onBeforeShadow(i,C,A,R,B,st,V),i.renderBufferDirect(R,null,B,st,C,V),C.onAfterShadow(i,C,A,R,B,st,V)}}}else if(H.visible){let $=S(C,H,G,g);C.onBeforeShadow(i,C,A,R,B,$,null),i.renderBufferDirect(R,null,B,$,C,null),C.onAfterShadow(i,C,A,R,B,$,null)}}let k=C.children;for(let B=0,H=k.length;B<H;B++)w(k[B],A,R,G,g)}function D(C){C.target.removeEventListener("dispose",D);for(let R in c){let G=c[R],g=C.target.uuid;g in G&&(G[g].dispose(),delete G[g])}}}var Mp={[Cr]:Rr,[Pr]:Ur,[Ir]:Dr,[oi]:Lr,[Rr]:Cr,[Ur]:Pr,[Dr]:Ir,[Lr]:oi};function Sp(i){function t(){let P=!1,ct=new Jt,W=null,J=new Jt(0,0,0,0);return{setMask:function(ot){W!==ot&&!P&&(i.colorMask(ot,ot,ot,ot),W=ot)},setLocked:function(ot){P=ot},setClear:function(ot,ht,Vt,se,ve){ve===!0&&(ot*=se,ht*=se,Vt*=se),ct.set(ot,ht,Vt,se),J.equals(ct)===!1&&(i.clearColor(ot,ht,Vt,se),J.copy(ct))},reset:function(){P=!1,W=null,J.set(-1,0,0,0)}}}function e(){let P=!1,ct=!1,W=null,J=null,ot=null;return{setReversed:function(ht){ct=ht},setTest:function(ht){ht?dt(i.DEPTH_TEST):at(i.DEPTH_TEST)},setMask:function(ht){W!==ht&&!P&&(i.depthMask(ht),W=ht)},setFunc:function(ht){if(ct&&(ht=Mp[ht]),J!==ht){switch(ht){case Cr:i.depthFunc(i.NEVER);break;case Rr:i.depthFunc(i.ALWAYS);break;case Pr:i.depthFunc(i.LESS);break;case oi:i.depthFunc(i.LEQUAL);break;case Ir:i.depthFunc(i.EQUAL);break;case Lr:i.depthFunc(i.GEQUAL);break;case Ur:i.depthFunc(i.GREATER);break;case Dr:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}J=ht}},setLocked:function(ht){P=ht},setClear:function(ht){ot!==ht&&(i.clearDepth(ht),ot=ht)},reset:function(){P=!1,W=null,J=null,ot=null}}}function n(){let P=!1,ct=null,W=null,J=null,ot=null,ht=null,Vt=null,se=null,ve=null;return{setTest:function(Wt){P||(Wt?dt(i.STENCIL_TEST):at(i.STENCIL_TEST))},setMask:function(Wt){ct!==Wt&&!P&&(i.stencilMask(Wt),ct=Wt)},setFunc:function(Wt,ye,qe){(W!==Wt||J!==ye||ot!==qe)&&(i.stencilFunc(Wt,ye,qe),W=Wt,J=ye,ot=qe)},setOp:function(Wt,ye,qe){(ht!==Wt||Vt!==ye||se!==qe)&&(i.stencilOp(Wt,ye,qe),ht=Wt,Vt=ye,se=qe)},setLocked:function(Wt){P=Wt},setClear:function(Wt){ve!==Wt&&(i.clearStencil(Wt),ve=Wt)},reset:function(){P=!1,ct=null,W=null,J=null,ot=null,ht=null,Vt=null,se=null,ve=null}}}let s=new t,r=new e,a=new n,o=new WeakMap,l=new WeakMap,c={},h={},f=new WeakMap,u=[],m=null,_=!1,y=null,d=null,p=null,E=null,S=null,w=null,D=null,C=new Ct(0,0,0),A=0,R=!1,G=null,g=null,M=null,k=null,B=null,H=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),$=!1,z=0,Y=i.getParameter(i.VERSION);Y.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(Y)[1]),$=z>=1):Y.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),$=z>=2);let V=null,nt={},st=i.getParameter(i.SCISSOR_BOX),et=i.getParameter(i.VIEWPORT),Ft=new Jt().fromArray(st),zt=new Jt().fromArray(et);function X(P,ct,W,J){let ot=new Uint8Array(4),ht=i.createTexture();i.bindTexture(P,ht),i.texParameteri(P,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(P,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Vt=0;Vt<W;Vt++)P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY?i.texImage3D(ct,0,i.RGBA,1,1,J,0,i.RGBA,i.UNSIGNED_BYTE,ot):i.texImage2D(ct+Vt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ot);return ht}let K={};K[i.TEXTURE_2D]=X(i.TEXTURE_2D,i.TEXTURE_2D,1),K[i.TEXTURE_CUBE_MAP]=X(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[i.TEXTURE_2D_ARRAY]=X(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),K[i.TEXTURE_3D]=X(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),a.setClear(0),dt(i.DEPTH_TEST),r.setFunc(oi),Pt(!1),Ot(fo),dt(i.CULL_FACE),T(fn);function dt(P){c[P]!==!0&&(i.enable(P),c[P]=!0)}function at(P){c[P]!==!1&&(i.disable(P),c[P]=!1)}function bt(P,ct){return h[P]!==ct?(i.bindFramebuffer(P,ct),h[P]=ct,P===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=ct),P===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=ct),!0):!1}function yt(P,ct){let W=u,J=!1;if(P){W=f.get(ct),W===void 0&&(W=[],f.set(ct,W));let ot=P.textures;if(W.length!==ot.length||W[0]!==i.COLOR_ATTACHMENT0){for(let ht=0,Vt=ot.length;ht<Vt;ht++)W[ht]=i.COLOR_ATTACHMENT0+ht;W.length=ot.length,J=!0}}else W[0]!==i.BACK&&(W[0]=i.BACK,J=!0);J&&i.drawBuffers(W)}function Dt(P){return m!==P?(i.useProgram(P),m=P,!0):!1}let Gt={[Cn]:i.FUNC_ADD,[$l]:i.FUNC_SUBTRACT,[Kl]:i.FUNC_REVERSE_SUBTRACT};Gt[Ql]=i.MIN,Gt[jl]=i.MAX;let Nt={[tc]:i.ZERO,[ec]:i.ONE,[nc]:i.SRC_COLOR,[Ar]:i.SRC_ALPHA,[lc]:i.SRC_ALPHA_SATURATE,[ac]:i.DST_COLOR,[sc]:i.DST_ALPHA,[ic]:i.ONE_MINUS_SRC_COLOR,[Tr]:i.ONE_MINUS_SRC_ALPHA,[oc]:i.ONE_MINUS_DST_COLOR,[rc]:i.ONE_MINUS_DST_ALPHA,[cc]:i.CONSTANT_COLOR,[hc]:i.ONE_MINUS_CONSTANT_COLOR,[uc]:i.CONSTANT_ALPHA,[dc]:i.ONE_MINUS_CONSTANT_ALPHA};function T(P,ct,W,J,ot,ht,Vt,se,ve,Wt){if(P===fn){_===!0&&(at(i.BLEND),_=!1);return}if(_===!1&&(dt(i.BLEND),_=!0),P!==Jl){if(P!==y||Wt!==R){if((d!==Cn||S!==Cn)&&(i.blendEquation(i.FUNC_ADD),d=Cn,S=Cn),Wt)switch(P){case ni:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ai:i.blendFunc(i.ONE,i.ONE);break;case po:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case mo:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case ni:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ai:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case po:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case mo:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}p=null,E=null,w=null,D=null,C.set(0,0,0),A=0,y=P,R=Wt}return}ot=ot||ct,ht=ht||W,Vt=Vt||J,(ct!==d||ot!==S)&&(i.blendEquationSeparate(Gt[ct],Gt[ot]),d=ct,S=ot),(W!==p||J!==E||ht!==w||Vt!==D)&&(i.blendFuncSeparate(Nt[W],Nt[J],Nt[ht],Nt[Vt]),p=W,E=J,w=ht,D=Vt),(se.equals(C)===!1||ve!==A)&&(i.blendColor(se.r,se.g,se.b,ve),C.copy(se),A=ve),y=P,R=!1}function ue(P,ct){P.side===ze?at(i.CULL_FACE):dt(i.CULL_FACE);let W=P.side===me;ct&&(W=!W),Pt(W),P.blending===ni&&P.transparent===!1?T(fn):T(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),r.setFunc(P.depthFunc),r.setTest(P.depthTest),r.setMask(P.depthWrite),s.setMask(P.colorWrite);let J=P.stencilWrite;a.setTest(J),J&&(a.setMask(P.stencilWriteMask),a.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),a.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),Kt(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?dt(i.SAMPLE_ALPHA_TO_COVERAGE):at(i.SAMPLE_ALPHA_TO_COVERAGE)}function Pt(P){G!==P&&(P?i.frontFace(i.CW):i.frontFace(i.CCW),G=P)}function Ot(P){P!==ql?(dt(i.CULL_FACE),P!==g&&(P===fo?i.cullFace(i.BACK):P===Yl?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):at(i.CULL_FACE),g=P}function wt(P){P!==M&&($&&i.lineWidth(P),M=P)}function Kt(P,ct,W){P?(dt(i.POLYGON_OFFSET_FILL),(k!==ct||B!==W)&&(i.polygonOffset(ct,W),k=ct,B=W)):at(i.POLYGON_OFFSET_FILL)}function Tt(P){P?dt(i.SCISSOR_TEST):at(i.SCISSOR_TEST)}function b(P){P===void 0&&(P=i.TEXTURE0+H-1),V!==P&&(i.activeTexture(P),V=P)}function x(P,ct,W){W===void 0&&(V===null?W=i.TEXTURE0+H-1:W=V);let J=nt[W];J===void 0&&(J={type:void 0,texture:void 0},nt[W]=J),(J.type!==P||J.texture!==ct)&&(V!==W&&(i.activeTexture(W),V=W),i.bindTexture(P,ct||K[P]),J.type=P,J.texture=ct)}function N(){let P=nt[V];P!==void 0&&P.type!==void 0&&(i.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function Z(){try{i.compressedTexImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Q(){try{i.compressedTexImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function q(){try{i.texSubImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function _t(){try{i.texSubImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function rt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ut(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ht(){try{i.texStorage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function j(){try{i.texStorage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ft(){try{i.texImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Et(){try{i.texImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function At(P){Ft.equals(P)===!1&&(i.scissor(P.x,P.y,P.z,P.w),Ft.copy(P))}function pt(P){zt.equals(P)===!1&&(i.viewport(P.x,P.y,P.z,P.w),zt.copy(P))}function kt(P,ct){let W=l.get(ct);W===void 0&&(W=new WeakMap,l.set(ct,W));let J=W.get(P);J===void 0&&(J=i.getUniformBlockIndex(ct,P.name),W.set(P,J))}function Rt(P,ct){let J=l.get(ct).get(P);o.get(ct)!==J&&(i.uniformBlockBinding(ct,J,P.__bindingPointIndex),o.set(ct,J))}function $t(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},V=null,nt={},h={},f=new WeakMap,u=[],m=null,_=!1,y=null,d=null,p=null,E=null,S=null,w=null,D=null,C=new Ct(0,0,0),A=0,R=!1,G=null,g=null,M=null,k=null,B=null,Ft.set(0,0,i.canvas.width,i.canvas.height),zt.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),a.reset()}return{buffers:{color:s,depth:r,stencil:a},enable:dt,disable:at,bindFramebuffer:bt,drawBuffers:yt,useProgram:Dt,setBlending:T,setMaterial:ue,setFlipSided:Pt,setCullFace:Ot,setLineWidth:wt,setPolygonOffset:Kt,setScissorTest:Tt,activeTexture:b,bindTexture:x,unbindTexture:N,compressedTexImage2D:Z,compressedTexImage3D:Q,texImage2D:ft,texImage3D:Et,updateUBOMapping:kt,uniformBlockBinding:Rt,texStorage2D:Ht,texStorage3D:j,texSubImage2D:q,texSubImage3D:_t,compressedTexSubImage2D:rt,compressedTexSubImage3D:ut,scissor:At,viewport:pt,reset:$t}}function ol(i,t,e,n){let s=bp(n);switch(e){case yl:return i*t;case Sl:return i*t;case bl:return i*t*2;case wl:return i*t/s.components*s.byteLength;case Ja:return i*t/s.components*s.byteLength;case El:return i*t*2/s.components*s.byteLength;case $a:return i*t*2/s.components*s.byteLength;case Ml:return i*t*3/s.components*s.byteLength;case Ve:return i*t*4/s.components*s.byteLength;case Ka:return i*t*4/s.components*s.byteLength;case hs:case us:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ds:case fs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case kr:case Hr:return Math.max(i,16)*Math.max(t,8)/4;case zr:case Vr:return Math.max(i,8)*Math.max(t,8)/2;case Gr:case Wr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Xr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case qr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Yr:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Zr:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Jr:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case $r:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Kr:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Qr:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case jr:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case ta:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case ea:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case na:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case ia:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case sa:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case ra:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case ps:case aa:case oa:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Al:case la:return Math.ceil(i/4)*Math.ceil(t/4)*8;case ca:case ha:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function bp(i){switch(i){case nn:case _l:return{byteLength:1,components:1};case Pi:case xl:case Ni:return{byteLength:2,components:1};case Ya:case Za:return{byteLength:2,components:4};case Un:case qa:case tn:return{byteLength:4,components:1};case vl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function wp(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ut,h=new WeakMap,f,u=new WeakMap,m=!1;try{m=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(b,x){return m?new OffscreenCanvas(b,x):Ms("canvas")}function y(b,x,N){let Z=1,Q=Tt(b);if((Q.width>N||Q.height>N)&&(Z=N/Math.max(Q.width,Q.height)),Z<1)if(typeof HTMLImageElement!="undefined"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&b instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&b instanceof ImageBitmap||typeof VideoFrame!="undefined"&&b instanceof VideoFrame){let q=Math.floor(Z*Q.width),_t=Math.floor(Z*Q.height);f===void 0&&(f=_(q,_t));let rt=x?_(q,_t):f;return rt.width=q,rt.height=_t,rt.getContext("2d").drawImage(b,0,0,q,_t),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+q+"x"+_t+")."),rt}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),b;return b}function d(b){return b.generateMipmaps&&b.minFilter!==Le&&b.minFilter!==ke}function p(b){i.generateMipmap(b)}function E(b,x,N,Z,Q=!1){if(b!==null){if(i[b]!==void 0)return i[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let q=x;if(x===i.RED&&(N===i.FLOAT&&(q=i.R32F),N===i.HALF_FLOAT&&(q=i.R16F),N===i.UNSIGNED_BYTE&&(q=i.R8)),x===i.RED_INTEGER&&(N===i.UNSIGNED_BYTE&&(q=i.R8UI),N===i.UNSIGNED_SHORT&&(q=i.R16UI),N===i.UNSIGNED_INT&&(q=i.R32UI),N===i.BYTE&&(q=i.R8I),N===i.SHORT&&(q=i.R16I),N===i.INT&&(q=i.R32I)),x===i.RG&&(N===i.FLOAT&&(q=i.RG32F),N===i.HALF_FLOAT&&(q=i.RG16F),N===i.UNSIGNED_BYTE&&(q=i.RG8)),x===i.RG_INTEGER&&(N===i.UNSIGNED_BYTE&&(q=i.RG8UI),N===i.UNSIGNED_SHORT&&(q=i.RG16UI),N===i.UNSIGNED_INT&&(q=i.RG32UI),N===i.BYTE&&(q=i.RG8I),N===i.SHORT&&(q=i.RG16I),N===i.INT&&(q=i.RG32I)),x===i.RGB_INTEGER&&(N===i.UNSIGNED_BYTE&&(q=i.RGB8UI),N===i.UNSIGNED_SHORT&&(q=i.RGB16UI),N===i.UNSIGNED_INT&&(q=i.RGB32UI),N===i.BYTE&&(q=i.RGB8I),N===i.SHORT&&(q=i.RGB16I),N===i.INT&&(q=i.RGB32I)),x===i.RGBA_INTEGER&&(N===i.UNSIGNED_BYTE&&(q=i.RGBA8UI),N===i.UNSIGNED_SHORT&&(q=i.RGBA16UI),N===i.UNSIGNED_INT&&(q=i.RGBA32UI),N===i.BYTE&&(q=i.RGBA8I),N===i.SHORT&&(q=i.RGBA16I),N===i.INT&&(q=i.RGBA32I)),x===i.RGB&&N===i.UNSIGNED_INT_5_9_9_9_REV&&(q=i.RGB9_E5),x===i.RGBA){let _t=Q?_s:Yt.getTransfer(Z);N===i.FLOAT&&(q=i.RGBA32F),N===i.HALF_FLOAT&&(q=i.RGBA16F),N===i.UNSIGNED_BYTE&&(q=_t===jt?i.SRGB8_ALPHA8:i.RGBA8),N===i.UNSIGNED_SHORT_4_4_4_4&&(q=i.RGBA4),N===i.UNSIGNED_SHORT_5_5_5_1&&(q=i.RGB5_A1)}return(q===i.R16F||q===i.R32F||q===i.RG16F||q===i.RG32F||q===i.RGBA16F||q===i.RGBA32F)&&t.get("EXT_color_buffer_float"),q}function S(b,x){let N;return b?x===null||x===Un||x===hi?N=i.DEPTH24_STENCIL8:x===tn?N=i.DEPTH32F_STENCIL8:x===Pi&&(N=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Un||x===hi?N=i.DEPTH_COMPONENT24:x===tn?N=i.DEPTH_COMPONENT32F:x===Pi&&(N=i.DEPTH_COMPONENT16),N}function w(b,x){return d(b)===!0||b.isFramebufferTexture&&b.minFilter!==Le&&b.minFilter!==ke?Math.log2(Math.max(x.width,x.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?x.mipmaps.length:1}function D(b){let x=b.target;x.removeEventListener("dispose",D),A(x),x.isVideoTexture&&h.delete(x)}function C(b){let x=b.target;x.removeEventListener("dispose",C),G(x)}function A(b){let x=n.get(b);if(x.__webglInit===void 0)return;let N=b.source,Z=u.get(N);if(Z){let Q=Z[x.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&R(b),Object.keys(Z).length===0&&u.delete(N)}n.remove(b)}function R(b){let x=n.get(b);i.deleteTexture(x.__webglTexture);let N=b.source,Z=u.get(N);delete Z[x.__cacheKey],a.memory.textures--}function G(b){let x=n.get(b);if(b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(x.__webglFramebuffer[Z]))for(let Q=0;Q<x.__webglFramebuffer[Z].length;Q++)i.deleteFramebuffer(x.__webglFramebuffer[Z][Q]);else i.deleteFramebuffer(x.__webglFramebuffer[Z]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[Z])}else{if(Array.isArray(x.__webglFramebuffer))for(let Z=0;Z<x.__webglFramebuffer.length;Z++)i.deleteFramebuffer(x.__webglFramebuffer[Z]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let Z=0;Z<x.__webglColorRenderbuffer.length;Z++)x.__webglColorRenderbuffer[Z]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[Z]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let N=b.textures;for(let Z=0,Q=N.length;Z<Q;Z++){let q=n.get(N[Z]);q.__webglTexture&&(i.deleteTexture(q.__webglTexture),a.memory.textures--),n.remove(N[Z])}n.remove(b)}let g=0;function M(){g=0}function k(){let b=g;return b>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+s.maxTextures),g+=1,b}function B(b){let x=[];return x.push(b.wrapS),x.push(b.wrapT),x.push(b.wrapR||0),x.push(b.magFilter),x.push(b.minFilter),x.push(b.anisotropy),x.push(b.internalFormat),x.push(b.format),x.push(b.type),x.push(b.generateMipmaps),x.push(b.premultiplyAlpha),x.push(b.flipY),x.push(b.unpackAlignment),x.push(b.colorSpace),x.join()}function H(b,x){let N=n.get(b);if(b.isVideoTexture&&wt(b),b.isRenderTargetTexture===!1&&b.version>0&&N.__version!==b.version){let Z=b.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{zt(N,b,x);return}}e.bindTexture(i.TEXTURE_2D,N.__webglTexture,i.TEXTURE0+x)}function $(b,x){let N=n.get(b);if(b.version>0&&N.__version!==b.version){zt(N,b,x);return}e.bindTexture(i.TEXTURE_2D_ARRAY,N.__webglTexture,i.TEXTURE0+x)}function z(b,x){let N=n.get(b);if(b.version>0&&N.__version!==b.version){zt(N,b,x);return}e.bindTexture(i.TEXTURE_3D,N.__webglTexture,i.TEXTURE0+x)}function Y(b,x){let N=n.get(b);if(b.version>0&&N.__version!==b.version){X(N,b,x);return}e.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+x)}let V={[Or]:i.REPEAT,[In]:i.CLAMP_TO_EDGE,[Br]:i.MIRRORED_REPEAT},nt={[Le]:i.NEAREST,[Mc]:i.NEAREST_MIPMAP_NEAREST,[ki]:i.NEAREST_MIPMAP_LINEAR,[ke]:i.LINEAR,[Ys]:i.LINEAR_MIPMAP_NEAREST,[Ln]:i.LINEAR_MIPMAP_LINEAR},st={[Ec]:i.NEVER,[Ic]:i.ALWAYS,[Ac]:i.LESS,[Cl]:i.LEQUAL,[Tc]:i.EQUAL,[Pc]:i.GEQUAL,[Cc]:i.GREATER,[Rc]:i.NOTEQUAL};function et(b,x){if(x.type===tn&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===ke||x.magFilter===Ys||x.magFilter===ki||x.magFilter===Ln||x.minFilter===ke||x.minFilter===Ys||x.minFilter===ki||x.minFilter===Ln)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(b,i.TEXTURE_WRAP_S,V[x.wrapS]),i.texParameteri(b,i.TEXTURE_WRAP_T,V[x.wrapT]),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,V[x.wrapR]),i.texParameteri(b,i.TEXTURE_MAG_FILTER,nt[x.magFilter]),i.texParameteri(b,i.TEXTURE_MIN_FILTER,nt[x.minFilter]),x.compareFunction&&(i.texParameteri(b,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(b,i.TEXTURE_COMPARE_FUNC,st[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Le||x.minFilter!==ki&&x.minFilter!==Ln||x.type===tn&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){let N=t.get("EXT_texture_filter_anisotropic");i.texParameterf(b,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function Ft(b,x){let N=!1;b.__webglInit===void 0&&(b.__webglInit=!0,x.addEventListener("dispose",D));let Z=x.source,Q=u.get(Z);Q===void 0&&(Q={},u.set(Z,Q));let q=B(x);if(q!==b.__cacheKey){Q[q]===void 0&&(Q[q]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,N=!0),Q[q].usedTimes++;let _t=Q[b.__cacheKey];_t!==void 0&&(Q[b.__cacheKey].usedTimes--,_t.usedTimes===0&&R(x)),b.__cacheKey=q,b.__webglTexture=Q[q].texture}return N}function zt(b,x,N){let Z=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(Z=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(Z=i.TEXTURE_3D);let Q=Ft(b,x),q=x.source;e.bindTexture(Z,b.__webglTexture,i.TEXTURE0+N);let _t=n.get(q);if(q.version!==_t.__version||Q===!0){e.activeTexture(i.TEXTURE0+N);let rt=Yt.getPrimaries(Yt.workingColorSpace),ut=x.colorSpace===dn?null:Yt.getPrimaries(x.colorSpace),Ht=x.colorSpace===dn||rt===ut?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ht);let j=y(x.image,!1,s.maxTextureSize);j=Kt(x,j);let ft=r.convert(x.format,x.colorSpace),Et=r.convert(x.type),At=E(x.internalFormat,ft,Et,x.colorSpace,x.isVideoTexture);et(Z,x);let pt,kt=x.mipmaps,Rt=x.isVideoTexture!==!0,$t=_t.__version===void 0||Q===!0,P=q.dataReady,ct=w(x,j);if(x.isDepthTexture)At=S(x.format===ui,x.type),$t&&(Rt?e.texStorage2D(i.TEXTURE_2D,1,At,j.width,j.height):e.texImage2D(i.TEXTURE_2D,0,At,j.width,j.height,0,ft,Et,null));else if(x.isDataTexture)if(kt.length>0){Rt&&$t&&e.texStorage2D(i.TEXTURE_2D,ct,At,kt[0].width,kt[0].height);for(let W=0,J=kt.length;W<J;W++)pt=kt[W],Rt?P&&e.texSubImage2D(i.TEXTURE_2D,W,0,0,pt.width,pt.height,ft,Et,pt.data):e.texImage2D(i.TEXTURE_2D,W,At,pt.width,pt.height,0,ft,Et,pt.data);x.generateMipmaps=!1}else Rt?($t&&e.texStorage2D(i.TEXTURE_2D,ct,At,j.width,j.height),P&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,j.width,j.height,ft,Et,j.data)):e.texImage2D(i.TEXTURE_2D,0,At,j.width,j.height,0,ft,Et,j.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Rt&&$t&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ct,At,kt[0].width,kt[0].height,j.depth);for(let W=0,J=kt.length;W<J;W++)if(pt=kt[W],x.format!==Ve)if(ft!==null)if(Rt){if(P)if(x.layerUpdates.size>0){let ot=ol(pt.width,pt.height,x.format,x.type);for(let ht of x.layerUpdates){let Vt=pt.data.subarray(ht*ot/pt.data.BYTES_PER_ELEMENT,(ht+1)*ot/pt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,ht,pt.width,pt.height,1,ft,Vt,0,0)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,0,pt.width,pt.height,j.depth,ft,pt.data,0,0)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,W,At,pt.width,pt.height,j.depth,0,pt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Rt?P&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,0,pt.width,pt.height,j.depth,ft,Et,pt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,W,At,pt.width,pt.height,j.depth,0,ft,Et,pt.data)}else{Rt&&$t&&e.texStorage2D(i.TEXTURE_2D,ct,At,kt[0].width,kt[0].height);for(let W=0,J=kt.length;W<J;W++)pt=kt[W],x.format!==Ve?ft!==null?Rt?P&&e.compressedTexSubImage2D(i.TEXTURE_2D,W,0,0,pt.width,pt.height,ft,pt.data):e.compressedTexImage2D(i.TEXTURE_2D,W,At,pt.width,pt.height,0,pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Rt?P&&e.texSubImage2D(i.TEXTURE_2D,W,0,0,pt.width,pt.height,ft,Et,pt.data):e.texImage2D(i.TEXTURE_2D,W,At,pt.width,pt.height,0,ft,Et,pt.data)}else if(x.isDataArrayTexture)if(Rt){if($t&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ct,At,j.width,j.height,j.depth),P)if(x.layerUpdates.size>0){let W=ol(j.width,j.height,x.format,x.type);for(let J of x.layerUpdates){let ot=j.data.subarray(J*W/j.data.BYTES_PER_ELEMENT,(J+1)*W/j.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,J,j.width,j.height,1,ft,Et,ot)}x.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,ft,Et,j.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,At,j.width,j.height,j.depth,0,ft,Et,j.data);else if(x.isData3DTexture)Rt?($t&&e.texStorage3D(i.TEXTURE_3D,ct,At,j.width,j.height,j.depth),P&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,ft,Et,j.data)):e.texImage3D(i.TEXTURE_3D,0,At,j.width,j.height,j.depth,0,ft,Et,j.data);else if(x.isFramebufferTexture){if($t)if(Rt)e.texStorage2D(i.TEXTURE_2D,ct,At,j.width,j.height);else{let W=j.width,J=j.height;for(let ot=0;ot<ct;ot++)e.texImage2D(i.TEXTURE_2D,ot,At,W,J,0,ft,Et,null),W>>=1,J>>=1}}else if(kt.length>0){if(Rt&&$t){let W=Tt(kt[0]);e.texStorage2D(i.TEXTURE_2D,ct,At,W.width,W.height)}for(let W=0,J=kt.length;W<J;W++)pt=kt[W],Rt?P&&e.texSubImage2D(i.TEXTURE_2D,W,0,0,ft,Et,pt):e.texImage2D(i.TEXTURE_2D,W,At,ft,Et,pt);x.generateMipmaps=!1}else if(Rt){if($t){let W=Tt(j);e.texStorage2D(i.TEXTURE_2D,ct,At,W.width,W.height)}P&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ft,Et,j)}else e.texImage2D(i.TEXTURE_2D,0,At,ft,Et,j);d(x)&&p(Z),_t.__version=q.version,x.onUpdate&&x.onUpdate(x)}b.__version=x.version}function X(b,x,N){if(x.image.length!==6)return;let Z=Ft(b,x),Q=x.source;e.bindTexture(i.TEXTURE_CUBE_MAP,b.__webglTexture,i.TEXTURE0+N);let q=n.get(Q);if(Q.version!==q.__version||Z===!0){e.activeTexture(i.TEXTURE0+N);let _t=Yt.getPrimaries(Yt.workingColorSpace),rt=x.colorSpace===dn?null:Yt.getPrimaries(x.colorSpace),ut=x.colorSpace===dn||_t===rt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ut);let Ht=x.isCompressedTexture||x.image[0].isCompressedTexture,j=x.image[0]&&x.image[0].isDataTexture,ft=[];for(let J=0;J<6;J++)!Ht&&!j?ft[J]=y(x.image[J],!0,s.maxCubemapSize):ft[J]=j?x.image[J].image:x.image[J],ft[J]=Kt(x,ft[J]);let Et=ft[0],At=r.convert(x.format,x.colorSpace),pt=r.convert(x.type),kt=E(x.internalFormat,At,pt,x.colorSpace),Rt=x.isVideoTexture!==!0,$t=q.__version===void 0||Z===!0,P=Q.dataReady,ct=w(x,Et);et(i.TEXTURE_CUBE_MAP,x);let W;if(Ht){Rt&&$t&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ct,kt,Et.width,Et.height);for(let J=0;J<6;J++){W=ft[J].mipmaps;for(let ot=0;ot<W.length;ot++){let ht=W[ot];x.format!==Ve?At!==null?Rt?P&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ot,0,0,ht.width,ht.height,At,ht.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ot,kt,ht.width,ht.height,0,ht.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Rt?P&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ot,0,0,ht.width,ht.height,At,pt,ht.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ot,kt,ht.width,ht.height,0,At,pt,ht.data)}}}else{if(W=x.mipmaps,Rt&&$t){W.length>0&&ct++;let J=Tt(ft[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ct,kt,J.width,J.height)}for(let J=0;J<6;J++)if(j){Rt?P&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,ft[J].width,ft[J].height,At,pt,ft[J].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,kt,ft[J].width,ft[J].height,0,At,pt,ft[J].data);for(let ot=0;ot<W.length;ot++){let Vt=W[ot].image[J].image;Rt?P&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ot+1,0,0,Vt.width,Vt.height,At,pt,Vt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ot+1,kt,Vt.width,Vt.height,0,At,pt,Vt.data)}}else{Rt?P&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,At,pt,ft[J]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,kt,At,pt,ft[J]);for(let ot=0;ot<W.length;ot++){let ht=W[ot];Rt?P&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ot+1,0,0,At,pt,ht.image[J]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ot+1,kt,At,pt,ht.image[J])}}}d(x)&&p(i.TEXTURE_CUBE_MAP),q.__version=Q.version,x.onUpdate&&x.onUpdate(x)}b.__version=x.version}function K(b,x,N,Z,Q,q){let _t=r.convert(N.format,N.colorSpace),rt=r.convert(N.type),ut=E(N.internalFormat,_t,rt,N.colorSpace);if(!n.get(x).__hasExternalTextures){let j=Math.max(1,x.width>>q),ft=Math.max(1,x.height>>q);Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?e.texImage3D(Q,q,ut,j,ft,x.depth,0,_t,rt,null):e.texImage2D(Q,q,ut,j,ft,0,_t,rt,null)}e.bindFramebuffer(i.FRAMEBUFFER,b),Ot(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,Q,n.get(N).__webglTexture,0,Pt(x)):(Q===i.TEXTURE_2D||Q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Z,Q,n.get(N).__webglTexture,q),e.bindFramebuffer(i.FRAMEBUFFER,null)}function dt(b,x,N){if(i.bindRenderbuffer(i.RENDERBUFFER,b),x.depthBuffer){let Z=x.depthTexture,Q=Z&&Z.isDepthTexture?Z.type:null,q=S(x.stencilBuffer,Q),_t=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,rt=Pt(x);Ot(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,rt,q,x.width,x.height):N?i.renderbufferStorageMultisample(i.RENDERBUFFER,rt,q,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,q,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,_t,i.RENDERBUFFER,b)}else{let Z=x.textures;for(let Q=0;Q<Z.length;Q++){let q=Z[Q],_t=r.convert(q.format,q.colorSpace),rt=r.convert(q.type),ut=E(q.internalFormat,_t,rt,q.colorSpace),Ht=Pt(x);N&&Ot(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ht,ut,x.width,x.height):Ot(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ht,ut,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,ut,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function at(b,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,b),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),H(x.depthTexture,0);let Z=n.get(x.depthTexture).__webglTexture,Q=Pt(x);if(x.depthTexture.format===ii)Ot(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Z,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Z,0);else if(x.depthTexture.format===ui)Ot(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Z,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function bt(b){let x=n.get(b),N=b.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==b.depthTexture){let Z=b.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),Z){let Q=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,Z.removeEventListener("dispose",Q)};Z.addEventListener("dispose",Q),x.__depthDisposeCallback=Q}x.__boundDepthTexture=Z}if(b.depthTexture&&!x.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");at(x.__webglFramebuffer,b)}else if(N){x.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[Z]),x.__webglDepthbuffer[Z]===void 0)x.__webglDepthbuffer[Z]=i.createRenderbuffer(),dt(x.__webglDepthbuffer[Z],b,!1);else{let Q=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,q=x.__webglDepthbuffer[Z];i.bindRenderbuffer(i.RENDERBUFFER,q),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,q)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),dt(x.__webglDepthbuffer,b,!1);else{let Z=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Q=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Q),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,Q)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function yt(b,x,N){let Z=n.get(b);x!==void 0&&K(Z.__webglFramebuffer,b,b.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),N!==void 0&&bt(b)}function Dt(b){let x=b.texture,N=n.get(b),Z=n.get(x);b.addEventListener("dispose",C);let Q=b.textures,q=b.isWebGLCubeRenderTarget===!0,_t=Q.length>1;if(_t||(Z.__webglTexture===void 0&&(Z.__webglTexture=i.createTexture()),Z.__version=x.version,a.memory.textures++),q){N.__webglFramebuffer=[];for(let rt=0;rt<6;rt++)if(x.mipmaps&&x.mipmaps.length>0){N.__webglFramebuffer[rt]=[];for(let ut=0;ut<x.mipmaps.length;ut++)N.__webglFramebuffer[rt][ut]=i.createFramebuffer()}else N.__webglFramebuffer[rt]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){N.__webglFramebuffer=[];for(let rt=0;rt<x.mipmaps.length;rt++)N.__webglFramebuffer[rt]=i.createFramebuffer()}else N.__webglFramebuffer=i.createFramebuffer();if(_t)for(let rt=0,ut=Q.length;rt<ut;rt++){let Ht=n.get(Q[rt]);Ht.__webglTexture===void 0&&(Ht.__webglTexture=i.createTexture(),a.memory.textures++)}if(b.samples>0&&Ot(b)===!1){N.__webglMultisampledFramebuffer=i.createFramebuffer(),N.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let rt=0;rt<Q.length;rt++){let ut=Q[rt];N.__webglColorRenderbuffer[rt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,N.__webglColorRenderbuffer[rt]);let Ht=r.convert(ut.format,ut.colorSpace),j=r.convert(ut.type),ft=E(ut.internalFormat,Ht,j,ut.colorSpace,b.isXRRenderTarget===!0),Et=Pt(b);i.renderbufferStorageMultisample(i.RENDERBUFFER,Et,ft,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+rt,i.RENDERBUFFER,N.__webglColorRenderbuffer[rt])}i.bindRenderbuffer(i.RENDERBUFFER,null),b.depthBuffer&&(N.__webglDepthRenderbuffer=i.createRenderbuffer(),dt(N.__webglDepthRenderbuffer,b,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(q){e.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),et(i.TEXTURE_CUBE_MAP,x);for(let rt=0;rt<6;rt++)if(x.mipmaps&&x.mipmaps.length>0)for(let ut=0;ut<x.mipmaps.length;ut++)K(N.__webglFramebuffer[rt][ut],b,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,ut);else K(N.__webglFramebuffer[rt],b,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0);d(x)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(_t){for(let rt=0,ut=Q.length;rt<ut;rt++){let Ht=Q[rt],j=n.get(Ht);e.bindTexture(i.TEXTURE_2D,j.__webglTexture),et(i.TEXTURE_2D,Ht),K(N.__webglFramebuffer,b,Ht,i.COLOR_ATTACHMENT0+rt,i.TEXTURE_2D,0),d(Ht)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let rt=i.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(rt=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(rt,Z.__webglTexture),et(rt,x),x.mipmaps&&x.mipmaps.length>0)for(let ut=0;ut<x.mipmaps.length;ut++)K(N.__webglFramebuffer[ut],b,x,i.COLOR_ATTACHMENT0,rt,ut);else K(N.__webglFramebuffer,b,x,i.COLOR_ATTACHMENT0,rt,0);d(x)&&p(rt),e.unbindTexture()}b.depthBuffer&&bt(b)}function Gt(b){let x=b.textures;for(let N=0,Z=x.length;N<Z;N++){let Q=x[N];if(d(Q)){let q=b.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,_t=n.get(Q).__webglTexture;e.bindTexture(q,_t),p(q),e.unbindTexture()}}}let Nt=[],T=[];function ue(b){if(b.samples>0){if(Ot(b)===!1){let x=b.textures,N=b.width,Z=b.height,Q=i.COLOR_BUFFER_BIT,q=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_t=n.get(b),rt=x.length>1;if(rt)for(let ut=0;ut<x.length;ut++)e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,_t.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,_t.__webglFramebuffer);for(let ut=0;ut<x.length;ut++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(Q|=i.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(Q|=i.STENCIL_BUFFER_BIT)),rt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,_t.__webglColorRenderbuffer[ut]);let Ht=n.get(x[ut]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ht,0)}i.blitFramebuffer(0,0,N,Z,0,0,N,Z,Q,i.NEAREST),l===!0&&(Nt.length=0,T.length=0,Nt.push(i.COLOR_ATTACHMENT0+ut),b.depthBuffer&&b.resolveDepthBuffer===!1&&(Nt.push(q),T.push(q),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,T)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Nt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),rt)for(let ut=0;ut<x.length;ut++){e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,_t.__webglColorRenderbuffer[ut]);let Ht=n.get(x[ut]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.TEXTURE_2D,Ht,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,_t.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){let x=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function Pt(b){return Math.min(s.maxSamples,b.samples)}function Ot(b){let x=n.get(b);return b.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function wt(b){let x=a.render.frame;h.get(b)!==x&&(h.set(b,x),b.update())}function Kt(b,x){let N=b.colorSpace,Z=b.format,Q=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||N!==vn&&N!==dn&&(Yt.getTransfer(N)===jt?(Z!==Ve||Q!==nn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),x}function Tt(b){return typeof HTMLImageElement!="undefined"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame!="undefined"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=M,this.setTexture2D=H,this.setTexture2DArray=$,this.setTexture3D=z,this.setTextureCube=Y,this.rebindTextures=yt,this.setupRenderTarget=Dt,this.updateRenderTargetMipmap=Gt,this.updateMultisampleRenderTarget=ue,this.setupDepthRenderbuffer=bt,this.setupFrameBufferTexture=K,this.useMultisampledRTT=Ot}function Ep(i,t){function e(n,s=dn){let r,a=Yt.getTransfer(s);if(n===nn)return i.UNSIGNED_BYTE;if(n===Ya)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Za)return i.UNSIGNED_SHORT_5_5_5_1;if(n===vl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===_l)return i.BYTE;if(n===xl)return i.SHORT;if(n===Pi)return i.UNSIGNED_SHORT;if(n===qa)return i.INT;if(n===Un)return i.UNSIGNED_INT;if(n===tn)return i.FLOAT;if(n===Ni)return i.HALF_FLOAT;if(n===yl)return i.ALPHA;if(n===Ml)return i.RGB;if(n===Ve)return i.RGBA;if(n===Sl)return i.LUMINANCE;if(n===bl)return i.LUMINANCE_ALPHA;if(n===ii)return i.DEPTH_COMPONENT;if(n===ui)return i.DEPTH_STENCIL;if(n===wl)return i.RED;if(n===Ja)return i.RED_INTEGER;if(n===El)return i.RG;if(n===$a)return i.RG_INTEGER;if(n===Ka)return i.RGBA_INTEGER;if(n===hs||n===us||n===ds||n===fs)if(a===jt)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===hs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===us)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ds)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===fs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===hs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===us)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ds)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===fs)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===zr||n===kr||n===Vr||n===Hr)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===zr)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===kr)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Vr)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Hr)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Gr||n===Wr||n===Xr)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Gr||n===Wr)return a===jt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Xr)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===qr||n===Yr||n===Zr||n===Jr||n===$r||n===Kr||n===Qr||n===jr||n===ta||n===ea||n===na||n===ia||n===sa||n===ra)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===qr)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Yr)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Zr)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Jr)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===$r)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Kr)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Qr)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===jr)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ta)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ea)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===na)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ia)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===sa)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ra)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ps||n===aa||n===oa)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===ps)return a===jt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===aa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===oa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Al||n===la||n===ca||n===ha)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===ps)return r.COMPRESSED_RED_RGTC1_EXT;if(n===la)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ca)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ha)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===hi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Ta=class extends pe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},We=class extends Se{constructor(){super(),this.isGroup=!0,this.type="Group"}},Ap={type:"move"},Ri=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new We,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new We,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new We,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let y of t.hand.values()){let d=e.getJointPose(y,n),p=this._getHandJoint(c,y);d!==null&&(p.matrix.fromArray(d.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=d.radius),p.visible=d!==null}let h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=h.position.distanceTo(f.position),m=.02,_=.005;c.inputState.pinching&&u>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Ap)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new We;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Tp=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Cp=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Ca=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new Ue,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new be({vertexShader:Tp,fragmentShader:Cp,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Bt(new Fn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ra=class extends gn{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,f=null,u=null,m=null,_=null,y=new Ca,d=e.getContextAttributes(),p=null,E=null,S=[],w=[],D=new Ut,C=null,A=new pe;A.layers.enable(1),A.viewport=new Jt;let R=new pe;R.layers.enable(2),R.viewport=new Jt;let G=[A,R],g=new Ta;g.layers.enable(1),g.layers.enable(2);let M=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let K=S[X];return K===void 0&&(K=new Ri,S[X]=K),K.getTargetRaySpace()},this.getControllerGrip=function(X){let K=S[X];return K===void 0&&(K=new Ri,S[X]=K),K.getGripSpace()},this.getHand=function(X){let K=S[X];return K===void 0&&(K=new Ri,S[X]=K),K.getHandSpace()};function B(X){let K=w.indexOf(X.inputSource);if(K===-1)return;let dt=S[K];dt!==void 0&&(dt.update(X.inputSource,X.frame,c||a),dt.dispatchEvent({type:X.type,data:X.inputSource}))}function H(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",$);for(let X=0;X<S.length;X++){let K=w[X];K!==null&&(w[X]=null,S[X].disconnect(K))}M=null,k=null,y.reset(),t.setRenderTarget(p),m=null,u=null,f=null,s=null,E=null,zt.stop(),n.isPresenting=!1,t.setPixelRatio(C),t.setSize(D.width,D.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return u!==null?u:m},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(X){if(s=X,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",H),s.addEventListener("inputsourceschange",$),d.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(D),s.renderState.layers===void 0){let K={antialias:d.antialias,alpha:!0,depth:d.depth,stencil:d.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,e,K),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),E=new sn(m.framebufferWidth,m.framebufferHeight,{format:Ve,type:nn,colorSpace:t.outputColorSpace,stencilBuffer:d.stencil})}else{let K=null,dt=null,at=null;d.depth&&(at=d.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,K=d.stencil?ui:ii,dt=d.stencil?hi:Un);let bt={colorFormat:e.RGBA8,depthFormat:at,scaleFactor:r};f=new XRWebGLBinding(s,e),u=f.createProjectionLayer(bt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),E=new sn(u.textureWidth,u.textureHeight,{format:Ve,type:nn,depthTexture:new Ps(u.textureWidth,u.textureHeight,dt,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:d.stencil,colorSpace:t.outputColorSpace,samples:d.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),zt.setContext(s),zt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function $(X){for(let K=0;K<X.removed.length;K++){let dt=X.removed[K],at=w.indexOf(dt);at>=0&&(w[at]=null,S[at].disconnect(dt))}for(let K=0;K<X.added.length;K++){let dt=X.added[K],at=w.indexOf(dt);if(at===-1){for(let yt=0;yt<S.length;yt++)if(yt>=w.length){w.push(dt),at=yt;break}else if(w[yt]===null){w[yt]=dt,at=yt;break}if(at===-1)break}let bt=S[at];bt&&bt.connect(dt)}}let z=new U,Y=new U;function V(X,K,dt){z.setFromMatrixPosition(K.matrixWorld),Y.setFromMatrixPosition(dt.matrixWorld);let at=z.distanceTo(Y),bt=K.projectionMatrix.elements,yt=dt.projectionMatrix.elements,Dt=bt[14]/(bt[10]-1),Gt=bt[14]/(bt[10]+1),Nt=(bt[9]+1)/bt[5],T=(bt[9]-1)/bt[5],ue=(bt[8]-1)/bt[0],Pt=(yt[8]+1)/yt[0],Ot=Dt*ue,wt=Dt*Pt,Kt=at/(-ue+Pt),Tt=Kt*-ue;if(K.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(Tt),X.translateZ(Kt),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),bt[10]===-1)X.projectionMatrix.copy(K.projectionMatrix),X.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{let b=Dt+Kt,x=Gt+Kt,N=Ot-Tt,Z=wt+(at-Tt),Q=Nt*Gt/x*b,q=T*Gt/x*b;X.projectionMatrix.makePerspective(N,Z,Q,q,b,x),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function nt(X,K){K===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(K.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(s===null)return;let K=X.near,dt=X.far;y.texture!==null&&(y.depthNear>0&&(K=y.depthNear),y.depthFar>0&&(dt=y.depthFar)),g.near=R.near=A.near=K,g.far=R.far=A.far=dt,(M!==g.near||k!==g.far)&&(s.updateRenderState({depthNear:g.near,depthFar:g.far}),M=g.near,k=g.far);let at=X.parent,bt=g.cameras;nt(g,at);for(let yt=0;yt<bt.length;yt++)nt(bt[yt],at);bt.length===2?V(g,A,R):g.projectionMatrix.copy(A.projectionMatrix),st(X,g,at)};function st(X,K,dt){dt===null?X.matrix.copy(K.matrixWorld):(X.matrix.copy(dt.matrixWorld),X.matrix.invert(),X.matrix.multiply(K.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(K.projectionMatrix),X.projectionMatrixInverse.copy(K.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=da*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return g},this.getFoveation=function(){if(!(u===null&&m===null))return l},this.setFoveation=function(X){l=X,u!==null&&(u.fixedFoveation=X),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=X)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(g)};let et=null;function Ft(X,K){if(h=K.getViewerPose(c||a),_=K,h!==null){let dt=h.views;m!==null&&(t.setRenderTargetFramebuffer(E,m.framebuffer),t.setRenderTarget(E));let at=!1;dt.length!==g.cameras.length&&(g.cameras.length=0,at=!0);for(let yt=0;yt<dt.length;yt++){let Dt=dt[yt],Gt=null;if(m!==null)Gt=m.getViewport(Dt);else{let T=f.getViewSubImage(u,Dt);Gt=T.viewport,yt===0&&(t.setRenderTargetTextures(E,T.colorTexture,u.ignoreDepthValues?void 0:T.depthStencilTexture),t.setRenderTarget(E))}let Nt=G[yt];Nt===void 0&&(Nt=new pe,Nt.layers.enable(yt),Nt.viewport=new Jt,G[yt]=Nt),Nt.matrix.fromArray(Dt.transform.matrix),Nt.matrix.decompose(Nt.position,Nt.quaternion,Nt.scale),Nt.projectionMatrix.fromArray(Dt.projectionMatrix),Nt.projectionMatrixInverse.copy(Nt.projectionMatrix).invert(),Nt.viewport.set(Gt.x,Gt.y,Gt.width,Gt.height),yt===0&&(g.matrix.copy(Nt.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale)),at===!0&&g.cameras.push(Nt)}let bt=s.enabledFeatures;if(bt&&bt.includes("depth-sensing")){let yt=f.getDepthInformation(dt[0]);yt&&yt.isValid&&yt.texture&&y.init(t,yt,s.renderState)}}for(let dt=0;dt<S.length;dt++){let at=w[dt],bt=S[dt];at!==null&&bt!==void 0&&bt.update(at,K,c||a)}et&&et(X,K),K.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:K}),_=null}let zt=new Ll;zt.setAnimationLoop(Ft),this.setAnimationLoop=function(X){et=X},this.dispose=function(){}}},An=new Xe,Rp=new ee;function Pp(i,t){function e(d,p){d.matrixAutoUpdate===!0&&d.updateMatrix(),p.value.copy(d.matrix)}function n(d,p){p.color.getRGB(d.fogColor.value,Il(i)),p.isFog?(d.fogNear.value=p.near,d.fogFar.value=p.far):p.isFogExp2&&(d.fogDensity.value=p.density)}function s(d,p,E,S,w){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(d,p):p.isMeshToonMaterial?(r(d,p),f(d,p)):p.isMeshPhongMaterial?(r(d,p),h(d,p)):p.isMeshStandardMaterial?(r(d,p),u(d,p),p.isMeshPhysicalMaterial&&m(d,p,w)):p.isMeshMatcapMaterial?(r(d,p),_(d,p)):p.isMeshDepthMaterial?r(d,p):p.isMeshDistanceMaterial?(r(d,p),y(d,p)):p.isMeshNormalMaterial?r(d,p):p.isLineBasicMaterial?(a(d,p),p.isLineDashedMaterial&&o(d,p)):p.isPointsMaterial?l(d,p,E,S):p.isSpriteMaterial?c(d,p):p.isShadowMaterial?(d.color.value.copy(p.color),d.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(d,p){d.opacity.value=p.opacity,p.color&&d.diffuse.value.copy(p.color),p.emissive&&d.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(d.map.value=p.map,e(p.map,d.mapTransform)),p.alphaMap&&(d.alphaMap.value=p.alphaMap,e(p.alphaMap,d.alphaMapTransform)),p.bumpMap&&(d.bumpMap.value=p.bumpMap,e(p.bumpMap,d.bumpMapTransform),d.bumpScale.value=p.bumpScale,p.side===me&&(d.bumpScale.value*=-1)),p.normalMap&&(d.normalMap.value=p.normalMap,e(p.normalMap,d.normalMapTransform),d.normalScale.value.copy(p.normalScale),p.side===me&&d.normalScale.value.negate()),p.displacementMap&&(d.displacementMap.value=p.displacementMap,e(p.displacementMap,d.displacementMapTransform),d.displacementScale.value=p.displacementScale,d.displacementBias.value=p.displacementBias),p.emissiveMap&&(d.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,d.emissiveMapTransform)),p.specularMap&&(d.specularMap.value=p.specularMap,e(p.specularMap,d.specularMapTransform)),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);let E=t.get(p),S=E.envMap,w=E.envMapRotation;S&&(d.envMap.value=S,An.copy(w),An.x*=-1,An.y*=-1,An.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(An.y*=-1,An.z*=-1),d.envMapRotation.value.setFromMatrix4(Rp.makeRotationFromEuler(An)),d.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=p.reflectivity,d.ior.value=p.ior,d.refractionRatio.value=p.refractionRatio),p.lightMap&&(d.lightMap.value=p.lightMap,d.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,d.lightMapTransform)),p.aoMap&&(d.aoMap.value=p.aoMap,d.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,d.aoMapTransform))}function a(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,p.map&&(d.map.value=p.map,e(p.map,d.mapTransform))}function o(d,p){d.dashSize.value=p.dashSize,d.totalSize.value=p.dashSize+p.gapSize,d.scale.value=p.scale}function l(d,p,E,S){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.size.value=p.size*E,d.scale.value=S*.5,p.map&&(d.map.value=p.map,e(p.map,d.uvTransform)),p.alphaMap&&(d.alphaMap.value=p.alphaMap,e(p.alphaMap,d.alphaMapTransform)),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest)}function c(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.rotation.value=p.rotation,p.map&&(d.map.value=p.map,e(p.map,d.mapTransform)),p.alphaMap&&(d.alphaMap.value=p.alphaMap,e(p.alphaMap,d.alphaMapTransform)),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest)}function h(d,p){d.specular.value.copy(p.specular),d.shininess.value=Math.max(p.shininess,1e-4)}function f(d,p){p.gradientMap&&(d.gradientMap.value=p.gradientMap)}function u(d,p){d.metalness.value=p.metalness,p.metalnessMap&&(d.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,d.metalnessMapTransform)),d.roughness.value=p.roughness,p.roughnessMap&&(d.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,d.roughnessMapTransform)),p.envMap&&(d.envMapIntensity.value=p.envMapIntensity)}function m(d,p,E){d.ior.value=p.ior,p.sheen>0&&(d.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),d.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(d.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,d.sheenColorMapTransform)),p.sheenRoughnessMap&&(d.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,d.sheenRoughnessMapTransform))),p.clearcoat>0&&(d.clearcoat.value=p.clearcoat,d.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(d.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,d.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(d.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===me&&d.clearcoatNormalScale.value.negate())),p.dispersion>0&&(d.dispersion.value=p.dispersion),p.iridescence>0&&(d.iridescence.value=p.iridescence,d.iridescenceIOR.value=p.iridescenceIOR,d.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(d.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,d.iridescenceMapTransform)),p.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,d.iridescenceThicknessMapTransform))),p.transmission>0&&(d.transmission.value=p.transmission,d.transmissionSamplerMap.value=E.texture,d.transmissionSamplerSize.value.set(E.width,E.height),p.transmissionMap&&(d.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,d.transmissionMapTransform)),d.thickness.value=p.thickness,p.thicknessMap&&(d.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,d.thicknessMapTransform)),d.attenuationDistance.value=p.attenuationDistance,d.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(d.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(d.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,d.anisotropyMapTransform))),d.specularIntensity.value=p.specularIntensity,d.specularColor.value.copy(p.specularColor),p.specularColorMap&&(d.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,d.specularColorMapTransform)),p.specularIntensityMap&&(d.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,d.specularIntensityMapTransform))}function _(d,p){p.matcap&&(d.matcap.value=p.matcap)}function y(d,p){let E=t.get(p).light;d.referencePosition.value.setFromMatrixPosition(E.matrixWorld),d.nearDistance.value=E.shadow.camera.near,d.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Ip(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,S){let w=S.program;n.uniformBlockBinding(E,w)}function c(E,S){let w=s[E.id];w===void 0&&(_(E),w=h(E),s[E.id]=w,E.addEventListener("dispose",d));let D=S.program;n.updateUBOMapping(E,D);let C=t.render.frame;r[E.id]!==C&&(u(E),r[E.id]=C)}function h(E){let S=f();E.__bindingPointIndex=S;let w=i.createBuffer(),D=E.__size,C=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,D,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,w),w}function f(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(E){let S=s[E.id],w=E.uniforms,D=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let C=0,A=w.length;C<A;C++){let R=Array.isArray(w[C])?w[C]:[w[C]];for(let G=0,g=R.length;G<g;G++){let M=R[G];if(m(M,C,G,D)===!0){let k=M.__offset,B=Array.isArray(M.value)?M.value:[M.value],H=0;for(let $=0;$<B.length;$++){let z=B[$],Y=y(z);typeof z=="number"||typeof z=="boolean"?(M.__data[0]=z,i.bufferSubData(i.UNIFORM_BUFFER,k+H,M.__data)):z.isMatrix3?(M.__data[0]=z.elements[0],M.__data[1]=z.elements[1],M.__data[2]=z.elements[2],M.__data[3]=0,M.__data[4]=z.elements[3],M.__data[5]=z.elements[4],M.__data[6]=z.elements[5],M.__data[7]=0,M.__data[8]=z.elements[6],M.__data[9]=z.elements[7],M.__data[10]=z.elements[8],M.__data[11]=0):(z.toArray(M.__data,H),H+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,k,M.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(E,S,w,D){let C=E.value,A=S+"_"+w;if(D[A]===void 0)return typeof C=="number"||typeof C=="boolean"?D[A]=C:D[A]=C.clone(),!0;{let R=D[A];if(typeof C=="number"||typeof C=="boolean"){if(R!==C)return D[A]=C,!0}else if(R.equals(C)===!1)return R.copy(C),!0}return!1}function _(E){let S=E.uniforms,w=0,D=16;for(let A=0,R=S.length;A<R;A++){let G=Array.isArray(S[A])?S[A]:[S[A]];for(let g=0,M=G.length;g<M;g++){let k=G[g],B=Array.isArray(k.value)?k.value:[k.value];for(let H=0,$=B.length;H<$;H++){let z=B[H],Y=y(z),V=w%D,nt=V%Y.boundary,st=V+nt;w+=nt,st!==0&&D-st<Y.storage&&(w+=D-st),k.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=w,w+=Y.storage}}}let C=w%D;return C>0&&(w+=D-C),E.__size=w,E.__cache={},this}function y(E){let S={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(S.boundary=4,S.storage=4):E.isVector2?(S.boundary=8,S.storage=8):E.isVector3||E.isColor?(S.boundary=16,S.storage=12):E.isVector4?(S.boundary=16,S.storage=16):E.isMatrix3?(S.boundary=48,S.storage=48):E.isMatrix4?(S.boundary=64,S.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),S}function d(E){let S=E.target;S.removeEventListener("dispose",d);let w=a.indexOf(S.__bindingPointIndex);a.splice(w,1),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function p(){for(let E in s)i.deleteBuffer(s[E]);a=[],s={},r={}}return{bind:l,update:c,dispose:p}}var Is=class{constructor(t={}){let{canvas:e=Uc(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1}=t;this.isWebGLRenderer=!0;let u;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");u=n.getContextAttributes().alpha}else u=a;let m=new Uint32Array(4),_=new Int32Array(4),y=null,d=null,p=[],E=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ie,this.toneMapping=pn,this.toneMappingExposure=1;let S=this,w=!1,D=0,C=0,A=null,R=-1,G=null,g=new Jt,M=new Jt,k=null,B=new Ct(0),H=0,$=e.width,z=e.height,Y=1,V=null,nt=null,st=new Jt(0,0,$,z),et=new Jt(0,0,$,z),Ft=!1,zt=new Ii,X=!1,K=!1,dt=new ee,at=new ee,bt=new U,yt=new Jt,Dt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Gt=!1;function Nt(){return A===null?Y:1}let T=n;function ue(v,I){return e.getContext(v,I)}try{let v={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Wa}`),e.addEventListener("webglcontextlost",J,!1),e.addEventListener("webglcontextrestored",ot,!1),e.addEventListener("webglcontextcreationerror",ht,!1),T===null){let I="webgl2";if(T=ue(I,v),T===null)throw ue(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(v){throw console.error("THREE.WebGLRenderer: "+v.message),v}let Pt,Ot,wt,Kt,Tt,b,x,N,Z,Q,q,_t,rt,ut,Ht,j,ft,Et,At,pt,kt,Rt,$t,P;function ct(){Pt=new qd(T),Pt.init(),Rt=new Ep(T,Pt),Ot=new kd(T,Pt,t,Rt),wt=new Sp(T),Ot.reverseDepthBuffer&&wt.buffers.depth.setReversed(!0),Kt=new Jd(T),Tt=new cp,b=new wp(T,Pt,wt,Tt,Ot,Rt,Kt),x=new Hd(S),N=new Xd(S),Z=new nh(T),$t=new Bd(T,Z),Q=new Yd(T,Z,Kt,$t),q=new Kd(T,Q,Z,Kt),At=new $d(T,Ot,b),j=new Vd(Tt),_t=new lp(S,x,N,Pt,Ot,$t,j),rt=new Pp(S,Tt),ut=new up,Ht=new _p(Pt),Et=new Od(S,x,N,wt,q,u,l),ft=new yp(S,q,Ot),P=new Ip(T,Kt,Ot,wt),pt=new zd(T,Pt,Kt),kt=new Zd(T,Pt,Kt),Kt.programs=_t.programs,S.capabilities=Ot,S.extensions=Pt,S.properties=Tt,S.renderLists=ut,S.shadowMap=ft,S.state=wt,S.info=Kt}ct();let W=new Ra(S,T);this.xr=W,this.getContext=function(){return T},this.getContextAttributes=function(){return T.getContextAttributes()},this.forceContextLoss=function(){let v=Pt.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){let v=Pt.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(v){v!==void 0&&(Y=v,this.setSize($,z,!1))},this.getSize=function(v){return v.set($,z)},this.setSize=function(v,I,F=!0){if(W.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=v,z=I,e.width=Math.floor(v*Y),e.height=Math.floor(I*Y),F===!0&&(e.style.width=v+"px",e.style.height=I+"px"),this.setViewport(0,0,v,I)},this.getDrawingBufferSize=function(v){return v.set($*Y,z*Y).floor()},this.setDrawingBufferSize=function(v,I,F){$=v,z=I,Y=F,e.width=Math.floor(v*F),e.height=Math.floor(I*F),this.setViewport(0,0,v,I)},this.getCurrentViewport=function(v){return v.copy(g)},this.getViewport=function(v){return v.copy(st)},this.setViewport=function(v,I,F,O){v.isVector4?st.set(v.x,v.y,v.z,v.w):st.set(v,I,F,O),wt.viewport(g.copy(st).multiplyScalar(Y).round())},this.getScissor=function(v){return v.copy(et)},this.setScissor=function(v,I,F,O){v.isVector4?et.set(v.x,v.y,v.z,v.w):et.set(v,I,F,O),wt.scissor(M.copy(et).multiplyScalar(Y).round())},this.getScissorTest=function(){return Ft},this.setScissorTest=function(v){wt.setScissorTest(Ft=v)},this.setOpaqueSort=function(v){V=v},this.setTransparentSort=function(v){nt=v},this.getClearColor=function(v){return v.copy(Et.getClearColor())},this.setClearColor=function(){Et.setClearColor.apply(Et,arguments)},this.getClearAlpha=function(){return Et.getClearAlpha()},this.setClearAlpha=function(){Et.setClearAlpha.apply(Et,arguments)},this.clear=function(v=!0,I=!0,F=!0){let O=0;if(v){let L=!1;if(A!==null){let tt=A.texture.format;L=tt===Ka||tt===$a||tt===Ja}if(L){let tt=A.texture.type,lt=tt===nn||tt===Un||tt===Pi||tt===hi||tt===Ya||tt===Za,mt=Et.getClearColor(),gt=Et.getClearAlpha(),Mt=mt.r,St=mt.g,xt=mt.b;lt?(m[0]=Mt,m[1]=St,m[2]=xt,m[3]=gt,T.clearBufferuiv(T.COLOR,0,m)):(_[0]=Mt,_[1]=St,_[2]=xt,_[3]=gt,T.clearBufferiv(T.COLOR,0,_))}else O|=T.COLOR_BUFFER_BIT}I&&(O|=T.DEPTH_BUFFER_BIT,T.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),F&&(O|=T.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),T.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",J,!1),e.removeEventListener("webglcontextrestored",ot,!1),e.removeEventListener("webglcontextcreationerror",ht,!1),ut.dispose(),Ht.dispose(),Tt.dispose(),x.dispose(),N.dispose(),q.dispose(),$t.dispose(),P.dispose(),_t.dispose(),W.dispose(),W.removeEventListener("sessionstart",so),W.removeEventListener("sessionend",ro),yn.stop()};function J(v){v.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function ot(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;let v=Kt.autoReset,I=ft.enabled,F=ft.autoUpdate,O=ft.needsUpdate,L=ft.type;ct(),Kt.autoReset=v,ft.enabled=I,ft.autoUpdate=F,ft.needsUpdate=O,ft.type=L}function ht(v){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function Vt(v){let I=v.target;I.removeEventListener("dispose",Vt),se(I)}function se(v){ve(v),Tt.remove(v)}function ve(v){let I=Tt.get(v).programs;I!==void 0&&(I.forEach(function(F){_t.releaseProgram(F)}),v.isShaderMaterial&&_t.releaseShaderCache(v))}this.renderBufferDirect=function(v,I,F,O,L,tt){I===null&&(I=Dt);let lt=L.isMesh&&L.matrixWorld.determinant()<0,mt=Hl(v,I,F,O,L);wt.setMaterial(O,lt);let gt=F.index,Mt=1;if(O.wireframe===!0){if(gt=Q.getWireframeAttribute(F),gt===void 0)return;Mt=2}let St=F.drawRange,xt=F.attributes.position,Zt=St.start*Mt,Qt=(St.start+St.count)*Mt;tt!==null&&(Zt=Math.max(Zt,tt.start*Mt),Qt=Math.min(Qt,(tt.start+tt.count)*Mt)),gt!==null?(Zt=Math.max(Zt,0),Qt=Math.min(Qt,gt.count)):xt!=null&&(Zt=Math.max(Zt,0),Qt=Math.min(Qt,xt.count));let ne=Qt-Zt;if(ne<0||ne===1/0)return;$t.setup(L,O,mt,F,gt);let we,Xt=pt;if(gt!==null&&(we=Z.get(gt),Xt=kt,Xt.setIndex(we)),L.isMesh)O.wireframe===!0?(wt.setLineWidth(O.wireframeLinewidth*Nt()),Xt.setMode(T.LINES)):Xt.setMode(T.TRIANGLES);else if(L.isLine){let vt=O.linewidth;vt===void 0&&(vt=1),wt.setLineWidth(vt*Nt()),L.isLineSegments?Xt.setMode(T.LINES):L.isLineLoop?Xt.setMode(T.LINE_LOOP):Xt.setMode(T.LINE_STRIP)}else L.isPoints?Xt.setMode(T.POINTS):L.isSprite&&Xt.setMode(T.TRIANGLES);if(L.isBatchedMesh)if(L._multiDrawInstances!==null)Xt.renderMultiDrawInstances(L._multiDrawStarts,L._multiDrawCounts,L._multiDrawCount,L._multiDrawInstances);else if(Pt.get("WEBGL_multi_draw"))Xt.renderMultiDraw(L._multiDrawStarts,L._multiDrawCounts,L._multiDrawCount);else{let vt=L._multiDrawStarts,he=L._multiDrawCounts,qt=L._multiDrawCount,Ne=gt?Z.get(gt).bytesPerElement:1,kn=Tt.get(O).currentProgram.getUniforms();for(let Ee=0;Ee<qt;Ee++)kn.setValue(T,"_gl_DrawID",Ee),Xt.render(vt[Ee]/Ne,he[Ee])}else if(L.isInstancedMesh)Xt.renderInstances(Zt,ne,L.count);else if(F.isInstancedBufferGeometry){let vt=F._maxInstanceCount!==void 0?F._maxInstanceCount:1/0,he=Math.min(F.instanceCount,vt);Xt.renderInstances(Zt,ne,he)}else Xt.render(Zt,ne)};function Wt(v,I,F){v.transparent===!0&&v.side===ze&&v.forceSinglePass===!1?(v.side=me,v.needsUpdate=!0,zi(v,I,F),v.side=mn,v.needsUpdate=!0,zi(v,I,F),v.side=ze):zi(v,I,F)}this.compile=function(v,I,F=null){F===null&&(F=v),d=Ht.get(F),d.init(I),E.push(d),F.traverseVisible(function(L){L.isLight&&L.layers.test(I.layers)&&(d.pushLight(L),L.castShadow&&d.pushShadow(L))}),v!==F&&v.traverseVisible(function(L){L.isLight&&L.layers.test(I.layers)&&(d.pushLight(L),L.castShadow&&d.pushShadow(L))}),d.setupLights();let O=new Set;return v.traverse(function(L){if(!(L.isMesh||L.isPoints||L.isLine||L.isSprite))return;let tt=L.material;if(tt)if(Array.isArray(tt))for(let lt=0;lt<tt.length;lt++){let mt=tt[lt];Wt(mt,F,L),O.add(mt)}else Wt(tt,F,L),O.add(tt)}),E.pop(),d=null,O},this.compileAsync=function(v,I,F=null){let O=this.compile(v,I,F);return new Promise(L=>{function tt(){if(O.forEach(function(lt){Tt.get(lt).currentProgram.isReady()&&O.delete(lt)}),O.size===0){L(v);return}setTimeout(tt,10)}Pt.get("KHR_parallel_shader_compile")!==null?tt():setTimeout(tt,10)})};let ye=null;function qe(v){ye&&ye(v)}function so(){yn.stop()}function ro(){yn.start()}let yn=new Ll;yn.setAnimationLoop(qe),typeof self!="undefined"&&yn.setContext(self),this.setAnimationLoop=function(v){ye=v,W.setAnimationLoop(v),v===null?yn.stop():yn.start()},W.addEventListener("sessionstart",so),W.addEventListener("sessionend",ro),this.render=function(v,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),W.enabled===!0&&W.isPresenting===!0&&(W.cameraAutoUpdate===!0&&W.updateCamera(I),I=W.getCamera()),v.isScene===!0&&v.onBeforeRender(S,v,I,A),d=Ht.get(v,E.length),d.init(I),E.push(d),at.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),zt.setFromProjectionMatrix(at),K=this.localClippingEnabled,X=j.init(this.clippingPlanes,K),y=ut.get(v,p.length),y.init(),p.push(y),W.enabled===!0&&W.isPresenting===!0){let tt=S.xr.getDepthSensingMesh();tt!==null&&Gs(tt,I,-1/0,S.sortObjects)}Gs(v,I,0,S.sortObjects),y.finish(),S.sortObjects===!0&&y.sort(V,nt),Gt=W.enabled===!1||W.isPresenting===!1||W.hasDepthSensing()===!1,Gt&&Et.addToRenderList(y,v),this.info.render.frame++,X===!0&&j.beginShadows();let F=d.state.shadowsArray;ft.render(F,v,I),X===!0&&j.endShadows(),this.info.autoReset===!0&&this.info.reset();let O=y.opaque,L=y.transmissive;if(d.setupLights(),I.isArrayCamera){let tt=I.cameras;if(L.length>0)for(let lt=0,mt=tt.length;lt<mt;lt++){let gt=tt[lt];oo(O,L,v,gt)}Gt&&Et.render(v);for(let lt=0,mt=tt.length;lt<mt;lt++){let gt=tt[lt];ao(y,v,gt,gt.viewport)}}else L.length>0&&oo(O,L,v,I),Gt&&Et.render(v),ao(y,v,I);A!==null&&(b.updateMultisampleRenderTarget(A),b.updateRenderTargetMipmap(A)),v.isScene===!0&&v.onAfterRender(S,v,I),$t.resetDefaultState(),R=-1,G=null,E.pop(),E.length>0?(d=E[E.length-1],X===!0&&j.setGlobalState(S.clippingPlanes,d.state.camera)):d=null,p.pop(),p.length>0?y=p[p.length-1]:y=null};function Gs(v,I,F,O){if(v.visible===!1)return;if(v.layers.test(I.layers)){if(v.isGroup)F=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(I);else if(v.isLight)d.pushLight(v),v.castShadow&&d.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||zt.intersectsSprite(v)){O&&yt.setFromMatrixPosition(v.matrixWorld).applyMatrix4(at);let lt=q.update(v),mt=v.material;mt.visible&&y.push(v,lt,mt,F,yt.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||zt.intersectsObject(v))){let lt=q.update(v),mt=v.material;if(O&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),yt.copy(v.boundingSphere.center)):(lt.boundingSphere===null&&lt.computeBoundingSphere(),yt.copy(lt.boundingSphere.center)),yt.applyMatrix4(v.matrixWorld).applyMatrix4(at)),Array.isArray(mt)){let gt=lt.groups;for(let Mt=0,St=gt.length;Mt<St;Mt++){let xt=gt[Mt],Zt=mt[xt.materialIndex];Zt&&Zt.visible&&y.push(v,lt,Zt,F,yt.z,xt)}}else mt.visible&&y.push(v,lt,mt,F,yt.z,null)}}let tt=v.children;for(let lt=0,mt=tt.length;lt<mt;lt++)Gs(tt[lt],I,F,O)}function ao(v,I,F,O){let L=v.opaque,tt=v.transmissive,lt=v.transparent;d.setupLightsView(F),X===!0&&j.setGlobalState(S.clippingPlanes,F),O&&wt.viewport(g.copy(O)),L.length>0&&Bi(L,I,F),tt.length>0&&Bi(tt,I,F),lt.length>0&&Bi(lt,I,F),wt.buffers.depth.setTest(!0),wt.buffers.depth.setMask(!0),wt.buffers.color.setMask(!0),wt.setPolygonOffset(!1)}function oo(v,I,F,O){if((F.isScene===!0?F.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[O.id]===void 0&&(d.state.transmissionRenderTarget[O.id]=new sn(1,1,{generateMipmaps:!0,type:Pt.has("EXT_color_buffer_half_float")||Pt.has("EXT_color_buffer_float")?Ni:nn,minFilter:Ln,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Yt.workingColorSpace}));let tt=d.state.transmissionRenderTarget[O.id],lt=O.viewport||g;tt.setSize(lt.z,lt.w);let mt=S.getRenderTarget();S.setRenderTarget(tt),S.getClearColor(B),H=S.getClearAlpha(),H<1&&S.setClearColor(16777215,.5),S.clear(),Gt&&Et.render(F);let gt=S.toneMapping;S.toneMapping=pn;let Mt=O.viewport;if(O.viewport!==void 0&&(O.viewport=void 0),d.setupLightsView(O),X===!0&&j.setGlobalState(S.clippingPlanes,O),Bi(v,F,O),b.updateMultisampleRenderTarget(tt),b.updateRenderTargetMipmap(tt),Pt.has("WEBGL_multisampled_render_to_texture")===!1){let St=!1;for(let xt=0,Zt=I.length;xt<Zt;xt++){let Qt=I[xt],ne=Qt.object,we=Qt.geometry,Xt=Qt.material,vt=Qt.group;if(Xt.side===ze&&ne.layers.test(O.layers)){let he=Xt.side;Xt.side=me,Xt.needsUpdate=!0,lo(ne,F,O,we,Xt,vt),Xt.side=he,Xt.needsUpdate=!0,St=!0}}St===!0&&(b.updateMultisampleRenderTarget(tt),b.updateRenderTargetMipmap(tt))}S.setRenderTarget(mt),S.setClearColor(B,H),Mt!==void 0&&(O.viewport=Mt),S.toneMapping=gt}function Bi(v,I,F){let O=I.isScene===!0?I.overrideMaterial:null;for(let L=0,tt=v.length;L<tt;L++){let lt=v[L],mt=lt.object,gt=lt.geometry,Mt=O===null?lt.material:O,St=lt.group;mt.layers.test(F.layers)&&lo(mt,I,F,gt,Mt,St)}}function lo(v,I,F,O,L,tt){v.onBeforeRender(S,I,F,O,L,tt),v.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),L.onBeforeRender(S,I,F,O,v,tt),L.transparent===!0&&L.side===ze&&L.forceSinglePass===!1?(L.side=me,L.needsUpdate=!0,S.renderBufferDirect(F,I,O,L,v,tt),L.side=mn,L.needsUpdate=!0,S.renderBufferDirect(F,I,O,L,v,tt),L.side=ze):S.renderBufferDirect(F,I,O,L,v,tt),v.onAfterRender(S,I,F,O,L,tt)}function zi(v,I,F){I.isScene!==!0&&(I=Dt);let O=Tt.get(v),L=d.state.lights,tt=d.state.shadowsArray,lt=L.state.version,mt=_t.getParameters(v,L.state,tt,I,F),gt=_t.getProgramCacheKey(mt),Mt=O.programs;O.environment=v.isMeshStandardMaterial?I.environment:null,O.fog=I.fog,O.envMap=(v.isMeshStandardMaterial?N:x).get(v.envMap||O.environment),O.envMapRotation=O.environment!==null&&v.envMap===null?I.environmentRotation:v.envMapRotation,Mt===void 0&&(v.addEventListener("dispose",Vt),Mt=new Map,O.programs=Mt);let St=Mt.get(gt);if(St!==void 0){if(O.currentProgram===St&&O.lightsStateVersion===lt)return ho(v,mt),St}else mt.uniforms=_t.getUniforms(v),v.onBeforeCompile(mt,S),St=_t.acquireProgram(mt,gt),Mt.set(gt,St),O.uniforms=mt.uniforms;let xt=O.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(xt.clippingPlanes=j.uniform),ho(v,mt),O.needsLights=Wl(v),O.lightsStateVersion=lt,O.needsLights&&(xt.ambientLightColor.value=L.state.ambient,xt.lightProbe.value=L.state.probe,xt.directionalLights.value=L.state.directional,xt.directionalLightShadows.value=L.state.directionalShadow,xt.spotLights.value=L.state.spot,xt.spotLightShadows.value=L.state.spotShadow,xt.rectAreaLights.value=L.state.rectArea,xt.ltc_1.value=L.state.rectAreaLTC1,xt.ltc_2.value=L.state.rectAreaLTC2,xt.pointLights.value=L.state.point,xt.pointLightShadows.value=L.state.pointShadow,xt.hemisphereLights.value=L.state.hemi,xt.directionalShadowMap.value=L.state.directionalShadowMap,xt.directionalShadowMatrix.value=L.state.directionalShadowMatrix,xt.spotShadowMap.value=L.state.spotShadowMap,xt.spotLightMatrix.value=L.state.spotLightMatrix,xt.spotLightMap.value=L.state.spotLightMap,xt.pointShadowMap.value=L.state.pointShadowMap,xt.pointShadowMatrix.value=L.state.pointShadowMatrix),O.currentProgram=St,O.uniformsList=null,St}function co(v){if(v.uniformsList===null){let I=v.currentProgram.getUniforms();v.uniformsList=ri.seqWithValue(I.seq,v.uniforms)}return v.uniformsList}function ho(v,I){let F=Tt.get(v);F.outputColorSpace=I.outputColorSpace,F.batching=I.batching,F.batchingColor=I.batchingColor,F.instancing=I.instancing,F.instancingColor=I.instancingColor,F.instancingMorph=I.instancingMorph,F.skinning=I.skinning,F.morphTargets=I.morphTargets,F.morphNormals=I.morphNormals,F.morphColors=I.morphColors,F.morphTargetsCount=I.morphTargetsCount,F.numClippingPlanes=I.numClippingPlanes,F.numIntersection=I.numClipIntersection,F.vertexAlphas=I.vertexAlphas,F.vertexTangents=I.vertexTangents,F.toneMapping=I.toneMapping}function Hl(v,I,F,O,L){I.isScene!==!0&&(I=Dt),b.resetTextureUnits();let tt=I.fog,lt=O.isMeshStandardMaterial?I.environment:null,mt=A===null?S.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:vn,gt=(O.isMeshStandardMaterial?N:x).get(O.envMap||lt),Mt=O.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,St=!!F.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),xt=!!F.morphAttributes.position,Zt=!!F.morphAttributes.normal,Qt=!!F.morphAttributes.color,ne=pn;O.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(ne=S.toneMapping);let we=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,Xt=we!==void 0?we.length:0,vt=Tt.get(O),he=d.state.lights;if(X===!0&&(K===!0||v!==G)){let Re=v===G&&O.id===R;j.setState(O,v,Re)}let qt=!1;O.version===vt.__version?(vt.needsLights&&vt.lightsStateVersion!==he.state.version||vt.outputColorSpace!==mt||L.isBatchedMesh&&vt.batching===!1||!L.isBatchedMesh&&vt.batching===!0||L.isBatchedMesh&&vt.batchingColor===!0&&L.colorTexture===null||L.isBatchedMesh&&vt.batchingColor===!1&&L.colorTexture!==null||L.isInstancedMesh&&vt.instancing===!1||!L.isInstancedMesh&&vt.instancing===!0||L.isSkinnedMesh&&vt.skinning===!1||!L.isSkinnedMesh&&vt.skinning===!0||L.isInstancedMesh&&vt.instancingColor===!0&&L.instanceColor===null||L.isInstancedMesh&&vt.instancingColor===!1&&L.instanceColor!==null||L.isInstancedMesh&&vt.instancingMorph===!0&&L.morphTexture===null||L.isInstancedMesh&&vt.instancingMorph===!1&&L.morphTexture!==null||vt.envMap!==gt||O.fog===!0&&vt.fog!==tt||vt.numClippingPlanes!==void 0&&(vt.numClippingPlanes!==j.numPlanes||vt.numIntersection!==j.numIntersection)||vt.vertexAlphas!==Mt||vt.vertexTangents!==St||vt.morphTargets!==xt||vt.morphNormals!==Zt||vt.morphColors!==Qt||vt.toneMapping!==ne||vt.morphTargetsCount!==Xt)&&(qt=!0):(qt=!0,vt.__version=O.version);let Ne=vt.currentProgram;qt===!0&&(Ne=zi(O,I,L));let kn=!1,Ee=!1,Ws=!1,ie=Ne.getUniforms(),rn=vt.uniforms;if(wt.useProgram(Ne.program)&&(kn=!0,Ee=!0,Ws=!0),O.id!==R&&(R=O.id,Ee=!0),kn||G!==v){Ot.reverseDepthBuffer?(dt.copy(v.projectionMatrix),Nc(dt),Fc(dt),ie.setValue(T,"projectionMatrix",dt)):ie.setValue(T,"projectionMatrix",v.projectionMatrix),ie.setValue(T,"viewMatrix",v.matrixWorldInverse);let Re=ie.map.cameraPosition;Re!==void 0&&Re.setValue(T,bt.setFromMatrixPosition(v.matrixWorld)),Ot.logarithmicDepthBuffer&&ie.setValue(T,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&ie.setValue(T,"isOrthographic",v.isOrthographicCamera===!0),G!==v&&(G=v,Ee=!0,Ws=!0)}if(L.isSkinnedMesh){ie.setOptional(T,L,"bindMatrix"),ie.setOptional(T,L,"bindMatrixInverse");let Re=L.skeleton;Re&&(Re.boneTexture===null&&Re.computeBoneTexture(),ie.setValue(T,"boneTexture",Re.boneTexture,b))}L.isBatchedMesh&&(ie.setOptional(T,L,"batchingTexture"),ie.setValue(T,"batchingTexture",L._matricesTexture,b),ie.setOptional(T,L,"batchingIdTexture"),ie.setValue(T,"batchingIdTexture",L._indirectTexture,b),ie.setOptional(T,L,"batchingColorTexture"),L._colorsTexture!==null&&ie.setValue(T,"batchingColorTexture",L._colorsTexture,b));let Xs=F.morphAttributes;if((Xs.position!==void 0||Xs.normal!==void 0||Xs.color!==void 0)&&At.update(L,F,Ne),(Ee||vt.receiveShadow!==L.receiveShadow)&&(vt.receiveShadow=L.receiveShadow,ie.setValue(T,"receiveShadow",L.receiveShadow)),O.isMeshGouraudMaterial&&O.envMap!==null&&(rn.envMap.value=gt,rn.flipEnvMap.value=gt.isCubeTexture&&gt.isRenderTargetTexture===!1?-1:1),O.isMeshStandardMaterial&&O.envMap===null&&I.environment!==null&&(rn.envMapIntensity.value=I.environmentIntensity),Ee&&(ie.setValue(T,"toneMappingExposure",S.toneMappingExposure),vt.needsLights&&Gl(rn,Ws),tt&&O.fog===!0&&rt.refreshFogUniforms(rn,tt),rt.refreshMaterialUniforms(rn,O,Y,z,d.state.transmissionRenderTarget[v.id]),ri.upload(T,co(vt),rn,b)),O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(ri.upload(T,co(vt),rn,b),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&ie.setValue(T,"center",L.center),ie.setValue(T,"modelViewMatrix",L.modelViewMatrix),ie.setValue(T,"normalMatrix",L.normalMatrix),ie.setValue(T,"modelMatrix",L.matrixWorld),O.isShaderMaterial||O.isRawShaderMaterial){let Re=O.uniformsGroups;for(let qs=0,Xl=Re.length;qs<Xl;qs++){let uo=Re[qs];P.update(uo,Ne),P.bind(uo,Ne)}}return Ne}function Gl(v,I){v.ambientLightColor.needsUpdate=I,v.lightProbe.needsUpdate=I,v.directionalLights.needsUpdate=I,v.directionalLightShadows.needsUpdate=I,v.pointLights.needsUpdate=I,v.pointLightShadows.needsUpdate=I,v.spotLights.needsUpdate=I,v.spotLightShadows.needsUpdate=I,v.rectAreaLights.needsUpdate=I,v.hemisphereLights.needsUpdate=I}function Wl(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(v,I,F){Tt.get(v.texture).__webglTexture=I,Tt.get(v.depthTexture).__webglTexture=F;let O=Tt.get(v);O.__hasExternalTextures=!0,O.__autoAllocateDepthBuffer=F===void 0,O.__autoAllocateDepthBuffer||Pt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),O.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(v,I){let F=Tt.get(v);F.__webglFramebuffer=I,F.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(v,I=0,F=0){A=v,D=I,C=F;let O=!0,L=null,tt=!1,lt=!1;if(v){let gt=Tt.get(v);if(gt.__useDefaultFramebuffer!==void 0)wt.bindFramebuffer(T.FRAMEBUFFER,null),O=!1;else if(gt.__webglFramebuffer===void 0)b.setupRenderTarget(v);else if(gt.__hasExternalTextures)b.rebindTextures(v,Tt.get(v.texture).__webglTexture,Tt.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){let xt=v.depthTexture;if(gt.__boundDepthTexture!==xt){if(xt!==null&&Tt.has(xt)&&(v.width!==xt.image.width||v.height!==xt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(v)}}let Mt=v.texture;(Mt.isData3DTexture||Mt.isDataArrayTexture||Mt.isCompressedArrayTexture)&&(lt=!0);let St=Tt.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(St[I])?L=St[I][F]:L=St[I],tt=!0):v.samples>0&&b.useMultisampledRTT(v)===!1?L=Tt.get(v).__webglMultisampledFramebuffer:Array.isArray(St)?L=St[F]:L=St,g.copy(v.viewport),M.copy(v.scissor),k=v.scissorTest}else g.copy(st).multiplyScalar(Y).floor(),M.copy(et).multiplyScalar(Y).floor(),k=Ft;if(wt.bindFramebuffer(T.FRAMEBUFFER,L)&&O&&wt.drawBuffers(v,L),wt.viewport(g),wt.scissor(M),wt.setScissorTest(k),tt){let gt=Tt.get(v.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_CUBE_MAP_POSITIVE_X+I,gt.__webglTexture,F)}else if(lt){let gt=Tt.get(v.texture),Mt=I||0;T.framebufferTextureLayer(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,gt.__webglTexture,F||0,Mt)}R=-1},this.readRenderTargetPixels=function(v,I,F,O,L,tt,lt){if(!(v&&v.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let mt=Tt.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&lt!==void 0&&(mt=mt[lt]),mt){wt.bindFramebuffer(T.FRAMEBUFFER,mt);try{let gt=v.texture,Mt=gt.format,St=gt.type;if(!Ot.textureFormatReadable(Mt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ot.textureTypeReadable(St)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=v.width-O&&F>=0&&F<=v.height-L&&T.readPixels(I,F,O,L,Rt.convert(Mt),Rt.convert(St),tt)}finally{let gt=A!==null?Tt.get(A).__webglFramebuffer:null;wt.bindFramebuffer(T.FRAMEBUFFER,gt)}}},this.readRenderTargetPixelsAsync=async function(v,I,F,O,L,tt,lt){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let mt=Tt.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&lt!==void 0&&(mt=mt[lt]),mt){let gt=v.texture,Mt=gt.format,St=gt.type;if(!Ot.textureFormatReadable(Mt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ot.textureTypeReadable(St))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(I>=0&&I<=v.width-O&&F>=0&&F<=v.height-L){wt.bindFramebuffer(T.FRAMEBUFFER,mt);let xt=T.createBuffer();T.bindBuffer(T.PIXEL_PACK_BUFFER,xt),T.bufferData(T.PIXEL_PACK_BUFFER,tt.byteLength,T.STREAM_READ),T.readPixels(I,F,O,L,Rt.convert(Mt),Rt.convert(St),0);let Zt=A!==null?Tt.get(A).__webglFramebuffer:null;wt.bindFramebuffer(T.FRAMEBUFFER,Zt);let Qt=T.fenceSync(T.SYNC_GPU_COMMANDS_COMPLETE,0);return T.flush(),await Dc(T,Qt,4),T.bindBuffer(T.PIXEL_PACK_BUFFER,xt),T.getBufferSubData(T.PIXEL_PACK_BUFFER,0,tt),T.deleteBuffer(xt),T.deleteSync(Qt),tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(v,I=null,F=0){v.isTexture!==!0&&(ms("WebGLRenderer: copyFramebufferToTexture function signature has changed."),I=arguments[0]||null,v=arguments[1]);let O=Math.pow(2,-F),L=Math.floor(v.image.width*O),tt=Math.floor(v.image.height*O),lt=I!==null?I.x:0,mt=I!==null?I.y:0;b.setTexture2D(v,0),T.copyTexSubImage2D(T.TEXTURE_2D,F,0,0,lt,mt,L,tt),wt.unbindTexture()},this.copyTextureToTexture=function(v,I,F=null,O=null,L=0){v.isTexture!==!0&&(ms("WebGLRenderer: copyTextureToTexture function signature has changed."),O=arguments[0]||null,v=arguments[1],I=arguments[2],L=arguments[3]||0,F=null);let tt,lt,mt,gt,Mt,St;F!==null?(tt=F.max.x-F.min.x,lt=F.max.y-F.min.y,mt=F.min.x,gt=F.min.y):(tt=v.image.width,lt=v.image.height,mt=0,gt=0),O!==null?(Mt=O.x,St=O.y):(Mt=0,St=0);let xt=Rt.convert(I.format),Zt=Rt.convert(I.type);b.setTexture2D(I,0),T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,I.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,I.unpackAlignment);let Qt=T.getParameter(T.UNPACK_ROW_LENGTH),ne=T.getParameter(T.UNPACK_IMAGE_HEIGHT),we=T.getParameter(T.UNPACK_SKIP_PIXELS),Xt=T.getParameter(T.UNPACK_SKIP_ROWS),vt=T.getParameter(T.UNPACK_SKIP_IMAGES),he=v.isCompressedTexture?v.mipmaps[L]:v.image;T.pixelStorei(T.UNPACK_ROW_LENGTH,he.width),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,he.height),T.pixelStorei(T.UNPACK_SKIP_PIXELS,mt),T.pixelStorei(T.UNPACK_SKIP_ROWS,gt),v.isDataTexture?T.texSubImage2D(T.TEXTURE_2D,L,Mt,St,tt,lt,xt,Zt,he.data):v.isCompressedTexture?T.compressedTexSubImage2D(T.TEXTURE_2D,L,Mt,St,he.width,he.height,xt,he.data):T.texSubImage2D(T.TEXTURE_2D,L,Mt,St,tt,lt,xt,Zt,he),T.pixelStorei(T.UNPACK_ROW_LENGTH,Qt),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,ne),T.pixelStorei(T.UNPACK_SKIP_PIXELS,we),T.pixelStorei(T.UNPACK_SKIP_ROWS,Xt),T.pixelStorei(T.UNPACK_SKIP_IMAGES,vt),L===0&&I.generateMipmaps&&T.generateMipmap(T.TEXTURE_2D),wt.unbindTexture()},this.copyTextureToTexture3D=function(v,I,F=null,O=null,L=0){v.isTexture!==!0&&(ms("WebGLRenderer: copyTextureToTexture3D function signature has changed."),F=arguments[0]||null,O=arguments[1]||null,v=arguments[2],I=arguments[3],L=arguments[4]||0);let tt,lt,mt,gt,Mt,St,xt,Zt,Qt,ne=v.isCompressedTexture?v.mipmaps[L]:v.image;F!==null?(tt=F.max.x-F.min.x,lt=F.max.y-F.min.y,mt=F.max.z-F.min.z,gt=F.min.x,Mt=F.min.y,St=F.min.z):(tt=ne.width,lt=ne.height,mt=ne.depth,gt=0,Mt=0,St=0),O!==null?(xt=O.x,Zt=O.y,Qt=O.z):(xt=0,Zt=0,Qt=0);let we=Rt.convert(I.format),Xt=Rt.convert(I.type),vt;if(I.isData3DTexture)b.setTexture3D(I,0),vt=T.TEXTURE_3D;else if(I.isDataArrayTexture||I.isCompressedArrayTexture)b.setTexture2DArray(I,0),vt=T.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,I.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,I.unpackAlignment);let he=T.getParameter(T.UNPACK_ROW_LENGTH),qt=T.getParameter(T.UNPACK_IMAGE_HEIGHT),Ne=T.getParameter(T.UNPACK_SKIP_PIXELS),kn=T.getParameter(T.UNPACK_SKIP_ROWS),Ee=T.getParameter(T.UNPACK_SKIP_IMAGES);T.pixelStorei(T.UNPACK_ROW_LENGTH,ne.width),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,ne.height),T.pixelStorei(T.UNPACK_SKIP_PIXELS,gt),T.pixelStorei(T.UNPACK_SKIP_ROWS,Mt),T.pixelStorei(T.UNPACK_SKIP_IMAGES,St),v.isDataTexture||v.isData3DTexture?T.texSubImage3D(vt,L,xt,Zt,Qt,tt,lt,mt,we,Xt,ne.data):I.isCompressedArrayTexture?T.compressedTexSubImage3D(vt,L,xt,Zt,Qt,tt,lt,mt,we,ne.data):T.texSubImage3D(vt,L,xt,Zt,Qt,tt,lt,mt,we,Xt,ne),T.pixelStorei(T.UNPACK_ROW_LENGTH,he),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,qt),T.pixelStorei(T.UNPACK_SKIP_PIXELS,Ne),T.pixelStorei(T.UNPACK_SKIP_ROWS,kn),T.pixelStorei(T.UNPACK_SKIP_IMAGES,Ee),L===0&&I.generateMipmaps&&T.generateMipmap(vt),wt.unbindTexture()},this.initRenderTarget=function(v){Tt.get(v).__webglFramebuffer===void 0&&b.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?b.setTextureCube(v,0):v.isData3DTexture?b.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?b.setTexture2DArray(v,0):b.setTexture2D(v,0),wt.unbindTexture()},this.resetState=function(){D=0,C=0,A=null,wt.reset(),$t.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return en}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===Qa?"display-p3":"srgb",e.unpackColorSpace=Yt.workingColorSpace===zs?"display-p3":"srgb"}};var gi=class extends Se{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Xe,this.environmentIntensity=1,this.environmentRotation=new Xe,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var Pa=class extends xn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ct(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},ll=new ee,Ia=new ws,os=new di,ls=new U,Ls=class extends Se{constructor(t=new Ce,e=new Pa){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),os.copy(n.boundingSphere),os.applyMatrix4(s),os.radius+=r,t.ray.intersectsSphere(os)===!1)return;ll.copy(s).invert(),Ia.copy(t.ray).applyMatrix4(ll);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,f=n.attributes.position;if(c!==null){let u=Math.max(0,a.start),m=Math.min(c.count,a.start+a.count);for(let _=u,y=m;_<y;_++){let d=c.getX(_);ls.fromBufferAttribute(f,d),cl(ls,d,l,s,t,e,this)}}else{let u=Math.max(0,a.start),m=Math.min(f.count,a.start+a.count);for(let _=u,y=m;_<y;_++)ls.fromBufferAttribute(f,_),cl(ls,_,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function cl(i,t,e,n,s,r,a){let o=Ia.distanceSqToPoint(i);if(o<e){let l=new U;Ia.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var Li=class i extends Ce{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],l=[],c=new U,h=new Ut;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let f=0,u=3;f<=e;f++,u+=3){let m=n+f/e*s;c.x=t*Math.cos(m),c.y=t*Math.sin(m),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[u]/t+1)/2,h.y=(a[u+1]/t+1)/2,l.push(h.x,h.y)}for(let f=1;f<=e;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new ce(a,3)),this.setAttribute("normal",new ce(o,3)),this.setAttribute("uv",new ce(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},On=class i extends Ce{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],f=[],u=[],m=[],_=0,y=[],d=n/2,p=0;E(),a===!1&&(t>0&&S(!0),e>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new ce(f,3)),this.setAttribute("normal",new ce(u,3)),this.setAttribute("uv",new ce(m,2));function E(){let w=new U,D=new U,C=0,A=(e-t)/n;for(let R=0;R<=r;R++){let G=[],g=R/r,M=g*(e-t)+t;for(let k=0;k<=s;k++){let B=k/s,H=B*l+o,$=Math.sin(H),z=Math.cos(H);D.x=M*$,D.y=-g*n+d,D.z=M*z,f.push(D.x,D.y,D.z),w.set($,A,z).normalize(),u.push(w.x,w.y,w.z),m.push(B,1-g),G.push(_++)}y.push(G)}for(let R=0;R<s;R++)for(let G=0;G<r;G++){let g=y[G][R],M=y[G+1][R],k=y[G+1][R+1],B=y[G][R+1];t>0&&(h.push(g,M,B),C+=3),e>0&&(h.push(M,k,B),C+=3)}c.addGroup(p,C,0),p+=C}function S(w){let D=_,C=new Ut,A=new U,R=0,G=w===!0?t:e,g=w===!0?1:-1;for(let k=1;k<=s;k++)f.push(0,d*g,0),u.push(0,g,0),m.push(.5,.5),_++;let M=_;for(let k=0;k<=s;k++){let H=k/s*l+o,$=Math.cos(H),z=Math.sin(H);A.x=G*z,A.y=d*g,A.z=G*$,f.push(A.x,A.y,A.z),u.push(0,g,0),C.x=$*.5+.5,C.y=z*.5*g+.5,m.push(C.x,C.y),_++}for(let k=0;k<s;k++){let B=D+k,H=M+k;w===!0?h.push(H,H+1,B):h.push(H+1,H,B),R+=3}c.addGroup(p,R,w===!0?1:2),p+=R}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Us=class i extends Ce{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let a=[],o=[],l=[],c=[],h=new U,f=new U,u=new U;for(let m=0;m<=n;m++)for(let _=0;_<=s;_++){let y=_/s*r,d=m/n*Math.PI*2;f.x=(t+e*Math.cos(d))*Math.cos(y),f.y=(t+e*Math.cos(d))*Math.sin(y),f.z=e*Math.sin(d),o.push(f.x,f.y,f.z),h.x=t*Math.cos(y),h.y=t*Math.sin(y),u.subVectors(f,h).normalize(),l.push(u.x,u.y,u.z),c.push(_/s),c.push(m/n)}for(let m=1;m<=n;m++)for(let _=1;_<=s;_++){let y=(s+1)*m+_-1,d=(s+1)*(m-1)+_-1,p=(s+1)*(m-1)+_,E=(s+1)*m+_;a.push(y,d,E),a.push(d,p,E)}this.setIndex(a),this.setAttribute("position",new ce(o,3)),this.setAttribute("normal",new ce(l,3)),this.setAttribute("uv",new ce(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var De=class extends xn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ct(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Tl,this.normalScale=new Ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xe,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Ui=class extends De{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ut(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return _e(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ct(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ct(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ct(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};function cs(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Lp(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var _i=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},La=class extends _i{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:go,endingEnd:go}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case _o:r=t,o=2*e-n;break;case xo:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case _o:a=t,l=2*n-e;break;case xo:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,f=this._offsetNext,u=this._weightPrev,m=this._weightNext,_=(n-e)/(s-e),y=_*_,d=y*_,p=-u*d+2*u*y-u*_,E=(1+u)*d+(-1.5-2*u)*y+(-.5+u)*_+1,S=(-1-m)*d+(1.5+m)*y+.5*_,w=m*d-m*y;for(let D=0;D!==o;++D)r[D]=p*a[h+D]+E*a[c+D]+S*a[l+D]+w*a[f+D];return r}},Ua=class extends _i{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(s-e),f=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*f+a[l+u]*h;return r}},Da=class extends _i{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},He=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=cs(e,this.TimeBufferType),this.values=cs(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:cs(t.times,Array),values:cs(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Da(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Ua(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new La(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case gs:e=this.InterpolantFactoryMethodDiscrete;break;case ua:e=this.InterpolantFactoryMethodLinear;break;case Zs:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return gs;case this.InterpolantFactoryMethodLinear:return ua;case this.InterpolantFactoryMethodSmooth:return Zs}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&Lp(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Zs,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let f=o*n,u=f-n,m=f+n;for(let _=0;_!==n;++_){let y=e[f+_];if(y!==e[u+_]||y!==e[m+_]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let f=o*n,u=a*n;for(let m=0;m!==n;++m)e[u+m]=e[f+m]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};He.prototype.TimeBufferType=Float32Array;He.prototype.ValueBufferType=Float32Array;He.prototype.DefaultInterpolation=ua;var Bn=class extends He{constructor(t,e,n){super(t,e,n)}};Bn.prototype.ValueTypeName="bool";Bn.prototype.ValueBufferType=Array;Bn.prototype.DefaultInterpolation=gs;Bn.prototype.InterpolantFactoryMethodLinear=void 0;Bn.prototype.InterpolantFactoryMethodSmooth=void 0;var Na=class extends He{};Na.prototype.ValueTypeName="color";var Fa=class extends He{};Fa.prototype.ValueTypeName="number";var Oa=class extends _i{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)_n.slerpFlat(r,0,a,c-o,a,c,l);return r}},Ds=class extends He{InterpolantFactoryMethodLinear(t){return new Oa(this.times,this.values,this.getValueSize(),t)}};Ds.prototype.ValueTypeName="quaternion";Ds.prototype.InterpolantFactoryMethodSmooth=void 0;var zn=class extends He{constructor(t,e,n){super(t,e,n)}};zn.prototype.ValueTypeName="string";zn.prototype.ValueBufferType=Array;zn.prototype.DefaultInterpolation=gs;zn.prototype.InterpolantFactoryMethodLinear=void 0;zn.prototype.InterpolantFactoryMethodSmooth=void 0;var Ba=class extends He{};Ba.prototype.ValueTypeName="vector";var za=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){let f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,u=c.length;f<u;f+=2){let m=c[f],_=c[f+1];if(m.global&&(m.lastIndex=0),m.test(h))return _}return null}}},Up=new za,ka=class{constructor(t){this.manager=t!==void 0?t:Up,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};ka.DEFAULT_MATERIAL_NAME="__DEFAULT";var Di=class extends Se{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ct(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Ns=class extends Di{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Se.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ct(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},wr=new ee,hl=new U,ul=new U,Va=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ut(512,512),this.map=null,this.mapPass=null,this.matrix=new ee,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ii,this._frameExtents=new Ut(1,1),this._viewportCount=1,this._viewports=[new Jt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;hl.setFromMatrixPosition(t.matrixWorld),e.position.copy(hl),ul.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ul),e.updateMatrixWorld(),wr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(wr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var dl=new ee,Ti=new U,Er=new U,Ha=class extends Va{constructor(){super(new pe(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ut(4,2),this._viewportCount=6,this._viewports=[new Jt(2,1,1,1),new Jt(0,1,1,1),new Jt(3,1,1,1),new Jt(1,1,1,1),new Jt(3,0,1,1),new Jt(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ti.setFromMatrixPosition(t.matrixWorld),n.position.copy(Ti),Er.copy(n.position),Er.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Er),n.updateMatrixWorld(),s.makeTranslation(-Ti.x,-Ti.y,-Ti.z),dl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(dl)}},xi=class extends Di{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Ha}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}};var Fs=class extends Di{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var Os=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=fl(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=fl();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function fl(){return performance.now()}var to="\\[\\]\\.:\\/",Dp=new RegExp("["+to+"]","g"),eo="[^"+to+"]",Np="[^"+to.replace("\\.","")+"]",Fp=/((?:WC+[\/:])*)/.source.replace("WC",eo),Op=/(WCOD+)?/.source.replace("WCOD",Np),Bp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",eo),zp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",eo),kp=new RegExp("^"+Fp+Op+Bp+zp+"$"),Vp=["material","materials","bones","map"],Ga=class{constructor(t,e,n){let s=n||te.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},te=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Dp,"")}static parseTrackName(t){let e=kp.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Vp.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};te.Composite=Ga;te.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};te.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};te.prototype.GetterByBindingType=[te.prototype._getValue_direct,te.prototype._getValue_array,te.prototype._getValue_arrayElement,te.prototype._getValue_toArray];te.prototype.SetterByBindingTypeAndVersioning=[[te.prototype._setValue_direct,te.prototype._setValue_direct_setNeedsUpdate,te.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[te.prototype._setValue_array,te.prototype._setValue_array_setNeedsUpdate,te.prototype._setValue_array_setMatrixWorldNeedsUpdate],[te.prototype._setValue_arrayElement,te.prototype._setValue_arrayElement_setNeedsUpdate,te.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[te.prototype._setValue_fromArray,te.prototype._setValue_fromArray_setNeedsUpdate,te.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Gp=new Float32Array(1);typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Wa}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Wa);var Vs=class extends gi{constructor(){super();let t=new Nn;t.deleteAttribute("uv");let e=new De({side:me}),n=new De,s=new xi(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new Bt(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new Bt(t,n);a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),this.add(a);let o=new Bt(t,n);o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),this.add(o);let l=new Bt(t,n);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);let c=new Bt(t,n);c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);let h=new Bt(t,n);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);let f=new Bt(t,n);f.position.set(-2.193,-.369,-5.547),f.rotation.set(0,.516,0),f.scale.set(3.875,3.487,2.986),this.add(f);let u=new Bt(t,yi(50));u.position.set(-16.116,14.37,8.208),u.scale.set(.1,2.428,2.739),this.add(u);let m=new Bt(t,yi(50));m.position.set(-16.109,18.021,-8.207),m.scale.set(.1,2.425,2.751),this.add(m);let _=new Bt(t,yi(17));_.position.set(14.904,12.198,-1.832),_.scale.set(.15,4.265,6.331),this.add(_);let y=new Bt(t,yi(43));y.position.set(-.462,8.89,14.52),y.scale.set(4.38,5.441,.088),this.add(y);let d=new Bt(t,yi(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);let p=new Bt(t,yi(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function yi(i){let t=new fi;return t.color.setScalar(i),t}var Ol=`
vec3 mod289(vec3 x){return x-floor(x*(1.0/289.0))*289.0;}
vec4 mod289(vec4 x){return x-floor(x*(1.0/289.0))*289.0;}
vec4 permute(vec4 x){return mod289(((x*34.0)+1.0)*x);}
vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-0.85373472095314*r;}
float snoise(vec3 v){
  const vec2 C=vec2(1.0/6.0,1.0/3.0);const vec4 D=vec4(0.0,0.5,1.0,2.0);
  vec3 i=floor(v+dot(v,C.yyy));vec3 x0=v-i+dot(i,C.xxx);
  vec3 g=step(x0.yzx,x0.xyz);vec3 l=1.0-g;vec3 i1=min(g.xyz,l.zxy);vec3 i2=max(g.xyz,l.zxy);
  vec3 x1=x0-i1+C.xxx;vec3 x2=x0-i2+C.yyy;vec3 x3=x0-D.yyy;
  i=mod289(i);
  vec4 p=permute(permute(permute(i.z+vec4(0.0,i1.z,i2.z,1.0))+i.y+vec4(0.0,i1.y,i2.y,1.0))+i.x+vec4(0.0,i1.x,i2.x,1.0));
  float n_=0.142857142857;vec3 ns=n_*D.wyz-D.xzx;
  vec4 j=p-49.0*floor(p*ns.z*ns.z);vec4 x_=floor(j*ns.z);vec4 y_=floor(j-7.0*x_);
  vec4 x=x_*ns.x+ns.yyyy;vec4 y=y_*ns.x+ns.yyyy;vec4 h=1.0-abs(x)-abs(y);
  vec4 b0=vec4(x.xy,y.xy);vec4 b1=vec4(x.zw,y.zw);
  vec4 s0=floor(b0)*2.0+1.0;vec4 s1=floor(b1)*2.0+1.0;vec4 sh=-step(h,vec4(0.0));
  vec4 a0=b0.xzyw+s0.xzyw*sh.xxyy;vec4 a1=b1.xzyw+s1.xzyw*sh.zzww;
  vec3 p0=vec3(a0.xy,h.x);vec3 p1=vec3(a0.zw,h.y);vec3 p2=vec3(a1.xy,h.z);vec3 p3=vec3(a1.zw,h.w);
  vec4 norm=taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));
  p0*=norm.x;p1*=norm.y;p2*=norm.z;p3*=norm.w;
  vec4 m=max(0.6-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.0);m=m*m;
  return 42.0*dot(m*m,vec4(dot(p0,x0),dot(p1,x1),dot(p2,x2),dot(p3,x3)));
}
`;function Oi(i,t,e){let n=getComputedStyle(i).getPropertyValue(t).trim(),s=new Ct;try{s.setStyle(n||e)}catch{s.setStyle(e)}return s}function Bl(i,t=0){let e=i.position.z-t,n=2*Math.tan(i.fov*Math.PI/360)*e;return{w:n*i.aspect,h:n}}var no=()=>window.matchMedia("(max-width: 749px)").matches,Hp=i=>Math.min(1,Math.max(0,i)),io=(i,t,e)=>Hp((i-t)/(e-t)),Hs=i=>i*i*(3-2*i);function zl(i,t,e,n){return i==="arch"?{x:0,y:0,fit:Math.min(e,n*.8)}:i==="title"?{x:0,y:t>1.05?-n*.27:-n*.24,fit:Math.min(e,n*.5)}:i==="center"||i==="play"?{x:0,y:0,fit:Math.min(e,n)}:t>1.05&&i==="poster"?{x:e*.27,y:n*.06,fit:Math.min(e*.4,n*.86)}:t>1.05?{x:e*.21,y:0,fit:Math.min(e*.5,n)}:{x:0,y:n*.2,fit:Math.min(e,n*.55)}}function kl(i,t={}){let e;try{e=new Is({canvas:i,antialias:t.antialias!==!1,alpha:t.alpha!==!1,powerPreference:"high-performance"})}catch{return null}if(!e.getContext())return null;e.outputColorSpace=Ie,e.setPixelRatio(Math.min(window.devicePixelRatio||1,no()?1.5:1.75));let n=i.parentElement,s=i.closest("[data-hero]")||n,r=i.closest("[data-pin-stage]")||n,a=0,o=0,l={w:1,h:1,aspect:1,time:0,scroll:0,exit:0,visible:!0,running:!1,layout:t.layout||"split",pointer:new Ut,pointerTarget:new Ut,pointerVel:new Ut,lastMove:-10,reduce:!!t.reduceMotion,speed:{calm:.6,normal:1,energetic:1.5}[t.intensity]||1,taps:[]},c=()=>{},h=()=>{},f=new Os,u=0,m=R=>{if(l.time-l.lastMove>2.5){let M=l.time*.35;l.pointerTarget.set(Math.sin(M)*.45,Math.cos(M*.8)*.3)}let G=R?1-Math.pow(.0015,R):1;l.scroll+=(a-l.scroll)*G,l.exit+=(o-l.exit)*G;let g=l.pointer.clone();l.pointer.lerp(l.pointerTarget,1-Math.pow(.002,R||.016)),l.pointerVel.copy(l.pointer).sub(g),c(l,R)},_=()=>{u=requestAnimationFrame(_);let R=Math.min(f.getDelta(),.05)*l.speed;l.time+=R,m(R)},y=()=>{l.running||l.reduce||(l.running=!0,f.getDelta(),_())},d=()=>{l.running=!1,cancelAnimationFrame(u)},p=()=>{let R=n.getBoundingClientRect();l.w=Math.max(1,R.width),l.h=Math.max(1,R.height),l.aspect=l.w/l.h,e.setSize(l.w,l.h,!1),h(l),l.running||m(0)},E=new ResizeObserver(p),S=R=>{let G=n.getBoundingClientRect();R.clientY<G.top-200||R.clientY>G.bottom+200||(l.pointerTarget.set((R.clientX-G.left)/G.width*2-1,-((R.clientY-G.top)/G.height*2-1)),l.lastMove=l.time)},w=R=>{let G=n.getBoundingClientRect();R.clientY<G.top||R.clientY>G.bottom||l.taps.push({x:(R.clientX-G.left)/G.width*2-1,y:-((R.clientY-G.top)/G.height*2-1)})},D=()=>{let R=s.getBoundingClientRect(),G=r.getBoundingClientRect().height||window.innerHeight,g=R.height-G;g>24?(a=Math.min(1,Math.max(0,-R.top/g)),o=Math.min(1,Math.max(0,(-R.top-g)/Math.max(1,G)))):(a=0,o=Math.min(1,Math.max(0,-R.top/Math.max(1,R.height)))),l.running||m(0)},C=new IntersectionObserver(([R])=>{l.visible=R.isIntersecting,l.visible&&!document.hidden?y():d()}),A=()=>{document.hidden?d():l.visible&&y()};return{renderer:e,state:l,run(R,G){c=R,h=G||h,l.reduce&&(l.time=3.2),E.observe(n),C.observe(n),window.addEventListener("pointermove",S,{passive:!0}),window.addEventListener("pointerdown",w,{passive:!0}),window.addEventListener("scroll",D,{passive:!0}),document.addEventListener("visibilitychange",A),p(),D(),requestAnimationFrame(()=>i.classList.add("is-ready"))},destroy(R){d(),E.disconnect(),C.disconnect(),window.removeEventListener("pointermove",S),window.removeEventListener("pointerdown",w),window.removeEventListener("scroll",D),document.removeEventListener("visibilitychange",A),R&&R.traverse(G=>{G.geometry&&G.geometry.dispose(),G.material&&(Array.isArray(G.material)?G.material:[G.material]).forEach(g=>g.dispose())}),e.dispose()}}}function Vl(i,t){let e=kl(i,t);if(!e)return null;let{renderer:n}=e,s=Oi(i,"--scene-1","#f2a65a"),r=Oi(i,"--scene-2","#5b3a2a"),a=Oi(i,"--scene-3","#f3e6d3"),o=Oi(i,"--scene-bg","#17110e"),l=no();n.toneMapping=Xa,n.toneMappingExposure=1.3;let c=new gi,h=new mi(n),f=h.fromScene(new Vs,.04).texture;c.environment=f,c.environmentIntensity=.12;let u=new pe(30,1,.1,100);u.position.set(0,1.1,9),u.lookAt(0,.2,0),c.add(new Fs(16777215,.08)),c.add(new Ns(s,o,.25));let m=new We;c.add(m);let _=new We;m.add(_);let y=new Bt(new Li(7,64),new De({color:o.clone().lerp(new Ct(16777215),.06),roughness:.95}));y.rotation.x=-Math.PI/2,y.position.y=-1,m.add(y);let d="varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",p=`
    ${Ol}
    uniform float uTime; uniform float uWind; uniform float uOn; uniform float uSeed; uniform vec3 uOuter; uniform vec3 uInner; varying vec2 vUv;
    void main(){
      float flick = 1.0 + 0.07 * snoise(vec3(uTime * 3.0 + uSeed, 0.0, 0.0));
      float y = vUv.y / (flick * max(uOn, 0.001));
      float sway = (snoise(vec3(y * 2.5, uTime * 2.2 + uSeed, 1.0)) * 0.05 + uWind * 0.14) * y * y;
      float x = vUv.x - 0.5 - sway;
      float w = 0.5 * pow(clamp(y * 1.6, 0.0, 1.0), 0.6) * pow(clamp(1.0 - y, 0.0, 1.0), 1.3);
      float outer = 1.0 - smoothstep(w * 0.45, w, abs(x));
      float inner = (1.0 - smoothstep(w * 0.12, w * 0.5, abs(x))) * smoothstep(0.02, 0.2, y) * (1.0 - smoothstep(0.4, 0.75, y));
      vec3 col = mix(uOuter, uInner, inner);
      col = mix(col, vec3(0.25, 0.45, 1.0), (1.0 - smoothstep(0.0, 0.16, y)) * 0.6);
      float a = outer * smoothstep(0.0, 0.06, y) * step(y, 1.0) * smoothstep(0.0, 0.2, uOn);
      gl_FragColor = vec4(col * a * 2.2, a);
    }`,E="uniform vec3 uColor; uniform float uI; varying vec2 vUv; void main(){ float d = length(vUv - 0.5) * 2.0; float a = pow(max(1.0 - d, 0.0), 2.2) * 0.55 * uI; gl_FragColor = vec4(uColor * a, a); }",S=[],w=({r:Y,h:V,glassH:nt,band:st,x:et,z:Ft,seed:zt})=>{let X=new We,K=-1+V,dt=new Bt(new On(Y,Y,V,64),new De({color:a,roughness:.45,emissive:s,emissiveIntensity:.06}));if(dt.position.y=-1+V/2,X.add(dt),nt){let Pt=new Bt(new On(Y+.08,Y+.04,nt,64,1,!0),new Ui({color:16777215,roughness:.08,metalness:0,transparent:!0,opacity:.1,side:ze,depthWrite:!1,clearcoat:1,envMapIntensity:1.5}));Pt.position.y=-1+nt/2+.01,X.add(Pt);let Ot=new Bt(new Us(Y+.08,.02,12,96),new Ui({color:16777215,roughness:.1,transparent:!0,opacity:.5,clearcoat:1}));Ot.rotation.x=Math.PI/2,Ot.position.y=-1+nt,X.add(Ot)}if(st){let Pt=new Bt(new On(Y+(nt?.085:.006),Y+(nt?.07:.006),st,64,1,!0),new De({color:r,roughness:.75}));Pt.position.y=-1+V*.42,X.add(Pt)}let at=new Bt(new Li(Y*.94,48),new De({color:a,emissive:s,emissiveIntensity:0,roughness:.3}));at.rotation.x=-Math.PI/2,at.position.y=K+.004,X.add(at);let bt=new Bt(new On(.014,.018,.16,8),new De({color:1708560,roughness:1}));bt.position.y=K+.07,X.add(bt);let yt={uTime:{value:0},uWind:{value:0},uOn:{value:0},uSeed:{value:zt},uOuter:{value:s},uInner:{value:new Ct(16774102)}},Dt=new Bt(new Fn(.6,.78),new be({uniforms:yt,transparent:!0,depthWrite:!1,blending:ai,vertexShader:d,fragmentShader:p}));Dt.position.y=K+.44,X.add(Dt);let Gt={uColor:{value:s},uI:{value:0}},Nt=new Bt(new Fn(4.5,4.5),new be({uniforms:Gt,transparent:!0,depthWrite:!1,blending:ai,vertexShader:d,fragmentShader:E}));Nt.position.y=K+.45,X.add(Nt);let T=new xi(s,0,10,1.4);T.position.set(0,K+.6,.1),X.add(T),X.position.set(et,0,Ft),_.add(X);let ue={g:X,u:yt,glowU:Gt,glow:Nt,flame:Dt,light:T,pool:at,top:K,seed:zt,on:0};return S.push(ue),ue},D=w({r:.66,h:1.45,glassH:1.95,band:.62,x:0,z:0,seed:0}),C=w({r:.5,h:.62,glassH:.8,band:0,x:-1.55,z:.55,seed:4.2}),A=w({r:.3,h:1.95,glassH:0,band:.3,x:1.45,z:-.5,seed:9.1}),R=l?90:180,G=new Float32Array(R*3);for(let Y=0;Y<R;Y++)G[Y*3]=Math.random(),G[Y*3+1]=Math.random(),G[Y*3+2]=Math.random();let g=new Ce;g.setAttribute("position",new xe(new Float32Array(R*3),3)),g.setAttribute("aSeed",new xe(G,3));let M={uTime:{value:0},uWind:{value:0},uAmt:{value:.5},uColor:{value:s},uPx:{value:n.getPixelRatio()},uY:{value:D.top+.75}},k=new Ls(g,new be({uniforms:M,transparent:!0,depthWrite:!1,blending:ai,vertexShader:`
      uniform float uTime; uniform float uWind; uniform float uPx; uniform float uY; uniform float uAmt; attribute vec3 aSeed; varying float vA;
      void main(){
        float life = fract(uTime * (0.12 + aSeed.x * 0.18) + aSeed.y);
        vec3 p = vec3(0.0, uY + life * 3.4, 0.0);
        p.x = sin(aSeed.z * 40.0 + life * 7.0) * 0.35 * life + uWind * life * 1.4 + (aSeed.x - 0.5) * 0.2;
        p.z = cos(aSeed.y * 30.0 + life * 5.0) * 0.3 * life;
        vA = (1.0 - life) * smoothstep(0.0, 0.08, life) * step(aSeed.z, uAmt);
        vec4 mv = modelViewMatrix * vec4(p, 1.0);
        gl_PointSize = (1.5 + aSeed.z * 2.5) * uPx * (8.0 / -mv.z);
        gl_Position = projectionMatrix * mv;
      }`,fragmentShader:"uniform vec3 uColor; varying float vA; void main(){ float d = length(gl_PointCoord - 0.5); float a = smoothstep(0.5, 0.0, d) * vA; gl_FragColor = vec4(mix(uColor, vec3(1.0, 0.9, 0.7), 0.4) * a * 1.4, a); }"}));k.frustumCulled=!1,_.add(k);let B={x:0,y:0},H=!0,$=Y=>{u.aspect=Y.aspect,u.updateProjectionMatrix();let{w:V,h:nt}=Bl(u,0);B=zl(Y.layout,Y.aspect,V,nt),H=Y.aspect>1.05,m.scale.setScalar(Math.min(1.2,B.fit/(H?4.4:3.5))),C.g.position.set(H?-1.55:-1,0,H?.55:.7),A.g.position.set(H?1.45:.98,0,H?-.5:-.45)},z=0;return e.run(Y=>{let V=Y.time,nt=Y.scroll;z+=(-Y.pointerVel.x*18-z)*.08,z=Math.max(-1,Math.min(1,z)),D.on=1,C.on=Hs(io(nt,.14,.34)),A.on=Hs(io(nt,.44,.64));let st=Hs(nt);S.forEach(et=>{let Ft=.85+.1*Math.sin(V*11.3+et.seed)*Math.sin(V*7.1+et.seed*2)+.05*Math.sin(V*23+et.seed),zt=et.on>0&&et.on<1?Math.sin(et.on*Math.PI)*.5:0;et.u.uTime.value=V,et.u.uWind.value=z,et.u.uOn.value=et.on*(1+zt)*(et===D?1+st*.18:.9),et.glowU.uI.value=Ft*et.on*(et===D?1:.6),et.light.intensity=(et===D?16+st*6:8)*Ft*et.on,et.pool.material.emissiveIntensity=.55*et.on,et.flame.quaternion.copy(u.quaternion),et.glow.quaternion.copy(u.quaternion)}),M.uTime.value=V,M.uWind.value=z,M.uAmt.value=.45+st*.55,m.position.set(B.x,B.y+.2+Y.exit*1.6,0),m.rotation.y+=(Y.pointer.x*.3+(st-.5)*.5-m.rotation.y)*.04,_.position.y=Math.sin(V*.6)*.015,u.position.z=9-st*1.1,n.render(c,u)},$),{destroy:()=>{e.destroy(c),f.dispose(),h.dispose()}}}window.ThemeScene={mount:Vl};})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
