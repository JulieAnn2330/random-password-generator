// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}

// Password length

function passwordParameters() {

    var uCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var lCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var nums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    var characters = ["!", "@", "#", "$", "%", "&", "*", "~", "_", "-", "+", "=", "<", ">", "?"];
    var passwordArray = [];
    console.log(passwordArray)

    var userLength = 0;

    var resultArray = [];

    // Confirm length of password
    var userLength = prompt("Choose the length of your password, between 8 and 128 characters.");
    if ((userLength < 8) || (userLength > 128)) {
        alert("Please enter a number between 8 and 128.");
    }

    else {
        alert("Your password will be " + userLength + " characters long.");
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

        passwordParameters();

    }

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
    var passwordArray = [uCase = "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "!", "@", "#", "$", "%", "&", "*", "~", "_", "-", "+", "=", "<", ">", "?"];
    randomArrayShuffle(passwordArray);
    console.log(passwordArray);
}

function getRandomIndex(passwordArray) {
    return Math.floor(Math.random() * userLength);
}
for (var i = 0; i < userLength; i++) {
    var removedItem = passwordArray.splice(getRandomIndex(passwordArray), 1);
    document.writeln(removedItem);

    getRandomIndex();

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)
