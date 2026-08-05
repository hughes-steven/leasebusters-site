/* LeaseBusters prototype — shared rendering + page logic (no dependencies) */

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

const money = (n) =>
  new Intl.NumberFormat("en-CA", { style: "currency", currency: "CAD", maximumFractionDigits: 0 }).format(n);

const km = (n) => `${new Intl.NumberFormat("en-CA").format(n)} km`;

const KM_STATUS = {
  "under": { label: "Under km allowance", cls: "green" },
  "on-track": { label: "On km pace", cls: "amber" },
  "over": { label: "Over km pace", cls: "red" }
};

const clockIcon =
  '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>';

const pinIcon =
  '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M12 21s-7-5.1-7-11a7 7 0 0 1 14 0c0 5.9-7 11-7 11z"/><circle cx="12" cy="10" r="2.6"/></svg>';

const gaugeIcon =
  '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M5 19a9 9 0 1 1 14 0"/><path d="M12 13l3.5-3.5"/></svg>';

function cardHTML(l) {
  const incentive = l.incentive > 0
    ? `<span class="flag-incentive">${money(l.incentive)} incentive</span>`
    : "";
  return `
    <a class="card" href="listing.html?id=${l.id}">
      <div class="card-photo">
        <img src="${l.image}" alt="${l.year} ${l.make} ${l.model}" loading="lazy">
        <span class="pill">${clockIcon} ${l.monthsLeft} mo left</span>
        ${incentive}
      </div>
      <div class="card-body">
        <div class="card-price-row">
          <span class="card-price">${money(l.payment)}<small>/mo + tax</small></span>
        </div>
        <p class="card-title">${l.year} ${l.make} ${l.model} ${l.trim}</p>
        <span class="card-sub">${l.color} · ${l.drivetrain} · ${l.fuel}</span>
        <div class="card-meta">
          <span>${gaugeIcon} ${km(l.kmPerYear)}/yr</span>
          <span>${pinIcon} ${l.city}, ${l.province}</span>
        </div>
      </div>
    </a>`;
}

/* ---------- Nav (all pages) ---------- */
const burger = $(".nav-burger");
if (burger) burger.addEventListener("click", () => $(".nav").classList.toggle("nav-open"));

const yearEl = $("#year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

/* ---------- Homepage ---------- */
const featuredGrid = $("#featured-grid");
if (featuredGrid) {
  const featured = [...LISTINGS]
    .sort((a, b) => (b.featured === true) - (a.featured === true) || new Date(b.posted) - new Date(a.posted))
    .slice(0, 6);
  featuredGrid.innerHTML = featured.map(cardHTML).join("");

  // Hero preview cards — two contrasting deals
  const heroFront = LISTINGS.find((l) => l.id === "2024-honda-crv-sport");
  const heroBack = LISTINGS.find((l) => l.id === "2023-audi-rs6-avant");
  const heroVisual = $("#hero-visual");
  if (heroVisual && heroFront && heroBack) {
    heroVisual.innerHTML = `
      <div class="hero-card back">${cardHTML(heroBack)}</div>
      <div class="hero-card front">${cardHTML(heroFront)}</div>`;
    // Cards inside the hero are previews; strip the outer link styles' lift
    $$(".hero-card .card", heroVisual).forEach((c) => (c.style.border = "none"));
  }
}

/* ---------- Browse page ---------- */
const resultsGrid = $("#results-grid");
if (resultsGrid) {
  const makeList = [...new Set(LISTINGS.map((l) => l.make))].sort();
  const bodyList = [...new Set(LISTINGS.map((l) => l.body))].sort();
  const provList = [...new Set(LISTINGS.map((l) => l.province))].sort();

  const checks = (items, name) =>
    items
      .map(
        (v) =>
          `<label class="check"><input type="checkbox" name="${name}" value="${v}">${
            name === "province" ? PROVINCES[v] || v : v
          }</label>`
      )
      .join("");

  $("#filter-makes").innerHTML = checks(makeList, "make");
  $("#filter-bodies").innerHTML = checks(bodyList, "body");
  $("#filter-provinces").innerHTML = checks(provList, "province");

  const maxPayment = Math.max(...LISTINGS.map((l) => l.payment));
  const range = $("#filter-payment");
  range.max = Math.ceil(maxPayment / 100) * 100;
  range.value = range.max;

  const state = { makes: [], bodies: [], provinces: [], payment: +range.max, minMonths: 0, incentiveOnly: false, sort: "newest" };

  function apply() {
    let rows = LISTINGS.filter(
      (l) =>
        (!state.makes.length || state.makes.includes(l.make)) &&
        (!state.bodies.length || state.bodies.includes(l.body)) &&
        (!state.provinces.length || state.provinces.includes(l.province)) &&
        l.payment <= state.payment &&
        l.monthsLeft >= state.minMonths &&
        (!state.incentiveOnly || l.incentive > 0)
    );

    const sorters = {
      "newest": (a, b) => new Date(b.posted) - new Date(a.posted),
      "payment-asc": (a, b) => a.payment - b.payment,
      "payment-desc": (a, b) => b.payment - a.payment,
      "months-asc": (a, b) => a.monthsLeft - b.monthsLeft,
      "months-desc": (a, b) => b.monthsLeft - a.monthsLeft
    };
    rows.sort(sorters[state.sort]);

    $("#results-count").innerHTML = `${rows.length} lease takeover${rows.length === 1 ? "" : "s"} <span>across Canada</span>`;
    resultsGrid.innerHTML = rows.length
      ? rows.map(cardHTML).join("")
      : `<div class="empty" style="grid-column:1/-1">No leases match those filters — try widening your search.</div>`;
  }

  $(".filters").addEventListener("change", (e) => {
    const t = e.target;
    if (t.name === "make") state.makes = $$('input[name="make"]:checked').map((i) => i.value);
    if (t.name === "body") state.bodies = $$('input[name="body"]:checked').map((i) => i.value);
    if (t.name === "province") state.provinces = $$('input[name="province"]:checked').map((i) => i.value);
    if (t.id === "filter-months") state.minMonths = +t.value;
    if (t.id === "filter-incentive") state.incentiveOnly = t.checked;
    apply();
  });

  range.addEventListener("input", () => {
    state.payment = +range.value;
    $("#payment-val").textContent = `Up to ${money(+range.value)}/mo`;
    apply();
  });
  $("#payment-val").textContent = `Up to ${money(+range.value)}/mo`;

  $("#sort").addEventListener("change", (e) => {
    state.sort = e.target.value;
    apply();
  });

  $("#filters-reset").addEventListener("click", () => {
    $$(".filters input[type=checkbox]").forEach((i) => (i.checked = false));
    range.value = range.max;
    $("#filter-months").value = "0";
    Object.assign(state, { makes: [], bodies: [], provinces: [], payment: +range.max, minMonths: 0, incentiveOnly: false });
    $("#payment-val").textContent = `Up to ${money(+range.max)}/mo`;
    apply();
  });

  const toggleBtn = $("#filters-toggle");
  if (toggleBtn) toggleBtn.addEventListener("click", () => $(".browse").classList.toggle("filters-open"));

  // Deep-link support: listings.html?make=BMW
  const preMake = new URLSearchParams(location.search).get("make");
  if (preMake) {
    const box = $(`input[name="make"][value="${preMake}"]`);
    if (box) {
      box.checked = true;
      state.makes = [preMake];
    }
  }

  apply();
}

/* ---------- Detail page ---------- */
const detailRoot = $("#detail-root");
if (detailRoot) {
  const id = new URLSearchParams(location.search).get("id");
  const l = LISTINGS.find((x) => x.id === id) || LISTINGS[0];
  const status = KM_STATUS[l.kmStatus];
  const elapsed = l.termTotal - l.monthsLeft;
  const paceAllow = Math.round((l.kmPerYear / 12) * elapsed);
  const effective = l.incentive > 0 ? l.payment - Math.round(l.incentive / l.monthsLeft) : l.payment;

  document.title = `${l.year} ${l.make} ${l.model} ${l.trim} — LeaseBusters`;

  $("#crumb-current").textContent = `${l.year} ${l.make} ${l.model}`;

  detailRoot.innerHTML = `
    <div>
      <div class="detail-title">
        <h1>${l.year} ${l.make} ${l.model} ${l.trim}</h1>
        <p>${l.color} · ${l.drivetrain} · ${l.fuel} · Listed by ${l.seller.toLowerCase()} in ${l.city}, ${PROVINCES[l.province] || l.province}</p>
      </div>

      <div class="detail-photo">
        <img src="${l.image}" alt="${l.year} ${l.make} ${l.model}">
        <span class="pill">${clockIcon} ${l.monthsLeft} months remaining</span>
        ${l.incentive > 0 ? `<span class="flag-incentive">${money(l.incentive)} incentive</span>` : ""}
      </div>

      <div class="badge-row">
        <span class="badge ${status.cls}">${status.label}</span>
        <span class="badge">${km(l.odometer)} driven</span>
        <span class="badge">${km(l.kmPerYear)}/yr allowance</span>
        <span class="badge">${l.termTotal}-month lease</span>
      </div>

      <div class="panel">
        <h2>Lease facts</h2>
        <div class="facts">
          <div class="fact"><span>Monthly payment</span><b>${money(l.payment)} + tax</b></div>
          <div class="fact"><span>Months remaining</span><b>${l.monthsLeft} of ${l.termTotal}</b></div>
          <div class="fact"><span>Cash incentive</span><b>${l.incentive > 0 ? money(l.incentive) : "—"}</b></div>
          <div class="fact"><span>Annual km allowance</span><b>${km(l.kmPerYear)}</b></div>
          <div class="fact"><span>Current odometer</span><b>${km(l.odometer)}</b></div>
          <div class="fact"><span>Allowance to date</span><b>≈ ${km(paceAllow)}</b></div>
          <div class="fact"><span>End-of-term buyout</span><b>${money(l.buyout)}</b></div>
          <div class="fact"><span>Lender transfer fee</span><b>${money(l.transferFee)}</b></div>
          <div class="fact"><span>Location</span><b>${l.city}, ${l.province}</b></div>
        </div>
      </div>

      <div class="panel">
        <h2>Highlights</h2>
        <ul class="ticks">${l.highlights.map((h) => `<li>${h}</li>`).join("")}</ul>
      </div>

      <div class="panel">
        <h2>Seller's notes</h2>
        <p style="margin:0;color:var(--ink-soft)">${l.notes}</p>
      </div>

      <div class="panel">
        <h2>How the transfer works</h2>
        <ol class="steps" style="list-style:none;margin:0;padding:0;display:grid;gap:18px">
          <li class="step"><span class="step-num">1</span><div><b>Request the takeover</b><p>Tell the seller you're interested and ask any questions about the car.</p></div></li>
          <li class="step"><span class="step-num">2</span><div><b>Credit application</b><p>The automaker's finance arm approves you the same way they approved the original lease.</p></div></li>
          <li class="step"><span class="step-num">3</span><div><b>Sign & drive</b><p>Transfer paperwork is signed, the ${money(l.transferFee)} lender fee is paid, and the lease is yours.</p></div></li>
        </ol>
      </div>
    </div>

    <aside class="summary">
      <div class="summary-price">${money(l.payment)}<small>/mo + tax</small></div>
      <p class="summary-sub">${l.monthsLeft} months · ends ${endDate(l.monthsLeft)}</p>
      <div class="summary-rows">
        <div class="summary-row"><span>Monthly payment</span><b>${money(l.payment)}</b></div>
        ${l.incentive > 0 ? `
        <div class="summary-row highlight"><span>Cash incentive</span><b>− ${money(l.incentive)}</b></div>
        <div class="summary-row highlight"><span>Effective payment*</span><b>${money(effective)}/mo</b></div>` : ""}
        <div class="summary-row"><span>One-time transfer fee</span><b>${money(l.transferFee)}</b></div>
        <div class="summary-row"><span>Total remaining cost</span><b>${money(l.payment * l.monthsLeft + l.transferFee - l.incentive)}</b></div>
      </div>
      <a class="btn btn-primary btn-lg" href="#" onclick="alert('This is a design prototype — the takeover flow ships in phase 2.');return false;">Request this takeover</a>
      <a class="btn btn-ghost" href="listings.html" style="margin-top:10px">Keep browsing</a>
      <p class="summary-note">${l.incentive > 0 ? "*Incentive paid to you at transfer, spread across remaining months. " : ""}Payments exclude sales tax. Sample listing for demonstration.</p>
    </aside>`;

  // Similar listings — same body style first, then same make
  const similar = LISTINGS.filter((x) => x.id !== l.id)
    .sort((a, b) => ((b.body === l.body) - (a.body === l.body)) || ((b.make === l.make) - (a.make === l.make)))
    .slice(0, 3);
  $("#similar-grid").innerHTML = similar.map(cardHTML).join("");
}

function endDate(monthsLeft) {
  const d = new Date();
  d.setMonth(d.getMonth() + monthsLeft);
  return d.toLocaleDateString("en-CA", { month: "short", year: "numeric" });
}
