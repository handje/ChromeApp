const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const seconds = document.getElementById("seconds");

function getTime() {
  const date = new Date();
  const h = date.getHours();
  const m = date.getMinutes();
  const s = date.getSeconds();

  const calc_hr = h * 30 + m / 2;
  const calc_min = m * 6;
  const calc_sec = s * 6;

  hour.style.transform = "rotate(" + calc_hr + "deg)";
  minute.style.transform = "rotate(" + calc_min + "deg)";
  seconds.style.transform = "rotate(" + calc_sec + "deg)";
}

getTime();
setInterval(getTime, 1000); //1초마다 업데이트
