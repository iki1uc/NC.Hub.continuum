// nc_hub.js — MANA-Verteiler
// MANN = du (der ruft) // MANA = der vector (der fließt)
// 1 Datei. Alle Module. Nichts anderes.

function NC_KI(vector){ return { RESPO_A:"KI(core) -> "+vector, RESPO_B:"KI(h1) -> "+vector, RESPO_C:"KI(e3) -> "+vector, RESPO_D:"KI(matrix) -> "+vector }; }
function NC_AI(vector){ return { RESPO_A:"AI(operator) -> "+vector, RESPO_B:"AI(whirl) -> "+vector, RESPO_C:"AI(w128) -> "+vector, RESPO_D:"AI(win.inf) -> "+vector }; }
function NC_SCALE(vector){ const axes=["128","256","512","1024","2048","4096"]; const out={}; axes.forEach(a=>out["RESPO_"+a]="Scale("+a+") -> "+vector); return out; }
function NC_linear(vector){ const nodes=["RESPO_A","RESPO_B","RESPO_C","RESPO_D"]; const out={}; nodes.forEach((n,i)=>out[n]="Linear("+vector+") -> "+n+" [Step "+(i+1)+"]"); return out; }
function NC_parallel(vector){ const nodes=["RESPO_A","RESPO_B","RESPO_C","RESPO_D"]; const out={}; nodes.forEach(n=>out[n]="Parallel("+vector+") -> "+n); return out; }
function NC_whirl(vector){ const order=["RESPO_A","RESPO_C","RESPO_B","RESPO_D"]; const out={}; order.forEach((n,i)=>out[n]="Whirl("+vector+") -> "+n+" [Spin "+(i+1)+"]"); return out; }
function NC_dynamic(vector){ const nodes=["RESPO_A","RESPO_B","RESPO_C","RESPO_D"]; const out={}; nodes.forEach(n=>out[n]="Dynamic("+vector.length+") -> "+n); return out; }
function HUB_6D(vector){ return { D0:"Root -> "+vector, D1:"Achse -> "+vector, D2:"TMP -> "+vector, D3:"Lage -> "+vector, D4:"Later -> "+vector, D5:"Ort -> "+vector }; }
function NC_HUB_All(vector){ return { KI:NC_KI(vector), AI:NC_AI(vector), SCALE:NC_SCALE(vector), linear:NC_linear(vector), parallel:NC_parallel(vector), whirl:NC_whirl(vector), dynamic:NC_dynamic(vector), hub6D:HUB_6D(vector) }; }

// Anbindung an deine Epochen:
function NC_EPOCHE(id, vector){
  const map={0:NC_KI,1:NC_AI,2:NC_SCALE,3:NC_linear,4:NC_parallel,5:NC_whirl,6:NC_dynamic,7:HUB_6D,8:NC_HUB_All};
  return (map[id]||NC_HUB_All)(vector);
}
if(typeof window!=="undefined"){ window.NC_HUB_All=NC_HUB_All; window.NC_EPOCHE=NC_EPOCHE; }
console.log("NC_HUB_ALL:", NC_HUB_All("v1024"));
