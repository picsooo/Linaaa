const IC={
 doc:'<svg class="i" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5M9 13h6M9 17h6"/></svg>',
 print:'<svg class="i" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9V3h12v6M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="7"/></svg>',
 warn:'<svg class="i" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z"/><path d="M12 9v4M12 17h.01"/></svg>',
 store:'<svg class="i" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l1.5-5h15L21 9M3 9v11h18V9M3 9c0 2 1.5 3 3 3s3-1 3-3c0 2 1.5 3 3 3s3-1 3-3c0 2 1.5 3 3 3s3-1 3-3M9 20v-6h6v6"/></svg>',
 team:'<svg class="i" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="3.5"/><path d="M2.5 20c0-3.6 2.9-6 6.5-6s6.5 2.4 6.5 6M16 4.5a3.5 3.5 0 0 1 0 7M18 14.3c2.2.7 3.5 2.6 3.5 5.7"/></svg>'
};
const App=(()=>{
 let lang='fr';try{lang=localStorage.getItem('lc_lang')||'fr'}catch(e){}
 const collect=()=>document.querySelectorAll('[data-ar]').forEach(e=>{if(e.dataset.fr===undefined)e.dataset.fr=e.innerHTML});
 const apply=()=>{document.documentElement.lang=lang;document.documentElement.dir=lang==='ar'?'rtl':'ltr';
  document.querySelectorAll('[data-ar]').forEach(e=>e.innerHTML=lang==='ar'?e.dataset.ar:e.dataset.fr);
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
 const set=l=>{lang=l;try{localStorage.setItem('lc_lang',l)}catch(e){}apply()};
 return{refresh,set,get:()=>lang};
})();

(function(){
 document.documentElement.classList.add('js');
 const here=location.pathname;const act=k=>here.includes(k)?' class="act"':'';
 const h=document.getElementById('hdr');
 if(h)h.outerHTML=`<div class="prog" id="prog"></div>
<header class="top"><a class="logo" href="index.html"><img src="https://lina-clean.com/images/logo.png" alt="Lina Clean"></a>
<nav><a href="index.html#gamme" data-ar="المنتجات">Produits</a><a href="revendeurs.html"${act('revendeurs')} data-ar="الموزّعون">Revendeurs</a><a href="recrutement.html"${act('recrutement')} data-ar="توظيف">Recrutement</a><a href="index.html#marque" data-ar="العلامة">La marque</a></nav>
<div class="hr"><button class="lang" id="lang" aria-label="Langue">عربي</button><a class="pill" href="index.html#contact" data-ar="اتصل بنا">Contact →</a><button class="burger" id="burger" aria-label="Menu">☰</button></div></header>
<div class="menu" id="menu"><a href="index.html#gamme" data-ar="المنتجات">Produits</a><a href="revendeurs.html" data-ar="الموزّعون">Espace revendeurs</a><a href="recrutement.html" data-ar="توظيف">Recrutement</a><a href="index.html#marque" data-ar="العلامة">La marque</a><a href="index.html#contact" data-ar="اتصل بنا" style="color:var(--red)">Contact</a></div>`;
 const f=document.getElementById('ftr');
 if(f)f.outerHTML=`<footer class="ftr"><div class="wrap"><div class="cols">
<div><img class="lg" src="https://lina-clean.com/images/logo.png" alt="Lina Clean"><p data-ar="حلول التنظيف والمنظّفات للأفراد والمحترفين. فعالية، جودة وأمان.">Solutions détergentes et produits de nettoyage pour particuliers et professionnels. Efficacité, qualité et sécurité.</p></div>
<div><h4 data-ar="المنتجات">Produits</h4>${ORDER.map(k=>`<a href="produit.html?p=${k}">${PRODUCTS[k].name}</a>`).join('')}</div>
<div><h4 data-ar="الفضاءات">Espaces</h4><a href="revendeurs.html" data-ar="فضاء الموزّعين">Espace revendeurs</a><a href="recrutement.html" data-ar="فضاء التوظيف">Espace recrutement</a><a href="index.html#conseil" data-ar="مستشار المنتجات">Conseiller produit</a></div>
<div><h4 data-ar="العلامة">Lina Clean</h4><a href="index.html#marque" data-ar="من نحن">Qui sommes-nous</a><a href="index.html#promesse" data-ar="التزاماتنا">Engagements</a><a href="index.html#contact" data-ar="اتصل بنا">Contact</a></div>
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
 d.innerHTML=`<svg viewBox="0 0 80 80" fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"><circle cx="40" cy="40" r="32"/><path d="M26 41l10 10 19-21"/></svg><h3>${App.get()==='ar'?msgAr:msgFr}</h3>`;
 form.parentNode.insertBefore(d,form.nextSibling);
}
