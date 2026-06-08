# ProConnect — ASEAN Hospitality Hiring Platform (Landing Page)

Marketing site and interactive prototype for **ProConnect**, an ASEAN-focused hospitality & tourism hiring platform connecting employers with candidates across the region.

🔗 **Live site:** https://faizfadhillah.github.io/proconnect-landing-page/

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

## Pages

The app is a single-page router (`App` in `index.html`) that swaps page components. A floating quick-nav (bottom right) jumps between the main sections. Available routes:

| Key | Component | Description |
|-----|-----------|-------------|
| `home` | HomePage | Marketing homepage |
| `features` | FeaturesPage | Platform features |
| `pricing` | PricingPage | Plans and pricing |
| `about` | AboutPage | Company / mission |
| `solution` | SolutionPage | Solutions overview |
| `jobs` | JobsPage | Public job board |
| `login` | LoginPage | Sign in |
| `forgot` | ForgotPasswordPage | Password reset |
| `choose-role` | ChooseRolePage | Register: pick employer or candidate |
| `register-employer` | EmployerRegister | Employer sign-up flow |
| `register-candidate` | CandidateRegister | Candidate sign-up flow |
| `employer` | MultiRoleDashboard | Employer dashboard |
| `candidate` | CandidateDashboard | Candidate dashboard |
| `tos` | TermsPage | Terms of Service |
| `privacy` | PrivacyPage | Privacy Policy |
| `contact` | ContactPage | Contact |

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
