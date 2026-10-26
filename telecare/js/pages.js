// pages.js - one function per page; each returns the page as an HTML string.
// home() / about() / login() / admin() are at the top of each block and are built from small
// section functions below them, so to edit one section of a page, find its function by name.
// Wording that clinic staff or students may change lives in content.js.


/* ==========================================================================
   HOME PAGE
   ========================================================================== */

function home() {
  const published = notices
    .filter(n => n.status === 'Published')
    .sort((a, b) => b.date.localeCompare(a.date));

  return header('home')
    + homeHero()
    + homeQuickLinks()
    + homeServices()
    + homeHours()
    + homeNews(published)
    + homeTeam()
    + homeSteps()
    + homeMission()
    + homeContact()
    + homeFaq()
    + homeEmergency()
    + footer();
}

function homeHero() {
  return `
    <div class="wrap hero">
      <div>
        <span class="eyebrow">Your barangay clinic, made clearer</span>
        <h1>Good care starts with knowing where to turn.</h1>
        <p class="lead">Services, clinic hours and community updates in one place. Find what you need to know before your next in-person visit.</p>
        <div class="row">
          <a class="btn pri" href="#home#services">Explore clinic services →</a>
          <a class="btn" href="#home#contact">Clinic hours &amp; contact</a>
        </div>
      </div>
      <div class="img">
        ${photo('home-hero')}
        <small>Illustrative image · not actual clinic staff</small>
      </div>
    </div>`;
}

function homeQuickLinks() {
  return `
    <div class="quick">
      <div class="wrap">
        <a href="#home#services"><b>In-person services</b><span>Know what the clinic offers</span></a>
        <a href="#home#contact"><b>Hours before you go</b><span>Check schedule information</span></a>
        <a href="#home#news"><b>Community notices</b><span>Stay informed about changes</span></a>
      </div>
    </div>`;
}

function homeServices() {
  // Service titles and descriptions come from CONTENT.services (content.js)
  const cards = CONTENT.services.map(({ title, text }) => `
    <div class="card">
      <h3>${title}</h3>
      <p>${text}</p>
      <span class="tag">In person · Sample information</span>
      <a class="more" href="#about">View service information ↗</a>
    </div>`).join('');

  return `
    <section id="services">
      <div class="wrap">
        <div class="head">
          <div>
            <span class="eyebrow">Care in your community</span>
            <h2>Know the services available to you.</h2>
          </div>
          <p>
            <span class="pill">Sample service directory</span><br><br>
            Barangay health services are generally public and free. Confirm details with the clinic.
          </p>
        </div>
        <div class="grid3">${cards}</div>
      </div>
    </section>`;
}

function homeHours() {
  // Hours come from CONTENT.hours (content.js)
  const rows = CONTENT.hours.map(h => `
    <div><span>${h.days}</span><span>${h.time}</span></div>`).join('');

  return `
    <div class="wrap">
      <div class="dark">
        <div>
          <span class="eyebrow" style="color:#f5e9b9">A little planning helps</span>
          <h2>Check the details.<br>Make the trip with confidence.</h2>
          <p class="muted" style="margin-top:20px">Clinic schedules and staff availability may change. Check announcements and confirm the details before travelling.</p>
        </div>
        <div>
          <h3>Clinic operating hours</h3>
          <div class="hours">${rows}</div>
          <p class="muted" style="font-size:13px;margin-top:14px">No verified opening status is available. Do not rely on these placeholders to plan an urgent visit.</p>
        </div>
      </div>
    </div>`;
}

function homeNews(published) {
  // Shows the 3 newest PUBLISHED notices. Admins manage these in the dashboard.
  const cards = published.slice(0, 3).map(n => `
    <div class="card">
      <span class="pill ${n.cat === 'Schedule notice' ? '' : 'ok'}">${esc(n.cat)}</span>
      <h3 style="margin-top:14px">${esc(n.title)}</h3>
      <p>${esc(n.body)}</p>
      <p style="font-size:13px;margin-top:14px">${fmt(n.date)} · Sample</p>
    </div>`).join('');

  const empty = '<p class="muted">No notices are published yet. Check back soon.</p>';

  return `
    <section id="news">
      <div class="wrap">
        <div class="head">
          <div>
            <span class="eyebrow">From the clinic noticeboard</span>
            <h2>The latest, before you leave home.</h2>
          </div>
        </div>
        <div class="grid3">${published.length ? cards : empty}</div>
      </div>
    </section>`;
}

function homeTeam() {
  // Team categories come from CONTENT.teamCategories (content.js)
  const cards = CONTENT.teamCategories.map(({ title, text }) => `
    <div class="card">
      <h3>${title}</h3>
      <p>${text}</p>
    </div>`).join('');

  return `
    <section class="tint" id="team">
      <div class="wrap">
        <div class="head">
          <div>
            <span class="eyebrow">People behind community care</span>
            <h2>Get to know your clinic team.</h2>
          </div>
          <p>Sample team categories only. Names, credentials and duty schedules must be confirmed.</p>
        </div>
        <div class="grid3">${cards}</div>
      </div>
    </section>`;
}

function homeSteps() {
  return `
    <section>
      <div class="wrap">
        <span class="eyebrow">Simple by design</span>
        <h2 style="margin-bottom:32px">A clearer path to clinic information.</h2>
        <div class="steps">
          <div>
            <b>01</b>
            <h3>Find what you need</h3>
            <p class="muted">Browse services, staff information and contact details. Everything essential is public.</p>
          </div>
          <div>
            <b>02</b>
            <h3>Check the latest notice</h3>
            <p class="muted">Look for schedule changes and service updates before planning a visit.</p>
          </div>
          <div>
            <b>03</b>
            <h3>Confirm, then visit</h3>
            <p class="muted">Contact the clinic to confirm availability. Consultations and check-ups happen in person.</p>
          </div>
        </div>
      </div>
    </section>`;
}

function homeMission() {
  return `
    <div class="wrap">
      <div class="split">
        <div class="img" style="min-height:300px">${photo('community')}</div>
        <div>
          <span class="eyebrow">Made for the barangay</span>
          <h2 style="font-size:40px">Less uncertainty.<br>More connection.</h2>
          <p class="muted" style="margin:18px 0 24px">TeleCare brings essential clinic information together, so residents don’t have to travel just to ask a simple question. A student project with a clear purpose: make community healthcare information easier to find.</p>
          <a class="btn" href="#about">Learn about TeleCare ↗</a>
        </div>
      </div>
    </div>`;
}

function homeContact() {
  // Name, address and phone come from CONTENT.contact (content.js)
  return `
    <section class="tint" id="contact" style="margin-top:72px">
      <div class="wrap split">
        <div>
          <span class="eyebrow">Know where to reach out</span>
          <h2>Your next step,<br>closer to home.</h2>
          <p class="muted" style="margin-top:16px">For service availability and visit requirements, reach out directly to the clinic once verified contact details are available.</p>
        </div>
        <div class="card list">
          <span>Clinic name</span>
          <b style="margin:0 0 14px">${CONTENT.contact.name}</b>
          <span>Clinic address</span>
          <b style="margin:0 0 14px">${CONTENT.contact.address}</b>
          <span>Phone &amp; email</span>
          <b style="margin:0">${CONTENT.contact.phone}</b>
        </div>
      </div>
    </section>`;
}

function homeFaq() {
  // Questions and answers come from CONTENT.faq (content.js)
  const items = CONTENT.faq.map(f => `
    <details>
      <summary>${f.q}</summary>
      <p>${f.a}</p>
    </details>`).join('');

  return `
    <section>
      <div class="wrap split" style="align-items:start">
        <div>
          <span class="eyebrow">A few helpful answers</span>
          <h2>Clear information.<br>Clear expectations.</h2>
        </div>
        <div class="faq">${items}</div>
      </div>
    </section>`;
}

function homeEmergency() {
  return `
    <div class="emerg">
      <div class="wrap">
        <b>In an emergency, do not wait for a website update.</b>
        Contact local emergency services or go to the nearest emergency facility. TeleCare is not monitored for urgent requests.
      </div>
    </div>`;
}


/* ==========================================================================
   ABOUT PAGE
   ========================================================================== */

function about() {
  return header('about')
    + aboutHero()
    + aboutMission()
    + aboutValuesAndRole()
    + aboutAuthorizedHands()
    + aboutGlance()
    + aboutTeam()
    + aboutCta()
    + footer();
}

function aboutHero() {
  return `
    <div class="wrap hero">
      <div>
        <span class="eyebrow">About TeleCare</span>
        <h1>Better information. A more connected community.</h1>
        <p class="lead">A simple idea with a meaningful purpose: help barangay residents find essential clinic information without making a trip just to ask.</p>
      </div>
      <div class="img" style="border-top-right-radius:120px">
        ${photo('about-hero')}
        <small>Illustrative community image · not an actual partner clinic</small>
      </div>
    </div>`;
}

function aboutMission() {
  return `
    <section class="tint">
      <div class="wrap split" style="align-items:start">
        <div>
          <span class="eyebrow">Our mission</span>
          <h2>Make the essential easy to find.</h2>
        </div>
        <div>
          <h3 style="font-size:24px">One reliable place for services, people, opening hours, announcements and ways to reach the clinic.</h3>
          <p class="muted" style="margin-top:14px">Unclear schedules and scattered information can mean unnecessary travel and waiting. TeleCare organizes the basics so residents can understand their options and confirm details before an in-person visit.</p>
        </div>
      </div>
    </section>`;
}

function aboutValuesAndRole() {
  const values = [
    ['Open to everyone',        'Essential clinic information stays public. No sign-in barrier to finding the basics.'],
    ['Clear, everyday language', 'Simple navigation and understandable content help residents find their next step.'],
    ['Responsible by design',   'A focused information service, with no private medical records or online clinical care.'],
  ];
  const valueCards = values.map(([title, text]) => `
    <div>
      <h3>${title}</h3>
      <p class="muted">${text}</p>
    </div>`).join('');

  return `
    <section>
      <div class="wrap">
        <div class="grid3">${valueCards}</div>

        <div style="margin-top:64px">
          <span class="eyebrow">A clear and focused role</span>
          <h2>Information online. Care in person.</h2>
        </div>

        <div class="two" style="margin-top:28px">
          <div class="card" style="background:var(--mint)">
            <h3>✓ Here to help you find</h3>
            <div class="list">
              <b>Clinic services</b>
              <span>Information about in-person consultations, check-ups and emergency assistance.</span>
              <b>People, hours &amp; contact</b>
              <span>Healthcare team information, operating schedules and ways to reach the clinic.</span>
              <b>Announcements &amp; notices</b>
              <span>Updates about service availability, schedule changes and community information.</span>
            </div>
          </div>
          <div class="card">
            <h3>⊖ Not part of TeleCare</h3>
            <div class="list">
              <b>No online clinical care</b>
              <span>No online consultations, diagnoses, prescriptions or appointment booking.</span>
              <b>No medical records</b>
              <span>No electronic health records, private patient histories or patient registries.</span>
              <b>No payments or billing</b>
              <span>Barangay health services are generally public and free. Confirm service details with the clinic.</span>
            </div>
          </div>
        </div>
      </div>
    </section>`;
}

function aboutAuthorizedHands() {
  return `
    <div class="wrap">
      <div class="dark">
        <div>
          <span class="eyebrow" style="color:#f5e9b9">Clarity comes with responsibility</span>
          <h2>Clinic information belongs in authorized hands.</h2>
          <p class="muted" style="margin-top:18px">Only authorized clinic administrators can update services, staff information, hours and announcements. Residents browse information; they do not publish clinic content.</p>
        </div>
        <div class="list">
          <b style="margin-top:0">Prepare &amp; review</b>
          <span class="muted">Check the details before publishing.</span>
          <b>Publish responsibly</b>
          <span class="muted">Share clear, current information with residents.</span>
          <b>Keep information current</b>
          <span class="muted">Review notices and update changes as needed.</span>
        </div>
      </div>
    </div>`;
}

function aboutGlance() {
  // The status column ("To be confirmed") comes from CONTENT.hours (content.js)
  const rows = CONTENT.hours.map(h => `
    <div style="display:flex;justify-content:space-between;padding:12px 0;border-bottom:1px solid var(--line);font-size:14px">
      <span>${h.days}</span>
      <span class="muted">${h.status}</span>
    </div>`).join('');

  return `
    <section class="tint" style="margin-top:72px">
      <div class="wrap split" style="align-items:start">
        <div>
          <span class="eyebrow">The clinic at a glance</span>
          <h2>A local resource.<br>Details to be confirmed.</h2>
          <p style="margin:16px 0"><span class="pill">Demo clinic profile</span></p>
          <p class="muted">A real clinic has not yet been identified for this student project. The profile is a placeholder, not a verified healthcare facility listing.</p>
        </div>
        <div class="card">
          <h3>Operating hours</h3>
          ${rows}
          <p class="muted" style="font-size:13px;margin-top:14px">Please verify clinic details before planning a visit.</p>
        </div>
      </div>
    </section>`;
}

function aboutTeam() {
  // Group members come from CONTENT.students, adviser from CONTENT.adviser (content.js)
  const cards = CONTENT.students.map(({ initials, name, role }) => `
    <div class="card" style="padding:20px">
      <div class="av">${initials}</div>
      <b>${name}</b>
      <p style="font-size:13px;margin-top:6px">${role}</p>
    </div>`).join('');

  return `
    <section>
      <div class="wrap">
        <div class="head">
          <div>
            <span class="eyebrow">The people behind the project</span>
            <h2>A student project with local purpose.</h2>
          </div>
          <p>Created by Group 10, BSIT 2-2 for Introduction to Human Computer Interaction. These are student creators, not clinic staff.</p>
        </div>
        <div class="people">${cards}</div>
        <p class="muted" style="font-size:14px;margin-top:24px">${CONTENT.adviser}</p>
      </div>
    </section>`;
}

function aboutCta() {
  return `
    <section class="tint" style="padding:48px 0">
      <div class="wrap head" style="margin:0;align-items:center">
        <div>
          <h2>Start with the information you need.</h2>
          <p class="muted" style="margin-top:8px;max-width:none">Explore services and notices. No account is required.</p>
        </div>
        <a class="btn pri" href="#home#services">Explore clinic information →</a>
      </div>
    </section>`;
}


/* ==========================================================================
   LOGIN PAGE
   `role` is which tab is selected (resident / admin); `mode` is login or signup.
   ========================================================================== */

let role = 'resident', mode = 'login';

function login() {
  return header('login')
    + `<div class="wrap login">${loginPanel()}${loginForm()}</div>`
    + footer();
}

function loginPanel() {
  // The dark panel with the photo on the left
  return `
    <div class="panel">
      <span class="eyebrow" style="color:#f5e9b9">Information that brings us closer</span>
      <h2>Your community. Your clinic. A clearer connection.</h2>
      <p style="color:#c5d6cf;margin-bottom:24px">Keep clinic updates and essential information within easy reach, wherever you are.</p>
      <div class="img" style="min-height:240px;border-radius:16px">${photo('login')}</div>
      <p style="margin-top:16px;font-size:14px">Clinic information is public. Signing in is optional.</p>
    </div>`;
}

function loginForm() {
  const isAdmin = role === 'admin';
  const isLogin = mode === 'login';

  // Only residents can switch between "log in" and "create an account"
  const switchMode = isAdmin ? '' : `
    <p style="text-align:center;margin-top:8px" class="muted">
      ${isLogin
        ? 'New resident? <a href="#login" data-act="mode" style="color:var(--p);font-weight:700">Create a resident account</a>'
        : 'Have an account? <a href="#login" data-act="mode" style="color:var(--p);font-weight:700">Log in</a>'}
    </p>`;

  // The full-name field only appears when creating an account
  const nameField = isLogin ? '' : `
    <label for="nm">Full name</label>
    <input id="nm" autocomplete="name" placeholder="Enter your full name">`;

  return `
    <div>
      <span class="eyebrow">Welcome to TeleCare</span>
      <h1 style="font-size:44px;margin:8px 0">${isLogin ? 'Good to see you.' : 'Create a resident account.'}</h1>
      <p class="muted">Sign in to your information hub or authorized clinic workspace.</p>

      <label>I’m signing in as</label>
      <div class="tabs">
        <button data-role="resident" class="${isAdmin ? '' : 'on'}">Resident</button>
        <button data-role="admin" class="${isAdmin ? 'on' : ''}">Administrator</button>
      </div>
      <p class="muted" style="font-size:13px">Administrator access requires an existing clinic-approved account. Selecting a role does not grant access.</p>

      <form id="lf" novalidate>
        ${nameField}
        <label for="em">Email address</label>
        <input id="em" type="email" autocomplete="email" placeholder="Enter your email address">

        <label for="pw">Password</label>
        <div class="pw">
          <input id="pw" type="password" placeholder="Enter your password" autocomplete="current-password">
          <button type="button" data-act="eye">Show</button>
        </div>

        <div class="row" style="justify-content:space-between;margin:16px 0;font-size:14px">
          <label style="margin:0;font-weight:400"><input type="checkbox" id="rm" style="width:auto"> Remember me</label>
          <a href="#login" data-act="forgot" style="color:var(--p);font-weight:600">Forgot password?</a>
        </div>

        <button class="btn pri" style="width:100%;justify-content:center;padding:16px">${isLogin ? 'Log in as ' + role : 'Create resident account'} →</button>
        <div class="err" id="err" role="alert"></div>
      </form>

      ${switchMode}
      <p style="text-align:center;margin-top:12px">
        <a href="#home" style="color:var(--p);font-weight:700">Continue browsing without an account →</a>
      </p>

      <div class="note">
        <b>Demo accounts</b><br>
        Resident: resident@telecare.demo / resident123<br>
        Administrator: admin@telecare.demo / admin123<br>
        TeleCare does not store medical histories or prescriptions.
      </div>
    </div>`;
}


/* ==========================================================================
   ADMIN DASHBOARD  (only opens for a logged-in administrator)
   `filt` is the All/Published/Draft tab, `q` the search text, `editId` the notice being edited.
   ========================================================================== */

let filt = 'All', q = '', editId = null;

function admin() {
  const s = session();
  if (!s || s.role !== 'admin') {
    // Not an admin: send to the login page with the Administrator tab selected
    location.hash = '#login';
    role = 'admin';
    return '';
  }

  // Notices that match the current tab (All/Published/Draft) and the search box
  const term = q.trim().toLowerCase();
  const rows = notices
    .filter(n => {
      const haystack = `${n.title} ${n.cat} ${n.body}`.toLowerCase();
      return (filt === 'All' || n.status === filt) && (!term || haystack.includes(term));
    })
    .sort((a, b) => b.date.localeCompare(a.date));

  return `
    <div class="adm">
      ${adminSidebar()}
      <main class="main-a">
        <div class="crumb">
          <span>Clinic workspace / Overview</span>
          <b>${esc(s.name)} <span class="muted" style="font-weight:400">· Demo account view</span></b>
        </div>
        <div class="banner">${CONTENT.banner}</div>
        <div class="pad">
          ${adminTitle()}
          ${adminStats()}
          <div class="cols2">
            <div>
              ${adminNoticeTable(rows)}
              ${adminManageCards()}
            </div>
            <div>
              ${adminChecklist()}
              <div class="note" style="padding:24px">
                <b>Publish information, not records.</b><br>
                Never add private patient details, prescriptions or medical histories to website content.
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>`;
}

// How many notices have a given status ('Published' or 'Draft')
const countByStatus = status => notices.filter(n => n.status === status).length;

function adminSidebar() {
  // Buttons marked data-act="soon" show a "not built yet" message (see app.js)
  return `
    <aside class="side">
      <a class="logo" href="#home"><i>+</i>TeleCare</a>
      <span class="tg">CLINIC ADMINISTRATOR</span>

      <a href="#admin" class="on">Overview</a>
      <a href="#admin" data-act="goann">Announcements</a>
      <button class="lnk" data-act="soon">Services</button>
      <button class="lnk" data-act="soon">Healthcare team</button>
      <button class="lnk" data-act="soon">Operating hours</button>
      <button class="lnk" data-act="soon">Contact &amp; about</button>

      <hr style="width:100%;border:0;border-top:1px solid var(--line);margin:14px 0">
      <a href="#home">View public website ↗</a>

      <div class="note" style="margin-top:auto">
        <b>Authorized access only</b><br>
        Only approved clinic administrators can publish website content.
      </div>
      <button class="lnk" data-act="logout">Sign out</button>
    </aside>`;
}

function adminTitle() {
  return `
    <div class="head" style="margin:0">
      <div>
        <span class="eyebrow">Content management</span>
        <h1 style="font-size:40px;margin:8px 0">A clearer clinic starts here.</h1>
        <p class="muted">Manage the information your community relies on. Demo workspace.</p>
      </div>
      <a class="btn" href="#home">Preview public site ↗</a>
    </div>`;
}

function adminStats() {
  // The four number cards. "Published" and "draft" counts update automatically.
  const stats = [
    { label: 'Published notices',  value: countByStatus('Published'), note: `${countByStatus('Draft')} additional notice in draft` },
    { label: 'Services listed',    value: 3,                          note: 'Sample service descriptions' },
    { label: 'Team categories',    value: 3,                          note: 'Staff names not yet confirmed' },
    { label: 'Details to confirm', value: 4,                          note: 'Review before a real launch', color: '#8a6d00' },
  ];
  const cards = stats.map(s => `
    <div class="card stat">
      <span>${s.label}</span>
      <b>${s.value}</b>
      <span${s.color ? ` style="color:${s.color}"` : ''}>${s.note}</span>
    </div>`).join('');

  return `<div class="stats">${cards}</div>`;
}

function adminNoticeRow(n) {
  const isPublished = n.status === 'Published';
  return `
    <tr>
      <td><b>${esc(n.title)}</b><small>${esc(n.cat)} · Sample</small></td>
      <td><span class="pill ${isPublished ? 'ok' : ''}">${n.status}</span></td>
      <td>${fmt(n.date)}</td>
      <td>
        <div class="row" style="gap:6px;flex-wrap:nowrap">
          <button class="btn sm" data-tg="${n.id}">${isPublished ? 'Unpublish' : 'Publish'}</button>
          <button class="btn sm" data-ed="${n.id}">Edit</button>
          <button class="btn sm red" data-del="${n.id}">Delete</button>
        </div>
      </td>
    </tr>`;
}

function adminNoticeTable(rows) {
  const tabs = ['All', 'Published', 'Draft'].map(f => `
    <button data-f="${f}" class="${filt === f ? 'on' : ''}">${f} ${f === 'All' ? notices.length : countByStatus(f)}</button>`).join('');

  const emptyRow = '<tr><td colspan="4" class="muted">No notices match. Try another search or create a new notice.</td></tr>';

  return `
    <div class="card" id="ann" style="padding:0;overflow:hidden">
      <div class="head" style="margin:0;padding:24px 24px 0">
        <div>
          <h3 style="font-size:24px">Announcements</h3>
          <p class="muted" style="max-width:none">Sample notices displayed on the public website</p>
        </div>
        <button class="btn pri" data-act="new">+ New notice</button>
      </div>

      <div class="chips" style="padding:0 24px">
        ${tabs}
        <input id="sq" placeholder="Search notices" value="${esc(q)}" aria-label="Search notices">
      </div>

      <table>
        <thead>
          <tr><th>Notice</th><th>Status</th><th>Updated</th><th>Actions</th></tr>
        </thead>
        <tbody>${rows.length ? rows.map(adminNoticeRow).join('') : emptyRow}</tbody>
      </table>

      <p class="muted" style="font-size:13px;padding:14px 24px;border-top:1px solid var(--line)">
        Showing ${rows.length} of ${notices.length} sample announcements · Drafts are not public
      </p>
    </div>`;
}

function adminManageCards() {
  // These four cards are placeholders for pages that are not built yet
  const items = [
    ['Clinic services',    'Edit the three in-person service descriptions and requirements.',     '3 sample services'],
    ['Healthcare team',    'Update staff names, roles and availability after verification.',      '3 sample categories'],
    ['Operating hours',    'Confirm the weekly schedule and add public schedule notices.',        'Confirmation needed'],
    ['Contact &amp; about', 'Maintain clinic details, contact channels and the About page.',      'Confirmation needed'],
  ];
  const cards = items.map(([title, text, link]) => `
    <div class="card" data-act="soon">
      <h3>${title}</h3>
      <p>${text}</p>
      <span class="more" style="border:0;padding:0">${link} →</span>
    </div>`).join('');

  return `
    <h2 style="font-size:24px;margin:36px 0 16px">Manage clinic information</h2>
    <div class="two">${cards}</div>`;
}

function adminChecklist() {
  // Ticked boxes are remembered in the browser ('tc_ck')
  const done = load('tc_ck', []);
  const items = ['Official clinic name', 'Complete clinic address', 'Phone &amp; email channels', 'Hours &amp; staff availability'];
  const boxes = items.map((text, i) => `
    <label><input type="checkbox" data-ck="${i}" ${done[i] ? 'checked' : ''}>${text}</label>`).join('');

  return `
    <div class="yellow">
      <h3 style="font-size:24px">Before this becomes a real clinic website</h3>
      <p style="font-size:14px;margin-top:10px">Four groups of details still need clinic confirmation. Keep demo labels until verified.</p>
      ${boxes}
    </div>`;
}