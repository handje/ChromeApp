const image = ["0.jpeg", "1.jpeg", "2.jpeg"]; //sample image

const todayImage = image[Math.floor(Math.random() * image.length)]; //random image
const photo = document.querySelector(".mainContent .photo");
let index = image.indexOf(todayImage);

//img tag 생성
const background = photo.querySelector("img");
background.src = `src/img/${todayImage}`;

if (localStorage.getItem("username")) {
  photo.classList.remove("hidden");
}
