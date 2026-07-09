# Old Skull BarberShop — Târgu Jiu · Handoff

Static one-page site (HTML + CSS + vanilla JS). No build step. Drop the folder on any static host.

---

## 1. Design theme
**Ink-parlor / vintage-tattoo.** Soot black base (`#0b0c0d`) with a faded-teal accent
(`#5c8f8a`, pulled straight from the shop's own bearded-skull logo art), oxblood (`#a6372e`) for
CTAs, and aged brass (`#c9a24b`) for the rating/medals. Display type is **Rye** (a woodtype/circus
face that echoes the "OLD SKULL" lettering in their logo), paired with **Barlow / Barlow Condensed**
for body and UI. The real skull mark anchors the hero and Despre; a faint film-grain overlay,
oxblood service marquee, and grayscale team portraits complete the barber-parlor feel. Sticky frosted
nav, mobile hamburger, floating call button, reveal-on-scroll (respects `prefers-reduced-motion`),
and the current weekday auto-highlighted in the schedule.

---

## 2. Real assets used vs placeholders
**Everything is real. No stock placeholders, no invented facts.**

### Business data (all real — sourced from MERO)
- **Name:** Old Skull BarberShop · **Address:** Strada Republicii 24, Târgu Jiu (Gorj), centrul orașului
- **Coords:** 45.0322454, 23.2793523 (used for the OpenStreetMap embed + Google Maps links)
- **Rating:** 4,98 / 5 din **8.650** de recenzii (MERO aggregate)
- **Phones (4 barberi):** Alecs 0787 600 195 · Cristian 0752 980 163 · Cătălin 0765 942 374 · Edmundo 0771 190 573
- **Program:** Lu 10–18:30 · Ma 10–18:30 · Mi 10–20:00 · Jo 09–19:00 · Vi 09–19:00 · Sâ/Du Închis
- **Awards (Șoimii Frumuseții):** Aur 2026, 2025, 2023, 2022, 2019 · Argint 2024, 2021, 2020
- **Despre** copy is the shop's own MERO/Șoimii description, lightly trimmed — not invented.
  - Sources: [MERO](https://mero.ro/p/old-skull-barber-shop) · [Șoimii Frumuseții](https://www.soimiifrumusetii.ro/profile-347280-old-skull-barber-shop) · [Facebook](https://www.facebook.com/OldSkullBarberShopTarguJiu/)

### Services & prices (all real — MERO menu, range prices)
| Serviciu | Durată | Preț |
|---|---|---|
| Tuns | 40–50 min | 45–50 lei |
| Tuns Skin Fade | 50–60 min | 50–60 lei |
| Aranjat barbă (tuns și contur) | 15–20 min | 20–30 lei |
| Tuns + Aranjat barbă | 50–70 min | 65–80 lei |
| Skin Fade + Aranjat barbă (tuns + contur) | 60–80 min | 70–90 lei |
| **Pachet Promo** (Tuns + barbă + spălat) | 60 min | **75 lei** |

### Photos (5 real — from their MERO profile)
- `assets/img/logo-skull.jpg` — the shop's real bearded-skull "OLD SKULL" logo (1600×1494). Used in
  hero, Despre, and (downscaled) as the favicon.
- `assets/img/team-01..04.jpg` — the 4 real barber profile photos from MERO (Alecs, Cristian,
  Cătălin, Edmundo), shown as the "Echipa" cards with click-to-call.
- `assets/img/favicon.png` — 128px favicon generated from the skull logo.
- **Note:** the shop has **no public work-gallery photos** (their MERO gallery is empty and Facebook
  photos require login). Rather than pad with stock, the design leans on the real logo, typography,
  and the real team portraits. If the owner sends haircut/interior photos, a Galerie section slots in
  cleanly after Echipa.

### Reviews — NO fabricated quotes
MERO reviews for this shop are **rating-only** (no public review text). So the Recenzii section shows
the **real** 4,98/8.650 aggregate + the **real** annual award medals — no invented testimonials. If
the owner shares real Google/Facebook review text, drop 2–3 quote cards into that section.

### Map
Real **OpenStreetMap** embed on the exact coordinates. Google Maps directions/search links use the
real address + coords. No API key needed.

---

## 3. Things to confirm / optional upgrades
- **Domain:** `og:url` / `canonical` use a placeholder `https://oldskullbarbershop.ro/` — update once chosen.
- **Booking:** all "Programează-te online" buttons point to their live MERO page.
- **Photos:** add real haircut/interior shots → enables a Galerie section (grid CSS pattern is trivial to add).
- **Reviews:** add real quotes if/when available.

---

## 4. Preview locally
```bash
cd old-skull-barber-targu-jiu
python3 -m http.server 4611
# open http://localhost:4611
```
Or open `index.html` directly (`file://`) — all paths are relative; only the font + map need internet.

---

## 5. File map
```
old-skull-barber-targu-jiu/
├── index.html              # whole page
├── assets/
│   ├── css/style.css       # ink-parlor theme + responsive
│   ├── js/main.js          # nav toggle, scroll reveal, today-highlight, year
│   └── img/                # logo-skull.jpg, team-01..04.jpg, favicon.png
└── HANDOFF.md
```
Semantic HTML, alt text, meta/OG tags, JSON-LD `BarberShop` structured data, lazy-loaded images,
`prefers-reduced-motion` honored. Verified: every img/CSS ref resolves, no placeholder text, no
hover-lift on buttons, mobile responsive with no horizontal overflow.
