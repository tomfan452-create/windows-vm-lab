const vms=[
 ["Windows XP","XP","x86","winxp"],
 ["Windows Vista","Vista","x86","vista"],
 ["Windows 7","7","x86 / x64","win7"],
 ["Windows 8.1","8.1","x86 / x64","win81"],
 ["Windows 10","10","x64","win10"],
 ["Windows 11","11","x64","win11"]
];
const grid=document.querySelector("#grid");
const running=JSON.parse(localStorage.getItem("vmStates")||"{}");
function save(){localStorage.setItem("vmStates",JSON.stringify(running))}
function render(){
 grid.innerHTML=vms.map(([name,label,arch,id])=>`
 <article class="card">
   <div class="icon">▣</div>
   <h2>${name}</h2>
   <div class="meta">${arch} · QEMU</div>
   <div class="state" id="state-${id}">Estado: ${running[id]?"encendida":"apagada"}</div>
   <div class="actions">
    <button class="btn primary" onclick="startVM('${id}')">▶ Iniciar</button>
    <button class="btn" onclick="stopVM('${id}')">■ Apagar</button>
    <button class="btn" onclick="openConsole('${id}')">▣ Consola</button>
   </div>
 </article>`).join("");
}
function startVM(id){running[id]=true;save();document.querySelector("#state-"+id).textContent="Estado: encendida (demo)";alert("La interfaz está lista. Para arrancar una VM real, conecta aquí tu backend QEMU.");}
function stopVM(id){running[id]=false;save();document.querySelector("#state-"+id).textContent="Estado: apagada";}
function openConsole(id){alert("Consola de "+id+" preparada para conectarse a noVNC/WebSocket.");}
render();