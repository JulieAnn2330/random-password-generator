// Assignment Code
var generateBtn = document.querySelector("#generate");

// Password length
function passwordParameters () {
  
  var userLength = prompt("Choose the length of your password, between 8 and 128 characters.");
  
  if ((userLength < 8) || (userLength > 128)) { 
        alert("Please enter a number between 8 and 128.");
        passwordParameters();
  }
  
  else { 
    alert("Your password will be " + userLength + " characters long.")
  } 
   
// Use uppercase letters?
var confirmUcase = confirm("Include uppercase letters?");

if (confirmUcase) {
  alert("You want to include uppercase letters.");
  passwordArray.push[uCase];
} 

// Use lowercase letters>
var confirmLcase = confirm("Include lowercase letters?");

if (confirmLcase) {
  alert("You want to include lowercase letters.");
  passwordArray.push[lCase];
}

// Use numbers?
var confirmNums = confirm("Include numbers?");

if (confirmNums) {
  alert("You want to include numbers.");
  passwordArray.push[nums];
}

// Use special characters?
var confirmCharacters = confirm("Include special characters?");

if (confirmCharacters) {
  alert("You want to include special characters.");
  passwordArray.push[characters];
}

// If no valid criteria is selected
else {
  alert("You have not selected any valid criteria for a password. Hit the refresh button and start over");

  passwordParameters();
}
}

var uCase=["A", "B", "C", "D", "E","F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var nums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var characters = ["!", "@", "#", "$", "%", "&", "*", "~", "_", "-", "+", "=", "<", ">", "?"];

var passwordArray = [uCase, lCase, nums, characters];

// Write password to the #password input

 function writePassword() {

  for(i = 0; i < passwordArray.length; i++); {

    var userLength = userLength;
    var randIndex = userLength(Math.floor(Math.random()*passwordArray.length));

    writePassword();

   
    }

  }

  // var password = generatePassword() 
  
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  

 // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
function myFunction() {
  var copyText = document.getElementById("myInput");
  copyText.select();
  copyText.setSelectionRange(0, 99999)
  document.execCommand("copy");
  alert("Copied the text: " + copyText.value);
}