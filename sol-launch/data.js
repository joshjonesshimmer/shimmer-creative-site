// Spark of Life · The Living Forward Course launch dashboard
// Update these numbers, then push. Everything on the page reads from here.
window.LF = {
  updated: "Thursday, October 29 at 7:50 a.m. Eastern",
  eyebrow: "Launch Extended",

  // Purchases (GHL Payments > Transactions, "Living Forward: Finding Hope After Loss")
  price: 99,
  // One entry per launch day. count = enrollments that day (Central time).
  // upcoming: true shows the day as still ahead.
  salesByDay: [
    { day: "Sat", date: "Oct 24", count: 0 },
    { day: "Sun", date: "Oct 25", count: 2 },
    { day: "Mon", date: "Oct 26", count: 1 },
    { day: "Tue", date: "Oct 27", count: 2 },
    { day: "Wed", date: "Oct 28", count: 5 },
    { day: "Thu", date: "Oct 29", count: 0, today: true },
    { day: "Fri", date: "Oct 30", count: 0, upcoming: true },
    { day: "Sat", date: "Oct 31", count: 0, upcoming: true },
    { day: "Sun", date: "Nov 1", count: 0, upcoming: true },
    { day: "Mon", date: "Nov 2", count: 0, upcoming: true },
    { day: "Tue", date: "Nov 3", count: 0, upcoming: true },
    { day: "Wed", date: "Nov 4", count: 0, upcoming: true },
    { day: "Thu", date: "Nov 5", count: 0, upcoming: true },
    { day: "Fri", date: "Nov 6", count: 0, upcoming: true }
  ],
  // Where enrollments came from (GHL contact record: on the list before buying, or new)
  fromEmailList: 7,
  newToSpark: 3,

  // Launch emails (GHL Marketing > Emails > each campaign's Statistics)
  // preview: image mockup shown on hover. Reminders reuse the original email's image.
  // Ready for upcoming sends: previews/email-thu.jpg, previews/email-fri.jpg
  emails: [
    { name: "The Living Forward Course is here!", date: "Sat, Oct 24", delivered: 5906, openRate: 16.0, clickRate: 0.30, preview: "previews/email-sat.jpg" },
    { name: "Reminder of Saturday's email", date: "Sun, Oct 25", delivered: 5058, openRate: 5.3, clickRate: 0.02, preview: "previews/email-sat.jpg" },
    { name: "Introducing our new online grief course", date: "Mon, Oct 26", delivered: 4573, openRate: 17.8, clickRate: 0.39, preview: "previews/email-mon.jpg" },
    { name: "Reminder of Monday's email", date: "Tue, Oct 27", delivered: 3892, openRate: 5.5, clickRate: 0.10, preview: "previews/email-mon.jpg" },
    { name: "Finding hope after loss, at your own pace", date: "Tue, Oct 27", delivered: 4567, openRate: 16.7, clickRate: 0.33, preview: "previews/email-tue.jpg" },
    { name: "Inside our online grief course", date: "Wed, Oct 28", delivered: 4565, openRate: 16.2, clickRate: 0.26, early: true, preview: "previews/email-wed.jpg" }
  ],
  emailsStillToCome: "Friday's email with an evening reminder",

  // Meta ad (Ads Manager > campaign "SOL - Living Forward Course Launch - Oct 2026" > ad set)
  adSpend: 155.38,
  adBudget: 250,
  adVisits: 479,          // Results: Landing Page Views
  adReach: 18326,         // Reach
  adCostPerVisit: 0.32,   // Cost per result
  adRunsThrough: "Runs through Friday, October 30",
  adPreview: "previews/ad-v5.jpg",

  // Sale ends Friday, October 30 at 11:59 p.m. Eastern
  saleEnds: "2026-10-30T23:59:00-04:00"
};
