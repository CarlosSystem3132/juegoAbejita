document.getElementById('jugador').addEventListener("mouseover",sumarPuntos);

puntos = 0;
tiempo = 50;
necesarios = 30;
function sumarPuntos(){
   puntos++;
   document.getElementById("puntos").innerHTML = "Puntos: <b>" + puntos + "/" + necesarios + "  </b>";
   randNum =  Math.round(Math.random()*500);
   randNum2 =  Math.round(Math.random()*500);
   document.getElementById("jugador").style.marginTop =randNum + "px";
   document.getElementById("jugador").style.marginLeft =randNum2 + "px";
   if (puntos == 30) {
   	alert("Felicidades atrapaste a la Abejita ");
      alert("Intenta esta ves mar rapido")
        
   }
   if (puntos == 50) {
   	alert("Felicidades volviste atraparlo ");
  
}
}

function restarTiempo() {
	tiempo--;
	document.getElementById("tiempo").innerHTML = "&nbsp;&nbsp;&nbsp;Tiempo: "+tiempo; 
	if (tiempo == 0) {
		alert("Lo siento se te escapo la Abejita vuelve a intentarlo");
		tiempo = 50;
		puntos = 0;
	}
}

setInterval(restarTiempo,1000);