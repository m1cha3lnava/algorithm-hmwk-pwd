const generateBtn = document.querySelector("#generate");
const cardBody = document.getElementById("password");
let pwdLength = 0;
const alphaCharArray = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const upperCaseArray = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

const specialCharArray = [
  ",",
  ".",
  "/",
  ";",
  "'",
  "[",
  "]",
  "-",
  "=",
  "<",
  ">",
  "?",
  ":",
  "{",
  "}",
  "_",
  "+",
];
const numberCharArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let passwordArray = "";
let allOptions = [];

function promptUser() {
  allOptions = [];
  pwdLength = prompt(
    "How long do you want the password to be? (Enter number 8 through 128)"
  );
  if (pwdLength > 7 && pwdLength < 129) {
    confirmOptions();
  } else {
    alert("Enter a valid number to continue");
  }
}

function confirmOptions() {
  var lowerCase = confirm(
    "Do you want you want this password to contain lowercase letters?"
  );
  if (lowerCase) {
    allOptions = allOptions.concat(alphaCharArray);
  }
  var upperCase = confirm(
    "Do you want you want this password to contain uppercase letters?"
  );
  if (upperCase) {
    allOptions = allOptions.concat(upperCaseArray);
  }
  var numericChar = confirm("Do you want this password to contain numbers?");
  if (numericChar) {
    allOptions = allOptions.concat(numberCharArray);
  }
  var specialChar = confirm(
    "Do you want this password to contain special characters?"
  );
  if (specialChar) {
    allOptions = allOptions.concat(specialCharArray);
  }
  generatePassword();
}

function generatePassword() {
  console.log(allOptions);
  for (var i = 0; i <= pwdLength; i++) {
    passwordArray += allOptions[Math.floor(Math.random() * allOptions.length)];
  }
  if (allOptions.length > 0) {
    writePassword();
  } else {
    alert("You must select at least one option");
  }
}

function writePassword() {
  var password = passwordArray;
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

generateBtn.addEventListener("click", promptUser);
