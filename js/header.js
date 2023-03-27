const gnbList = document.querySelector(".gnb_list");
const personMenu = document.querySelector(".person_menu");
const MOgnbList = document.querySelector(".mo_gnb_list");
const MOpersonMenu = document.querySelector(".mo_person_menu");
const GNB = `<li>
<a href="#">천문대 소개 </a>
<ul class="sub_list">
  <li><a href="#">인사말</a></li>
  <li><a href="#">현황 및 조직도</a></li>
  <li><a href="#">시설안내</a></li>
  <li><a href="#">찾아오시는 길</a></li>
</ul>
</li>
<li>
<a href="#">이용안내 </a>
<ul class="sub_list">
  <li><a href="#">관람안내</a></li>
  <li><a href="#">특별 프로그램</a></li>
  <li><a href="#">아스트로 갤러리</a></li>
</ul>
</li>
<li>
<a href="#">예약마당 </a>
<ul class="sub_list">
  <li><a href="#">관람예약</a></li>
  <li><a href="#">전시해설예약</a></li>
  <li><a href="#">특별 프로그램예약</a></li>
  <li><a href="#">봉사활동 예약</a></li>
</ul>
</li>
<li>
<a href="#">참여마당 </a>
<ul class="sub_list">
  <li><a href="#">질문과 답변</a></li>
  <li><a href="#">방문후기</a></li>
  <li><a href="#">자주하는 질문</a></li>
  <li><a href="#">봉사활동</a></li>
</ul>
</li>
<li>
<a href="#">알림마당 </a>
<ul class="sub_list">
  <li><a href="#">공지사항</a></li>
  <li><a href="#">홍보자료</a></li>
  <li><a href="#">천문정보</a></li>
  <li><a href="#">행사사진</a></li>
</ul>
</li>`;
const PERSON = `            <button class="person_btn login"><span>로그인</span><a href="./login.html"></a></button>
<button class="person_btn signup"><span>회원가입</span><a href="#"></a></button>
<i class="fa-solid fa-bars"></i>`;
gnbList.innerHTML = GNB;
personMenu.innerHTML = PERSON;
MOgnbList.innerHTML = GNB;
MOpersonMenu.innerHTML = PERSON;

const ham = document.querySelector(".fa-bars");
const moNav = document.querySelector(".mo_nav");
ham.addEventListener("click", () => {
  moNav.classList.toggle("on");
});

const $moGnbList = document.querySelectorAll(".mo_gnb_list > li");
const $moSubList = document.querySelectorAll(".mo_gnb_list > li > .sub_list");
function show(num) {
  $moSubList.forEach((a) => {
    a.classList.remove("on");
  });
  $moSubList[num].classList.add("on");
}
$moGnbList.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    show(i);
  });
});
