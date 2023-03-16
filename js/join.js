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

form.addEventListener("submit", (e) => {
  let errors = false; // 오류 여부 변수 초기화
  console.log("a");
  const usernameError = document.querySelector("#username-error");
  if (username.value.trim() === "") {
    // 사용자 이름이 비어있는 경우
    usernameError.textContent = "사용자 이름을 입력해주세요";
    errors = true;
  } else if (username.value.length < 6) {
    usernameError.textContent = "6자 이상 입력해주세요";
    errors = true;
  } else {
    usernameError.textContent = "";
  }
  const contactError = document.querySelector("#username-error");
  if (username.value.trim() === "") {
    // 사용자 이름이 비어있는 경우
    usernameError.textContent = "사용자 이름을 입력해주세요";
    errors = true;
  } else if (username.value.length < 6) {
    usernameError.textContent = "6자 이상 입력해주세요";
    errors = true;
  } else {
    usernameError.textContent = "";
  }

  const emailError = document.querySelector("#email-error");
  if (email.value.trim() === "") {
    // 이메일이 비어있는 경우
    emailError.textContent = "이메일을 입력해주세요";
    errors = true;
  } else if (!email.value.includes("@")) {
    // @가 없는 경우
    emailError.textContent = "@를 포함하여 이메일을 입력해주세요";
    errors = true;
  } else {
    emailError.textContent = "";
  }

  const passwordError = document.querySelector("#password-error");
  if (password.value.trim() === "") {
    // 비밀번호가 비어있는 경우
    passwordError.textContent = "비밀번호를 입력해주세요";
    errors = true;
  } else if (password.value.length < 8) {
    passwordError.textContent = "8자 이상 입력해주세요";
    errors = true;
  } else {
    passwordError.textContent = "";
  }

  const confirmPasswordError = document.querySelector(
    "#confirm-password-error"
  );
  if (confirmPassword.value.trim() === "") {
    // 비밀번호 확인이 비어있는 경우
    confirmPasswordError.textContent = "비밀번호 확인을 입력해주세요";
    errors = true;
  } else if (confirmPassword.value !== password.value) {
    confirmPasswordError.textContent = "비밀번호가 일치하지 않습니다";
    errors = true;
  } else {
    confirmPasswordError.textContent = "";
  }

  if (errors) {
    //오류가 있을 경우
    e.preventDefault(); //폼 제출 취소
  }
});
