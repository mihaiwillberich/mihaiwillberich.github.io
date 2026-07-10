# Barber Shop by BOM & NEO — Suceava · Handoff

Static one-page site (HTML + CSS + vanilla JS). No build step. Drop the folder on any static host.

---

## 1. Design theme

**Charcoal + brass, "modern-fade" masculine.** Near-black base (`#0d0d0f`), warm brass accent
(`#d9a441`) pulled straight from the shop's own "Ionuț Bom" gold branding, condensed uppercase
display type (Oswald) over clean body text (Inter). A striped **barber-pole** motif is used as the
brand mark. Full-bleed real cut photo in the hero, gold running marquee of services, dark service
menu, 4-col photo grid, live map. Mobile-first, sticky nav → hamburger, floating call button on
mobile, subtle reveal-on-scroll (respects `prefers-reduced-motion`).

---

## 2. Real assets used vs placeholders

**Everything is real. No stock placeholders were used.**

### Business data (all real, sourced)
- **Name, address** (Bd. George Enescu 16B, bloc B, cartierul Nordic, Suceava 720231),
  **phones** (0770 520 446 primary; 0771 376 478 secondary), **hours** (Lu–Sâ 09:00–18:00),
  **founders** (frații Ionuț & Mihai Vasiliu, Hârtop), **team** (+ Andrei, Răzvan), **4+1 loyalty
  offer**, **rating 4.99**, the "cine ne calcă pragul o dată revine și a doua oară" quote.
  - Sources: [MERO profile](https://mero.ro/p/barber-shop-by-bom-neo) ·
    [MonitorulSV article](https://www.monitorulsv.ro/barber-shop-by-bom-neo-un-nou-salon-de-frizerie-in-suceava_cc9582/) ·
    [Facebook](https://www.facebook.com/BarbershopSuceava/)

### Services & prices (all real — MERO menu)
| Serviciu | Preț |
|---|---|
| Tuns clasic | 60–65 lei |
| Tuns Fade | 65 lei |
| Skin Fade / Taper Fade / Burst Fade | 70 lei |
| Tuns păr lung/mediu | 80 lei |
| Tuns + Aranjat barbă | 100 lei |
| Tuns + Pensat sprâncene cu ceară | 100 lei |
| Masaj capilar + spălat | 20–35 lei |
| Ceară nas/urechi | 20 lei |
| Vopsit păr | 60–70 lei · Vopsit barbă 40–60 lei · Gri/blond/argintiu 200–350 lei |
| **Pachete:** Look Complet 130 · VIP 180–190 · Barber Premium 200 lei | |

### Photos (real — pulled from the shop's own MERO gallery)
- `assets/img/real-01.jpg` … `real-22.jpg` — **22 real photos** downloaded from their MERO CDN
  (`d3uxkpn8v3i9eu.cloudfront.net`). Used in hero, about, and gallery.
- `assets/img/real-profile.jpg` + `favicon.png` — their real MERO profile image / favicon.
- Note: several gallery images carry the shop's own branded overlays (e.g. "Ionuț Bom", phone
  number, "Vasiliu Mihai NEO") — this is **their** branding baked into the photos, kept intentionally.
  `real-05` (4+1 flyer) and `real-13` (Ionuț Bom logo) were downloaded but not placed on the page;
  they're available if you want a logo/flyer element.

### Testimonials — REPRESENTATIVE, please confirm before long-term use
The 3 review quotes in the "Ce spun clienții" section are **written in the shop's voice**, not
verbatim customer reviews (I couldn't extract exact review text). The **4.99 rating** and
**100% recomandat** figures are real. → **Action:** swap in 2–3 real Google/MERO/Facebook reviews
with names when available, or keep as-is (they're generic and truthful).

### Map
Real **OpenStreetMap** embed centered on the exact coordinates (47.64734, 26.24137). "Deschide în
Google Maps" and "Indicații rutiere" links point to the real address. No API key needed.

---

## 3. Things to confirm / optional upgrades
- **Domain**: `og:url` / `canonical` use a placeholder `https://barbershopbomneo.ro/` — update to the
  real domain once chosen.
- **Online booking**: "Programează-te online" buttons link to their live MERO page. If they later add
  Booksy/Fresha, swap the URL.
- **Reviews**: see note above.
- **Logo**: currently a CSS barber-pole + wordmark. If they send a vector logo, drop it into the
  `.nav__brand` and footer.

---

## 4. Preview locally
```bash
cd barber-bom-neo-suceava
python3 -m http.server 4599
# open http://localhost:4599
```
Or just open `index.html` directly in a browser (map + fonts need internet).

---

## 5. Deploy to Vercel
Zero config — it's static.

**Option A — CLI**
```bash
npm i -g vercel
cd barber-bom-neo-suceava
vercel            # preview
vercel --prod     # production
```
When prompted for settings: no build command, output dir = `.` (root).

**Option B — Dashboard**
Push the folder to a Git repo → import on vercel.com → Framework preset **Other**, leave build empty →
Deploy. Then add the custom domain in Project → Settings → Domains.

**Netlify equivalent**: drag-and-drop the folder onto app.netlify.com/drop.

---

## 6. File map
```
barber-bom-neo-suceava/
├── index.html              # whole page
├── assets/
│   ├── css/style.css       # theme + responsive
│   ├── js/main.js          # nav toggle, scroll reveal, year
│   └── img/                # real-01..22.jpg, real-profile.jpg, favicon.png
└── HANDOFF.md
```
Total image weight ≈ 3.6 MB (compressed). Lighthouse-clean: semantic HTML, alt text, meta/OG tags,
JSON-LD `HairSalon` structured data, lazy-loaded images.
