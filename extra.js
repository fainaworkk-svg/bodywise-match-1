/* ===== EXTRA FEATURES. Paste this block into app.js, just ABOVE the very last line (draw();) ===== */
(()=>{
const AR=[["body","Body"],["face","Face"],["hair","Hair"],["nutrition","Nutrition"],["intimate","Intimate care"]];
const CATS=[["all","All"],...AR],catName=c=>(AR.find(a=>a[0]===c)||[])[1]||c;
const SOCIAL=[["Instagram","https://www.instagram.com/be.bodywise/"],["Facebook","https://www.facebook.com/be.bodywise/"],["YouTube","https://www.youtube.com/channel/UCCY9YBQCGx0lVu9voSvN9lw"]];
const KEEP="Not seeing a change yet? Keep applying consistently, results take time. If there is still no change after that, or your skin feels irritated, reach out to Be Bodywise customer care.";

/* ---- saved answers: new keys ---- */
Object.assign(S.a,{areas:S.a.areas||[],hair:S.a.hair||"",diet:S.a.diet||"",life:S.a.life||""});

/* ---- concerns ---- */
const bodyC=C.slice();
const CC={body:bodyC,
face:[["f-acne","Face acne and oil control"],["f-tone","Dark spots and uneven tone"],["f-aging","Fine lines and early ageing"],["f-glow","Dull or dehydrated face"],["f-sun","Face sun protection"]],
hair:[["h-fall","Hair fall and thinning"],["h-dand","Dandruff"],["h-frizz","Frizz and dry hair"],["h-grey","Premature greying"],["h-post","Post-pregnancy hair fall"]],
nutrition:[["n-hair","Hair nutrition from within"],["n-skin","Skin nutrition and collagen"]],
intimate:[["i-hyg","Intimate hygiene"],["i-comf","Itch and discomfort"]]};
Object.values(CC).forEach(l=>l.forEach(c=>{if(!C.find(x=>x[0]===c[0]))C.push(c)}));
const allowed=()=>S.a.areas.flatMap(a=>CC[a].map(c=>c[0]));

/* ---- timelines for existing body products: [duration, how often] ---- */
const T={cer:["4-8 weeks","daily (alternate days if your skin is sensitive)"],sal:["4-8 weeks","daily (alternate days if your skin is sensitive)"],aha:["2-4 weeks","2-3 times a week at first"],milk:["1-2 weeks","daily"],roll:["4-8 weeks","daily"],u10:["1-2 weeks","daily"],u20:["1-2 weeks","daily"],heel:["1-2 weeks","nightly"],spf:["every day you step out","daily, reapplying through the day"],str:["8-12 weeks or longer","daily"]};
P.forEach(p=>{p.cat="body";const x=T[p.id];if(x){p.t=x[0];p.f=x[1]}});
P.find(p=>p.id==="spf").tnote="Sunscreen protects as soon as you apply it. It prevents tanning rather than reversing it.";

/* ---- rest of the Be Bodywise range (names from bebodywise.com; check price on the product page) ---- */
const mk=(id,name,cat,concerns,actives,t,f,o)=>P.push({id,name,price:0,url:SHOP+(cat==="hair"?"/hair":"/all-products"),list:1,cat,concerns,actives,t,f,when:"after",about:"Find the full details, ingredient list and price on the Be Bodywise product page.",use:"Follow the directions on the pack and product page.",...o});
mk("bnw","5% Niacinamide Body Wash","body",["dull"],["Niacinamide 5%"],"4-8 weeks","daily",{gentle:1,when:"shower"});
mk("bnl","10% Niacinamide Body Lotion","body",["dull"],["Niacinamide 10%"],"4-8 weeks","daily",{gentle:1,hyd:1});
mk("fw1","1% Salicylic Acid Face Wash (Foam-Based)","face",["f-acne"],["Salicylic Acid 1%"],"4-6 weeks","daily (alternate days if sensitive)",{ex:1,when:"am"});
mk("fw2","2% Salicylic Acid Face Wash","face",["f-acne"],["Salicylic Acid 2%"],"4-6 weeks","once a day to start",{ex:1,when:"am"});
mk("fs2","2% Salicylic Acid Face Serum","face",["f-acne"],["Salicylic Acid 2%"],"4-8 weeks","once a day to start",{ex:1,when:"pm"});
mk("fg2","2% Salicylic Acid Gel","face",["f-acne"],["Salicylic Acid 2%"],"4-8 weeks","daily on affected areas",{ex:1,when:"pm"});
mk("fad","Adapalene and Benzoyl Peroxide Gel","face",["f-acne"],["Adapalene","Benzoyl Peroxide"],"8-12 weeks","as directed by your doctor",{ret:1,when:"pm",n:"A stronger acne treatment. Use as directed and speak to a doctor if you are unsure."});
mk("fni","5% Niacinamide Face Serum","face",["f-tone","f-acne"],["Niacinamide 5%"],"8-12 weeks","daily",{gentle:1,when:"am"});
mk("fvc","Vitamin C Face Serum","face",["f-tone","f-glow"],["Vitamin C"],"4-8 weeks","daily in the morning",{gentle:1,when:"am"});
mk("fha","Hyaluronic Acid Face Wash","face",["f-glow"],["Hyaluronic Acid"],"1-2 weeks","daily",{gentle:1,hyd:1,when:"am"});
mk("flt","5% Lactic Acid Toner","face",["f-tone","f-glow"],["Lactic Acid 5%"],"3-4 weeks","2-3 nights a week at first",{ex:1,when:"pm"});
mk("fre","1% Retinol Liposome Night Cream","face",["f-aging"],["Retinol 1%"],"8-12 weeks","at night, 2 nights a week to start",{ret:1,when:"pm"});
mk("foc","Oil Control Moisturizer","face",["f-acne"],["Oil-control moisturiser"],"1-2 weeks","daily",{gentle:1,when:"am"});
mk("fsp","0.1% Probiotic Face Sunscreen with SPF 50","face",["f-sun"],["SPF 50"],"every day you step out","daily, reapplying through the day",{gentle:1,sun:1,when:"out",tnote:"Sunscreen protects as soon as you apply it."});
mk("fs3","SPF 30 Sunscreen","face",["f-sun"],["SPF 30"],"every day you step out","daily, reapplying through the day",{gentle:1,sun:1,when:"out",tnote:"Sunscreen protects as soon as you apply it."});
mk("frv","Skin Revitalizing Oil-in-Serum","face",["f-glow","f-aging"],["Oil-in-serum"],"4 weeks","at night",{gentle:1,hyd:1,when:"pm"});
const HN="Be Bodywise advises using its hair regimens consistently for at least 3 months.";
mk("hoi","Onion Hair Growth Oil","hair",["h-fall"],["Onion"],"3 months","regularly, as directed on the pack",{when:"hair",n:HN});
mk("hre","1% Redensyl Hair Oil","hair",["h-fall"],["Redensyl 1%"],"3 months","regularly, as directed on the pack",{when:"hair",n:HN});
mk("hda","1% Darkenyl Hair Serum","hair",["h-grey"],["Darkenyl 1%"],"3 months","regularly, as directed on the pack",{when:"hair",n:"Works gradually and results vary."});
mk("hke","Keratin Shampoo for Hair Fall","hair",["h-fall","h-frizz"],["Keratin"],"4 weeks","with each hair wash",{hyd:1,when:"hair"});
mk("hst","Hair Strengthening Serum (100ml)","hair",["h-frizz","h-fall"],["Hair serum"],"2-4 weeks","after washing",{hyd:1,when:"hair"});
mk("hag","Advanced Hair Growth Serum Roll-On (25ml)","hair",["h-fall"],["Aminexil","Redensyl","Anagain","Rosemary","Procapil"],"6-12 weeks","daily, as directed",{when:"hair",n:"Be Bodywise reports reduced hair fall at around 6 weeks. "+HN});
mk("hgp","Hair Growth Pack","hair",["h-fall"],["Hair growth kit"],"3 months","as directed in the pack",{when:"hair",n:HN});
mk("hpp","Hair Growth Pack for Postpartum","hair",["h-post","h-fall"],["Hair care kit"],"3 months","as directed in the pack",{when:"hair",n:HN});
mk("hk1","Hair Fall Control Starter Pack","hair",["h-fall","h-frizz"],["Hair care kit"],"3 months","as directed in the pack",{when:"hair",n:HN});
mk("hk2","Anti-Dandruff and Hair Fall Kit","hair",["h-dand","h-fall"],["Hair care kit"],"4-8 weeks","as directed in the pack",{when:"hair"});
mk("hk3","Expert Dandruff and Hair Fall Kit","hair",["h-dand","h-fall"],["Hair care kit"],"4-8 weeks","as directed in the pack",{when:"hair"});
mk("hk4","Water Softening and Hair Fall Kit","hair",["h-fall"],["Hair care kit"],"4-8 weeks","as directed in the pack",{when:"hair"});
const NN="Supplements work from within, so change is gradual. Pair with a balanced diet.";
mk("nbi","Biotin Hair Gummies (packs of 30, 60, 90, 120)","nutrition",["n-hair","h-fall"],["Biotin","Zinc","Iron","Vitamins A, C, E, D2, B12"],"90-120 days","1 daily",{when:"in",n:"Be Bodywise describes visible hair density improvement in about 90 to 120 days. "+NN});
mk("npp","Hair Gummies for Post-Pregnancy Hair Fall (30)","nutrition",["h-post","n-hair"],["Hair nutrition gummy"],"90-120 days","1 daily",{when:"in",n:NN});
mk("nhh","Hair Health Gummies","nutrition",["n-hair"],["Hair nutrition gummy"],"90-120 days","1 daily",{when:"in",n:NN});
mk("nsk","Skin Health Gummies","nutrition",["n-skin"],["Skin nutrition gummy"],"8-12 weeks","1 daily",{when:"in",n:NN});
mk("ncg","Collagen Skin Gummies","nutrition",["n-skin"],["Collagen"],"8-12 weeks","daily",{when:"in",n:NN});
mk("ncp","Collagen Powder","nutrition",["n-skin"],["Collagen"],"8-12 weeks","daily",{when:"in",n:NN});
mk("iwa","Intimate Wash","intimate",["i-hyg"],["Intimate wash"],"from first use","daily, as directed",{gentle:1,when:"int"});
mk("ise","Intimate Care Serum","intimate",["i-hyg","i-comf"],["Intimate serum"],"from first use","as directed",{gentle:1,when:"int"});
mk("ipo","Clotrimazole Intimate Powder","intimate",["i-comf"],["Clotrimazole"],"as per pack directions","as directed",{when:"int",n:"Contains an antifungal. If itching or discomfort does not settle, speak to a doctor."});
P.forEach(p=>{if(p.sun===undefined&&p.id==="spf")p.sun=1});
SLOTS.push(["am","Face, morning"],["pm","Face, night"],["hair","Hair care"],["in","Nutrition (daily)"],["int","Intimate care"]);

/* ---- quiz ---- */
Q.length=0;
const has=a=>S.a.areas.includes(a);
Q.push(
{id:"areas",t:"Which areas are you shopping for?",multi:1,o:AR},
{id:"concerns",t:"What would you like help with?",multi:1,o:()=>S.a.areas.map(a=>[catName(a),CC[a]])},
{id:"skin",t:"What is your skin type?",o:[["oily","Oily"],["dry","Dry"],["combination","Combination"],["normal","Normal"]]},
{id:"sens",t:"How sensitive is your skin?",o:[["very","Very sensitive"],["some","Sometimes reacts"],["no","Not sensitive"]]},
{id:"acids",t:"Do you already use exfoliating acids (salicylic, AHA, BHA, glycolic) or retinol?",o:[["yes","Yes"],["no","No"],["unsure","Not sure"]]},
{id:"hair",t:"How would you describe your hair and scalp?",if:()=>has("hair"),o:[["dry","Dry or frizzy"],["oily","Oily scalp"],["normal","Normal"]]},
{id:"diet",t:"Any food preference? (helps with supplements)",if:()=>has("nutrition"),o:[["any","No preference"],["veg","Vegetarian"],["vegan","Vegan"],["nonveg","Non-vegetarian"]]},
{id:"life",t:"How are your sleep and stress these days?",if:()=>has("nutrition")||has("hair"),o:[["good","Pretty good"],["poor","Poor sleep or high stress"],["both","Both are a struggle"]]},
{id:"n",t:"How many products do you want to start with?",o:[["2","1 or 2"],["3","About 3"],["5","Show me more"],["8","Show me everything"]]});
const QS=()=>Q.filter(q=>!q.if||q.if());
PAGES.quiz=()=>{const L=QS(),q=L[S.step],val=S.a[q.id],good=q.multi?val.length>0:!!val;
const opt=o=>`<button class="chip ${(q.multi?val.includes(o[0]):val===o[0])?"on":""}" data-a="pick" data-v="${o[0]}">${o[1]}</button>`;
const body=typeof q.o==="function"?q.o().map(g=>`<h4>${g[0]}</h4><div class="opts" style="margin:6px 0 14px">${g[1].map(opt).join("")}</div>`).join(""):`<div class="opts">${q.o.map(opt).join("")}</div>`;
return`<div class="q"><div class="qb"><i style="width:${(S.step+1)/L.length*100}%"></i></div><p class="sm">Question ${S.step+1} of ${L.length}</p><h2 style="margin-top:4px">${q.t}</h2>${q.multi?'<p class="sm">Pick as many as you like.</p>':""}${body}<div class="nav"><button class="btn g" data-a="back">Back</button><button class="btn p" data-a="next" ${good?"":"disabled"}>${S.step===L.length-1?"See my matches":"Next"}</button></div></div>`};
document.addEventListener("click",e=>{const b=e.target.closest("[data-a]");if(!b)return;const k=b.dataset.a,v=b.dataset.v;
if(k==="cat"){S.cat=v;S.lim=12}else if(k==="more")S.lim+=12;
if(pg!=="quiz"||!["pick","next","back"].includes(k))return;
e.stopImmediatePropagation();const L=QS(),q=L[S.step],a=S.a;
if(k==="pick"){if(q.multi)a[q.id]=a[q.id].includes(v)?a[q.id].filter(x=>x!==v):[...a[q.id],v];else a[q.id]=v}
else if(k==="next"){if(q.id==="areas")a.concerns=a.concerns.filter(c=>allowed().includes(c));if(S.step>=L.length-1){save();location.href="matches.html";return}S.step++}
else if(k==="back"){if(S.step===0){location.href="index.html";return}S.step--}
save();draw();window.scrollTo(0,0)},true);

/* ---- matching extras ---- */
const r0=rank;rank=()=>r0().map(p=>{const a=S.a;let s=p.s;const why=[...p.why],warn=[...p.warn];
if(p.cat==="hair"&&a.hair==="dry"&&p.hyd){s+=2;why.push("Hydrating, which suits dry hair")}
if(p.cat==="nutrition"&&(a.diet==="veg"||a.diet==="vegan"))warn.push("You prefer "+(a.diet==="vegan"?"vegan":"vegetarian")+" food, so confirm the ingredients on the product page.");
return{...p,s,why,warn}}).sort((x,y)=>y.s-x.s);
const c0=compat;compat=L=>{let n=c0(L);const ret=L.filter(p=>p.ret),ex=L.filter(p=>p.ex);
if(L.some(p=>p.sun))n=n.filter(x=>!/sunscreen before going out/.test(x[1]));
if(ret.length&&ex.length)n=[["warn","A retinoid and exfoliating acids can irritate together. Use them on different nights."],...n.filter(x=>x[0]!=="ok")];
if(ret.length&&!L.some(p=>p.sun))n.push(["tip","Retinoids make skin more sun-sensitive. Use a sunscreen every morning."]);
return n};
const o0=offers;offers=res=>{const x=[],a=S.a;
if(a.concerns.some(c=>c.startsWith("h-")))x.push(["Hair kits and packs","Be Bodywise bundles hair products into kits. Check the hair page for current kits and prices. It also offers a free online doctor consultation for hair concerns.",SHOP+"/hair"]);
if(a.concerns.some(c=>c.startsWith("n-")))x.push(["Gummy multi-packs","Biotin gummies come in 30, 60, 90 and 120 count packs. Results take about 90 to 120 days, so a longer pack suits a full course.",SHOP+"/all-products"]);
return[...x,...o0(res)]};

/* ---- search, filter and display helpers ---- */
S.q=qs.get("q")||"";S.cat="all";S.lim=12;
const find=()=>{const t=S.q.toLowerCase().trim();return P.filter(p=>(S.cat==="all"||p.cat===S.cat)&&(!t||(p.name+" "+p.actives.join(" ")+" "+p.concerns.map(lab).join(" ")+" "+catName(p.cat)).toLowerCase().includes(t)))};
const pr=p=>p.price?"₹"+p.price:"Price on Be Bodywise";
const tl=p=>p.t?`<p class="sm" style="margin:6px 0">⏱ Apply ${p.f||"regularly"} for about <b>${p.t}</b> for visible change.</p>`:"";
const PM=()=>pg==="compatibility"?"cmp":"sel";
const pk=()=>find().slice(0,60).map(x=>`<button class="chip ${(PM()==="cmp"?cmp.includes(x.id):x.id===cur)?"on":""}" data-a="${PM()}" data-v="${x.id}">${x.name}</button>`).join("")||'<p class="sm">No match. Try another word.</p>';
const bar=()=>`<input class="sbox" id="${pg==="catalogue"?"sq":"pq"}" placeholder="Search by product, ingredient or concern" value="${S.q.replace(/"/g,"")}" autocomplete="off"><div class="opts" style="margin:8px 0 6px">${CATS.map(c=>`<button class="chip ${S.cat===c[0]?"on":""}" data-a="cat" data-v="${c[0]}">${c[1]}</button>`).join("")}</div>`;
const cards=L=>(L.slice(0,S.lim).map(p=>`<div class="card"><h3>${p.name}</h3><div class="sm">${pr(p)} · ${catName(p.cat)}</div><p style="margin:8px 0">${p.concerns.map(c=>`<span class="tag">${lab(c)}</span>`).join("")}</p>${tl(p)}<div class="row"><a class="btn g" href="ingredients.html?id=${p.id}">Details</a><button class="btn p" data-a="tog" data-v="${p.id}">${inR(p.id)?"✓ In routine":"Add to routine"}</button></div></div>`).join("")+(L.length>S.lim?`<div class="row"><button class="btn g" data-a="more">Show more (${L.length-S.lim} left)</button></div>`:""))||'<p class="sm">No products match. Try another word.</p>';
document.addEventListener("input",e=>{const i=e.target.id;if(i==="sq"){S.q=e.target.value;S.lim=12;$("#cl").innerHTML=cards(find())}if(i==="pq"){S.q=e.target.value;$("#pk").innerHTML=pk()}});
document.addEventListener("keydown",e=>{if(e.target.id==="ts"&&e.key==="Enter")location.href="catalogue.html?q="+encodeURIComponent(e.target.value)});

/* ---- page upgrades ---- */
const m0=PAGES.matches;
PAGES.matches=()=>{if(!ok())return m0();const r=R(),poor=A.life&&A.life!=="good";
return`<div>${tags()}</div><details class="how" style="margin-top:12px"><summary>How were these ranked?</summary><p>Each product earns points for every concern it targets. It gains points if it suits your skin or hair type, and loses points if it is an exfoliating acid and your skin is sensitive or you already use acids. We show the top few and tell you why.</p></details>${r.map(p=>card(p).replace("₹0<","Price on Be Bodywise<").replace('<div class="row">',tl(p)+'<div class="row">')).join("")}${poor?'<div class="note">Sleep, stress and food can affect hair and skin too. Be Bodywise also has a Health and Fitness range, and doctors you can consult, if you want more support.</div>':""}<div class="note ok">${KEEP}</div><div class="row"><a class="btn p" href="routine.html">Go to my routine</a><a class="btn g" href="quiz.html">Retake the quiz</a><a class="btn g" href="catalogue.html">Browse every product</a></div>`};
const i0=PAGES.ingredients;
PAGES.ingredients=()=>{let h=i0();const p=P.find(x=>x.id===cur)||P[0];
h=h.replace(/<div class="opts">[\s\S]*?<\/div>/,()=>bar()+`<div class="pkbox" id="pk">${pk()}</div>`).replace("₹0<","Price on Be Bodywise<");
const sec=p.t?`<div class="sec"><h4>When to expect results</h4><p>Apply ${p.f} for about <b>${p.t}</b>.</p>${p.tnote?`<p class="sm">${p.tnote}</p>`:""}${p.n?`<p class="sm">${p.n}</p>`:""}<p class="sm">${KEEP}</p><p class="sm">Timelines are typical guidance, not a guarantee. Results vary from person to person.</p><div class="row"><a class="btn g" href="care.html">Customer care</a></div></div>`:"";
return h.replace('<div class="sec"><h4>How to use</h4>',sec+'<div class="sec"><h4>How to use</h4>')};
const c1=PAGES.compatibility;
PAGES.compatibility=()=>c1().replace(/<div class="opts">[\s\S]*?<\/div>/,()=>bar()+`<div class="pkbox" id="pk">${pk()}</div>`);
PAGES.catalogue=()=>`<p class="sm">Every Be Bodywise product we cover, grouped by area. Prices and full ingredient lists are on each product page. The Health and Fitness range (sleep, stress, muscle strength) is on bebodywise.com.</p>${bar()}<div id="cl">${cards(find())}</div><p class="sm" style="margin-top:14px">Be Bodywise adds products often. See the full live range on <a href="${SHOP}/all-products" target="_blank" rel="noopener">bebodywise.com</a>.</p>`;
const soc=()=>SOCIAL.map(s=>`<a class="btn g" href="${s[1]}" target="_blank" rel="noopener">${s[0]}</a>`).join(" ");
PAGES.care=()=>`<div class="hero"><span class="eyebrow">Customer care</span><h1>We are here to help.</h1><p>Questions about an order, a product or your results? Talk to the Be Bodywise team.</p><a class="btn l" href="tel:+918128688128">Call 8128 68 8128</a> <a class="btn gl" href="https://wa.me/918655758196" target="_blank" rel="noopener">WhatsApp us</a></div>
<h2>Reach the team</h2><div class="grid"><div class="card"><h3>Phone</h3><p class="sm">8128 68 8128, Mon to Sat, 9am to 6pm. Press 1 for doctor queries, 2 for orders, 3 for refunds.</p></div><div class="card"><h3>WhatsApp</h3><p class="sm">86557 58196</p></div><div class="card"><h3>Email</h3><p class="sm"><a href="mailto:support@bebodywise.com">support@bebodywise.com</a> for general help.<br><a href="mailto:doctor@bebodywise.com">doctor@bebodywise.com</a> for doctor appointments.</p></div></div>
<h2>Not seeing results yet?</h2><div class="card"><p>${KEEP}</p></div>
<h2>Orders and exchanges</h2><div class="card"><p class="sm">Orders can be cancelled before delivery, and exchange requests can be made within 7 days of delivery. Contact customer care for any query or complaint.</p></div>
<h2>Follow Be Bodywise</h2><div class="row" style="margin-top:0">${soc()}<a class="btn p" href="${SHOP}" target="_blank" rel="noopener">Visit bebodywise.com</a></div>
<p class="sm" style="margin-top:14px">Contact details come from public listings. Please confirm them on bebodywise.com before relying on them.</p>`;

/* ---- NAV, logo, search bar, footer ---- */
NAV.push(["catalogue","Catalogue","Every Be Bodywise product","▦","Explore"],["care","Customer care","Help and social","☎","Support"]);
const lg=(f,t)=>`<img class="lg" src="assets/${f}" alt="${t}" onerror="this.outerHTML='<span>${t}</span>'">`;
draw=function(){const i=NAV.findIndex(n=>n[0]===pg),n0=NAV[i],step=i<7?`Step ${i+1} of 7`:(n0[4]||"Research");
document.title=n0[1]+" | Be Bodywise Match";
let pgHtml=PAGES[pg]().replace("5-question","short");
if(pg==="routine"||pg==="index")pgHtml+='<p class="sm" style="margin-top:12px">Totals include only products with a listed price. Check others on Be Bodywise.</p>';
$("#root").innerHTML=`<div class="app"><aside class="side"><a class="logo" href="index.html">${lg("bebodywise-logo.png","Be Bodywise")}<b> match</b></a>${NAV.map((n,j)=>`<a class="nv ${n[0]===pg?"on":""}" href="${n[0]}.html"><i>${j<7?j+1:(n[3]||"?")}</i><span>${n[1]}<small>${n[2]}</small></span></a>`).join("")}<div class="sf">Your answers stay in your browser. Student concept, not medical advice.<div class="mz">Part of ${lg("mosaic-logo.png","Mosaic Wellness")}</div></div></aside><div class="main"><header class="bar"><button class="menu" data-a="menu" aria-label="Menu">☰</button><h1>${n0[1]}</h1><input class="tsearch" id="ts" placeholder="Search products" autocomplete="off"><span class="st">${step}</span></header><div class="prog"><i style="width:${i<7?(i+1)/7*100:100}%"></i></div><section class="page">${pgHtml}</section><footer>Built with Claude for a Mosaic Fellowship application, based on five customer conversations. An independent student concept, not affiliated with Be Bodywise. Product details and prices come from bebodywise.com.<div class="fl"><a href="care.html">Customer care</a><a href="tel:+918128688128">8128 68 8128</a><a href="https://wa.me/918655758196" target="_blank" rel="noopener">WhatsApp</a>${SOCIAL.map(s=>`<a href="${s[1]}" target="_blank" rel="noopener">${s[0]}</a>`).join("")}</div></footer></div></div>`};
})();
