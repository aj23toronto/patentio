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

Or deploy directly to Vercel / Netlify.

## Blog setup (one-time, ~10 minutes)

The blog runs on [Sanity](https://sanity.io) — a free content backend with its
own writing/editing dashboard embedded right on this site at `/studio`. Once
this is set up, publishing a new post never requires a developer or a
redeploy again.

1. **Create a free Sanity account** at https://www.sanity.io/get-started —
   sign up with Google or email.
2. **Create a project**: on https://www.sanity.io/manage click "Create
   project," give it any name (e.g. "Patentio"), and choose the `production`
   dataset when prompted. Copy the **Project ID** shown on the project's
   overview page.
3. **Set environment variables**:
   - Locally: `cp .env.local.example .env.local` and paste your Project ID
     into `NEXT_PUBLIC_SANITY_PROJECT_ID`.
   - On Vercel/Netlify: add the same two variables (`NEXT_PUBLIC_SANITY_PROJECT_ID`,
     `NEXT_PUBLIC_SANITY_DATASET=production`) in the project's dashboard under
     Settings → Environment Variables, then redeploy once.
4. **Allow your domain to talk to Sanity's API**: on
   https://www.sanity.io/manage → your project → API → CORS Origins, add
   `http://localhost:3000` and your live site's URL (e.g.
   `https://www.patentioanalytics.com`), both with "Allow credentials" checked.
5. Run `npm run dev`, open http://localhost:3000/studio, and log in with the
   same account from step 1. Click "Blog Post" → "Create," fill in the title,
   slug (click "Generate"), cover image, and body, then hit **Publish**.
6. Visit http://localhost:3000/blog to see it live. On the deployed site,
   published posts appear at `/blog` within about 30 seconds — no rebuild
   needed.

After this one-time setup, the only URL you (or anyone on the team) ever
needs again is **yoursite.com/studio**.

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
    pre-filled mailto links to founder@ and jasmol@patentioanalytics.com
  - `Reveal.tsx` — IntersectionObserver scroll-reveal wrapper (respects reduced motion)

## Editing contacts / copy

Emails live at the top of `components/ProposalBuilder.tsx`. Section copy lives in each component's data arrays.
