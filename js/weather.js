const API = "e90716bc636240787e2a5b172ebf6655";

//위치를 가져와서 정보 입력
function success(geo) {
  console.log(geo);
  const lati = geo.coords.latitude;
  const longi = geo.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lati}&lon=${longi}&APPID=${API}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      weather.innerText = data.name;
      city.innerText = data.weather[0].main;
    });
}

function error() {
  console.log("error");
}

navigator.geolocation.getCurrentPosition(success, error);
