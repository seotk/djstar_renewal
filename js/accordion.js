const reserveList = document.querySelector(".item");
const $Li = document.querySelectorAll(".person >li");
const $Li2 = document.querySelectorAll(".team >li");
const $Title = document.querySelectorAll("h3");
const PChoose = document.getElementsByName("person-choose");
const PChooseN = document.getElementsByName("person-choose-number");
const TChoose = document.getElementsByName("team-choose");
const TChooseN = document.getElementsByName("team-choose-number");
const sec2Btn = document.querySelector(".item > input");
const summaryInfo = document.querySelector(".summary-info");

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
function selected(idx) {
  const thisItem = this.parentNode;
  console.log(thisItem);
  const t1 = thisItem.querySelectorAll(".t_t1");
  const t2 = thisItem.querySelectorAll(".t_t2");
  const t3 = thisItem.querySelectorAll(".t_t3");
  const selectedBtn = document.getElementsByName("person-choose-number");
  console.log(t1[0].innerText);
  console.log(t2[0].innerText);
  console.log(t3[0].innerText);
  console.log(selectedBtn);
  let summaryText = `${t1[0].innerText}/${t2[0].innerText}`;
  summaryInfo.innerHTML = summaryText;
}
function choose1(params) {
  let i = 0;
  $Li[i].classList.remove("on");
  $Li[i + 1].classList.add("on");
  // this.classList.remove("on");
  // item.classList.add("on");
}
function choose2(params) {
  let i = 1;
  $Li[i].classList.remove("on");
  $Li[i + 1].classList.add("on");
  // this.classList.remove("on");
  // item.classList.add("on");
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
PChoose.forEach((item) => {
  item.addEventListener("click", choose1);
  item.addEventListener("click", selected);
});
TChoose.forEach((item) => {
  item.addEventListener("click", choose1);
  item.addEventListener("click", selected);
});
PChooseN.forEach((item) => {
  item.addEventListener("click", choose2);
});
TChooseN.forEach((item) => {
  item.addEventListener("click", choose2);
});
