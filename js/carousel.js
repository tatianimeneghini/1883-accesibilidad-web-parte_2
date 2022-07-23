var btns = document.querySelectorAll(".listaDeArticulos-slider-item");

// Percurre todos los botones controladores
btns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    // Quita clase 'activo' de otros botones
    btns.forEach(function (btnRemoveClass) {
      btnRemoveClass.classList.remove("listaDeArticulos-slider-item--activo");
    });

    this.classList.add("listaDeArticulos-slider-item--activo");
  });
});
