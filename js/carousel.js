var btns = document.querySelectorAll(".listaDeArticulos-slider-item");
var noticias = document.querySelectorAll(".listaDeArticulos-item");

var new0 = document.querySelector("#new0");
var new1 = document.querySelector("#new1");
var new2 = document.querySelector("#new2");

new0.style.display = "block";

var indicadorSlideActual = document.createElement("span");
indicadorSlideActual.classList.add("ocultarVisualmente");
indicadorSlideActual.textContent = "Slide actual";

// Percurre todos los botones controladores
btns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    noticias.forEach(
      function (noticia) {
        noticia.style.display = "none";

        if (
          this.getAttribute("data-sliderItem") ===
          noticia.getAttribute("data-noticia")
        ) {
          noticia.style.display = "block";
        }
      }.bind(this)
    );

    document
      .querySelector(".listaDeArticulos-slider-item .ocultaVisualmente")
      .remove();
    this.append(indicadorSlideActual);

    // Quita clase 'activo' de otros botones
    btns.forEach(function (btnRemoveClass) {
      btnRemoveClass.classList.remove("listaDeArticulos-slider-item--activo");
    });

    this.classList.add("listaDeArticulos-slider-item--activo");
  });
});
