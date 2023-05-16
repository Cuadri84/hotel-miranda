//Burger Menu

let burgerMenu = document.querySelector(".nav-bar__burger-menu");
let navBar = document.querySelector(".nav-bar__container");

burgerMenu.addEventListener("click", () => {
  navBar.classList.toggle("active");
  burgerMenu.classList.toggle("animation");
});

//Header hiden when scrolled
let initialScroll = window.scrollY;

window.addEventListener("scroll", function () {
  let newScroll = window.scrollY;
  let width = window.innerWidth;

  if (width > 1000 && initialScroll >= newScroll) {
    document.getElementById("header").style.top = "40px";
  } else if (width > 1000 && initialScroll <= newScroll) {
    document.getElementById("header").style.top = "-140px";
  }

  if (width < 1000) {
    document.getElementById("header").style.top = "0px";
  }

  initialScroll = newScroll;
});

//DOTS ---------------

const swiper = new Swiper(".swiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
