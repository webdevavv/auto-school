const fixedHeader = document.querySelector(".header__fix");
const headerBanner = document.querySelector(".header__banner");
const headerTop = document.querySelector(".header__top");
const sectionFirst = document.querySelector(".section-first__block");

const topHeader = headerBanner.offsetHeight + headerTop.offsetHeight;

window.addEventListener("scroll", () => {
  let scrollTop = window.scrollY;
  if (scrollTop >= topHeader) {
    fixedHeader.classList.add("fixed");
    sectionFirst.style.marginTop = `${topHeader + 35}px`;
  } else {
    fixedHeader.classList.remove("fixed");
    sectionFirst.style.marginTop = null;
  }
});
$(function () {
  $("#hamburger").on("click", function () {
    $(this).toggleClass("close");
    $("#nav").toggleClass("visible");
    $("#core").on("click", function () {
      $("#hamburger").removeClass("close");
      $("#nav").removeClass("visible");
    });
  });
});

const topSlider = document.querySelector(".first__block-slider");
window.onload = () => {
  console.log("document ready!");
  topSlider.style.height = `${sectionFirst.offsetHeight}px`;
};

// sliders

var swiper = new Swiper(".topSlider", {
  slidesPerView: 1,
  loop: true,
  effect: "fade",
  autoplay: {
    delay: 4500,
    disableOnInteraction: false,
  },
});

var swiper2 = new Swiper(".discount_slider", {
  slidesPerView: 3,
  spaceBetween: 25,
  pagination: {
    el: ".discount_slider-pagination",
    clickable: true,
  },
  breakpoints: {
    320: { slidesPerView: 1, spaceBetween: 20 },
    600: { slidesPerView: 2, spaceBetween: 20 },
    1024: { slidesPerView: 3, spaceBetween: 25 },
  },
});
var swiper3 = new Swiper(".life__slider", {
  slidesPerView: 3,
  spaceBetween: 25,
  pagination: {
    el: ".life_slider-pagination",
    clickable: true,
  },
  breakpoints: {
    320: { slidesPerView: 1, spaceBetween: 20 },
    600: { slidesPerView: 2, spaceBetween: 20 },
    1024: { slidesPerView: 3, spaceBetween: 25 },
  },
});

var swiper4 = new Swiper(".video_slider", {
  slidesPerView: 3,
  spaceBetween: 25,
  pagination: {
    el: ".video_slider-pagination",
    clickable: true,
  },
  breakpoints: {
    320: { slidesPerView: 1, spaceBetween: 20 },
    600: { slidesPerView: 2, spaceBetween: 20 },
    1024: { slidesPerView: 3, spaceBetween: 25 },
  },
});
