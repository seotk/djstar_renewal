const reserveList = document.querySelector(".item");
const $Li = document.querySelectorAll(".person >li");
const $Li2 = document.querySelectorAll(".team >li");
const $Title = document.querySelectorAll("h3");
const sec1Btn = document.querySelector(".reserve_list > label > input");
const sec2Btn = document.querySelector(".item > input");

function toggleAccordion(params) {
  const thisItem = this.parentNode;
  console.log(thisItem);
  $Li.forEach((item) => {
    if (thisItem == item) {
      thisItem.classList.toggle("on");
      return;
    }
    item.classList.remove("on");
  });
}
function toggleAccordion2(params) {
  const thisItem = this.parentNode;
  console.log(thisItem);
  $Li2.forEach((item) => {
    if (thisItem == item) {
      thisItem.classList.toggle("on");
      return;
    }
    item.classList.remove("on");
  });
}

$Title.forEach((item) => {
  item.addEventListener("click", toggleAccordion);
  item.addEventListener("click", toggleAccordion2);
  console.log("a");
});

