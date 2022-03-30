//root
const USERNAME = "username"; //name의 key
const HIDDEN = "hidden"; //class name

//login input info
const loginForm = document.querySelector("#login_form");
const InputLogin = document.querySelector("#login_form input");
const login = document.getElementById("login");
//user name을 출력할 요소
const helloUser = document.querySelector("#hello_User");

//local storage 확인
const userInfo = localStorage.getItem(USERNAME);

//function
//login
function handleLogin(event) {
  event.preventDefault();
  const name = InputLogin.value;
  login.className = HIDDEN;
  document.querySelector(".photo").classList.remove(HIDDEN);
  document.querySelector(".form").classList.remove(HIDDEN);
  localStorage.setItem(USERNAME, name);
  showUserName(name);
}

//로그인한 user name 출력
function showUserName(name) {
  helloUser.innerText = `${name}😉`;
  helloUser.classList.remove(HIDDEN);
}

//main
if (userInfo === null) {
  //로그인 기록이 없을 경우
  loginForm.classList.remove(HIDDEN);
  loginForm.addEventListener("submit", handleLogin);
} else {
  //로그인 기록이 있을 경우
  showUserName(userInfo);
  login.className = HIDDEN;
}
