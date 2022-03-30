const API = ""; //개인 API KEY 사용
const weatherIcon = {
  "01": "fas fa-sun",
  "02": "fas fa-cloud-sun",
  "03": "fas fa-cloud",
  "04": "fas fa-cloud-meatball",
  "09": "fas fa-cloud-sun-rain",
  10: "fas fa-cloud-showers-heavy",
  11: "fas fa-poo-storm",
  13: "far fa-snowflake",
  50: "fas fa-smog",
};

//위치를 가져와서 정보 입력
function success(geo) {
  //console.log(geo);
  const lati = geo.coords.latitude;
  const longi = geo.coords.longitude;

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lati}&lon=${longi}&appid=${API}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.dir(data);
      const weather = document.querySelector("#weather i");
      weather.className = weatherIcon[data.weather[0].icon.substr(0, 2)];

      const city = document.querySelector("#weather #city");
      city.innerText = data.name;

      const temp = document.querySelector("#weather #temp");
      temp.innerText = `${(data.main.temp - 273).toFixed(2)}º`;
    });
}

function error() {
  console.log("error");
}

navigator.geolocation.getCurrentPosition(success, error);
