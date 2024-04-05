function loadScript(src, callback) {
  let script = document.createElement("script");
  script.src = src;
  script.onload = () => callback(script);
  document.head.append(script);
}

loadScript("/javascript/prijsberekening.js", (script) => {
  console.log(`Script ${script.src} loaded.`);
});

const prijzen = [80, 100, 115, 90, 100];
let [barcaPrijs, bangkokPrijs, newyorkPrijs, tokyoPrijs, rioPrijs] = prijzen;
let dagen = document.getElementById("dagen");
let personen = document.getElementById("personen");
let berekendePrijs = document.getElementById("prijs");
let prijsButton = document.getElementById("prijsbutton");
let bestemmingNaam = document.getElementById("bestemmingNaam");
let bestemmingName = bestemmingNaam.textContent;

let bestemmingen = [
  "Barcelona",
  "Bangkok",
  "New York",
  "Tokyo",
  "Rio de Janeiro",
];

let [europa, ...buitenEuropa] = bestemmingen;
console.log(buitenEuropa);
let index = 0;

for (let dest of bestemmingen) {
  if (bestemmingName == dest) {
    break;
  } else {
    index++;
  }
}

prijsButton.addEventListener("click", function () {
  let totalePrijs = berekenPrijs(prijzen[index], personen, dagen);
  if (buitenEuropa.includes(bestemmingen[index])) {
    totalePrijs += 60;
  }

  berekendePrijs.textContent += totalePrijs;
});
