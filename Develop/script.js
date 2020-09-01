var generateBtn = document.querySelector("#generate");
var cardBody = document.getElementById("password");
var pwdLength = 0;
/* var lowerCase = ""; */
var alphaCharArray = [
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
var upperCaseArray = [
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

var specialCharArray = [
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
var numberCharArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var passwordArray = "";
var allOptions = [];

/* Need to prompt user for conditions */
function generatePassword() {
  var pwdLength = prompt(
    "How long do you want the password to be? (Enter number 8 through 128)"
  );
  if (pwdLength < 7 || pwdLength > 128) {
    alert("Password must be between 7 and 128 characters");
    return;
  }

  var lowerCase = confirm(
    "Do you want you want this password to contain lowercase letters?"
  );
  if (lowerCase) {
    allOptions = allOptions.concat(alphaCharArray);
    /* console.log("lowercase pushed"); */
  }
  var upperCase = confirm(
    "Do you want you want this password to contain uppercase letters?"
  );
  if (upperCase) {
    allOptions = allOptions.concat(upperCaseArray);
    /* console.log("uppercase pushed"); */
  }
  var numericChar = confirm("Do you want this password to contain numbers?");
  if (numericChar) {
    allOptions = allOptions.concat(numberCharArray);
    /* console.log("numbers pushed"); */
  }
  var specialChar = confirm(
    "Do you want this password to contain special characters?"
  );
  if (specialChar) {
    allOptions = allOptions.concat(specialCharArray);
    /* console.log("specialChar pushed"); */
  }

  for (var i = 0; i <= pwdLength; i++) {
    passwordArray += allOptions[Math.floor(Math.random() * allOptions.length)];
    /* console.log("password array:" + passwordArray); */
  }
}

/* Callback to the function */
generatePassword();
/* console.log(passwordArray.length); */

function writePassword() {
  /* console.log(passwordArray) */
  /* var cardBody = document.getElementById("password"); */
  cardBody.setAttribute("placeholder", passwordArray);

  /*   cardBody.textContent = passwordArray;
  cardBody.appendChild(passwordArray) */
}
writePassword();

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
