// Assignment Code
var generateBtn = document.querySelector("#generate");



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var length = number(prompt("How many characters would you like your password to be? Please select a number between 8 and 128."))
var characterType = prompt("Enter a character type: lowercase, uppercase, numeric, special")