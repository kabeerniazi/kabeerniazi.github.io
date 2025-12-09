const form = document.getElementById("loginForm");
const email = document.getElementById("email");
const password = document.getElementById("password");
const emailError = document.getElementById("emailError");
const passError = document.getElementById("passError");

form.addEventListener("submit", (e) => {
  let valid = true;

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(email.value)) {
    emailError.style.display = "block";
    valid = false;
  } else {
    emailError.style.display = "none";
  }

  if (password.value.length < 6) {
    passError.style.display = "block";
    valid = false;
  } else {
    passError.style.display = "none";
  }

  if (!valid) e.preventDefault();
});
