let aanmeldButton = document.querySelector("#aanmelden");

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

linkBarca[1].addEventListener("click", function () {
  localStorage.setItem("bestemming", "Barcelona");
});

linkBangkok[1].addEventListener("click", function () {
  localStorage.setItem("bestemming", "Bangkok");
});

linkNewYork[1].addEventListener("click", function () {
  localStorage.setItem("bestemming", "New York");
});

linkTokyo[1].addEventListener("click", function () {
  localStorage.setItem("bestemming", "Tokyo");
});

linkRio[1].addEventListener("click", function () {
  localStorage.setItem("bestemming", "Rio de Janeiro");
});
