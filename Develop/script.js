// Assignment code here

const generatePassword = () => {
  var alphabet = "abcdefghijklmnopqrstuvwxyz";
  var characters = "!@#$%^&*()";
  var numbers = "0123456789"
  var password = "";
  var counter = 0;
  var inclusionPrompt = window.prompt("Please specify ")
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
