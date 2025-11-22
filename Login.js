/* ========= TOGGLE PASSWORD LOGIN ========= */
const toggleLoginPass = document.querySelector("#toggleLoginPassword");
const loginPassword = document.querySelector("#loginPassword");

if (toggleLoginPass) {
  toggleLoginPass.addEventListener("click", function () {
    const type = loginPassword.type === "password" ? "text" : "password";
    loginPassword.type = type;
    this.classList.toggle("fa-eye");
    this.classList.toggle("fa-eye-slash");
  });
}

/* ========= TOGGLE PASSWORD SIGNUP ========= */
const toggleSignupPass = document.querySelector("#toggleSignupPassword");
const signupPassword = document.querySelector("#signupPassword");

if (toggleSignupPass) {
  toggleSignupPass.addEventListener("click", function () {
    const type = signupPassword.type === "password" ? "text" : "password";
    signupPassword.type = type;
    this.classList.toggle("fa-eye");
    this.classList.toggle("fa-eye-slash");
  });
}

/* ========= VALIDATION LOGIN ========= */
const loginForm = document.querySelector("#loginForm");

if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    if (!loginForm.checkValidity()) {
      e.preventDefault();
      alert("Please fill all fields correctly.");
    }
  });
}

/* ========= VALIDATION SIGNUP ========= */
const signupForm = document.querySelector("#signupForm");

if (signupForm) {
  signupForm.addEventListener("submit", function (e) {
    const birth = document.querySelector("#birthdate").value;
    const birthDate = new Date(birth);
    const now = new Date();

    if (birthDate > now) {
      e.preventDefault();
      alert("Birth date cannot be in the future.");
    }

    if (!signupForm.checkValidity()) {
      e.preventDefault();
      alert("Please fill all fields correctly.");
    }
  });
}
