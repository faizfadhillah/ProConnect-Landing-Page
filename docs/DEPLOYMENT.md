# Deployment

The site is hosted on **GitHub Pages** directly from the repository — no build pipeline, since the prototype runs entirely in the browser.

## Live URL

https://faizfadhillah.github.io/ProConnect-Landing-Page/

## How it's configured

- **Source:** `main` branch, `/` (root)
- **Entry point:** `index.html`
- **`.nojekyll`:** present at the repo root so GitHub Pages serves the files as-is (no Jekyll processing) and doesn't ignore any paths.

## Publishing changes

Any push to `main` triggers a Pages rebuild automatically.

```bash
git add .
git commit -m "Update landing page"
git push origin main
```

The deploy usually completes within 1–2 minutes. You can watch progress under the repo's **Actions** tab (the `pages-build-deployment` workflow) or under **Settings → Pages**.

## Enabling Pages from scratch (if ever reset)

1. Repo **Settings → Pages**.
2. Under **Build and deployment → Source**, choose **Deploy from a branch**.
3. Select branch `main`, folder `/ (root)`, then **Save**.
4. Wait for the build; the public URL appears at the top of the Pages settings.

Or via the API:

```bash
curl -X POST \
  -H "Authorization: token <TOKEN>" \
  -H "Accept: application/vnd.github+json" \
  https://api.github.com/repos/faizfadhillah/proconnect-landing-page/pages \
  -d '{"source":{"branch":"main","path":"/"}}'
```

## Notes & gotchas

- **Serve, don't file-open.** The app fetches `.jsx` over HTTP, so opening `index.html` from the local filesystem won't work — use a local server (`python3 -m http.server`).
- **First load is slightly slow.** Babel transpiles ~20 `.jsx` files in the browser on first paint. This is expected for the prototype. Moving to a real build (see `ARCHITECTURE.md`) removes it.
- **Custom domain:** add a `CNAME` file at the repo root containing the domain, then configure DNS and set it under Settings → Pages.
