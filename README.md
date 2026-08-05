# LeaseBusters — website redesign prototype

A design prototype for a modern rebuild of [LeaseBusters](https://www.leasebusters.com), Canada's lease takeover marketplace. Static site, no build step, no dependencies — designed to be hosted on GitHub Pages.

**All listings are fictional sample data.** Design references: [Clutch](https://www.clutch.ca) (trust-forward card grid and filters) and [Cars & Bids](https://carsandbids.com) (photo-forward cards with the key number and time-remaining pill, scannable listing pages).

## Pages

| Page | Purpose |
| --- | --- |
| `index.html` | Homepage — dual-audience hero, featured listings, how-it-works, FAQ |
| `listings.html` | Browse with live client-side filters (make, body, province, payment, term) and sorting |
| `listing.html?id=…` | Listing detail — lease facts, deal math, transfer steps, similar listings |
| `how-it-works.html` | Both journeys step-by-step, cost math, FAQ |

## Run locally

Any static server works:

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

## Architecture notes

- `js/data.js` holds the sample listings; `js/app.js` renders cards, filters, and the detail page from it.
- Phase 2 swaps `data.js` for a live backend (e.g. Supabase: Postgres + auth + photo storage) without touching the design.
- Vehicle photography via [Unsplash](https://unsplash.com) (Unsplash License).
