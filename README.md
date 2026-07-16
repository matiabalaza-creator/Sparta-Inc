# Sparta Inc — Portfolio Site

A single-page, interactive portfolio for **Sparta Inc Developers**, built to prove
design/dev range to Ugandan SMEs. The standout feature is a live **Style Switcher**
that re-skins the entire site between three complete brand identities (Sleek
Corporate, Creative Brutalist, Minimalist Editorial) with zero reload.

## Stack

- React 19 + Vite
- Tailwind CSS v4 (via `@tailwindcss/vite`, no separate config file needed)
- Framer Motion
- lucide-react

## Project structure

```
src/
  components/
    Header.jsx             nav + WhatsApp CTA
    Hero.jsx                headline + live checkout mockup
    CheckoutMockup.jsx      theme-aware MTN/Airtel demo card
    Sandbox.jsx             "standout sandbox" style-switcher explainer
    WorkSection.jsx         before/after project cards
    BeforeAfterSlider.jsx   draggable comparison slider (keyboard accessible)
    WireframePanels.jsx     CSS-generated before/after wireframes (no stock images)
    Contact.jsx             budget calculator + dynamic WhatsApp link
    Footer.jsx
    StyleSwitcher.jsx       the floating console — the standout element
    CustomCursor.jsx        magnetic cursor (desktop only, respects touch/reduced motion)
    ThemedBackdrop.jsx      generative grid/particle backgrounds
  context/
    ThemeContext.jsx        theme state + localStorage persistence
  index.css                 CSS variable token system for all 3 modes
  App.jsx
  main.jsx
```

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview   # sanity-check the production build locally
```

## Deploy — GitHub + Vercel

1. Create a new empty repo on GitHub (don't initialize with a README).
2. From this folder:
   ```bash
   git init
   git add .
   git commit -m "Sparta Inc portfolio site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
3. Go to [vercel.com/new](https://vercel.com/new), import the repo.
4. Vercel auto-detects **Vite** — framework preset "Vite", build command
   `npm run build`, output directory `dist`. Leave the defaults and click **Deploy**.
5. Every push to `main` redeploys automatically.

## Editing content

- **WhatsApp number**: search for `256762110535` (appears in `Header.jsx`,
  `Hero.jsx`, and `Contact.jsx`) and replace everywhere if it changes.
- **Colors/fonts per mode**: all in `src/index.css` under `:root`,
  `[data-theme='brutalist']`, and `[data-theme='editorial']`.
- **Project case studies**: edit the `PROJECTS` array in `WorkSection.jsx`.
- **Calculator pricing**: constants at the top of `Contact.jsx`
  (`FOUNDATION`, `PER_PAGE`, `ECOMMERCE_ADDON`, `WHATSAPP_ADDON`, `UGX_PER_USD`).

## Notes

- No stock imagery anywhere — all visuals are CSS/SVG-generated so they always
  match the active theme.
- Reduced-motion preference is respected (`prefers-reduced-motion`).
- The custom cursor auto-disables on touch devices.
