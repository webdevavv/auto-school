const fixedHeader = document.querySelector(".header__fix");
const headerBanner = document.querySelector(".header__banner");
const headerTop = document.querySelector(".header__top");
const sectionFirst = document.querySelector(".top__block");

const topHeader = headerBanner.offsetHeight + headerTop.offsetHeight;
const screenWidth = window.innerWidth;

if (screenWidth >= 1024) {
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
}

$(function () {
  $("#hamburger").on("click", function () {
    $(this).toggleClass("close");
    $("#nav").toggleClass("visible");
    $("#body").toggleClass("no-scroll");
    $("#core").on("click", function () {
      $("#hamburger").removeClass("close");
      $("#nav").removeClass("visible");
      $("#body").removeClass("no-scroll");
    });
    $(".close-btn").on("click", function () {
      $("#hamburger").removeClass("close");
      $("#nav").removeClass("visible");
      $("#body").removeClass("no-scroll");
    });
  });
});

// sliders

var swiper = new Swiper(".topSlider", {
  slidesPerView: 1,
  loop: true,
  effect: "fade",
  speed: 2000,
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

var swiper5 = new Swiper(".news_slider", {
  slidesPerView: 3,
  spaceBetween: 25,
  pagination: {
    el: ".news_slider-pagination",
    clickable: true,
  },
  breakpoints: {
    320: { slidesPerView: 1, spaceBetween: 20 },
    600: { slidesPerView: 2, spaceBetween: 20 },
    1024: { slidesPerView: 3, spaceBetween: 25 },
  },
});

var swiper6 = new Swiper(".gallery__slider", {
  slidesPerView: 5,
  spaceBetween: 25,
  centeredSlides: true,
  loop: true,
  pagination: {
    el: ".gallery-pagination",
    clickable: true,
  },
  breakpoints: {
    320: { slidesPerView: 2, centeredSlides: false, spaceBetween: 20 },
    840: { slidesPerView: 3, centeredSlides: true, spaceBetween: 20 },
    1024: { slidesPerView: 4, centeredSlides: true, spaceBetween: 25 },
    1400: { slidesPerView: 5, centeredSlides: true, spaceBetween: 25 },
  },
});
var swiper6 = new Swiper(".inst_slider", {
  slidesPerView: 1,
  spaceBetween: 25,
  loop: true,
  pagination: {
    el: ".inst_slider-pagination",
    clickable: true,
  },
});

const topSlider = document.querySelector(".first__block-slider");
if (topSlider != null) {
  window.onload = () => {
    console.log("document ready!");
    topSlider.style.height = `${sectionFirst.offsetHeight}px`;
  };
}

Fancybox.bind('[data-fancybox="gallery"]', {
  // Your custom options for a specific gallery
});

// select
$(".select").each(function () {
  const _this = $(this),
    selectOption = _this.find("option"),
    selectOptionLength = selectOption.length,
    selectedOption = selectOption.filter(":selected"),
    duration = 450; // длительность анимации

  _this.hide();
  _this.wrap('<div class="select"></div>');
  $("<div>", {
    class: "new-select",
    text: _this.children("option:disabled").text(),
  }).insertAfter(_this);

  const selectHead = _this.next(".new-select");
  $("<div>", {
    class: "new-select__list",
  }).insertAfter(selectHead);

  const selectList = selectHead.next(".new-select__list");
  for (let i = 1; i < selectOptionLength; i++) {
    $("<div>", {
      class: "new-select__item",
      html: $("<span>", {
        text: selectOption.eq(i).text(),
      }),
    })
      .attr("data-value", selectOption.eq(i).val())
      .appendTo(selectList);
  }

  const selectItem = selectList.find(".new-select__item");
  selectList.slideUp(0);
  selectHead.on("click", function () {
    if (!$(this).hasClass("on")) {
      $(this).addClass("on");
      selectList.slideDown(duration);

      selectItem.on("click", function () {
        let chooseItem = $(this).data("value");

        $("select").val(chooseItem).attr("selected", "selected");
        selectHead.text($(this).find("span").text());

        selectList.slideUp(duration);
        selectHead.removeClass("on");
      });
    } else {
      $(this).removeClass("on");
      selectList.slideUp(duration);
    }
  });
});

// accordion
$(document).ready(function () {
  $(".panel-heading").click(function () {
    $(this).toggleClass("in").next().slideToggle();
  });
});

// filters
const filterBox = document.querySelectorAll(".box");
const clearClass = () => {
  document.querySelectorAll(".filters__button > li").forEach((elem) => {
    elem.classList.remove("active");
  });
};

if (document.querySelector(".filters__button") != null) {
  document
    .querySelector(".filters__button")
    .addEventListener("click", (event) => {
      if (event.target.tagName !== "LI") return false;
      clearClass();
      event.target.classList.add("active");
    });
}

const regionConfirms = document.getElementById("region-confirm");
const regionConfirmsButton = document.getElementById("region-confirm-button");

setTimeout(() => {
  regionConfirms.classList.add("region-confirm-show");
}, 5000);

regionConfirmsButton.addEventListener("click", () => {
  regionConfirms.classList.remove("region-confirm-show");
});

const headerNav = document.querySelectorAll(".header__nav-list");
const dropdownBtn = document.querySelectorAll(".dropdown");
const backBtn = document.querySelectorAll(".back-dropdown");

dropdownBtn.forEach((item) => {
  item.addEventListener("click", (el) => {
    headerNav.forEach((element) => {
      element.classList.add("hide");
    });

    let openList = el.target.getAttribute("data-menu");
    document.getElementById(openList).classList.remove("hide");
  });
});
backBtn.forEach((item) => {
  item.addEventListener("click", (el) => {
    headerNav.forEach((element) => {
      element.classList.add("hide");
    });

    let openList = el.target.getAttribute("data-menu");
    document.getElementById(openList).classList.remove("hide");
  });
});
