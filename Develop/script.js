// Password length
var userLength=prompt("Choose the length of your password, between 8 and 128 characters.");
  
if(userLength) {
    alert("Your password will be " + userLength + " characters long.")
  }

// Use uppercase letters?
var confirmUcase = confirm("Include uppercase letters?");

if (confirmUcase) {
  alert("You want to include uppercase letters.");
} 

// Use lowercase letters>
var confirmLcase = confirm("Include lowercase letters?");

if (confirmLcase) {
  alert("You want to include lowercase letters.");
}

// Use numbers?
var confirmNums = confirm("Include numbers?");

if (confirmNums) {
  alert("You want to include numbers.");
}

// Use special characters?
var confirmChars = confirm("Include special characters?");

if (confirmChars) {
  alert("You want to include special characters.");
}

// If no valid criteria is selected
else {
  alert("You have not selected any valid criteria for a password. Hit the refresh button and start over");
}


var uCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lCase="abcedfghijklmnopqrstuvwxyz";
var nums="0123457890"
var characters="!@#$%^&*~_-+=<>?";
var password=""



// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input

if((confirmUcase && confirmLcase && confirmNums && confirmChars)) {

  var values= (uCase + lCase + nums + characters)
  
  }
  
 function writePassword() {

  for(var i = 0; i <= userLength; i++) {
    password = password+values.charAt(Math.floor(Math.random()*Math.floor(values.length)));

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

 }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

 }
