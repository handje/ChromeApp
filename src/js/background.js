const image = ["0.jpeg", "1.jpeg", "2.jpeg"]; //sample image

const todayImage = image[Math.floor(Math.random() * image.length)]; //random image
const photo = document.querySelector(".mainContent .photo");
//img tag 생성
const background = document.createElement("img");
background.src = `src/img/${todayImage}`;

photo.appendChild(background); //html에 img tag 추가

if (localStorage.getItem("username")) {
  photo.classList.remove("hidden");
}
