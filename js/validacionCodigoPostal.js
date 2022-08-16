var campoCodigoPostal = document.querySelector("#codigo-postal");

campoCodigoPostal.oninvalid = function() {
    this.setCustomValidity("");
    if(!this.validity.valid) {
        this.setCustomValidity("Hay algo errado en este campo.");
        this.parentNode.classList.add("contactoCampo--error")
    }
}