# TeleCare website (HCI project, Group 10)

Open `index.html` in a browser. No install needed.

## Where do I change things?
| I want to change...                                   | Edit this file          |
|-------------------------------------------------------|-------------------------|
| Words: hours, services, FAQ, contact, team, banner    | `js/content.js`         |
| Colors, fonts sizes, spacing, rounded corners         | `css/styles.css` (top: design tokens) |
| Page layout / add a section                           | `js/pages.js`           |
| Header, footer, nav links                             | `js/components.js`      |
| Demo logins, starter notices                          | `js/data.js`            |
| What a button / form does, page routing               | `js/app.js`             |
| Photos                                                | put JPGs in `images/` (see `images/README.txt`) |

Site name "TeleCare" appears in components.js and pages.js: use Find and Replace to rename it.

## Demo logins
- Resident: resident@telecare.demo / resident123
- Administrator: admin@telecare.demo / admin123

## Notes
- Accounts and notices are saved in the browser (localStorage), so each browser has its own copy.
  Reset everything: open DevTools console and run `localStorage.clear()`.
- Passwords are stored as plain text in the browser. Demo only; a real site needs a backend with hashed passwords.
- Admin sidebar: Services, Healthcare team, Operating hours and Contact & about are not built yet (they show a message).
