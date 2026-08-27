/* ============================================================
   ARM-GARANT — общий скрипт (все страницы)
   i18n RU/KZ · шапка · мобильное меню · reveal · счётчики ·
   лента брендов · форма КП → WhatsApp · чистые обработчики
   ============================================================ */
(function(){
"use strict";

var WA_PHONE = "77078050031";
var REDUCED = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ------------------------------------------------------------
   i18n. Разметка — на русском. Казахский словарь: общий
   (ниже) + словарь страницы window.PAGE_KK. Русские строки
   снимаются с DOM при первом проходе — один источник правды.
   ------------------------------------------------------------ */
var COMMON_KK = {
  /* — шапка / навигация — */
  "nav.catalog":"Каталог",
  "nav.objects":"Нысандар",
  "nav.partners":"Серіктестерге",
  "nav.delivery":"Жеткізу",
  "nav.contacts":"Байланыс",
  "nav.cta":"Спецификация жіберу",
  /* категории (шапка, футер, карточки) */
  "cat.zap":"Бекіткіш арматура",
  "cat.pp":"Полипропилен жүйелері",
  "cat.det":"Құбыр бөлшектері",
  "cat.kip":"Бақылау-өлшеу аспаптары",
  "cat.fil":"Сүзгілер мен кір ұстағыштар",
  "cat.svar":"Дәнекерлеу материалдары",
  "cat.fit":"Жез фитингтер",
  "cnt.zap":"808 позиция","cnt.pp":"364 позиция","cnt.det":"230 позиция",
  "cnt.kip":"83 позиция","cnt.fil":"84 позиция","cnt.svar":"53 позиция","cnt.fit":"19 позиция",
  "nav.home":"Басты бет",
  "chero.mark":"Бағыт",
  "sub.mark":"Бағыт құрамы",
  "sub.h2":"Ішкі санаттар",
  "sub.poz":"поз.",
  /* — форма КП — */
  "form.mark":"Өтінім",
  "form.title":"Спецификация бойынша коммерциялық ұсыныс",
  "form.badge":"жауап — 15 мин",
  "form.company":"Компания",
  "form.person":"Байланысатын адам",
  "form.opt":"қалауыңызша",
  "form.phone":"Телефон",
  "form.email":"E-mail",
  "form.file":"Спецификация файлын тіркеу",
  "form.filehint":"PDF · XLSX · DOCX · DWG · JPG · PNG",
  "form.fileok":"Файл таңдалды:",
  "form.comment":"Түсініктеме",
  "form.comment.ph":"Нысан, көлемі, қажетті мерзімдер…",
  "form.submit":"Коммерциялық ұсыныс алу",
  "form.orwa":"немесе WhatsApp арқылы жазыңыз",
  "form.note":"Жұмыс уақытында 15 минут ішінде жауап береміз. Спам жібермейміз — тек іс бойынша.",
  "form.done.h":"Рақмет! Өтінім қабылданды",
  "form.done.p":"Хабарлама WhatsApp-та ашылды — жіберуді растаңыз. Менеджер жұмыс уақытында 15 минут ішінде қайта қоңырау шалады.",
  /* — бренды — */
  "brands.mark":"Өндірушілер",
  "brands.h2":"34 өндіруші зауыт",
  "brands.lead":"Тікелей және ресми дистрибьюторлар арқылы жұмыс істейміз. Түпнұсқа өнім, толық құжат пакетімен.",
  /* — CTA-панель категорий — */
  "cta.t":"Спецификацияны жіберіңіз — коммерциялық ұсынысты жол-жолымен қайтарамыз",
  "cta.s":"Excel, PDF, скан немесе нысандағы фото. Жұмыс уақытында 15 минут ішінде жауап береміз.",
  "cta.btn":"Коммерциялық ұсыныс алу",
  /* — «для каких объектов» — */
  "use.mark":"Қолданылуы",
  "use.h2":"Қандай нысандарға",
  /* — контакты / футер — */
  "cont.mark":"Байланыс",
  "cont.h2":"Кеңсе және қойма — Астана",
  "cont.lead":"Қоңырау шалыңыз, WhatsApp-қа жазыңыз немесе спецификацияны поштаға жіберіңіз — жұмыс уақытында 15 минут ішінде жауап береміз.",
  "cont.callback":"жұмыс уақытында 15 минут ішінде қайта қоңырау шаламыз",
  "cont.addr":"Астана, М. Дулатов көшесі, 187/1",
  "cont.hours":"Дс–Жм, 09:00–18:00",
  "cont.office.b":"Кеңсе",
  "cont.office.t":"Іріктеу бойынша кеңес, коммерциялық ұсыныс дайындау, шарттар мен құжаттама.",
  "cont.sklad.b":"Қойма",
  "cont.sklad.t":"Тапсырыстарды жинақтау, өзі алып кету, көлік компанияларымен жөнелту.",
  "cont.wa":"WhatsApp-қа жазу",
  "cont.pin":"2ГИС картасынан ашу",
  "foot.sub":"Құбыр арматурасы және инженерлік жабдық. Астана, 2017 жылдан бері.",
  "foot.cats":"Каталог",
  "foot.co":"Компания",
  "foot.cont":"Байланыс",
  "foot.obj":"Нысандар",
  "foot.part":"Серіктестерге",
  "foot.dost":"Жеткізу және төлем",
  "foot.faq":"Сұрақ-жауап",
  "foot.kp":"Коммерциялық ұсыныс алу",
  "foot.copy":"© 2026 «Арм-гарант». Барлық құқықтар қорғалған.",
  "foot.made":"Астана · меншікті қойма · 2017 жылдан бері"
};

var RU_STORE = {};     /* снятые с DOM русские строки */
var KK = {};           /* итоговый казахский словарь */

function collectDict(){
  KK = {};
  var k;
  for (k in COMMON_KK) KK[k] = COMMON_KK[k];
  if (window.PAGE_KK) for (k in window.PAGE_KK) KK[k] = window.PAGE_KK[k];
}

function applyLang(lang, first){
  document.querySelectorAll("[data-i18n]").forEach(function(el){
    var key = el.getAttribute("data-i18n");
    if (!(key in RU_STORE)) RU_STORE[key] = el.innerHTML;
    if (lang === "kk" && KK[key] !== undefined) el.innerHTML = KK[key];
    else if (lang === "ru") el.innerHTML = RU_STORE[key];
  });
  document.querySelectorAll("[data-i18n-ph]").forEach(function(el){
    var key = el.getAttribute("data-i18n-ph");
    if (!(key in RU_STORE)) RU_STORE[key] = el.getAttribute("placeholder") || "";
    el.setAttribute("placeholder", lang === "kk" && KK[key] !== undefined ? KK[key] : RU_STORE[key]);
  });
  document.querySelectorAll("[data-i18n-content]").forEach(function(el){
    var key = el.getAttribute("data-i18n-content");
    if (!(key in RU_STORE)) RU_STORE[key] = el.getAttribute("content") || "";
    el.setAttribute("content", lang === "kk" && KK[key] !== undefined ? KK[key] : RU_STORE[key]);
  });
  document.querySelectorAll("[data-i18n-aria]").forEach(function(el){
    var key = el.getAttribute("data-i18n-aria");
    if (!(key in RU_STORE)) RU_STORE[key] = el.getAttribute("aria-label") || "";
    el.setAttribute("aria-label", lang === "kk" && KK[key] !== undefined ? KK[key] : RU_STORE[key]);
  });
  document.documentElement.setAttribute("lang", lang === "kk" ? "kk" : "ru");
  document.querySelectorAll(".lang button").forEach(function(b){
    var on = b.getAttribute("data-lang") === lang;
    b.classList.toggle("is-active", on);
    b.setAttribute("aria-pressed", on ? "true" : "false");
  });
  try { localStorage.setItem("ag-lang", lang); } catch(e){}
  if (!first) document.dispatchEvent(new CustomEvent("ag:lang", {detail:{lang:lang}}));
}

function currentLang(){
  try { var s = localStorage.getItem("ag-lang"); if (s === "kk" || s === "ru") return s; } catch(e){}
  return "ru";
}

/* ------------------------------------------------------------ */
document.addEventListener("DOMContentLoaded", function(){
  collectDict();
  applyLang(currentLang(), true);

  document.querySelectorAll(".lang button").forEach(function(b){
    b.addEventListener("click", function(){ applyLang(b.getAttribute("data-lang")); });
  });

  /* --- шапка: тень при скролле --- */
  var hdr = document.querySelector(".hdr");
  function onScroll(){ if (hdr) hdr.classList.toggle("scrolled", window.scrollY > 8); }
  window.addEventListener("scroll", onScroll, {passive:true});
  onScroll();

  /* --- бургер / мобильное меню --- */
  var burger = document.querySelector(".burger");
  if (burger){
    burger.addEventListener("click", function(){
      var open = document.body.classList.toggle("menu-open");
      burger.setAttribute("aria-expanded", open ? "true" : "false");
    });
    document.querySelectorAll(".mnav a").forEach(function(a){
      a.addEventListener("click", function(){
        document.body.classList.remove("menu-open");
        burger.setAttribute("aria-expanded","false");
      });
    });
  }

  /* --- дропдаун «Каталог» на тач-экранах --- */
  document.querySelectorAll(".ndd > a").forEach(function(a){
    a.addEventListener("click", function(e){
      var ndd = a.parentElement;
      if (window.matchMedia("(hover: none)").matches && !ndd.classList.contains("open")){
        e.preventDefault();
        ndd.classList.add("open");
      }
    });
  });
  document.addEventListener("click", function(e){
    document.querySelectorAll(".ndd.open").forEach(function(n){
      if (!n.contains(e.target)) n.classList.remove("open");
    });
  });

  /* --- reveal + размерные линии + счётчики --- */
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(en){
      if (!en.isIntersecting) return;
      en.target.classList.add("in");
      if (en.target.hasAttribute("data-count")) runCounter(en.target);
      io.unobserve(en.target);
    });
  }, {threshold:.15, rootMargin:"0px 0px -6% 0px"});
  document.querySelectorAll(".rv, .mark, [data-count]").forEach(function(el){
    if (REDUCED){
      el.classList.add("in");
      if (el.hasAttribute("data-count")) el.textContent = formatNum(+el.getAttribute("data-count"));
    } else io.observe(el);
  });

  function formatNum(n){
    return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }
  function runCounter(el){
    var to = +el.getAttribute("data-count"), dur = 1400, t0 = null;
    function tick(t){
      if (!t0) t0 = t;
      var p = Math.min((t - t0) / dur, 1);
      var e = 1 - Math.pow(1 - p, 4);
      el.textContent = formatNum(Math.round(to * e));
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  /* --- hero: запуск анимаций + лёгкий параллакс вырезки --- */
  var hero = document.querySelector(".hero, .chero");
  if (hero) requestAnimationFrame(function(){ requestAnimationFrame(function(){ hero.classList.add("loaded"); }); });
  var hImg = document.querySelector(".hero-img");
  if (hImg && !REDUCED){
    var ticking = false;
    window.addEventListener("scroll", function(){
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(function(){
        hImg.style.transform = "translateY(" + Math.min(window.scrollY * .07, 60) + "px)";
        ticking = false;
      });
    }, {passive:true});
  }

  /* --- лента брендов: дублируем контент для бесшовности --- */
  var noMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!noMotion) {
    document.querySelectorAll(".mq-track").forEach(function(tr){
      tr.innerHTML += tr.innerHTML;
    });
  }

  /* --- поле файла: показать имя выбранного --- */
  document.querySelectorAll(".file-fld input[type=file]").forEach(function(inp){
    inp.addEventListener("change", function(){
      var t = inp.closest(".file-fld").querySelector(".ft");
      if (inp.files && inp.files.length){
        var ok = KK["form.fileok"] && document.documentElement.lang === "kk" ? KK["form.fileok"] : "Файл выбран:";
        t.textContent = ok + " " + inp.files[0].name;
      }
    });
  });

  /* --- форма КП: собираем сообщение и открываем WhatsApp --- */
  document.querySelectorAll("form.frm").forEach(function(f){
    f.addEventListener("submit", function(e){
      e.preventDefault();
      var kk = document.documentElement.lang === "kk";
      var v = function(name){ var el = f.querySelector("[name=" + name + "]"); return el ? el.value.trim() : ""; };
      var lines = [];
      lines.push(kk ? "Сәлеметсіз бе! Спецификация бойынша коммерциялық ұсыныс қажет."
                    : "Здравствуйте! Нужно КП по спецификации.");
      var page = document.body.getAttribute("data-page-name");
      if (page) lines.push((kk ? "Бағыт: " : "Направление: ") + page);
      if (v("company")) lines.push((kk ? "Компания: " : "Компания: ") + v("company"));
      if (v("person"))  lines.push((kk ? "Байланысатын адам: " : "Контактное лицо: ") + v("person"));
      if (v("phone"))   lines.push((kk ? "Телефон: " : "Телефон: ") + v("phone"));
      if (v("email"))   lines.push("E-mail: " + v("email"));
      if (v("comment")) lines.push((kk ? "Түсініктеме: " : "Комментарий: ") + v("comment"));
      var file = f.querySelector("[type=file]");
      if (file && file.files && file.files.length)
        lines.push((kk ? "Спецификация файлы: " : "Файл спецификации: ") + file.files[0].name +
                   (kk ? " (осы чатқа тіркеймін)" : " (приложу в этот чат)"));
      var url = "https://wa.me/" + WA_PHONE + "?text=" + encodeURIComponent(lines.join("\n"));
      window.open(url, "_blank", "noopener");
      f.classList.add("hide");
      var done = f.closest(".form-card, .cont-card, section");
      done = done ? done.querySelector(".form-done") : null;
      if (done) done.classList.add("show");
      /* конверсия: отправка формы (gtag навешивается позже) */
    });
  });

  /* --- чистые делегированные обработчики (для gtag-конверсий) --- */
  document.addEventListener("click", function(e){
    var tel = e.target.closest('a[href^="tel:"]');
    if (tel){ /* конверсия: клик по телефону */ }
    var wa = e.target.closest('a[href*="wa.me"]');
    if (wa){ /* конверсия: клик по WhatsApp */ }
  });

  /* --- активный язык мог поменять высоту шапки — на всякий случай --- */
});
})();
