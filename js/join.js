// const form = document.querySelector("form");
// const username = document.querySelector("username");

// form.addEventListener("submit", (e) => {
//   let errors = false; // 오류 여부 변수 초기화
//   const erorrM = document.querySelector("#username-error");

//   if (username.value.trim() === "") {
//     // 사용자 이름이 비어있는 경우
//     erorrM.textContent = "사용자 이름을 입력해주세요";
//     errors = true;
//   } else if (username.value.length < 6) {
//     erorrM.textContent = "6자 이상 입력해주세요";
//     errors = true;
//   } else {
//     erorrM.textContent = "";
//   }
//   if (errors) {
//     //오류가 있을 경우
//     e.preventDefault(); //폼 제출 취소
//   }
// });

const form = document.querySelector("form");
const username = document.querySelector("#Username");
const contact = document.querySelector("#Contact");
const email = document.querySelector("#Email");
const password = document.querySelector("#Password");
const confirmPassword = document.querySelector("#PasswordConfirm");
const agree = document.querySelector("#agree");
const region = document.querySelector("#region");
const age = document.querySelector("#age");
const leader = document.querySelector("#leader");
const otherInfo = document.querySelector("#other-info");

form.addEventListener("submit", (e) => {
  let errors = false; // 오류 여부 변수 초기화
  console.log("a");
  const usernameError = document.querySelector("#username-error");
  if (username.value.trim() === "") {
    // 사용자 이름이 비어있는 경우
    usernameError.textContent = "사용자 이름을 입력해주세요";
    errors = true;
  } else if (username.value.length < 6) {
    usernameError.textContent = "6자 이상 입력해 주세요";
    errors = true;
  } else {
    usernameError.textContent = "";
  }

  const emailError = document.querySelector("#email-error");
  let regMail =
    /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;

  if (email.value.trim() === "") {
    // 이메일이 비어있는 경우
    emailError.textContent = "이메일을 입력하세요.";
    errors = true;
  } else if (!regMail.test(email.value)) {
    emailError.textContent = "형식을 맞춰주세요";
    errors = true;
  } else {
    emailError.textContent = "";
  }

  const passwordError = document.querySelector("#password-error");
  let regPassword = /^(?=.*[!@#$%^&*])(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/;

  if (password.value.trim() === "") {
    // 비밀번호가 비어있는 경우
    passwordError.textContent = "비밀번호를 입력하세요.";
    errors = true;
  } else if (!regPassword.test(password.value)) {
    passwordError.textContent = "형식을 맞춰주세요";
    errors = true;
  } else {
    passwordError.textContent = "";
  }

  const confirmPasswordError = document.querySelector(
    "#confirm-password-error"
  );
  if (confirmPassword.value.trim() === "") {
    // 비밀번호 확인이 비어있는 경우
    confirmPasswordError.textContent = "비밀번호 확인을 입력하세요.";
    errors = true;
  } else if (password.value !== confirmPassword.value) {
    // 비밀번호와 비밀번호 확인 부분이 일치하지 않을 경우
    confirmPasswordError.textContent = "비밀번호가 일치하지 않아요";
  } else {
    confirmPasswordError.textContent = "";
  }
  const contactError = document.querySelector("#contact-error");
  let regContact = /^\d{3}-\d{3,4}-\d{4}$/;

  if (contact.value.trim() === "") {
    // 연락처가 비어있는 경우
    contactError.textContent = "연락처를 입력하세요.";
    errors = true;
  } else if (!regContact.test(contact.value)) {
    contactError.textContent = "형식을 맞춰주세요";
    errors = true;
  } else {
    contactError.textContent = "";
  }

  const ageError = document.querySelector("#age-error");
  if (age.value === "") {
    // 나이가 선택되지 않은 경우
    ageError.textContent = "나이를 선택해주세요.";
    errors = true;
  } else {
    ageError.textContent = "";
  }

  const regionError = document.querySelector("#region-error");
  if (region.value === "") {
    // 지역이 선택되지 않은 경우
    regionError.textContent = "지역을 선택해주세요.";
    errors = true;
  } else {
    regionError.textContent = "";
  }

  const leaderError = document.querySelector("#leader-error");
  if (leader.value === "") {
    // 리더 여부가 선택되지 않은 경우
    leaderError.textContent = "리더 여부를 선택해주세요.";
    errors = true;
  } else {
    leaderError.textContent = "";
  }

  const otherInfoError = document.querySelector("#other-info-error");
  if (otherInfo.value.length > 200) {
    // 추가 정보가 너무 긴 경우
    otherInfoError.textContent = "최대 200자 이내로 입력해주세요.";
    errors = true;
  } else {
    otherInfoError.textContent = "";
  }
  if (!agree.checked) {
    // 동의 여부가 확인되지 않은 경우
    alert("약관에 동의해주세요.");
    errors = true;
  }

  if (errors) {
    //오류가 있을 경우
    e.preventDefault(); //폼 제출 취소
  }
});
