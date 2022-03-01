$(".list-feedback").slick({
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
  prevArrow:
    "<button type='button' class='slick-prev chevron-prev pull-left'><ion-icon name='chevron-back-outline'></ion-icon></button>",
  nextArrow:
    "<button type='button' class='slick-next chevron-next pull-right'><ion-icon name='chevron-forward-outline'></ion-icon></button>",
});
