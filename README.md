# ProConnect — ASEAN Hospitality Hiring Platform (Landing Page)

Marketing site and interactive prototype for **ProConnect**, an ASEAN-focused hospitality & tourism hiring platform connecting employers with candidates across the region.

🔗 **Live site:** https://faizfadhillah.github.io/ProConnect-Landing-Page/

This is a self-contained, client-side prototype exported from Claude Design. It renders a multi-page React experience (homepage, features, pricing, registration flows, and employer/candidate dashboards) with no build step — React, ReactDOM, and Babel are loaded from a CDN and the `.jsx` files are transpiled in the browser.

## Quick start (local)

No build tooling required. Because the app fetches `.jsx` files over HTTP, you must serve the folder rather than open `index.html` directly from disk.

```bash
# Python 3
python3 -m http.server 8000

# or Node
npx serve .
```

Then open http://localhost:8000.

## Project structure

```
.
├── index.html              # Entry point (GitHub Pages serves this); mirrors ProConnect.html
├── ProConnect.html         # Original design entry from the Claude Design handoff
├── shared.jsx              # Shared layout: header, footer, nav, reusable UI primitives
├── homepage.jsx            # Homepage sections (hero, features, testimonials, CTA)
├── inner-pages.jsx         # Contact + simple inner pages
├── features.jsx            # Features page
├── pricing.jsx             # Pricing / plans page
├── about.jsx               # About page
├── solution.jsx            # Solutions page
├── jobs.jsx                # Public job listings
├── login.jsx               # Login + forgot-password
├── legal.jsx               # Terms of Service + Privacy Policy
├── register-shared.jsx     # Shared registration components + role chooser
├── register-employer.jsx   # Employer registration flow
├── register-candidate1.jsx # Candidate registration (step 1)
├── register-candidate2.jsx # Candidate registration (step 2)
├── employer.jsx            # Employer experience
├── dashboard-multirole.jsx # Multi-role employer dashboard
├── subscription.jsx        # Subscription / billing screens
├── candidate.jsx           # Candidate dashboard
├── candidate-pages.jsx     # Candidate sub-pages
├── candidate-jobs.jsx      # Candidate job search / applications
├── assets/                 # Images used by the live site (hero, logos, icons, badges)
├── proconnect-logo.svg     # Brand logo
├── design-source/          # Design references (Figma exports, screenshots, copy JSON) — not loaded at runtime
├── docs/                   # Documentation
└── .nojekyll               # Disables Jekyll on GitHub Pages
```

## Pages & URLs

Each page has its own URL. The `App` router in `index.html` maps a page to a path slug, updates the address bar via the History API (`pushState`/`popstate`), and sets a per-page `<title>`. Every slug also exists as a real directory with its own `index.html`, so deep links and refreshes return a native `200` on GitHub Pages (a `404.html` SPA fallback covers anything else). The floating quick-nav (bottom right) jumps between the main sections.

Base URL: `https://faizfadhillah.github.io/ProConnect-Landing-Page/`

| Page key | URL (relative to base) | Component | Description |
|----------|------------------------|-----------|-------------|
| `home` | `/` | HomePage | Marketing homepage |
| `features` | `/features/` | FeaturesPage | Platform features |
| `pricing` | `/pricing/` | PricingPage | Plans and pricing |
| `about` | `/about/` | AboutPage | Company / mission |
| `solution` | `/solution/` | SolutionPage | Solutions overview |
| `jobs` | `/jobs/` | JobsPage | Public job board |
| `login` | `/login/` | LoginPage | Sign in |
| `forgot` | `/forgot-password/` | ForgotPasswordPage | Password reset |
| `choose-role` | `/register/` | ChooseRolePage | Register: pick employer or candidate |
| `register-employer` | `/register/employer/` | EmployerRegister | Employer sign-up flow |
| `register-candidate` | `/register/candidate/` | CandidateRegister | Candidate sign-up flow |
| `employer` | `/dashboard/employer/` | MultiRoleDashboard | Employer dashboard |
| `candidate` | `/dashboard/candidate/` | CandidateDashboard | Candidate dashboard |
| `tos` | `/terms/` | TermsPage | Terms of Service |
| `privacy` | `/privacy/` | PrivacyPage | Privacy Policy |
| `contact` | `/contact/` | ContactPage | Contact |

> **Note:** the base path is derived automatically from the URL's first path segment. An inline script writes the `<base>` tag and the router's `BASE` constant is computed the same way, so the site keeps working under any GitHub Pages repo name or capitalization, and from any slug directory. No manual update is needed if the repository is renamed.

## Brand

- Primary blue `#1560BD`, accent orange `#FF7711`, deep navy `#042648` / `#1A2B45`
- Typeface: Montserrat (Google Fonts)

## Tech notes

- **No build step.** `react@18.3.1`, `react-dom@18.3.1`, and `@babel/standalone@7.29.0` are loaded from unpkg; `.jsx` is compiled in the browser. This is intentional for a fast-iterating prototype and means in-browser transpilation adds a brief first-load delay.
- **Static hosting only.** Everything runs client-side; there is no backend. Forms and auth are mocked.
- `design-source/` holds the original handoff reference material (Figma exports, screenshots, raw copy). It is kept for engineering reference and is not requested by the site at runtime.

## Deploying

Hosted via **GitHub Pages** from the `main` branch root. See [`docs/DEPLOYMENT.md`](docs/DEPLOYMENT.md).

## Roadmap to production

This prototype is intended to be rebuilt as production code. For a recommended path (migrate to a Vite + React build, split routes, wire real APIs), see [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md).

---
Exported from Claude Design and implemented as a deployable static site.
