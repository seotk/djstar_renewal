const TForm = document.querySelector("form.team");
const TNumber = document.querySelector("#team-number");
const TUsername = document.querySelector("#team-Username");
const TContact = document.querySelector("#team-Contact");
const TEmail = document.querySelector("#team-Email");
const TPassword = document.querySelector("#team-Password");
const TConfirmPassword = document.querySelector("#team-PasswordConfirm");
const Tagree = document.querySelector("#team-agree");
const TGropname = document.querySelector("#team-groupname");
const TRegion = document.querySelector("#team-region");
const TAge = document.querySelector("#team-age");
const TLeader = document.querySelector("#team-leader");
const TOtherInfo = document.querySelector("#team-other-info-info");
// 이메일 정규식 패턴
const TemailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// 비밀번호 정규식 패턴
// 8~20자, 대소문자/숫자/특수문자(!@#$%^&*?) 중 2가지 이상 조합
const TpasswordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*?])[A-Za-z\d!@#$%^&*?]{8,20}$/;

TForm.addEventListener("submit", (e) => {
  let errors = false; // 오류 여부 변수 초기화
  // 팀 정보 유효성 검사
  if (TNumber.value.trim() === "") {
    alert("인원 수를 입력해주세요.");
    errors = true;
  }
  if (TGropname.value.trim() === "") {
    alert("팀명을 입력해주세요.");
    errors = true;
  }
  if (TRegion.value.trim() === "") {
    alert("지역을 입력해주세요.");
    errors = true;
  }
  if (TAge.value.trim() === "") {
    alert("팀 연령대를 입력해주세요.");
  }
  if (TLeader.value.trim() === "") {
    alert("팀 리더를 입력해주세요.");
    errors = true;
  }
  if (TContact.value.trim() === "") {
    alert("연락처를 입력해주세요.");
    errors = true;
  }
  if (TEmail.value.trim() === "") {
    alert("이메일을 입력해주세요.");
    errors = true;
  } else if (!TemailRegex.test(TEmail.value.trim())) {
    alert("이메일 형식이 올바르지 않습니다.");
    errors = true;
  }
  if (TPassword.value.trim() === "") {
    alert("비밀번호를 입력해주세요.");
    errors = true;
  } else if (!TpasswordRegex.test(TPassword.value.trim())) {
    alert(
      "비밀번호는 8~20자 이내의 대소문자/숫자/특수문자(!@#$%^&*?) 중 2가지 이상을 조합해야 합니다."
    );
    errors = true;
  }
  if (TConfirmPassword.value.trim() === "") {
    alert("비밀번호 확인을 입력해주세요.");
    errors = true;
  }
  if (TPassword.value !== TConfirmPassword.value) {
    alert("비밀번호와 비밀번호 확인이 일치하지 않습니다.");
    errors = true;
  }
  if (!Tagree.checked) {
    alert("개인 정보 수집 및 이용에 동의해주세요.");
    errors = true;
  }

  if (errors) {
    e.preventDefault(); //폼 제출 취소
  }
});
