(function () {
  console.log("Script loaded!");
})();

function loadScript(src, callback) {
  return new Promise(function (resolve, reject) {
    let script = document.createElement("script");
    script.src = src;
    script.onload = () => resolve(script);
    script.onerror = () => reject(new Error(`Script ${src} niet geladen. `));
    document.head.append(script);
  });
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
  berekendePrijs.textContent = "€";
  let totalePrijs = berekenPrijs(prijzen[index], personen, dagen);
  if (buitenEuropa.includes(bestemmingen[index])) {
    totalePrijs += 60;
  }

  berekendePrijs.textContent += totalePrijs;
});

//Temperatuurdata
let weatherUrl = [
  "https://api.open-meteo.com/v1/forecast?latitude=41.3888&longitude=2.159&current=temperature_2m,weather_code&forecast_days=1",
  "https://api.open-meteo.com/v1/forecast?latitude=13.754&longitude=100.5014&current=temperature_2m,weather_code&forecast_days=1",
  "https://api.open-meteo.com/v1/forecast?latitude=40.7143&longitude=-74.006&current=temperature_2m,weather_code&forecast_days=1",
  "https://api.open-meteo.com/v1/forecast?latitude=35.6895&longitude=139.6917&current=temperature_2m,weather_code&forecast_days=1",
  "https://api.open-meteo.com/v1/forecast?latitude=-22.9064&longitude=-43.1822&current=temperature_2m,weather_code&forecast_days=1",
];

async function fetchData(url) {
  let response = await fetch(url);
  if (response.status == 200) {
    return await response.json();
  } else {
    alert("HTTP Error: " + response.status);
  }
}

fetchData(weatherUrl[index]).then((data) => {
  let weerIcon = document.getElementById("weerIcon");
  console.log(data);
  switch (data.current.weather_code) {
    case 1:
      weerIcon.src = "../weathericons/clear.png";
      break;
    case 2:
      weerIcon.src = "../weathericons/partlycloud.png";
      break;
    case 3:
      weerIcon.src = "../weathericons/overcast.png";
      break;
    case 56 || 57 || 61 || 63 || 65 || 66 || 67 || 80 || 81 || 82:
      weerIcon.src = "../weathericons/rain.png";
      break;
    case 71 || 73 || 75 || 77:
      weerIcon.src = "../weathericons/snow.png";
      break;
    case 95 || 96 || 99:
      weerIcon.src = "../weathericons/thunderstorm.png";
      break;
    default:
      weerIcon.src = "../weathericons/clear.png";
      break;
  }

  let temperatuurOutput = document.getElementById("currentTemperature");
  temperatuurOutput.textContent += " " + data.current.temperature_2m + "°C";
});

//localstorage

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
