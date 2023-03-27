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

const list = document.querySelector(".shortcut_btn");
const $li = list.querySelectorAll(".shortcut_btn > li");
const $title = list.querySelectorAll(".shortcut_btn > li > span");

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

const list2 = document.querySelector(".mo_gnb_list");
const $li2 = list2.querySelectorAll(".mo_gnb_list > li");
const $title2 = list2.querySelectorAll(".mo_gnb_list > li > a");

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

// body 부분을 클릭시 클래스 제거
const body = document.querySelector("body");

body.addEventListener("click", function (event) {
  const target = event.target;
  if (!target.closest(".shortcut_btn") && !target.closest(".mo_gnb_list")) {
    $li.forEach((item) => {
      item.classList.remove("on");
    });
  }
});



// 틀린 부분

//const body = document.querySelector("body");

// function removeAccordion() {
//   $li.forEach((item) => {
//     item.classList.remove("on");
//   });
// }

// body.addEventListener("click", removeAccordion);