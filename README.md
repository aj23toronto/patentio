# Patentio — Next.js

Websites & content studio for IP services companies and law firms, styled as a patent document.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Production

```bash
npm run build
npm start
```

Or deploy directly to Vercel / Netlify — no environment variables needed.

## Structure

- `app/layout.tsx` — metadata + IBM Plex fonts
- `app/globals.css` — full design system (patent-sheet frame, INID eyebrows, drafting-blue accents)
- `app/page.tsx` — composes the sections
- `components/`
  - `Nav.tsx` — sticky nav with scroll-based active section highlighting
  - `Hero.tsx` — animated FIG. 1 drawing with hover-linked legend
  - `Claims.tsx` — services as expandable patent claims (accordion)
  - `Serve.tsx` — who we serve cards
  - `ProcessStepper.tsx` — FILING → EXAMINATION → ALLOWANCE → GRANT stepper
  - `PriorArt.tsx` — differentiation section
  - `ProposalBuilder.tsx` — live "provisional application" builder generating
    pre-filled mailto links to founder@ and kelly@patentioanalytics.com
  - `Reveal.tsx` — IntersectionObserver scroll-reveal wrapper (respects reduced motion)

## Editing contacts / copy

Emails live at the top of `components/ProposalBuilder.tsx`. Section copy lives in each component's data arrays.
