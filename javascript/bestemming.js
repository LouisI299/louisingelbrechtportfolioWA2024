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

console.log(localStorage.getItem("bestemming"));

if (localStorage.getItem("bestemming") == "Barcelona") {
  document.getElementById("bestemmingNaam").textContent = "Barcelona";
  let bestemming = document.getElementsByClassName("bestemming");
  bestemming[0].id = "barca";
} else if (localStorage.getItem("bestemming") == "Bangkok") {
  document.getElementById("bestemmingNaam").textContent = "Bangkok";
  let bestemming = document.getElementsByClassName("bestemming");
  bestemming[0].id = "bangkok";
} else if (localStorage.getItem("bestemming") == "New York") {
  document.getElementById("bestemmingNaam").textContent = "New York";
  let bestemming = document.getElementsByClassName("bestemming");
  bestemming[0].id = "newyork";
} else if (localStorage.getItem("bestemming") == "Tokyo") {
  document.getElementById("bestemmingNaam").textContent = "Tokyo";
  let bestemming = document.getElementsByClassName("bestemming");
  bestemming[0].id = "tokyo";
} else if (localStorage.getItem("bestemming") == "Rio de Janeiro") {
  document.getElementById("bestemmingNaam").textContent = "Rio de Janeiro";
  let bestemming = document.getElementsByClassName("bestemming");
  bestemming[0].id = "rio";
}

//Callback script laden
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
let bestemmingName = localStorage.getItem("bestemming");
let bestemmingen = [
  "Barcelona",
  "Bangkok",
  "New York",
  "Tokyo",
  "Rio de Janeiro",
];

let [europa, ...buitenEuropa] = bestemmingen;
let index = 0;

for (let dest of bestemmingen) {
  if (bestemmingName == dest) {
    break;
  } else {
    index++;
  }
}

//Prijs berekenen
prijsButton.addEventListener("click", function () {
  berekendePrijs.textContent = "€";
  if (personen.value < 1 || dagen.value < 1) {
    berekendePrijs.textContent = "Ongeldig.";
    return;
  }
  let totalePrijs = berekenPrijs(prijzen[index], personen, dagen);
  console.log(totalePrijs);
  if (buitenEuropa.includes(bestemmingen[index])) {
    totalePrijs += 60;
    let prijssection = document.getElementById("prijssection");
    if (!prijssection.querySelector("#visatoeslag")) {
      let p = document.createElement("p");
      p.id = "visatoeslag";
      p.textContent =
        "Voor bestemmingen buiten Europa wordt een visatoeslag van €60 gerekend.";
      prijssection.appendChild(p);
    }
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

let temperatuurOutput = document.getElementById("currentTemperature");

async function fetchData(url) {
  try {
    let response = await fetch(url);
    return await response.json();
  } catch (error) {
    temperatuurOutput.textContent = "We konden de temperatuur niet ophalen.";
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

  temperatuurOutput.textContent += " " + data.current.temperature_2m + "°C";
});

//Aanmeldknop
let aanmeldButton = document.getElementById("aanmelden");
console.log(localStorage.getItem("aangemeld"));
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
