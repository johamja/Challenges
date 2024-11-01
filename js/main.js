let contenedor, intervalo;
let heart = "https://icons.iconarchive.com/icons/aha-soft/free-large-love/128/Heart-icon.png";
let enlace;
window.onload = ()=>{
  contenedor = document.querySelector(".fx");
  enlace = document.getElementById("friendzone");
  let x = parseInt(screen.width/64);
  let y = parseInt(screen.height/64);
  enlace.addEventListener("click",(event)=>{
    contenedor.classList.remove("hide");
    intervalo = setInterval(crearCorazones,x*y);
  });
}

function crearCorazones(){
 
    var corazon = document.createElement("img");
    corazon.src = heart;
    corazon.style.transform = `rotate(${Math.PI/Math.random()*16}rad)`;
    corazon.style.width = "64px";
    contenedor.appendChild(corazon);
    if(contenedor.childElementCount>=100)
    {
      contenedor.classList.add("hide");
      clearInterval(intervalo);
      
    }
}