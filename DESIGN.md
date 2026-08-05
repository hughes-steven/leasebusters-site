---
name: LeaseBusters
description: Canada's original lease takeover marketplace — the deal math is the design
colors:
  ledger-green: "#0e6b4f"
  ledger-green-deep: "#0a523c"
  ledger-green-tint: "#e8f2ec"
  urgency-red: "#b23a2e"
  urgency-red-tint: "#f8ece9"
  audit-ochre: "#8a6d1f"
  audit-ochre-tint: "#f5efdc"
  ledger-paper: "#f6f4ee"
  surface-white: "#ffffff"
  ink: "#1b2420"
  ink-soft: "#41504a"
  annotation-gray: "#5d6b64"
  hairline: "#e3dfd2"
  hairline-strong: "#cfc9b8"
typography:
  display:
    fontFamily: "Fraunces, Iowan Old Style, Georgia, serif"
    fontSize: "clamp(40px, 5.2vw, 60px)"
    fontWeight: 600
    lineHeight: 1.08
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "Fraunces, Iowan Old Style, Georgia, serif"
    fontSize: "clamp(27px, 3.2vw, 36px)"
    fontWeight: 600
    lineHeight: 1.08
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Fraunces, Iowan Old Style, Georgia, serif"
    fontSize: "17.5px"
    fontWeight: 600
    lineHeight: 1.2
  body:
    fontFamily: "Inter, -apple-system, Segoe UI, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.55
  data:
    fontFamily: "Inter, -apple-system, Segoe UI, sans-serif"
    fontSize: "23px"
    fontWeight: 700
    letterSpacing: "-0.02em"
  label:
    fontFamily: "Inter, -apple-system, Segoe UI, sans-serif"
    fontSize: "12.5px"
    fontWeight: 600
    letterSpacing: "0.07em"
rounded:
  sm: "10px"
  md: "14px"
  pill: "999px"
spacing:
  sm: "12px"
  md: "24px"
  lg: "40px"
  section: "60px"
components:
  button-primary:
    backgroundColor: "{colors.ledger-green}"
    textColor: "#ffffff"
    rounded: "{rounded.sm}"
    padding: "13px 24px"
  button-primary-hover:
    backgroundColor: "{colors.ledger-green-deep}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "13px 24px"
  button-dark:
    backgroundColor: "{colors.ink}"
    textColor: "#ffffff"
    rounded: "{rounded.sm}"
    padding: "13px 24px"
  card-listing:
    backgroundColor: "{colors.surface-white}"
    rounded: "{rounded.md}"
  chip-incentive:
    backgroundColor: "{colors.ledger-green}"
    textColor: "#ffffff"
    rounded: "{rounded.pill}"
    padding: "6px 11px"
  pill-term:
    backgroundColor: "rgba(18, 24, 21, 0.8)"
    textColor: "#ffffff"
    rounded: "{rounded.pill}"
    padding: "7px 13px"
---

# Design System: LeaseBusters

## Overview

**Creative North Star: "The Open Ledger"**

LeaseBusters shows every number a lease shopper needs — payment, term, kilometre position, buyout, incentive — before contact is ever made, and the design system treats that transparency as its aesthetic. The interface is a well-kept ledger: warm paper, dark green-black ink, hairline rules instead of boxes, and numerals that align in tabular columns. Nothing glows, nothing floats without cause; confidence comes from precision, not decoration.

The system carries the heritage of Canada's original lease takeover marketplace (est. 1990) through a serif display voice, while every piece of data is set in a plainspoken sans. Green is the color of money and action; red is spent only on genuine urgency. Surfaces are flat at rest and lift only when the visitor reaches for them.

**Key Characteristics:**
- Paper-and-ink warmth with hairline structure, not card clutter
- The deal math is the hero: numbers large, tabular, and never hidden
- Serif voice (Fraunces) for persuasion, sans (Inter) for facts
- One accent doing real work; urgency color rationed
- Flat at rest, elevation as a response to intent

## Colors

A ledger palette: paper, ink, and money-green, with red held in reserve for urgency.

### Primary
- **Ledger Green** (#0e6b4f): money and action. Primary buttons, incentive chips, the logo mark, links, focus rings, text selection, positive kilometre badges. Hover deepens to **Vault Green** (#0a523c); **Ledger Green Tint** (#e8f2ec) backs the deal-math card and positive badges.

### Secondary
- **Urgency Red** (#b23a2e): time pressure only — the term pill when ≤6 months remain, over-pace kilometre badges. Never decorative, never a button. **Urgency Tint** (#f8ece9) backs its badges.
- **Audit Ochre** (#8a6d1f) on **Audit Tint** (#f5efdc): the "on pace" middle state for kilometre position.

### Neutral
- **Ink** (#1b2420): a green-black; all headings and primary text, the footer and dark panels.
- **Ink Soft** (#41504a): supporting prose.
- **Annotation Gray** (#5d6b64): metadata, captions, labels — the pencil notes in the margin.
- **Ledger Paper** (#f6f4ee): the page background.
- **Surface White** (#ffffff): cards, panels, and inputs sitting on the paper.
- **Hairline** (#e3dfd2) and **Hairline Strong** (#cfc9b8): 1px rules that do the separating work boxes would otherwise do.

### Named Rules
**The Money-Is-Green Rule.** Green means money or action, nothing else — and red is spent only on urgency (≤6 months left, over-pace kilometres). A screen with red on it should feel like it's telling you to hurry, because it is.

## Typography

**Display Font:** Fraunces (with Iowan Old Style, Georgia fallback)
**Body Font:** Inter (with system sans fallback)

**Character:** A confident old-ledger serif carries the voice — headlines, card titles, pull-quotes in italic — while Inter does the counting. The pairing reads as "established firm, modern books."

### Hierarchy
- **Display** (600, clamp(40px, 5.2vw, 60px), 1.08): homepage hero only. Italic spans in Ledger Green mark the emotional pivot.
- **Headline** (600, clamp(27px, 3.2vw, 36px), 1.08): section heads and page titles.
- **Title** (600, 17.5px): listing card vehicle names.
- **Data** (Inter 700, 23–36px, -0.02em, tabular): every price and payment. Data is never set in the serif.
- **Body** (Inter 400, 16px, 1.55): prose, max measure ~62ch.
- **Label** (Inter 600, 12.5px, +0.07em, uppercase): filter group names, fact labels.

### Named Rules
**The Serif-Speaks-Sans-Counts Rule.** Fraunces persuades; Inter informs. Every numeral on the site — prices, terms, odometers — is Inter with `font-variant-numeric: tabular-nums` so columns of the ledger actually align. A price set in the serif is a costume; a headline set in the sans is a mumble.

## Layout

A single 1160px column with 24px page gutters. Listing grids auto-fill at a 290px minimum with 24px gaps. Sections breathe with 60px vertical padding; related content groups tightly (4–12px) while distinct groups separate generously (24–40px+). Editorial content (the "why" section, testimonials) uses two-column ledger rows — a ~300px claim column against a prose column — collapsing to single column below 1000px. Browse pages run a 260px sticky filter rail beside the results grid, collapsing to a toggle drawer below 860px. The detail page pairs the content column with a 360px sticky summary sidebar.

## Elevation & Depth

Flat at rest. Surfaces declare themselves with 1px hairline borders on paper, never with ambient shadow. Depth appears in exactly two places: as a response to intent (a listing card lifts 3px under `--shadow-lift` on hover/focus), and on the hero deal card, which is allowed to cast shadow because it depicts a physical card on the desk.

### Shadow Vocabulary
- **Lift** (`box-shadow: 0 2px 4px rgba(27,36,32,0.05), 0 18px 30px -18px rgba(27,36,32,0.28)`): hover/focus elevation and the hero deck. The only shadow in the system.

### Named Rules
**The Flat-At-Rest Rule.** If nothing is happening, nothing floats. A surface earns shadow by being reached for, not by existing.

## Shapes

Rectangles with quiet corners: 14px radius on cards and panels, 10px on buttons, inputs, and FAQ rows. Full pills are reserved for small floating chips (term pill, incentive flag, kilometre badges, step numbers). Structure on the paper itself is drawn with hairlines — section dividers, ledger rows, fact grids — rather than enclosing boxes. The logo mark is a 40px rounded square containing a white exit-arrow path.

## Components

### Buttons
- **Shape:** quiet rectangle (10px radius), Inter 600.
- **Primary:** white on Ledger Green (13px 24px padding; large: 16px 30px); hover deepens to Vault Green.
- **Ghost:** transparent with Hairline Strong border; hover darkens the border to Ink.
- **Dark:** white on Ink, for use inside light panels.
- **Focus:** 2px Ledger Green outline, 2px offset (global rule).

### Listing Card
The signature component. White surface, 1px hairline, 14px radius, flat at rest; hover lifts with the system's only shadow. 16:9 photo carries two floating chips: the term pill (dark scrim, white tabular text, clock icon; turns Urgency Red at ≤6 months) and the incentive flag (Ledger Green). Below: the payment in Data type with a muted "/mo + tax", the vehicle name in the serif Title, metadata in Annotation Gray, and a hairline-separated meta row (km/yr allowance, location) with drawn 13px stroke icons.

### Ledger Row
Editorial rows between Hairline Strong rules: a serif claim (23px, with an italic green phrase) beside supporting prose. Replaces icon-card grids everywhere.

### Fee Ledger
The pricing table as ledger rows: serif service name, prose description, and a right-aligned Data-type price (24px, tabular). Free tiers print their $0 in Ledger Green — free is a deal, and money is green. Paid fees print in Ink. The business model (free browse/takeover, free private listings, $50 dealer listings, $400 White-Glove Exit) is published here in full; hiding a fee would break the Open Ledger premise.

### Chips / Badges
Pill-shaped, tabular numerals. Kilometre position uses the three-state color mapping: under = green tint, on pace = ochre tint, over = red tint.

### Inputs / Filters
White surfaces, Hairline Strong 1px borders, 10px radius. Checkboxes and range sliders take `accent-color: Ledger Green`. Filter group labels are uppercase Label type.

### Navigation
Sticky, blurred Ledger Paper at 94% opacity with a bottom hairline. Serif wordmark ("Lease" in Ink, "Busters" in Ledger Green). Links are Inter 500 with a 2px Ledger Green underline on hover/active. Collapses to a burger below 860px.

### Deal Math Card
Green-tinted panel of ledger lines: dashed hairlines between rows, labels left, tabular values right, closing with the effective payment in 30px Data type in Ledger Green.

### Hero Deal Card
The homepage hero's right column is one real listing — the live deal whose incentive buys the largest monthly saving (`incentive ÷ months remaining`), selected in code, never hand-picked. A green header strip ("Top deal" / "Save $X/mo"), the photo with its term pill, the serif vehicle title, and a three-line deal-math ledger ending in the effective payment. Set square on the page, desk-shadowed, and the site's one authored entrance animation.

## Do's and Don'ts

### Do:
- **Do** set every numeral in Inter with tabular figures — prices, terms, odometers, fees.
- **Do** separate content with hairlines on the paper before reaching for a box; a card must earn its border.
- **Do** show the complete deal math on any surface that represents a listing.
- **Do** draw icons as consistent 2px-stroke SVGs at 13–24px; theme selection, caret, and focus rings from the palette.
- **Do** keep the one authored motion moment: the hero deal card settling onto the desk with the exponential ease-out (`cubic-bezier(0.16,1,0.3,1)`), honoring `prefers-reduced-motion`.

### Don't:
- **Don't** use red for anything except genuine time pressure or over-pace warnings.
- **Don't** put an eyebrow/kicker label above a heading, or open a section with a big-number stat trio — heritage is written in sentences, not stat blocks.
- **Don't** build page structure from same-size icon+heading+text cards; use ledger rows.
- **Don't** set data in Fraunces or headlines in Inter.
- **Don't** add ambient shadows to resting surfaces, gradient text, or glyph/emoji icons (★, →, emoji) in the UI.
- **Don't** tilt or rotate surfaces for playfulness — a ledger is ruled square, and every card sits square on the page (client-confirmed 2026-08-05).
