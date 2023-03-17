const $menuBtn = document.querySelectorAll(".sub_title_list > span");
const $container = document.querySelectorAll(".item");
console.log($menuBtn);

  function show(num) {
    $menuBtn.forEach((a) => {
      a.classList.remove("on");
    });
    $menuBtn[num].classList.add("on");
    $container.forEach((b) => {
      b.classList.remove("on");
    });
    $container[num].classList.add("on");
  };
$menuBtn.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    show(i);
  });
});