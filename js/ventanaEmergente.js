var btnAbreVentana = document.querySelector("#abreVentana");
var ventana = document.querySelector(".ventanaNewsletter");
var ventanaBody = document.querySelector(".ventanaNewsletter-body");
var ventanaOverlay = document.querySelector(".ventanaNewsletter-overlay");
var contenidoFueraVentana = document.querySelector("#contenidoFueraVentana");
var video = document.querySelector("video");

btnAbreVentana.style.display="block";

// Cuando abrir la ventana...
btnAbreVentana.addEventListener("click", function () {
  ventana.classList.add("ventanaNewsletter--abierto");
  document.querySelector(".ventanaNewsletter-campo").focus();
  contenidoFueraVentana.inert = true;
  video.removeAttribute("controls");
});

function cerrandoVentana() {
  document.activeElement.blur();
  ventana.classList.remove("ventanaNewsletter--abierto");
  contenidoFueraVentana.inert = false;
  btnAbreVentana.focus();
  video.setAttribute("controls", true);
}

// Listeners
document
  .querySelector(".ventanaNewsletter-cerrar")
  .addEventListener("click", cerrandoVentana);

  document.addEventListener("keyup", function(evento){
    if (evento.keyCode == 27) {
      cerrandoVentana();
    }
  });

  ventanaOverlay.addEventListener("click", cerrandoVentana);