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
console.log(tokyo);

let dagen = document.getElementById("dagen");
let personen = document.getElementById("personen");
let berekendePrijs = document.getElementById("prijs");
let prijsButton = document.getElementById("prijsbutton");

prijsButton.addEventListener("click", function () {
  berekendePrijs.textContent += berekenPrijs(barcaPrijs, personen, dagen);
});
