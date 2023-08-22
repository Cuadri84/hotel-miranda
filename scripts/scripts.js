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

var swiper = new Swiper(".swiper", {
  loop: false,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

//Our foods navigation-----------
var swiper = new Swiper(".home__swiper__navigation", {
  loop: false,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//ROOM pagination
var swiper = new Swiper(".rooms-list-swiper", {
  loop: false,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },
});

//modal formulario room details
document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("modal");
  const openButton = document.getElementById("check-availability__button");
  const closeButton = document.getElementById("close-button");

  openButton.addEventListener("click", function () {
    modal.style.display = "block";
  });

  closeButton.addEventListener("click", function () {
    modal.style.display = "none";
  });

  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});
