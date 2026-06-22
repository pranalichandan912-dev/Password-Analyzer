function checkPassword() {
  let password = document.getElementById("password").value;
  let strength = "Weak";

  let hasUpper = /[A-Z]/.test(password);
  let hasLower = /[a-z]/.test(password);
  let hasNumber = /[0-9]/.test(password);
  let hasSymbol = /[!@#$%^&*]/.test(password);

  if (password.length >= 8 && hasUpper && hasLower && hasNumber && hasSymbol) {
    strength = "Strong";
  } 
  else if (password.length >= 6) {
    strength = "Medium";
  }

  document.getElementById("result").innerText = "Strength: " + strength;
}
