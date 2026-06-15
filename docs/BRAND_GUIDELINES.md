# ProConnect Landing Page — Brand & Style Guideline (Machine-Implementable)

This document specifies every styling token and component used by the ProConnect
marketing landing pages. Values are extracted directly from the source
(`shared.jsx`, `index.html`, and the page components) and are authoritative.

- **Source of truth:** the `PC` token object in `shared.jsx`.
- **Units:** all numbers are `px` unless stated otherwise.
- **Font:** Montserrat for everything. No other typeface is used.
- **Spelling:** US English.
- **Punctuation:** do not use em dashes (`—`) or en dashes (`–`) in copy. Use periods, commas, "to" for ranges, and hyphens for labels.

Machine-readable token blocks are provided in sections 11 (CSS variables), 12 (JSON), and 13 (JS object). Implement from those; the prose sections describe intent.

---

## 1. Foundations / Global

```css
*, *::before, *::after { box-sizing: border-box; }
html, body { margin: 0; padding: 0; font-family: 'Montserrat', sans-serif; background: #FFFFFF; }
body { overflow-x: hidden; }

/* Scrollbar */
::-webkit-scrollbar { width: 6px; height: 6px; }
::-webkit-scrollbar-track { background: #F8F9F9; }
::-webkit-scrollbar-thumb { background: #EAEBEB; border-radius: 3px; }
::-webkit-scrollbar-thumb:hover { background: #B5B6B6; }

/* Links */
a { transition: color 0.15s; }
```

Font loading (Google Fonts), in `<head>`:

```html
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
```

Available Montserrat weights: **400, 500, 600, 700, 800**. Do not request others.

---

## 2. Color

### 2.1 Core brand

| Token | Hex | Use |
|-------|-----|-----|
| `blue` | `#1560BD` | Primary brand. Primary buttons, links, active nav, accents. |
| `blueDark` | `#1151A6` | Primary button hover. |
| `orange` | `#FF7711` | Secondary accent. Job-seeker theme, required-field asterisk, orange CTAs. |
| `orangeDark` | `#E06800` | Orange button hover. |
| `navy` | `#042648` | Deep brand navy. Jobs search header, dark surfaces, navy buttons. |

### 2.2 Neutrals

| Token | Hex | Use |
|-------|-----|-----|
| `dark` | `#292929` | Primary text, headings. |
| `gray` | `#929393` | Secondary / muted text. |
| `medGray` | `#B5B6B6` | Tertiary text, disabled, chevrons. |
| `border` | `#EAEBEB` | Borders, dividers, hairlines. |
| `bg` | `#F8F9F9` | Subtle page / section background. |
| `cardBg` | `#F7F8F8` | Card surface tint. |
| `lightBlue` | `#EEFAFF` | Blue tint background (badges, feature band, icon chips). |
| `white` | `#FFFFFF` | Surfaces, text on dark. |

### 2.3 Semantic

| Token | Hex | Hover | Use |
|-------|-----|-------|-----|
| `green` | `#16A34A` | `#15803D` | Success, "free", positive stats, verification. |
| `red` | `#EF4444` | `#DC2626` | Danger, errors, negative comparison. |

### 2.4 Tag / badge palette (`PCTag`)

Each tag = pale background + saturated foreground.

| Variant | Background | Foreground |
|---------|-----------|------------|
| blue | `#DDEAFB` | `#1560BD` |
| orange | `#FFF0E4` | `#FF7711` |
| green | `#DCFCE7` | `#16A34A` |
| gray | `#EAEBEB` | `#929393` |
| red | `#FEE2E2` | `#EF4444` |
| navy | `#E2EBF5` | `#042648` |
| yellow | `#FEF9C3` | `#CA8A04` |

### 2.5 Avatar auto-colors

Deterministic background for initials avatars (index by first char code):
`#1560BD`, `#7C3AED`, `#FF7711`, `#16A34A`, `#0891B2`, `#BE185D`.

### 2.6 Rules

- Default text is `dark` `#292929`; secondary text is `gray` `#929393`.
- On dark/navy/blue surfaces, text is `#FFFFFF` or `rgba(255,255,255,0.85)` for body.
- Use exactly one primary CTA color (`blue`) per view; `orange` is the job-seeker accent only.
- Never introduce new hex values for marketing pages; use the tokens above.

---

## 3. Typography

Base body: **14px / weight 500 / line-height ~1.6**, color `dark`.

### 3.1 Responsive type scale (mobile → desktop)

| Role | Mobile | Desktop | Weight | Line-height | Notes |
|------|--------|---------|--------|-------------|-------|
| Hero H1 (homepage) | 34 | 50 | 800 | 1.12 | letter-spacing `-0.5px` |
| Page title H1 (inner pages) | 32 | 46 | 800 | 1.15 | |
| Section heading H2 | 26 | 34 | 700 | 1.2 | most common heading |
| Sub-section H2 | 24 | 32 | 700 | 1.25 | narrower sections |
| CTA band title | 28 | 36–38 | 800 | 1.2 | on colored band, white |
| Card title H3 | 17 | 21 | 700 | 1.25–1.3 | fixed (not responsive) |
| Body large | 16 | 16 | 500 | 1.7 | hero/subhead paragraphs |
| Body | 14–15 | 14–15 | 500 | 1.6–1.65 | default paragraph |
| Small / meta | 12–13 | 12–13 | 500 | 1.5 | captions, dates, helper |
| Eyebrow / tag | 10–11 | 10–11 | 700 | 1 | uppercase, letter-spacing `0.5px` |

### 3.2 Weight semantics

| Weight | Use |
|--------|-----|
| 400 | rare; long-form only |
| 500 | body text, paragraphs |
| 600 | labels, nav links, buttons, emphasized inline |
| 700 | headings, card titles, bold UI |
| 800 | display / hero / page titles, big stats |

### 3.3 Line-heights in use

`1.12, 1.15, 1.2, 1.25, 1.3, 1.6, 1.65, 1.7, 1.75`. Tighter for large headings, looser (1.6–1.75) for body.

---

## 4. Spacing scale

4px-based. Common steps (px):

`4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 32, 36, 40, 44, 56, 64, 72`

Guidance:
- **Inline gaps** (icon/text, chips): 6–10.
- **Element gaps** (form fields, list rows): 10–16.
- **Card padding:** 18–30 (commonly 22–28).
- **Grid gaps:** 18–24 (feature grids 22).
- **Section vertical padding:** desktop 64–72, mobile 36–48 (see §6).
- **Container horizontal padding:** 24 (mobile nav 14).

---

## 5. Radius, shadow, motion

### 5.1 Border radius

| Token | Value | Use |
|-------|-------|-----|
| xs | 4 | tags |
| sm | 6 | small buttons (xs/sm) |
| md | 8 | buttons (md/lg/xl), inputs |
| lg | 10 | list rows, small cards, selects |
| xl | 12 | popovers, mid cards |
| 2xl | 14 | standard cards, panels |
| 3xl | 16–18 | large cards, media |
| band | 20–22 | CTA bands |
| pill | 20–24 | pills, filter chips, badges |
| full | `50%` / `9999px` | avatars, circular |

Scrollbar thumb radius: `3px`.

### 5.2 Elevation (box-shadow)

| Token | Value | Use |
|-------|-------|-----|
| hairline | `0 1px 0 #EAEBEB` | sticky nav bottom edge |
| xs | `0 1px 3px rgba(0,0,0,0.2)` | subtle raise |
| sm | `0 6px 24px rgba(4,38,72,0.07)` | resting cards |
| md | `0 10px 40px rgba(4,38,72,0.06)` | calculator / form card |
| lg | `0 12px 40px rgba(4,38,72,0.18)` | floating hero card |
| xl | `0 18px 50px rgba(4,38,72,0.18)` | elevated feature |
| popover | `0 12px 32px rgba(0,0,0,0.18)` | dropdowns, menus |
| buttonFloat | `0 4px 16px rgba(0,0,0,0.22)` | floating round buttons |

Brand shadows use the navy tint `rgba(4,38,72,a)`; neutral UI shadows use `rgba(0,0,0,a)`.

### 5.3 Motion

| Token | Value |
|-------|-------|
| default transition | `all 0.15s` |
| link transition | `color 0.15s` |
| page enter | `fadeIn 0.25s ease` — `from { transform: translateY(8px) } to { transform: translateY(0) }` |

```css
.page-enter { animation: fadeIn 0.25s ease; }
@keyframes fadeIn { from { transform: translateY(8px); } to { transform: translateY(0); } }
```

Keep transitions short (0.12–0.18s). No long/elastic easings.

---

## 6. Layout

### 6.1 Breakpoints (`useMobile(bp)` = viewport `<= bp`)

| Breakpoint | Used by |
|-----------|---------|
| **820** | default for nearly all sections (primary mobile breakpoint) |
| 900 | jobs board, a few sections |
| 960 | select sections |
| 1000 | top navigation collapse |
| 640 | fine-grained component tweaks |

Default rule: treat **≤ 820px as mobile**. Collapse the **top nav at ≤ 1000px**.

### 6.2 Container max-widths

| Max-width | Use |
|-----------|-----|
| 1240 | top nav, homepage hero, footer (widest) |
| 1180 | feature/stakeholder/testimonial sections |
| 1140 | standard content sections |
| 1080 | occasional |
| 1000 | narrow content (logos, calculator) |
| 920 / 800 / 760 | comparison tables, prose, hero text blocks |
| 560 / 360 | inline copy blocks, cards |

Pattern: `max-width: <W>; margin: 0 auto; padding: 0 24px;`

### 6.3 Section vertical rhythm

Standard section padding:

| Context | Mobile | Desktop |
|---------|--------|---------|
| Standard section | `48px 0` | `72px 0` or `64px 0` |
| Compact section | `36–40px 0` | `56px 0` |
| Tight section | `32px 0` | `48px 0` |
| Hero (inner page) | `44px 0 24px` | `64px 0 40px` |
| CTA band (inner padding) | `44px 28px` / `48px 28px` | `64px` / `72px` |

### 6.4 Grids

- Feature/stat grids: `repeat(3, 1fr)` or `repeat(4, 1fr)` desktop, `1fr` (or `1fr 1fr`) mobile.
- Two-column hero: `1fr 1fr` desktop, `1fr` mobile, `gap: 44`.
- Card grid gap: 18–24.

---

## 7. Components

### 7.1 Button (`PCButton`)

Base: `font-family: Montserrat; font-weight: 600; display: inline-flex; align-items: center; justify-content: center; gap: 7; transition: all 0.15s; cursor: pointer;` Disabled: `opacity: 0.55; cursor: not-allowed;`

**Sizes**

| size | fontSize | padding | height | radius |
|------|----------|---------|--------|--------|
| xs | 11 | `5px 10px` | 26 | 6 |
| sm | 12 | `7px 14px` | 32 | 6 |
| md | 14 | `10px 20px` | 40 | 8 |
| lg | 15 | `12px 28px` | 48 | 8 |
| xl | 16 | `14px 32px` | 52 | 8 |

**Variants** (background / text / border; hover background in parentheses)

| variant | background (hover) | text | border |
|---------|--------------------|------|--------|
| primary | `#1560BD` (`#1151A6`) | `#FFF` | none |
| secondary | `#FFF` (`#EEF3FB`) | `#1560BD` | `1.5px solid #1560BD` |
| orange | `#FF7711` (`#E06800`) | `#FFF` | none |
| ghost | `transparent` (`#EAEBEB`) | `#292929` | none |
| danger | `#EF4444` (`#DC2626`) | `#FFF` | none |
| navy | `#042648` (`#031D3E`) | `#FFF` | none |
| light | `#F8F9F9` (`#EAEBEB`) | `#292929` | `1px solid #EAEBEB` |

Default variant `primary`, default size `md`. On dark bands use `light` or a transparent-white outline (`background: transparent; color: #fff; border-color: rgba(255,255,255,0.7)`).

### 7.2 Tag / chip (`PCTag`)

`display: inline-flex; align-items: center; padding: 2px 8px; border-radius: 4; font-size: 10; font-weight: 700; letter-spacing: 0.5px; text-transform: uppercase; font-family: Montserrat;` Colors per §2.4. Default variant `blue`.

### 7.3 Input (`PCInput`)

- Label: `font-size: 13; font-weight: 600; color: #292929;` Required marker: `*` in `#FF7711`.
- Field: `height: 42; border-radius: 8; border: 1.5px solid #EAEBEB; padding: 0 12px (left 38 if icon); font-size: 14; font-weight: 500; color: #292929; background: #FFF; outline: none; transition: border-color 0.15s;`
- Focus: border becomes `#1560BD`.
- Icon: absolutely positioned left 12, color `#929393`.
- Helper text: `font-size: 11; color: #929393;`

Selects mirror inputs: `height: 46–50; border-radius: 10; border: 1–1.5px solid;` custom `▼` chevron in `#1560BD` or `#929393`.

### 7.4 Avatar (`PCAvatar`)

Circle. Default `size: 36; border-radius: 50%; font-weight: 700; color: #FFF; font-size: max(10, size*0.36);` Background = provided or deterministic from §2.5. Initials = up to 2 uppercase letters.

### 7.5 Card

`background: #FFF; border: 1px solid #EAEBEB; border-radius: 14; padding: 22–28;` Optional resting shadow `sm`. Tinted variants use `bg`/`lightBlue`/`cardBg` backgrounds.

### 7.6 Section heading block

Centered: optional `PCTag` eyebrow, then H2 (`26→34`, weight 700, `#292929`), optional supporting paragraph (`14`, `#929393`, max-width ~620, centered). Bottom margin to grid ~36–44.

### 7.7 CTA band

Full-width colored panel: `background: <blue|green|orange|navy>; border-radius: 22; padding: 64–72 (desktop);` White title (`28→36`, weight 800), `rgba(255,255,255,0.85)` body, buttons centered (`light` + outlined-white).

### 7.8 Top navigation

Sticky: `position: sticky; top: 0; z-index: 100; background: #FFF; box-shadow: 0 1px 0 #EAEBEB; height: 72;` Logo left (height 26 desktop / 18 mobile). Links: `font-size: 14; weight 500` (active 700, color `#1560BD`). Right: `Request Demo` (secondary) + `Sign Up` (primary). Collapses to hamburger at ≤ 1000.

### 7.9 Footer

`background: #0D0D0D; color: #FFF; padding: 60px 0 28px;` Logo uses dark variant (white). Column headers: `font-size: 12; weight 700; letter-spacing 0.8px; color: rgba(255,255,255,0.5);` Links `rgba(255,255,255,0.75)` → white on hover. Social icons: 46px circle, `1px solid rgba(255,255,255,0.25)`.

### 7.10 Filter pill (jobs)

`padding: 10px 18px; border-radius: 24; border: 1px solid rgba(255,255,255,0.45);` on navy header. Active: white background, navy text, weight 700.

---

## 8. Iconography

- Inline SVG only, stroke-based, `fill: none` with `stroke` from tokens.
- Stroke width: **1.6** default (range 1.4–1.8). Nav/menu glyphs use **2.2**.
- `stroke-linecap: round; stroke-linejoin: round`.
- Icon tints: line `#1560BD` / `#FF7711`; filled backings use pale tints (`#DDEAFB`, `#FFE9D6`).
- Icon chip: rounded square `40–46`, radius `11`, pale tinted background, centered icon.

---

## 9. Logo

- File: `proconnect-logo.svg`, intrinsic `297 × 45` (aspect ratio ≈ 6.6 : 1).
- Default render height: **26–30px** (`width = round(height * 297/45)`).
- On dark backgrounds use the white version via CSS: `filter: brightness(0) invert(1)`.
- Keep clear space ≥ the cap height around the mark. Do not recolor, stretch, or rotate.

---

## 10. Content & voice (style rules that affect rendering)

- Tone: professional, clear, formal. Short sentences. Active voice.
- No em/en dashes anywhere in visible copy (see header note).
- Numbers/ranges: "9,000,000 to 13,000,000", labels use hyphens ("Full-Time", "A-Z").
- Sentence case for body and most headings; tags/eyebrows are UPPERCASE.
- US spelling (center, recognize, organization).

---

## 11. CSS custom properties (copy-paste)

```css
:root {
  /* Brand */
  --pc-blue: #1560BD;
  --pc-blue-dark: #1151A6;
  --pc-orange: #FF7711;
  --pc-orange-dark: #E06800;
  --pc-navy: #042648;
  --pc-navy-dark: #031D3E;

  /* Neutrals */
  --pc-dark: #292929;
  --pc-gray: #929393;
  --pc-med-gray: #B5B6B6;
  --pc-border: #EAEBEB;
  --pc-bg: #F8F9F9;
  --pc-card-bg: #F7F8F8;
  --pc-light-blue: #EEFAFF;
  --pc-white: #FFFFFF;

  /* Semantic */
  --pc-green: #16A34A;
  --pc-green-dark: #15803D;
  --pc-red: #EF4444;
  --pc-red-dark: #DC2626;

  /* Typography */
  --pc-font: 'Montserrat', sans-serif;

  /* Radius */
  --pc-radius-xs: 4px;
  --pc-radius-sm: 6px;
  --pc-radius-md: 8px;
  --pc-radius-lg: 10px;
  --pc-radius-xl: 12px;
  --pc-radius-2xl: 14px;
  --pc-radius-3xl: 16px;
  --pc-radius-band: 22px;
  --pc-radius-pill: 24px;

  /* Elevation */
  --pc-shadow-hairline: 0 1px 0 #EAEBEB;
  --pc-shadow-sm: 0 6px 24px rgba(4,38,72,0.07);
  --pc-shadow-md: 0 10px 40px rgba(4,38,72,0.06);
  --pc-shadow-lg: 0 12px 40px rgba(4,38,72,0.18);
  --pc-shadow-xl: 0 18px 50px rgba(4,38,72,0.18);
  --pc-shadow-popover: 0 12px 32px rgba(0,0,0,0.18);

  /* Motion */
  --pc-transition: all 0.15s;

  /* Layout */
  --pc-container: 1240px;
  --pc-container-content: 1140px;
  --pc-gutter: 24px;
}
```

---

## 12. Design tokens (JSON)

```json
{
  "color": {
    "brand": { "blue": "#1560BD", "blueDark": "#1151A6", "orange": "#FF7711", "orangeDark": "#E06800", "navy": "#042648", "navyDark": "#031D3E" },
    "neutral": { "dark": "#292929", "gray": "#929393", "medGray": "#B5B6B6", "border": "#EAEBEB", "bg": "#F8F9F9", "cardBg": "#F7F8F8", "lightBlue": "#EEFAFF", "white": "#FFFFFF" },
    "semantic": { "green": "#16A34A", "greenDark": "#15803D", "red": "#EF4444", "redDark": "#DC2626" },
    "tag": {
      "blue": { "bg": "#DDEAFB", "fg": "#1560BD" },
      "orange": { "bg": "#FFF0E4", "fg": "#FF7711" },
      "green": { "bg": "#DCFCE7", "fg": "#16A34A" },
      "gray": { "bg": "#EAEBEB", "fg": "#929393" },
      "red": { "bg": "#FEE2E2", "fg": "#EF4444" },
      "navy": { "bg": "#E2EBF5", "fg": "#042648" },
      "yellow": { "bg": "#FEF9C3", "fg": "#CA8A04" }
    },
    "avatar": ["#1560BD", "#7C3AED", "#FF7711", "#16A34A", "#0891B2", "#BE185D"]
  },
  "font": { "family": "Montserrat, sans-serif", "weights": [400, 500, 600, 700, 800] },
  "fontSize": {
    "hero": { "mobile": 34, "desktop": 50 },
    "pageTitle": { "mobile": 32, "desktop": 46 },
    "h2": { "mobile": 26, "desktop": 34 },
    "h2Small": { "mobile": 24, "desktop": 32 },
    "ctaTitle": { "mobile": 28, "desktop": 36 },
    "cardTitle": 21,
    "bodyLarge": 16,
    "body": 14,
    "small": 13,
    "meta": 12,
    "eyebrow": 10
  },
  "lineHeight": { "display": 1.12, "title": 1.15, "heading": 1.2, "subheading": 1.25, "body": 1.65, "relaxed": 1.7 },
  "letterSpacing": { "display": "-0.5px", "eyebrow": "0.5px", "footerHead": "0.8px" },
  "space": [4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 32, 36, 40, 44, 56, 64, 72],
  "radius": { "xs": 4, "sm": 6, "md": 8, "lg": 10, "xl": 12, "2xl": 14, "3xl": 16, "band": 22, "pill": 24, "full": "50%" },
  "shadow": {
    "hairline": "0 1px 0 #EAEBEB",
    "sm": "0 6px 24px rgba(4,38,72,0.07)",
    "md": "0 10px 40px rgba(4,38,72,0.06)",
    "lg": "0 12px 40px rgba(4,38,72,0.18)",
    "xl": "0 18px 50px rgba(4,38,72,0.18)",
    "popover": "0 12px 32px rgba(0,0,0,0.18)",
    "buttonFloat": "0 4px 16px rgba(0,0,0,0.22)"
  },
  "motion": { "transition": "all 0.15s", "pageEnter": "fadeIn 0.25s ease" },
  "breakpoint": { "mobile": 820, "board": 900, "wide": 960, "nav": 1000, "fine": 640 },
  "container": { "max": 1240, "content": 1140, "feature": 1180, "narrow": 1000, "prose": 760, "gutter": 24 },
  "button": {
    "size": {
      "xs": { "fontSize": 11, "padding": "5px 10px", "height": 26, "radius": 6 },
      "sm": { "fontSize": 12, "padding": "7px 14px", "height": 32, "radius": 6 },
      "md": { "fontSize": 14, "padding": "10px 20px", "height": 40, "radius": 8 },
      "lg": { "fontSize": 15, "padding": "12px 28px", "height": 48, "radius": 8 },
      "xl": { "fontSize": 16, "padding": "14px 32px", "height": 52, "radius": 8 }
    },
    "variant": {
      "primary": { "bg": "#1560BD", "hover": "#1151A6", "color": "#FFFFFF", "border": "none" },
      "secondary": { "bg": "#FFFFFF", "hover": "#EEF3FB", "color": "#1560BD", "border": "1.5px solid #1560BD" },
      "orange": { "bg": "#FF7711", "hover": "#E06800", "color": "#FFFFFF", "border": "none" },
      "ghost": { "bg": "transparent", "hover": "#EAEBEB", "color": "#292929", "border": "none" },
      "danger": { "bg": "#EF4444", "hover": "#DC2626", "color": "#FFFFFF", "border": "none" },
      "navy": { "bg": "#042648", "hover": "#031D3E", "color": "#FFFFFF", "border": "none" },
      "light": { "bg": "#F8F9F9", "hover": "#EAEBEB", "color": "#292929", "border": "1px solid #EAEBEB" }
    }
  },
  "input": { "height": 42, "radius": 8, "border": "1.5px solid #EAEBEB", "focusBorder": "#1560BD", "fontSize": 14 },
  "logo": { "file": "proconnect-logo.svg", "intrinsic": [297, 45], "defaultHeight": 28, "darkFilter": "brightness(0) invert(1)" }
}
```

---

## 13. JS token object (canonical, from `shared.jsx`)

```js
const PC = {
  blue: '#1560BD',
  blueDark: '#1151A6',
  orange: '#FF7711',
  orangeDark: '#E06800',
  dark: '#292929',
  gray: '#929393',
  border: '#EAEBEB',
  lightBlue: '#EEFAFF',
  bg: '#F8F9F9',
  navy: '#042648',
  white: '#FFFFFF',
  medGray: '#B5B6B6',
  green: '#16A34A',
  red: '#EF4444',
  cardBg: '#F7F8F8',
};
```

---

## 14. Implementation checklist

- [ ] Load Montserrat (400–800) and set `font-family: 'Montserrat', sans-serif` globally.
- [ ] Apply global box-sizing, body reset, and scrollbar styles (§1).
- [ ] Use only tokens from §2 / §11–13 for color; no ad-hoc hex on marketing pages.
- [ ] Follow the responsive type scale (§3); headings 700–800, body 500.
- [ ] Buttons, tags, inputs match §7 exactly (sizes, variants, hover).
- [ ] Sections: `max-width` + `margin: 0 auto` + `padding: 0 24px`; vertical rhythm per §6.3.
- [ ] Mobile at ≤ 820; collapse nav at ≤ 1000.
- [ ] Radii and shadows from §5; transitions `0.15s`.
- [ ] Logo per §9; white variant via CSS filter on dark surfaces.
- [ ] Copy follows §10 (no em/en dashes, US spelling, formal tone).
