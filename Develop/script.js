// Assignment code here

const alphabet = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()0123456789";

const generatePassword = () => {
  var password = "";
  var counter = 0;
  var length = window.prompt("Please specify your desired password length");
  while (counter <= length){
    password += alphabet[Math.floor(Math.random() * alphabet.length)];
    counter++;
  }
  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
