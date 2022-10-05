var campoEmail = document.querySelector("#email");
var sugestion = document.querySelector("#sugestion");

var domains = ["gmail.com", "aol.com", "aluralatam.com"];
var secondLevelDomains = ["hotmail"];
var topLevelDomains = ["com", "net", "org"];

campoEmail.addEventListener("blur", function () {
  Mailcheck.run({
    email: campoEmail.value,
    domains: domains, // optional
    topLevelDomains: topLevelDomains, // optional
    secondLevelDomains: secondLevelDomains, // optional
    suggested: function (suggestion) {
      sugestion.style.display = "inline-block";
      sugestion.textContent = "¿Quieres decir " + suggestion.full + "?";
      sugestion.parentNode.classList.add("contactoCampo--error");
      campoEmail.classList.add("contactoCampo--noValido");
      sugestion.setAttribute("tabindex", "0");
      sugestion.setAttribute("role", "alert");
    },
  });
});
