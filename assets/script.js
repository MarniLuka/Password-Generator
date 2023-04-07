// Assignment code here

// All the possible characters that can be in the password. 
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "/", ".", "?", "<", ">"];

var word = [""];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Had a heyday when I realized that alert and confirm were built in methods in JS cause I thought I had to make a box myself. Got stuck at first, so I viewed a tutorial to get me started and tried to do what I could by myself.
function generatePassword() {

  // 1. Prompt the user for the password criteria
  //    a. Password Lengnth 8 - 128
  //    b. Lowercase, uppercase, numbers, special characters

  var wordLength = prompt("How long do you want your password to be?");
    if (wordLength < 8 || wordLength > 128) {
      alert("Password must be between 8 - 128 characters.");
      return "Try again";
    } else {
      var length = wordLength
    }

  var lowLetters = confirm("Would you like lowercase letters in your password?");
    if (lowLetters == true) {
      word = word.concat(lowerCase);
    }

  var bigLetters = confirm("Would you like uppercase letters in your password?"); 
    if (bigLetters == true) {
      word = word.concat(upperCase);
    }

  var numerals = confirm("Would you like any numbers in your password?");
    if (numerals == true) {
      word = word.concat(numbers);
    }

  var characters = confirm("Would you like any special characters in your password?");
    if (characters == true) {
      word = word.concat(specialChar);
    }

  // 2. Validate the input. At least one character type should be selected

  if (!lowLetters && !bigLetters && !numerals && !characters) {
    alert("You must choose at least one.");
    return "Try again";
  }

  // 3. Generate password based on criteria
  var password = [""]

  for(var i = 0; i < length; i++) {
    var random = Math.floor(Math.random() * word.length);
    password += word[random];
  }

  // 4. Display password to the page
  return password;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);