const clock = document.querySelector("#clock");

function getTime() {
  const date = new Date();
  const hour = date.getHours().toString().padStart(2, "0");
  const min = date.getMinutes().toString().padStart(2, "0");
  const sec = date.getSeconds().toString().padStart(2, "0");
  clock.innerText = `${hour}:${min}:${sec}`;
}

getTime();
setInterval(getTime, 1000); //1초마다 업데이트
