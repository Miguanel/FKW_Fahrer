/* =========================================================
   KONFIGURACJA – tu zmieniasz linki, ceny i film
   ========================================================= */
const CONFIG = {
  // Film pod nagłówkiem. Wybierz JEDNO:
  // 1) ID filmu z YouTube, np. dla https://www.youtube.com/watch?v=AbC123xyz wpisz "AbC123xyz"
  // 2) albo zostaw youtubeId puste i wrzuć plik do LandingPage/assets/film.mp4
  video: {
    youtubeId: "",
    mp4: "assets/film.mp4",
  },

  // Produkty. checkoutUrl = link do płatności (np. Stripe Payment Link, Przelewy24, sklep, Gumroad).
  // Dopóki jest pusty, koszyk pokaże komunikat zamiast przejścia do płatności.
  products: {
    basic: {
      name: "Pakiet podstawowy – Bonusy na start",
      price: 49,
      oldPrice: null,
      checkoutUrl: "",
    },
    full: {
      name: "Pakiet pełny z dialogami PL / DE",
      price: 150,
      oldPrice: 299,
      checkoutUrl: "",
    },
  },

  // Linki w stopce
  links: {
    regulamin: "#",
    prywatnosc: "#",
    kontakt: "mailto:",
  },
};

/* =========================================================
   Treści sekcji
   ========================================================= */
const TOPICS = [
  ["Rozmowa kwalifikacyjna", "Das Vorstellungsgespräch", "Jak powiedzieć, kim jesteś i gdzie wcześniej pracowałeś. Jak powiedzieć, jakie masz prawo jazdy i dokumenty. Jak zapytać o pieniądze, godziny pracy i mieszkanie."],
  ["Załadunek w magazynie u dystrybutora", "Die Beladung im Zentrallager", "Co powiedzieć przy bramie magazynu. Jak zapytać, ile jest palet. Jak powiedzieć, że czegoś brakuje albo coś jest zepsute. Dlaczego nie wolno podpisać papierów, jeśli coś się nie zgadza."],
  ["Dostawa i rozładunek u klienta", "Die Lieferung beim Kunden", "Co powiedzieć, kiedy przywozisz towar. Jak zapytać, gdzie postawić palety. Jak poprosić o podpis i pieczątkę. Jak powiedzieć przez telefon, że się spóźnisz."],
  ["Najczęstsze pytania do kierowcy i odpowiedzi", "Die häufigsten Fragen an den Fahrer", "Jakie pytania usłyszysz w pracy najczęściej i jak krótko na nie odpowiedzieć. Jak grzecznie powiedzieć „nie”, kiedy czegoś nie wolno ci zrobić. Co powiedzieć, kiedy nie rozumiesz pytania."],
  ["Uszkodzony towar albo zła liczba palet", "Beschädigte Ware oder falsche Palettenanzahl", "Co powiedzieć, kiedy towar jest zepsuty albo potłuczony. Jak poprosić, żeby szkodę wpisać na papierach. Co zrobić, kiedy klient źle policzy palety."],
  ["Rozmowy kierowcy przez telefon", "Telefongespräche des Fahrers", "Jak zacząć i skończyć rozmowę przez telefon. Jak poprosić, żeby ktoś przeliterował nazwę. Jak zostawić wiadomość. Co powiedzieć, kiedy źle słychać."],
  ["Pierwszy dzień w pracy", "Der erste Arbeitstag", "Jak przywitać się w nowej pracy. Co dostajesz pierwszego dnia i jak to się nazywa po niemiecku. Jak sprawdzić ciężarówkę przed jazdą. O co zapytać szefa: choroba, awaria, wypadek, diety."],
  ["W trasie: nawigacja, korek, objazd", "Unterwegs: Navi, Stau, Umleitung", "Co to jest korytarz życia i jak go zrobić. Jak wyglądają znaki objazdu. Jak zapytać o drogę i zrozumieć odpowiedź: prosto, w lewo, w prawo, rondo, światła, zawrócić."],
  ["Przerwa na parkingu: jedzenie, prysznic, nocleg", "Pause auf dem Rastplatz und Autohof", "Jak zamówić jedzenie i zapłacić. Jak zapytać o cenę parkingu, prysznic i rachunek dla firmy. Jak rozmawiać z kierowcą z innego kraju."],
  ["Koniec miesiąca: wypłata, diety i urlop", "Monatsende: Lohnabrechnung, Spesen und Urlaub", "Co znaczą słowa na pasku wypłaty: brutto, netto, podatek, ubezpieczenia, diety, nadgodziny. Jak grzecznie powiedzieć, że coś się nie zgadza. Jak poprosić o urlop."],
  ["Klient nie przyjmuje towaru", "Der Kunde nimmt die Ware nicht an", "Jak spokojnie rozmawiać, kiedy klient nie chce towaru. Co musi być napisane na dokumencie dostawy. Kiedy podpisać, a kiedy dopisać swoją uwagę."],
  ["Wypadek na autostradzie", "Unfall auf der Autobahn", "Co robić zaraz po wypadku. Jak zadzwonić na policję (110) i po karetkę (112) i co powiedzieć. Jak rozmawiać z policjantem. Dlaczego nie podpisywać papierów, z którymi się nie zgadzasz."],
  ["Wypadek przy rozładunku", "Unfall beim Entladen", "Jak bezpiecznie rozładowywać windą załadowczą. Co zrobić, kiedy ktoś się zrani w pracy: pierwsza pomoc, telefon do firmy, zeszyt pierwszej pomocy. Jak spokojnie mówić o tym, co się stało."],
];

// Fragment z Tematu 3, wersja A (czas teraźniejszy)
const DIALOG = [
  ["F", "Guten Morgen! Was kann ich für Sie tun?", "Dzień dobry! W czym mogę pomóc?"],
  ["T", "Guten Morgen. Mein Name ist Nowak, ich komme von der Spedition Huber. Ich habe eine Lieferung von Brandt: Molkereiprodukte, zwölf Paletten.", "Dzień dobry. Nazywam się Nowak, jestem z firmy spedycyjnej Huber. Mam dostawę od Brandta: nabiał, dwanaście palet."],
  ["F", "Ach ja, wir warten schon auf Sie. Ich bin Frau Petersen, ich leite die Warenannahme. Ihr Zeitfenster beginnt um zehn Uhr. Sie sind ein bisschen zu früh.", "Ach tak, czekamy na pana. Nazywam się Petersen, kieruję przyjęciem towaru. Pana okno czasowe zaczyna się o dziesiątej. Jest pan trochę za wcześnie."],
  ["T", "Ja, ich weiß. Ich kann warten.", "Tak, wiem. Mogę zaczekać."],
  ["F", "Das ist nicht nötig. Die Rampe ist frei. Sie können gleich andocken. Haben Sie den Lieferschein?", "Nie trzeba. Rampa jest wolna. Może pan od razu podjechać. Ma pan dowód dostawy?"],
  ["T", "Ja, bitte schön. Hier sind der Lieferschein und der CMR.", "Tak, proszę. Tu jest dowód dostawy i CMR."],
  ["F", "Danke. Fahren Sie bitte rückwärts an Rampe eins. Und machen Sie danach bitte den Motor aus. Hier wohnen Leute. Das Kühlaggregat darf laufen.", "Dziękuję. Proszę podjechać tyłem pod rampę numer jeden. I proszę potem wyłączyć silnik. Obok mieszkają ludzie. Agregat chłodniczy może pracować."],
  ["N", "Zuerst vergleicht Frau Petersen die Plombennummer mit dem CMR. Dann macht Tomek die Plombe ab, öffnet die Türen vom Auflieger und fährt rückwärts an die Rampe.", "Najpierw pani Petersen porównuje numer plomby z numerem na CMR. Potem Tomek zdejmuje plombę, otwiera drzwi naczepy i podjeżdża tyłem pod rampę."],
  ["F", "Die Plombennummer stimmt. Bei uns entlädt der Fahrer selbst. Da steht ein elektrischer Hubwagen. Können Sie damit fahren?", "Numer plomby się zgadza. U nas kierowca rozładowuje sam. Tam stoi elektryczny wózek paletowy. Umie pan nim jeździć?"],
  ["T", "Ja, natürlich. Wo soll ich die Paletten hinstellen?", "Tak, oczywiście. Gdzie mam postawić palety?"],
];
const WHO = { F: "Pani Petersen", T: "Tomek", N: "Narrator" };

// Znasz to? [problem bez PDF-a, rozwiązanie z PDF-em]
const PROBLEMS = [
  ["Mówią za szybko. Łapiesz pojedyncze słowa i tylko kiwasz głową.", "Znasz te rozmowy z dialogów. Rozumiesz, o co chodzi."],
  ["Boisz się odebrać telefon od dyspozytora.", "Wiesz, jak zacząć, i umiesz poprosić o powtórzenie."],
  ["Podpisujesz papiery, których nie rozumiesz.", "Wiesz, co sprawdzić i co dopisać, zanim podpiszesz."],
  ["Przy kontroli albo wypadku stres blokuje ci język.", "Masz to przećwiczone: policja, 110, 112."],
  ["Słówka z aplikacji? W pracy nikt tak nie mówi.", "Uczysz się języka z prawdziwej pracy w Niemczech."],
];

/* =========================================================
   Pomocnicze
   ========================================================= */
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const zl = (n) => `${n} zł`;

/* =========================================================
   Budowanie list z danych
   ========================================================= */
function buildTopics() {
  const list = $("[data-topics]");
  const chev = '<svg class="topic-chev" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  list.innerHTML = TOPICS.map(([pl, de, learn], i) => `
    <li class="topic" style="--t:${i}">
      <button class="topic-btn" type="button" aria-expanded="false" aria-controls="tm-${i}">
        <span class="topic-no">${i + 1}</span>
        <span class="topic-titles"><span class="topic-pl">${pl}</span><span class="topic-de" lang="de">${de}</span></span>
        ${chev}
      </button>
      <div class="topic-more" id="tm-${i}"><div><p><b>Czego się nauczysz:</b> ${learn}</p></div></div>
    </li>`).join("");
  list.addEventListener("click", (e) => {
    const btn = e.target.closest(".topic-btn");
    if (!btn) return;
    const li = btn.parentElement;
    const open = li.classList.toggle("open");
    btn.setAttribute("aria-expanded", open);
  });
}

function buildDialog() {
  const box = $("[data-dialog]");
  box.innerHTML = DIALOG.map(([w, de, pl], i) => `
    <div class="line ${w === "N" ? "narr" : ""}" style="--n:${i}">
      <span class="who ${w === "T" ? "t" : ""}">${WHO[w]}</span>
      <button class="card3d" type="button" aria-label="Odwróć zdanie">
        <span class="face face-de" lang="de"><small>Po niemiecku</small>${de}</span>
        <span class="face face-pl"><small>Po polsku</small>${pl}</span>
      </button>
    </div>`).join("");
  box.addEventListener("click", (e) => {
    const c = e.target.closest(".card3d");
    if (c) c.classList.toggle("flipped");
  });
  $$(".try-toggle button").forEach((b) => b.addEventListener("click", () => {
    $$(".try-toggle button").forEach((x) => x.classList.toggle("is-on", x === b));
    const toPl = b.dataset.lang === "pl";
    $$(".card3d", box).forEach((c, i) => setTimeout(() => c.classList.toggle("flipped", toPl), reduceMotion ? 0 : i * 60));
  }));
}

// Dwie tabele: problemy bez PDF-a i rozwiązania z PDF-em (wiersze obok siebie)
function buildBeforeAfter() {
  const box = $("[data-ba]");
  const n = PROBLEMS.length;
  const col = (cls, title, i) => `
    <div class="ba-cell ba-th ${cls}" style="--c:${i}">${title}</div>
    ${PROBLEMS.map((row, r) => `<div class="ba-cell ${cls}${r === n - 1 ? " last" : ""}" style="--c:${i};--r:${r}">${row[i]}</div>`).join("")}`;
  box.style.setProperty("--rows", n + 1);
  box.innerHTML = col("bad", "Bez PDF-a", 0) + col("good", "Z PDF-em", 1);
}

/* =========================================================
   Ruch sterowany przewijaniem
   --e: 0→1 gdy sekcja wjeżdża, --p: 0→1 przez cały przejazd sekcji
   ========================================================= */
const hero = $("[data-hero]");
const tracked = $$("[data-scroll]");
const truck = $("[data-progress-truck]");
const sticky = $("[data-sticky-buy]");
let ticking = false;

function update() {
  ticking = false;
  const vh = window.innerHeight;

  // Hero: przejazd pod bramownicą
  const hr = hero.getBoundingClientRect();
  const h = reduceMotion ? 0 : clamp(-hr.top / Math.max(1, hr.height - vh));
  hero.style.setProperty("--h", h.toFixed(4));
  hero.style.setProperty("--lane-speed", `${(1.1 - h * .75).toFixed(2)}s`);

  // Sekcje
  for (const el of tracked) {
    const r = el.getBoundingClientRect();
    if (r.bottom < -200 || r.top > vh + 200) {
      if (r.bottom < -200) el.style.setProperty("--e", 1);
      continue;
    }
    const e = reduceMotion ? 1 : clamp((vh - r.top) / (vh * .55));
    const p = clamp((vh - r.top) / (vh + r.height));
    el.style.setProperty("--e", e.toFixed(4));
    el.style.setProperty("--p", p.toFixed(4));
  }

  // Ciężarówka na pasku górnym
  const max = document.documentElement.scrollHeight - vh;
  const prog = clamp(window.scrollY / Math.max(1, max));
  truck.style.setProperty("--prog", prog.toFixed(4));

  // Pasek z ceną (telefon): po hero, ale nie przy cenniku
  const pricing = $("#cennik").getBoundingClientRect();
  const show = hr.bottom < vh * .5 && !(pricing.top < vh && pricing.bottom > 0);
  sticky.classList.toggle("show", show);
}
function onScroll() {
  if (!ticking) { ticking = true; requestAnimationFrame(update); }
}

// Hero: warstwy reagują na ruch myszy (głębia)
function heroMouse() {
  if (reduceMotion || matchMedia("(pointer: coarse)").matches) return;
  let raf;
  hero.addEventListener("pointermove", (e) => {
    cancelAnimationFrame(raf);
    raf = requestAnimationFrame(() => {
      hero.style.setProperty("--mx", ((e.clientX / innerWidth) * 2 - 1).toFixed(3));
      hero.style.setProperty("--my", ((e.clientY / innerHeight) * 2 - 1).toFixed(3));
    });
  });
}

// Liczniki na tablicy
function counters() {
  const box = $("[data-counters]");
  const io = new IntersectionObserver(([en]) => {
    if (!en.isIntersecting) return;
    io.disconnect();
    $$("[data-count]", box).forEach((b, i) => {
      const target = +b.dataset.count;
      if (reduceMotion) { b.textContent = target; return; }
      const start = performance.now() + i * 120;
      const dur = 1400;
      const tick = (t) => {
        const k = clamp((t - start) / dur);
        b.textContent = Math.round(target * (1 - Math.pow(1 - k, 3)));
        if (k < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    });
  }, { threshold: .35 });
  io.observe(box);
}

/* =========================================================
   Film
   ========================================================= */
function setupVideo() {
  const player = $("[data-player]");
  const ph = $("[data-player-placeholder]");
  const note = $("[data-player-note]");
  const { youtubeId, mp4 } = CONFIG.video;
  let mp4Ok = false;

  if (!youtubeId && mp4) {
    const probe = document.createElement("video");
    probe.preload = "metadata";
    probe.src = mp4;
    probe.addEventListener("loadedmetadata", () => { mp4Ok = true; });
  }

  $("[data-play]").addEventListener("click", () => {
    if (youtubeId) {
      ph.remove();
      player.insertAdjacentHTML("beforeend",
        `<iframe src="https://www.youtube-nocookie.com/embed/${encodeURIComponent(youtubeId)}?autoplay=1&rel=0" title="Film o pliku PDF" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>`);
    } else if (mp4Ok) {
      ph.remove();
      const v = document.createElement("video");
      v.src = mp4; v.controls = true; v.autoplay = true; v.playsInline = true;
      player.appendChild(v);
    } else {
      note.hidden = false;
    }
  });
}

/* =========================================================
   Podgląd stron
   ========================================================= */
function setupLightbox() {
  const lb = $("[data-lightbox]");
  const img = $("[data-lightbox-img]");
  let last;
  $$("[data-pages] .page").forEach((p) => p.addEventListener("click", () => {
    last = p;
    img.src = p.dataset.src;
    lb.hidden = false;
    $("[data-lightbox-close]").focus();
  }));
  const close = () => { lb.hidden = true; last && last.focus(); };
  $("[data-lightbox-close]").addEventListener("click", close);
  lb.addEventListener("click", (e) => { if (e.target === lb) close(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape" && !lb.hidden) close(); });
}

/* =========================================================
   Koszyk (jeden pakiet naraz – pełny zawiera podstawowy)
   ========================================================= */
const CART_KEY = "lkw-de-koszyk";
const cartEl = $("[data-cart]");
const scrim = $("[data-cart-scrim]");
let cart = null;
try { cart = localStorage.getItem(CART_KEY); } catch (_) { /* brak pamięci przeglądarki */ }
if (cart && !CONFIG.products[cart]) cart = null;

function saveCart() {
  try { cart ? localStorage.setItem(CART_KEY, cart) : localStorage.removeItem(CART_KEY); } catch (_) {}
}

function coverHTML(id) {
  return id === "full"
    ? '<div class="cover cover-full" aria-hidden="true"><span class="cover-sign">DE</span><span class="cover-title">Teksty i dialogi PL / DE</span><span class="cover-sub">PDF</span></div>'
    : '<div class="cover cover-basic" aria-hidden="true"><span class="cover-sign">DE</span><span class="cover-title">Bonusy na start</span><span class="cover-sub">PDF</span></div>';
}

function renderCart() {
  const body = $("[data-cart-body]");
  const foot = $("[data-cart-foot]");
  const count = $("[data-cart-count]");
  count.textContent = cart ? 1 : 0;
  count.classList.toggle("has", !!cart);

  if (!cart) {
    body.innerHTML = `<div class="cart-empty"><p>Koszyk jest pusty.</p><a class="btn btn-blue" href="#cennik" data-close-cart>Wybierz pakiet</a></div>`;
    foot.innerHTML = "";
    return;
  }
  const p = CONFIG.products[cart];
  body.innerHTML = `
    <div class="cart-item">
      ${coverHTML(cart)}
      <div>
        <div class="ci-name">${p.name}</div>
        <div class="ci-price">${p.oldPrice ? `<s>${zl(p.oldPrice)}</s>` : ""}${zl(p.price)}</div>
        <button class="ci-remove" type="button" data-remove>Usuń z koszyka</button>
      </div>
    </div>
    ${cart === "basic" ? `
    <div class="upsell">
      <p>Dopłać <b>${zl(CONFIG.products.full.price - CONFIG.products.basic.price)}</b> i weź pakiet pełny: wszystko z podstawowego plus 52 dialogi i słowniczki.</p>
      <button class="btn btn-yellow" type="button" data-upgrade>Zamień na pakiet pełny</button>
    </div>` : ""}`;
  foot.innerHTML = `
    <div class="cart-total"><span>Do zapłaty</span><b>${zl(p.price)}</b></div>
    <button class="btn btn-yellow btn-wide btn-big" type="button" data-checkout>Przejdź do płatności</button>
    <p class="cart-msg" data-cart-msg hidden></p>
    <p class="cart-safe">Płacisz raz. Plik PDF zostaje u ciebie.</p>`;
}

function openCart() {
  scrim.hidden = false;
  requestAnimationFrame(() => scrim.classList.add("show"));
  cartEl.classList.add("open");
  cartEl.setAttribute("aria-hidden", "false");
  setTimeout(() => $(".cart-close").focus(), 50);
}
function closeCart() {
  scrim.classList.remove("show");
  cartEl.classList.remove("open");
  cartEl.setAttribute("aria-hidden", "true");
  setTimeout(() => { scrim.hidden = true; }, 350);
}

function toast(msg) {
  const t = $("[data-toast]");
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(toast.timer);
  toast.timer = setTimeout(() => t.classList.remove("show"), 2200);
}

// Okładka „leci” z karty do ikony koszyka
function flyToCart(fromEl, id) {
  const target = $(".cart-btn");
  const done = () => { target.classList.remove("bump"); void target.offsetWidth; target.classList.add("bump"); };
  const src = fromEl && fromEl.closest(".plan") ? $(`[data-cover="${id}"]`) : null;
  if (reduceMotion || !src) { done(); return Promise.resolve(); }
  const a = src.getBoundingClientRect();
  const b = target.getBoundingClientRect();
  const clone = src.cloneNode(true);
  clone.classList.add("flyer");
  Object.assign(clone.style, { left: `${a.left}px`, top: `${a.top}px`, width: `${a.width}px`, height: `${a.height}px`, margin: 0 });
  document.body.appendChild(clone);
  const dx = b.left + b.width / 2 - (a.left + a.width / 2);
  const dy = b.top + b.height / 2 - (a.top + a.height / 2);
  const anim = clone.animate([
    { transform: "perspective(700px) rotateY(-18deg) scale(1)", opacity: 1 },
    { transform: `translate(${dx * .5}px, ${dy * .5 - 120}px) rotate(-14deg) scale(.6)`, opacity: 1, offset: .55 },
    { transform: `translate(${dx}px, ${dy}px) rotate(-30deg) scale(.12)`, opacity: .3 },
  ], { duration: 850, easing: "cubic-bezier(.5,0,.3,1)" });
  return anim.finished.then(() => { clone.remove(); done(); });
}

function addToCart(id, fromEl) {
  const prev = cart;
  cart = id;
  saveCart();
  renderCart();
  if (prev === "basic" && id === "full") toast("Zamieniono na pakiet pełny");
  else if (prev === id) toast("Ten pakiet już jest w koszyku");
  else toast("Dodano do koszyka");
  flyToCart(fromEl, id).then(() => setTimeout(openCart, 150));
}

function setupCart() {
  renderCart();
  document.addEventListener("click", (e) => {
    const add = e.target.closest("[data-add]");
    if (add) { addToCart(add.dataset.add, add); return; }
    if (e.target.closest("[data-open-cart]")) { openCart(); return; }
    if (e.target.closest("[data-close-cart]")) { closeCart(); return; }
    if (e.target.closest("[data-remove]")) { cart = null; saveCart(); renderCart(); return; }
    if (e.target.closest("[data-upgrade]")) { addToCart("full", null); return; }
    if (e.target.closest("[data-checkout]")) {
      const url = CONFIG.products[cart] && CONFIG.products[cart].checkoutUrl;
      if (url) { window.location.href = url; return; }
      const m = $("[data-cart-msg]");
      m.hidden = false;
      m.textContent = "Płatność nie jest jeszcze podłączona. Uzupełnij checkoutUrl w pliku script.js.";
    }
  });
  scrim.addEventListener("click", closeCart);
  document.addEventListener("keydown", (e) => { if (e.key === "Escape" && cartEl.classList.contains("open")) closeCart(); });
}

/* =========================================================
   Start
   ========================================================= */
function setupLinks() {
  $$("[data-link]").forEach((a) => { a.href = CONFIG.links[a.dataset.link] || "#"; });
}

document.documentElement.classList.add("js");
buildTopics();
buildDialog();
buildBeforeAfter();
setupVideo();
setupLightbox();
setupCart();
setupLinks();
heroMouse();
counters();
update();
window.addEventListener("scroll", onScroll, { passive: true });
window.addEventListener("resize", () => requestAnimationFrame(update));
