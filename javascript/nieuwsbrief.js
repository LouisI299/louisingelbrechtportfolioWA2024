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

let checkFormulier = () => {
  let valid = 0;
  if (
    voornaam.value.length >= 2 &&
    achternaam.value.length >= 2 &&
    leeftijd.value.length >= 1 &&
    email.value.length > 6
  ) {
    valid++;
  } else {
    feedback.textContent += "U moet alle velden invullen om u aan te melden. ";
  }

  if (checkbox.checked) {
    valid++;
  } else {
    feedback.textContent += "Gelieve aan te klikken dat u zich wil aanmelden. ";
  }

  if (leeftijd.value >= 18) {
    valid++;
  } else {
    feedback.textContent +=
      "U moet minstens 18 jaar oud zijn om je aan te kunnen melden. ";
  }

  if (valid == 3) {
    feedback.textContent = `U hebt u succesvol aangemeld voor onze nieuwsbrief.`;
    p.textContent = ` We sturen een bevestigingsmail naar: ${email.value} `;
    formulier.appendChild(p);
    feedback.classList.remove("formNotValid");
    feedback.classList.add("formValid");
    p.classList.add("formValid");

    localStorage.setItem("voorNaam", voornaam.value);
    localStorage.setItem("achterNaam", achternaam.value);
  } else {
    feedback.classList.add("formNotValid");
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
//localstorage

if (
  localStorage.getItem("voorNaam") != "" ||
  localStorage.getItem("achterNaam") != ""
) {
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
