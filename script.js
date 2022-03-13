// Assignment Code
var generateBtn = document.querySelector("#generate");

//variables for password elements
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numeric = "0123456789";
var special = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";


function generatePassword(){
  var passwordChar = ""

  // password length
  var length = prompt("Please select the length of your password. Must be between 8 and 128 characters")
  length = parseInt(length);
  if (length < 8) {
    alert ("Password must have at least 8 characters!");
    return"";
  }
  if (length > 128){
    alert("Password must be less than 128 characters!");
    return"";
  }
  // password elements
  var lowercaseChoice = confirm ("Would you like your password to include lowercase letters?")
  if(lowercaseChoice){
    passwordChar += lowercase
  }

  var uppercaseChoice = confirm ("Would you like your password to include uppercase letters?")
  if(uppercaseChoice){
    passwordChar += uppercase
  }

  var numericChoice = confirm ("Would you like your password to include numerical characters?")
  if(numericChoice){
    passwordChar += numeric
  }

  var specialChoice = confirm ("Would you like your password to include special characters?")
  if(specialChoice){
    passwordChar += special
  }

  
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", function () {
  writePassword();
});