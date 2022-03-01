const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".menu-list");
const overlay = document.querySelector(".overlay-all");

hamburger.addEventListener("click", mobileMenu);
overlay.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  overlay.classList.toggle("active");
}
const navLink = document.querySelectorAll(".menu-link");

navLink.forEach((n) => n.addEventListener("click", closeMenu));
// overlay.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
  overlay.classList.remove("active");
}

//  search toggle
var searchtoggle_open = document.querySelector(".open-search");
var searchtoggle_close = document.querySelector(".close-search");
searchtoggle_open.onclick = function () {
  $(".search-form").addClass("open-search-a");
};
searchtoggle_close.onclick = function () {
  $(".search-form").removeClass("open-search-a");
};

// scroll header
const toTop = document.querySelector(".back-to-top");

$(function () {
  var scroll = 500;
  $(window).scroll(function (event) {
    var moved = $(this).scrollTop();
    if (moved > scroll) {
      $(".header-wrapper").addClass("stuck");
      $(".back-to-top").addClass("active");
    }
    if (moved === 0) {
      $(".header-wrapper").removeClass("stuck");
      $(".back-to-top").removeClass("active");
    }
  });
});

$(toTop).click(function () {
  $("html, body").animate(
    {
      scrollTop: 0,
    },
    800
  );
  return false;
});

// // Clone js
// var cardList = $(".list-product-page .row");
// var cardItem = $(".list-product-page .col-lg-3");

// for (i = 0; i < 5; i++) {
//   cardItem.clone().appendTo(cardList);
// }

function Show_list_item(cardList, cardItem, amount) {
  for (i = 0; i <= amount; i++) {
    cardItem.clone().appendTo(cardList);
  }
}

Show_list_item($(".list-product .row"), $(".list-product .col-lg-3"), 3);
Show_list_item($(".tab-pane .row"), $(".tab-pane .col-lg-3"), 1);
Show_list_item($(".product-hot .row"), $(".product-hot .col-lg-3"), 4);
Show_list_item($(".news .row"), $(".news .col-lg-4"), 3);
