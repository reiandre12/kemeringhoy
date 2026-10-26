// data.js - demo accounts, starter notices and login session.
// Everything is saved in the browser (localStorage). A real site would replace this with a backend + database.
// Reset the demo: open the browser console and run  localStorage.clear()
const SEED_USERS=[{name:'Demo Resident',email:'resident@telecare.demo',pw:'resident123',role:'resident'},{name:'Clinic Administrator',email:'admin@telecare.demo',pw:'admin123',role:'admin'}];
const SEED_NOTICES=[
{id:1,title:'Check clinic hours before your visit',cat:'Schedule notice',status:'Published',date:'2026-10-16',body:'Operating hours are awaiting confirmation. Please verify the schedule directly with the clinic.'},
{id:2,title:'Explore the clinic service directory',cat:'Service information',status:'Published',date:'2026-10-15',body:'Read about consultations, check-ups and emergency assistance offered in person.'},
{id:3,title:'Welcome to your clinic information hub',cat:'Community update',status:'Published',date:'2026-10-14',body:'Find essential clinic details in one place. You can browse without an account.'},
{id:4,title:'Verify clinic contact details',cat:'Clinic information',status:'Draft',date:'2026-10-17',body:'Confirm the official clinic address, phone and email before launch.'}];
let users=load('tc_users',SEED_USERS),notices=load('tc_notices',SEED_NOTICES);
const session=()=>load('tc_session',null)||JSON.parse(sessionStorage.getItem('tc_session')||'null');

// Login session. "Remember me" keeps it after the browser closes (localStorage); otherwise it ends with the tab (sessionStorage).
const saveSession=(u,remember)=>{clearSession();(remember?localStorage:sessionStorage).setItem('tc_session',JSON.stringify({name:u.name,email:u.email,role:u.role}))};
const clearSession=()=>{localStorage.removeItem('tc_session');sessionStorage.removeItem('tc_session')};
