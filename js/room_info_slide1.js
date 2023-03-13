var roomSwiper = new Swiper(".room_swiper", {
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".popup_next",
    prevEl: ".popup_prev",
  },
});

  // If we need pagination
  // pagination: {
    // el: ".swiper-pagination",
  // },

  // Navigation arrows
  //   navigation: {
  //     nextEl: '.swiper-button-next',
  //     prevEl: '.swiper-button-prev',
  //   },

  // And if we need scrollbar
//   scrollbar: {
//     el: ".swiper-scrollbar",
//   },
// });
var sw = 0;
$(".room_info_doc::after").click(function () {
  if (sw == 0) {
    $(".room_info_doc::after").addClass("on");
    mySwiper.autoplay.stop();
    sw = 1;
  } else {
    $(".room_info_doc::before").removeClass("on");
    mySwiper.autoplay.start();
    sw = 0;
  }
});
