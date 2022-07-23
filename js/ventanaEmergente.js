// Variables
var ventana = document.querySelector(".ventanaNewsletter");
var ventanaBody = document.querySelector(".ventanaNewsletter-body");
var ventanaOverlay = document.querySelector(".ventanaNewsletter-overlay");

btnAbreVentana.style.display="block";

// Cuando abrir la ventana...
btnAbreVentana.addEventListener("click", function () {
  ventana.classList.add("ventanaNewsletter--abierto");
});

function cerrandoVentana() {
  document.activeElement.blur();
  ventana.classList.remove("ventanaNewsletter--abierto");
}

// Listeners
document
  .querySelector(".ventanaNewsletter-cerrar")
  .addEventListener("click", cerrandoVentana);