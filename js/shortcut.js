// const $content = document.querySelectorAll(".shortcut_contents");
// const $Btn = document.querySelectorAll(".shotycut_btn > li > span");

// function show(num) {
//   $content.forEach((a) => {
//     a.classList.remove("on");
//   });
//   $content[num].classList.toggle("on");
// }
// $Btn.forEach((list, idx) => {
//   list.addEventListener("click", () => {
//     console.log("a");
//     show(idx);
//   });
// });

const list = document.querySelector(".shotycut_btn");
const $li = list.querySelectorAll(".shotycut_btn > li");
const $title = list.querySelectorAll(".shotycut_btn > li > span");

function toggleAccordion() {
  const thisItem = this.parentNode;
  //   console.log(thisItem);
  $li.forEach((item) => {
    if (thisItem == item) {
      thisItem.classList.toggle("on");
      return;
    }
    item.classList.remove("on");
  });
}

$title.forEach((item) => {
  item.addEventListener("click", toggleAccordion);
});
