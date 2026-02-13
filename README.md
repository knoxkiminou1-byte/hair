# Blush & Bloom Loc Studio (Static Template)

This is a **static multi-page HTML/CSS/JS template** for a loctician/hairstylist brand.

> All business data, pricing, addresses, and testimonials are **FAKE demo placeholders**.

## Pages
- `index.html` (Home)
- `services.html` (Services + Pricing)
- `gallery.html` (Gallery)
- `about.html` (About)
- `aftercare.html` (Aftercare + Resources)
- `book.html` (Book + Contact)

## Run locally
No build step required.

- Option 1: open `index.html` directly in your browser.
- Option 2 (recommended):
  ```bash
  python3 -m http.server 4173
  ```
  then open `http://localhost:4173`.

## Customize quickly
- Visual system: `assets/styles.css` (`:root` variables).
- Interactions: `assets/main.js`.
- Swap placeholder photos by editing each page’s `<img src="...">`.

## Vercel deployment (fixed)
This repo now includes:
- `vercel.json` forcing static routing/build behavior.
- `.vercelignore` excluding legacy Next.js files from upload.

### Deploy steps
1. Import this repo in Vercel.
2. Keep default project settings (no custom build command needed).
3. Deploy.

Pretty routes are mapped automatically:
- `/` → `index.html`
- `/services` → `services.html`
- `/gallery` → `gallery.html`
- `/about` → `about.html`
- `/aftercare` → `aftercare.html`
- `/book` → `book.html`
