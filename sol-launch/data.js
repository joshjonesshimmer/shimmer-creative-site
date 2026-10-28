// Spark of Life · The Living Forward Course launch dashboard
// Update these numbers, then push. Everything on the page reads from here.
window.LF = {
  updated: "Wednesday, October 28 at 11:20 a.m. Eastern",

  // Purchases (GHL Payments > Transactions, "Living Forward: Finding Hope After Loss")
  price: 99,
  // One entry per launch day. count = enrollments that day (Central time).
  // upcoming: true shows the day as still ahead.
  salesByDay: [
    { day: "Sat", date: "Oct 24", count: 0 },
    { day: "Sun", date: "Oct 25", count: 2 },
    { day: "Mon", date: "Oct 26", count: 1 },
    { day: "Tue", date: "Oct 27", count: 2 },
    { day: "Wed", date: "Oct 28", count: 2, today: true },
    { day: "Thu", date: "Oct 29", count: 0, upcoming: true },
    { day: "Fri", date: "Oct 30", count: 0, upcoming: true }
  ],
  // Where enrollments came from (GHL contact record: on the list before buying, or new)
  fromEmailList: 5,
  newToSpark: 2,

  // Launch emails (GHL Marketing > Emails > each campaign's Statistics)
  emails: [
    { name: "The Living Forward Course is here!", date: "Sat, Oct 24", delivered: 5906, openRate: 15.8, clickRate: 0.30 },
    { name: "Reminder of Saturday's email", date: "Sun, Oct 25", delivered: 5058, openRate: 4.8, clickRate: 0.02 },
    { name: "Introducing our new online grief course", date: "Mon, Oct 26", delivered: 4573, openRate: 17.3, clickRate: 0.37 },
    { name: "Reminder of Monday's email", date: "Tue, Oct 27", delivered: 3892, openRate: 4.8, clickRate: 0.08 },
    { name: "Finding hope after loss, at your own pace", date: "Tue, Oct 27", delivered: 4567, openRate: 15.5, clickRate: 0.31 },
    { name: "Inside our online grief course", date: "Wed, Oct 28", delivered: 4568, openRate: 7.0, clickRate: 0.24, early: true }
  ],
  emailsStillToCome: "A reminder tonight, Thursday morning's email, and Friday's last-day email with an evening reminder",

  // Meta ad (Ads Manager > campaign "SOL - Living Forward Course Launch - Oct 2026" > ad set)
  adSpend: 95.68,
  adBudget: 250,
  adVisits: 318,          // Results: Landing Page Views
  adReach: 13590,         // Reach
  adCostPerVisit: 0.30,   // Cost per result

  // Sale ends Friday, October 30 at 11:59 p.m. Eastern
  saleEnds: "2026-10-30T23:59:00-04:00"
};
