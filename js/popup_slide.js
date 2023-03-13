var popupSwiper = new Swiper(".popup_swiper", {
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
