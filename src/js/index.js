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
    $("#body").toggleClass("no-scroll");
    $("#core").on("click", function () {
      $("#hamburger").removeClass("close");
      $("#nav").removeClass("visible");
      $("#body").removeClass("no-scroll");
    });
  });
});

const topSlider = document.querySelector(".first__block-slider");
window.onload = () => {
  console.log("document ready!");
  topSlider.style.height = `${sectionFirst.offsetHeight}px`;
};

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
