/* ============================================================
   АРМ-ГАРАНТ — скрипт страницы.
   Перевод RU/KZ · шапка · меню · появление · счётчики ·
   лента брендов · бегущая строка · форма → WhatsApp
   ============================================================ */
(function(){
"use strict";
var WA = "77471557868";
var RED = matchMedia("(prefers-reduced-motion: reduce)").matches;
var HAS_IO = typeof IntersectionObserver === "function";

/* ---------------- КАЗАХСКИЙ СЛОВАРЬ ----------------
   Разметка русская. Ключа нет здесь → строка остаётся русской. */
var KZ = {
"logo.sub":"құбыр арматурасы",
"nav.cat":"Каталог","nav.sklad":"Қойма","nav.tend":"Тендерлер","nav.obj":"Нысандар",
"nav.part":"Серіктестерге","nav.cont":"Байланыс","nav.cta":"Бағаны білу",
"a.lang":"Сайт тілі","a.menu":"Мәзір","a.smap":"Сайт бөлімдері","a.top":"Жоғары",
"mn.prod":"Өнім","mn.comp":"Компания","mn.pain":"Мерзім неге бұзылады",
"mn.sklad":"Қойма және логистика","mn.how":"Қалай жұмыс істейміз","mn.tend":"Тендерлер мен құжаттар",
"mn.obj":"Нысандар","mn.brand":"Брендтер","mn.part":"Серіктестерге","mn.faq":"Сұрақ-жауап","mn.cont":"Байланыс",
"c.zap":"Бекіткіш арматура","c.pp":"Полипропилен","c.det":"Құбыр бөлшектері","c.kip":"БӨА",
"c.fil":"Сүзгілер мен кір ұстағыштар","c.svar":"Дәнекерлеу материалдары","c.fit":"Жез фитингтер",

"h.chip":"Астана · қойма · Қазақстан бойынша жеткізу",
"h.lead":"Ысырмалар, крандар, клапандар, фланецтер, иіндер, манометрлер, полипропилен құбырлары мен фитингтері, электродтар — каталогта 1 641 позиция. Ұйымдарға көтерме және бөлшек саудамен Қазақстан бойынша сатамыз: сұранысқа ие тауарды Астанадағы қоймадан жөнелтеміз, қалғанын тікелей зауыттан әкелеміз.",
"h.cta1":"Позициялар тізімін жіберу","h.cta2":"Каталогты қарау",
"h.n1":"Тізіміңіз бойынша баға 15 минутта","h.n2":"Сертификаттар, паспорттар, СТ-1","h.n3":"Тендерлер және мемсатып алулар",
"h.cap":"Астанадағы қойма · арматура, фитингтер, бөлшектер",
"p.t":"Сіздің тізіміңіз · № 2026-08 өтінім","p.st":"Есептелді","p.ok":"қойма","p.day":"7 күн","p.min":"мин",
"p.r1":"Болат ысырмалар","p.r2":"Бұрылмалы ысырмалар","p.r3":"Паспортымен манометрлер",
"p.r4":"Сильфонды компенсаторлар","p.r5":"Фланецтер, бекіткіштер, тығыздағыштар",
"p.f1":"каталог позициясы","p.f2":"өндіруші зауыт","p.f3":"өтінімге жауап",

"n.1":"каталог позициясы — бәрі параметрі мен бағасымен",
"n.2":"өндіруші зауыт, тікелей жеткізу",
"n.3":"жеті бағыттағы ішкі санат",
"n.4":"жыл Қазақстан нарығында, 2017 жылдан бері",

"s.pain.m":"мерзім неге бұзылады",
"s.pain.h1":"Құрылыс баға үшін тоқтамайды.","s.pain.h2":"Табылмаған бір позиция үшін тоқтайды.",
"s.pain.l":"Жабдықтаушы уақыты мен ақшасын жоғалтатын бес жағдай. Әрқайсысын жабамыз.",
"pain.1.h":"Тапсырыс он жеткізушіге бөлінген","pain.1.p":"Әрқайсысы өзінікін өз мерзімінде әкеледі. Нысан ең баяуын күтеді.",
"pain.2.h":"«Қоймада бар» тапсырыспен болып шықты","pain.2.p":"Шот шыққаннан кейін белгілі болады. Монтаж кестесі қол қойылған, ал позиция жоқ.",
"pain.3.h":"Аналог шамамен таңдалған","pain.3.p":"Диаметрі мен бағасы сәйкес келді, қысымы, ортасы мен жалғауы сәйкес келмеді. Торап орнына түспеді.",
"pain.4.h":"Тендер өтінімді қабылдамады","pain.4.p":"Сертификат, паспорт немесе СТ-1 жетпей қалды — тауар қоймада тұрса да, өтінім алынып тасталды.",
"pain.5.h":"Бағаны бір апта санайды","pain.5.p":"Жеткізуші тізіміңізді санап жатқанда, жеткізу мерзімі тағы бір аптаға жылжиды.",

"s.cat.m":"жеті бағыт","s.cat.h1":"Не жеткіземіз.","s.cat.h2":"Жеті бағыт, 1 641 позиция.",
"s.cat.l":"Мұның бәрі Астанадағы қоймада бар немесе тікелей зауыттан келеді. Бөлімді басыңыз — параметрлері, бағалары мен қалдықтары бар каталог ашылады.",
"cat.zap.h":"Ысырмалар, бұрылмалы ысырмалар, клапандар, крандар",
"cat.zap.p":"Болат және шойын, шиберлі, редукторлы және электржетекті. LD, STI, ALSO, Temper, Zetkama.",
"cat.pp.h":"Полипропилен құбырлары мен фитингтері","cat.pp.p":"Сумен жабдықтау мен жылытуға арналған диаметрлердің толық қатары: муфталар, бұрыштамалар, тройниктер, крандар.",
"cat.det.h":"Фланецтер, бұрылымдар, ауыспалар, бекіткіштер","cat.det.p":"Торап жиналатын бәрі: тройниктер, тығындар, сгондар, бұрандалар, компенсаторлар, болттар мен тығыздағыштар.",
"cat.fil.h":"Арматура мен сорғыларды қорғау","cat.fil.p":"Фланецті және муфталы торлы сүзгілер, LD кір ұстағыштары, ауыспалы торлар мен қосалқы бөлшектер.",
"cat.kip.h":"Манометрлер мен термометрлер","cat.kip.p":"Жылу пункттеріне, қазандықтарға және технологиялық желілерге. Паспорттар жинақта.",
"cat.svar.h":"Нысанға арналған электродтар","cat.svar.p":"Көміртекті және легирленген болаттарды қолмен доғалы дәнекерлеуге. Орамдап және паллеттеп.",
"cat.fit.h":"Ішкі желілерге арналған жез","cat.fit.p":"Сумен жабдықтау мен жылытуға арналған муфталар, ниппельдер, бұрыштамалар, тройниктер, ауыспалар.",
"ch.also":"ALSO шар крандары","ch.klap":"Реттеуші клапандар","ch.zatv":"Бұрылмалы ысырмалар",
"ch.chug":"Шойын ысырмалар","ch.el":"Электржетектер","ch.ppf":"PPR фитингтері","ch.ppt":"PPR құбырлары",
"ch.fl":"Жазық фланецтер","ch.bolt":"Болттар, гайкалар, шайбалар","ch.sg":"Сгондар","ch.komp":"Компенсаторлар",
"ch.filz":"Сүзгілер мен қосалқы бөлшектер","ch.gr":"LD кір ұстағыштары","ch.man":"Манометрлер",
"ch.term":"Термометрлер","ch.elek":"Электродтар","ch.fitr":"Бұрандалы фитингтер",
"b.open":"Бөлімді ашу","b.kp":"Бағаны білу",

"s.skl.m":"қойма және логистика","s.skl.h1":"Астанадағы меншікті қойма","s.skl.h2":"және Қазақстан бойынша жеткізу.",
"s.skl.l":"Сұранысқа ие позициялар Астанада жатыр және төлем күні жөнелтіледі. Қалғанын келісілген мерзімде зауыттан тікелей әкелеміз — Астана бойынша, өңірлерге және нысанға.",
"cap.skl1":"Астанадағы қойма · сұранысқа ие позициялар бар","cap.skl2":"Жөнелту · көлік компаниясы немесе өзі алып кету",
"cap.skl3":"Кеңсе және қойма · М. Дулатов көшесі, 187/1",

"s.how.m":"жұмыс тәртібі","s.how.h1":"Тізіміңізден жөнелтуге дейін —","s.how.h2":"бес қадам.",
"st.1.t":"0 мин","st.1.h":"Тізімді жібересіз","st.1.p":"Excel, PDF, скан немесе фото. WhatsApp арқылы да болады.",
"st.2.t":"15 мин","st.2.h":"Параметрлерді нақтылаймыз","st.2.p":"Қысым, орта, жалғау, көлемі мен мерзімі.",
"st.3.t":"баға","st.3.h":"Әр позицияны санаймыз","st.3.p":"Әр жол бойынша бөлек баға мен мерзім, қажет жерде аналогтар.",
"st.4.t":"ЭҚА","st.4.h":"Шарт және шот","st.4.p":"Электрондық құжат айналымы, серіктестерге төлем мерзімін ұзарту.",
"st.5.t":"жөнелту","st.5.h":"Мерзімінде жеткіземіз","st.5.p":"Бір жеткізілімде, толық құжат пакетімен.",

"s.tend.m":"тендерлер мен құжаттар","s.tend.h1":"Құжаттардың толық пакетін жинаймыз","s.tend.h2":"тендер алаңының талабына сай.",
"s.tend.l":"Мемсатып алу және коммерциялық тендерлермен жұмыс істейміз. Каталогтың бірнеше бөліміне бір шарт, электрондық құжат айналымы, тексерілген серіктестерге төлем мерзімін ұзарту.",
"t.1.h":"Әр позиция бойынша баға","t.1.p":"Тізіміңіздің әр жолын бөлек санаймыз, аналогтарымен.",
"t.2.h":"Мемсатып алу және коммерция","t.2.p":"Алаңдардың талаптары мен өтінім мерзімдерін білеміз.",
"t.3.h":"Бір шарт","t.3.p":"Каталогтың бірнеше бөлімі — бір жеткізілім және бір пакет.",
"t.4.h":"Төлем мерзімін ұзарту","t.4.p":"Тексерілген серіктестерге — шартта жазылған талаптармен.",
"d.1":"Сәйкестік сертификаттары","d.1s":"өнімге","d.2":"Паспорттар мен нұсқаулықтар","d.2s":"әр позицияға",
"d.3":"ТКЖ және шот-фактуралар","d.3s":"тауар-көлік жүкқұжаттары","d.4":"Шығу тегі сертификаты","d.4s":"СТ-1",
"d.5":"Жеткізу шарты","d.5s":"тараптардың жауапкершілігімен","d.6":"Тендерге арналған жинақ","d.6s":"алаң талабына сай жинаймыз",

"s.obj.m":"орындалған нысандар","s.obj.h1":"Мұнай саласы, ТКШ, құрылыс,","s.obj.h2":"өнеркәсіп.",
"o.1.h":"Су арнасын реконструкциялау, Қарағанды","o.2.h":"Мұнай өңдеу зауытына жеткізу",
"o.3.h":"Тұрғын кешен қазандығын жарақтандыру","o.4.h":"Өнеркәсіптік цехтың құбыр байламы",
"o.branch":"Сала","o.vol":"Көлемі","o.ed":"дана","o.jkh":"ТКШ","o.oil":"Мұнай саласы","o.prom":"Өнеркәсіп",

"s.br.m":"өндірушілер","s.br.h1":"34 зауытпен тікелей жұмыс істейміз.","s.br.h2":"Тауар түпнұсқа, паспорттары мен сертификаттарымен.",

"s.part.m":"серіктестер мен дилерлерге","s.part.h1":"Көтерме сатып алушыларға, монтаждаушыларға","s.part.h2":"және мердігерлерге.",
"s.part.l":"Көтерме баға береміз, өтінімдерді бірінші кезекте санаймыз және бүкіл тапсырысқа бір шот шығарамыз. Монтаждау ұйымдарымен, мердігерлермен, сауда үйлерімен және дилерлермен жұмыс істейміз.",
"pt.1.h":"Көтерме бағалар","pt.1.p":"Қоймадағыны бірден жөнелтеміз, қалғанын 1–3 күнде әкелеміз.",
"pt.2.h":"Өтінім кезексіз","pt.2.p":"Тұрақты клиенттердің тізімдерін бірінші санаймыз.",
"pt.3.h":"Бәріне бір шот","pt.3.p":"Позиция қанша болса да — бір жеткізілім және бір шарт.","pt.cta":"Серіктес болу",

"s.faq.m":"жиі қойылатын сұрақтар","s.faq.h":"Сатып алушылар әдетте не сұрайды",
"f.1.q":"Бағаны қаншалықты тез айтасыздар?",
"f.1.a":"Жұмыс уақытында қысқа сұраныстар бойынша — 15 минутта. Жүздеген позициядан тұратын үлкен тізім ұзағырақ саналады: мерзімін бірден айтып, оны ұстаймыз.",
"f.2.q":"Позиция қоймада болмаса ше?",
"f.2.a":"Мұны жауапта тікелей жазамыз: зауыттан жеткізу мерзімі немесе параметрлері сақталған аналог. «Қоймада бар» дегеннің шот шыққаннан кейін «тапсырыспен» болып кетуі бізде болмайды.",
"f.3.q":"Аналог таңдайсыздар ма?",
"f.3.a":"Иә, бірақ суретке емес, параметрге қарап: қысым, орта, температура, корпус материалы, жалғау түрі мен құрылыс ұзындығы.",
"f.4.q":"Тендерлермен және мемсатып алумен жұмыс істейсіздер ме?",
"f.4.a":"Істейміз. Пакетті нақты алаңның талабына сай жинаймыз: сертификаттар, паспорттар, ТКЖ, СТ-1, жеткізу шарты.",
"f.5.q":"Төлем мерзімін ұзарту мүмкін бе?","f.5.a":"Иә, тексерілген серіктестерге — шартта жазылған талаптармен.",
"f.6.q":"Өңірлерге жеткізесіздер ме?",
"f.6.a":"Қазақстан бойынша — сіз таңдаған көлік компаниясымен немесе біздің логистикамызбен. Астанада қоймадан өзі алып кетуге болады.",

"s.cont.m":"байланыс","s.cont.h1":"Қажет нәрсенің тізімін жіберіңіз —","s.cont.h2":"әр позиция бойынша баға мен мерзімді санаймыз.",
"s.cont.l":"Excel, PDF, скан немесе нысандағы фото. Жұмыс уақытында 15 минутта жауап береміз.",
"k.tel":"Телефон","k.mail":"Пошта","k.addr":"Кеңсе және қойма","k.addr.v":"Астана, М. Дулатов көшесі, 187/1",
"k.time":"Кесте","k.time.v":"Дс–Жм, 09:00–18:00",
"s.form.m":"өтінім","s.form.h":"Байланыс қалдырыңыз — қоңырау шаламыз",
"fm.name":"Атыңыз","fm.name.ph":"Сізге қалай жүгінейік","fm.phone":"Телефон",
"fm.msg":"Не жеткізу керек","fm.msg.ph":"Не керек, қанша және қай мерзімге. Тізімді WhatsApp арқылы жіберуге болады",
"fm.send":"Өтінім жіберу","fm.wa":"WhatsApp",
"fm.note":"Түймені басу арқылы сіз дербес деректерді өңдеуге келісесіз.",

"f.sub":"құбыр арматурасы",
"f.about":"Арматура, құбыр бөлшектері, БӨА және полипропилен — Қазақстандағы нысандарға арналған 1 641 каталог позициясы. 2017 жылдан бері.",
"f.cont":"Байланыс","f.copy":"© 2026 «Арм-гарант». Барлық құқықтар қорғалған.",
"f.made":"Астана · меншікті қойма · 2017 жылдан бері",
"dk.call":"Қоңырау шалу","dk.kp":"Бағаны білу",

"a.uzel":"Астанадағы Арм-гарант қоймасы: арматура мен фитингтер сөрелері","a.zap":"Электржетекті болат және шойын ысырмалар",
"a.pp":"Сумен жабдықтау мен жылытуға арналған PPR полипропилен құбырлары","a.det":"Болат бұрылымдар, ауыспалар мен тройниктер",
"a.fil":"Сүзгілер, клапандар және ысырмалар","a.kip":"Техникалық манометр","a.svar":"Дәнекерлеу электродтары",
"a.fit":"Бұрандалы жез фитингтер","a.skl1":"Қойма: құбыр мен арматура сөрелері",
"a.skl2":"Тапсырысты көлік компаниясына жөнелту","a.skl3":"Астанадағы Арм-гарант қоймасы мен кеңсесі",
"a.o1":"Су арнасын реконструкциялау, Қарағанды","a.o2":"Мұнай өңдеудің технологиялық қондырғысы",
"a.o3":"Тұрғын кешеннің қазандығы","a.o4":"Өнеркәсіптік цехтың құбыр байламы",
"a.part":"Қоймадан серіктеске жөнелту",

"m.title":"Арм-гарант — Астанадағы құбыр арматурасы, БӨА және құбыр бөлшектері",
"m.desc":"Құбыр арматурасын, БӨА, құбыр бөлшектері мен полипропиленді жеткіземіз. 1 641 каталог позициясы, 34 өндіруші зауыт, Астанадағы қойма, Қазақстан бойынша жеткізу, тендерге толық құжат пакеті."
};

var UI = {
 ru:{err:"Укажите имя и телефон, чтобы мы могли перезвонить.",
     ok:"Заявка сформирована. Если WhatsApp не открылся, позвоните: +7 747 155 78 68",
     head:"Заявка с сайта Арм-гарант",name:"Имя",phone:"Телефон",topic:"Раздел"},
 kk:{err:"Қайта қоңырау шала алуымыз үшін атыңыз бен телефоныңызды көрсетіңіз.",
     ok:"Өтінім қалыптастырылды. WhatsApp ашылмаса, қоңырау шалыңыз: +7 747 155 78 68",
     head:"Арм-гарант сайтынан өтінім",name:"Аты",phone:"Телефон",topic:"Бөлім"}
};
var H1 = {ru:null,
 kk:'<span class="w"><span>Құбыр</span></span> <span class="w"><span>арматурасы</span></span><br><span class="w"><span class="h-acc">Астанадағы</span></span> <span class="w"><span class="h-acc">қоймадан.</span></span>'};

/* ---------------- ПЕРЕВОД ---------------- */
var RU = {};
function snapshot(){
  document.querySelectorAll("[data-i]").forEach(function(el){ RU[el.dataset.i] = el.innerHTML; });
  document.querySelectorAll("[data-i-ph]").forEach(function(el){ RU[el.dataset.iPh] = el.placeholder; });
  document.querySelectorAll("[data-i-alt]").forEach(function(el){ RU[el.dataset.iAlt] = el.alt; });
  document.querySelectorAll("[data-i-aria]").forEach(function(el){ RU[el.dataset.iAria] = el.getAttribute("aria-label"); });
  document.querySelectorAll("[data-i-c]").forEach(function(el){ RU[el.dataset.iC] = el.getAttribute("content"); });
}
function pick(k, kk){ return (kk && KZ[k] !== undefined) ? KZ[k] : RU[k]; }

var h1 = document.getElementById("h1");
if (h1) H1.ru = h1.innerHTML;

function riseDelays(){
  var i = 0;
  document.querySelectorAll("#h1 .w span").forEach(function(sp){
    sp.style.animationDelay = (0.075 * i + 0.1) + "s"; i++;
  });
}

function applyLang(lang){
  var kk = lang === "kk";
  document.documentElement.setAttribute("lang", kk ? "kk" : "ru");
  document.querySelectorAll("[data-i]").forEach(function(el){
    var v = pick(el.dataset.i, kk); if (v !== undefined) el.innerHTML = v;
  });
  document.querySelectorAll("[data-i-ph]").forEach(function(el){
    var v = pick(el.dataset.iPh, kk); if (v !== undefined) el.placeholder = v;
  });
  document.querySelectorAll("[data-i-alt]").forEach(function(el){
    var v = pick(el.dataset.iAlt, kk); if (v !== undefined) el.alt = v;
  });
  document.querySelectorAll("[data-i-aria]").forEach(function(el){
    var v = pick(el.dataset.iAria, kk); if (v !== undefined) el.setAttribute("aria-label", v);
  });
  document.querySelectorAll("[data-i-c]").forEach(function(el){
    var v = pick(el.dataset.iC, kk); if (v !== undefined) el.setAttribute("content", v);
  });
  if (h1 && H1[lang]) { h1.innerHTML = H1[lang]; riseDelays(); }
  var og = document.querySelector('meta[property="og:locale"]');
  if (og) og.setAttribute("content", kk ? "kk_KZ" : "ru_RU");
  document.querySelectorAll(".lang button").forEach(function(b){
    var on = b.getAttribute("data-lang") === lang;
    b.classList.toggle("is-active", on);
    b.setAttribute("aria-pressed", on ? "true" : "false");
  });
  try { localStorage.setItem("ag-lang", lang); } catch(e){}
}
function savedLang(){
  try { var v = localStorage.getItem("ag-lang"); if (v === "kk" || v === "ru") return v; } catch(e){}
  return "ru";
}
function T(k){ return UI[document.documentElement.lang === "kk" ? "kk" : "ru"][k] || k; }

/* ---------------- БЕГУЩАЯ СТРОКА ---------------- */
var TICK = ["Запорная арматура","Полипропиленовые системы","Детали трубопроводов","КИПиА",
            "Фильтры и грязевики","Сварочные материалы","Фитинги латунные","Тендерные поставки"];
var TICK_KZ = ["Бекіткіш арматура","Полипропилен жүйелері","Құбыр бөлшектері","БӨА",
               "Сүзгілер мен кір ұстағыштар","Дәнекерлеу материалдары","Жез фитингтер","Тендерлік жеткізу"];
function fillTicker(){
  var el = document.getElementById("ticker"); if (!el) return;
  var kk = document.documentElement.lang === "kk";
  var list = kk ? TICK_KZ : TICK;
  var html = list.map(function(t){ return "<b>" + t + "</b>"; }).join("");
  el.innerHTML = html + html;
}

/* ---------------- ЛЕНТА БРЕНДОВ ---------------- */
var BRANDS = [["kflex","K-FLEX"],["siemens","SIEMENS"],["ayvaz","AYVAZ"],["wilo","WILO"],["valtec","VALTEC"],
  ["ld","LD"],["zetkama","ZETKAMA"],["sti","STI"],["danfoss","Danfoss"],["uponor","UPONOR"],
  ["hyundai","HYUNDAI"],["benarmo","BENARMO"],["giacomini","Giacomini"],["wester","Wester"],
  ["fittex","FITTEX"],["also","ALSO"],["temper","TEMPER"],["lmz","ЛМЗ"],["bagoriya","Багория"],
  ["mzta","МЗТА"],["broen","BROEN"],["genebre","GENEBRE"],["tecofi","Tecofi"],["vexve","Vexve"],
  ["abra","ABRA"],["adl","ADL"],["naval","NAVAL"],["honeywell","Honeywell"],["grundfos","GRUNDFOS"],
  ["esbe","ESBE"],["herz","HERZ"],["oventrop","Oventrop"],["watts","WATTS"],["aquasfera","Aquasfera"]];
(function(){
  var half = Math.ceil(BRANDS.length / 2);
  function fill(id, list){
    var el = document.getElementById(id); if (!el) return;
    var html = list.map(function(b){
      return '<span class="brand"><img src="assets/brands/' + b[0] + '.webp" alt="' + b[1] +
             '" loading="lazy" decoding="async" height="30"></span>';
    }).join("");
    el.innerHTML = html + html;
  }
  fill("m1", BRANDS.slice(0, half));
  fill("m2", BRANDS.slice(half));
})();

/* ---------------- ПОЯВЛЕНИЕ ---------------- */
if (HAS_IO) {
  if (!RED) document.documentElement.classList.add("js");
  var io = new IntersectionObserver(function(es){
    es.forEach(function(e){ if (e.isIntersecting){ e.target.classList.add("in"); io.unobserve(e.target); } });
  }, {threshold:.12, rootMargin:"0px 0px -6% 0px"});
  document.querySelectorAll(".rv, .shot, .step, .cat").forEach(function(el){ io.observe(el); });

  var steps = document.getElementById("steps");
  if (steps) {
    var sio = new IntersectionObserver(function(es){
      es.forEach(function(e){ if (e.isIntersecting){ e.target.classList.add("lit"); sio.unobserve(e.target); } });
    }, {threshold:.25});
    sio.observe(steps);
  }
  /* страховка: если наблюдатель молчит, содержимое всё равно видно */
  setTimeout(function(){
    document.querySelectorAll(".rv, .shot, .step, .cat").forEach(function(el){
      var r = el.getBoundingClientRect();
      if (r.top < innerHeight && r.bottom > 0) el.classList.add("in");
    });
  }, 2500);
}

/* ---------------- СЧЁТЧИКИ ---------------- */
if (HAS_IO) {
  var cio = new IntersectionObserver(function(es){
    es.forEach(function(e){
      if (!e.isIntersecting) return;
      var el = e.target, target = +el.dataset.count, t0 = performance.now(), dur = 1500;
      var fmt = function(n){ return n.toLocaleString("ru-RU").replace(/ /g, " "); };
      cio.unobserve(el);
      if (RED) { el.textContent = fmt(target); return; }
      (function tick(t){
        var k = Math.min(1, (t - t0) / dur), e2 = 1 - Math.pow(1 - k, 3);
        el.textContent = fmt(Math.round(target * e2));
        if (k < 1) requestAnimationFrame(tick);
      })(t0);
    });
  }, {threshold:.5});
  document.querySelectorAll("[data-count]").forEach(function(el){ cio.observe(el); });

  /* страховка: если наблюдатель молчит, в подвале панели не должны висеть нули */
  setTimeout(function(){
    document.querySelectorAll("[data-count]").forEach(function(el){
      var r = el.getBoundingClientRect();
      if (el.textContent.trim() === "0" && r.top < innerHeight && r.bottom > 0) {
        el.textContent = (+el.dataset.count).toLocaleString("ru-RU").replace(/ /g, "\u00a0");
      }
    });
  }, 3000);
}

/* ---------------- ШАПКА И НИЖНЯЯ ПАНЕЛЬ ---------------- */
var hdr = document.getElementById("hdr"), dock = document.getElementById("dock");
var prog = document.getElementById("prog"), totop = document.getElementById("totop");
var shots = [].slice.call(document.querySelectorAll(".shot"));
var prev = 0, ticking = false;

/* мягкий параллакс фотографий: сдвиг задаётся переменной,
   чтобы не затирать scale из :hover инлайновым transform */
function parallax(){
  for (var i = 0; i < shots.length; i++) {
    var el = shots[i], r = el.getBoundingClientRect();
    if (r.bottom < -120 || r.top > innerHeight + 120) continue;
    var k = (r.top + r.height / 2 - innerHeight / 2) / innerHeight;
    if (k > 1) k = 1; if (k < -1) k = -1;
    el.style.setProperty("--py", (k * -9).toFixed(1) + "px");
  }
}

function onScroll(){
  if (ticking) return; ticking = true;
  requestAnimationFrame(function(){
    ticking = false;
    var y = scrollY || document.documentElement.scrollTop;
    hdr.classList.toggle("solid", y > 12);
    if (!document.body.classList.contains("menu-open")) {
      hdr.classList.toggle("hide", y > 260 && y > prev);
    }
    if (dock) dock.classList.toggle("show", y > innerHeight * .6);
    if (prog) {
      var h = document.documentElement.scrollHeight - innerHeight;
      prog.style.width = (h > 0 ? Math.min(100, y / h * 100) : 0) + "%";
    }
    if (totop) totop.classList.toggle("show", y > innerHeight * 1.25);
    if (!RED) parallax();
    prev = y;
  });
}
addEventListener("scroll", onScroll, {passive:true});
onScroll();

if (totop) totop.addEventListener("click", function(){
  scrollTo({top:0, behavior: RED ? "auto" : "smooth"});
});

/* ---------------- МЕНЮ ---------------- */
var burger = document.getElementById("burger");
if (burger) {
  burger.addEventListener("click", function(){
    var open = document.body.classList.toggle("menu-open");
    burger.setAttribute("aria-expanded", open ? "true" : "false");
    document.body.style.overflow = open ? "hidden" : "";
    if (open) hdr.classList.remove("hide");
  });
  document.querySelectorAll("#mnav a").forEach(function(a){
    a.addEventListener("click", function(){
      document.body.classList.remove("menu-open");
      document.body.style.overflow = "";
      burger.setAttribute("aria-expanded", "false");
    });
  });
}

/* ---------------- ЭФФЕКТЫ КУРСОРА ---------------- */
if (!RED && matchMedia("(hover:hover)").matches) {
  document.querySelectorAll(".cat").forEach(function(card){
    var raf = 0;
    card.addEventListener("mousemove", function(ev){
      if (raf) return;
      raf = requestAnimationFrame(function(){
        raf = 0;
        var r = card.getBoundingClientRect();
        var px = (ev.clientX - r.left) / r.width - .5, py = (ev.clientY - r.top) / r.height - .5;
        card.classList.add("tilting");
        card.style.transform = "perspective(1200px) rotateX(" + (-py * 3.6).toFixed(2) +
                               "deg) rotateY(" + (px * 4.4).toFixed(2) + "deg) translateY(-4px)";
      });
    });
    card.addEventListener("mouseleave", function(){
      card.classList.remove("tilting"); card.style.transform = "";
    });
  });
  var hero = document.querySelector(".hero"), pnl = document.querySelector(".panel");
  if (hero) hero.addEventListener("mousemove", function(ev){
    var r = hero.getBoundingClientRect();
    hero.style.setProperty("--mx", ((ev.clientX - r.left) / r.width * 100).toFixed(1) + "%");
    hero.style.setProperty("--my", ((ev.clientY - r.top) / r.height * 100).toFixed(1) + "%");
    if (pnl) {
      var pr = pnl.getBoundingClientRect();
      var px = (ev.clientX - pr.left) / pr.width - .5, py = (ev.clientY - pr.top) / pr.height - .5;
      pnl.classList.add("tilting");
      pnl.style.transform = "perspective(1400px) rotateX(" + (-py * 2.4).toFixed(2) +
                            "deg) rotateY(" + (px * 3).toFixed(2) + "deg)";
    }
  });
  if (hero) hero.addEventListener("mouseleave", function(){
    if (pnl) { pnl.classList.remove("tilting"); pnl.style.transform = ""; }
  });
  document.querySelectorAll(".btn").forEach(function(b){
    b.addEventListener("mousemove", function(ev){
      var r = b.getBoundingClientRect();
      var dx = (ev.clientX - r.left - r.width / 2) / r.width, dy = (ev.clientY - r.top - r.height / 2) / r.height;
      b.style.transform = "translate(" + (dx * 6).toFixed(1) + "px," + (dy * 4).toFixed(1) + "px)";
    });
    b.addEventListener("mouseleave", function(){ b.style.transform = ""; });
  });
}

/* ---------------- ПОДСВЕТКА КАРТОЧЕК ЗА КУРСОРОМ ---------------- */
document.querySelectorAll(".num,.pcard,.tcard,.doc,.obj,.cat,.brand,.lead-info")
  .forEach(function(el){ el.classList.add("glow"); });

if (!RED && matchMedia("(hover:hover)").matches) {
  var gEl = null, gX = 0, gY = 0, gRaf = 0;
  addEventListener("mousemove", function(ev){
    var t = ev.target && ev.target.closest ? ev.target.closest(".glow") : null;
    if (!t) return;
    gEl = t; gX = ev.clientX; gY = ev.clientY;
    if (gRaf) return;
    gRaf = requestAnimationFrame(function(){
      gRaf = 0;
      var r = gEl.getBoundingClientRect();
      gEl.style.setProperty("--gx", ((gX - r.left) / r.width * 100).toFixed(1) + "%");
      gEl.style.setProperty("--gy", ((gY - r.top) / r.height * 100).toFixed(1) + "%");
    });
  }, {passive:true});
}

/* ---------------- КУРСОР (десктоп) ---------------- */
if (!RED && matchMedia("(hover:hover) and (min-width:1120px)").matches) {
  var ring = document.createElement("div"), dotc = document.createElement("div");
  ring.className = "cur"; dotc.className = "cur-d";
  ring.setAttribute("aria-hidden", "true"); dotc.setAttribute("aria-hidden", "true");
  document.body.appendChild(ring); document.body.appendChild(dotc);

  var tX = 0, tY = 0, rX = 0, rY = 0, cRaf = 0;
  var HOT = ".btn,.cat,.brand,.faq summary,.chip-s,.num,.tcard,.obj,.doc,.pcard," +
            ".lang button,.nav a,.foot a,.dock a,.totop,.hdr-tel,.logo,.cline a,.shot";
  function follow(){
    rX += (tX - rX) * .17; rY += (tY - rY) * .17;
    ring.style.transform = "translate3d(" + rX.toFixed(1) + "px," + rY.toFixed(1) + "px,0)";
    cRaf = (Math.abs(tX - rX) > .4 || Math.abs(tY - rY) > .4) ? requestAnimationFrame(follow) : 0;
  }
  addEventListener("mousemove", function(ev){
    tX = ev.clientX; tY = ev.clientY;
    dotc.style.transform = "translate3d(" + tX + "px," + tY + "px,0)";
    document.body.classList.add("cur-on");
    if (!cRaf) cRaf = requestAnimationFrame(follow);
    var hot = ev.target && ev.target.closest ? ev.target.closest(HOT) : null;
    document.body.classList.toggle("cur-hot", !!hot);
  }, {passive:true});
  document.addEventListener("mouseleave", function(){
    document.body.classList.remove("cur-on", "cur-hot");
  });
}

/* ---------------- ОЖИВЛЕНИЕ ПАНЕЛИ СПЕЦИФИКАЦИИ ---------------- */
(function(){
  var panel = document.querySelector(".panel");
  if (!panel) return;
  function live(){ panel.classList.add("live"); }
  if (!HAS_IO) { live(); return; }
  var pio = new IntersectionObserver(function(es){
    es.forEach(function(e){ if (e.isIntersecting) { live(); pio.unobserve(e.target); } });
  }, {threshold:.25});
  pio.observe(panel);
  setTimeout(live, 2200);   /* страховка, если наблюдатель молчит */
})();

/* ---------------- КАСКАД СЛОВ В ЗАГОЛОВКАХ ---------------- */
function wrapWords(el, start){
  var txt = el.textContent;
  if (!txt || !txt.trim()) return 0;
  var words = txt.split(/\s+/).filter(Boolean), frag = document.createDocumentFragment();
  words.forEach(function(w, i){
    var box = document.createElement("span"), inner = document.createElement("i");
    box.className = "wd"; inner.textContent = w;
    inner.style.transitionDelay = (0.055 * (start + i) + 0.08).toFixed(3) + "s";
    box.appendChild(inner); frag.appendChild(box);
    if (i < words.length - 1) frag.appendChild(document.createTextNode(" "));
  });
  el.textContent = ""; el.appendChild(frag);
  return words.length;
}
function splitHeads(){
  if (RED || !HAS_IO) return;
  document.querySelectorAll(".sec-head h2, .part-b h2, .lead-info h2").forEach(function(h){
    var parts = h.querySelectorAll("[data-i]"), n = 0;
    if (parts.length) parts.forEach(function(sp){ n += wrapWords(sp, n); });
    else wrapWords(h, 0);
    h.classList.add("split");
  });
}

/* ---------------- ЗЕРНО ---------------- */
if (!RED) {
  var g = document.createElement("div");
  g.className = "grain"; g.setAttribute("aria-hidden", "true");
  document.body.appendChild(g);
}

/* ---------------- ФОРМА ---------------- */
var msg = document.getElementById("msgField");
document.querySelectorAll("[data-topic]").forEach(function(a){
  a.addEventListener("click", function(){
    if (msg && !msg.value) msg.value = T("topic") + ": " + a.dataset.topic + ". ";
  });
});
var form = document.getElementById("leadForm"), note = document.getElementById("formNote");
if (form) form.addEventListener("submit", function(e){
  e.preventDefault();
  var f = new FormData(form);
  if (f.get("company")) return;
  var name = (f.get("name") || "").trim(), phone = (f.get("phone") || "").trim(), m = (f.get("msg") || "").trim();
  if (!name || !phone) { note.textContent = T("err"); note.style.color = "#C8412F"; return; }
  var text = encodeURIComponent(T("head")) + "%0A" + encodeURIComponent(T("name")) + ": " +
             encodeURIComponent(name) + "%0A" + encodeURIComponent(T("phone")) + ": " +
             encodeURIComponent(phone) + (m ? "%0A" + encodeURIComponent(m) : "");
  open("https://wa.me/" + WA + "?text=" + text, "_blank");
  note.textContent = T("ok"); note.style.color = "var(--steel)";
  form.reset();
});

/* ---------------- СТАРТ ---------------- */
snapshot();
applyLang(savedLang());
fillTicker();
splitHeads();

document.querySelectorAll(".lang button").forEach(function(b){
  b.addEventListener("click", function(){
    var l = b.getAttribute("data-lang");
    if (document.documentElement.lang === l) return;
    function swap(){ applyLang(l); fillTicker(); splitHeads(); }
    if (RED) { swap(); return; }
    document.body.classList.add("lang-swap");
    setTimeout(function(){
      swap();
      document.body.classList.remove("lang-swap");
    }, 190);
  });
});
})();
