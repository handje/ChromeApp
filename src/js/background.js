const image = ["0.jpeg", "1.jpeg", "2.jpeg"]; //sample image

const todayImage = image[Math.floor(Math.random() * image.length)]; //random image
const photo = document.querySelector(".mainContent .photo");
let index = image.indexOf(todayImage);

//img tag 생성
const background = photo.querySelector("img");
background.src = `src/img/${todayImage}`;

const div = photo.querySelector(".photoBtn");
const prev = document.createElement("button");
prev.innerText = "prev";
const next = document.createElement("button");
next.innerText = "next";
div.appendChild(prev); //html에 img tag 추가
div.appendChild(next); //html에 img tag 추가

prev.addEventListener("click", () => {
  if (index - 1 >= 0) {
    index--;
    background.src = `src/img/${image[index]}`;
  } else {
    index = image.length - 1;
    background.src = `src/img/${image[index]}`;
  }
});
next.addEventListener("click", () => {
  if (index + 1 < image.length) {
    index++;
    background.src = `src/img/${image[index]}`;
  } else {
    index = 0;
    background.src = `src/img/${image[index]}`;
  }
});

if (localStorage.getItem("username")) {
  photo.classList.remove("hidden");
}
