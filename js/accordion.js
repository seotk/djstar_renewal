const reserveList = document.querySelector(".person");
const $Li = reserveList.querySelectorAll(".person>li");
const $Title = reserveList.querySelectorAll("h3");
const sec1Btn = document.querySelector(".reserve_list > label > input");
const sec2Btn = document.querySelector(".personnel > input");

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

$Title.forEach((item) => {
  item.addEventListener("click", toggleAccordion);
  console.log("a");
});
