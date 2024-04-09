let berekenPrijs = (bestemming, personen, dagen) => {
  let prijs = dagen.value * bestemming * personen.value;
  return prijs;
};

let aanmeldButton = document.getElementById("aanmelden");

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
