// Spark of Life · The Living Forward Course holiday sale dashboard (Black Friday to Cyber Monday)
// Update these numbers, then push. Everything on the page reads from here.
window.SALE = {
  updated: "Friday, November 27 at 10:00 a.m. Eastern",
  eyebrow: "Black Friday to Cyber Monday",

  // Sale details
  code: "HOPE99",
  regularPrice: 199,
  salePrice: 99,
  saleEnds: "2026-11-30T23:59:00-05:00",      // public end: Monday, November 30 at 11:59 p.m. Eastern
  saleEndsText: "Monday, November 30 at 11:59 p.m. Eastern",

  // All-time course enrollments before this sale (GHL Payments > Transactions,
  // "Living Forward: Finding Hope After Loss", succeeded). Sale enrollments are added on top.
  enrolledBeforeSale: 41,

  // Courses sold during the sale, one entry per sale day (Eastern time).
  // amount = what was actually paid that day (GHL Transactions). today: true marks today.
  salesByDay: [
    { day: "Thu", date: "Nov 26", count: 0, amount: 0, note: "Sale began at 5 p.m." },
    { day: "Fri", date: "Nov 27", count: 0, amount: 0, today: true },
    { day: "Sat", date: "Nov 28", upcoming: true },
    { day: "Sun", date: "Nov 29", upcoming: true },
    { day: "Mon", date: "Nov 30", upcoming: true }
  ],

  // Sale emails (GHL Marketing > Emails > each campaign's Statistics)
  emails: [
    { name: "Hope for the holidays: grief course $99", date: "Thu, Nov 26", delivered: 5751, openRate: 12.82, clickRate: 0.24 },
    { name: "It’s Black Friday: The Living Forward Course is Only $99", date: "Fri, Nov 27", delivered: 4477, openRate: 4.13, clickRate: 0.11, early: true }
  ],
  emailsStillToCome: "Friday afternoon’s email, Sunday morning’s reminder, and two Cyber Monday emails",

  // Meta ads (Ads Manager > "SOL - Living Forward Black Friday + Cyber Monday $99 - Nov 2026", BF Weekend ad sets)
  adSpend: 54.04,
  adBudget: 190,
  adVisits: 227,          // Landing page views
  adReach: 2228,
  adCostPerVisit: 0.24,
  adRunsThrough: "Runs through Sunday, November 29",
  adPreview: "previews/ad-bf1.jpg",
  warmupVisits: 242       // Warm-up video ad, Tuesday to Thursday before the sale
};
