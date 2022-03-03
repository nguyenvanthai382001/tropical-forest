$(".list-feedback").slick({
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow:
    "<button type='button' class='slick-prev chevron-prev pull-left'><ion-icon name='chevron-back-outline'></ion-icon></button>",
  nextArrow:
    "<button type='button' class='slick-next chevron-next pull-right'><ion-icon name='chevron-forward-outline'></ion-icon></button>",
});

$(".product-slide").slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  asNavFor: ".product-slide-list",

  prevArrow:
    "<button type='button' class='slick-prev chevron-prev pull-left'><ion-icon name='chevron-back-outline'></ion-icon></button>",
  nextArrow:
    "<button type='button' class='slick-next chevron-next pull-right'><ion-icon name='chevron-forward-outline'></ion-icon></button>",
});
$(".product-slide-list").slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: ".product-slide",
  dots: false,
  focusOnSelect: true,
  vertical: true,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        vertical: false,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});
