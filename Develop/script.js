// Assignment Code
var generateBtn = document.querySelector("#generate");
var pwdLength = 0;
var lowerCase = "";
var password = "";
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
var passwordArray = [];

// Write password to the #password input
/* function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
 */
/* Need to prompt user for conditions */
function userPrompt() {
  var pwdLength = prompt(
    "How long do you want the password to be? (Enter number 8 through 128)"
  );
  console.log(pwdLength);
  var lowerCase = confirm(
    "Do you want you want this password to contain lowercase letters?"
  );
  console.log(lowerCase);
  var upperCase = confirm(
    "Do you want this password to contain uppercase letters?"
  );
  console.log(upperCase);
  var numericChar = confirm("Do you want this password to contain numbers?");
  console.log(numericChar);
  var specialChar = confirm(
    "Do you want this password to contain special characters?"
  );
  console.log(specialChar);
  console.log("--------------");
}

/* Start of logic */
userPrompt()

if (pwdLength > 7 && pwdLength < 129) {
  console.log("Valid pwd length");
  generatePassword();
} else {
  alert("Please enter a valid number between 8 and 128.");
  console.log("Invalid pwd length");
  userPrompt();
}


/* create for loop to grab values to meet the desired length */
function generatePassword() {
  for (var i = 0; i <= pwdLength; i++) {
    passwordArray.push(i);
  }
}
console.log(passwordArray.length);

function getLowercase() {
  if (lowerCase == "true") {
    var num = Math.floor(Math.random() * 26) + 1;
    console.log(alphaCharArray[num]);
  } else if (lowerCase == "false") {
    console.log("No lowercase selected");
  } else {
    console.log("ERROR");
  }
}

// Add event listener to generate button
/* generateBtn.addEventListener("click", writePassword);
 */
