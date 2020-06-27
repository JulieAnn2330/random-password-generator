// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword(); 
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
 // Add event listener to generate button
 generateBtn.addEventListener("click", writePassword)


// Function to create password
function generatePassword() {
// Variables that user can include in password
  var uCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var lCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var nums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var characters = ["!", "@", "#", "$", "%", "&", "*", "~", "_", "-", "+", "=", "<", ">", "?"];
  // Array to capture user answers about vars to include
  var passwordArray = [];
  console.log(passwordArray)
  // Length of password
  var userLength = 0;

  var resultArray = [];

  // Confirms and prompts for user criteria for password
  var userLength = confirm("Please choose from the following password criteria.");
  if (userLength) {
    passwordLength = prompt("Please choose a password between 8 and 128 characters.");
    console.log(passwordLength);
  if ((passwordLength < 8) || (passwordLength > 128)) {
    prompt("Please enter a number between 8 and 128.");
   }

   } else {
    confirm("Your password will be " + passwordLength + " characters long.");
  return;
  }
 
  // Use uppercase letters?
  var confirmUcase = confirm("Include uppercase letters?");
  // Use lowercase letters>
  var confirmLcase = confirm("Include lowercase letters?");
  // Use numbers?
  var confirmNums = confirm("Include numbers?");
  // Use special characters?
  var confirmCharacters = confirm("Include special characters?");

  // User selections
  if (confirmUcase === true) {
    alert("You want to include uppercase letters.");
    passwordArray.push(uCase);
    console.log(confirmUcase);
  }

  else if (confirmUcase === false) {
    alert("Yo do not want to include uppercase letters.");
    console.log(confirmUcase);
  }

  if (confirmLcase === true) {
    alert("You want to include lowercase letters.");
    passwordArray.push(lCase);
    console.log(confirmLcase);
  }

  else if (confirmLcase === false) {
    alert("Yo do not want to include lowercase letters.");
    console.log(confirmLcase);
  }

  if (confirmNums === true) {
    alert("You want to include numbers.");
    passwordArray.push(nums);
    console.log(confirmNums);
  }

  else if (confirmNums === false) {
    alert("Yo do not want to include numbers.");
    console.log(confirmNums);
  }

  if (confirmCharacters === true) {
    alert("You want to include special characters.");
    passwordArray.push(characters);
    console.log(confirmCharacters);
  }

  else if (confirmCharacters === false) {
    alert("Yo do not want to include special characters.");
    console.log(confirmCharacters);
  }

  // If no valid criteria is selected
  if (confirmUcase === false && confirmLcase === false && confirmNums === false && confirmCharacters === false) {

    alert("You have not selected any valid criteria for a password. Hit the refresh button and start over");

 }

  {
    function randomArrayShuffle(array) {
      var currentIndex = array.length, temporaryValue, randomIndex;
      while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }
      return array;
    }
    var passwordArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "!", "@", "#", "$", "%", "&", "*", "~", "_", "-", "+", "=", "<", ">", "?"];
    randomArrayShuffle(passwordArray);
    console.log(passwordArray);
  }

  function getRandomIndex(passwordArray) {
    return Math.floor(Math.random() * passwordLength.length);
  }
  for (var i = 0; i < passwordLength; i++) {
    var removedItem = passwordArray.splice(getRandomIndex(passwordArray), 1);
    document.writeln(removedItem);

    getRandomIndex();

  }

 
}