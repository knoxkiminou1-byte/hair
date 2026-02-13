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

## Run
No build step required.

- Option 1: open `index.html` directly in your browser.
- Option 2 (recommended for smooth local testing):
  ```bash
  python3 -m http.server 4173
  ```
  then visit `http://localhost:4173`.

## Customize quickly
- Colors, spacing, card styles: `assets/styles.css` (`:root` variables).
- Interactions (mobile nav, reveal, gallery filters/lightbox, form toast): `assets/main.js`.
- Replace placeholder images directly in page `<img>` tags.

## Vercel deploy
This is static HTML and works on Vercel with zero backend/services.
- Create a new project from this repo.
- No build command needed; output is root.
- Deploy.
