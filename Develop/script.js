// Assignment Code
var generateBtn = document.querySelector("#generate");
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
/* upperCase = upperCase.concat(alphaCharArray);
/* console.log(upperCase); */
/* for (var i = 0; i < upperCase.length; i++) {
  upperCase[i] = upperCase[i].toLocaleUpperCase();
} 
console.log(upperCase); */
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
var allOptions = [];

// Write password to the #password input
/* function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
 */
/* Need to prompt user for conditions */

function userPrompts() {
  var pwdLength = prompt(
    "How long do you want the password to be? (Enter number 8 through 128)"
  );

  if (pwdLength < 7) {
    alert("Must be more than 7 char");
    return;
  }
  if (pwdLength > 128) {
    alert("Must be less than 128 char");
    return;
  }
  console.log("user entered password length " + pwdLength);

  var lowerCase = confirm(
    "Do you want you want this password to contain lowercase letters?"
  );
  if (lowerCase) {
    allOptions = allOptions.concat(alphaCharArray);
    console.log("lowercase pushed");
  }

  var upperCase = confirm(
    "Do you want you want this password to contain uppercase letters?"
  );
  if (upperCase) {
    allOptions = allOptions.concat(upperCaseArray);
    console.log("uppercase pushed");
  }

  var numericChar = confirm("Do you want this password to contain numbers?");
  if (numericChar) {
    allOptions = allOptions.concat(numberCharArray);
    console.log("numbers pushed");
  }

  var specialChar = confirm(
    "Do you want this password to contain special characters?"
  );
  if (specialChar) {
    allOptions = allOptions.concat(specialCharArray);
    console.log("specialChar pushed");
  }
  console.log("--------------");

  console.log(allOptions.length);
}
/* generatePassword() */

userPrompts();

/* create for loop to grab values to meet the desired length */
/* function generatePassword() {
  for (var i = 0; i <= pwdLength; i++) {
    passwordArray.push();
  }
}
console.log(passwordArray.length);


// Add event listener to generate button
/* generateBtn.addEventListener("click", writePassword);
 */
