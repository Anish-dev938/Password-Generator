const passwordBox = document.querySelector("#password");
const createPassword = document.querySelector("#createPassword");
const copyPassword = document.querySelector("#copyPassword");

const len = 12;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@#$%&*+";

const allChars = upperCase + lowerCase + number + symbol;


function shuffleString(str) {
  const arr = str.split("");
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr.join("");
}

function generatePassword() {
  let password = "";

  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += symbol[Math.floor(Math.random() * symbol.length)];


  while (password.length < len) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }


  password = shuffleString(password);

  passwordBox.value = password;
}

createPassword.addEventListener("click", function () {
  generatePassword();
});

copyPassword.addEventListener("click", function () {
  const password = passwordBox.value;
  if (!password) {
    alert("Generate a password first!");
    return;
  }

  navigator.clipboard
    .writeText(password)
    .then(() => {
      alert("Password copied to clipboard");
    })
    .catch(() => {
      alert("Failed to copy password");
    });
});
