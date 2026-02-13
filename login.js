const passwordInput = document.getElementById("password-input");
const loginBtn = document.getElementById("login-btn");
const errorMessage = document.getElementById("error-message");

function checkPassword() {
  const password = passwordInput.value;
  if (password === "1629") {
    // รหัสถูก: สั่งให้ย้ายหน้าไปที่ love.html
    window.location.href = "love.html";
  } else {
    // รหัสผิด: ขึ้นเตือน
    errorMessage.innerHTML = "อ้วนจำไม่ได้หรืออ 🥺";
    passwordInput.value = ""; 
  }
}

loginBtn.addEventListener("click", checkPassword);

passwordInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    checkPassword();
  }
});