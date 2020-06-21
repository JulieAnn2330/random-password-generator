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

// User parameters
var userLength=prompt("Choose the length of your password, between 8 and 128 characters.");
var userUcase=prompt("Include uppercase letters Y or N?");
var userLcase=prompt("Include lower case letters Y or N?");
var userNums=prompt("Include numbers Y or N?");
var UserChar=prompt("Include special characters Y or N?");


  var uCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lCase="abcedfghijklmnopqrstuvwxyz";
  var nums="0123457890"
  var characters="!@#$%^&*~_-+=<>?";
  var password=""


 
  for(var i = 0; v<=complexity; i++) {
    password=password+values.charAt(Math.floor(Math.random()*Math.floor(values.length-1)));

  }

