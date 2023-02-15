const mainPage = document.querySelector(".main-page");
const logInPage = document.querySelector(".login-page");
const newsFeedPage = document.querySelector(".feeds-page");
const loginModal = document.querySelector(".login-modal");
const closeLoginModal = document.querySelector(".close-login-modal");

// **************************************************//
//***************************************************//

displayLogInPage = () => {
  mainPage.style.display = "none";
  logInPage.style.display = "grid";
};

handleLogIn = () => {
  const inputUser = document.querySelector(".user-info");
  const inputPassword = document.querySelector(".password");

  if (inputUser.value && inputPassword.value) {
    mainPage.style.display = "none";
    newsFeedPage.style.display = "block";
  } else {
    displayLogInPage();
    loginModal.style.display = "block";
  }
};
closeLoginModal.addEventListener("click", () => {
  loginModal.style.display = "none";
});
