const hamburger = document.querySelector(".hamburger");
const navBar = document.querySelector(".navbar");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  navBar.classList.toggle("active");
}

navMenu.addEventListener("click", removeMenu);

function removeMenu(event) {
  if (event.target.classList.contains("nav-link")) {
    navBar.classList.remove("active");
  }
}
