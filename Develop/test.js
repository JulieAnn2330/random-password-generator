// Assignment Code
var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Password length
function generatePassword () {

 var uCase=["A", "B", "C", "D", "E","F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var nums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var characters = ["!", "@", "#", "$", "%", "&", "*", "~", "_", "-", "+", "=", "<", ">", "?"];
var userLength = 0;
var passwordArray = [];
var resultArray = [];
  
  var userLength = prompt("Choose the length of your password, between 8 and 128 characters.");
  
  if ((userLength < 8) || (userLength > 128)) { 
        alert("Please enter a number between 8 and 128.");
        generatePassword();
  }
  
  else { 
    alert("Your password will be " + userLength + " characters long.");
  } 
   
// Use uppercase letters?
var confirmUcase = confirm("Include uppercase letters?");

if (confirmUcase) {
  alert("You want to include uppercase letters.");
  Array.prototype.push.apply(passwordArray, uCase);
} 

// Use lowercase letters>
var confirmLcase = confirm("Include lowercase letters?");

if (confirmLcase) {
  alert("You want to include lowercase letters.");
  Array.prototype.push.apply(passwordArray, lCase);
}

// Use numbers?
var confirmNums = confirm("Include numbers?");

if (confirmNums) {
  alert("You want to include numbers.");
  Array.prototype.push.apply(passwordArray, nums);
}

// Use special characters?
var confirmCharacters = confirm("Include special characters?");

if (confirmCharacters) {
  alert("You want to include special characters.");
 Array.prototype.push.apply(passwordArray, characters);
 console.log(passwordArray);
}

// If no valid criteria is selected
else {
  alert("You have not selected any valid criteria for a password. Hit the refresh button and start over");
  return;

}

var getMeRandomElements = function(passwordArray, userLength) {
  var result = [];
  for (var i = 0; i < userLength; i++) {
  var index = Math.floor(Math.random() * passwordArray.length);
      result.push(passwordArray[index]);
      passwordArray.splice(index, 1);
  }
  return result;
}


// Write password to the #password input

    // for (var i = 0; i < userLength; i++); {

      // passwordArray.push(passwordArray[Math.floor(Math.random()*userLength.length-1)]);
      // console.log(passwordArray);

  }
    
     // Add event listener to generate button
 generateBtn.addEventListener("click", writePassword);

