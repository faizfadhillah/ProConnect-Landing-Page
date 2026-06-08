# Architecture & Path to Production

## What this is today

A **client-side prototype**. `index.html` defines a small in-file router (`App`) that holds `page` state and renders one page component at a time from a `pageMap`. All UI is React function components written in `.jsx`, transpiled in the browser by Babel Standalone at load time. There is no bundler, no package manager, and no backend.

### Runtime flow

```
index.html
  ├─ loads React + ReactDOM + Babel (CDN: unpkg)
  ├─ loads shared.jsx first (header, footer, shared UI), then each page .jsx
  └─ App() keeps `page` state + a history stack; navigate(key) swaps the view
```

### Component map

- `shared.jsx` — Header, Footer, navigation, buttons, cards, and other primitives reused everywhere. Load it first; the page files depend on globals it defines.
- Marketing pages — `homepage.jsx`, `features.jsx`, `pricing.jsx`, `about.jsx`, `solution.jsx`, `jobs.jsx`, `inner-pages.jsx` (contact), `legal.jsx` (ToS + Privacy).
- Auth — `login.jsx` (login + forgot password).
- Registration — `register-shared.jsx` (role chooser + shared steps), `register-employer.jsx`, `register-candidate1.jsx`, `register-candidate2.jsx`.
- App surfaces — `employer.jsx` + `dashboard-multirole.jsx` (employer dashboard), `subscription.jsx` (billing), `candidate.jsx` + `candidate-pages.jsx` + `candidate-jobs.jsx` (candidate dashboard).

All components share the global scope (no ES modules), which is why script order in `index.html` matters.

## Known limitations

- **In-browser Babel** adds first-load latency and ships dev builds of React. Not suitable for production performance or SEO.
- **No real routing/URLs.** Navigation is in-memory state; deep links and the browser back button aren't wired to pages.
- **No backend.** Forms, auth, dashboards use mock data.
- **Global namespace.** Components rely on load order rather than imports.

## Recommended path to production

1. **Adopt a build tool (Vite + React).** Scaffold a Vite React app, convert each `.jsx` to an ES module with explicit `import`/`export`, and replace the CDN scripts with installed dependencies. This removes in-browser Babel and gives you tree-shaking, minification, and fast HMR.
2. **Real routing.** Introduce `react-router` so every page has a URL (`/`, `/pricing`, `/jobs`, `/register/employer`, `/dashboard`, …), enabling deep links, the back button, and better SEO.
3. **Componentize shared UI.** Extract the primitives in `shared.jsx` into a small component library (`/components`) and a tokens file for the brand palette and type scale.
4. **Wire APIs.** Replace mock data in the dashboards and registration flows with real endpoints; add auth (the platform already has a separate API — see related ProConnect repos).
5. **Forms & validation.** Add client validation and submission handling for login, registration, and contact.
6. **Quality gates.** Add ESLint/Prettier, component tests, and a CI workflow; keep deploying the built `dist/` to GitHub Pages (or a CDN) via GitHub Actions.
7. **Analytics & SEO.** Per-page `<title>`/meta, Open Graph tags, sitemap, and an analytics tag.

## Suggested target structure (after migration)

```
src/
  main.tsx
  App.tsx                 # router
  components/             # Header, Footer, Button, Card… (from shared.jsx)
  styles/tokens.ts        # colors, spacing, typography
  pages/
    Home.tsx Features.tsx Pricing.tsx About.tsx Solution.tsx Jobs.tsx
    Login.tsx Contact.tsx Terms.tsx Privacy.tsx
    register/ ChooseRole.tsx Employer.tsx Candidate.tsx
    dashboard/ Employer.tsx Candidate.tsx Subscription.tsx
public/assets/            # images
```

## Design references

`design-source/` contains the original handoff material: Figma exports (`figma_refs/`), screenshots, and raw copy as JSON (`homepage_texts.json`, `privacy_text.json`, `tos_text.json`, etc.). Use these as the source of truth for copy and pixel-level details when rebuilding.
