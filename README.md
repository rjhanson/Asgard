# russelljhanson.com

Personal website — a single, low-chrome page with a short intro and a list of
selected publications. Built with [Astro](https://astro.build/) as a static
site (pure HTML/CSS, no client JS) and hosted on AWS S3 + CloudFront.

## Tech

- **[Astro](https://astro.build/)** — static site generator; outputs plain HTML/CSS to `dist/`
- **TypeScript** — content/data files
- **AWS** — S3 (private bucket) + CloudFront (HTTPS, OAC) + ACM + Route53, defined in Terraform
- Node 18+ required

## Project layout

```
src/
  data/
    site.ts            # name, role, tagline, about text, contact links
    publications.ts    # the publications list (typed); add entries here
  layouts/
    Base.astro         # <head>, meta/OG tags, global CSS, starfield wrapper
  components/
    Hero.astro         # dusk-gradient starfield header
    PublicationRow.astro
  pages/
    index.astro        # the single page
    404.astro
  styles/
    global.css         # design tokens + all styles
infra/                 # Terraform for S3 + CloudFront + ACM + Route53 (see infra/README.md)
scripts/
  deploy.sh            # build + sync to S3 + invalidate CloudFront
mockups/               # static HTML design explorations (reference only)
```

## Develop

```bash
npm install
npm run dev        # local dev server at http://localhost:4321
```

| Command           | Action                                      |
| ----------------- | ------------------------------------------- |
| `npm run dev`     | Start the dev server (hot reload)           |
| `npm run build`   | Build the static site to `dist/`            |
| `npm run preview` | Preview the production build locally        |

## Editing content

- **Intro / contact / tagline:** edit `src/data/site.ts`.
- **Publications:** add an entry to the `publications` array in
  `src/data/publications.ts`. The list renders newest-first automatically.
  Each entry takes a title, author list (your own name is bolded on render),
  venue, year, type (`journal` | `conference` | `report` | `preprint`), and
  either a single `url` or, for a multi-part work, a `links` array of
  `{ label, url }` objects.

## Deploy

Infrastructure is managed with Terraform under `infra/` (see
[`infra/README.md`](infra/README.md) for first-time setup). Once the infra
exists and AWS credentials are configured:

```bash
./scripts/deploy.sh
```

This builds the site, syncs `dist/` to the S3 bucket (long cache for hashed
assets, no-cache for HTML), and invalidates the CloudFront cache. The bucket
and distribution IDs are read from Terraform outputs.
