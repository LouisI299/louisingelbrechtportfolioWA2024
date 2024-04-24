console.log("Script loaded");

//Formuliervalidatie

let sendbutton = document.getElementById("sendbutton");
let voornaam = document.getElementById("voorn");
let achternaam = document.getElementById("achtern");
let leeftijd = document.getElementById("leeftijd");
let checkbox = document.getElementById("checkbox");
let email = document.getElementById("email");
let feedback = document.getElementById("feedback");
let formulier = document.getElementById("formnieuwsbrief");
let formMain = document.getElementById("nieuwsbriefmain");
let p = document.createElement("p");
let aanmeldButton = document.getElementById("aanmelden");

//localstorage
function checkAangemeld() {
  if (localStorage.getItem("aangemeld") == "true") {
    aanmeldButton.textContent =
      "Welkom, " +
      localStorage.getItem("voorNaam") +
      " " +
      localStorage.getItem("achterNaam");
    aanmeldButton.classList.add("ingelogd");
    aanmeldButton.style.animation = "none";
  } else {
    aanmeldButton.textContent = "Meld je aan voor onze nieuwsbrief";
    aanmeldButton.style.animation = "groterkleiner 1s ease-in-out backwards";
    aanmeldButton.style.animationIterationCount = "5";
  }
}

let checkFormulier = () => {
  let errors = [];

  if (voornaam.value.length < 2) {
    errors.push("Voornaam moet minstens 2 karakters bevatten.");
  }

  if (achternaam.value.length < 2) {
    errors.push("Achternaam moet minstens 2 karakters bevatten.");
  }

  if (leeftijd.value.length < 1) {
    errors.push("Leeftijd moet ingevuld worden.");
  } else if (leeftijd.value < 18) {
    errors.push("U moet minstens 18 jaar oud zijn om je aan te kunnen melden.");
  }

  if (email.value.length <= 6) {
    errors.push("Email moet minstens 6 karakters bevatten.");
  }

  if (!email.value.includes("@") || !email.value.includes(".")) {
    errors.push("Voer een geldig email-adres in.");
  }

  if (!checkbox.checked) {
    errors.push("Gelieve aan te klikken dat u zich wil aanmelden.");
  }

  if (errors.length === 0) {
    feedback.textContent = `U hebt u succesvol aangemeld voor onze nieuwsbrief.`;
    p.textContent = ` We sturen een bevestigingsmail naar: ${email.value} `;
    formulier.appendChild(p);
    feedback.classList.remove("formNotValid");
    feedback.classList.add("formValid");
    p.classList.add("formValid");
    localStorage.setItem("voorNaam", voornaam.value);
    localStorage.setItem("achterNaam", achternaam.value);
    localStorage.setItem("aangemeld", true);
    checkAangemeld();
  } else {
    feedback.textContent = errors.join(" ");
    feedback.classList.add("formNotValid");
    localStorage.setItem("aangemeld", false);
    checkAangemeld();
  }
};

sendbutton.addEventListener(
  "click",
  function () {
    p.textContent = "";
    feedback.textContent = "";
    localStorage.setItem("voorNaam", "");
    localStorage.setItem("achterNaam", "");
    checkFormulier();
  },
  false
);

//Bepaalbestemming

let linkBarca = document.getElementsByClassName("barcaLink");
let linkBangkok = document.getElementsByClassName("bangkokLink");
let linkNewYork = document.getElementsByClassName("newYorkLink");
let linkTokyo = document.getElementsByClassName("tokyoLink");
let linkRio = document.getElementsByClassName("rioLink");
let linkHome = document.getElementById("paginaTitel");

linkBarca[0].addEventListener("click", function () {
  localStorage.setItem("bestemming", "Barcelona");
});

linkBangkok[0].addEventListener("click", function () {
  localStorage.setItem("bestemming", "Bangkok");
});

linkNewYork[0].addEventListener("click", function () {
  localStorage.setItem("bestemming", "New York");
});

linkTokyo[0].addEventListener("click", function () {
  localStorage.setItem("bestemming", "Tokyo");
});

linkRio[0].addEventListener("click", function () {
  localStorage.setItem("bestemming", "Rio de Janeiro");
});
