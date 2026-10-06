(() => {
const MAX=100, gallery=document.getElementById('gallery'), count=document.getElementById('photoCount'), empty=document.getElementById('emptyGallery');
const selector=document.getElementById('languageSelect');
selector.addEventListener('change',()=>{document.querySelectorAll('.message').forEach(m=>m.classList.toggle('active',m.dataset.message===selector.value));});
let heroChecked=0,heroFound=0;
document.querySelectorAll('.hero-photo').forEach(f=>{const i=f.querySelector('img');function finish(found){heroChecked++;if(found){f.classList.add('ready');heroFound++;}else f.remove();if(heroChecked===3&&heroFound===0)document.querySelector('.hero-section').hidden=true;}if(i.complete){finish(i.naturalWidth>0)}else{i.onload=()=>finish(true);i.onerror=()=>finish(false)}});
let loaded=0,done=0;const pad=n=>String(n).padStart(3,'0');
const sourceList=Array.from({length:MAX},(_,i)=>`images/photo${pad(i+1)}.jpg`);
const placeholders=sourceList.map(src=>{const btn=document.createElement('button');btn.className='gallery-item';btn.dataset.src=src;btn.type='button';btn.setAttribute('aria-label',`Open ${src.split('/').pop()}`);gallery.appendChild(btn);return btn});
let nextProbe=0;
async function probe(){while(nextProbe<MAX){const idx=nextProbe++;const src=sourceList[idx],btn=placeholders[idx];try{const response=await fetch(src,{method:'HEAD',cache:'no-store'});if(response.ok){const img=document.createElement('img');img.alt=`Graduation memory ${idx+1}`;img.loading='lazy';img.decoding='async';img.src=src;btn.appendChild(img);btn.classList.add('ready');loaded++;}}catch(err){}finally{done++;count.textContent=loaded?`${loaded} photos`:'';if(done===MAX){gallery.hidden=loaded===0;empty.hidden=loaded!==0;}}}}
Promise.all(Array.from({length:8},()=>probe()));
const box=document.getElementById('lightbox'),big=document.getElementById('lightboxImage'),meta=document.getElementById('lightboxMeta'),close=document.getElementById('lightboxClose'),prev=document.getElementById('lightboxPrev'),next=document.getElementById('lightboxNext'),stage=document.getElementById('lightboxStage');let pos=0,startX=0;
const items=()=>Array.from(document.querySelectorAll('.gallery-item.ready'));
function show(){const a=items();if(!a.length)return;if(pos<0)pos=a.length-1;if(pos>=a.length)pos=0;big.src=a[pos].dataset.src;big.alt=a[pos].querySelector('img').alt;meta.textContent=`${pos+1} / ${a.length}`}
function open(item){pos=items().indexOf(item);box.classList.add('open');box.setAttribute('aria-hidden','false');document.body.classList.add('lightbox-open');show()}
function shut(){box.classList.remove('open');box.setAttribute('aria-hidden','true');document.body.classList.remove('lightbox-open');big.src=''}
gallery.onclick=e=>{const x=e.target.closest('.gallery-item.ready');if(x)open(x)};close.onclick=shut;prev.onclick=()=>{pos--;show()};next.onclick=()=>{pos++;show()};box.onclick=e=>{if(e.target===box)shut()};
document.onkeydown=e=>{if(!box.classList.contains('open'))return;if(e.key==='Escape')shut();if(e.key==='ArrowLeft'){pos--;show()}if(e.key==='ArrowRight'){pos++;show()}};
stage.addEventListener('touchstart',e=>startX=e.changedTouches[0].screenX,{passive:true});stage.addEventListener('touchend',e=>{const d=e.changedTouches[0].screenX-startX;if(Math.abs(d)>45){pos+=d>0?-1:1;show()}},{passive:true});
})();
