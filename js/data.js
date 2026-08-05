// Sample listing data for the LeaseBusters design prototype.
// All listings are fictional and for demonstration only.
// Phase 2 replaces this file with live data (e.g. Supabase).

const LISTINGS = [
  {
    id: "2024-tesla-model-3-lr",
    year: 2024, make: "Tesla", model: "Model 3", trim: "Long Range AWD",
    body: "Sedan", fuel: "Electric", drivetrain: "AWD", color: "Pearl White",
    payment: 486, monthsLeft: 19, termTotal: 48,
    kmPerYear: 16000, odometer: 33900, kmStatus: "under",
    buyout: 34200, incentive: 0, transferFee: 500,
    city: "Toronto", province: "ON",
    posted: "2026-08-02", seller: "Private seller",
    image: "images/car-13.jpg", featured: true,
    highlights: [
      "Full self-driving hardware, Autopilot included",
      "Winter tire set on rims included in transfer",
      "Charging at home its whole life — battery health 96%",
      "No accidents, non-smoker, always garaged"
    ],
    notes: "Relocating overseas for work in October. Car has been meticulously maintained and is under pace on kilometres. Happy to meet at a Tesla service centre for an inspection."
  },
  {
    id: "2024-honda-crv-sport",
    year: 2024, make: "Honda", model: "CR-V", trim: "Sport",
    body: "SUV", fuel: "Hybrid", drivetrain: "AWD", color: "Platinum White Pearl",
    payment: 438, monthsLeft: 27, termTotal: 48,
    kmPerYear: 20000, odometer: 29750, kmStatus: "under",
    buyout: 27800, incentive: 1000, transferFee: 395,
    city: "Mississauga", province: "ON",
    posted: "2026-07-29", seller: "Private seller", featured: true,
    image: "images/car-18.jpg",
    highlights: [
      "Generous 20,000 km/yr allowance — 5,000 km under pace",
      "$1,000 cash incentive paid at transfer",
      "Honda Plus extended warranty transfers with the lease",
      "Remote start, heated seats and steering wheel"
    ],
    notes: "Growing family means we need a three-row. Great commuter — most kilometres are highway. All service done at the dealer, records available."
  },
  {
    id: "2024-bmw-430i-xdrive",
    year: 2024, make: "BMW", model: "430i", trim: "xDrive Coupé",
    body: "Coupe", fuel: "Gas", drivetrain: "AWD", color: "Portimao Blue",
    payment: 712, monthsLeft: 14, termTotal: 36,
    kmPerYear: 12000, odometer: 19300, kmStatus: "under",
    buyout: 38900, incentive: 0, transferFee: 500,
    city: "Vancouver", province: "BC",
    posted: "2026-08-04", seller: "Private seller", featured: true,
    image: "images/car-8.jpg",
    highlights: [
      "Premium Enhanced package — HUD, Harman Kardon, sunroof",
      "Short 14-month commitment, then walk away or buy out",
      "Under allowance with room to spare",
      "Fresh BMW-service oil change and inspection"
    ],
    notes: "Switching to an EV through work. The car is flawless — Portimao Blue turns heads everywhere. Short remaining term makes this a low-risk way to try a BMW."
  },
  {
    id: "2023-bmw-m5-competition",
    year: 2023, make: "BMW", model: "M5", trim: "Competition",
    body: "Sedan", fuel: "Gas", drivetrain: "AWD", color: "Brilliant White",
    payment: 1565, monthsLeft: 10, termTotal: 36,
    kmPerYear: 12000, odometer: 28400, kmStatus: "over",
    buyout: 74500, incentive: 3000, transferFee: 650,
    city: "Richmond Hill", province: "ON",
    posted: "2026-07-25", seller: "Private seller",
    image: "images/car-12.jpg",
    highlights: [
      "617 hp Competition spec with M Driver's Package",
      "$3,000 cash incentive to offset kilometre pace",
      "Carbon ceramic brakes — a $10k+ option",
      "Ten months to enjoy it, then hand it back"
    ],
    notes: "Slightly over on kilometres, priced accordingly with a $3,000 incentive. Ideal for someone who works from home and wants a supercar-pace sedan for under a year."
  },
  {
    id: "2023-ford-expedition-limited",
    year: 2023, make: "Ford", model: "Expedition", trim: "Limited Max",
    body: "SUV", fuel: "Gas", drivetrain: "4x4", color: "Star White",
    payment: 942, monthsLeft: 11, termTotal: 48,
    kmPerYear: 24000, odometer: 66100, kmStatus: "under",
    buyout: 41200, incentive: 2500, transferFee: 395,
    city: "Calgary", province: "AB",
    posted: "2026-07-31", seller: "Private seller",
    image: "images/car-1.jpg",
    highlights: [
      "Seats eight with the huge Max cargo area",
      "$2,500 cash incentive — well below market payment",
      "Heavy-duty tow package, 9,000 lb rated",
      "Big 24,000 km/yr allowance"
    ],
    notes: "Downsizing now that the kids are in university. Perfect family or towing rig with under a year of commitment left."
  },
  {
    id: "2024-porsche-panamera-4",
    year: 2024, make: "Porsche", model: "Panamera", trim: "4",
    body: "Sedan", fuel: "Gas", drivetrain: "AWD", color: "Jet Black Metallic",
    payment: 1489, monthsLeft: 30, termTotal: 48,
    kmPerYear: 15000, odometer: 21800, kmStatus: "on-track",
    buyout: 89300, incentive: 0, transferFee: 650,
    city: "Montréal", province: "QC",
    posted: "2026-08-01", seller: "Private seller",
    image: "images/car-6.jpg",
    highlights: [
      "Sport Chrono, air suspension, Bose surround",
      "Porsche scheduled maintenance fully up to date",
      "Bilingual transfer support — lease held with Porsche Financial QC",
      "Right on kilometre pace"
    ],
    notes: "Career change means the car has to go. A dignified daily with genuine Porsche pace — the 30 remaining months are cheaper than any new Panamera lease quoted today."
  },
  {
    id: "2023-chevrolet-camaro-2ss",
    year: 2023, make: "Chevrolet", model: "Camaro", trim: "2SS",
    body: "Coupe", fuel: "Gas", drivetrain: "RWD", color: "Rapid Blue",
    payment: 604, monthsLeft: 9, termTotal: 48,
    kmPerYear: 16000, odometer: 44900, kmStatus: "under",
    buyout: 31600, incentive: 1200, transferFee: 395,
    city: "Edmonton", province: "AB",
    posted: "2026-07-22", seller: "Private seller",
    image: "images/car-2.jpg",
    highlights: [
      "6.2L V8, last of the breed — Camaro production has ended",
      "$1,200 incentive and only 9 months left",
      "Summer-only driven, stored winters",
      "Magnetic Ride Control and Brembo brakes"
    ],
    notes: "Bought a house, garage is now a workshop. One last summer of V8 for someone — the lease wraps up next spring."
  },
  {
    id: "2024-ford-mustang-gt",
    year: 2024, make: "Ford", model: "Mustang", trim: "GT Premium",
    body: "Coupe", fuel: "Gas", drivetrain: "RWD", color: "Shadow Black",
    payment: 648, monthsLeft: 21, termTotal: 48,
    kmPerYear: 16000, odometer: 37900, kmStatus: "over",
    buyout: 35400, incentive: 1500, transferFee: 395,
    city: "Ottawa", province: "ON",
    posted: "2026-07-27", seller: "Private seller",
    image: "images/car-4.jpg",
    highlights: [
      "Seventh-gen GT with the 486 hp Coyote V8",
      "$1,500 incentive offsets kilometre pace",
      "Active exhaust and B&O sound system",
      "6-speed manual — increasingly rare"
    ],
    notes: "Slightly ahead on kilometres from a summer road trip, hence the incentive. Adult-owned, never tracked, always premium fuel."
  },
  {
    id: "2024-bmw-m4-competition",
    year: 2024, make: "BMW", model: "M4", trim: "Competition xDrive",
    body: "Coupe", fuel: "Gas", drivetrain: "AWD", color: "Brooklyn Grey",
    payment: 1238, monthsLeft: 16, termTotal: 36,
    kmPerYear: 12000, odometer: 17600, kmStatus: "under",
    buyout: 68200, incentive: 0, transferFee: 650,
    city: "London", province: "ON",
    posted: "2026-08-03", seller: "Private seller",
    image: "images/car-11.jpg",
    highlights: [
      "503 hp Competition xDrive — 0-100 in 3.5s",
      "M Carbon bucket seats and carbon exterior package",
      "Well under kilometre allowance",
      "BMW Ultimate Care service included to end of term"
    ],
    notes: "Company car policy changed and I can't run two vehicles. The spec sheet on this build was $12k in options."
  },
  {
    id: "2024-mercedes-gle-450",
    year: 2024, make: "Mercedes-Benz", model: "GLE 450", trim: "4MATIC Coupe",
    body: "SUV", fuel: "Gas", drivetrain: "AWD", color: "Polar White",
    payment: 1118, monthsLeft: 22, termTotal: 45,
    kmPerYear: 18000, odometer: 30200, kmStatus: "under",
    buyout: 61800, incentive: 0, transferFee: 500,
    city: "Laval", province: "QC",
    posted: "2026-07-30", seller: "Private seller",
    image: "images/car-14.jpg",
    highlights: [
      "AMG Line package with 22\" wheels",
      "Burmester audio, panoramic roof, massage seats",
      "4,000 km under allowance",
      "Transferable Mercedes mBrace services"
    ],
    notes: "Moving downtown and going car-free. Dealer-serviced with every record. Bilingual handover support available."
  },
  {
    id: "2023-audi-rs6-avant",
    year: 2023, make: "Audi", model: "RS 6", trim: "Avant",
    body: "Wagon", fuel: "Gas", drivetrain: "AWD", color: "Mythos Black",
    payment: 1890, monthsLeft: 8, termTotal: 36,
    kmPerYear: 12000, odometer: 24100, kmStatus: "under",
    buyout: 92700, incentive: 5000, transferFee: 650,
    city: "Oakville", province: "ON",
    posted: "2026-07-20", seller: "Private seller",
    image: "images/car-16.jpg",
    highlights: [
      "$5,000 cash incentive — serious money on the hood",
      "591 hp twin-turbo V8 family hauler",
      "Dynamic package, RS sport exhaust, night vision",
      "Eight months of the ultimate wagon, then walk away"
    ],
    notes: "Business is relocating me to the US and the lease can't come along. The incentive reflects that I need this done in the next month."
  },
  {
    id: "2023-nissan-gtr-premium",
    year: 2023, make: "Nissan", model: "GT-R", trim: "Premium",
    body: "Coupe", fuel: "Gas", drivetrain: "AWD", color: "Pearl White TriCoat",
    payment: 1255, monthsLeft: 6, termTotal: 36,
    kmPerYear: 12000, odometer: 18750, kmStatus: "under",
    buyout: 98500, incentive: 0, transferFee: 500,
    city: "Winnipeg", province: "MB",
    posted: "2026-07-18", seller: "Crown Nissan", sellerType: "dealer",
    image: "images/car-3.jpg",
    highlights: [
      "One of the final R35 GT-Rs sold in Canada",
      "Only 18,750 km — 11,000 under allowance",
      "Six-month commitment with a buyout option at end",
      "Never winter driven, never launched"
    ],
    notes: "The buyout at term end is below what final-year GT-Rs are trading for — take over the last six months and you get first right to buy it."
  },
  {
    id: "2022-mercedes-amg-gt",
    year: 2022, make: "Mercedes-Benz", model: "AMG GT", trim: "Stealth Edition",
    body: "Coupe", fuel: "Gas", drivetrain: "RWD", color: "Jupiter Red",
    payment: 1349, monthsLeft: 5, termTotal: 48,
    kmPerYear: 12000, odometer: 26300, kmStatus: "under",
    buyout: 84900, incentive: 0, transferFee: 650,
    city: "Halifax", province: "NS",
    posted: "2026-07-15", seller: "Private seller",
    image: "images/car-10.jpg",
    highlights: [
      "Hand-built AMG 4.0L biturbo V8",
      "16,700 km under total allowance",
      "Five summer months left — the cheapest way into an AMG GT",
      "AMG Track Pace data logger, never tracked"
    ],
    notes: "East-coast summer car looking for its last steward. Stored indoors October through April every year."
  }
];

// Province display names for filters
const PROVINCES = {
  ON: "Ontario", QC: "Québec", BC: "British Columbia", AB: "Alberta",
  MB: "Manitoba", NS: "Nova Scotia", SK: "Saskatchewan", NB: "New Brunswick"
};
