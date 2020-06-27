// Assignment Code
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  // Add event listener to generate button
}
generateBtn.addEventListener("click", writePassword);
//Add function to prompt write password.
function generatePassword() {
  //Variables for each prompt/confirm about the criteria
  var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var spCha = ['!', '$', '%', '&', '@', '#', '^', '*'];
  //Variable for the length of password from user
  var lengthPassword = 0;
  //myWorkingArray will contain arrays from the four above as user confirms yes to each. 
  var myWorkingArray = [];
  //resultsArray will fill with the random samples from randomSample and create the password to print on screen.
  var resultsArray = []; 
  // confirms and prompts for user to select criteria for password. 
  var starterQuestion = confirm("Let's set up your password criteria."); 
  if (starterQuestion) {
    lengthPassword = prompt("Choose length of password between 8 and 128 characters.");
     console.log(lengthPassword);
     if(lengthPassword < 8 || lengthPassword > 128) {
      prompt("Choose length of password between 8 and 128 characters.");
     }
  } else {
    confirm("Let's set up your password criteria.");
    return;
  }
  var containsCap = confirm("Would you like to use capital letters?");
  var containsLow = confirm("Would you like to use lower case letters?"); 
  var containsNum = confirm("Would you like to use numbers in your password?");
  var containsSC = confirm("Would you like to use special characters in your password?");
  //based on user choices, if confirmed each array will push to the myWorkingArray to use for random sample.
  if (containsCap) {
    // myWorkingArray = {...upperCase, ...myWorkingArray};
    Array.prototype.push.apply(myWorkingArray, upperCase);
    console.log(myWorkingArray);
  }
  if (containsLow) {
    Array.prototype.push.apply(myWorkingArray, lowerCase);
    console.log(myWorkingArray);
  }
  if (containsNum) {
    Array.prototype.push.apply(myWorkingArray, numbers);
    console.log(myWorkingArray);
  }
  if (containsSC) {
    Array.prototype.push.apply(myWorkingArray, spCha);
    console.log(myWorkingArray);
  }
   //create for loop to create password, ramdom values from resultArray
function getRandomIndex(myWorkingArray) {
  return Math.floor(Math.random() * lengthPassword.length);
}
for ( var i = 0; i < lengthPassword; i++ ) {
  var removedItem = myWorkingArray.splice(getRandomIndex(myWorkingArray), 1);
  document.writeln(removedItem);
}
}