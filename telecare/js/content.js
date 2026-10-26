// content.js - ALL the wording you are likely to change. Edit text here; no HTML knowledge needed.
// (Page layout lives in pages.js, colors in css/styles.css.)
// Use &amp; for "&" inside these strings.

const CONTENT = {
  // Yellow bar at the top of every page and the admin dashboard. Delete the text once the clinic details are verified.
  banner: 'Student project demo · Clinic details, people and notices are sample content, not verified clinic information.',

  // Footer
  tagline: 'Closer to your community. Clearer about your clinic. Essential information, open to everyone.',
  copyright: '© 2026 TeleCare · Group 10, BSIT 2-2 · Student project',

  // Clinic contact box (home page). Replace once the clinic confirms these.
  contact: {
    name: 'Barangay clinic · name to be confirmed',
    address: 'To be confirmed by the clinic',
    phone: 'To be confirmed by the clinic',
  },

  // Operating hours. "time" is shown on the home page, "status" on the About page.
  hours: [
    { days: 'Monday – Friday',  time: '8:00 AM–5:00 PM',  status: 'To be confirmed' },
    { days: 'Saturday',         time: '10:00 AM–5:00 PM', status: 'To be confirmed' },
    { days: 'Sunday &amp; holidays', time: 'To be confirmed', status: 'To be confirmed' },
  ],

  // The three service cards on the home page
  services: [
    { title: 'Medical consultations', text: 'Learn about in-person consultations at the barangay clinic.' },
    { title: 'Check-ups',             text: 'Find information about routine, in-person health check-ups.' },
    { title: 'Emergency assistance',  text: 'Understand the clinic’s in-person assistance and its limitations.' },
  ],

  // "Get to know your clinic team" cards (home page)
  teamCategories: [
    { title: 'Consultation team',       text: 'Provider names and availability to be confirmed.' },
    { title: 'Nursing team',            text: 'Staff names and duty hours to be confirmed.' },
    { title: 'Barangay health workers', text: 'Community team details to be confirmed.' },
  ],

  // Frequently asked questions (home page)
  faq: [
    { q: 'Do I need an account to browse?', a: 'No. Services, team information, hours, announcements and contact details are available to everyone.' },
    { q: 'Can I book or consult online?',   a: 'No. TeleCare does not offer online consultations or appointment booking. All clinical services are in person.' },
    { q: 'Are services free?',              a: 'Barangay health services are generally public and free. Confirm availability and any requirements directly with the clinic.' },
  ],

  // Group members (About page). Add or remove a line to change the cards.
  students: [
    { initials: 'JC', name: 'Casin, John Michael P.',       role: 'Project manager / leader' },
    { initials: 'ED', name: 'Dela Cruz, Ethan Yueshua O.',  role: 'Student project creator' },
    { initials: 'NR', name: 'Reyes, Nicolas Thomas C.',     role: 'Student project creator' },
    { initials: 'AT', name: 'Tandoy, Ace Vhyxzl B.',        role: 'Student project creator' },
    { initials: 'RT', name: 'Torrequemada, Rei Andre D.',   role: 'Student project creator' },
  ],
  adviser: 'Project adviser: John Garcia · HCI project proposal, October 2026',
};
