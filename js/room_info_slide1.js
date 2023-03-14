var roomSwiper = new Swiper(".room_swiper", {
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  // navigation: {
  //   nextEl: ".popup_next",
  //   prevEl: ".popup_prev",
  // },
});

// If we need pagination
// pagination: {
// el: ".swiper-pagination",
// },

// Navigation arrows
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },.

// And if we need scrollbar
//   scrollbar: {
//     el: ".swiper-scrollbar",
//   },
// });
const roomPause = document.querySelector(".room_pause");
const roomStart = document.querySelector(".fa-play");
var sw = 0;

roomPause.addEventListener("click", () => {
  if (sw === 0) {
    roomPause.classList.add("on");
    roomSwiper.autoplay.stop();
    sw = 1;
    console.log(sw);
  }
});
roomStart.addEventListener("click", () => {
  if (sw != 0) {
    roomPause.classList.remove("on");
    roomSwiper.autoplay.start();
    sw = 0;
    console.log("Aa");
  }
});

// roomPause.click(function () {
//   if (sw == 0) {
//     $(".room_pause").addClass("on");
//     mySwiper.autoplay.stop();
//     sw = 1;
//   } else {
//     $(".room_start").removeClass("on");
//     mySwiper.autoplay.start();
//     sw = 0;
//   }
// });
