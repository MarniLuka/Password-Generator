// Assignment code here

// All the possible characters that can be in the password.
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    // Instead of writing all the letters again, I converted the lowerCase into a string before using the .toUpperCase method. It turns out that you can't use .toUpperCase with an array which is why I had to convert it to a string first.
var upperCase = String(lowerCase).toUpperCase();
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "/", ".", "?", "<", ">"];
var choice = [];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Had a heyday when I realized that alert and confirm were built in methods in JS cause I thought I had to make a box myself. Got stuck at first, so I viewed a tutorial to get me started and tried to do what I could by myself.
function yourPrompts() {
  charLength = prompt("How long do you want your password to be?");

  if (charLength < 8 || charLength > 128) {
    alert("Password has to be between 8 - 128 characters.");
    return false;
  }

  if (confirm("Would you like lowercase letters in your password?")) {
    choice = choice.concat(lowerCase);
  }

  if (confirm("Would you like uppercase letters in your password?")) {
    choice = choice.concat(upperCase);
  }

  if (confirm("Would you like any numbers in your password?")) {
    choice = choice.concat(numbers);
  }

  if (confirm("Would you like any special characters in your password?")) {
    choice = choice.concat(specialChar);
  }
  return true;


function generatePassword() {

  // 1. Prompt the user for the password criteria
  //    a. Password Lengnth 8 - 128
  //    b. Lowercase, uppercase, numbers, special characters
  // 2. Validate the input. At least one character type should be selected
  // 3. Generate password based on criteria




  // 4. Display password to the page
  return "Generated Password";
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);