// Assignment code here

const all = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()0123456789";
const alphabet = all.slice(all.indexOf("a"), all.indexOf("z"));
const alphabetCapitalized = alphabet.toUpperCase();
const special = all.slice(all.indexOf('!'), all.indexOf(')'));
const numbers = all.slice(all.indexOf('0'), all.indexOf('9'));
const options = [alphabet, alphabetCapitalized, special, numbers];

const generatePassword = () => {
  var password = "";
  var counter = 0;
  var length = window.prompt("Please specify a length between 8 and 128 characters for your password");
  var content = window.prompt("Please specify any combination of '1' (alphabet), '2' (alphabet - capitalized), '3' (special characters), or '4' (numbers). Separate your input with commas.");
  if (length >= 8 && length <= 128) {
    var choiceString = "" 
    content.replace(' ', '').split(',').map(i => choiceString += options[i-1]);
    while (counter <= length){
      password += choiceString[Math.floor(Math.random() * choiceString.length)];
      counter++;
    }
    return password;
  } else {
    window.alert('Please provide valid input');
  }
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
