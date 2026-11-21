var __R=document.documentElement.dataset.root||"";

document.documentElement.style.setProperty("--flamingo-bg","url("+new URL(__R+"assets/img/flamingo.webp",location.href).href+")");
const IMG = {mp0:__R+"assets/img/mp0.webp",mp1:__R+"assets/img/mp1.webp",mp2:__R+"assets/img/mp2.webp",mp3:__R+"assets/img/mp3.webp",mp4:__R+"assets/img/mp4.webp",f_samosa:__R+"assets/img/f_samosa.webp",f_steak:__R+"assets/img/f_steak.webp",f_tea:__R+"assets/img/f_tea.webp",f_wings:__R+"assets/img/f_wings.webp",f_platter:__R+"assets/img/f_platter.webp",f_lollipop:__R+"assets/img/f_lollipop.webp",f_pizza:__R+"assets/img/f_pizza.webp",f_eggs:__R+"assets/img/f_eggs.webp",f_juice:__R+"assets/img/f_juice.webp",flamingos:__R+"assets/img/flamingos.webp",conf:__R+"assets/img/conf.webp",vans:__R+"assets/img/vans.webp",carousel:__R+"assets/img/carousel.webp",tramp:__R+"assets/img/tramp.webp",castle:__R+"assets/img/castle.webp",flamingo:__R+"assets/img/flamingo.webp",logo:__R+"assets/img/logo.webp",aerial:__R+"assets/img/aerial.webp",room:__R+"assets/img/room.webp",camp:__R+"assets/img/camp.webp",sign:__R+"assets/img/sign.webp",pool_garden:__R+"assets/img/pool_garden.webp"};
const WA = "254726026894";
const ALT = {flamingos:"Flamingos at Lake Nakuru",f_platter:"Kienyeji platter with ugali, chapati and greens",f_pizza:"Kivu pizza",f_tea:"A cup of Kenyan tea",f_juice:"Fresh juices",poolwide:"The swimming pool among palms",conf:"Conference room set up for a meeting",vans:"Kivu safari vehicles",carousel:"Carousel at the Kids Park",tramp:"Trampoline at the Kids Park",castle:"Bouncy castles at the Kids Park",aerial:"The pools from above",room:"An African-themed room",camp:"Tents on the campsite lawn",sign:"The flamingo signpost",pool_garden:"Pool and gardens"};

const STAYS = {
  executive:{who:"Perfect for couples and business travellers",aud:["couples","business"],warm:"Unwind in our most spacious room, with a netted double bed, warm African fabrics, a quiet desk and your own bathroom. After a day with the rhinos and flamingos, this is the room you’ll look forward to coming back to.",name:"Executive room",tag:"Most spacious",card:["Double bed","2 guests","En-suite","bath"],img:"room",pos:"center",short:"Our most spacious rooms, made for unwinding after a day in the park.",
    text:"Executive rooms give you the most space at Kivu: a netted double bed, warm African textiles, a desk and an en-suite bathroom. A good fit for couples and business travellers who want room to unwind after a day in the park.",
    facts:["Double bed","Up to 2 guests","En-suite bathroom","Desk"],
    amen:["Mosquito net","En-suite bathroom","Bed linen and towels","Free Wi-Fi","Pool and gym access","Buffet breakfast","Desk","Free parking","Children’s park"],
    thumbs:["room","aerial","sign","pool_garden"]},
  standard:{who:"Perfect for solo travellers and pairs",aud:["couples","business"],warm:"Simple, spotless comfort just a few steps from the pool. Choose single, double or twin beds, sleep soundly under a mosquito net, and wake up to a hot breakfast waiting for you.",name:"Standard room",tag:"Best value",card:["Single or twin","1 to 2 guests","En-suite","bath"],img:"room",pos:"left",short:"Cosy, comfortable rooms just a few steps from the pool.",
    text:"Standard rooms keep things simple and comfortable: single, double or twin beds under mosquito nets, an en-suite bathroom and African-themed decor, a short walk from the pools and restaurant.",
    facts:["Single, double or twin","1 to 2 guests","En-suite bathroom"],
    amen:["Mosquito net","En-suite bathroom","Bed linen and towels","Free Wi-Fi","Pool and gym access","Buffet breakfast","Free parking","Children’s park","24-hour front desk"],
    thumbs:["room","pool_garden","aerial","sign"]},
  suite:{who:"Perfect for families and longer stays",aud:["families"],warm:"Room to spread out, cook your own meals and live at your own pace, while the children splash in the pool and play on the lawns just outside your door.",name:"Self-catering suite",tag:"Family favourite",card:["Kitchen space","Families","Free Wi-Fi","wifi"],img:"sign",pos:"center",short:"Room to spread out and cook your own meals, perfect for families.",
    text:"Self-catering suites suit families and longer stays, with space to prepare your own meals while still using the pools, gym, playground and restaurant whenever you like.",
    facts:["Self-catering","Families","En-suite bathroom"],
    amen:["Kitchen space","En-suite bathroom","Bed linen and towels","Free Wi-Fi","Pool and gym access","Children’s park","Free parking","Restaurant on site","24-hour front desk"],
    thumbs:["sign","aerial","pool_garden","room"]},
  camping:{who:"Perfect for groups, schools and adventurers",aud:["groups","families"],warm:"Pitch your tent on safe, private lawns or settle into our bunk rooms. Bring your own gear or borrow ours, then come together for hearty meals, a swim and stories under the stars.",name:"Campsite and bunk beds",tag:"Great for groups",card:["Tents or bunks","Groups","Free Wi-Fi","wifi"],img:"camp",pos:"center",short:"Sleep under the stars on safe, private lawns, or in our bunk rooms.",
    text:"Pitch on our secure, private lawns or borrow a tent with bedding from us. Bunk rooms suit school trips, clubs and training camps, and the whole group gets the pools, gym and restaurant.",
    facts:["Tents or bunks","Groups welcome","Secure grounds"],
    amen:["Tents available","Bedding available","Secure and private","Shared washrooms","Pool and gym access","Restaurant on site","Free parking","Team-building lawns","Free Wi-Fi"],
    thumbs:["camp","pool_garden","aerial","sign"]}
};

const _SLIDES = [
  {img:"aerial",cap:"The main pool and the children’s pool"},
  {img:"room",cap:"Rooms with netted beds and African prints"},
  {img:"camp",cap:"A secure campsite on the lawns"},
  {img:"sign",cap:"Signposts to the pool, gym and restaurant"}
];

const $ = s=>document.querySelector(s);
const $$ = (s,root)=>Array.from((root||document).querySelectorAll(s));
function esc(s){return String(s??"").replace(/[&<>"'`]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","`":"&#96;"}[c]))}
/* Records come from guests, so never trust their shape: ids and status words must be plain tokens, numbers must be numbers. */
const SAFE_ID=/^[A-Za-z0-9_-]{1,80}$/;
const tok=v=>(typeof v==="string"&&/^[a-z][a-z-]{0,23}$/.test(v))?v:undefined;
const num=v=>{ const n=Number(v); return Number.isFinite(n)?n:0; };
function safeRec(v){
  if(!v||typeof v!=="object") return null;
  const r={...v};
  ["status","paymentStatus","paymentMethod","kind"].forEach(k=>{ if(k in r) r[k]=tok(r[k]); });
  ["total","amountPaid","nights"].forEach(k=>{ if(k in r) r[k]=num(r[k]); });
  if("rating" in r) r.rating=Math.min(5,Math.max(1,Math.round(num(r.rating))||5));
  ["createdAt","updatedAt","checkIn","checkOut","date"].forEach(k=>{ if(r[k]!=null && (typeof r[k]!=="string"||isNaN(new Date(r[k])))) r[k]=""; });
  if(r.items!=null) r.items=Array.isArray(r.items)?r.items.filter(i=>i&&typeof i==="object").map(i=>({label:String(i.label??""),qty:num(i.qty),price:num(i.price)})):[];
  if(r.charges!=null) r.charges=Array.isArray(r.charges)?r.charges.map(safeRec).filter(Boolean):[];
  return r;
}

$$("[data-img]").forEach(i=>{ i.src = IMG[i.dataset.img]; });
const waUrl = t=>"https://wa.me/"+WA+(t?"?text="+encodeURIComponent(t):"");
$("#fabWa").href = waUrl("Hello Kivu Resort, I have a question.");
$("#waDirect").href = waUrl("Hello Kivu Resort, I have a question.");
$("#footWa").href = waUrl("Hello Kivu Resort, I have a question.");
$("#toTop").onclick=()=>window.scrollTo({top:0,behavior:"smooth"});

/* stay selects */
const MS_ROOMS=["Standard single","Standard double or twin","Superior single","Superior double or twin"];
const opts = `<optgroup label="Kivu Resort">`+Object.entries(STAYS).map(([k,s])=>`<option value="${k}">${esc(s.name)}</option>`).join("")+`</optgroup><optgroup label="Msafiri Lodge, Nakuru town">`+MS_ROOMS.map(n=>`<option value="msafiri:${esc(n)}">${esc(n)}</option>`).join("")+`</optgroup>`;
const stayName = v => v && v.startsWith("msafiri:") ? "Msafiri Lodge, "+v.slice(8) : (STAYS[v]?STAYS[v].name:v);
$("#bbStay").innerHTML = opts; $("#dS").innerHTML = opts;

/* home cards + stays rows */
const ICONS = {"bed": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3 18V7M3 13h18v5M21 18v-3a3 3 0 0 0-3-3h-7v1\"/><circle cx=\"7\" cy=\"10.5\" r=\"1.5\"/></svg>", "user": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\"><circle cx=\"9\" cy=\"8\" r=\"3.2\"/><path d=\"M3 20c0-3.3 2.7-5.5 6-5.5s6 2.2 6 5.5M16 4.8a3 3 0 0 1 0 6M18 14.8c1.8.6 3 2.4 3 5.2\"/></svg>", "bath": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\"><path d=\"M4 12h16v2a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5v-2ZM6 12V6a2 2 0 0 1 4 0M7 19l-1 2M17 19l1 2\"/></svg>", "wifi": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\"><path d=\"M2 9a15 15 0 0 1 20 0M5 12.5a10 10 0 0 1 14 0M8.5 16a5 5 0 0 1 7 0\"/><circle cx=\"12\" cy=\"19.5\" r=\".9\" fill=\"currentColor\"/></svg>"};

$("#homeStays").innerHTML = Object.entries(STAYS).map(([k,s])=>`
  <article class="scard">
    <a href="${__R}rooms/${k}/" class="scard-img" aria-label="${esc(s.name)} details"><img loading="lazy" decoding="async" src="${IMG[s.img]}" alt="${esc(ALT[s.img])}" style="object-position:${s.pos}"><span class="scard-tag">${esc(s.tag)}</span><span class="scard-over"><span>Breakfast included</span></span></a>
    <button class="scard-fav" type="button" aria-pressed="false" aria-label="Save ${esc(s.name)}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M12 20.5s-7.5-4.6-9.2-9.3C1.6 7.8 3.8 4.5 7.2 4.5c2 0 3.6 1.1 4.8 2.8 1.2-1.7 2.8-2.8 4.8-2.8 3.4 0 5.6 3.3 4.4 6.7-1.7 4.7-9.2 9.3-9.2 9.3Z"/></svg></button>
    <div class="scard-body">
      <h3><a href="${__R}rooms/${k}/">${esc(s.name)}</a></h3>
      <p class="scard-desc">${esc(s.short)}</p>
      <div class="scard-meta"><span>${ICONS.bed}${esc(s.card[0])}</span><span>${ICONS.user}${esc(s.card[1])}</span><span>${ICONS[s.card[3]]}${esc(s.card[2])}</span></div>
      <a class="scard-link" href="${__R}rooms/${k}/">View room <i>→</i></a>
    </div>
  </article>`).join("");
$$(".scard").forEach(c=>{ c.style.position="relative"; const fav=c.querySelector(".scard-fav"); fav.onclick=()=>fav.setAttribute("aria-pressed",fav.getAttribute("aria-pressed")!=="true"); });
if(matchMedia("(hover:hover) and (pointer:fine)").matches && !matchMedia("(prefers-reduced-motion: reduce)").matches){
  $$(".scard-img").forEach(el=>{
    el.addEventListener("pointermove",e=>{ const r=el.getBoundingClientRect(); const x=(e.clientX-r.left)/r.width, y=(e.clientY-r.top)/r.height;
      el.style.transform=`rotateX(${(.5-y)*9}deg) rotateY(${(x-.5)*11}deg) translateY(-6px)`; el.style.setProperty("--gx",x*100+"%"); el.style.setProperty("--gy",y*100+"%"); });
    el.addEventListener("pointerleave",()=>{ el.style.transform=""; el.style.setProperty("--gy","0%"); });
  });
}
$("#stayRows").className="wrap list";
$("#stayRows").innerHTML = Object.entries(STAYS).map(([k,s],n)=>`
  <article class="lcard" data-aud="${s.aud.join(" ")}">
    <a class="lcard-img" href="${__R}rooms/${k}/" aria-label="${esc(s.name)} details">
      <img loading="lazy" decoding="async" src="${IMG[s.img]}" alt="${esc(ALT[s.img])}" style="object-position:${s.pos}">
      <span class="scard-tag">${esc(s.tag)}</span>
      <span class="lc-count">${String(n+1).padStart(2,"0")} / ${String(Object.keys(STAYS).length).padStart(2,"0")}</span>
    </a>
    <button class="scard-fav" type="button" aria-pressed="false" aria-label="Save ${esc(s.name)}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M12 20.5s-7.5-4.6-9.2-9.3C1.6 7.8 3.8 4.5 7.2 4.5c2 0 3.6 1.1 4.8 2.8 1.2-1.7 2.8-2.8 4.8-2.8 3.4 0 5.6 3.3 4.4 6.7-1.7 4.7-9.2 9.3-9.2 9.3Z"/></svg></button>
    <div class="lcard-body">
      <h2>${esc(s.name)}</h2>
      <p class="lc-text">${esc(s.warm)}</p>
      <ul class="lc-feat">
        <li>${ICONS.bed}<span>${esc(s.card[0])}</span></li>
        <li>${ICONS.user}<span>${esc(s.card[1])}</span></li>
        <li>${ICONS[s.card[3]]}<span>${esc(s.card[2])}</span></li>
        <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9h12v5a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5V9ZM16 11h1.5a2.5 2.5 0 0 1 0 5H16M8 3v3M12 3v3"/></svg><span>Breakfast included</span></li>
      </ul>
      <div class="lc-inc"><i class="mi mi-pool"></i><span>Pools, gym, kids’ park and parking are all included</span></div>
      <div class="lc-btns"><a class="btn btn-line" href="${__R}rooms/${k}/">View room <span aria-hidden="true">→</span></a><button class="btn btn-coral" data-book="${k}">Check availability</button></div>
    </div>
  </article>`).join("");
$$("#stayRows .scard-fav").forEach(f=>f.onclick=()=>f.setAttribute("aria-pressed",f.getAttribute("aria-pressed")!=="true"));
$$(".st-filter button").forEach(b=>b.onclick=()=>{
  $$(".st-filter button").forEach(x=>x.setAttribute("aria-selected",x===b));
  const f=b.dataset.f;
  $$("#stayRows .lcard").forEach(c=>{ c.hidden = f!=="all" && !c.dataset.aud.split(" ").includes(f); });
});

/* gallery */
const GAL = ["flamingos","aerial","room","castle","carousel","f_platter","camp","vans","tramp","sign","f_pizza","conf","f_tea","f_juice"];
$("#ggrid").innerHTML = GAL.map(g=>`<button data-lb="${g}"><img loading="lazy" decoding="async" src="${IMG[g]}" alt="${esc(ALT[g])}"></button>`).join("");
document.addEventListener("click",e=>{
  const b=e.target.closest("[data-lb]"); if(!b) return;
  $("#lbImg").src=IMG[b.dataset.lb]; $("#lbImg").alt=ALT[b.dataset.lb]; $("#lbCap").textContent=ALT[b.dataset.lb]; $("#lb").hidden=false;
});
$("#lbClose").onclick=()=>$("#lb").hidden=true;
$("#lb").addEventListener("click",e=>{ if(e.target.id==="lb") $("#lb").hidden=true; });

/* dates */
const today = new Date(); const iso = d=>new Date(d.getTime()-d.getTimezoneOffset()*60000).toISOString().slice(0,10);
const addDays=(d,n)=>{const x=new Date(d);x.setDate(x.getDate()+n);return x};
["#bbIn","#bbOut","#dIn","#dOut","#sdIn","#sdOut","#evD"].forEach(s=>$(s).min=iso(today));
$("#bbIn").value=iso(addDays(today,7)); $("#bbOut").value=iso(addDays(today,9));
function pairDates(a,b){ $(a).addEventListener("change",()=>{ if($(a).value){ $(b).min=$(a).value; if(!$(b).value||$(b).value<=$(a).value) $(b).value=iso(addDays(new Date($(a).value+"T00:00"),1)); } }); }
pairDates("#bbIn","#bbOut"); pairDates("#dIn","#dOut"); pairDates("#sdIn","#sdOut");
const fmt = v=>new Date(v+"T00:00").toLocaleDateString("en-GB",{weekday:"short",day:"numeric",month:"short",year:"numeric"});
const nights=(a,b)=>Math.round((new Date(b+"T00:00")-new Date(a+"T00:00"))/864e5);

function compose(o){
  const n=nights(o.inD,o.outD);
  let t="Hello Kivu Resort, I’d like to book a stay.\n\n";
  t+="Stay: "+o.stay+"\n";
  t+="Check in: "+fmt(o.inD)+"\nCheck out: "+fmt(o.outD)+" ("+n+(n===1?" night":" nights")+")\n";
  t+="Guests: "+o.adults+(o.adults==="1"?" adult":" adults")+(o.children&&o.children!=="0"?", "+o.children+(o.children==="1"?" child":" children"):"")+"\n";
  if(o.plan) t+="Meal plan: "+o.plan+"\n";
  if(o.name) t+="Name: "+o.name+"\n";
  if(o.notes) t+="Notes: "+o.notes+"\n";
  t+="\nPlease confirm availability and the rate. Thank you!";
  return t;
}
function checkDates(a,b){
  if(!a||!b) return "Choose your check-in and check-out dates.";
  if(b<=a) return "Check-out needs to be after check-in.";
  return "";
}
let __lastWa={s:"",t:0};
function openWa(text, okEl){
  if(__lastWa.s===text && Date.now()-__lastWa.t<3000){ return null; } __lastWa={s:text,t:Date.now()};
  const url=waUrl(text); let w=null;
  try{ w=window.open(url,"_blank","noopener"); }catch(e){}
  if(okEl){ okEl.hidden=false; const a=okEl.querySelector("a"); if(a) a.href=url; }
  return w;
}

/* booking dialog */
function openBook(pre={}){ BK.open(pre); }
document.addEventListener("click",e=>{
  const b=e.target.closest("[data-book]"); if(!b) return;
  e.preventDefault(); openBook({stay:b.dataset.book||undefined});
});
$("#barForm").addEventListener("submit",e=>{
  e.preventDefault();
  const g=$("#bbG").value; const ad = g.startsWith("5")?"5+":g[0];
  openBook({stay:$("#bbStay").value,inD:$("#bbIn").value,outD:$("#bbOut").value,adults:ad,found:true});
});
/* stay detail */
let currentStay=null;
function renderStay(k){
  const s=STAYS[k]; currentStay=k;
  $("#sdCrumb").textContent=s.name; $("#sdName").textContent=s.name; $("#sdTag").textContent=s.tag; $("#sdText").textContent=s.text;
  $("#sdFacts").innerHTML=s.facts.map(f=>`<span>${esc(f)}</span>`).join("");
  $("#sdAmen").innerHTML=s.amen.map(a=>`<li>${esc(a)}</li>`).join("");
  const setMain=(g,btn)=>{ $("#sdMain").src=IMG[g]; $("#sdMain").alt=ALT[g]; $("#sdMain").style.objectPosition = g===s.img?s.pos:"center"; $$("#sdThumbs button").forEach(b=>b.setAttribute("aria-pressed",b===btn)); };
  $("#sdThumbs").innerHTML=s.thumbs.map(g=>`<button type="button" data-g="${g}" aria-label="Show ${esc(ALT[g])}"><img loading="lazy" decoding="async" src="${IMG[g]}" alt=""></button>`).join("");
  $$("#sdThumbs button").forEach((b,i)=>{ b.onclick=()=>setMain(b.dataset.g,b); if(i===0) setMain(b.dataset.g,b); });
  $("#sdErr").textContent="";
}
const phoneOk=v=>v.replace(/\D/g,"").length>=9;



/* ===================== Cookie consent ===================== */
const CONSENT_KEY="kivuConsent";
function consentGet(){ try{ const c=JSON.parse(localStorage.getItem(CONSENT_KEY)||"null"); if(c && Date.now()-c.at<365*864e5) return c; }catch(e){} return null; }
function prefsAllowed(){ const c=consentGet(); return !!(c && c.v==="all"); }
function consentSet(v){ try{ localStorage.setItem(CONSENT_KEY,JSON.stringify({v,at:Date.now()})); if(v!=="all") localStorage.removeItem("kivuGuest"); }catch(e){} const b=document.getElementById("ckBanner"); if(b) b.hidden=true; }
document.addEventListener("click",e=>{
  const c=e.target.closest("[data-ck]"); if(c){ consentSet(c.dataset.ck); if(c.dataset.ck!=="all" && window.GUEST) GUEST.local={}; return; }
  if(e.target.closest("[data-cookie-settings]")){ e.preventDefault(); const b=document.getElementById("ckBanner"); if(b){ b.hidden=false; const f=b.querySelector("button"); if(f) f.focus(); } }
});
(function(){ const b=document.getElementById("ckBanner"); if(b && !consentGet()) b.hidden=false; })();

/* ===================== Consent helpers ===================== */
function consentOk(scope,errEl){
  const pick=k=>scope.querySelector(`[data-consent="${k}"]`);
  const a=pick("allergy"); if(a && !a.closest(".ck-row").hidden && !a.checked){ errEl.textContent="Tick the box so our kitchen may use your food details, or clear that field."; a.focus(); return false; }
  const pb=pick("publish"); if(pb && !pb.checked){ errEl.textContent="Tick the box to let us publish your review."; pb.focus(); return false; }
  const p=pick("privacy"); if(p && !p.checked){ errEl.textContent="Please tick the box to agree to how we use your details."; p.focus(); return false; }
  return true;
}
function consentData(scope){ const c=k=>{ const el=scope.querySelector(`[data-consent="${k}"]`); const row=el&&el.closest(".ck-row"); return !!(el && el.checked && !(row&&row.hidden)); };
  return {consent:true,consentAt:nowIso(),marketingOptIn:c("marketing"),allergyConsent:c("allergy")}; }
function resetConsent(scope){ $$("[data-consent]",scope).forEach(x=>x.checked=false); }

/* ===================== Kivu data layer ===================== */
const KV={db:null,user:null,uid:null,admin:false,ready:false,inv:null,cal:{}};
const INV_DEFAULT={executive:8,standard:20,suite:4,camping:15,"msafiri-standard-single":4,"msafiri-standard-double-or-twin":4,"msafiri-superior-single":4,"msafiri-superior-double-or-twin":4};
const stayKey=v=>String(v||"").toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"");
const REF_ABC="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"; /* no 0/O or 1/I, easy to read out on the phone */
const rand=n=>crypto.getRandomValues(new Uint32Array(n));
const refCode=p=>(p||"KV")+"-"+Array.from(rand(6),x=>REF_ABC[x%32]).join("");
const newPin=()=>String(100000+rand(1)[0]%900000);
document.addEventListener("click",e=>{ const c=e.target.closest("[data-close]"); if(c){ const d=document.getElementById(c.dataset.close); if(d&&d.close) d.close(); } });
const nowIso=()=>new Date().toISOString();
const nightsOf=(a,b)=>{ const out=[]; let d=new Date(a+"T00:00"), e=new Date(b+"T00:00"); while(d<e){ out.push(iso(d)); d=addDays(d,1);} return out; };
(async()=>{
  try{ if(window.claude && typeof claude.use==="function"){
    const [db,user]=await Promise.all([claude.use("db"),claude.use("user")]);
    KV.db=db; KV.user=user;
    if(user){ try{ KV.admin=!!(await user.canEdit()); }catch(e){} try{ KV.uid=await user.id(); }catch(e){} }
  } }catch(e){}
  await Promise.resolve();
  KV.ready=true; document.body.classList.toggle("is-admin",KV.admin);
  setTimeout(startReviews,0); setTimeout(()=>GUEST.start(),0); if(document.body.dataset.page==="admin") startAdmin();
})();
async function getInv(){ if(KV.inv) return KV.inv; let inv={...INV_DEFAULT}; if(KV.db){ try{ const s=await KV.db.doc("settings/inventory").get(); if(s.exists) inv={...inv,...s.data()}; }catch(e){} } KV.inv=inv; return inv; }
async function availability(stayVal,inD,outD){
  if(!KV.db||!inD||!outD||outD<=inD) return null;
  const key=stayKey(stayVal); const inv=(await getInv())[key]; if(!inv) return null;
  let dates={}; try{ const s=await KV.db.doc("calendar/"+key).get(); if(s.exists) dates=(s.data().dates)||{}; }catch(e){ return null; }
  const full=nightsOf(inD,outD).filter(d=>(dates[d]||0)>=inv);
  return {ok:!full.length, full};
}
async function showAvail(el,stayVal,inD,outD){
  if(!el) return; const r=await availability(stayVal,inD,outD);
  if(!r){ el.hidden=true; return; }
  el.hidden=false; el.className="avail "+(r.ok?"yes":"no");
  el.textContent=r.ok?"Good news: rooms are available for your dates.":`Fully booked on ${r.full.slice(0,3).map(fmt).join(", ")}${r.full.length>3?"…":""}. You can still send a request and we’ll suggest options.`;
}
["#sdIn","#sdOut"].forEach(s=>$(s).addEventListener("change",()=>showAvail($("#sdAvail"),currentStay,$("#sdIn").value,$("#sdOut").value)));
function showOk(el,html){ el.innerHTML=html; el.hidden=false; }
async function submitRecord(coll,data,waText,okEl,btn,title){
  const ref=refCode(coll==="orders"?"KO":coll==="enquiries"?"KE":"KV"); data.ref=ref;
  if(!KV.db||!KV.uid){ openWa(waText,okEl); return false; }
  if(btn){ btn.disabled=true; btn.dataset.l=btn.textContent; btn.textContent="Sending…"; }
  let saved=false;
  try{
    const ref=KV.db.doc(coll+"/"+KV.uid), id=Date.now().toString(36)+Math.random().toString(36).slice(2,6);
    const body={items:{[id]:{...data,createdAt:nowIso()}},updatedAt:nowIso()};
    const s=await ref.get(); if(s.exists) await ref.update(body); else await ref.set(body);
    saved=true;
  }catch(e){}
  if(btn){ btn.disabled=false; btn.textContent=btn.dataset.l; }
  if(saved) showOk(okEl,`<b>${title||"Request received"}.</b> Your reference is <b>${ref}</b>. Our team will confirm with you shortly on WhatsApp or by phone. <a href="${waUrl(waText+"\nReference: "+ref)}" target="_blank" rel="noopener" style="font-weight:700">Also send it on WhatsApp</a>`);
  else showOk(okEl,`We couldn’t save your request just now. <a href="${waUrl(waText)}" target="_blank" rel="noopener" style="font-weight:700">Send it on WhatsApp instead</a>`);
  return saved;
}
async function submitBooking(stayVal,o,phone,okEl,btn){
  const text=compose({...o,notes:(o.notes?o.notes+"\n":"")+"Phone: "+phone});
  return submitRecord("bookings",{kind:"stay",stayKey:stayKey(stayVal),stayName:o.stay,checkIn:o.inD,checkOut:o.outD,nights:nightsOf(o.inD,o.outD).length,adults:o.adults,children:o.children||"0",plan:o.plan||"",name:o.name,phone,notes:o.notes||"",status:"pending"},text,okEl,btn,"Booking request received");
}

/* ---------- reviews (guest side) ---------- */
const CATS=["Room stay","Restaurant","Swimming pool","Kids Park","Safari","Event or conference","Msafiri Lodge"];
let REVIEWS=[];
function starsHtml(n){ n=Math.min(5,Math.max(0,Math.round(num(n)))); return `<span class="stars" aria-label="${n} out of 5 stars">${[1,2,3,4,5].map(i=>`<svg viewBox="0 0 24 24" class="${i<=n?"on":""}"><path d="M12 3.2l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17.2l-5.4 2.9 1-6.1L3.2 9.7l6.1-.9L12 3.2Z"/></svg>`).join("")}</span>`; }
function revCard(r){ const d=r.createdAt?new Date(r.createdAt).toLocaleDateString("en-GB",{month:"short",year:"numeric"}):""; const ini=(r.name||"G").trim().split(/\s+/).map(x=>x[0]).slice(0,2).join("").toUpperCase();
  return `<article class="rv"><div class="rv-top">${starsHtml(r.rating||5)}<span class="rv-cat">${esc(r.category||"")}</span></div><p class="rv-text">“${esc(r.text||"")}”</p>${r.reply?`<div class="rv-reply"><b>Reply from Kivu</b>${esc(r.reply)}</div>`:""}<div class="rv-who"><span class="rv-av">${esc(ini)}</span><div><b>${esc(r.name||"Guest")}</b><small>${esc(d)}</small></div></div></article>`; }
function renderReviews(){
  const n=REVIEWS.length, avg=n?REVIEWS.reduce((a,r)=>a+(+r.rating||0),0)/n:0;
  $$("[data-rv-avg]").forEach(el=>el.textContent=n?avg.toFixed(1):"New");
  $$("[data-rv-count]").forEach(el=>el.textContent=n?`${n} guest review${n===1?"":"s"}`:"Be the first to share your stay");
  $$("[data-rv-stars]").forEach(el=>el.innerHTML=starsHtml(Math.round(avg)||5));
  const home=$("#homeReviews"), all=$("#allReviews");
  const empty=`<div class="rv-empty"><b>No reviews yet</b><p>Stayed, swam or dined with us? Your words help the next guest choose Kivu.</p><button class="btn btn-coral" data-review>Write the first review</button></div>`;
  if(home) home.innerHTML=n?REVIEWS.slice(0,3).map(revCard).join(""):empty;
  if(all) all.innerHTML=n?REVIEWS.map(revCard).join(""):empty;
}
function startReviews(){
  if(!KV.db){ renderReviews(); return; }
  KV.db.collection("reviews").where("approved","==",true).onSnapshot(s=>{ REVIEWS=s.docs.filter(d=>SAFE_ID.test(d.id)).map(d=>safeRec({...d.data(),id:d.id})).filter(Boolean).sort((a,b)=>(b.createdAt||"").localeCompare(a.createdAt||"")); renderReviews(); },()=>renderReviews());
}
renderReviews();
// review dialog
let rvRating=5;
function drawStarPick(){ $("#rvStars").innerHTML=[1,2,3,4,5].map(i=>`<button type="button" data-star="${i}" aria-label="${i} star${i>1?"s":""}" class="${i<=rvRating?"on":""}"><svg viewBox="0 0 24 24"><path d="M12 3.2l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17.2l-5.4 2.9 1-6.1L3.2 9.7l6.1-.9L12 3.2Z"/></svg></button>`).join("")+`<span>${["","Poor","Fair","Good","Very good","Excellent"][rvRating]}</span>`; }
$("#rvCat").innerHTML=CATS.map(c=>`<option>${esc(c)}</option>`).join("");
$("#rvStars").addEventListener("click",e=>{ const b=e.target.closest("[data-star]"); if(b){ rvRating=+b.dataset.star; drawStarPick(); } });
document.addEventListener("click",e=>{ if(e.target.closest("[data-review]")){ e.preventDefault(); rvRating=5; drawStarPick(); $("#rvErr").textContent=""; $("#rvOk").hidden=true; $("#rvForm").hidden=false; const d=$("#reviewDlg"); d.showModal?d.showModal():d.setAttribute("open",""); } });
$("#rvClose").onclick=()=>$("#reviewDlg").close();
$("#reviewDlg").addEventListener("click",e=>{ if(e.target===$("#reviewDlg")) $("#reviewDlg").close(); });
$("#rvForm").addEventListener("submit",async e=>{
  e.preventDefault();
  const name=$("#rvName").value.trim(), text=$("#rvText").value.trim();
  if(!name){ $("#rvErr").textContent="Add your name, or just your first name."; return; }
  if(text.length<15){ $("#rvErr").textContent="Tell us a little more, at least a sentence."; return; }
  if(!consentOk($("#rvForm"),$("#rvErr"))) return;
  $("#rvErr").textContent="";
  const data={...consentData($("#rvForm")),name:name.split(/\s+/)[0],rating:rvRating,category:$("#rvCat").value,text,approved:false,createdAt:nowIso()};
  if(!KV.db){ openWa(`Hello Kivu Resort, here is my review (${rvRating}/5, ${data.category}):\n\n${text}\n\n${name}`); return; }
  const b=e.submitter; b.disabled=true; b.textContent="Sending…";
  try{ await KV.db.collection("reviews").doc().set(data); $("#rvForm").hidden=true; $("#rvOk").hidden=false; $("#rvForm").reset(); }
  catch(err){ $("#rvErr").textContent="We couldn’t save your review just now. Please try again."; }
  b.disabled=false; b.textContent="Submit review";
});




/* ===================== Guest login (encrypted stay cards) ===================== */
const STAY={
  enc:new TextEncoder(), dec:new TextDecoder(),
  b64:a=>btoa(String.fromCharCode(...new Uint8Array(a))), unb64:s=>Uint8Array.from(atob(s),c=>c.charCodeAt(0)),
  async id(ref,pin){ const base=await crypto.subtle.importKey("raw",STAY.enc.encode(`kivu|${ref.toUpperCase()}|${pin}`),"PBKDF2",false,["deriveBits"]); const h=await crypto.subtle.deriveBits({name:"PBKDF2",salt:STAY.enc.encode("kivu-stay-id-v2"),iterations:150000,hash:"SHA-256"},base,256); return [...new Uint8Array(h)].map(b=>b.toString(16).padStart(2,"0")).join(""); },
  async key(ref,pin){ const base=await crypto.subtle.importKey("raw",STAY.enc.encode(`${ref.toUpperCase()}|${pin}`),"PBKDF2",false,["deriveKey"]); return crypto.subtle.deriveKey({name:"PBKDF2",salt:STAY.enc.encode("kivu-stay-key-v2"),iterations:310000,hash:"SHA-256"},base,{name:"AES-GCM",length:256},false,["encrypt","decrypt"]); },
  async seal(ref,pin,obj){ const iv=crypto.getRandomValues(new Uint8Array(12)); const ct=await crypto.subtle.encrypt({name:"AES-GCM",iv},await STAY.key(ref,pin),STAY.enc.encode(JSON.stringify(obj))); return {iv:STAY.b64(iv),ct:STAY.b64(ct),updatedAt:nowIso()}; },
  async open(ref,pin,doc){ const pt=await crypto.subtle.decrypt({name:"AES-GCM",iv:STAY.unb64(doc.iv)},await STAY.key(ref,pin),STAY.unb64(doc.ct)); return JSON.parse(STAY.dec.decode(pt)); },
  async read(ref,pin){ if(!KV.db) return null; const s=await KV.db.doc("stays/"+await STAY.id(ref,pin)).get(); if(!s.exists) return null; return STAY.open(ref,pin,s.data()); },
  async write(ref,pin,obj){ if(!KV.db) return; await KV.db.doc("stays/"+await STAY.id(ref,pin)).set(await STAY.seal(ref,pin,obj)); },
  async patch(ref,pin,fn){ const cur=(await STAY.read(ref,pin))||{}; const next=fn({...cur}); await STAY.write(ref,pin,next); return next; }
};

/* ===================== Guest memory ===================== */
const GUEST={local:{},bookings:[],orders:[],session:null,stay:null};
try{ GUEST.session=JSON.parse(localStorage.getItem("kivuSession")||"null"); }catch(e){}
try{ GUEST.local=prefsAllowed()?(JSON.parse(localStorage.getItem("kivuGuest")||"{}")||{}):{}; if(!prefsAllowed()) localStorage.removeItem("kivuGuest"); }catch(e){}
GUEST.remember=function(o){ Object.entries(o).forEach(([k,v])=>{ if(v) GUEST.local[k]=v; }); if(prefsAllowed()){ try{ const keep={}; ["name","phone","email"].forEach(k=>{ if(GUEST.local[k]) keep[k]=GUEST.local[k]; }); localStorage.setItem("kivuGuest",JSON.stringify(keep)); }catch(e){} } GUEST.render(); };
GUEST.current=function(){
  const today=iso(new Date()); const live=GUEST.bookings.filter(b=>b.kind!=="service"&&!["declined","cancelled","completed"].includes(b.status)&&(b.checkOut||"")>=today);
  const mine=live.find(b=>b.status==="checked-in")||live.sort((a,b)=>(a.checkIn||"").localeCompare(b.checkIn||""))[0]||null;
  if(GUEST.stay && (!mine || mine.ref===GUEST.stay.ref || GUEST.stay.status==="checked-in")) return {...(mine||{}),...GUEST.stay,pin:GUEST.session&&GUEST.session.pin};
  return mine;
};
GUEST.setSession=function(ref,pin,quiet){ GUEST.session={ref:ref.toUpperCase(),pin}; try{ localStorage.setItem("kivuSession",JSON.stringify(GUEST.session)); }catch(e){} GUEST.watchStay(); if(!quiet) GUEST.render(); };
GUEST.logout=function(){ GUEST.session=null; GUEST.stay=null; try{ localStorage.removeItem("kivuSession"); }catch(e){} if(GUEST.unsub) GUEST.unsub(); GUEST.render(); };
GUEST.watchStay=async function(){
  if(!KV.db||!GUEST.session) return; if(GUEST.unsub) GUEST.unsub();
  const {ref,pin}=GUEST.session; const id=await STAY.id(ref,pin);
  GUEST.unsub=KV.db.doc("stays/"+id).onSnapshot(async s=>{ if(!s.exists){ return; } try{ GUEST.stay=safeRec(await STAY.open(ref,pin,s.data())); GUEST.render(); }catch(e){} },()=>{});
};
GUEST.start=function(){
  if(KV.db && GUEST.session) GUEST.watchStay();
  if(!KV.db||!KV.uid) { GUEST.render(); return; }
  KV.db.doc("bookings/"+KV.uid).onSnapshot(s=>{ const it=(s.exists&&s.data().items)||{}; GUEST.bookings=Object.entries(it).filter(([id])=>SAFE_ID.test(id)).map(([id,v])=>{ const r=safeRec(v); return r&&{...r,id}; }).filter(Boolean); GUEST.render(); },()=>{});
  KV.db.doc("orders/"+KV.uid).onSnapshot(s=>{ const it=(s.exists&&s.data().items)||{}; GUEST.orders=Object.entries(it).filter(([id])=>SAFE_ID.test(id)).map(([id,v])=>{ const r=safeRec(v); return r&&{...r,id}; }).filter(Boolean).sort((a,b)=>(b.createdAt||"").localeCompare(a.createdAt||"")); GUEST.render(); },()=>{});
};
GUEST.fillOrder=function(){
  const L=GUEST.local, cur=GUEST.current(), inHouse=!!(cur&&cur.status==="checked-in");
  if(!$("#odName").value && (cur?.name||L.name)) $("#odName").value=cur?.name||L.name;
  if(!$("#odPh").value && (cur?.phone||L.phone)) $("#odPh").value=cur?.phone||L.phone;
  const prefs=cur?.prefs||L.prefs;
  if(prefs && !$("#odNotes").value) $("#odNotes").value="Preferences: "+prefs;
  const g=$("#odGuest");
  if(inHouse){
    g.hidden=false; g.innerHTML=`<span class="og-ic">🔑</span><div><b>Welcome back, ${esc((cur.name||"").split(" ")[0])}</b><small>${esc(cur.stayName||"")}${cur.roomNo?` · Room ${esc(cur.roomNo)}`:""} · your details are filled in</small></div>`;
    $$("#odTypes button").forEach(b=>b.setAttribute("aria-pressed",b.textContent==="Room service"));
    if(!$("#odWhere").value) $("#odWhere").value=cur.roomNo?"Room "+cur.roomNo:cur.ref;
    $("#odPayWrap").hidden=false; $("#odPay [data-p=room]").textContent=`Charge to ${cur.roomNo?"room "+cur.roomNo:"my room"}`;
  } else if(cur||L.name){
    g.hidden=false; g.innerHTML=`<span class="og-ic">👋</span><div><b>Hi ${esc(((cur&&cur.name)||L.name||"").split(" ")[0])}</b><small>We’ve filled in your details${cur?` · your stay starts ${esc(fmt(cur.checkIn))}`:""}</small></div>`; $("#odPayWrap").hidden=true;
  } else { g.hidden=true; $("#odPayWrap").hidden=true; }
};
GUEST.render=function(){
  const cur=GUEST.current(), L=GUEST.local, has=!!(cur||L.ref||GUEST.session);
  $$(".my-stay-link").forEach(a=>a.hidden=!has); $$(".guest-login-link").forEach(a=>a.hidden=has);
  const box=$("#myStay"); if(!box) return;
  if(!cur && !L.ref){ box.innerHTML=`<div class="rv-empty"><b>No stay found on this device</b><p>Log in with your booking reference and PIN, or book a room to get started.</p><div class="row-btns" style="justify-content:center"><button class="btn btn-coral" data-login>Guest login</button><button class="btn btn-line" data-book>Book a stay</button></div></div>`; return; }
  const b=cur||{name:L.name,ref:L.ref,stayName:L.stayName,checkIn:L.checkIn,checkOut:L.checkOut,status:"pending",prefs:L.prefs};
  const st={pending:"Awaiting confirmation",confirmed:"Confirmed","checked-in":"Checked in"}[b.status]||b.status;
  const local=GUEST.orders.filter(o=>o.chargeRoom && o.bookingRef===b.ref && o.status!=="cancelled");
  const seen=new Set(local.map(o=>o.ref)); const remote=((GUEST.stay&&GUEST.stay.ref===b.ref&&GUEST.stay.charges)||[]).filter(c=>!seen.has(c.ref));
  const charges=[...local,...remote].sort((a,b)=>(b.createdAt||"").localeCompare(a.createdAt||""));
  const svc=GUEST.bookings.filter(x=>x.kind==="service").sort((a,b)=>(b.createdAt||"").localeCompare(a.createdAt||""));
  const sum=charges.reduce((a,o)=>a+(o.total||0),0);
  box.innerHTML=`<div class="ms-card">
    <div class="ms-top"><div><small>Your stay</small><h2>${esc(b.stayName||"Kivu Resort")}</h2><p>${b.checkIn?fmt(b.checkIn):""} → ${b.checkOut?fmt(b.checkOut):""}</p></div>
      <div class="ms-room"><small>Room</small><b>${b.roomNo?esc(b.roomNo):"—"}</b><span>${b.roomNo?"":"Given at check-in"}</span></div></div>
    <div class="ms-meta"><span class="apill s-${esc(b.status||"pending")}">${esc(st)}</span><span class="a-ref">${esc(b.ref||"")}</span>${b.prefs?`<span>🍽 ${esc(b.prefs)}</span>`:""}${b.paymentStatus==="paid"?`<span>✓ Payment received</span>`:""}</div>
    <div class="ms-acts"><a class="btn btn-coral" href="${__R}restaurant/" data-scroll="orderBox">${b.status==="checked-in"?"Order to my room":"See the menu"}</a><a class="btn btn-line" href="${__R}tours/">Plan a trip</a><a class="btn btn-line" href="${waUrl("Hello Kivu Resort, this is "+(b.name||"")+" ("+(b.ref||"")+").")}" target="_blank" rel="noopener">Message the front desk</a><button class="btn btn-line" data-review>Leave a review</button>${GUEST.session?`<button class="btn btn-line" data-logout>Log out</button>`:""}</div>
    ${GUEST.session?`<p class="ms-login">Logged in with <b>${esc(GUEST.session.ref)}</b>. Use your reference and PIN to open this page on any phone.</p>`:""}
  </div>
  ${b.status==="checked-in"||charges.length?`<div class="ms-bill"><h3>Room charges</h3>${charges.length?`<ul>${charges.map(o=>`<li><div><b>${esc((o.items||[]).map(i=>num(i.qty)+" × "+i.label).join(", "))}</b><small>${new Date(o.createdAt).toLocaleString("en-GB",{weekday:"short",hour:"2-digit",minute:"2-digit"})} · ${esc(STATUS.orders[o.status]||o.status)}</small></div><span>${kesF(o.total||0)}</span></li>`).join("")}</ul><div class="bs-total"><span>Total so far</span><b>${kesF(sum)}</b></div>`:`<p class="muted">Food and drinks you charge to your room will appear here. Settle everything at check-out.</p>`}</div>`:""}
  ${svc.length?`<div class="ms-bill"><h3>Your other bookings</h3><ul>${svc.map(x=>`<li><div><b>${esc(x.serviceName)}: ${esc(x.option)}</b><small>${x.date?fmt(x.date):""} · ${esc(x.qty)} · ${esc(STATUS.services[x.status]||x.status)} · ${esc(x.ref)}</small></div><span>${x.total?kesF(x.total):"On request"}</span></li>`).join("")}</ul></div>`:""}`;
};

/* ===================== Booking engine ===================== */
const RATE_DEFAULT={"msafiri-standard-single":{bb:3500,hb:4500,fb:null},"msafiri-standard-double-or-twin":{bb:5000,hb:7000,fb:9000},"msafiri-superior-single":{bb:4000,hb:5000,fb:6000},"msafiri-superior-double-or-twin":{bb:6000,hb:8000,fb:10000}};
const PAY_DEFAULT={type:"Paybill",number:"",account:"",depositPct:50};
const planKey=p=>/half/i.test(p)?"hb":/full/i.test(p)?"fb":"bb";
const kesF=n=>"KES "+Math.round(n).toLocaleString("en-KE");
async function getSettings(){
  if(KV.settings) return KV.settings;
  const s={rates:{...RATE_DEFAULT},pay:{...PAY_DEFAULT}};
  if(KV.db){ try{ const [r,p]=await Promise.all([KV.db.doc("settings/rates").get(),KV.db.doc("settings/payment").get()]);
    if(r.exists) Object.entries(r.data()).forEach(([k,v])=>s.rates[k]={...(s.rates[k]||{}),...v});
    if(p.exists) s.pay={...s.pay,...p.data()}; }catch(e){} }
  KV.settings=s; return s;
}
const BK={step:1,stay:null,inD:"",outD:"",month:null,booked:{},inv:null,ref:"",pay:"arrival",part:"deposit",total:null,rate:null};
BK.open=async function(pre={}){
  const d=$("#bookDlg");
  $("#bkDone").hidden=true; $("#dOk").hidden=true; $$(".bk-step").forEach(s=>s.hidden=s.dataset.step!=="1"); BK.goto(1);
  $("#dlgTitle").textContent="Book your stay";
  if(pre.stay) $("#dS").value=pre.stay;
  if(pre.adults) $("#dA").value=pre.adults; if(pre.children) $("#dC").value=pre.children;
  if(pre.plan && /board|breakfast/i.test(pre.plan)) $("#dP").value=pre.plan;
  if(pre.name) $("#dN").value=pre.name; if(pre.phone) $("#dPh").value=pre.phone;
  BK.inD=pre.inD||""; BK.outD=(pre.outD && pre.outD>BK.inD)?pre.outD:"";
  const base=BK.inD?new Date(BK.inD+"T00:00"):new Date(); BK.month=new Date(base.getFullYear(),base.getMonth(),1);
  closeSheet(); d.showModal?d.showModal():d.setAttribute("open","");
  await BK.loadStay(); 
};
BK.goto=function(n){ BK.step=n; $$(".bk-step").forEach(s=>s.hidden=+s.dataset.step!==n); $$("#bkSteps li").forEach(l=>{ l.classList.toggle("on",+l.dataset.s===n); l.classList.toggle("done",+l.dataset.s<n); }); $("#bookDlg").scrollTop=0; const w=$(".bk-wrap"); if(w) w.scrollTop=0; };
BK.loadStay=async function(){
  BK.stay=$("#dS").value; const key=stayKey(BK.stay); BK.booked={}; BK.inv=null;
  $("#calLegend").style.visibility=KV.db?"visible":"hidden";
  if(KV.db){ try{ const inv=await getInv(); BK.inv=inv[key]??null; const s=await KV.db.doc("calendar/"+key).get(); if(s.exists) BK.booked=s.data().dates||{}; }catch(e){} }
  if(BK.inD && BK.outD && BK.rangeBlocked(BK.inD,BK.outD)){ BK.outD=""; $("#bkErr1").textContent="Some of those nights are fully booked for this room. Please pick other dates."; }
  BK.drawCal(); BK.updRange();
};
BK.left=function(d){ if(BK.inv==null) return null; return BK.inv-(BK.booked[d]||0); };
BK.rangeBlocked=function(a,b){ return nightsOf(a,b).some(d=>{ const l=BK.left(d); return l!==null && l<=0; }); };
BK.drawCal=function(){
  const m=BK.month, y=m.getFullYear(), mo=m.getMonth(), first=(new Date(y,mo,1).getDay()+6)%7, days=new Date(y,mo+1,0).getDate(), today=iso(new Date());
  let cells=""; for(let i=0;i<first;i++) cells+=`<span class="cd empty"></span>`;
  for(let d=1; d<=days; d++){
    const ds=iso(new Date(y,mo,d)), l=BK.left(ds), past=ds<today;
    let cls="cd"; if(past) cls+=" past"; else if(l!==null && l<=0) cls+=" full"; else if(l!==null && l<=2) cls+=" few"; else cls+=" ok";
    if(BK.inD && ds===BK.inD) cls+=" sel start"; if(BK.outD && ds===BK.outD) cls+=" sel end";
    if(BK.inD && BK.outD && ds>BK.inD && ds<BK.outD) cls+=" inrange";
    cells+=`<button type="button" class="${cls}" data-d="${ds}" ${past?"disabled":""} aria-label="${fmt(ds)}${l!==null?`, ${l>0?l+" left":"fully booked"}`:""}">${d}</button>`;
  }
  const cur=new Date(); const canPrev=y>cur.getFullYear()||mo>cur.getMonth();
  $("#bkCal").innerHTML=`<div class="cal-head"><button type="button" class="cal-nav" data-m="-1" ${canPrev?"":"disabled"} aria-label="Previous month">‹</button><b>${m.toLocaleDateString("en-GB",{month:"long",year:"numeric"})}</b><button type="button" class="cal-nav" data-m="1" aria-label="Next month">›</button></div><div class="cal-dow">${["Mo","Tu","We","Th","Fr","Sa","Su"].map(x=>`<span>${x}</span>`).join("")}</div><div class="cal-grid">${cells}</div>`;
};
BK.updRange=async function(){
  $("#dIn").value=BK.inD; $("#dOut").value=BK.outD;
  $("#bkIn").textContent=BK.inD?fmt(BK.inD):"Pick a date"; $("#bkOut").textContent=BK.outD?fmt(BK.outD):"Pick a date";
  const n=BK.inD&&BK.outD?nightsOf(BK.inD,BK.outD).length:0; $("#bkN").textContent=n;
  const s=await getSettings(); const r=(s.rates[stayKey(BK.stay)]||{})[planKey($("#dP").value)];
  BK.rate=r||null; BK.total=r&&n?r*n:null;
  $("#bkPrice1").innerHTML=r?`<span>${kesF(r)} <small>per night, ${esc($("#dP").value.toLowerCase())}</small></span>${n?`<b>${kesF(r*n)}</b><small>total for ${n} night${n>1?"s":""}</small>`:""}`:`<span>Your rate is confirmed personally by our team. <small>Resident and non-resident rates differ.</small></span>`;
};
$("#bkCal").addEventListener("click",e=>{
  const nav=e.target.closest("[data-m]"); if(nav){ BK.month=new Date(BK.month.getFullYear(),BK.month.getMonth()+ +nav.dataset.m,1); BK.drawCal(); return; }
  const c=e.target.closest("[data-d]"); if(!c||c.disabled) return; const d=c.dataset.d; $("#bkErr1").textContent="";
  if(!BK.inD || BK.outD || d<=BK.inD){ if(c.classList.contains("full")){ $("#bkErr1").textContent="That night is fully booked. Please choose another date."; return; } BK.inD=d; BK.outD=""; }
  else if(BK.rangeBlocked(BK.inD,d)){ if(c.classList.contains("full")){ $("#bkErr1").textContent="That night is fully booked. Please choose another date."; return; } BK.inD=d; BK.outD=""; $("#bkErr1").textContent="Some nights in between are fully booked, so your stay now starts on this date. Pick your check-out."; }
  else BK.outD=d;
  BK.drawCal(); BK.updRange();
});
$("#dS").addEventListener("change",()=>{ $("#bkErr1").textContent=""; BK.loadStay(); });
$("#dP").addEventListener("change",()=>BK.updRange());
$("#dlgClose").onclick=()=>$("#bookDlg").close();
$("#bookDlg").addEventListener("click",e=>{ if(e.target===$("#bookDlg")) $("#bookDlg").close(); });
document.addEventListener("click",e=>{ const g=e.target.closest("#bookDlg [data-goto]"); if(g) BK.goto(+g.dataset.goto); });
$("#bkTo2").onclick=()=>{ if(!BK.inD||!BK.outD){ $("#bkErr1").textContent="Tap your check-in date, then your check-out date on the calendar."; return; } $("#bkErr1").textContent=""; BK.goto(2); };
$("#dPref").addEventListener("input",()=>{ $("#dAllergyWrap").hidden=!$("#dPref").value.trim(); });
$("#bkTo3").onclick=async()=>{
  if(!$("#dN").value.trim()){ $("#bkErr2").textContent="Add your full name."; $("#dN").focus(); return; }
  if(!phoneOk($("#dPh").value)){ $("#bkErr2").textContent="Add a phone number we can reach you on."; $("#dPh").focus(); return; }
  if(!consentOk($("#bookDlg [data-step='2']"),$("#bkErr2"))) return;
  $("#bkErr2").textContent=""; if(!BK.ref) BK.ref=refCode("KV"); await BK.drawPay(); BK.goto(3);
};
BK.drawPay=async function(){
  const s=await getSettings(), n=nightsOf(BK.inD,BK.outD).length, p=s.pay, mp=!!(p.number && BK.total);
  if(!mp) BK.pay="arrival";
  $("#bkSum").innerHTML=`<div class="bs-row"><b>${esc(stayName(BK.stay))}</b><span class="a-ref">${esc(BK.ref)}</span></div>
    <div class="bs-grid"><span>${fmt(BK.inD)} → ${fmt(BK.outD)}</span><span>${n} night${n>1?"s":""}</span><span>${esc($("#dA").value)} adult(s)${$("#dC").value!=="0"?", "+esc($("#dC").value)+" child(ren)":""}</span><span>${esc($("#dP").value)}</span></div>
    <div class="bs-total"><span>${BK.total?`${kesF(BK.rate)} × ${n} night${n>1?"s":""}`:"Total"}</span><b>${BK.total?kesF(BK.total):"Confirmed by our team"}</b></div>`;
  const dep=BK.total?Math.round(BK.total*(p.depositPct||50)/100):0;
  $("#payOpts").innerHTML=(mp?`<button type="button" class="po" data-pay="mpesa" aria-pressed="${BK.pay==="mpesa"}"><span class="po-ic mp">M</span><div><b>Pay now with M-Pesa</b><small>Secure your room instantly. Deposit ${kesF(dep)} or pay in full.</small></div></button>`:"")+
    `<button type="button" class="po" data-pay="arrival" aria-pressed="${BK.pay==="arrival"}"><span class="po-ic">🏨</span><div><b>Pay at check-in</b><small>${mp?"Reserve now, pay cash, card or M-Pesa when you arrive.":"We’ll confirm your rate on WhatsApp. Pay cash, card or M-Pesa when you arrive."}</small></div></button>`;
  BK.dep=dep; BK.drawMpesa();
};
BK.drawMpesa=function(){
  const box=$("#mpesaBox"), p=(KV.settings||{}).pay||PAY_DEFAULT;
  if(BK.pay!=="mpesa"){ box.hidden=true; $("#bkConfirm").textContent="Confirm booking"; return; }
  const amt=BK.part==="full"?BK.total:BK.dep; box.hidden=false;
  box.innerHTML=`<div class="mp-parts"><button type="button" data-part="deposit" aria-pressed="${BK.part==="deposit"}">Deposit ${p.depositPct||50}%<b>${kesF(BK.dep)}</b></button><button type="button" data-part="full" aria-pressed="${BK.part==="full"}">Pay in full<b>${kesF(BK.total)}</b></button></div>
    <ol class="mp-steps"><li>Open <b>M-Pesa</b> on your phone and choose <b>Lipa na M-Pesa</b>, then <b>${esc(p.type==="Till"?"Buy Goods and Services":"Pay Bill")}</b>.</li>
    <li>${p.type==="Till"?"Till number":"Business number"}: <b class="mp-big">${esc(p.number)}</b> <button type="button" class="copy" data-copy="${esc(p.number)}">Copy</button></li>
    ${p.type==="Till"?"":`<li>Account number: <b class="mp-big">${esc(p.account||BK.ref)}</b> <button type="button" class="copy" data-copy="${esc(p.account||BK.ref)}">Copy</button></li>`}
    <li>Amount: <b class="mp-big">${kesF(amt)}</b>, then enter your M-Pesa PIN.</li></ol>
    <div class="fld"><label for="mpCode">M-Pesa confirmation code</label><input id="mpCode" placeholder="e.g. QK7H2LM9XA" maxlength="12" autocapitalize="characters" style="text-transform:uppercase;letter-spacing:.08em;font-weight:700"></div>
    <p class="small" style="margin-top:8px">You’ll find it in the SMS from M-Pesa. Our team verifies it and confirms your booking.</p>`;
  $("#bkConfirm").textContent=`Confirm and pay ${kesF(amt)}`;
};
$("#payOpts").addEventListener("click",e=>{ const b=e.target.closest("[data-pay]"); if(!b) return; BK.pay=b.dataset.pay; $$("#payOpts [data-pay]").forEach(x=>x.setAttribute("aria-pressed",x===b)); BK.drawMpesa(); });
$("#mpesaBox").addEventListener("click",e=>{ const b=e.target.closest("[data-part]"); if(b){ BK.part=b.dataset.part; BK.drawMpesa(); return; } const c=e.target.closest("[data-copy]"); if(c){ try{ navigator.clipboard.writeText(c.dataset.copy); c.textContent="Copied"; setTimeout(()=>c.textContent="Copy",1400);}catch(err){} } });
$("#bkConfirm").onclick=async()=>{
  const btn=$("#bkConfirm"); $("#dErr").textContent="";
  let code="";
  if(BK.pay==="mpesa"){ code=($("#mpCode").value||"").trim().toUpperCase().replace(/\s/g,""); if(!/^[A-Z0-9]{10}$/.test(code)){ $("#dErr").textContent="Enter the 10-character M-Pesa code from your confirmation SMS."; $("#mpCode").focus(); return; } }
  const n=nightsOf(BK.inD,BK.outD).length, amt=BK.pay==="mpesa"?(BK.part==="full"?BK.total:BK.dep):0;
  const pin=newPin();
  const rec={kind:"stay",...consentData($("#bookDlg [data-step='2']")),pin,ref:BK.ref,stayKey:stayKey(BK.stay),stayName:stayName(BK.stay),checkIn:BK.inD,checkOut:BK.outD,nights:n,adults:$("#dA").value,children:$("#dC").value,plan:$("#dP").value,
    name:$("#dN").value.trim(),phone:$("#dPh").value.trim(),email:$("#dE").value.trim().toLowerCase(),residency:$("#dRes").value,prefs:$("#dPref").value.trim()&&$("#dAllergyWrap [data-consent]").checked?$("#dPref").value.trim():"",notes:$("#dM").value.trim(),
    rate:BK.rate,total:BK.total,paymentMethod:BK.pay,amountPaid:amt,mpesaCode:code,paymentStatus:BK.pay==="mpesa"?"submitted":"unpaid",status:"pending"};
  const text=compose({stay:rec.stayName,inD:rec.checkIn,outD:rec.checkOut,adults:rec.adults,children:rec.children,plan:rec.plan,name:rec.name,notes:`Guest login: ${BK.ref}, PIN ${pin}\nPhone: ${rec.phone}\nResidency: ${rec.residency}${rec.notes?"\n"+rec.notes:""}\nPayment: ${BK.pay==="mpesa"?`M-Pesa ${kesF(amt)}, code ${code}`:"at check-in"}\nReference: ${BK.ref}`});
  let saved=false;
  if(KV.db && KV.uid){
    btn.disabled=true; btn.textContent="Saving your booking…";
    try{ const ref=KV.db.doc("bookings/"+KV.uid), id=Date.now().toString(36)+Math.random().toString(36).slice(2,6);
      const body={items:{[id]:{...rec,createdAt:nowIso()}},updatedAt:nowIso()}; const s=await ref.get(); if(s.exists) await ref.update(body); else await ref.set(body); saved=true; }catch(err){}
    btn.disabled=false;
  }
  GUEST.remember({name:rec.name,phone:rec.phone,email:rec.email,prefs:rec.prefs,ref:rec.ref,stayName:rec.stayName,checkIn:rec.checkIn,checkOut:rec.checkOut});
  $$(".bk-step").forEach(s=>s.hidden=true); $("#bkSteps").querySelectorAll("li").forEach(l=>l.classList.add("done"));
  const done=$("#bkDone"); done.hidden=false;
  if(saved){
    try{ await STAY.write(rec.ref,pin,{name:rec.name,phone:rec.phone,prefs:rec.prefs,ref:rec.ref,stayName:rec.stayName,checkIn:rec.checkIn,checkOut:rec.checkOut,status:"pending",roomNo:"",plan:rec.plan,charges:[]}); GUEST.setSession(rec.ref,pin,true); }catch(err){}
    done.innerHTML=`<div class="done-ic">✓</div><h3>${BK.pay==="mpesa"?"Payment sent, we’re confirming it":"Booking received"}</h3><p>Thank you, ${esc(rec.name.split(" ")[0])}. Your reference is <b>${esc(BK.ref)}</b>.</p>
      <div class="bk-sum">${$("#bkSum").innerHTML}${BK.pay==="mpesa"?`<div class="bs-total"><span>Paid with M-Pesa (${esc(code)})</span><b>${kesF(amt)}</b></div>`:""}</div>
      <div class="login-card"><small>Your guest login</small><div><span>Reference <b>${esc(BK.ref)}</b></span><span>PIN <b>${pin}</b></span></div><p>Use these to open “My stay” on any phone, order to your room and see your bill. We’ve also included them in your WhatsApp message.</p></div>
      <p class="small">${BK.pay==="mpesa"?"We’re verifying your payment now and will confirm your room on WhatsApp shortly.":"We’ll confirm your room and rate on WhatsApp shortly."}</p>
      <div class="bk-nav"><a class="btn btn-line" href="${waUrl(text)}" target="_blank" rel="noopener">Message us on WhatsApp</a><button type="button" class="btn btn-dark" data-close="bookDlg">Done</button></div>`;
    BK.ref="";
  } else {
    done.innerHTML=`<div class="done-ic">✓</div><h3>Almost done</h3><p>Send your booking to our front desk on WhatsApp to finish. Your reference is <b>${esc(BK.ref)}</b>.</p><div class="bk-nav"><span></span><a class="btn btn-wa" href="${waUrl(text)}" target="_blank" rel="noopener">Send booking on WhatsApp</a></div>`;
  }
};


/* ===================== Safari destinations ===================== */
function scene(kind){
  const P={lake:["#F6C9A6","#BFE0E4"],crater:["#F2D2A4","#CFE1EA"],falls:["#CDE7EE","#EAF4F1"],gorge:["#F6B98A","#FBE0C2"],savanna:["#F7B267","#FBD7A1"],springs:["#E8D9C9","#D4E7EA"],hill:["#D7E8EC","#F3EEE3"],island:["#F9C8B4","#CFE6EA"],volcano:["#E9C9B7","#DCE8EE"]}[kind]||["#CFE6EA","#F3EEE3"];
  const id="g"+Math.random().toString(36).slice(2,7);
  let s=`<svg viewBox="0 0 400 260" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="${id}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${P[1]}"/><stop offset="1" stop-color="${P[0]}"/></linearGradient></defs><rect width="400" height="260" fill="url(#${id})"/>`;
  const sun=(x,y,r,c)=>`<circle cx="${x}" cy="${y}" r="${r}" fill="${c||"#FFE3B3"}" opacity=".9"/>`;
  const acacia=(x,y,k)=>`<g transform="translate(${x} ${y}) scale(${k})" fill="#3A2E25"><path d="M-2 0h4l-1-38h-2z"/><path d="M-1-30l-14-10 2-2 13 9zM1-30l14-10-2-2-13 9z"/><ellipse cx="0" cy="-44" rx="34" ry="7"/></g>`;
  const giraffe=(x,y,k)=>`<g transform="translate(${x} ${y}) scale(${k})" fill="#4A3527"><path d="M0 0h3v-18h12v18h3v-22l-2-6h-14l-6-24 4-2 2-3-6-1-3 4 6 26z"/></g>`;
  const flam=(x,y,k)=>`<g transform="translate(${x} ${y}) scale(${k})"><path d="M0 0v-14M3 0l-3-14" stroke="#B85A63" stroke-width="1"/><ellipse cx="1" cy="-17" rx="6" ry="3.5" fill="#F08A9A"/><path d="M5-18q6-6 2-14" stroke="#F08A9A" stroke-width="1.6" fill="none"/><circle cx="7" cy="-32" r="1.8" fill="#F08A9A"/></g>`;
  if(kind==="lake"||kind==="springs"||kind==="island"){
    s+=sun(300,70,26)+`<path d="M0 150 C60 110 120 120 170 135 S280 105 400 128 V180 H0Z" fill="#5E8B6B"/><path d="M0 165 C80 140 160 150 240 158 S340 140 400 150 V180 H0Z" fill="#456F55"/><rect y="175" width="400" height="85" fill="#7FB3BC"/><path d="M0 190h400M0 210h400M0 232h400" stroke="#A9D1D6" stroke-width="2" opacity=".6"/>`;
    if(kind==="island") s+=`<path d="M150 180 Q200 150 250 180Z" fill="#4E7A57"/>`+giraffe(185,178,.7)+giraffe(212,180,.6);
    if(kind==="springs") s+=[60,110,330].map(x=>`<ellipse cx="${x}" cy="150" rx="16" ry="34" fill="#fff" opacity=".55"/><ellipse cx="${x+6}" cy="118" rx="12" ry="22" fill="#fff" opacity=".4"/>`).join("");
    for(let i=0;i<(kind==="lake"?26:kind==="springs"?16:6);i++){ const x=20+((i*53)%360), y=200+((i*17)%45); s+=flam(x,y,.8+((i%3)*.15)); }
  } else if(kind==="crater"||kind==="volcano"){
    s+=sun(80,60,22);
    s+= kind==="crater" ? `<path d="M0 140 C80 120 120 100 200 104 S330 118 400 132 V260 H0Z" fill="#7C8F5A"/><path d="M60 170 C120 150 280 150 340 170 C300 205 100 205 60 170Z" fill="#5C6B3E"/><path d="M0 200 C120 186 280 186 400 200 V260 H0Z" fill="#9AAA6B"/>`
      : `<path d="M40 210 L170 80 Q200 64 230 80 L360 210Z" fill="#8A6E57"/><path d="M168 82 Q200 98 232 82 Q200 70 168 82Z" fill="#5E4A3A"/><path d="M0 200 C120 186 280 186 400 200 V260 H0Z" fill="#A8B47A"/>`;
    s+=acacia(70,215,.7)+acacia(330,220,.8);
  } else if(kind==="falls"){
    s+=`<path d="M0 40 L130 40 L150 260 H0Z" fill="#5D6B4F"/><path d="M400 40 L250 40 L240 260 H400Z" fill="#4E5C43"/><rect x="150" y="40" width="96" height="190" fill="#EAF6F8"/><path d="M160 40v190M182 40v190M205 40v190M228 40v190" stroke="#C9E6EC" stroke-width="5"/><ellipse cx="198" cy="232" rx="110" ry="26" fill="#9CCAD2"/><ellipse cx="198" cy="225" rx="70" ry="14" fill="#fff" opacity=".7"/>`;
  } else if(kind==="gorge"){
    s+=sun(200,60,24)+`<path d="M0 60 L110 70 L130 260 H0Z" fill="#B5603A"/><path d="M400 50 L280 66 L265 260 H400Z" fill="#A35332"/><path d="M110 70 L150 80 L170 260 H130Z" fill="#C97A4E"/><path d="M280 66 L245 82 L228 260 H265Z" fill="#C06F45"/><path d="M170 260 Q200 200 228 260Z" fill="#E7C49A"/>`+giraffe(196,240,.45);
  } else if(kind==="savanna"){
    s+=sun(310,90,34,"#FFD08A")+`<path d="M0 170 C100 160 300 160 400 172 V260 H0Z" fill="#D9A55A"/><path d="M0 200 C100 192 300 192 400 204 V260 H0Z" fill="#C88F45"/>`+acacia(90,175,1.1)+acacia(300,182,.8)+giraffe(180,200,.9)+giraffe(215,204,.7);
    s+=`<g fill="#3A2E25"><ellipse cx="260" cy="214" rx="14" ry="8"/><rect x="250" y="216" width="3" height="10"/><rect x="266" y="216" width="3" height="10"/><path d="M272 210q8-2 9 10" stroke="#3A2E25" stroke-width="3" fill="none"/></g>`;
  } else { // hill
    s+=sun(320,70,22)+`<path d="M0 160 C90 110 170 120 240 140 S360 130 400 140 V260 H0Z" fill="#8FAE7A"/><path d="M0 200 C120 180 280 185 400 196 V260 H0Z" fill="#B7C98E"/>`+[[120,150],[150,146],[180,148]].map(([x,y])=>`<ellipse cx="${x}" cy="${y}" rx="9" ry="5" fill="#8C8273"/>`).join("")+acacia(300,190,.7);
  }
  return s+`</svg>`;
}
const TRIPS=[
 {id:"nakuru",name:"Lake Nakuru National Park",type:"half",dur:"Half or full day",dist:"A few minutes from Kivu",img:"flamingos",hi:["Flamingos and pelicans on the lake shore","White and black rhino, lions, Rothschild’s giraffe","Baboon Cliff viewpoint and Makalia Falls"]},
 {id:"menengai",name:"Menengai Crater",type:"half",dur:"Half day",dist:"About 12 km",scene:"crater",hi:["One of Africa’s largest volcanic calderas","Sunset views over the crater floor","Short hikes and picnic spots"]},
 {id:"hyrax",name:"Hyrax Hill Prehistoric Site",type:"half",dur:"2 to 3 hours",dist:"About 5 km",scene:"hill",hi:["Ancient settlements and burial sites","Small museum with local history","Views across the lake basin"]},
 {id:"elmenteita",name:"Lake Elmenteita",type:"half",dur:"Half day",dist:"About 32 km",scene:"lake",hi:["Quiet soda lake, a UNESCO World Heritage Site","Flamingos and hundreds of bird species","Combine with Kariandusi prehistoric site"]},
 {id:"naivasha",name:"Lake Naivasha and Crescent Island",type:"full",dur:"Full day",dist:"About 1 hr 30 min",scene:"island",hi:["Boat ride among hippos","Walking safari with giraffes and zebras on Crescent Island","Lunch by the lake"]},
 {id:"hellsgate",name:"Hell’s Gate National Park",type:"full",dur:"Full day",dist:"About 2 hours",scene:"gorge",hi:["Cycle among zebras and buffalo","Guided walk through the dramatic gorge","Towering red cliffs and geothermal steam"]},
 {id:"thomson",name:"Thomson’s Falls, Nyahururu",type:"full",dur:"Full day",dist:"About 1 hr 30 min",scene:"falls",hi:["A 74-metre waterfall on the Ewaso Narok river","Walk down to the base of the falls","Cool highland air"]},
 {id:"longonot",name:"Mount Longonot",type:"full",dur:"Full day",dist:"About 2 hours",scene:"volcano",hi:["Hike to the crater rim of a dormant volcano","Sweeping Rift Valley views","Best for fit walkers"]},
 {id:"bogoria",name:"Lake Bogoria",type:"full",dur:"Full day",dist:"About 2 hr 30 min",scene:"springs",hi:["Hot springs and bubbling geysers","Thousands of flamingos in season","Greater kudu on the lake shore"]},
 {id:"baringo",name:"Lake Baringo",type:"full",dur:"Full day",dist:"About 3 hours",scene:"lake",hi:["Boat rides and over 400 bird species","Fish eagles and hippos","Local Il Chamus fishing villages"]},
 {id:"mara",name:"Maasai Mara National Reserve",type:"multi",dur:"2 to 3 days",dist:"About 5 hours",scene:"savanna",hi:["The Big Five on open savanna","The Great Migration, July to October","Maasai cultural village visits"]}
];
(function(){
  const grid=$("#tripGrid"); if(!grid) return;
  const lab={half:"Half day",full:"Full day",multi:"Overnight"};
  grid.innerHTML=TRIPS.map(tr=>`<article class="trip" data-type="${tr.type}">
    <div class="trip-img">${tr.img?`<img loading="lazy" decoding="async" src="${IMG[tr.img]}" alt="${esc(tr.name)}">`:`<span role="img" aria-label="Illustration of ${esc(tr.name)}">${scene(tr.scene)}</span>`}<span class="scard-tag">${lab[tr.type]}</span></div>
    <div class="trip-body"><h3>${esc(tr.name)}</h3><div class="trip-meta"><span>⏱ ${esc(tr.dur)}</span><span>🚐 ${esc(tr.dist)}</span></div>
    <ul>${tr.hi.map(h=>`<li>${esc(h)}</li>`).join("")}</ul>
    <div class="trip-btns"><button class="btn btn-coral sm" data-addtrip="${tr.id}" aria-pressed="false">+ Add to my trip</button><button class="btn btn-line sm" data-trip="${tr.id}">Ask about this</button></div></div></article>`).join("");
  $$("#tripFilter button").forEach(b=>b.onclick=()=>{ $$("#tripFilter button").forEach(x=>x.setAttribute("aria-selected",x===b)); const f=b.dataset.f; $$("#tripGrid .trip").forEach(c=>c.hidden=f!=="all"&&c.dataset.type!==f); });
  $("#tpWhere").innerHTML=`<option value="plan">My trip plan (from “See your trip”)</option>`+TRIPS.map(tr=>`<option value="${tr.id}">${esc(tr.name)}</option>`).join("")+`<option value="other">Somewhere else in Kenya</option><option value="transfer">Airport or Nairobi transfer</option>`;
  const other=()=>{ $("#tpOtherWrap").hidden=!["other","transfer"].includes($("#tpWhere").value); };
  $("#tpWhere").addEventListener("change",other);
  $("#tpWhere").value="nakuru";
  $("#tpDate").min=iso(new Date());
  document.addEventListener("click",e=>{ const b=e.target.closest("[data-trip]"); if(!b) return; $("#tpWhere").value=b.dataset.trip; other(); $("#anywhere").scrollIntoView({behavior:"smooth",block:"start"}); setTimeout(()=>$("#tpName").focus({preventScroll:true}),600); });
  /* trip planner */
  let plan=[]; try{ plan=JSON.parse(localStorage.getItem("kivuTrip")||"[]").filter(id=>TRIPS.some(t=>t.id===id)); }catch(e){}
  const saveP=()=>{ try{ localStorage.setItem("kivuTrip",JSON.stringify(plan)); }catch(e){} };
  const byT=Object.fromEntries(TRIPS.map(t=>[t.id,t]));
  function days(){
    const items=TRIPS.filter(t=>plan.includes(t.id)); const out=[]; let half=[];
    items.forEach(t=>{ if(t.type==="half"){ half.push(t); if(half.length===2){ out.push({stops:half,label:"Two half-day trips"}); half=[]; } } });
    if(half.length) out.push({stops:half,label:"Half-day trip, afternoon free at Kivu"});
    items.filter(t=>t.type==="full").forEach(t=>out.push({stops:[t],label:"Full-day trip, back for dinner"}));
    items.filter(t=>t.type==="multi").forEach(t=>{ out.push({stops:[t],label:"Drive to the Mara, afternoon game drive"}); out.push({stops:[t],label:"Full day of game drives"}); out.push({stops:[t],label:"Morning game drive, return to Nakuru"}); });
    return out;
  }
  function itinText(){ const d=days(), s=$("#plStart").value; return d.map((x,i)=>{ const dt=s?" ("+fmt(iso(addDays(new Date(s+"T00:00"),i)))+")":""; return `Day ${i+1}${dt}: ${x.stops.map(t=>t.name).join(" + ")}. ${x.label}`; }).join("\n"); }
  function drawPlan(){
    const d=days(), s=$("#plStart").value;
    $$("[data-addtrip]").forEach(b=>{ const on=plan.includes(b.dataset.addtrip); b.setAttribute("aria-pressed",on); b.textContent=on?"✓ In my trip":"+ Add to my trip"; b.closest(".trip").classList.toggle("picked",on); });
    $("#plTot").innerHTML=plan.length?`<b>${d.length}</b><span>day${d.length>1?"s":""}</span><b>${plan.length}</b><span>place${plan.length>1?"s":""}</span>`:"";
    $("#plDays").innerHTML=plan.length?d.map((x,i)=>{ const dt=s?fmt(iso(addDays(new Date(s+"T00:00"),i))):""; return `<div class="pl-day"><div class="pl-num"><b>Day ${i+1}</b>${dt?`<small>${esc(dt)}</small>`:""}</div><div class="pl-stops">${x.stops.map(t=>`<div class="pl-stop"><span class="pl-thumb">${t.img?`<img loading="lazy" decoding="async" src="${IMG[t.img]}" alt="">`:scene(t.scene)}</span><div><b>${esc(t.name)}</b><small>${esc(t.dist)}</small></div><button class="pl-x" data-rmtrip="${t.id}" aria-label="Remove ${esc(t.name)}">×</button></div>`).join("")}<p class="pl-note">${esc(x.label)}</p></div></div>`; }).join("")
      :`<div class="pl-empty"><b>Your trip is empty</b><p>Tap “Add to my trip” on any destination above to start planning.</p></div>`;
    $("#plSend").disabled=!plan.length; $("#plClear").hidden=!plan.length;
    const bar=$("#tripBar"); bar.hidden=!plan.length||document.body.dataset.page!=="safaris";
    $("#tbCount").textContent=plan.length; $("#tbDays").textContent=`${d.length} day${d.length>1?"s":""} planned`; $("#tbNames").textContent=TRIPS.filter(t=>plan.includes(t.id)).map(t=>t.name.split(" ")[0]+" "+(t.name.split(" ")[1]||"")).join(", ");
  }
  window.__drawPlan=drawPlan;
  document.addEventListener("click",e=>{
    const a=e.target.closest("[data-addtrip]"); if(a){ const id=a.dataset.addtrip; plan=plan.includes(id)?plan.filter(x=>x!==id):[...plan,id]; saveP(); drawPlan(); if(plan.includes(id)) toast2(`Added ${byT[id].name} to your trip`); return; }
    const r=e.target.closest("[data-rmtrip]"); if(r){ plan=plan.filter(x=>x!==r.dataset.rmtrip); saveP(); drawPlan(); }
  });
  function toast2(m){ const el=$("#toast"); el.textContent=m; el.classList.add("show"); clearTimeout(toast2.t); toast2.t=setTimeout(()=>el.classList.remove("show"),1700); }
  $("#plStart").min=iso(new Date()); $("#plStart").addEventListener("change",drawPlan);
  $("#plClear").onclick=()=>{ plan=[]; saveP(); drawPlan(); };
  $("#tbOpen").onclick=()=>$("#planner").scrollIntoView({behavior:"smooth",block:"start"});
  $("#plSend").onclick=()=>{ if(!plan.length) return; $("#tpWhere").value="plan"; other(); if($("#plStart").value) $("#tpDate").value=$("#plStart").value; $("#tpPeople").value=$("#plPeople").value;
    $("#tpNotes").value=`My trip plan:\n${itinText()}\nStaying at: ${$("#plStayAt").value}`+($("#tpNotes").value&&!$("#tpNotes").value.startsWith("My trip plan")?"\n"+$("#tpNotes").value:"");
    $("#anywhere").scrollIntoView({behavior:"smooth",block:"start"}); setTimeout(()=>$("#tpName").focus({preventScroll:true}),600); };
  addEventListener("hashchange",()=>setTimeout(drawPlan,60));
  drawPlan();

  $("#tripForm").addEventListener("submit",async e=>{
    e.preventDefault();
    const w=$("#tpWhere"), where=w.value==="plan"?(plan.length?`Custom trip: ${TRIPS.filter(t=>plan.includes(t.id)).map(t=>t.name).join(", ")}`:""):["other","transfer"].includes(w.value)?(w.options[w.selectedIndex].text+(($("#tpOther").value.trim())?": "+$("#tpOther").value.trim():"")):w.options[w.selectedIndex].text;
    if(w.value==="plan" && !plan.length){ $("#tpErr").textContent="Add places to your trip first, or pick a destination."; return; }
    if(["other","transfer"].includes(w.value) && !$("#tpOther").value.trim()){ $("#tpErr").textContent="Tell us where you’d like to go."; $("#tpOther").focus(); return; }
    if(!$("#tpName").value.trim()){ $("#tpErr").textContent="Add your name."; $("#tpName").focus(); return; }
    if(!phoneOk($("#tpPh").value)){ $("#tpErr").textContent="Add a phone number so we can send your quote."; $("#tpPh").focus(); return; }
    if(!consentOk($("#tripForm"),$("#tpErr"))) return;
    $("#tpErr").textContent="";
    let m=`Hello Kivu Tours, I’d like a quote for a trip.\n\nDestination: ${where}\n`; if($("#tpDate").value) m+=`Date: ${fmt($("#tpDate").value)}\n`;
    m+=`People: ${$("#tpPeople").value}\nPick-up: ${$("#tpPick").value}\nName: ${$("#tpName").value.trim()}\nPhone: ${$("#tpPh").value.trim()}\n`; if($("#tpNotes").value.trim()) m+=`Notes: ${$("#tpNotes").value.trim()}\n`;
    await submitRecord("enquiries",{...consentData($("#tripForm")),type:"Safari: "+where,date:$("#tpDate").value||"",size:$("#tpPeople").value,pickup:$("#tpPick").value,name:$("#tpName").value.trim(),phone:$("#tpPh").value.trim(),notes:$("#tpNotes").value.trim(),status:"new"},m,$("#tpOk"),e.submitter,"Trip request received");
  });
})();


/* ===================== Login dialog ===================== */
document.addEventListener("click",e=>{
  if(e.target.closest("[data-login]")){ e.preventDefault(); closeSheet(); $("#lgErr").textContent=""; const d=$("#loginDlg"); d.showModal?d.showModal():d.setAttribute("open",""); setTimeout(()=>$("#lgRef").focus(),50); }
  if(e.target.closest("[data-logout]")){ GUEST.logout(); }
});
$("#lgClose").onclick=()=>$("#loginDlg").close();
$("#loginDlg").addEventListener("click",e=>{ if(e.target===$("#loginDlg")) $("#loginDlg").close(); });
$("#lgGo").onclick=async()=>{
  const ref=$("#lgRef").value.trim().toUpperCase(), pin=$("#lgPin").value.trim();
  if(Date.now()<(GUEST.lockUntil||0)){ $("#lgErr").textContent="Too many tries. Please wait a minute, or message the front desk."; return; }
  if(!/^K[A-Z]-[A-Z0-9]{6}$/.test(ref)){ $("#lgErr").textContent="Enter your booking reference, for example KV-7F3A9Q."; return; }
  if(!/^\d{6}$/.test(pin)){ $("#lgErr").textContent="Enter your 6-digit PIN."; return; }
  if(!KV.db){ $("#lgErr").textContent="Guest login isn’t available on this connection. Please message the front desk."; return; }
  $("#lgGo").disabled=true; $("#lgGo").textContent="Checking…";
  let st=null; try{ st=await STAY.read(ref,pin); }catch(e){}
  $("#lgGo").disabled=false; $("#lgGo").textContent="Log in";
  if(!st){ GUEST.fails=(GUEST.fails||0)+1; if(GUEST.fails>=5){ GUEST.fails=0; GUEST.lockUntil=Date.now()+60000; } $("#lgErr").textContent="We couldn’t find that booking. Check your reference and PIN."; return; }
  GUEST.fails=0;
  GUEST.stay=safeRec(st); GUEST.setSession(ref,pin); GUEST.remember({name:st.name,phone:st.phone,prefs:st.prefs});
  $("#loginDlg").close(); go("mystay");
};
$("#lgPin").addEventListener("keydown",e=>{ if(e.key==="Enter") $("#lgGo").click(); });

/* ===================== Activities and packages ===================== */
const SERVICES={
  pool:{name:"Swimming pool",pill:"Pool",qtyLabel:"People",opts:[["Swimming only, day pass",500,"per person"],["Swimming and training, day pass",1000,"per person"],["Club member, day pass",850,"per person"],["Monthly swimming (non-club)",5000,"per month"],["Monthly swimming and training (club, 10 sessions)",6500,"per month"],["KivuSwim Club registration",1000,"one-off"],["Kenya Aquatics annual fee",600,"per swimmer"]]},
  gym:{name:"Kivu Gym",pill:"Gym",qtyLabel:"People",opts:[["Guest pass",null,"per visit"],["Fitness class",null,"per class"],["Personal training session",null,"per session"],["Gym membership (15% joining discount)",null,"per month"]]},
  kids:{name:"Kids Park",pill:"Kids Park",qtyLabel:"Children",opts:[["Kids Park visit",null,"per child"],["Birthday party (birthday child free)",null,"per party"],["School or group visit",null,"per group"]]},
  pack:{name:"Packages",pill:"Package",qtyLabel:"People",opts:[["Family day out: pool, Kids Park and lunch",null,"per family"],["Team building day: conference room, lawns and meals",null,"per group"],["Birthday at Kivu: party set-up, cake and Kids Park",null,"per party"],["Stay and safari: room plus a Lake Nakuru game drive",null,"per person"]]}
};
const PACK_IMG=["aerial","camp","castle","flamingos"], PACK_DESC=["A relaxed day for the whole family by the pools and playground, with lunch from our kitchen.","A ready-made day for your team, from the meeting room to the lawns, fully catered.","A party the kids will remember, with set-up, cake and the run of the Kids Park.","A night at Kivu and a morning game drive among Lake Nakuru’s flamingos and rhinos."];
(function(){
  const g=$("#pkGrid"); if(g) g.innerHTML=SERVICES.pack.opts.map((o,i)=>{ const [title,rest]=o[0].split(": "); return `<article class="pkc"><div class="pkc-img"><img loading="lazy" decoding="async" src="${IMG[PACK_IMG[i]]}" alt="${esc(title)}"></div><div class="pkc-body"><h3>${esc(title)}</h3><p class="pkc-inc">${esc(rest||"")}</p><p>${esc(PACK_DESC[i])}</p><button class="btn btn-coral sm" data-svc="pack:${i}">Book this package</button></div></article>`; }).join("");
  const SV={svc:null,opt:0,pay:"arrival",ref:""};
  const dlg=$("#svcDlg");
  $("#svQty").innerHTML=[...Array(20)].map((_,i)=>`<option>${i+1}</option>`).join("")+`<option>21 or more</option>`;
  $("#svDate").min=iso(new Date());
  async function draw(){
    const S=SERVICES[SV.svc], o=S.opts[SV.opt], q=parseInt($("#svQty").value,10)||1; const set=await getSettings(); const p=set.pay;
    const total=o[1]?o[1]*q:null; SV.total=total;
    $("#svPrice").innerHTML=o[1]?`<span>${kesF(o[1])} <small>${esc(o[2])}</small></span><b>${kesF(total)}</b><small>total</small>`:`<span>Price confirmed by our team <small>We’ll send your quote on WhatsApp</small></span>`;
    const mp=!!(p.number&&total); if(!mp) SV.pay="arrival";
    $("#svPay").innerHTML=(mp?`<button type="button" class="po" data-svpay="mpesa" aria-pressed="${SV.pay==="mpesa"}"><span class="po-ic mp">M</span><div><b>Pay now with M-Pesa</b><small>Pay ${kesF(total)} and skip the queue at the gate.</small></div></button>`:"")+`<button type="button" class="po" data-svpay="arrival" aria-pressed="${SV.pay==="arrival"}"><span class="po-ic">🏨</span><div><b>Pay when you arrive</b><small>Cash, card or M-Pesa at the front desk.</small></div></button>`;
    const box=$("#svMpesa");
    if(SV.pay==="mpesa"){ if(!SV.ref) SV.ref=refCode("KS"); box.hidden=false; box.innerHTML=`<ol class="mp-steps"><li>Open <b>M-Pesa</b> and choose <b>Lipa na M-Pesa</b>, then <b>${p.type==="Till"?"Buy Goods and Services":"Pay Bill"}</b>.</li><li>${p.type==="Till"?"Till number":"Business number"}: <b class="mp-big">${esc(p.number)}</b> <button type="button" class="copy" data-copy="${esc(p.number)}">Copy</button></li>${p.type==="Till"?"":`<li>Account number: <b class="mp-big">${esc(p.account||SV.ref)}</b></li>`}<li>Amount: <b class="mp-big">${kesF(total)}</b></li></ol><div class="fld"><label for="svCode">M-Pesa confirmation code</label><input id="svCode" placeholder="e.g. QK7H2LM9XA" maxlength="12" style="text-transform:uppercase;letter-spacing:.08em;font-weight:700"></div>`; $("#svSubmit").textContent=`Confirm and pay ${kesF(total)}`; }
    else { box.hidden=true; $("#svSubmit").textContent=total?"Confirm booking":"Request booking"; }
  }
  function open(svc,opt){
    SV.svc=svc; SV.opt=opt||0; SV.pay="arrival"; SV.ref=""; const S=SERVICES[svc];
    $("#svcPill").textContent=S.pill; $("#svcTitle").textContent=svc==="pack"?"Book a package":"Book: "+S.name; $("#svQtyL").textContent=S.qtyLabel;
    $("#svcOpts").innerHTML=S.opts.map((o,i)=>`<button type="button" data-svopt="${i}" aria-pressed="${i===SV.opt}"><span>${esc(o[0])}</span><b>${o[1]?kesF(o[1]):"On request"}<small>${esc(o[2])}</small></b></button>`).join("");
    const L=GUEST.local, cur=GUEST.current(); if(!$("#svName").value) $("#svName").value=(cur&&cur.name)||L.name||""; if(!$("#svPh").value) $("#svPh").value=(cur&&cur.phone)||L.phone||"";
    if(!$("#svDate").value) $("#svDate").value=iso(new Date());
    $("#svErr").textContent=""; $("#svcForm").hidden=false; $("#svDone").hidden=true; closeSheet();
    dlg.showModal?dlg.showModal():dlg.setAttribute("open",""); draw();
  }
  document.addEventListener("click",e=>{ const b=e.target.closest("[data-svc]"); if(!b) return; e.preventDefault(); const [s,o]=b.dataset.svc.split(":"); open(s,+o||0); });
  $("#svcOpts").addEventListener("click",e=>{ const b=e.target.closest("[data-svopt]"); if(!b) return; SV.opt=+b.dataset.svopt; $$("#svcOpts [data-svopt]").forEach(x=>x.setAttribute("aria-pressed",x===b)); draw(); });
  $("#svQty").addEventListener("change",draw);
  $("#svPay").addEventListener("click",e=>{ const b=e.target.closest("[data-svpay]"); if(!b) return; SV.pay=b.dataset.svpay; draw(); });
  $("#svMpesa").addEventListener("click",e=>{ const c=e.target.closest("[data-copy]"); if(c){ try{ navigator.clipboard.writeText(c.dataset.copy); c.textContent="Copied"; }catch(err){} } });
  $("#svcClose").onclick=()=>dlg.close(); dlg.addEventListener("click",e=>{ if(e.target===dlg) dlg.close(); });
  $("#svSubmit").onclick=async()=>{
    const S=SERVICES[SV.svc], o=S.opts[SV.opt], name=$("#svName").value.trim(), ph=$("#svPh").value.trim(), date=$("#svDate").value;
    if(!date){ $("#svErr").textContent="Choose a date."; return; }
    if(!name){ $("#svErr").textContent="Add your name."; $("#svName").focus(); return; }
    if(!phoneOk(ph)){ $("#svErr").textContent="Add a phone number we can reach you on."; $("#svPh").focus(); return; }
    if(!consentOk($("#svcForm"),$("#svErr"))) return;
    let code=""; if(SV.pay==="mpesa"){ code=($("#svCode").value||"").trim().toUpperCase().replace(/\s/g,""); if(!/^[A-Z0-9]{10}$/.test(code)){ $("#svErr").textContent="Enter the 10-character M-Pesa code from your SMS."; return; } }
    $("#svErr").textContent=""; if(!SV.ref) SV.ref=refCode("KS");
    const rec={kind:"service",...consentData($("#svcForm")),service:SV.svc,serviceName:S.name,option:o[0],unit:o[2],price:o[1],qty:$("#svQty").value,date,name,phone:ph,notes:$("#svNotes").value.trim(),total:SV.total,paymentMethod:SV.pay,amountPaid:SV.pay==="mpesa"?SV.total:0,mpesaCode:code,paymentStatus:SV.pay==="mpesa"?"submitted":"unpaid",status:"pending",ref:SV.ref};
    const msg=`Hello Kivu Resort, I’d like to book:\n\n${S.name}: ${o[0]}\nDate: ${fmt(date)}\n${S.qtyLabel}: ${rec.qty}\nName: ${name}\nPhone: ${ph}\n${SV.total?`Total: ${kesF(SV.total)}\n`:""}Payment: ${SV.pay==="mpesa"?`M-Pesa, code ${code}`:"on arrival"}\nReference: ${SV.ref}${rec.notes?"\nNotes: "+rec.notes:""}`;
    let saved=false; const btn=$("#svSubmit");
    if(KV.db&&KV.uid){ btn.disabled=true; btn.textContent="Saving…"; try{ const ref=KV.db.doc("bookings/"+KV.uid), id=Date.now().toString(36)+Math.random().toString(36).slice(2,6); const body={items:{[id]:{...rec,createdAt:nowIso()}},updatedAt:nowIso()}; const s=await ref.get(); if(s.exists) await ref.update(body); else await ref.set(body); saved=true; }catch(err){} btn.disabled=false; }
    GUEST.remember({name,phone:ph});
    $("#svcForm").hidden=true; const d=$("#svDone"); d.hidden=false;
    d.innerHTML=saved?`<div class="done-ic">✓</div><h3>${SV.pay==="mpesa"?"Payment sent, we’re confirming it":"Booking received"}</h3><p>${esc(S.name)}: ${esc(o[0])}<br>${fmt(date)} · ${esc(S.qtyLabel.toLowerCase())}: ${esc(rec.qty)}</p><p>Your reference is <b>${esc(SV.ref)}</b>. Show it at the front desk.</p><div class="bk-nav"><a class="btn btn-line" href="${waUrl(msg)}" target="_blank" rel="noopener">Message us on WhatsApp</a><button type="button" class="btn btn-dark" data-close="svcDlg">Done</button></div>`
      :`<div class="done-ic">✓</div><h3>Almost done</h3><p>Send your booking to our front desk on WhatsApp to finish. Your reference is <b>${esc(SV.ref)}</b>.</p><div class="bk-nav"><span></span><a class="btn btn-wa" href="${waUrl(msg)}" target="_blank" rel="noopener">Send on WhatsApp</a></div>`;
    $("#svNotes").value="";
  };
})();

/* ===================== Admin dashboard ===================== */
const ADM={started:false,tab:"bookings",filter:"all",bookings:[],orders:[],enquiries:[],reviews:[],cal:{},inv:null,loaded:{}};
const STATUS={
  bookings:{pending:"Pending",confirmed:"Confirmed","checked-in":"Checked in",completed:"Completed",declined:"Declined",cancelled:"Cancelled"},
  orders:{new:"New",preparing:"Preparing",ready:"Ready",delivered:"Delivered",cancelled:"Cancelled"},
  enquiries:{new:"New",contacted:"Contacted",booked:"Booked",closed:"Closed"},
  reviews:{waiting:"Awaiting approval",approved:"Published",hidden:"Hidden"}
};
const NEXT={
  bookings:{pending:[["confirmed","Confirm","primary"],["declined","Decline"]],confirmed:[["checked-in","Check in","primary"],["cancelled","Cancel"]],"checked-in":[["completed","Check out","primary"]],completed:[],declined:[["pending","Reopen"]],cancelled:[["pending","Reopen"]]},
  orders:{new:[["preparing","Start preparing","primary"],["cancelled","Cancel"]],preparing:[["ready","Mark ready","primary"]],ready:[["delivered","Delivered","primary"]],delivered:[],cancelled:[["new","Reopen"]]},
  enquiries:{new:[["contacted","Mark contacted","primary"],["closed","Close"]],contacted:[["booked","Mark booked","primary"],["closed","Close"]],booked:[],closed:[["new","Reopen"]]}
};
STATUS.services={pending:"Pending",confirmed:"Confirmed",completed:"Used",declined:"Declined",cancelled:"Cancelled"};
NEXT.services={pending:[["confirmed","Confirm","primary"],["declined","Decline"]],confirmed:[["completed","Mark used","primary"],["cancelled","Cancel"]],completed:[],declined:[["pending","Reopen"]],cancelled:[["pending","Reopen"]]};
const ago=s=>{ if(!s) return ""; const m=Math.round((Date.now()-new Date(s))/60000); if(m<1) return "just now"; if(m<60) return m+" min ago"; const h=Math.round(m/60); if(h<24) return h+" h ago"; return new Date(s).toLocaleDateString("en-GB",{day:"numeric",month:"short"}); };
const waTo=(phone,msg)=>{ let d=String(phone||"").replace(/\D/g,""); if(d.startsWith("0")) d="254"+d.slice(1); if(d.length===9) d="254"+d; return "https://wa.me/"+d+"?text="+encodeURIComponent(msg); };
function startAdmin(){
  if(!KV.ready) return;
  $("#admLocked").hidden=KV.admin; $("#admBody").hidden=!KV.admin;
  if(!KV.db && KV.admin){ $("#admLocked").hidden=false; $("#admLocked").textContent="The booking database isn’t available in this view."; $("#admBody").hidden=true; return; }
  if(!KV.admin || ADM.started) return; ADM.started=true;
  const sub=(coll,key)=>KV.db.collection(coll).onSnapshot(s=>{
      const rows=[]; s.docs.forEach(d=>{ if(!SAFE_ID.test(d.id)) return; const items=(d.data()||{}).items||{}; Object.entries(items).forEach(([id,v])=>{ const r=SAFE_ID.test(id)&&safeRec(v); if(r) rows.push({...r,id,uid:d.id}); }); });
      ADM[key]=rows.sort((a,b)=>(b.createdAt||"").localeCompare(a.createdAt||"")); ADM.loaded[key]=true; admRender(); },()=>{ ADM.loaded[key]=true; admRender(); });
  sub("bookings","bookings"); sub("orders","orders"); sub("enquiries","enquiries");
  KV.db.collection("reviews").onSnapshot(s=>{ ADM.reviews=s.docs.filter(d=>SAFE_ID.test(d.id)).map(d=>safeRec({...d.data(),id:d.id})).filter(Boolean).sort((a,b)=>(b.createdAt||"").localeCompare(a.createdAt||"")); ADM.loaded.reviews=true; admRender(); },()=>{ ADM.loaded.reviews=true; admRender(); });
  KV.db.collection("calendar").onSnapshot(s=>{ ADM.cal={}; s.docs.forEach(d=>ADM.cal[d.id]=(d.data().dates)||{}); admRender(); },()=>{});
  KV.db.doc("settings/inventory").onSnapshot(s=>{ ADM.inv={...INV_DEFAULT,...(s.exists?s.data():{})}; KV.inv=ADM.inv; admRender(); },()=>{ ADM.inv={...INV_DEFAULT}; admRender(); });
  getSettings().then(()=>admRender());
  admRender();
}
function revStatus(r){ return r.approved===true?"approved":r.hidden?"hidden":"waiting"; }
function admCounts(){
  const today=iso(new Date());
  return {
    pending:ADM.bookings.filter(b=>b.kind!=="service"&&b.status==="pending").length,
    arrivals:ADM.bookings.filter(b=>b.status==="confirmed"&&b.checkIn===today).length,
    inhouse:ADM.bookings.filter(b=>b.status==="checked-in").length,
    orders:ADM.orders.filter(o=>o.status==="new"||o.status==="preparing").length,
    reviews:ADM.reviews.filter(r=>revStatus(r)==="waiting").length,
    enquiries:ADM.enquiries.filter(x=>x.status==="new").length,
    payments:ADM.bookings.filter(b=>b.paymentStatus==="submitted").length,
    services:ADM.bookings.filter(b=>b.kind==="service"&&b.status==="pending").length
  };
}
function admRender(){
  if(!KV.admin||!$("#admPanel")) return;
  const c=admCounts();
  $("#admStats").innerHTML=[["Pending bookings",c.pending,"bookings"],["Activity bookings",c.services,"services"],["Payments to verify",c.payments,"bookings"],["Arriving today",c.arrivals,"bookings"],["Guests in house",c.inhouse,"bookings"],["Open food orders",c.orders,"orders"],["Event and safari requests",c.enquiries,"events"],["Reviews to approve",c.reviews,"reviews"]].filter(s=>s[0]!=="New event enquiries"||true).map(s=>`<button class="ast" data-tab="${s[2]}"><b>${s[1]}</b><span>${s[0]}</span></button>`).join("");
  const tabs=[["bookings","Room bookings",c.pending],["orders","Food orders",c.orders],["events","Events and safaris",c.enquiries],["reviews","Reviews",c.reviews],["services","Pool, gym and packages",c.services],["rooms","Rooms and availability",0],["rates","Rates and payments",0]];
  $("#admTabs").innerHTML=tabs.map(x=>`<button data-tab="${x[0]}" aria-selected="${ADM.tab===x[0]}">${x[1]}${x[2]?`<i>${x[2]}</i>`:""}</button>`).join("");
  const coll={bookings:"bookings",services:"services",orders:"orders",events:"enquiries",reviews:"reviews"}[ADM.tab];
  if(coll){
    const st=STATUS[coll]; const list=coll==="services"?ADM.bookings.filter(b=>b.kind==="service"):coll==="bookings"?ADM.bookings.filter(b=>b.kind!=="service"):ADM[coll];
    const get=coll==="reviews"?revStatus:(x=>x.status||Object.keys(st)[0]);
    $("#admFilter").innerHTML=`<button data-f="all" aria-selected="${ADM.filter==="all"}">All <i>${list.length}</i></button>`+Object.entries(st).map(([k,v])=>`<button data-f="${k}" aria-selected="${ADM.filter===k}">${v} <i>${list.filter(x=>get(x)===k).length}</i></button>`).join("")+`<label class="adm-search"><input maxlength="120" id="admQ" placeholder="Search name, phone or reference" value="${esc(ADM.q||"")}"></label>`;
    let rows=list.filter(x=>ADM.filter==="all"||get(x)===ADM.filter);
    const q=(ADM.q||"").toLowerCase(); if(q) rows=rows.filter(x=>JSON.stringify(x).toLowerCase().includes(q));
    if(!ADM.loaded[coll==="services"?"bookings":coll]){ $("#admPanel").innerHTML=`<p class="adm-empty">Loading…</p>`; return; }
    $("#admPanel").innerHTML=rows.length?rows.map(x=>admRow(coll,x,get(x))).join(""):`<p class="adm-empty">Nothing here yet. New ${ADM.tab==="events"?"enquiries":ADM.tab} appear the moment guests send them.</p>`;
  } else { $("#admFilter").innerHTML=""; $("#admPanel").innerHTML=ADM.tab==="rates"?admRates():admRooms(); }
}
function pill(coll,s){ return `<span class="apill s-${esc(s)}">${esc(STATUS[coll][s]||s)}</span>`; }
function actions(coll,x,s){ return (coll==="bookings"&&s==="confirmed"?`<input class="room-in" data-room-in="${esc(x.id)}" placeholder="Room no." value="${esc(x.roomNo||"")}">`:"")+(NEXT[coll][s]||[]).map(a=>`<button class="btn ${a[2]==="primary"?"btn-dark":"btn-line"} sm" data-act="${coll}|${esc(x.id)}|${a[0]}">${a[1]}</button>`).join(""); }
function admRow(coll,x,s){
  if(coll==="services"){
    const pst=x.paymentStatus||"unpaid";
    const pay=x.paymentMethod==="mpesa"?`<div class="a-pay p-${esc(pst)}"><b>M-Pesa ${x.amountPaid?kesF(x.amountPaid):""}</b><span>Code ${esc(x.mpesaCode||"")}</span><em>${pst==="paid"?"Verified":pst==="rejected"?"Not found":"To verify"}</em>${pst==="submitted"?`<button class="btn btn-dark sm" data-pay="${esc(x.uid)}|${esc(x.id)}|paid">Mark paid</button><button class="btn btn-line sm" data-pay="${esc(x.uid)}|${esc(x.id)}|rejected">Not found</button>`:""}</div>`:`<div class="a-pay p-${pst==="paid"?"paid":"unpaid"}"><b>Pay on arrival</b>${x.total?`<span>${kesF(x.total)} due</span>`:"<span>Price to confirm</span>"}${pst!=="paid"?`<button class="btn btn-line sm" data-pay="${esc(x.uid)}|${esc(x.id)}|paid">Mark paid</button>`:"<em>Paid</em>"}</div>`;
    return `<article class="arow"><div class="a-main"><div class="a-top"><b>${esc(x.name||"")}</b>${pill("services",s)}<span class="room-chip">${esc(x.serviceName||"")}</span><span class="a-ref">${esc(x.ref||"")}</span><small class="ago">${ago(x.createdAt)}</small></div>
      <div class="a-meta"><span><b>${esc(x.option||"")}</b></span><span>${x.date?fmt(x.date):""}</span><span>${esc(x.qty||"")} × ${esc(x.unit||"")}</span>${x.total?`<span><b>${kesF(x.total)}</b></span>`:""}</div>${pay}${x.notes?`<p class="a-notes">${esc(x.notes)}</p>`:""}</div>
      <div class="a-act">${(NEXT.services[s]||[]).map(a=>`<button class="btn ${a[2]==="primary"?"btn-dark":"btn-line"} sm" data-act="bookings|${esc(x.id)}|${a[0]}">${a[1]}</button>`).join("")}<a class="btn btn-wa sm" href="${waTo(x.phone,`Hello ${x.name}, about your ${x.serviceName} booking at Kivu Resort (${x.ref}).`)}" target="_blank" rel="noopener">WhatsApp</a></div></article>`;
  }
  const when=`<small class="ago">${ago(x.createdAt)}</small>`;
  if(coll==="bookings"){
    const msg=s==="confirmed"?`Hello ${x.name}, your ${x.stayName} at Kivu Resort is confirmed for ${fmt(x.checkIn)} to ${fmt(x.checkOut)}. Reference ${x.ref}. We look forward to welcoming you!`:`Hello ${x.name}, thank you for your booking request at Kivu Resort (${x.ref}).`;
    const pst=x.paymentStatus||"unpaid";
    const pay=x.paymentMethod==="mpesa"?`<div class="a-pay p-${esc(pst)}"><b>M-Pesa ${x.amountPaid?kesF(x.amountPaid):""}</b><span>Code ${esc(x.mpesaCode||"")}</span><em>${pst==="paid"?"Verified":pst==="rejected"?"Not found":"To verify"}</em>${pst==="submitted"?`<button class="btn btn-dark sm" data-pay="${esc(x.uid)}|${esc(x.id)}|paid">Mark paid</button><button class="btn btn-line sm" data-pay="${esc(x.uid)}|${esc(x.id)}|rejected">Not found</button>`:""}</div>`:`<div class="a-pay p-unpaid"><b>Pay at check-in</b>${x.total?`<span>${kesF(x.total)} due</span>`:""}${pst!=="paid"?`<button class="btn btn-line sm" data-pay="${esc(x.uid)}|${esc(x.id)}|paid">Mark paid</button>`:"<em>Paid</em>"}</div>`;
    const chg=ADM.orders.filter(o=>o.bookingRef===x.ref&&o.chargeRoom&&o.status!=="cancelled"), chgSum=chg.reduce((a,o)=>a+(o.total||0),0);
    return `<article class="arow"><div class="a-main"><div class="a-top"><b>${esc(x.name||"Guest")}</b>${pill(coll,s)}${x.roomNo?`<span class="room-chip">Room ${esc(x.roomNo)}</span>`:""}<span class="a-ref">${esc(x.ref||"")}${x.pin?" · PIN "+esc(x.pin):""}</span>${when}</div>
      ${x.prefs?`<p class="a-pref">🍽 ${esc(x.prefs)}</p>`:""}${chg.length?`<p class="a-pref">Room charges: <b>${kesF(chgSum)}</b> from ${chg.length} order${chg.length>1?"s":""}</p>`:""}
      <div class="a-meta"><span>${esc(x.stayName||"")}</span><span>${x.checkIn?fmt(x.checkIn):""} → ${x.checkOut?fmt(x.checkOut):""} · ${esc(x.nights||"?")} night${x.nights==1?"":"s"}</span><span>${esc(x.adults||"")} adult(s)${x.children&&x.children!=="0"?", "+esc(x.children)+" child(ren)":""}</span>${x.plan?`<span>${esc(x.plan)}</span>`:""}${x.residency?`<span>${esc(x.residency)}</span>`:""}${x.total?`<span><b>${kesF(x.total)}</b></span>`:""}</div>
      ${pay}${x.notes?`<p class="a-notes">${esc(x.notes)}</p>`:""}</div>
      <div class="a-act">${actions(coll,x,s)}<a class="btn btn-wa sm" href="${waTo(x.phone,msg)}" target="_blank" rel="noopener">WhatsApp ${esc(x.phone||"")}</a></div></article>`;
  }
  if(coll==="orders"){
    return `<article class="arow${x.roomNo||x.bookingRef?" inhouse":""}"><div class="a-main"><div class="a-top"><b>${esc(x.name||"Guest")}</b>${pill(coll,s)}${x.bookingRef?`<span class="room-chip">${x.roomNo?"Room "+esc(x.roomNo):"In-house guest"}</span>`:""}${x.chargeRoom?`<span class="room-chip ok">Charge to room · start now</span>`:""}<span class="a-ref">${esc(x.ref||"")}</span>${when}</div>
      ${x.prefs?`<p class="a-pref">🍽 ${esc(x.prefs)}</p>`:""}
      <ul class="a-items">${(x.items||[]).map(i=>`<li><span>${num(i.qty)} × ${esc(i.label)}</span><b>KES ${(i.qty*i.price).toLocaleString("en-KE")}</b></li>`).join("")}</ul>
      <div class="a-meta"><span><b>Total KES ${(x.total||0).toLocaleString("en-KE")}</b></span><span>${esc(x.type||"")}${x.where?" · "+esc(x.where):""}</span></div>${x.notes?`<p class="a-notes">${esc(x.notes)}</p>`:""}</div>
      <div class="a-act">${actions(coll,x,s)}<a class="btn btn-wa sm" href="${waTo(x.phone,`Hello ${x.name}, your Kivu order ${x.ref} is ${STATUS.orders[s].toLowerCase()}.`)}" target="_blank" rel="noopener">WhatsApp guest</a></div></article>`;
  }
  if(coll==="enquiries"){
    return `<article class="arow"><div class="a-main"><div class="a-top"><b>${esc(x.name||"")}</b>${pill(coll,s)}<span class="a-ref">${esc(x.ref||"")}</span>${when}</div>
      <div class="a-meta"><span>${esc(x.type||"")}</span>${x.date?`<span>${fmt(x.date)}</span>`:""}${x.size?`<span>${esc(x.size)} people</span>`:""}${x.pickup?`<span>Pick-up: ${esc(x.pickup)}</span>`:""}</div>${x.notes?`<p class="a-notes">${esc(x.notes)}</p>`:""}</div>
      <div class="a-act">${actions(coll,x,s)}<a class="btn btn-wa sm" href="${waTo(x.phone,`Hello ${x.name}, thank you for your event enquiry at Kivu Resort (${x.ref}).`)}" target="_blank" rel="noopener">WhatsApp</a></div></article>`;
  }
  // reviews
  return `<article class="arow"><div class="a-main"><div class="a-top">${starsHtml(x.rating||5)}<b>${esc(x.name||"")}</b>${pill("reviews",s)}${when}</div>
    <p class="a-notes" style="font-size:1rem">“${esc(x.text||"")}”</p><div class="a-meta"><span>${esc(x.category||"")}</span></div>
    <div class="a-reply"><input data-reply-in="${esc(x.id)}" placeholder="Write a public reply (optional)" value="${esc(x.reply||"")}"><button class="btn btn-line sm" data-reply="${esc(x.id)}">Save reply</button></div></div>
    <div class="a-act">${s!=="approved"?`<button class="btn btn-dark sm" data-rv="${esc(x.id)}|approve">Publish</button>`:`<button class="btn btn-line sm" data-rv="${esc(x.id)}|hide">Hide</button>`}<button class="btn btn-line sm danger" data-rv="${esc(x.id)}|delete">Delete</button></div></article>`;
}
function admRooms(){
  const inv=ADM.inv||INV_DEFAULT; const days=[...Array(14)].map((_,i)=>iso(addDays(new Date(),i)));
  const names={executive:"Executive room",standard:"Standard room",suite:"Self-catering suite",camping:"Campsite and bunks","msafiri-standard-single":"Msafiri standard single","msafiri-standard-double-or-twin":"Msafiri standard double/twin","msafiri-superior-single":"Msafiri superior single","msafiri-superior-double-or-twin":"Msafiri superior double/twin"};
  return `<div class="rooms-grid"><div class="inv-card"><h3>Rooms you can sell</h3><p class="muted">Set how many of each room type you have. Guests see “fully booked” when confirmed bookings reach this number.</p>
    ${Object.keys(names).map(k=>`<label class="inv-row"><span>${names[k]}</span><input type="number" min="0" max="500" data-inv="${k}" value="${inv[k]??0}"></label>`).join("")}
    <button class="btn btn-dark" id="invSave" style="margin-top:14px;width:100%">Save room counts</button><p class="muted" id="invMsg" style="margin-top:8px;font-size:.88rem"></p></div>
    <div class="occ-card"><h3>Next 14 days</h3><p class="muted">Confirmed and checked-in rooms per night.</p><div class="occ-scroll"><table class="occ"><thead><tr><th></th>${days.map(d=>{const x=new Date(d+"T00:00");return `<th>${x.toLocaleDateString("en-GB",{weekday:"short"})}<br>${x.getDate()}</th>`}).join("")}</tr></thead>
    <tbody>${Object.keys(names).map(k=>`<tr><th>${names[k]}</th>${days.map(d=>{ const n=(ADM.cal[k]||{})[d]||0, tot=inv[k]||0, p=tot?n/tot:0; return `<td class="${p>=1?"full":p>=.6?"busy":n?"some":""}">${n}/${tot}</td>`;}).join("")}</tr>`).join("")}</tbody></table></div></div></div>`;
}

function admRates(){
  const s=KV.settings||{rates:{...RATE_DEFAULT},pay:{...PAY_DEFAULT}}; const r=s.rates, p=s.pay;
  const names={executive:"Executive room",standard:"Standard room",suite:"Self-catering suite",camping:"Campsite and bunks","msafiri-standard-single":"Msafiri standard single","msafiri-standard-double-or-twin":"Msafiri standard double/twin","msafiri-superior-single":"Msafiri superior single","msafiri-superior-double-or-twin":"Msafiri superior double/twin"};
  const v=x=>x==null?"":x;
  return `<div class="rooms-grid"><div class="inv-card"><h3>M-Pesa payments</h3><p class="muted">Guests see these details when they choose “Pay now with M-Pesa”. Leave the number empty to offer pay at check-in only.</p>
    <label class="inv-row"><span>Type</span><select id="payType"><option ${p.type!=="Till"?"selected":""}>Paybill</option><option ${p.type==="Till"?"selected":""}>Till</option></select></label>
    <label class="inv-row"><span>Business or Till number</span><input maxlength="120" id="payNum" value="${esc(p.number||"")}" placeholder="e.g. 522522" style="width:130px"></label>
    <label class="inv-row"><span>Account number</span><input maxlength="120" id="payAcc" value="${esc(p.account||"")}" placeholder="Booking ref" style="width:130px"></label>
    <label class="inv-row"><span>Deposit to hold a room (%)</span><input maxlength="120" id="payDep" type="number" min="10" max="100" value="${p.depositPct||50}"></label>
    <button class="btn btn-dark" id="paySave" style="margin-top:14px;width:100%">Save payment details</button><p class="muted" id="payMsg" style="margin-top:8px;font-size:.88rem"></p></div>
    <div class="occ-card"><h3>Room rates (KES per room per night)</h3><p class="muted">Guests see the price and total as they pick dates. Leave a box empty and we’ll say “rate confirmed by our team”.</p>
    <div class="occ-scroll"><table class="occ rates"><thead><tr><th></th><th>Bed and breakfast</th><th>Half board</th><th>Full board</th></tr></thead><tbody>
    ${Object.keys(names).map(k=>`<tr><th>${names[k]}</th>${["bb","hb","fb"].map(pk=>`<td><input type="number" min="0" step="50" data-rate="${k}|${pk}" value="${v((r[k]||{})[pk])}" placeholder="—"></td>`).join("")}</tr>`).join("")}</tbody></table></div>
    <button class="btn btn-dark" id="rateSave" style="margin-top:14px">Save rates</button><span class="muted" id="rateMsg" style="margin-left:12px;font-size:.88rem"></span></div></div>`;
}
document.addEventListener("click",async e=>{
  const pb=e.target.closest("[data-pay]"); if(pb && pb.closest("#adminPage")){ const [uid,id,st]=pb.dataset.pay.split("|"); pb.disabled=true;
    try{ await KV.db.doc("bookings/"+uid).update({items:{[id]:{paymentStatus:st,updatedAt:nowIso()}}}); }catch(err){ alert("Couldn’t update the payment."); } return; }
  if(e.target.closest("#paySave")){ const data={type:$("#payType").value,number:$("#payNum").value.trim(),account:$("#payAcc").value.trim(),depositPct:Math.min(100,Math.max(10,parseInt($("#payDep").value,10)||50))};
    try{ await KV.db.doc("settings/payment").set(data); KV.settings=null; await getSettings(); $("#payMsg").textContent="Saved. Guests can now pay with M-Pesa."; }catch(err){ $("#payMsg").textContent="Couldn’t save. Please try again."; } }
  if(e.target.closest("#rateSave")){ const data={}; $$("[data-rate]").forEach(i=>{ const [k,pk]=i.dataset.rate.split("|"); data[k]=data[k]||{}; data[k][pk]=i.value===""?null:Math.max(0,+i.value); });
    try{ await KV.db.doc("settings/rates").set(data); KV.settings=null; await getSettings(); $("#rateMsg").textContent="Rates saved."; }catch(err){ $("#rateMsg").textContent="Couldn’t save."; } }
});
async function admAdjustCal(b,delta){
  const key=b.stayKey; if(!key||!b.checkIn||!b.checkOut) return;
  const cur={...(ADM.cal[key]||{})}; const patch={};
  nightsOf(b.checkIn,b.checkOut).forEach(d=>{ patch[d]=Math.max(0,(cur[d]||0)+delta); });
  const ref=KV.db.doc("calendar/"+key);
  if(ADM.cal[key]) await ref.update({dates:patch}); else await ref.set({dates:patch});
}
document.addEventListener("click",async e=>{
  const t=e.target.closest("[data-tab]"); if(t && t.closest("#adminPage")){ ADM.tab=t.dataset.tab; ADM.filter="all"; admRender(); return; }
  const f=e.target.closest("#admFilter [data-f]"); if(f){ ADM.filter=f.dataset.f; admRender(); return; }
  const a=e.target.closest("[data-act]");
  if(a){ const [coll,id,to]=a.dataset.act.split("|"); const x=ADM[coll].find(r=>r.id===id); if(!x) return; a.disabled=true;
    try{
      const upd={status:to,updatedAt:nowIso()};
      if(coll==="bookings" && to==="checked-in"){ const ri=$(`[data-room-in="${CSS.escape(id)}"]`); const rn=ri?ri.value.trim():""; if(!rn){ alert("Enter the room number before checking the guest in."); a.disabled=false; if(ri) ri.focus(); return; } upd.roomNo=rn; }
      if(coll==="bookings" && x.kind!=="service"){ const counts=["confirmed","checked-in","completed"].includes(to);
        if(counts && !x.counted){ await admAdjustCal(x,1); upd.counted=true; }
        if(!counts && x.counted){ await admAdjustCal(x,-1); upd.counted=false; } }
      await KV.db.doc(coll+"/"+x.uid).update({items:{[id]:upd}});
      if(coll==="bookings" && x.kind!=="service" && x.pin){ try{ await STAY.patch(x.ref,x.pin,st=>({...st,name:x.name,phone:x.phone,prefs:x.prefs||"",ref:x.ref,stayName:x.stayName,checkIn:x.checkIn,checkOut:x.checkOut,status:to,roomNo:upd.roomNo||x.roomNo||st.roomNo||"",charges:st.charges||[]})); }catch(err){} }
    }catch(err){ alert("That change couldn’t be saved. Please try again."); }
    a.disabled=false; return; }
  const rv=e.target.closest("[data-rv]");
  if(rv){ const [id,act]=rv.dataset.rv.split("|"); const ref=KV.db.collection("reviews").doc(id);
    try{ if(act==="approve") await ref.update({approved:true,hidden:false}); else if(act==="hide") await ref.update({approved:false,hidden:true}); else if(act==="delete" && confirm("Delete this review for good?")) await ref.delete(); }catch(err){ alert("That change couldn’t be saved."); } return; }
  const rp=e.target.closest("[data-reply]");
  if(rp){ const id=rp.dataset.reply; const v=$(`[data-reply-in="${CSS.escape(id)}"]`).value.trim(); try{ await KV.db.collection("reviews").doc(id).update({reply:v}); rp.textContent="Saved"; setTimeout(()=>rp.textContent="Save reply",1500);}catch(err){ alert("Couldn’t save the reply."); } return; }
  if(e.target.closest("#invSave")){ const data={}; $$("[data-inv]").forEach(i=>data[i.dataset.inv]=Math.max(0,parseInt(i.value,10)||0));
    try{ await KV.db.doc("settings/inventory").set(data); $("#invMsg").textContent="Saved. Availability is updated for guests."; }catch(err){ $("#invMsg").textContent="Couldn’t save. Please try again."; } }
});
document.addEventListener("input",e=>{ if(e.target.id==="admQ"){ ADM.q=e.target.value; clearTimeout(ADM.qt); ADM.qt=setTimeout(()=>{ admRender(); const i=$("#admQ"); if(i){ i.focus(); i.setSelectionRange(i.value.length,i.value.length);} },250); } });

$("#sdForm").addEventListener("submit",e=>{
  e.preventDefault();
  if($("#sdIn").value && $("#sdOut").value && $("#sdOut").value<=$("#sdIn").value){ $("#sdErr").textContent="Check-out needs to be after check-in."; return; }
  $("#sdErr").textContent="";
  BK.open({stay:currentStay,inD:$("#sdIn").value,outD:$("#sdOut").value,adults:$("#sdA").value,children:$("#sdC").value,plan:$("#sdP").value,name:$("#sdN").value.trim(),phone:$("#sdPh").value.trim()});
});
$("#evForm").addEventListener("submit",async e=>{
  e.preventDefault();
  if(!$("#evN").value.trim()){$("#evErr").textContent="Add your name and organisation.";$("#evN").focus();return}
  if(!phoneOk($("#evPh").value)){$("#evErr").textContent="Add a phone number so we can reach you.";$("#evPh").focus();return}
  if(!consentOk($("#evForm"),$("#evErr"))) return;
  $("#evErr").textContent="";
  let t="Hello Kivu Resort, I’d like to enquire about an event.\n\nType: "+$("#evT").value+"\n";
  if($("#evD").value) t+="Date: "+fmt($("#evD").value)+"\n";
  if($("#evS").value.trim()) t+="Group size: "+$("#evS").value.trim()+"\n";
  t+="Name: "+$("#evN").value.trim()+"\nPhone: "+$("#evPh").value.trim()+"\n";
  if($("#evM").value.trim()) t+="Details: "+$("#evM").value.trim()+"\n";
  t+="\nPlease share options and a quote. Thank you!";
  await submitRecord("enquiries",{...consentData($("#evForm")),type:$("#evT").value,date:$("#evD").value||"",size:$("#evS").value.trim(),name:$("#evN").value.trim(),phone:$("#evPh").value.trim(),notes:$("#evM").value.trim(),status:"new"},t,$("#evOk"),e.submitter,"Enquiry received");
});

/* nav + router */
const nav=$("#nav");
function updateNav(){ nav.classList.toggle("solid", document.body.dataset.page!=="home" || scrollY>60); }
addEventListener("scroll",updateNav,{passive:true});
const PAGES=["notfound","privacy","terms","cancellation","cookies","mystay","reviews","admin","home","stays","msafiri","dine","pool","kids","safaris","gym","experiences","events","explore","gallery","contact"];
const TITLES={notfound:"Page not found, Kivu Resort",privacy:"Privacy Policy, Kivu Resort",terms:"Terms of use and booking terms, Kivu Resort",cancellation:"Cancellation and refund policy, Kivu Resort",cookies:"Cookie Policy, Kivu Resort",mystay:"My stay, Kivu Resort",reviews:"Guest reviews, Kivu Resort",admin:"Kivu dashboard",msafiri:"Msafiri Lodge, Nakuru",dine:"Restaurant and menu, Kivu Resort",pool:"Swimming pool, Kivu Resort",kids:"Kids Park, Kivu Resort",safaris:"Kivu Tours and Safaris",gym:"Kivu Gym",home:"Kivu Resort, Nakuru",stays:"Stay at Kivu Resort",experiences:"Experiences at Kivu Resort",events:"Events at Kivu Resort",explore:"Explore Nakuru from Kivu Resort",gallery:"Gallery, Kivu Resort",contact:"Contact Kivu Resort"};
function resolve(h){
  h=(h||"").replace(/^#/,"")||"home"; let page=h, stay=null;
  if(h.startsWith("stay-") && STAYS[h.slice(5)]){ page="stay"; stay=h.slice(5); }
  else if(!PAGES.includes(h)) { page="home"; h="home"; }
  return {h,page,stay};
}
let currentKey=null;
function render(h){
  const r=resolve(h);
  $$("main > .page[data-page]").forEach(p=>p.hidden=p.dataset.page!==r.page); document.body.hidden=false;
  document.body.dataset.page=r.page;
  if(r.page==="stay") renderStay(r.stay);
  const navKey = (r.page==="stay"||r.page==="msafiri")?"stays":r.page;
  $$(".nav-links a").forEach(a=>{ if(keyFromHref(a.getAttribute("href"))===navKey) a.setAttribute("aria-current","page"); else a.removeAttribute("aria-current"); });
  if(ROUTE!=="path") document.title = r.page==="stay" ? STAYS[r.stay].name+", Kivu Resort" : TITLES[r.page];
  currentKey=r.h;
  closeSheet(); updateNav(); if(ROUTE!=="path"||!location.hash) window.scrollTo(0,0);
  if(r.page==="home") requestAnimationFrame(drawTrain);
  if(r.page==="admin" && typeof startAdmin==="function") startAdmin();
  if(window.__drawPlan) setTimeout(window.__drawPlan,0);
  const cb=$("#cartBar"); if(cb){ cb.style.display = r.page==="dine" ? "" : "none"; if(window.__kivuOrderBar) window.__kivuOrderBar(); }
}
function showLoader(){}
function hideLoader(){}
const RM = matchMedia("(prefers-reduced-motion: reduce)").matches;
let navBusy=false;
/* routing: "hash" inside the single-file preview, "path" for the multi-page website */
IMG.mp0t=__R+"assets/img/mp0-thumb.webp";IMG.mp1t=__R+"assets/img/mp1-thumb.webp";IMG.mp2t=__R+"assets/img/mp2-thumb.webp";IMG.mp3t=__R+"assets/img/mp3-thumb.webp";IMG.mp4t=__R+"assets/img/mp4-thumb.webp";
const ROUTE=document.documentElement.dataset.route==="path"?"path":"hash";
const ROOT=document.documentElement.dataset.root||"";
const SLUG={dine:"restaurant",kids:"kids-park",safaris:"tours",msafiri:"msafiri-lodge",stays:"rooms"};
const UNSLUG=Object.fromEntries(Object.entries(SLUG).map(([k,v])=>[v,k]));
function pagePath(h){ if(!h||h==="home") return ""; if(h.startsWith("stay-")) return "rooms/"+h.slice(5)+"/"; return (SLUG[h]||h)+"/"; }
function keyFromHref(href){
  if(!href) return null; if(href.startsWith("#")) return href.slice(1)||null;
  let p=href.split("#")[0].replace(/^(\.\.\/|\.\/)+/,"").replace(/^\/+/,"").replace(/index\.html$/,"").replace(/\/+$/,"");
  if(p===""||p===".") return "home"; const s=p.split("/");
  if(s[0]==="rooms" && s[1]) return "stay-"+s[1];
  return UNSLUG[s[0]]||s[0];
}
function go(h,anchor){
  const r=resolve(h);
  closeSheet(); $$("dialog[open]").forEach(d=>{ try{ d.close(); }catch(e){} });
  if(ROUTE==="path"){
    if(r.h===currentKey){ if(anchor){ const el=document.getElementById(anchor); if(el){ el.scrollIntoView({behavior:RM?"auto":"smooth",block:"start"}); return; } } window.scrollTo({top:0,behavior:RM?"auto":"smooth"}); return; }
    location.href=ROOT+pagePath(r.h)+(anchor?"#"+anchor:""); return;
  }
  if(r.h===currentKey){ if(anchor){ const el=document.getElementById(anchor); if(el) el.scrollIntoView({behavior:RM?"auto":"smooth",block:"start"}); } else window.scrollTo({top:0,behavior:RM?"auto":"smooth"}); return; }
  if(navBusy) return; navBusy=true;
  render(r.h); try{ if(location.hash.slice(1)!==r.h){ ignoreHash=r.h; location.hash=r.h; } }catch(e){} navBusy=false;
  if(anchor) setTimeout(()=>{ const el=document.getElementById(anchor); if(el) el.scrollIntoView({behavior:RM?"auto":"smooth",block:"start"}); },60);
}
let ignoreHash=null;
document.addEventListener("click",e=>{
  if(e.defaultPrevented) return;
  const sc=e.target.closest("[data-scroll]");
  if(sc){
    e.preventDefault(); const id=sc.dataset.scroll, el=document.getElementById(id), pg=el&&el.closest("main > .page");
    if(el && (!pg || !pg.hidden)){ el.scrollIntoView({behavior:RM?"auto":"smooth",block:"start"}); return; }
    go(keyFromHref(sc.getAttribute("href"))||currentKey,id); return;
  }
  const a=e.target.closest('a[href]'); if(!a || a.target==="_blank") return;
  const href=a.getAttribute("href");
  if(href.startsWith("#")){ const h=href.slice(1); if(h==="main") return; e.preventDefault(); if(h) go(h); return; }
  if(ROUTE==="path" && !/^[a-z]+:/i.test(href) && !href.startsWith("//") && a.closest("dialog") ){ $$("dialog[open]").forEach(d=>{ try{ d.close(); }catch(e){} }); }
});
if(ROUTE==="hash") addEventListener("hashchange",()=>{
  const h=location.hash.slice(1);
  if(ignoreHash!==null && h===ignoreHash){ ignoreHash=null; return; }
  ignoreHash=null;
  if(resolve(h).h!==currentKey) go(h);
});
function route(){
  if(ROUTE==="path"){ render(document.documentElement.dataset.page||"home"); const id=decodeURIComponent(location.hash.slice(1)); if(id){ setTimeout(()=>{ const el=document.getElementById(id); if(el) el.scrollIntoView({block:"start"}); },80); } return; }
  render(location.hash);
}



/* restaurant menu */
const MENU=[
 {id:"breakfast",label:"Breakfast",groups:[
  {t:"Breakfast",items:[["Full Breakfast","750","Fruits, juice, cereals, 2 sausages, eggs, bread or pancakes, vegetables, roast potatoes"],["Kivu Special","400","Fruits, tea or coffee, toast, sausage, egg"],["Early Bird","250","Coffee or tea, 1 sausage or egg"]]},
  {t:"Eggs and extras",items:[["Fried eggs","100"],["Boiled eggs","100"],["Scrambled eggs","100"],["Plain omelette","100"],["Spanish omelette","150"],["Toasted bread","100"],["Pancakes, 3 pieces","100"],["Boiled sweet potatoes","100"]]}]},
 {id:"bites",label:"Quick bites",groups:[
  {t:"Quick bites",items:[["Mandazi, 3 pieces","100"],["Samosa, 1 piece","80"],["Mini samosa","50"],["Sausage, 1 piece","70"],["Kebab","100"],["Mini kebab","50"],["Sausages katakata","200"]]},
  {t:"Starters and desserts",items:[["Butternut soup","350"],["Vegetable salad","300"],["Fruit salad","200"],["Fruit punch","300"]]}]},
 {id:"mains",label:"Mains",groups:[
  {t:"Kivu combos",items:[["Chicken broiler","1,800","With 1 portion of chips"],["Chicken kienyeji","2,200","With 1 portion of chips"],["Beef stew","1,800","With 1 portion of chips"],["Beef tumbukiza","1,800"],["Mutton tumbukiza","2,000"]]},
  {t:"Vegetarian",items:[["Bean stew","200","Yellow beans"],["Peas stew","200"],["Githeri","250"],["Ndengu stew","200","With potatoes and carrots"]]},
  {t:"Fish",items:[["Whole tilapia fish","600"],["Fish fingers","500"]]}]},
 {id:"grill",label:"Choma and grill",groups:[
  {t:"Choma zone",items:[["Mutton choma, 1 kg","1,300"],["Chicken choma, 1 kg","1,500"]]},
  {t:"Kivu platters",items:[["Mixed grill","2,500"],["Kienyeji platter","2,800"]]},
  {t:"Meat by weight",note:"1 kg / 0.5 kg / 0.25 kg",items:[["Beef steak","1,500 / 800 / 400"],["Chicken","1,500 / 800 / 400"],["Mutton","1,300 / 700"],["Kienyeji","1,800 / 900"],["Pork ribs with honey","2,000 / 1,000"],["Shoulders, 1 kg","1,500"],["Matumbo mbuzi, wet or dry","500 / 250","0.5 kg / 0.25 kg"]]}]},
 {id:"pizza",label:"Pizza",groups:[
  {t:"Kivu pizza",sizes:["Small 450","Medium 750","Large 1,200"],items:[["Chicken pizza","","Mozzarella, succulent chicken, oregano, tomato base"],["Hawaiian pizza","","Mozzarella, oregano, tomato, bacon, pineapple, tomato base"],["Vegetarian pizza","","Mozzarella, green pepper, onions, oregano, tomato base"],["Extra toppings","","Veg: mushroom, sweetcorn, pineapple, onion. Meat: chicken, bacon, minced meat"]]}]},
 {id:"kids",label:"Kids",groups:[
  {t:"Kids menu",items:[["Hot dog","100"],["Beef or chicken burger","550"],["Vegetable burger","300"],["Egg, beef or chicken sandwich","550"],["Chicken wings","350"],["Fish fingers","500"],["Meat balls","300"],["Gizzards","300"]]}]},
 {id:"sides",label:"Sides",groups:[
  {t:"Accompaniments",items:[["Chips","250"],["Chips masala","300"],["Roast potatoes","250"],["Mashed potatoes","200"],["Ugali, white or brown","50"],["Plain pilau","200"],["Chapati, white or brown","70"],["Mukimo","200"],["Boiled rice","100"],["Kachumbari","50"]]},
  {t:"Vegetables",items:[["Managu","150"],["Kunde","100"],["Spinach","50"],["Mixed vegetables","100"],["Cabbage","50"]]}]},
 {id:"drinks",label:"Drinks",groups:[
  {t:"Fresh juice",note:"Depending on fruits in season",items:[["Mango","150"],["Passion","150"],["Watermelon","150"],["Cocktail juice","200"],["Sugarcane juice","200"]]},
  {t:"Soft drinks",items:[["Soda, 300 ml","100"],["Mineral water, 0.5 l","100"],["Mineral water, 1 l","150"],["Delmonte, 1 l","400"],["Minute Maid","100"],["Milk packet, 250 ml","100"],["Milkshake","400"],["Slush","400"],["Fruit punch","350"]]}]},
 {id:"hot",label:"Tea and coffee",groups:[
  {t:"Hot beverages",items:[["Kenyan tea pot, freshly brewed","150"],["Black tea with lemon","100"],["Herbal tea","150"],["Masala tea","200"],["Hot chocolate mug","150"],["Kivu dawa","200"],["Hot lemon water","50"],["Glass of milk","100"],["Bone soup","100"],["Traditional uji","150"]]},
  {t:"Coffee bar",items:[["Coffee mug, black or white","100"],["Kivu house coffee, black or white","200"],["Espresso","200"],["Americano, single / double","150 / 200"],["Cappuccino, single / double","200 / 250"],["Caffe latte, single / double","200 / 250"],["Macchiato","200"]]}]}
];
(function(){
  const tabs=$("#menuTabs"), box=$("#menuGroups"); if(!tabs||!box) return;
  tabs.innerHTML=MENU.map((m,i)=>`<button role="tab" aria-selected="${i===0}" data-m="${m.id}">${esc(m.label)}</button>`).join("");
  function show(id){
    const m=MENU.find(x=>x.id===id);
    $$("#menuTabs button").forEach(b=>b.setAttribute("aria-selected",b.dataset.m===id));
    box.innerHTML=m.groups.map(g=>`<div class="mgroup"><h3><i class="mi mi-dine"></i>${esc(g.t)}</h3>${g.note?`<p class="gnote">${esc(g.note)}</p>`:""}${g.sizes?`<div class="sizes">${g.sizes.map(s=>`<span>${esc(s)}</span>`).join("")}</div>`:""}<ul class="mlist">${g.items.map(it=>`<li><span class="nm">${esc(it[0])}${it[2]?`<span class="ds">${esc(it[2])}</span>`:""}</span>${it[1]?`<span class="pr">${esc(it[1])}</span>`:""}</li>`).join("")}</ul></div>`).join("");
  }
  tabs.addEventListener("click",e=>{const b=e.target.closest("button"); if(b) show(b.dataset.m);});
  show("breakfast");
})();


/* dine favourites */
const DISHES=[
 ["Kienyeji platter","Kivu platters","2,800","","f_platter","kienyeji-platter"],
 ["Mixed grill","Kivu platters","2,500","","f_wings","mixed-grill"],
 ["Beef steak","Grill","1,500","per kg","f_steak","beef-steak-1-kg"],
 ["Chicken by the kilo","Grill","400","from","f_lollipop","chicken-0-25-kg"],
 ["Kivu pizza","Pizza","450","from","f_pizza","chicken-pizza-small"],
 ["Full breakfast","Breakfast","750","","f_eggs","full-breakfast"],
 ["Samosa","Quick bites","80","","f_samosa","samosa-1-piece"],
 ["Fresh juice","Drinks","150","from","f_juice","mango"]
];
const HEART_SVG='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M12 20.5s-7.5-4.6-9.2-9.3C1.6 7.8 3.8 4.5 7.2 4.5c2 0 3.6 1.1 4.8 2.8 1.2-1.7 2.8-2.8 4.8-2.8 3.4 0 5.6 3.3 4.4 6.7-1.7 4.7-9.2 9.3-9.2 9.3Z"/></svg>';
$("#dishGrid").innerHTML=DISHES.map(d=>`<article class="dish">
  <div class="dish-img"><img loading="lazy" decoding="async" src="${IMG[d[4]]}" alt="${esc(d[0])}"></div>
  <button class="dish-fav" type="button" aria-pressed="false" aria-label="Save ${esc(d[0])}">${HEART_SVG}</button>
  <div class="dish-body"><div class="dish-cat">${esc(d[1])}</div><h3>${esc(d[0])}</h3>
  <div class="dish-price">${d[3]==="from"?"<small>from </small>":""}KES ${esc(d[2])}${d[3]&&d[3]!=="from"?` <small>${esc(d[3])}</small>`:""}</div>
  <button class="btn btn-coral" data-add="${d[5]}">Add to order</button></div>
</article>`).join("");
$$(".dish-fav").forEach(f=>f.onclick=()=>f.setAttribute("aria-pressed",f.getAttribute("aria-pressed")!=="true"));


/* order builder */
(function(){
  const stage=$("#mvPage"); if(!stage) return;
  const slug=s=>s.toLowerCase().replace(/[’']/g,"").replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"");
  const num=s=>parseInt(String(s).replace(/[^0-9]/g,""),10)||0;
  const ITEMS=[], seen={};
  MENU.forEach(cat=>cat.groups.forEach(g=>g.items.forEach(([name,price,desc])=>{
    const push=(n,p,d,v)=>{ const label=v?`${n} (${v})`:n; let id=slug(label); if(seen[id]) id+="-"+cat.id; seen[id]=1; ITEMS.push({id,name:n,variant:v||"",label,price:num(p),desc:d||"",cat:cat.id}); };
    if(!price){ if(g.sizes && !/extra/i.test(name)) g.sizes.forEach(s=>{ const m=s.match(/^(\w+)\s+([\d,]+)/); push(name,m[2],desc,m[1]); }); return; }
    if(price.includes("/")){
      const ps=price.split("/").map(x=>x.trim()); let n=name, labels=null;
      if(desc && desc.includes("/")) labels=desc.split("/").map(x=>x.trim());
      else if(name.includes(",") && name.split(",").pop().includes("/")){ labels=name.split(",").pop().split("/").map(x=>x.trim()); n=name.split(",")[0]; }
      else if(g.note && g.note.includes("/")) labels=g.note.split("/").map(x=>x.trim());
      ps.forEach((p,i)=>push(n,p,"",labels&&labels[i]?labels[i]:`option ${i+1}`));
    } else push(name,price,desc);
  })));
  const byId=Object.fromEntries(ITEMS.map(x=>[x.id,x]));
  const find=(label,cat)=>ITEMS.find(x=>x.label===label && (!cat||x.cat===cat));
  const HOT=[[0, 40, 150, 415, 182, "Mandazi, 3 pieces", null], [0, 40, 186, 415, 218, "Samosa, 1 piece", null], [0, 40, 220, 415, 246, "Mini samosa", null], [0, 40, 252, 415, 286, "Sausage, 1 piece", null], [0, 40, 288, 415, 318, "Kebab", null], [0, 40, 320, 415, 354, "Mini kebab", null], [0, 40, 357, 415, 386, "Sausages katakata", null], [0, 40, 1204, 415, 1236, "Butternut soup", null], [0, 40, 1238, 415, 1270, "Vegetable salad", null], [0, 598, 182, 998, 244, "Bean stew", null], [0, 598, 250, 998, 280, "Peas stew", null], [0, 598, 286, 998, 314, "Githeri", null], [0, 598, 320, 998, 382, "Ndengu stew", null], [0, 598, 495, 998, 524, "Beef steak (1 kg)", null], [0, 598, 524, 998, 550, "Beef steak (0.5 kg)", null], [0, 598, 550, 998, 578, "Beef steak (0.25 kg)", null], [0, 598, 580, 998, 612, "Mutton (1 kg)", null], [0, 598, 612, 998, 638, "Mutton (0.5 kg)", null], [0, 598, 642, 998, 671, "Chicken (1 kg)", null], [0, 598, 671, 998, 697, "Chicken (0.5 kg)", null], [0, 598, 697, 998, 724, "Chicken (0.25 kg)", null], [0, 598, 729, 998, 762, "Kienyeji (1 kg)", null], [0, 598, 762, 998, 790, "Kienyeji (0.5 kg)", null], [0, 598, 800, 998, 830, "Pork ribs with honey (1 kg)", null], [0, 598, 830, 998, 858, "Pork ribs with honey (0.5 kg)", null], [0, 598, 860, 998, 898, "Shoulders, 1 kg", null], [0, 598, 904, 998, 934, "Whole tilapia fish", null], [0, 598, 934, 998, 962, "Fish fingers", "mains"], [0, 598, 998, 998, 1026, "Matumbo mbuzi, wet or dry (0.5 kg)", null], [0, 598, 1026, 998, 1054, "Matumbo mbuzi, wet or dry (0.25 kg)", null], [1, 40, 222, 415, 250, "Fruit salad", null], [1, 40, 256, 415, 284, "Fruit punch", "bites"], [1, 598, 212, 998, 244, "Mutton choma, 1 kg", null], [1, 598, 248, 998, 280, "Chicken choma, 1 kg", null], [1, 598, 514, 998, 608, ["Chicken pizza (Small)", "Chicken pizza (Medium)", "Chicken pizza (Large)"], null], [1, 598, 626, 998, 720, ["Hawaiian pizza (Small)", "Hawaiian pizza (Medium)", "Hawaiian pizza (Large)"], null], [1, 598, 732, 998, 828, ["Vegetarian pizza (Small)", "Vegetarian pizza (Medium)", "Vegetarian pizza (Large)"], null], [1, 40, 1119, 415, 1149, "Hot dog", null], [1, 40, 1151, 415, 1184, "Beef or chicken burger", null], [1, 40, 1186, 415, 1220, "Vegetable burger", null], [1, 40, 1222, 415, 1282, "Egg, beef or chicken sandwich", null], [1, 40, 1290, 415, 1320, "Chicken wings", null], [1, 40, 1324, 415, 1354, "Fish fingers", "kids"], [1, 40, 1358, 415, 1386, "Meat balls", null], [1, 40, 1390, 415, 1420, "Gizzards", null], [2, 40, 156, 415, 238, "Full Breakfast", null], [2, 40, 246, 415, 306, "Early Bird", null], [2, 40, 318, 415, 378, "Kivu Special", null], [2, 40, 1104, 415, 1134, "Fried eggs", null], [2, 40, 1134, 415, 1160, "Boiled eggs", null], [2, 40, 1160, 415, 1187, "Scrambled eggs", null], [2, 40, 1187, 415, 1213, "Plain omelette", null], [2, 40, 1213, 415, 1245, "Spanish omelette", null], [2, 40, 1320, 415, 1347, "Toasted bread", null], [2, 40, 1348, 415, 1375, "Pancakes, 3 pieces", null], [2, 40, 1376, 415, 1402, "Boiled sweet potatoes", null], [2, 598, 276, 998, 334, "Kenyan tea pot, freshly brewed", null], [2, 598, 348, 998, 378, "Black tea with lemon", null], [2, 598, 396, 998, 424, "Herbal tea", null], [2, 598, 443, 998, 473, "Masala tea", null], [2, 598, 490, 998, 523, "Hot chocolate mug", null], [2, 598, 568, 998, 598, "Kivu dawa", null], [2, 598, 615, 998, 646, "Hot lemon water", null], [2, 598, 663, 998, 693, "Glass of milk", null], [2, 598, 710, 998, 743, "Bone soup", null], [2, 598, 758, 998, 791, "Traditional uji", null], [3, 40, 160, 415, 213, "Coffee mug, black or white", null], [3, 40, 222, 415, 283, "Kivu house coffee, black or white", null], [3, 40, 287, 415, 317, "Espresso", null], [3, 40, 320, 415, 352, "Cappuccino (single)", null], [3, 40, 354, 415, 386, "Cappuccino (double)", null], [3, 40, 1151, 415, 1183, "Americano (single)", null], [3, 40, 1199, 415, 1227, "Americano (double)", null], [3, 40, 1246, 415, 1278, "Caffe latte (single)", null], [3, 40, 1294, 415, 1322, "Caffe latte (double)", null], [3, 40, 1341, 415, 1369, "Macchiato", null], [3, 598, 252, 998, 283, "Mango", null], [3, 598, 286, 998, 313, "Passion", null], [3, 598, 320, 998, 347, "Watermelon", null], [3, 598, 354, 998, 381, "Cocktail juice", null], [3, 598, 388, 998, 419, "Sugarcane juice", null], [3, 598, 607, 998, 634, "Soda, 300 ml", null], [3, 598, 641, 998, 669, "Mineral water, 0.5 l", null], [3, 598, 675, 998, 702, "Mineral water, 1 l", null], [3, 598, 708, 998, 745, "Delmonte, 1 l", null], [3, 598, 745, 998, 771, "Minute Maid", null], [3, 598, 778, 998, 805, "Milk packet, 250 ml", null], [3, 598, 812, 998, 839, "Milkshake", null], [3, 598, 845, 998, 873, "Slush", null], [3, 598, 879, 998, 907, "Fruit punch", "drinks"], [4, 40, 244, 415, 271, "Mixed grill", null], [4, 40, 278, 415, 310, "Kienyeji platter", null], [4, 598, 205, 998, 236, "Chips", null], [4, 598, 239, 998, 269, "Chips masala", null], [4, 598, 273, 998, 298, "Roast potatoes", null], [4, 598, 307, 998, 333, "Mashed potatoes", null], [4, 598, 341, 998, 371, "Ugali, white or brown", null], [4, 598, 375, 998, 404, "Plain pilau", null], [4, 598, 407, 998, 439, "Chapati, white or brown", null], [4, 598, 441, 998, 470, "Mukimo", null], [4, 598, 474, 998, 503, "Boiled rice", null], [4, 598, 507, 998, 537, "Kachumbari", null], [4, 598, 720, 998, 750, "Managu", null], [4, 598, 754, 998, 781, "Kunde", null], [4, 598, 788, 998, 819, "Spinach", null], [4, 598, 822, 998, 853, "Mixed vegetables", null], [4, 598, 856, 998, 887, "Cabbage", null], [4, 40, 1114, 415, 1176, "Chicken broiler", null], [4, 40, 1180, 415, 1244, "Chicken kienyeji", null], [4, 40, 1249, 415, 1313, "Beef stew", null], [4, 40, 1317, 415, 1344, "Beef tumbukiza", null], [4, 40, 1351, 415, 1377, "Mutton tumbukiza", null]], PAGES=[["Quick bites and mains", "mp0"], ["Choma, pizza and kids", "mp1"], ["Breakfast and tea", "mp2"], ["Coffee, juice and drinks", "mp3"], ["Platters and sides", "mp4"]], W=1131, H=1600;
  HOT.forEach(h=>{ h.items=(Array.isArray(h[5])?h[5]:[h[5]]).map(l=>find(l,h[6])).filter(Boolean); });
  window.__kivuHotCheck=()=>HOT.filter(h=>!h.items.length || h.items.length!==(Array.isArray(h[5])?h[5].length:1)).map(h=>h[5]);
  let cart={}; try{ cart=JSON.parse(localStorage.getItem("kivuCart")||"{}")||{}; }catch(e){ cart={}; }
  Object.keys(cart).forEach(k=>{ if(!byId[k]) delete cart[k]; });
  const save=()=>{ try{ localStorage.setItem("kivuCart",JSON.stringify(cart)); }catch(e){} };
  const kes=n=>"KES "+n.toLocaleString("en-KE");
  let page=0;
  $("#mvTabs").innerHTML=PAGES.map((p,i)=>`<button role="tab" data-p="${i}" aria-selected="${i===0}"><img loading="lazy" decoding="async" src="${IMG[p[1]+"t"]||IMG[p[1]]}" alt=""><span>${esc(p[0])}</span></button>`).join("");
  function qtyOf(h){ return h.items.reduce((a,it)=>a+(cart[it.id]||0),0); }
  function drawHots(){
    $("#mvHots").innerHTML=HOT.map((h,i)=>{ if(h[0]!==page) return ""; const q=qtyOf(h);
      return `<button type="button" class="hot${q?" on":""}" data-h="${i}" style="left:${h[1]/W*100}%;top:${h[2]/H*100}%;width:${(h[3]-h[1])/W*100}%;height:${(h[4]-h[2])/H*100}%" aria-label="Add ${esc(h.items[0]?h.items[0].name:"")}">${q?`<i>${q}</i>`:"<em>+</em>"}</button>`; }).join("");
  }
  function show(p){ page=(p+PAGES.length)%PAGES.length; $("#mvImg").src=IMG[PAGES[page][1]]; $("#mvImg").alt="Kivu menu: "+PAGES[page][0];
    $$("#mvTabs button").forEach(b=>b.setAttribute("aria-selected",+b.dataset.p===page)); $("#mvCount").textContent=`Page ${page+1} of ${PAGES.length}`; drawHots(); $("#mvScroll").scrollLeft=0; }
  $("#mvTabs").addEventListener("click",e=>{ const b=e.target.closest("button"); if(b) show(+b.dataset.p); });
  $("#mvPrev").onclick=()=>show(page-1); $("#mvNext").onclick=()=>show(page+1);
  let sx=null; $("#mvScroll").addEventListener("touchstart",e=>{ sx=e.touches[0].clientX; },{passive:true});
  // pick sheet
  const pick=$("#pickDlg"); let cur=null, choice=0, qty=1;
  function openPick(h){
    cur=h; choice=0; qty=1; const first=h.items[0];
    $("#pkName").textContent=first.name; $("#pkDesc").textContent=first.desc||"";
    $("#pkOpts").innerHTML=h.items.length>1||first.variant?h.items.map((it,i)=>`<button type="button" data-o="${i}" aria-pressed="${i===0}"><span>${esc(it.variant||it.label)}</span><b>${kes(it.price)}</b></button>`).join(""):`<div class="pk-price">${kes(first.price)}</div>`;
    upd(); pick.showModal?pick.showModal():pick.setAttribute("open","");
  }
  function upd(){ $("#pkQty").textContent=qty; $("#pkDec").disabled=qty<=1; const it=cur.items[choice]; $("#pkAdd").textContent=`Add ${qty} · ${kes(qty*it.price)}`; }
  $("#pkOpts").addEventListener("click",e=>{ const b=e.target.closest("[data-o]"); if(!b) return; choice=+b.dataset.o; $$("#pkOpts [data-o]").forEach(x=>x.setAttribute("aria-pressed",x===b)); upd(); });
  $("#pkInc").onclick=()=>{ qty++; upd(); }; $("#pkDec").onclick=()=>{ if(qty>1){ qty--; upd(); } };
  $("#pkClose").onclick=()=>pick.close(); pick.addEventListener("click",e=>{ if(e.target===pick) pick.close(); });
  $("#pkAdd").onclick=()=>{ const it=cur.items[choice]; cart[it.id]=(cart[it.id]||0)+qty; save(); pick.close(); refresh(); toast(`Added ${qty} × ${it.label}`); };
  $("#mvHots").addEventListener("click",e=>{ const b=e.target.closest(".hot"); if(b) openPick(HOT[+b.dataset.h]); });
  // cart
  function totals(){ let c=0,s=0; Object.entries(cart).forEach(([k,n])=>{ c+=n; s+=n*byId[k].price; }); return {c,s}; }
  function bar(){ const {c,s}=totals(); $("#cartBar").hidden=c===0; document.body.classList.toggle("has-cart",c>0 && document.body.dataset.page==="dine"); $("#cbCount").textContent=c; $("#cbTotal").textContent=kes(s); }
  function refresh(){ drawHots(); bar(); lines(); }
  let tt; function toast(m){ const el=$("#toast"); el.textContent=m; el.classList.add("show"); clearTimeout(tt); tt=setTimeout(()=>el.classList.remove("show"),1700); }
  function change(id,d){ cart[id]=Math.max(0,(cart[id]||0)+d); if(!cart[id]) delete cart[id]; save(); refresh(); }
  document.addEventListener("click",e=>{
    const inc=e.target.closest("[data-inc]"), dec=e.target.closest("[data-dec]"), add=e.target.closest("[data-add]"), pg=e.target.closest("[data-mvpage]");
    if(inc){ e.preventDefault(); change(inc.dataset.inc,1); }
    else if(dec){ e.preventDefault(); change(dec.dataset.dec,-1); }
    else if(add){ e.preventDefault(); if(byId[add.dataset.add]){ change(add.dataset.add,1); toast("Added "+byId[add.dataset.add].label); } }
    if(pg) show(+pg.dataset.mvpage);
  });
  const dlg=$("#orderDlg");
  function lines(){
    const ent=Object.entries(cart);
    $("#odLines").innerHTML=ent.length?ent.map(([k,n])=>{const it=byId[k];return `<li><div class="nm">${esc(it.label)}<small>${kes(it.price)} each</small></div><div class="step"><button type="button" data-dec="${k}" aria-label="Remove one">−</button><span>${n}</span><button type="button" data-inc="${k}" aria-label="Add one">+</button></div></li>`;}).join(""):`<li><div class="nm">Your order is empty.</div></li>`;
    $("#odTotal").textContent=kes(totals().s);
  }
  $("#cbOpen").onclick=()=>{ lines(); $("#odErr").textContent=""; $("#odOk").hidden=true; GUEST.fillOrder(); dlg.showModal?dlg.showModal():dlg.setAttribute("open",""); };
  $("#odPay").addEventListener("click",e=>{ const b=e.target.closest("[data-p]"); if(b) $$("#odPay [data-p]").forEach(x=>x.setAttribute("aria-pressed",x===b)); });
  $("#odClose").onclick=()=>dlg.close();
  dlg.addEventListener("click",e=>{ if(e.target===dlg) dlg.close(); });
  $$("#odTypes button").forEach(b=>b.onclick=()=>$$("#odTypes button").forEach(x=>x.setAttribute("aria-pressed",x===b)));
  $("#odClear").onclick=()=>{ cart={}; save(); refresh(); dlg.close(); };
  $("#orderForm").addEventListener("submit",async e=>{
    e.preventDefault();
    const ent=Object.entries(cart); if(!ent.length){ $("#odErr").textContent="Add at least one dish first."; return; }
    const name=$("#odName").value.trim(); if(!name){ $("#odErr").textContent="Add your name so we know who the order is for."; $("#odName").focus(); return; }
    $("#odErr").textContent="";
    const type=$("#odTypes [aria-pressed=true]").textContent, where=$("#odWhere").value.trim(), notes=$("#odNotes").value.trim();
    let m="Hello Kivu Resort, I’d like to place a food order:\n\n";
    ent.forEach(([k,n])=>{ const it=byId[k]; m+=`${n} × ${it.label}: ${kes(n*it.price)}\n`; });
    m+=`\nTotal: ${kes(totals().s)}\nHow: ${type}\nName: ${name}\n`; if(where) m+=`Table or room: ${where}\n`; if(notes) m+=`Notes: ${notes}\n`;
    const ph=$("#odPh").value.trim(); if(!phoneOk(ph)){ $("#odErr").textContent="Add a phone number so the kitchen can reach you."; $("#odPh").focus(); return; }
    if(!consentOk($("#orderForm"),$("#odErr"))) return;
    m+=`Phone: ${ph}\n\nPlease confirm. Thank you!`;
    const items=ent.map(([k,n])=>({label:byId[k].label,qty:n,price:byId[k].price}));
    const cur=GUEST.current(), inHouse=!!(cur && cur.status==="checked-in");
    const chargeRoom=inHouse && !$("#odPayWrap").hidden && $("#odPay [aria-pressed=true]").dataset.p==="room";
    const extra=inHouse?{bookingRef:cur.ref,roomNo:cur.roomNo||"",chargeRoom,prefs:cur.prefs||""}:{};
    if(chargeRoom) m=m.replace("Please confirm.","Please charge to my room ("+(cur.roomNo||cur.ref)+").");
    const ok=await submitRecord("orders",{...consentData($("#orderForm")),items,total:totals().s,type,where,name,phone:ph,notes,status:"new",...extra},m,$("#odOk"),e.submitter,chargeRoom?"Order sent to the kitchen":"Order received");
    GUEST.remember({name,phone:ph});
    if(ok && chargeRoom && GUEST.session && GUEST.session.ref===cur.ref){ const okRef=($("#odOk").textContent.match(/K[A-Z]-[A-Z0-9]{6}/)||[""])[0]; try{ await STAY.patch(GUEST.session.ref,GUEST.session.pin,s=>({...s,charges:[...(s.charges||[]),{ref:okRef,items,total:totals().s||items.reduce((a,i)=>a+i.qty*i.price,0),createdAt:nowIso(),status:"new"}]})); }catch(err){} }
    if(ok){ cart={}; save(); refresh(); }
  });
  show(0); bar();
  window.__kivuOrderBar=bar;
})();

/* msafiri lodge */
const MSAFIRI=[
 {name:"Standard single",desc:"A comfortable, good-value room for one, ideal for a short business stay.",r:[["B&B","3,500"],["Half board","4,500"],["Full board","Ask us"]]},
 {name:"Standard double or twin",desc:"Spacious room with a double bed or two beds, great for colleagues or couples.",r:[["B&B","5,000"],["Half board","7,000"],["Full board","9,000"]],hi:true},
 {name:"Superior single",desc:"A relaxing, more spacious single room with a queen bed.",r:[["B&B","4,000"],["Half board","5,000"],["Full board","6,000"]]},
 {name:"Superior double or twin",desc:"Our most comfortable city room, with queen beds for two.",r:[["B&B","6,000"],["Half board","8,000"],["Full board","10,000"]]}
];
$("#msafiriGrid").innerHTML=MSAFIRI.map(m=>`<div class="pcard${m.hi?" hi":""}"><h3>${esc(m.name)}</h3><span class="who">Msafiri Lodge, Nakuru town</span><p style="margin:12px 0 0">${esc(m.desc)}</p>
  <table class="rate-table"><tr><th>Plan</th><th>KES per night</th></tr>${m.r.map(x=>`<tr><td>${esc(x[0])}</td><td class="k">${esc(x[1])}</td></tr>`).join("")}</table>
  <button class="btn ${m.hi?"":"btn-dark"}" style="margin-top:22px" data-book="msafiri:${esc(m.name)}">Check availability</button></div>`).join("");

/* generic WhatsApp buttons */
document.addEventListener("click",e=>{ const b=e.target.closest("[data-wa]"); if(!b) return; e.preventDefault(); openWa(b.dataset.wa); });

/* coverflow */
(function(){
  const stage=$("#cf"); if(!stage) return; const keys=Object.keys(STAYS); let a=1;
  keys.forEach((k,i)=>{
    const s=STAYS[k]; const b=document.createElement("button"); b.className="cf-card"; b.type="button";
    b.setAttribute("aria-label",s.name);
    b.innerHTML=`<img loading="lazy" decoding="async" src="${IMG[s.img]}" alt="" style="object-position:${s.pos}"><span class="cf-cap"><b><i><img loading="lazy" decoding="async" src="${IMG.flamingo}" alt=""></i>${esc(s.name)}</b><small>${i===a?"Tap to see the room":"Tap to view"}</small></span>`;
    b.onclick=()=>{ if(i===a) go("stay-"+k); else { a=i; draw(); } };
    stage.appendChild(b);
  });
  const cards=[...stage.querySelectorAll(".cf-card")];
  $("#cfDots").innerHTML=keys.map((k,i)=>`<button aria-label="Show ${esc(STAYS[k].name)}"></button>`).join("");
  const dots=[...$$("#cfDots button")]; dots.forEach((d,i)=>d.onclick=()=>{a=i;draw();});
  function draw(){
    const narrow=innerWidth<640;
    cards.forEach((c,i)=>{
      const o=i-a, d=Math.abs(o);
      const tx=o*(narrow?70:62);
      c.style.transform=`translate(-50%,-50%) translateX(${tx}%) translateZ(${-d*150}px) rotateY(${-o*16}deg) scale(${d?0.86:1})`;
      c.style.zIndex=20-d; c.style.opacity=d>2?0:1; c.style.pointerEvents=d>2?"none":"auto";
      c.classList.toggle("on",o===0);
      c.querySelector("small").textContent=o===0?"Tap to see the room":"Tap to view";
    });
    dots.forEach((d,i)=>d.classList.toggle("on",i===a));
    $("#cfPrev").disabled=a===0; $("#cfNext").disabled=a===keys.length-1;
    const s=STAYS[keys[a]];
    $("#cfText").textContent=s.text;
    $("#cfMeta").innerHTML=`<span>${ICONS.bed}${esc(s.card[0])}</span><span>${ICONS.user}${esc(s.card[1])}</span><span>${ICONS[s.card[3]]}${esc(s.card[2])}</span>`;
    $("#cfView").setAttribute("href","#stay-"+keys[a]);
    $("#cfBook").dataset.book=keys[a];
  }
  $("#cfPrev").onclick=()=>{ if(a>0){a--;draw();} };
  $("#cfNext").onclick=()=>{ if(a<keys.length-1){a++;draw();} };
  stage.addEventListener("keydown",e=>{ if(e.key==="ArrowLeft") $("#cfPrev").click(); if(e.key==="ArrowRight") $("#cfNext").click(); });
  let sx=null; stage.addEventListener("pointerdown",e=>{sx=e.clientX;});
  stage.addEventListener("pointerup",e=>{ if(sx===null) return; const dx=e.clientX-sx; sx=null; if(Math.abs(dx)>40){ dx<0?$("#cfNext").click():$("#cfPrev").click(); } });
  addEventListener("resize",draw);
  draw();
})();

/* curved strips */
(function(){
  const pics=["aerial","room","camp","sign","pool_garden","aerial","camp","room","sign"];
  $$("[data-curve]").forEach(root=>{
    const track=root.querySelector(".cv-track");
    const html=pics.map(p=>`<div class="cv-item"><div class="cv-in"><img loading="lazy" decoding="async" src="${IMG[p]}" alt="${esc(ALT[p])}"></div></div>`).join("");
    track.innerHTML=html+html;
    const items=[...track.children]; let x=0, paused=false;
    root.addEventListener("pointerenter",()=>paused=true); root.addEventListener("pointerleave",()=>paused=false);
    function frame(){
      if(root.offsetParent!==null){
        const half=track.scrollWidth/2;
        if(!RM && !paused){ x-=0.45; if(-x>=half) x+=half; }
        track.style.transform=`translateX(${x}px)`;
        const r=root.getBoundingClientRect(), cx=r.left+r.width/2, hw=r.width/2;
        items.forEach(it=>{
          const b=it.getBoundingClientRect(); if(b.right<r.left-50||b.left>r.right+50) return;
          let d=((b.left+b.width/2)-cx)/hw; d=Math.max(-1.2,Math.min(1.2,d));
          it.firstElementChild.style.transform=`perspective(1000px) rotateY(${-d*30}deg) scale(${1+Math.abs(d)*0.1})`;
        });
      }
      requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  });
})();
if($("#connectForm")) $("#connectForm").addEventListener("submit",e=>{
  e.preventDefault(); const q=$("#connectQ").value.trim();
  openWa("Hello Kivu Resort, "+(q||"I have a question."));
});


/* train windows */
function drawTrain(){}
addEventListener("resize",drawTrain);

/* mobile sheet */
const sheet=$("#sheet");
function closeSheet(){ sheet.classList.remove("open"); sheet.setAttribute("aria-hidden","true"); $("#menuBtn").setAttribute("aria-expanded","false"); }
$("#menuBtn").onclick=()=>{ sheet.classList.add("open"); sheet.setAttribute("aria-hidden","false"); $("#menuBtn").setAttribute("aria-expanded","true"); };
$("#sheetClose").onclick=closeSheet;

/* concierge */
const FACTS = `Kivu Resort, off Flamingo Road, Nakuru 20100, Kenya. Phone and WhatsApp +254 726 026 894.
Location: a few minutes' drive (about 1 to 2 km) from Lake Nakuru National Park main gate; all distances approximate: Hyrax Hill about 5 km; Menengai Crater about 12 km; Lake Elmenteita about 32 km; Kariandusi about 35 km; about 160 km from Nairobi. Tuk-tuk stage nearby.
Stays: Executive rooms (double bed, en-suite, desk), Standard rooms (single, double or twin, en-suite), Self-catering suites (families, longer stays), Campsite (secure, private; own tent or borrow tents and bedding) and bunk beds for groups. African-themed rooms with mosquito nets.
Included: free Wi-Fi in public areas, free parking, use of the main pool, children's pool, gym and children's park, buffet breakfast with B&B.
Meal plans: bed and breakfast, half board, full board. Restaurant serves local and continental food; bar on site.
Check in from 1:00 pm, check out by 10:30 am. No pets. Bicycle hire. Travel desk can arrange Lake Nakuru game drives. Conference rooms, team-building lawns, training camps, corporate and social functions.
Rates: resort room rates differ for residents and non-residents and are confirmed by the front desk on WhatsApp; children get reduced rates.
Emails: info@kivuresort.com; safaris adventuresafaris@kivuresort.com.
Pool prices (KES): swimming only 500/day; swimming and training (non-club) 1,000/day; monthly swimming (non-club) 5,000; club registration 1,000; club members 850/day; monthly swimming and training for club members 6,500 for 10 sessions, extra sessions 350; Kenya Aquatics annual fee 600 per competitive swimmer. Professional coaches, family friendly, lifeguards on duty.
Msafiri Lodge (sister lodge in central Nakuru town, near shops and nightlife, for business travellers), KES per night B&B/half board/full board: standard single 3,500/4,500/ask; standard double or twin 5,000/7,000/9,000; superior single 4,000/5,000/6,000; superior double or twin 6,000/8,000/10,000.
Restaurant highlights (KES): full breakfast 750, Kivu special 400, early bird 250; samosa 80; githeri 250; chicken choma 1kg 1,500; mutton choma 1kg 1,300; mixed grill 2,500; kienyeji platter 2,800; chicken kienyeji with chips 2,200; whole tilapia 600; pizza small 450, medium 750, large 1,200; kids menu from 100; fresh juices 150-200; Kenyan tea pot 150; cappuccino 200. Orders on +254 726 026 894.
Kids Park: bouncy castles, carousel, trampoline for 7 and under, go-karts, camel rides; birthday child enters free; group and school packages; team building.
Kivu Tours: wildlife safaris, cultural tours, adventure trips in safari land cruisers with pop-up roofs.
Gym: fitness classes, personal training, guest passes, 15% joining discount; free for resort guests.`;

const msgs=$("#msgs"), chat=$("#chat"), chatIn=$("#chatIn");
let history=[], sampleFn=null, busy=false;
(async()=>{ try{ if(window.claude && typeof window.claude.use==="function"){ sampleFn = await window.claude.use("sample"); } }catch(e){ sampleFn=null; } })();

function addMsg(who,text,book){
  const d=document.createElement("div"); d.className="msg "+who; d.textContent=text;
  if(book){ const b=document.createElement("button"); b.className="btn btn-wa"; b.textContent="Book on WhatsApp"; b.onclick=()=>{ openBook(); }; d.appendChild(document.createElement("br")); d.appendChild(b); }
  msgs.appendChild(d); msgs.scrollTop=msgs.scrollHeight; return d;
}
function openChat(q){
  chat.classList.remove("closed"); $("#fabs").style.visibility="hidden";
  if(!msgs.children.length) addMsg("bot","Habari! I’m the Kivu concierge. Ask me about rooms, the pools, camping, events or getting to Lake Nakuru, and I can start a booking for you on WhatsApp.");
  if(q) ask(q); else setTimeout(()=>chatIn.focus(),200);
}
function closeChat(){ chat.classList.add("closed"); $("#fabs").style.visibility="visible"; }
$("#chatClose").onclick=closeChat;
document.addEventListener("click",e=>{
  const c=e.target.closest("[data-chat]"); if(c){ e.preventDefault(); openChat(); return; }
  const a=e.target.closest("[data-chat-ask]"); if(a){ e.preventDefault(); openChat(a.dataset.chatAsk); }
});
$$("#sugs button").forEach(b=>b.onclick=()=>ask(b.textContent));
$("#chatForm").addEventListener("submit",e=>{ e.preventDefault(); const q=chatIn.value.trim(); if(q){ chatIn.value=""; ask(q); } });

function fallback(q){
  const s=q.toLowerCase(); const has=(...w)=>w.some(x=>s.includes(x));
  if(has("book","reserve","availability","available")) return "Happy to help you book. Tap the button, pick your stay and dates, and your request opens in WhatsApp for the front desk to confirm. [BOOK]";
  if(has("price","rate","cost","how much","kes","ksh","shilling","$")) return "Rates depend on the room, meal plan, dates and whether you’re a Kenyan resident, and children get reduced rates. The front desk confirms your exact rate on WhatsApp. [BOOK]";
  if(has("family","kids","child","children")) return "Families usually love the self-catering suites, or two standard rooms side by side. Children have their own shallow pool and a playground, and they get reduced rates. [BOOK]";
  if(has("camp","tent","bunk")) return "Yes! The campsite is secure and private. Bring your own tent or borrow one with bedding from us. Groups can also use the bunk rooms, and everyone gets the pools, gym and restaurant.";
  if(has("park","flamingo","rhino","game","safari","lake nakuru")) return "Lake Nakuru National Park’s main gate is a short drive away, so you can be there early. The travel desk can arrange a game drive for you.";
  if(has("pool","swim")) return "There’s a large main pool and a shallow children’s pool, both free for staying guests.";
  if(has("check in","check-in","checkin","check out","check-out","checkout","time")) return "Check in is from 1:00 pm and check out is by 10:30 am. Arriving late is fine, just let the front desk know your time.";
  if(has("breakfast","food","restaurant","eat","meal","board")) return "Breakfast is a buffet and comes with your stay. The restaurant serves local and continental dishes, and you can choose bed and breakfast, half board or full board.";
  if(has("conference","meeting","event","team","training","wedding","function")) return "We host conferences, team building on the lawns, training camps and social functions. The Events page has a quick enquiry form that sends straight to WhatsApp.";
  if(has("wifi","wi-fi","internet","parking","park my car")) return "Wi-Fi in public areas and secure parking are both free.";
  if(has("pet","dog","cat")) return "Sorry, pets aren’t allowed at the resort.";
  if(has("where","location","address","direction","get there","nairobi")) return "We’re off Flamingo Road in Nakuru, about 160 km from Nairobi, with a tuk-tuk stage nearby. The Contact page has a Google Maps link.";
  if(has("gym","fitness")) return "The gym is free for staying guests.";
  return "Good question. For anything specific, the front desk is quickest on WhatsApp at +254 726 026 894. Or ask me about rooms, pools, camping, events or the park.";
}

async function ask(q){
  if(busy) return; busy=true;
  $("#sugs").style.display="none";
  addMsg("me",q); history.push({who:"Guest",text:q});
  const bubble=addMsg("bot",""); bubble.innerHTML='<span class="typing"><span></span><span></span><span></span></span>';
  let answer="";
  if(sampleFn){
    const transcript=history.slice(-10).map(m=>m.who+": "+m.text).join("\n");
    const prompt=`You are the friendly concierge for Kivu Resort in Nakuru, Kenya, chatting on the resort website. Use only these facts:\n${FACTS}\n\nRules: reply in 1 to 3 short sentences, warm and plain, no markdown or lists. Never invent prices, room counts or policies not listed; for exact rates or availability, point to booking on WhatsApp. If the guest wants to book or asks about availability or prices, end your reply with the token [BOOK]. Reply in the guest's language.\n\nConversation:\n${transcript}\nConcierge:`;
    try{
      const r=await sampleFn(prompt,{cache:false,modelTier:"quick",onText:({text})=>{ bubble.textContent=text.replace("[BOOK]","").trim(); msgs.scrollTop=msgs.scrollHeight; }});
      answer=(r&&r.text)||"";
    }catch(e){ if(e&&e.code==="not_granted") sampleFn=null; answer=""; }
  }
  if(!answer){ await new Promise(r=>setTimeout(r,450)); answer=fallback(q); }
  const book=answer.includes("[BOOK]"); const clean=answer.replace(/\[BOOK\]/g,"").trim();
  bubble.textContent=clean;
  if(book){ const b=document.createElement("button"); b.className="btn btn-wa"; b.textContent="Book on WhatsApp"; b.onclick=()=>openBook(); bubble.appendChild(document.createElement("br")); bubble.appendChild(b); }
  history.push({who:"Concierge",text:clean});
  msgs.scrollTop=msgs.scrollHeight; busy=false;
}

addEventListener("keydown",e=>{ if(e.key==="Escape"){ closeChat(); closeSheet(); $("#lb").hidden=true; } });
route();
document.body.classList.add("ready");
