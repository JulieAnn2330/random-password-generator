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

// Function to take in user input.
function generatePassword() {
    // Variables for user to choose from for password criteria
    var uCase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
    var lCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var nums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    var characters = ["!", "@", "#", "$", "%", "&", "*", "~", "_", "-", "+", "=", "<", ">", "?"];

    // Variable for length of password that user chooses,
    var userLength = 0;

    // Collection point of arrays that user chooses to include in password.
    var passwordArray = [];

    console.log(passwordArray);
    // Collection of random samples that will ultimately create password.
    var resultsArray = [];

    // Confirm length of password
    var userIntro = confirm("Do you want to set up your password?");
    if (userIntro) {
        userLength = prompt("Choose the length of your password, between 8 and 128 characters.");

        if ((userLength < 8) || (userLength > 128)) {
            prompt("Please enter a number between 8 and 128.");
        }
        else {
            confirm("Your password will be " + userLength + " characters long.");
        }
        console.log(userLength);

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
            Array.prototype.push.apply(passwordArray, uCase);
            console.log(confirmUcase);
        }

        else if (confirmUcase === false) {
            alert("Yo do not want to include uppercase letters.");
            console.log(confirmUcase);
        }

        if (confirmLcase === true) {
            alert("You want to include lowercase letters.");
            Array.prototype.push.apply(passwordArray, lCase);
            console.log(confirmLcase);
        }

        else if (confirmLcase === false) {
            alert("Yo do not want to include lowercase letters.");
            console.log(confirmLcase);
        }

        if (confirmNums === true) {
            alert("You want to include numbers.");
            Array.prototype.push.apply(passwordArray, nums);
            console.log(confirmNums);
        }

        else if (confirmNums === false) {
            alert("Yo do not want to include numbers.");
            console.log(confirmNums);
        }

        if (confirmCharacters === true) {
            alert("You want to include special characters.");
            Array.prototype.push.apply(passwordArray, characters);
            console.log(confirmCharacters);
        }

        else if (confirmCharacters === false) {
            alert("Yo do not want to include special characters.");
            console.log(confirmCharacters);
        }

        // If no valid criteria is selected
        if (confirmUcase === false && confirmLcase === false && confirmNums === false && confirmCharacters === false) {
            alert("You have not selected any valid criteria for a password, please start over.");
            generatePassword();
        }

    }
    var selection = [];
    // create for loop to create password, ramdom values from resultArray
    for (var i = 0; i < userLength; i++) {
      var randomChar = passwordArray[randomizer(0, passwordArray.length)];
      selection.push(randomChar);
    }
    var result = selection.join("");
    return result;
  }
  function randomizer(min, max) {
    //expectation is r will = num between min and max numbers passed in,
    //Math.round will convert that to a whole number
    var r = Math.random() * (max - min) - 1;
    return Math.round(r); 
  }