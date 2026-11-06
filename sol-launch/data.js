// Spark of Life · The Living Forward Course launch dashboard
// Update these numbers, then push. Everything on the page reads from here.
window.LF = {
  updated: "Friday, November 6 at 5:15 p.m. Eastern. Email results are from Thursday, November 5 at 7:46 a.m.",
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
    { day: "Thu", date: "Oct 29", count: 0 },
    { day: "Fri", date: "Oct 30", count: 5 },
    { day: "Sat", date: "Oct 31", count: 0 },
    { day: "Sun", date: "Nov 1", count: 1 },
    { day: "Mon", date: "Nov 2", count: 4 },
    { day: "Tue", date: "Nov 3", count: 1 },
    { day: "Wed", date: "Nov 4", count: 2 },
    { day: "Thu", date: "Nov 5", count: 9 },
    { day: "Fri", date: "Nov 6", count: 5, today: true }
  ],
  // Where enrollments came from (GHL contact record: on the list before buying, or new)
  fromEmailList: 15,
  newToSpark: 8,

  // Launch emails (GHL Marketing > Emails > each campaign's Statistics)
  // preview: image mockup shown on hover. Reminders reuse the original email's image.
  // Ready for upcoming sends: previews/email-thu.jpg, previews/email-fri.jpg
  emails: [
    { name: "The Living Forward Course is here!", date: "Sat, Oct 24", delivered: 5906, openRate: 16.1, clickRate: 0.30, preview: "previews/email-sat.jpg" },
    { name: "Reminder of Saturday's email", date: "Sun, Oct 25", delivered: 5058, openRate: 5.4, clickRate: 0.02, preview: "previews/email-sat.jpg" },
    { name: "Introducing our new online grief course", date: "Mon, Oct 26", delivered: 4573, openRate: 18.1, clickRate: 0.39, preview: "previews/email-mon.jpg" },
    { name: "Reminder of Monday's email", date: "Tue, Oct 27", delivered: 3892, openRate: 5.7, clickRate: 0.10, preview: "previews/email-mon.jpg" },
    { name: "Finding hope after loss, at your own pace", date: "Tue, Oct 27", delivered: 4567, openRate: 17.0, clickRate: 0.33, preview: "previews/email-tue.jpg" },
    { name: "Inside our online grief course", date: "Wed, Oct 28", delivered: 4565, openRate: 17.5, clickRate: 0.26, preview: "previews/email-wed.jpg" },
    { name: "Last day: $99 for our online grief course", date: "Fri, Oct 30", delivered: 4560, openRate: 17.4, clickRate: 0.39, preview: "previews/email-fri.jpg" },
    { name: "Great News: One More Week at $99!", date: "Sat, Oct 31", delivered: 5866, openRate: 16.8, clickRate: 0.27, preview: "previews/email-fri.jpg" },
    { name: "Reminder of Saturday's email", date: "Sun, Nov 1", delivered: 4948, openRate: 4.7, clickRate: 0.04, preview: "previews/email-fri.jpg" },
    { name: "Your First Step Toward Hope: $99 Ends Friday", date: "Tue, Nov 3", delivered: 5836, openRate: 16.5, clickRate: 0.29, preview: "previews/email-fri.jpg" },
    { name: "Reminder of Monday's email", date: "Wed, Nov 4", delivered: 4907, openRate: 2.6, clickRate: 0.06, preview: "previews/email-fri.jpg", early: true }
  ],
  emailsStillToCome: "results for Thursday's and Friday's emails",

  // Meta ad (Ads Manager > campaign "SOL - Living Forward Course Launch - Oct 2026" > ad set)
  adSpend: 611.14,
  adBudget: 650,
  adVisits: 1861,         // Results: Landing Page Views
  adReach: 45850,         // Reach
  adCostPerVisit: 0.33,   // Cost per result
  adRunsThrough: "Runs through Friday, November 6",
  adPreview: "previews/ad-v5.jpg",

  // Sale ends Friday, October 30 at 11:59 p.m. Eastern
  saleEnds: "2026-10-30T23:59:00-04:00"
};
