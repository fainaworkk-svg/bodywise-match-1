/* Be Bodywise add-on layer for Bodywise Match.
   Load AFTER core.js and app.js. It only adds things; it never edits your files. */
(function () {
  'use strict';

  var BASE = 'https://bebodywise.com';
  var LOGO = BASE + '/'.replace('/', '') + ''; // placeholder, replaced below
  LOGO = 'https://i.mscwlns.co/media/misc/others/BB%20logo%20black_ciw2ao.png?tr=w-200,c-at_max';
  // Optional: save a Mosaic Wellness logo in your project and put its path here, e.g. '/mosaic-logo.png'
  var MOSAIC_LOGO = '';

  var LINKS = {
    contact: BASE + '/contactus', faq: BASE + '/faq', refunds: BASE + '/refunds-policy',
    shop: BASE + '/shop/all',
    ig: 'https://www.instagram.com/be.bodywise/',
    fb: 'https://www.facebook.com/be.bodywise/',
    yt: 'https://www.youtube.com/channel/UCCY9YBQCGx0lVu9voSvN9lw',
    wa: 'https://wa.me/918655758196', tel: 'tel:+918128688128'
  };

  /* ---------- Timelines. Only these three were verified on the product pages. ---------- */
  var TL = {
    serum: 'Massage over the scalp for 2 minutes, twice daily, and keep going for 3 months. Baby hair is typically seen around month 2, a visible drop in thinning by month 3, and more volume from month 4 onwards. Apply to the scalp, not the strands.',
    gum: 'Take 1 gummy daily after any meal. Follow a 3 month routine: you will not see results in just 1 month. Visible gain in strength around month 3, better strength and texture by month 4, and support continues from month 6 onwards.',
    uarm: 'Apply to clean underarm skin and let it dry, daily (up to twice a day). Expect to start noticing a change within about 3 months, depending on the condition. Patch test first, and wait 6 to 12 hours after waxing.'
  };
  var GENERIC = 'Use it as directed on the pack, regularly. We could not verify a fixed timeline for this one, so check its product page for the exact routine.';
  var KEEP = 'Not seeing results yet? Keep applying consistently, and reach out to Be Bodywise customer care.';

  /* ---------- Catalogue: [name, category, concern tags, product slug, "for" text, timeline key, soldOut] ---------- */
  var P = [
    // Hair
    ['Biotin Hair Gummies (30)', 'Hair', 'hairfall', 'hair-health-gummies', 'Stage 1 hair loss', 'gum'],
    ['Biotin Hair Gummies (120)', 'Hair', 'hairfall', 'biotin-hair-gummies-120', 'Stage 1 hair loss', 'gum'],
    ['Hair Gummies for Post-Pregnancy Hair Fall (30)', 'Hair', 'postpreg hairfall', 'biotin-hair-gummies-breastfeeding-moms-30n-xp', 'Post-pregnancy hair fall'],
    ['Advanced Hair Growth Serum Roll On (25 ml)', 'Hair', 'thinning', 'hair-growth-serum-roll-on', 'Hair thinning', 'serum'],
    ['Advanced Hair Growth Serum (50 ml)', 'Hair', 'thinning', 'advanced-hair-growth-serum', 'Stage 2 hair loss', 'serum'],
    ['Advanced Hair Growth Pack with Roll On', 'Kits', 'hairfall thinning', 'hair-growth-pack-rosemary-roll-on-xp-2', 'Hair fall + thinning (kit of 2)'],
    ['Folli Advanced+ Hair Growth Serum Roll On', 'Hair', 'thinning', 'folli-advanced-plus-hair-growth-serum', 'Hair thinning'],
    ['Hair Growth Serum Spray (30 ml)', 'Hair', 'thinning', 'hair-growth-serum-spray', 'Mess-free application'],
    ['Scalp Massager', 'Hair', 'thinning', 'scalp-massager', 'Hair growth support'],
    ['1% ZPTO Anti-Dandruff Shampoo (200 ml)', 'Hair', 'dandruff', '1-zpto-anti-dandruff-shampoo', 'Dandruff & dryness'],
    ['1% Ketoconazole Anti-Dandruff Shampoo (250 ml)', 'Hair', 'dandruff', '1-ketoconazole-dandruff-shampoo-250ml', 'Dandruff control'],
    ['Anti-Dandruff Serum (50 ml)', 'Hair', 'dandruff', 'anti-dandruff-serum', 'Dandruff & inflammation'],
    ['Keratin Shampoo for Hair Fall (200 ml)', 'Hair', 'hairfall frizz', 'hair-fall-control-shampoo', 'Dry & frizzy hair'],
    ['Keratin Conditioner (200 ml)', 'Hair', 'frizz', 'deep-moisturizing-conditioner', 'Dry & frizzy hair'],
    ['Frizz Control and Damage Repair Hair Serum (100 ml)', 'Hair', 'frizz', 'anti-frizz-serum', 'Frizzy, unruly hair'],
    ['Hair Strengthening Serum (100 ml)', 'Hair', 'frizz', 'hair-strengthening-serum', 'Frizzy, unruly hair'],
    // Body
    ['1% Salicylic Ceramide Body Wash (250 ml)', 'Body', 'bodyacne', 'salicylic-ceramide-bodywash', 'Exfoliation & barrier care'],
    ['1% Salicylic Acid Body Wash (375 ml)', 'Body', 'bodyacne', '1-salicylic-acid-body-wash-350ml', 'Body acne & bumps'],
    ['5% AHA BHA Exfoliating Body Wash (700 ml)', 'Body', 'tan bodyacne', '5-aha-bha-bodywash-700ml', 'Exfoliation & de-tan'],
    ['Triple Milk Deep Hydrating Body Wash', 'Body', 'tan dry', 'triple-milk-deep-hydrating-bodywash-xp', 'Exfoliation & de-tan'],
    ['10% AHA Body Scrub (200 g)', 'Body', 'tan bodyacne', '', 'Exfoliation & strawberry legs'],
    ['6% AHA BHA Underarm Roll On (75 ml, Flora)', 'Body', 'underarm', '6-aha-bha-underarm-roll-on-flora-75ml', 'Underarm odour & pigmentation', 'uarm'],
    ['6% AHA BHA Underarm Roll On (75 ml, Aqua)', 'Body', 'underarm', '6-aha-bha-underarm-roll-on-aqua-75ml', 'Underarm odour & pigmentation', 'uarm'],
    ['4% AHA BHA Underarm Roll On (75 ml)', 'Body', 'underarm', '4-aha-bha-underarm-rollon-75', 'Odour & mild pigmentation', 'uarm'],
    ['Advanced Underarm Pigmentation Kit', 'Kits', 'underarm', 'advanced-underarm-pigmentation-kit', 'Odour & severe pigmentation'],
    ['10% Urea Body Lotion (200 ml)', 'Body', 'dry', '10-urea-lotion', 'Very dry & flaky skin'],
    ['10% Urea Body Lotion (300 ml)', 'Body', 'dry', '10-urea-lotion-300ml', 'Mild to moderate dry skin'],
    ['20% Urea Lotion (300 ml)', 'Body', 'dry', '20-urea-lotion-xp', 'Very dry & flaky skin'],
    ['20% Urea Foot Roll On (50 ml)', 'Body', 'dry', '20-urea-roll-on-50ml', 'Cracked & rough heels'],
    ['20% Urea Foot Roll On (75 ml)', 'Body', 'dry', '20-urea-roll-on-75ml', 'Cracked & rough heels'],
    ['Urea Heel & Skin Repair Kit', 'Kits', 'dry', 'advanced-urea-skin-heel-repair-kit-50ml', 'Very dry skin & cracked heels'],
    ['Daily Hydration Kit', 'Kits', 'dry', 'daily-hydration-kit', 'Very dry skin & cracked heels'],
    ['Anti-Stretch Mark Serum Roll On (50 ml)', 'Body', 'stretch', 'anti-stretch-mark-roll-on', 'Stretch marks'],
    ['10% Magnesium Body Lotion (300 ml)', 'Body', 'soreness', '10-magnesium-lotion-300ml', 'Muscle soreness & cramps'],
    // Sun
    ['De-Tan SPF 50+ Body Sunscreen Lotion (175 ml)', 'Sun', 'sun tan', 'body-sunscreen-lotion-with-spf-50', 'De-tan & sun protection'],
    ['Ultra Light Sunscreen SPF 50+ (50 ml)', 'Sun', 'sun', 'ultra-light-sunscreen-spf50', 'Broad-spectrum protection (face)'],
    ['Sun Care Duo for Face and Body', 'Kits', 'sun tan', 'sun-care-duo-head-to-toe', 'De-tan & sun protection (kit of 2)'],
    ['De-Tan Kit', 'Kits', 'tan sun', 'body-de-tan-kit', 'De-tan & sun protection'],
    // Face
    ['2% Salicylic Acid Face Wash (100 ml)', 'Face', 'facialacne', '2-salicylic-acid-face-wash', 'Mild occasional acne'],
    ['1% Salicylic Acid Face Wash, Foam (120 ml)', 'Face', 'facialacne', 'acne-control-wash', 'Mild occasional acne'],
    ['Hydrocolloid Acne Pimple Patch (24)', 'Face', 'facialacne', 'hydrocolloid-acne-pimple-patch', 'Acne-prone skin'],
    ['1% Peptide & Ceramide Moisturizer (50 g)', 'Face', 'aging', '1-peptide-ceramide-moisturizer', 'Repairing the skin barrier'],
    ['2% Bio Retinol Under Eye Cream', 'Face', 'aging', '', 'Dark circles & wrinkles'],
    ['Ice Roller', 'Face', 'aging', 'ice-roller', 'Reducing puffiness', '', 1],
    // Nutrition
    ['Collagen Builder Gummies (60)', 'Nutrition', 'aging glow', 'collagen-skin-gummies', 'Fine lines & hydration'],
    ['Glutathione Gummies (60)', 'Nutrition', 'glow', 'glutathione-gummies-60', 'Glowing, nourished skin', '', 1],
    ['Multivitamin Gummies (60)', 'Nutrition', 'nutri', 'multivitamin-gummies', 'Energy & immunity'],
    ['5-in-1 Magnesium Gummies with Glycinate & D3 (60)', 'Nutrition', 'sleep', 'magnesium-glycinate-gummies-60n', 'Regulating the sleep cycle'],
    ['Calcium Gummies (30)', 'Nutrition', 'bones', 'calcium-gummies', 'Bones & joint health']
  ].map(function (a) {
    return { n: a[0], c: a[1], k: a[2], s: a[3], f: a[4], t: a[5] || '', so: !!a[6] };
  });
  var CATS = ['All', 'Hair', 'Body', 'Face', 'Sun', 'Nutrition', 'Kits'];

  /* ---------- helpers ---------- */
  function esc(s) { return String(s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function url(p) { return p.s ? BASE + '/product/' + p.s : LINKS.shop; }
  function $(id) { return document.getElementById(id); }
  function el(tag, id, html) { var e = document.createElement(tag); if (id) e.id = id; if (html) e.innerHTML = html; return e; }

  /* ---------- 1. Brand name: Bodywise -> Be Bodywise ---------- */
  function rename() {
    var w = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null), n, bad = /^(SCRIPT|STYLE|TEXTAREA|NOSCRIPT)$/;
    while ((n = w.nextNode())) {
      if (bad.test(n.parentNode.nodeName)) continue;
      var v = n.nodeValue.replace(/(\bBe\s+)?\bBodywise\b/g, function (m, p) { return p ? m : 'Be Bodywise'; });
      if (v !== n.nodeValue) n.nodeValue = v;
    }
    document.title = document.title.replace(/(\bBe\s+)?\bBodywise\b/g, function (m, p) { return p ? m : 'Be Bodywise'; });
  }

  /* ---------- 2. Logo bar + search ---------- */
  function buildBar() {
    var bar = el('header', 'bb-bar',
      '<a href="' + BASE + '" target="_blank" rel="noopener" aria-label="Be Bodywise"><img src="' + LOGO + '" alt="Be Bodywise" onerror="this.outerHTML=\'<b>Be Bodywise</b>\'"></a>' +
      '<div id="bb-s"><input type="search" placeholder="Search products or concerns, e.g. hair fall, underarm" aria-label="Search Be Bodywise products" autocomplete="off"><div id="bb-pop"></div></div>' +
      '<a id="bb-help" href="#bb-care">Need help?</a>');
    document.body.insertBefore(bar, document.body.firstChild);
    var input = bar.querySelector('input'), pop = $('bb-pop'), cat = 'All';

    function render() {
      var q = input.value.trim().toLowerCase(), words = q.split(/\s+/).filter(Boolean);
      var list = P.filter(function (p) {
        if (cat !== 'All' && p.c !== cat) return false;
        var hay = (p.n + ' ' + p.c + ' ' + p.f + ' ' + p.k).toLowerCase();
        return words.every(function (w) { return hay.indexOf(w) > -1; });
      });
      var chips = CATS.map(function (c) { return '<button type="button" class="bb-chip' + (c === cat ? ' on' : '') + '" data-c="' + c + '">' + c + '</button>'; }).join('');
      var rows = list.length ? list.map(function (p) {
        return '<button type="button" class="bb-row" data-i="' + P.indexOf(p) + '"><b>' + esc(p.n) + '</b><span>' + esc(p.c) + ' · ' + esc(p.f) + (p.so ? ' · sold out when checked' : '') + '</span></button>';
      }).join('') : '<div class="bb-empty">No match. Try a concern like "dandruff" or "dry skin".</div>';
      pop.innerHTML = '<div class="bb-chips">' + chips + '</div>' + rows;
      pop.classList.add('on');
    }
    input.addEventListener('focus', render);
    input.addEventListener('input', render);
    pop.addEventListener('click', function (e) {
      var c = e.target.closest('.bb-chip'), r = e.target.closest('.bb-row');
      if (c) { cat = c.getAttribute('data-c'); render(); input.focus(); }
      if (r) { openDrawer(P[+r.getAttribute('data-i')]); pop.classList.remove('on'); }
    });
    document.addEventListener('click', function (e) { if (!$('bb-s').contains(e.target)) pop.classList.remove('on'); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') { pop.classList.remove('on'); closeDrawer(); } });
  }

  /* ---------- 3. Product drawer with how-to-use + timeline ---------- */
  function drawerHTML(p) {
    var how = p.t ? TL[p.t] : GENERIC;
    var patch = /AHA|BHA|Salicylic|Retinol|Urea/i.test(p.n) ? '<p class="bb-note">Patch test on a small area first, and avoid broken or irritated skin.</p>' : '';
    return '<div class="bb-card"><h3>' + esc(p.n) + '</h3><div class="bb-tag">' + esc(p.c) + ' · ' + esc(p.f) + '</div>' +
      '<h4>How to use and when to expect results</h4><p>' + esc(how) + '</p>' + patch +
      '<h4>If you do not see results</h4><p>' + esc(KEEP) + '</p>' +
      '<p class="bb-note">Pregnant, breastfeeding or on prescribed treatment? Check with your doctor before starting anything new.</p>' +
      '<a class="bb-btn" href="' + url(p) + '" target="_blank" rel="noopener">View on Be Bodywise</a>' +
      '<a class="bb-btn alt" href="#bb-care" data-close="1">Contact care</a>' +
      '<button class="bb-btn alt" type="button" data-close="1">Close</button></div>';
  }
  function openDrawer(p) {
    var d = $('bb-dr');
    if (!d) { d = el('div', 'bb-dr'); document.body.appendChild(d); d.addEventListener('click', function (e) { if (e.target === d || e.target.getAttribute('data-close')) closeDrawer(); }); }
    d.innerHTML = drawerHTML(p); d.classList.add('on');
  }
  function closeDrawer() { var d = $('bb-dr'); if (d) d.classList.remove('on'); }

  /* ---------- 4. Customer care + social ---------- */
  function buildCare() {
    var mosaic = MOSAIC_LOGO ? '<img src="' + MOSAIC_LOGO + '" alt="Mosaic Wellness">' : '';
    var s = el('section', 'bb-care',
      '<div class="bb-box"><h2>Customer care</h2>' +
      '<p class="bb-sub">Results take time. If you have followed the routine and still see no change, keep applying consistently and reach out. The Be Bodywise team can help.</p>' +
      '<div class="bb-grid">' +
      '<a href="' + LINKS.contact + '" target="_blank" rel="noopener"><b>Contact Be Bodywise</b><span>Official customer care page</span></a>' +
      '<a href="' + LINKS.wa + '" target="_blank" rel="noopener"><b>WhatsApp</b><span>86557 58196</span></a>' +
      '<a href="' + LINKS.tel + '"><b>Call</b><span>8128 68 8128, Mon to Sat, 9am to 6pm</span></a>' +
      '<a href="' + LINKS.faq + '" target="_blank" rel="noopener"><b>FAQs</b><span>Usage and product questions</span></a>' +
      '<a href="' + LINKS.refunds + '" target="_blank" rel="noopener"><b>Returns and refunds</b><span>Policy and requests</span></a>' +
      '</div>' +
      '<h2 style="margin-top:22px">Follow Be Bodywise</h2>' +
      '<div class="bb-grid">' +
      '<a href="' + LINKS.ig + '" target="_blank" rel="noopener"><b>Instagram</b><span>@be.bodywise</span></a>' +
      '<a href="' + LINKS.fb + '" target="_blank" rel="noopener"><b>Facebook</b><span>be.bodywise</span></a>' +
      '<a href="' + LINKS.yt + '" target="_blank" rel="noopener"><b>YouTube</b><span>Be Bodywise channel</span></a>' +
      '</div>' +
      '<div class="bb-foot"><img src="' + LOGO + '" alt="Be Bodywise" onerror="this.style.display=\'none\'">' + mosaic + '<span>Be Bodywise is a Mosaic Wellness brand. This is an independent matching tool.</span></div></div>');
    document.body.appendChild(s);
  }

  /* ---------- 5. Extra quiz questions (quiz page only) ---------- */
  var Q = {
    area: ['Hair', 'Body', 'Face', 'Sun', 'Nutrition'],
    concern: {
      Hair: [['hairfall', 'Hair fall'], ['thinning', 'Thinning / slow growth'], ['dandruff', 'Dandruff'], ['frizz', 'Dry or frizzy hair'], ['postpreg', 'Post-pregnancy hair fall']],
      Body: [['underarm', 'Underarm odour or darkness'], ['bodyacne', 'Body acne or bumps'], ['dry', 'Dry skin or cracked heels'], ['tan', 'Tan or dull skin'], ['stretch', 'Stretch marks'], ['soreness', 'Muscle soreness']],
      Face: [['facialacne', 'Acne'], ['aging', 'Fine lines or dark circles'], ['glow', 'Dullness / glow']],
      Sun: [['sun', 'Sun protection or tan']],
      Nutrition: [['nutri', 'Energy and immunity'], ['sleep', 'Sleep and stress'], ['bones', 'Bones and joints'], ['glow', 'Skin glow']]
    },
    sev: [['mild', 'Mild'], ['mod', 'Moderate'], ['sev', 'Severe, or a few problems together']],
    safe: [['none', 'None of these'], ['preg', 'Pregnant or breastfeeding'], ['sens', 'Sensitive skin or allergies'], ['rx', 'On prescribed treatment']],
    fmt: [['any', 'No preference'], ['gummies', 'Gummies'], ['roll', 'Roll-on'], ['wash', 'Wash'], ['lotion', 'Lotion'], ['serum', 'Serum']],
    rut: [['daily', 'Daily, no problem'], ['alt', 'Alternate days is more realistic']]
  };
  var st = {};
  try { st = JSON.parse(localStorage.getItem('bb_extra') || '{}'); } catch (e) { st = {}; }
  function save() { try { localStorage.setItem('bb_extra', JSON.stringify(st)); } catch (e) {} }

  function opts(name, arr) {
    return '<div class="bb-chips">' + arr.map(function (o) {
      var v = Array.isArray(o) ? o[0] : o, l = Array.isArray(o) ? o[1] : o;
      return '<button type="button" class="bb-chip' + (st[name] === v ? ' on' : '') + '" data-q="' + name + '" data-v="' + esc(v) + '">' + esc(l) + '</button>';
    }).join('') + '</div>';
  }
  function fmtOf(n) { n = n.toLowerCase(); return /gummies/.test(n) ? 'gummies' : /roll/.test(n) ? 'roll' : /wash/.test(n) ? 'wash' : /lotion/.test(n) ? 'lotion' : /serum/.test(n) ? 'serum' : ''; }

  function results() {
    if (!st.concern) return '';
    var list = P.map(function (p) {
      var sc = 0;
      if (p.k.split(' ').indexOf(st.concern) > -1) sc += 5; else return null;
      if (st.fmt && st.fmt !== 'any' && fmtOf(p.n) === st.fmt) sc += 2;
      if (st.sev === 'sev' && p.c === 'Kits') sc += 3;
      if (st.sev === 'mild' && p.c !== 'Kits') sc += 1;
      if (p.so) sc -= 4;
      return { p: p, sc: sc };
    }).filter(Boolean).sort(function (a, b) { return b.sc - a.sc; }).slice(0, 3);
    var note = st.safe && st.safe !== 'none' ? '<p class="bb-note">Since you picked "' + esc((Q.safe.filter(function (o) { return o[0] === st.safe; })[0] || [0, ''])[1]) + '", check with your doctor before starting any of these.</p>' : '';
    var rut = st.rut === 'alt' ? '<p class="bb-note">Most routines work best when used daily. If alternate days is all you can manage, expect results to take longer, and keep going.</p>' : '';
    return '<div class="bb-res"><h2 style="font-size:16px">Your extra picks</h2>' + list.map(function (r) {
      return '<button type="button" class="bb-row" data-i="' + P.indexOf(r.p) + '"><b>' + esc(r.p.n) + '</b><span>' + esc(r.p.f) + (r.p.so ? ' · sold out when checked' : '') + '</span></button>';
    }).join('') + note + rut + '</div>';
  }

  function buildQuiz() {
    var box = el('section', 'bbq');
    document.body.appendChild(box);
    function draw() {
      var c = st.area && Q.concern[st.area] ? opts('concern', Q.concern[st.area]) : '<p class="bb-sub">Pick an area first.</p>';
      box.innerHTML = '<div class="bb-box"><h2>Fine-tune your match</h2><p class="bb-sub">A few more questions so the picks fit you better. Answers stay in your browser.</p>' +
        '<div class="bb-q"><p>Which area do you want help with?</p>' + opts('area', Q.area) + '</div>' +
        '<div class="bb-q"><p>What is the main concern?</p>' + c + '</div>' +
        '<div class="bb-q"><p>How strong is it?</p>' + opts('sev', Q.sev) + '</div>' +
        '<div class="bb-q"><p>Anything we should be careful about?</p>' + opts('safe', Q.safe) + '</div>' +
        '<div class="bb-q"><p>Preferred format?</p>' + opts('fmt', Q.fmt) + '</div>' +
        '<div class="bb-q"><p>How consistent can you be?</p>' + opts('rut', Q.rut) + '</div>' + results() + '</div>';
    }
    box.addEventListener('click', function (e) {
      var b = e.target.closest('[data-q]'), r = e.target.closest('.bb-row');
      if (b) { var k = b.getAttribute('data-q'); st[k] = b.getAttribute('data-v'); if (k === 'area') delete st.concern; save(); draw(); }
      if (r) openDrawer(P[+r.getAttribute('data-i')]);
    });
    draw();
  }

  /* ---------- start ---------- */
  function init() {
    buildBar();
    if (document.body.getAttribute('data-page') === 'quiz') buildQuiz();
    buildCare();
    rename();
    var t = 0;
    new MutationObserver(function () { if (t) return; t = requestAnimationFrame(function () { t = 0; rename(); }); })
      .observe(document.body, { childList: true, subtree: true });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
