const demo = [
 {reg:"DEMO2026001",name:"Sample Student One",dept:"Mechanical",batch:"2023–2027",sem:"7"},
 {reg:"DEMO2026002",name:"Sample Student Two",dept:"ECE",batch:"2023–2027",sem:"7"}
];
let records=[];
const rows=document.getElementById("rows");
const search=document.getElementById("search");
const dept=document.getElementById("dept");
function render(){
 const q=search.value.trim().toLowerCase();
 const list=records.filter(s=>(!q||(s.reg+" "+s.name).toLowerCase().includes(q))&&(!dept.value||s.dept===dept.value));
 document.getElementById("studentCount").textContent=records.length;
 rows.innerHTML=list.length?list.map(s=>`<tr><td>${escapeHtml(s.reg)}</td><td>${escapeHtml(s.name)}</td><td>${escapeHtml(s.dept)}</td><td>${escapeHtml(s.batch)}</td><td>${escapeHtml(s.sem)}</td></tr>`).join(""):'<tr><td colspan="5" class="empty">No matching demo records.</td></tr>';
}
function escapeHtml(s){return String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));}
document.getElementById("addDemo").addEventListener("click",()=>{records=records.length?records:demo.slice();render();});
search.addEventListener("input",render);dept.addEventListener("change",render);render();