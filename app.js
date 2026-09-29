const IC={
 doc:'<svg class="i" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5M9 13h6M9 17h6"/></svg>',
 print:'<svg class="i" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9V3h12v6M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="7"/></svg>',
 warn:'<svg class="i" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z"/><path d="M12 9v4M12 17h.01"/></svg>',
 check:'<svg class="i" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>',
 search:'<svg class="i" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/></svg>'
};
let _b=0;
function bottle(color,cls){const id='bg'+(++_b);
 return `<svg class="${cls||'bt'}" viewBox="0 0 120 300" style="--liq:${color}" aria-hidden="true"><defs><linearGradient id="${id}" x1="0" x2="1"><stop offset="0" stop-color="#fff" stop-opacity=".6"/><stop offset=".3" stop-color="#fff" stop-opacity="0"/><stop offset=".78" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity=".2"/></linearGradient></defs>
<rect x="40" y="4" width="40" height="34" rx="9" fill="#e6003c"/><rect x="46" y="10" width="28" height="4" rx="2" fill="#fff" opacity=".35"/>
<rect x="47" y="36" width="26" height="18" style="fill:var(--liq)"/>
<path d="M47 54C47 76 18 80 18 116V268a18 18 0 0 0 18 18H84a18 18 0 0 0 18-18V116C102 80 73 76 73 54Z" style="fill:var(--liq)" stroke="rgba(22,15,20,.3)" stroke-width="2"/>
<path d="M47 54C47 76 18 80 18 116V268a18 18 0 0 0 18 18H84a18 18 0 0 0 18-18V116C102 80 73 76 73 54Z" fill="url(#${id})"/>
<rect x="24" y="148" width="72" height="94" rx="12" fill="#fff"/>
<text x="60" y="190" text-anchor="middle" font-family="Bricolage Grotesque,sans-serif" font-weight="800" font-size="25" fill="#e6003c">LINA</text>
<text x="60" y="206" text-anchor="middle" font-family="Bricolage Grotesque,sans-serif" font-weight="800" font-size="9" fill="#160f14" letter-spacing="2.5">CLEAN</text>
<rect x="34" y="219" width="52" height="7" rx="3.5" style="fill:var(--liq)" stroke="rgba(22,15,20,.15)"/></svg>`}

const App=(()=>{
 let lang='fr';try{lang=localStorage.getItem('lc_lang')||'fr'}catch(e){}
 const collect=()=>{
  document.querySelectorAll('[data-ar]').forEach(e=>{if(e.dataset.fr===undefined)e.dataset.fr=e.innerHTML});
  document.querySelectorAll('[data-ar-ph]').forEach(e=>{if(e.dataset.frPh===undefined)e.dataset.frPh=e.getAttribute('placeholder')||''});
 };
 const apply=()=>{document.documentElement.lang=lang;document.documentElement.dir=lang==='ar'?'rtl':'ltr';
  document.querySelectorAll('[data-ar]').forEach(e=>e.innerHTML=lang==='ar'?e.dataset.ar:e.dataset.fr);
  document.querySelectorAll('[data-ar-ph]').forEach(e=>e.setAttribute('placeholder',lang==='ar'?e.dataset.arPh:e.dataset.frPh));
  const b=document.getElementById('lang');if(b)b.textContent=lang==='ar'?'FR':'عربي'};
 const io=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}}),{threshold:.08});
 const bubbles=()=>document.querySelectorAll('.bubbles:not([data-ok])').forEach(c=>{c.dataset.ok=1;const n=+c.dataset.n||12;
  for(let i=0;i<n;i++){const s=document.createElement('span');s.className='bub';const z=18+Math.random()*70;
   s.style.cssText=`width:${z}px;height:${z}px;left:${Math.random()*100}%;animation-duration:${9+Math.random()*12}s;animation-delay:${-Math.random()*16}s`;c.appendChild(s)}});
 const misc=()=>{
  document.querySelectorAll('.ic:empty').forEach(e=>e.innerHTML=IC.doc);
  document.querySelectorAll('.mq:not([data-ok])').forEach(el=>{el.dataset.ok=1;const h=el.dataset.w.split('|').map(w=>w+'<span>✦</span>').join('');el.innerHTML=h.repeat(4)});
  document.querySelectorAll('.rv:not([data-o])').forEach((el,i)=>{el.dataset.o=1;el.style.transitionDelay=(i%3)*70+'ms';io.observe(el)});
  bubbles();
 };
 const refresh=()=>{misc();collect();apply()};
 const set=l=>{lang=l;try{localStorage.setItem('lc_lang',l)}catch(e){}apply();document.dispatchEvent(new Event('langchange'))};
 const t=(fr,ar)=>lang==='ar'?ar:fr;
 return{refresh,set,t,get:()=>lang};
})();
const L=(fr,ar)=>App.t(fr,ar);
const A=s=>String(s).replace(/"/g,'&quot;');
const opt=(fr,ar,extra)=>`<option ${extra||''} data-ar="${A(ar)}">${fr}</option>`;
const wilayaOpts=()=>WILAYAS.map((w,i)=>{const n=String(i+1).padStart(2,'0');return opt(n+' — '+w,n+' — '+WILAYAS_AR[i])}).join('');

(function(){
 document.documentElement.classList.add('js');
 const here=location.pathname;const act=k=>here.includes(k)?' class="act"':'';
 const h=document.getElementById('hdr');
 if(h)h.outerHTML=`<div class="prog" id="prog"></div>
<header class="top"><a class="logo" href="index.html"><img src="https://lina-clean.com/images/logo.png" alt="Lina Clean"></a>
<nav><a href="produits.html"${act('produits')} data-ar="المنتجات">Produits</a><a href="assistant.html"${act('assistant')} data-ar="المستشار">Conseiller</a><a href="revendeurs.html"${act('revendeurs')} data-ar="الموزّعون">Revendeurs</a><a href="recrutement.html"${act('recrutement')} data-ar="توظيف">Recrutement</a><a href="index.html#marque" data-ar="العلامة">La marque</a></nav>
<div class="hr"><button class="lang" id="lang" aria-label="Langue">عربي</button><a class="pill" href="index.html#contact" data-ar="اتصل بنا">Contact →</a><button class="burger" id="burger" aria-label="Menu">☰</button></div></header>
<div class="menu" id="menu"><a href="produits.html" data-ar="المنتجات">Produits</a><a href="assistant.html" data-ar="المستشار">Conseiller</a><a href="revendeurs.html" data-ar="الموزّعون">Espace revendeurs</a><a href="recrutement.html" data-ar="توظيف">Recrutement</a><a href="index.html#marque" data-ar="العلامة">La marque</a><a href="index.html#contact" data-ar="اتصل بنا" style="color:var(--red)">Contact</a></div>`;
 const f=document.getElementById('ftr');
 if(f)f.outerHTML=`<footer class="ftr"><div class="wrap"><div class="cols">
<div><img class="lg" src="https://lina-clean.com/images/logo.png" alt="Lina Clean"><p data-ar="حلول التنظيف والمنظّفات للأفراد والمحترفين. فعالية، جودة وأمان.">Solutions détergentes et produits de nettoyage pour particuliers et professionnels. Efficacité, qualité et sécurité.</p></div>
<div><h4 data-ar="المنتجات">Produits</h4>${ORDER.map(k=>`<a href="produit.html?p=${k}" data-ar="${A(PRODUCTS[k].ar)}">${PRODUCTS[k].name}</a>`).join('')}</div>
<div><h4 data-ar="الفضاءات">Espaces</h4><a href="produits.html" data-ar="كل المنتجات">Tous les produits</a><a href="assistant.html" data-ar="مستشار المنتجات">Conseiller produit</a><a href="revendeurs.html" data-ar="فضاء الموزّعين">Espace revendeurs</a><a href="recrutement.html" data-ar="فضاء التوظيف">Espace recrutement</a></div>
<div><h4>Lina Clean</h4><a href="index.html#marque" data-ar="من نحن">Qui sommes-nous</a><a href="index.html#promesse" data-ar="التزاماتنا">Engagements</a><a href="index.html#contact" data-ar="اتصل بنا">Contact</a></div>
</div><div class="bot"><span data-ar="© لينا كلين. جميع الحقوق محفوظة.">© Lina Clean. Tous droits réservés.</span><span>lina-clean.com</span></div></div></footer>
<button class="totop" id="totop" aria-label="Haut">↑</button>`;
 const menu=document.getElementById('menu'),burger=document.getElementById('burger');
 if(burger){burger.onclick=()=>{menu.classList.toggle('open');burger.textContent=menu.classList.contains('open')?'✕':'☰'};
  menu.querySelectorAll('a').forEach(a=>a.onclick=()=>{menu.classList.remove('open');burger.textContent='☰'})}
 const lb=document.getElementById('lang');if(lb)lb.onclick=()=>App.set(App.get()==='ar'?'fr':'ar');
 const pr=document.getElementById('prog'),tt=document.getElementById('totop');
 addEventListener('scroll',()=>{const d=document.documentElement;const p=d.scrollTop/(d.scrollHeight-d.clientHeight||1);if(pr)pr.style.width=(p*100)+'%';if(tt)tt.classList.toggle('show',d.scrollTop>700)},{passive:true});
 if(tt)tt.onclick=()=>scrollTo({top:0,behavior:'smooth'});
 App.refresh();
})();

function okForm(form,msgFr,msgAr){
 form.style.display='none';
 const d=document.createElement('div');d.className='ok show';
 d.innerHTML=`<svg viewBox="0 0 80 80" fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"><circle cx="40" cy="40" r="32"/><path d="M26 41l10 10 19-21"/></svg><h3>${L(msgFr,msgAr)}</h3>`;
 form.parentNode.insertBefore(d,form.nextSibling);
}
