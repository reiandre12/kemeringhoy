// utils.js - small helpers used everywhere (no clinic content here).
const $=s=>document.querySelector(s),app=$('#app'),dlg=$('#dlg');
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
// load/save read and write JSON in the browser's localStorage
const load=(k,d)=>{try{return JSON.parse(localStorage.getItem(k))||d}catch(e){return d}};
const save=(k,v)=>localStorage.setItem(k,JSON.stringify(v));
const fmt=d=>new Date(d+'T00:00:00').toLocaleDateString('en-PH',{day:'numeric',month:'short',year:'numeric'});
const toast=m=>{const t=$('#toast');t.textContent=m;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),2500)};
const photo=n=>`<img src="images/${n}.jpg" alt="" onerror="this.remove()">`;
