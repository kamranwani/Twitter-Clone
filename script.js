const mainPage = document.querySelector(".main-page");
const logInPage = document.querySelector(".login-page");
const newsFeedPage = document.querySelector(".feeds-page");
const loginModal = document.querySelector(".login-modal");
const closeLoginModal = document.querySelector(".close-login-modal");
const postBtn = document.querySelector(".post-btn");
const user = document.querySelector(".user");

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

loginFormBtn = () => {
  const inputUser = document.querySelector(".loginFormUser");
  const inputPassword = document.querySelector(".loginFormPassword");

  if (inputUser.value && inputPassword.value) {
    mainPage.style.display = "none";
    logInPage.style.display = "none";
    newsFeedPage.style.display = "block";
  } else {
    displayLogInPage();
    loginModal.style.display = "block";
  }
};
// Post Modal
// News Feed
const modalWrapper = document.querySelector(".modal-wrapper");
const modal = document.querySelector(".modal");
const closePostModal = document.querySelector(".close-post-modal");
const modalPostBtn = document.querySelector(".modal-header button");
const modalFooterPlus = document.querySelector(".modal-footer span");
const modalInput = document.querySelector(".modal-input");

changeOpacity = (x) => {
  modalPostBtn.style.opacity = x;
  modalFooterPlus.style.opacity = x;
};

modalInput.addEventListener("keypress", (e) => {
  if (e.target.value) {
    changeOpacity(1);
  }
});
modalInput.addEventListener("blur", (e) => {
  console.log(e.target.value);
  if (e.target.value === "") {
    changeOpacity(0.5);
  }
});

postBtn.addEventListener("click", () => {
  console.log("hw");
  modalWrapper.classList.add("modal-wrapper-display");
  modal.style.display = "block";
});

closePostModal.addEventListener("click", () => {
  modalWrapper.classList.remove("modal-wrapper-display");
  if (modalInput.value !== "") {
    modalInput.value = "";
    changeOpacity(0.5);
  }
});

// sidebar
const sidebar = document.querySelector(".sidebar");
const sidebarWrapper = document.querySelector(".sidebar-wrapper");
const hideSidebar = document.querySelector(".sidebar-header i");
user.addEventListener("click", () => {
  sidebar.classList.add("sidebar-display");
  sidebarWrapper.classList.add("sidebar-wrapper-display");
});
hideSidebar.addEventListener("click", () => {
  sidebar.classList.remove("sidebar-display");
  sidebarWrapper.classList.remove("sidebar-wrapper-display");
});

// darkmode
const toggle = document.querySelector(".toggle");
const circle = document.querySelector(".circle");
const darkEle1 = document.querySelectorAll(".dark-mode-1");
const darkEle2 = document.querySelectorAll(".dark-mode-2");
const lightText = document.querySelectorAll(".light-text");
const borders = document.querySelectorAll(".border");

toggle.addEventListener("click", () => {
  console.log("move");
  circle.classList.toggle("move");
  Array.from(darkEle1).map((darkEle) => {
    darkEle.classList.toggle("dark-1");
  });
  Array.from(darkEle2).map((darkEle) => {
    darkEle.classList.toggle("dark-2");
  });
  Array.from(lightText).map((lightTxt) => {
    lightTxt.classList.toggle("light");
  });
  Array.from(borders).map((border) => {
    border.classList.toggle("border-color");
  });
});
