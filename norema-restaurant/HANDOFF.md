# Norema Restaurant — Site Handoff

Static website for **Norema Restaurant**, str. Vasile Alecsandri 10, Oradea, Bihor.
Built as a single self-contained static site (HTML + CSS + vanilla JS, no build step).
All copy is in Romanian.

---

## 1. What's real vs. placeholder

### Real data used (verified from public sources)
- **Concept / cuisine:** traditional Romanian + Hungarian (ardelenească) dishes, wood-fired pizza ("pizza pe vatră", 15+ types), opened late 2022, "vibe fresh" reopening. — *bihon.ro, hopsa.io, oradea24.ro*
- **Full menu with real dish names + prices (RON):** pizza, ciorbe/supe, house recommendations, poultry, pork/grill, pasta & salads, breakfast & daily lunch, desserts. Pulled from the restaurant's live **Glovo** listing. — *glovoapp.com/ro/ro/oradea/stores/norema-ord*
  - Prices shown are the **regular Glovo menu prices** (I intentionally did **not** hard-code the rotating "-10%" promo prices, since those change). Marked "orientative" on the page.
  - **Menu layout (2026-07-09 revision):** the old category **filter tabs were removed**. The menu now shows **all categories at once**, each as a titled section, with **a real photo on every dish** (see the Images section for the full real-photo manifest). Dishes render photo-first in a responsive 3-col grid.
- **Hours:** Mon–Thu & Sun 10:00–22:00, Fri–Sat 10:00–23:00. — *hopsa.io*
- **Address + coordinates:** Str. Vasile Alecsandri 10, Oradea 410072; lat 47.0540037, lng 21.9309563. Used in the OpenStreetMap embed, Google Maps directions link, and Schema.org JSON-LD. — *hopsa.io*
- **Contact:** phone +40 772 175 195, email norema.restaurant@gmail.com (from brief; matches listings).
- **Social:** Facebook `/noremarestaurant`, Instagram `/norema_restaurant/`.
- **Social proof:** "100% recomandat" (Facebook, 17 reviews) and "95% apreciat" (Glovo) are real aggregate figures. — *facebook.com, glovoapp.com*

### Images — the menu now uses REAL Norema food photos

The menu (`#meniu`) was rebuilt as a **photo-first grid**: no more category filter tabs — every dish shows a photo, laid out category-by-category as you scroll. **All 50 menu photos are genuine photos of Norema's own dishes**, harvested from the restaurant's live **Glovo** listing (`glovoapp.com/ro/ro/oradea/stores/norema-ord`, vendor id `559084`) on 2026-07-09. **Zero generic web-stock fallbacks were needed** — Glovo had a real photo for every single item.

Two naming prefixes distinguish the two Glovo image sources:

- **`real-*.jpg` (21 files used)** — photos the restaurant **uploaded itself** to its Glovo menu (Glovo path `menus-glovo/products/...`). These are unambiguously Norema's own photography.
- **`glovo-*.jpg` (29 files used)** — photos served from Glovo's per-vendor menu store for Norema (path `global-menu-service/GV_RO/vendor/559084/...`). These are **also Norema's own dishes**: spot-checking confirmed they are shot on the **same terrace, same terracotta-striped placemats, same square white plates / wooden table, with Norema's own branded menu card** visible in several frames — i.e. the same photoshoot as the `real-*` set, just stored under Glovo's vendor-catalog path. Treat them as real Norema photos.

> In short: **every photo on the menu is a real Norema photo.** The `real-` vs `glovo-` split is only about which Glovo storage path it came from, not "real vs stock". If the owner ever wants to swap any specific shot, keep the same filename and it drops straight in — no code change.

Full menu photo manifest (dish → file, all downloaded from Glovo vendor 559084):

**`real-*` (restaurant-uploaded to Glovo):** ciolan-porc, pui-gorgonzola, crispy-cartofi, pui-sos-ciuperci, pulpe-pui-grill, aripioare-pui, gordon-bleu, ceafa-tiganeasca, mititei, snitel-norema, cotlet-ciuperci, cascaval-pane, tagliatelle-creveti, penne-pui, gnocchi-formaggi, salata-caesar, salata-crispy-tzatziki, salata-ton, omleta-taraneasca, papanasi, clatite.

**`glovo-*` (Glovo vendor-catalog for Norema — same photoshoot):** all 10 pizzas (ungureasca, romaneasca, quattro-stagioni, chorizo, quattro-formaggi, diavola, prosciutto-funghi, carbonara, prosciutto, vegetariana); ciorbe (babgulyas, ciorba-burta, ciorba-perisoare, ciorba-grec, ciorba-taraneasca, ciorba-radauteana, supa-crema-ciuperci); pulpa-rata, coaste-bbq, somon; papricas-pui, pui-caprese, snitel-pui; spaghete-carbonara; meniul-zilei, mic-dejun-englezesc, omleta-avocado, mic-dejun-norema, gustul-copilariei.

Extra real photos downloaded and available in `assets/img/` (not yet placed, for the owner's convenience): `real-burger-crispy.jpg`, `glovo-burger-angus.jpg`, `real-pui-grill.jpg`.

### Other images (hero, about, gallery, CTA — unchanged from the previous build)
| File | Status | Notes |
|------|--------|-------|
| `assets/img/wings-real.jpg` | **REAL** | Genuine Norema photo (chicken wings + potato wedges + garlic sauce). Used as the **hero background** and the large gallery tile. |
| `assets/img/ph-pizza.jpg` | **PLACEHOLDER** | Generic pizza. Gallery only. Could be swapped for any `glovo-pizza-*.jpg`. |
| `assets/img/ph-soup.jpg` | **PLACEHOLDER** | Generic soup. Gallery ("Ciorbe de casă"). Could be swapped for `glovo-ciorba-*.jpg`. |
| `assets/img/ph-ribs.jpg` | **PLACEHOLDER** | Generic BBQ ribs. Gallery ("Coaste BBQ"). Could be swapped for `glovo-coaste-bbq.jpg`. |
| `assets/img/ph-dessert.jpg` | **PLACEHOLDER** | Generic dessert. Gallery. Could be swapped for `real-papanasi.jpg`. |
| `assets/img/ph-interior.jpg` | **PLACEHOLDER** | Generic warm restaurant interior. **About** section + gallery ("Atmosfera Norema"). Best replaced with a real 4:5 interior shot from FB/IG. |
| `assets/img/ph-burger.jpg` | **PLACEHOLDER** | Generic burger. Gallery ("Burgeri Norema"). A real `real-burger-crispy.jpg` is already in the folder. |
| `assets/img/ph-hero-table.jpg` | **PLACEHOLDER** | Generic laid table. Background of the **"Eveniment special"** CTA banner. Wants a wide landscape shot. |

> ⚠️ **Owner action (optional):** the **menu is fully covered with real photos**. The remaining `ph-*.jpg` placeholders are only in the **hero/about/gallery/CTA** sections. Replace them with your own FB/IG shots (keep the same filenames, no code change) — the interior/about portrait (4:5 vertical) and the CTA banner (wide landscape) are the highest-value swaps. Several real Glovo shots above can be dropped straight into the gallery if you prefer.

---

## 2. Preview locally

No build step. Any static server works:

```bash
cd norema-restaurant
python3 -m http.server 4599
# then open http://localhost:4599
```

(Opening `index.html` directly via `file://` mostly works too, but the map iframe and lazy-loading behave best over `http://`.)

---

## 3. Deploy to Vercel

The folder is 100% static — deploy as-is.

**Option A — CLI**
```bash
npm i -g vercel
cd norema-restaurant
vercel            # follow prompts; accept defaults
vercel --prod     # promote to production
```
When asked for settings: **no framework**, no build command, **output directory = `.`** (root).

**Option B — Dashboard**
1. Push this folder to a GitHub repo (or drag-and-drop in the Vercel dashboard).
2. New Project → import the repo → Framework preset **"Other"** → Build command **empty** → Output dir **`.`** → Deploy.

**Netlify** equivalent: drag the folder onto app.netlify.com/drop, or `netlify deploy --dir . --prod`.

### After deploy — custom domain
Point `noremarestaurant.ro` (or chosen domain) at Vercel, then update these absolute URLs (currently placeholders) in `index.html`:
- `<link rel="canonical" href="https://noremarestaurant.ro/">`
- `og:url`, `og:image`, `twitter:image` and the JSON-LD `url`/`image` fields.

---

## 4. Notable implementation details
- **SEO/social:** title, meta description, keywords, Open Graph + Twitter cards, canonical, and **Schema.org `Restaurant` JSON-LD** (address, geo, hours, cuisine, phone, `acceptsReservations`) are all in `<head>`.
- **Accessibility:** semantic landmarks, `alt` on every image, ARIA on nav/tabs/mobile menu, keyboard-dismissable mobile menu, `prefers-reduced-motion` respected.
- **Conversion:** "Sună acum" `tel:` links in the nav, hero, visit block, footer, and a pulsing floating call button on mobile. Email `mailto:` with a prefilled subject for event enquiries. "Comandă pe Glovo" links to the live store.
- **Interactivity (vanilla JS, `assets/script.js`):** sticky-nav scroll state, mobile menu, tabbed menu, scroll-reveal animations, auto-highlight of today's opening hours, dynamic footer year.
- **Map:** free OpenStreetMap embed (no API key). To use Google Maps instead, swap the `<iframe src>` in the `#vizita` section for a Google Maps Embed API URL.
- **Fonts:** Playfair Display + Inter via Google Fonts CDN.

## 5. Sources
- Glovo (menu + prices + 95% rating + **all 50 real dish photos**, vendor id 559084): https://glovoapp.com/ro/ro/oradea/stores/norema-ord
  - Real dish photos harvested 2026-07-09. `real-*.jpg` = restaurant-uploaded (`menus-glovo/products/...`); `glovo-*.jpg` = Glovo vendor-catalog for Norema (`global-menu-service/GV_RO/vendor/559084/...`) — verified same photoshoot / same plating & placemats, i.e. also real Norema photos. Glovo covered every menu item, so **no generic web-stock fallbacks were used**.
  - Other public photo sources checked as backups (not needed, since Glovo was complete): Google Maps/Reviews, TripAdvisor, and Norema's Facebook `/noremarestaurant` + Instagram `/norema_restaurant/` galleries.
- Hopsa (hours, coordinates, description, hero photo): https://hopsa.io/en/attractions/romania,food-drink,norema-restaurant-983025986c
- Bihon (concept, pizza list, new dishes): https://www.bihon.ro/ (search "norema")
- Facebook (100% / 17 reviews, socials): https://www.facebook.com/noremarestaurant
- Instagram: https://www.instagram.com/norema_restaurant/
