const PForm = document.querySelector(".preson-from");
const PNumber = document.querySelector("#person-number");
const PUsername = document.querySelector("#person-Username");
const PContact = document.querySelector("#person-Contact");
const PEmail = document.querySelector("#person-Email");
const PPassword = document.querySelector("#person-Password");
const PConfirmPassword = document.querySelector("#person-PasswordConfirm");
const Pagree = document.querySelector("#person-agree");
const PdivElement = document.querySelector("div.modal_con");

// const PChoose = document.getElementsByName("person-choose");

// 이메일 정규식 패턴
const PemailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// 비밀번호 정규식 패턴
// 8~20자, 대소문자/숫자/특수문자(!@#$%^&*?) 중 2가지 이상 조합
const PpasswordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*?])[A-Za-z\d!@#$%^&*?]{8,20}$/;

// let selected = false;
// for (let i = 0; i < PChoose.length; i++) {
//   if (PChoose[i].checked) {
//     selected = true;
//     break;
//   }
// }
PForm.addEventListener("submit", (e) => {
  let errors = false; // 오류 여부 변수 초기화

  if (!selected) {
    // 선택되지 않았을 때 오류 메세지 출력
    alert("한 개 이상의 회차를 선택해주세요.");
  }
  // 개인 정보 유효성 검사
  if (PNumber.value.trim() === "") {
    alert("인원을 입력해주세요.");
    errors = true;
  }
  if (PUsername.value.trim() === "") {
    alert("이름을 입력해주세요.");
    errors = true;
  }
  if (PContact.value.trim() === "") {
    alert("연락처를 입력해주세요.");
    errors = true;
  }
  if (PEmail.value.trim() === "") {
    alert("이메일을 입력해주세요.");
    errors = true;
  } else if (!PemailRegex.test(PEmail.value.trim())) {
    alert("이메일 형식이 올바르지 않습니다.");
    errors = true;
  }
  if (PPassword.value.trim() === "") {
    alert("비밀번호를 입력해주세요.");
    errors = true;
  } else if (!PpasswordRegex.test(PPassword.value.trim())) {
    alert(
      "비밀번호는 8~20자 이내의 대소문자/숫자/특수문자(!@#$%^&*?) 중 2가지 이상을 조합해야 합니다."
    );
    errors = true;
  }
  if (PConfirmPassword.value.trim() === "") {
    alert("비밀번호 확인을 입력해주세요.");
    errors = true;
  }
  if (PPassword.value !== PConfirmPassword.value) {
    alert("비밀번호와 비밀번호 확인이 일치하지 않습니다.");
    errors = true;
  }
  if (!Pagree.checked) {
    alert("개인 정보 수집 및 이용에 동의해주세요.");
    errors = true;
  }
  if (errors) {
    e.preventDefault(); //폼 제출 취소
  } else {
    e.preventDefault(); // 기본 동작 방지

    // div의 클래스명이 "m"인 요소 선택
    const divElement = document.querySelector("div.modal_con");

    // "on" 클래스 추가
    divElement.classList.add("on");
  }
});
