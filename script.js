function backMainPageByLogo() {
  window.location.href = "/";
}

const loginContainer = document.querySelector(".hidden-login-container");
const userIcon = document.getElementById("user");
function login() {
  loginContainer.classList.toggle("show");
}
userIcon.addEventListener("click", login);
