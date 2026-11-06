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
    regulamin: "https://adamwala.pl/regulamin-sklepu-internetowego/",
    prywatnosc: "https://adamwala.pl/polityka-prywatnosci/",
  },
};

/* =========================================================
   Treści sekcji
   ========================================================= */
const TOPICS = [
  ["Rozmowa kwalifikacyjna", "Das Vorstellungsgespräch", "Jak powiedzieć, kim jesteś i gdzie wcześniej pracowałeś. Jak powiedzieć, jakie masz prawo jazdy i dokumenty. Jak zapytać o pieniądze, godziny pracy i mieszkanie.", "Forma „Sie” i czas Perfekt", "Mówisz grzecznie formą „Sie” i opowiadasz o swoim doświadczeniu w czasie przeszłym."],
  ["Załadunek w magazynie u dystrybutora", "Die Beladung im Zentrallager", "Co powiedzieć przy bramie magazynu. Jak zapytać, ile jest palet. Jak powiedzieć, że czegoś brakuje albo coś jest zepsute. Dlaczego nie wolno podpisać papierów, jeśli coś się nie zgadza.", "Liczby i kolejność zdarzeń", "Pewnie podajesz liczby palet i opowiadasz po kolei: zuerst, dann, danach."],
  ["Dostawa i rozładunek u klienta", "Die Lieferung beim Kunden", "Co powiedzieć, kiedy przywozisz towar. Jak zapytać, gdzie postawić palety. Jak poprosić o podpis i pieczątkę. Jak powiedzieć przez telefon, że się spóźnisz.", "Zdania z „weil” i „dass”", "Tłumaczysz „dlaczego” i wiesz, gdzie w takim zdaniu stoi czasownik – na końcu."],
  ["Najczęstsze pytania do kierowcy i odpowiedzi", "Die häufigsten Fragen an den Fahrer", "Jakie pytania usłyszysz w pracy najczęściej i jak krótko na nie odpowiedzieć. Jak grzecznie powiedzieć „nie”, kiedy czegoś nie wolno ci zrobić. Co powiedzieć, kiedy nie rozumiesz pytania.", "Pytania i krótkie odpowiedzi", "Rozpoznajesz pytania na W (wer, was, wo, wann) i odpowiadasz krótko, bez tłumaczenia w głowie."],
  ["Uszkodzony towar albo zła liczba palet", "Beschädigte Ware oder falsche Palettenanzahl", "Co powiedzieć, kiedy towar jest zepsuty albo potłuczony. Jak poprosić, żeby szkodę wpisać na papierach. Co zrobić, kiedy klient źle policzy palety.", "Słowa o szkodach", "Nazywasz szkodę dokładnie: co, ile i gdzie. Mówisz same fakty, bez zgadywania słów."],
  ["Rozmowy kierowcy przez telefon", "Telefongespräche des Fahrers", "Jak zacząć i skończyć rozmowę przez telefon. Jak poprosić, żeby ktoś przeliterował nazwę. Jak zostawić wiadomość. Co powiedzieć, kiedy źle słychać.", "Literowanie i zwroty przez telefon", "Literujesz po niemiecku, rozumiesz liczby przez telefon i znasz zwroty: anrufen, zurückrufen, verbinden."],
  ["Pierwszy dzień w pracy", "Der erste Arbeitstag", "Jak przywitać się w nowej pracy. Co dostajesz pierwszego dnia i jak to się nazywa po niemiecku. Jak sprawdzić ciężarówkę przed jazdą. O co zapytać szefa: choroba, awaria, wypadek, diety.", "Słowa o ciężarówce i dokumentach", "Znasz nazwy rzeczy, które dostajesz pierwszego dnia, i umiesz o nie grzecznie zapytać."],
  ["W trasie: nawigacja, korek, objazd", "Unterwegs: Navi, Stau, Umleitung", "Co to jest korytarz życia i jak go zrobić. Jak wyglądają znaki objazdu. Jak zapytać o drogę i zrozumieć odpowiedź: prosto, w lewo, w prawo, rondo, światła, zawrócić.", "Kierunki i opis drogi", "Rozumiesz wskazówki: geradeaus, links, rechts, Kreisverkehr – i umiesz je powtórzyć."],
  ["Przerwa na parkingu: jedzenie, prysznic, nocleg", "Pause auf dem Rastplatz und Autohof", "Jak zamówić jedzenie i zapłacić. Jak zapytać o cenę parkingu, prysznic i rachunek dla firmy. Jak rozmawiać z kierowcą z innego kraju.", "Zamawianie, ceny, rachunek", "Zamawiasz, pytasz o cenę i rachunek. Dajesz krótkie rady w formie polecenia: Prüf…, Nimm…"],
  ["Koniec miesiąca: wypłata, diety i urlop", "Monatsende: Lohnabrechnung, Spesen und Urlaub", "Co znaczą słowa na pasku wypłaty: brutto, netto, podatek, ubezpieczenia, diety, nadgodziny. Jak grzecznie powiedzieć, że coś się nie zgadza. Jak poprosić o urlop.", "Daty i słowa z paska wypłaty", "Rozumiesz Brutto, Netto, Steuer, Spesen. Podajesz datę i powód, kiedy coś się nie zgadza."],
  ["Klient nie przyjmuje towaru", "Der Kunde nimmt die Ware nicht an", "Jak spokojnie rozmawiać, kiedy klient nie chce towaru. Co musi być napisane na dokumencie dostawy. Kiedy podpisać, a kiedy dopisać swoją uwagę.", "Spokojny sprzeciw", "Mówisz „nie zgadzam się” spokojnie i umiesz dopisać swoją uwagę na dokumencie."],
  ["Wypadek na autostradzie", "Unfall auf der Autobahn", "Co robić zaraz po wypadku. Jak zadzwonić na policję (110) i po karetkę (112) i co powiedzieć. Jak rozmawiać z policjantem. Dlaczego nie podpisywać papierów, z którymi się nie zgadzasz.", "Zgłoszenie alarmowe", "Podajesz po kolei: gdzie, co się stało, ilu jest rannych. Opisujesz wypadek w czasie przeszłym."],
  ["Wypadek przy rozładunku", "Unfall beim Entladen", "Jak bezpiecznie rozładowywać windą załadowczą. Co zrobić, kiedy ktoś się zrani w pracy: pierwsza pomoc, telefon do firmy, zeszyt pierwszej pomocy. Jak spokojnie mówić o tym, co się stało.", "Pierwsza pomoc i ciało", "Nazywasz obrażenia i części ciała, umiesz przyznać się do błędu i opisać, co się stało."],
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
  list.innerHTML = TOPICS.map(([pl, de, learn, chip, gain], i) => `
    <li class="topic vehicle van" data-vehicle style="--t:${i};--d:${(i % 2) * .1}">
      <button class="topic-btn" type="button" aria-expanded="false" aria-controls="tm-${i}">
        <span class="topic-no">${i + 1}</span>
        <span class="topic-titles"><span class="topic-pl">${pl}</span><span class="topic-de" lang="de">${de}</span><span class="topic-chip">Niemiecki: ${chip}</span></span>
        ${chev}
      </button>
      <div class="topic-more" id="tm-${i}"><div>
        <p><b>Czego się nauczysz:</b> ${learn}</p>
        <p class="gain"><b>Zyskujesz w niemieckim:</b> ${gain}</p>
      </div></div>
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
// Karty jako ciężarówki widziane z góry: światła, koła, kabina
function setupVehicles() {
  $$("[data-vehicle]").forEach((el) => el.insertAdjacentHTML("beforeend",
    '<span class="lights" aria-hidden="true"></span>' +
    '<span class="tires l" aria-hidden="true"></span><span class="tires r" aria-hidden="true"></span>' +
    '<span class="cab-top" aria-hidden="true"><span class="windshield"></span><span class="mirror l"></span><span class="mirror r"></span></span>'));
}

/* =========================================================
   Ruch uliczny bez końca
   Nowe auta pojawiają się tuż poza ekranem, a znikają,
   kiedy są dalej niż 25% wysokości ekranu nad nim albo pod nim
   (obszar 150% ekranu), więc na pewno ich nie widać.
   ========================================================= */
function setupTraffic() {
  if (reduceMotion) return;
  const roads = $$(".lanes.has-traffic");
  if (!roads.length) return;
  const wide = window.matchMedia("(min-width: 1000px)");
  const COLORS = ["#D52B1E", "#F7F8F6", "#5B6470", "#00539F", "#F5B700", "#1F2328", "#8DB2D3", "#2E7D32"];
  const rnd = (a, b) => a + Math.random() * (b - a);
  const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];

  // Pasy ruchu: x liczony od lewej krawędzi jezdni; dir -1 = w górę (do przodu), +1 = w dół (my wyprzedzamy)
  const lanesFor = (w) => wide.matches
    ? [
        { x: 60, dir: -1, speed: [110, 190], kind: "car" },
        { x: w - 60, dir: 1, speed: [40, 90], kind: "car" },
        { x: w / 2, dir: -1, speed: [140, 220], kind: "moto", rare: true },
      ]
    : [
        { x: 11, dir: -1, speed: [120, 200], kind: "moto" },
        { x: w - 11, dir: 1, speed: [40, 80], kind: "moto", rare: true },
      ];

  const state = roads.map((road) => {
    const layer = document.createElement("div");
    layer.className = "traffic";
    layer.setAttribute("aria-hidden", "true");
    road.appendChild(layer);
    return { road, layer, cars: [], visible: false, last: {} };
  });

  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      const s = state.find((x) => x.road === en.target);
      if (s) s.visible = en.isIntersecting;
    });
    if (state.some((s) => s.visible)) start();
  }, { rootMargin: "25% 0px" });
  state.forEach((s) => io.observe(s.road));

  function makeCar(kind) {
    const el = document.createElement("div");
    let w, h;
    if (kind === "moto") {
      w = 14; h = 38; el.className = "tcar moto";
    } else if (Math.random() < .22) {
      w = 46; h = 128; el.className = "tcar van";
    } else {
      w = 44; h = 84; el.className = "tcar";
    }
    el.style.setProperty("--c", pick(COLORS));
    el.innerHTML = kind === "moto" ? "<i></i>" : "<i class='tw'></i><i class='tr'></i>";
    return { el, w, h };
  }

  function spawn(s, lane, li, y) {
    const c = makeCar(lane.kind);
    const car = { ...c, lane: li, x: lane.x - c.w / 2, y, v: lane.dir * rnd(lane.speed[0], lane.speed[1]) };
    car.el.style.transform = `translate3d(${car.x}px, ${y}px, 0)`;
    s.layer.appendChild(car.el);
    s.cars.push(car);
  }

  const free = (s, li, y, h) => s.cars.every((c) => c.lane !== li || y + h + 60 < c.y || y > c.y + c.h + 60);

  let raf = 0, prev = 0;
  function start() { if (!raf) { prev = performance.now(); raf = requestAnimationFrame(tick); } }

  function tick(now) {
    const dt = Math.min(.05, (now - prev) / 1000);
    prev = now;
    const vh = window.innerHeight;
    let any = false;

    for (const s of state) {
      if (!s.visible) {
        if (s.cars.length) { s.cars.forEach((c) => c.el.remove()); s.cars = []; }
        continue;
      }
      any = true;
      const r = s.road.getBoundingClientRect();
      const W = r.width, H = r.height;
      const viewTop = -r.top, viewBot = viewTop + vh;
      const zoneTop = viewTop - vh * .25, zoneBot = viewBot + vh * .25;
      const lanes = lanesFor(W);

      // ruch i sprzątanie
      s.cars = s.cars.filter((c) => {
        c.y += c.v * dt;
        const lane = lanes[c.lane];
        if (!lane || c.y + c.h < Math.max(0, zoneTop) || c.y > Math.min(H, zoneBot) || c.y < -c.h || c.y > H) {
          c.el.remove();
          return false;
        }
        c.x = lane.x - c.w / 2;
        c.el.style.transform = `translate3d(${c.x}px, ${c.y}px, 0)`;
        return true;
      });

      // nowe auta tuż poza ekranem, po stronie, z której nadjeżdżają
      lanes.forEach((lane, li) => {
        const inLane = s.cars.filter((c) => c.lane === li).length;
        const target = Math.max(1, Math.round((zoneBot - zoneTop) / (lane.rare ? 900 : 380)));
        const key = li;
        if (inLane >= target || now - (s.last[key] || 0) < rnd(500, 1400)) return;
        const probe = lane.kind === "moto" ? 38 : 128;
        let y = lane.dir < 0 ? viewBot + rnd(10, vh * .2) : viewTop - probe - rnd(10, vh * .2);
        // pierwsze auta od razu na ekranie, żeby ruch był widać od początku
        if (inLane === 0 && !s.last[key]) y = rnd(viewTop, viewBot - probe);
        y = Math.max(0, Math.min(H - probe, y));
        if (!free(s, li, y, probe)) return;
        spawn(s, lane, li, y);
        s.last[key] = now;
      });
    }
    raf = any ? requestAnimationFrame(tick) : 0;
  }
  wide.addEventListener("change", () => state.forEach((s) => { s.cars.forEach((c) => c.el.remove()); s.cars = []; s.last = {}; }));
}

/* =========================================================
   Generator mostów: przy każdym wejściu na stronę każdy most
   jest inny (materiał, szerokość, skos, pasy, latarnie, auta).
   ========================================================= */
const BRIDGE_TYPES = [
  { name: "beton",      deck: "#AEB6BE", deck2: "#98A1AA", rail: "posts",  railColor: "#5B6470" },
  { name: "stal",       deck: "#7C8C9C", deck2: "#5E6E7E", rail: "truss",  railColor: "#2F5E8C" },
  { name: "zielona",    deck: "#8F9A93", deck2: "#7A867F", rail: "truss",  railColor: "#3F6B52" },
  { name: "rdza",       deck: "#9A8F86", deck2: "#857A71", rail: "truss",  railColor: "#8A4B2E" },
  { name: "kamień",     deck: "#B9A88F", deck2: "#A3927A", rail: "stone",  railColor: "#7D6A52" },
  { name: "nowoczesny", deck: "#D9DEE3", deck2: "#C5CCD3", rail: "glass",  railColor: "#8DB2D3" },
];
function setupBridges() {
  const rnd = (a, b) => a + Math.random() * (b - a);
  const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
  const CAR_COLORS = ["#D52B1E", "#F7F8F6", "#00539F", "#F5B700", "#1F2328", "#2E7D32", "#5B6470"];
  let last = null;
  $$(".bridge").forEach((br) => {
    let t = pick(BRIDGE_TYPES);
    if (last && t.name === last.name) t = pick(BRIDGE_TYPES.filter((x) => x.name !== last.name));
    last = t;
    const deckH = Math.round(rnd(96, 150));
    const lanes = Math.random() < .55 ? 2 : 1;
    const sidewalk = Math.random() < .5;
    const lamps = Math.random() < .6 ? Math.round(rnd(110, 220)) : 0;
    const skew = (Math.random() < .5 ? -1 : 1) * rnd(0, 4.5);
    br.dataset.bridge = t.name;
    br.style.setProperty("--deck", t.deck);
    br.style.setProperty("--deck2", t.deck2);
    br.style.setProperty("--rail", t.railColor);
    br.style.setProperty("--deck-h", deckH + "px");
    br.style.setProperty("--skew", skew.toFixed(2) + "deg");
    br.style.setProperty("--lamp-gap", lamps ? lamps + "px" : "0px");

    const cars = [];
    const n = Math.round(rnd(1, lanes === 2 ? 4 : 2));
    for (let i = 0; i < n; i++) {
      const dir = lanes === 2 ? (i % 2 ? -1 : 1) : (Math.random() < .5 ? -1 : 1);
      const dur = rnd(7, 15).toFixed(1);
      const delay = (-rnd(0, 15)).toFixed(1);
      const lane = lanes === 2 ? (dir === 1 ? "a" : "b") : "a";
      cars.push(`<span class="bcar lane-${lane} ${dir === 1 ? "to-r" : "to-l"}" style="--c:${pick(CAR_COLORS)};animation-duration:${dur}s;animation-delay:${delay}s"><i></i></span>`);
    }
    const deck = document.createElement("div");
    deck.className = `deck rail-${t.rail} lanes-${lanes}${sidewalk ? " walk" : ""}${lamps ? " lamps" : ""}`;
    deck.setAttribute("aria-hidden", "true");
    deck.innerHTML = `<div class="deck-road">${cars.join("")}</div>`;
    br.prepend(deck);
  });
}

function setupLinks() {
  $$("[data-link]").forEach((a) => { if (CONFIG.links[a.dataset.link]) a.href = CONFIG.links[a.dataset.link]; });
}

// Okno „Ustawienia cookies”
function setupCookies() {
  const box = $("[data-cookies]");
  let opener;
  const close = () => { box.hidden = true; opener && opener.focus(); };
  $("[data-cookies-open]").addEventListener("click", (e) => {
    opener = e.currentTarget;
    box.hidden = false;
    $("[data-cookies-close]").focus();
  });
  $("[data-cookies-close]").addEventListener("click", close);
  $("[data-cookies-clear]").addEventListener("click", () => {
    try { localStorage.removeItem(CART_KEY); } catch (_) {}
    cart = null; renderCart(); close();
    toast("Dane strony wyczyszczone");
  });
  box.addEventListener("click", (e) => { if (e.target === box) close(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape" && !box.hidden) close(); });
}

document.documentElement.classList.add("js");
buildTopics();
buildDialog();
buildBeforeAfter();
setupVideo();
setupLightbox();
setupCart();
setupLinks();
setupCookies();
setupVehicles();
setupBridges();
setupTraffic();
heroMouse();
counters();
update();
window.addEventListener("scroll", onScroll, { passive: true });
window.addEventListener("resize", () => requestAnimationFrame(update));
