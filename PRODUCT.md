# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Static HTML/CSS/JS, no build step, hosted on GitHub Pages (confirmed 2026-08-05). Phase 2 replaces `js/data.js` with Supabase (Postgres, auth, storage); design must survive that swap unchanged.

## Users

- **Deal hunters (primary, confirmed browse-led):** shoppers who want a car for 6–30 months without a new-lease commitment. They compare monthly payments the way auction bidders compare bids and decide from the numbers. The site leads them into inventory fast.
- **Lease exiters (secondary):** drivers whose life changed — relocation, family, money — who need out of a lease without the $3,000–$8,000 early-termination hit. They are stressed, time-pressed, and paying to list.

## Product Purpose

A Canadian marketplace that transfers existing car leases from exiters to takers, with the lender's approval. Success: exiters escape penalty-free in weeks; takers get short terms and below-market effective payments.

## Positioning

**Heritage (confirmed):** Canada's original lease takeover marketplace, established 1990 — decades before Clutch or any VC-funded alternative existed. Tens of thousands of completed transfers. Competitors can claim speed or scale; none can claim origin.

## Business Model

Confirmed 2026-08-05:

- **Browsing and taking over a lease: free, no account required.** Takers pay only their lender's transfer fee.
- **Private individuals list their lease free.**
- **Dealerships pay $50 per listing** (inventory, demonstrators, courtesy cars).
- **White-Glove Exit: $400 flat** — LeaseBusters staff run the seller's entire exit: photography, listing, marketing, buyer vetting, negotiation, and lender paperwork through to a registered transfer.

Revenue comes from dealer listing fees and the white-glove service. Fees are published openly on the site (the "fee ledger") — pricing transparency is part of the positioning.

## Operating Context

- Transfers are processed by each automaker's finance arm (credit check identical to a new lease); the marketplace brokers discovery and guidance, not the credit decision.
- Lender transfer fees run $395–$650; sellers often add cash incentives that lower the taker's effective payment.
- Canada-wide, bilingual market (EN/FR); Québec listings are a meaningful share.
- The existing business operates at leasebusters.com. **Unresolved:** leasebusters.ca currently 301-redirects to a Clutch blog page; ownership must be confirmed with the client.

## Capabilities and Constraints

- Prototype phase: all listings are fictional sample data and every page says so; no real accounts, payments, or transfer flow yet.
- Listing data model (js/data.js): payment, term remaining/total, km allowance vs. odometer, buyout, incentive, transfer fee, location, seller notes.
- Client-side filtering/sorting only; must work from a static host with no server.

## Brand Commitments

None binding (confirmed 2026-08-05). The LeaseBusters name is in use but the client is open to full visual rebrand exploration. Prior red-forward prototype look is not protected.

## Evidence on Hand

- Sample listing photography: 13 Unsplash images in `images/` (Unsplash License).
- Heritage claims ("est. 1990", "35,000+ transfers") are drawn from the real business's public positioning but are unverified with the client — confirm before real launch. Testimonials on the homepage are fictional placeholders and labeled as prototype content.

## Product Principles

1. **The whole deal, up front.** Every listing exposes the complete math — payment, term, km position, buyout, incentive — before contact. Transparency is the product.
2. **Inventory first.** A visitor should see real cars and real payments within one scroll; marketing prose never blocks the merchandise.
3. **Two audiences, one truth.** Exiters and takers see the same numbers framed for opposite jobs; never hide a fact from one side to flatter the other.
4. **Heritage earns trust, numbers close deals.** Est. 1990 opens the door; the ledger does the persuading.
