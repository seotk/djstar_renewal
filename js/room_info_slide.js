const $slider = document.querySelectorAll(".slider"); //li
const $sliderImg = document.querySelector(".slide_img"); //ul
const $slideStartBtn = document.querySelector(".room_info_doc::before");
const $slidePauseBtn = document.querySelector(".room_info_doc::after");

let currentIndex = 0;
let sliderCount = $slider.length;
let slideWidth = document.querySelector(".slide_wrap").offsetWidth;
let sliderClone = $sliderImg.firstElementChild.cloneNode(true);
let timemer = 3000;

$sliderImg.appendChild(sliderClone);

window.addEventListener("resize", () => {
  slideWidth = document.querySelector(".slide_wrap").offsetWidth;
});

setInterval(() => {
  currentIndex++;
  // console.log("currentIndex");
  $sliderImg.style.cssText = `margin-left: -${
    slideWidth * currentIndex
  }px; transition: 1s`;

  if (currentIndex == sliderCount) {
    setTimeout(() => {
      $sliderImg.style.cssText = "margin-left: 0px;";
    }, 1000);
    currentIndex = 0;
  }
  // console.log(currentIndex);
}, timemer);
function stop() {
  console.log("stopped");
  clearInterval(interval);
}
let toggle = true;

$slidePauseBtn.onclick = function (e) {};
$slidePauseBtn.addEventListener("click", function () {});


var swiper = new Swiper(".room_info_Swiper", {
  centeredSlides: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".popup_next",
    prevEl: ".popup_prev",
  },
});