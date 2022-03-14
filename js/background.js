const image = ["0.jpeg", "1.jpeg", "2.jpeg"]; //sample image

const todayImage = image[Math.floor(Math.random() * image.length)]; //random image

//img tag 생성
const background = document.createElement("img");
background.src = `img/${todayImage}`;
console.log(background);

document.body.appendChild(background); //html에 img tag 추가
