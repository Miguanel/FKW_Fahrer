# Landing page – Niemiecki dla przewoźników

Otwórz `index.html` w przeglądarce, żeby zobaczyć stronę. Żeby ją opublikować, wgraj cały folder `LandingPage` na serwer (hosting, Netlify, GitHub Pages itp.).

## Pliki

- `index.html` – treść strony
- `style.css` – wygląd i animacje
- `script.js` – ruch przy przewijaniu, koszyk, film, a na górze **CONFIG** (to, co trzeba uzupełnić)
- `assets/strony/` – podglądy prawdziwych stron z PDF-a (sekcja „Zajrzyj do środka”)

## Co uzupełnić przed startem (script.js → CONFIG)

1. **Film** – wpisz ID filmu z YouTube w `video.youtubeId` albo wrzuć plik jako `assets/film.mp4`. Dopóki nie ma filmu, po kliknięciu „play” pojawia się napis „Film pojawi się tu wkrótce”.
2. **Płatności** – w `products.basic.checkoutUrl` i `products.full.checkoutUrl` wklej linki do płatności (np. Stripe Payment Link, Przelewy24, sklep). Przycisk „Biorę to” dodaje pakiet do koszyka, a „Przejdź do płatności” otwiera ten link.
3. **Stopka** – linki do regulaminu, polityki prywatności i kontaktu w `links`.

## Jak działa koszyk

- W koszyku jest zawsze jeden pakiet. Pakiet pełny zawiera podstawowy, więc kupowanie obu nie ma sensu.
- Kiedy ktoś ma w koszyku pakiet podstawowy, widzi propozycję: „Dopłać 101 zł i weź pakiet pełny”.
- Koszyk zapamiętuje wybór w przeglądarce (localStorage).

## Ceny

Ceny są w dwóch miejscach: w `CONFIG.products` (koszyk) i w `index.html` (karty cennika, hero, pasek na telefonie, ostatnia sekcja). Przy zmianie ceny popraw oba.

## Liczby na stronie (stan z 4.11.2026)

13 tematów, 52 dialogi, 923 słówka w słowniczkach, 50 pytań i odpowiedzi, 60 zdań na rozmowę o pracę, 235 stron (PDF z LibreOffice; w Wordzie liczba stron może się trochę różnić). Pakiet podstawowy = część „Bonusy” (ok. 20 stron).
# FKW_Fahrer
