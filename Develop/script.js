// Assignment code here

const all = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()0123456789";
const alphanumeric = all.slice(all.indexOf("a"), all.indexOf("z")) + all.slice(all.indexOf('0'), all.indexOf('9'));

const generatePassword = () => {
  var password = "";
  var counter = 0;
  var length = window.prompt("Please specify a length between 8 and 128 characters for your password");
  var content = window.prompt("Please specify '1' for 'all' or '2' for 'alphanumeric'")
  if (length >= 8 && length <= 128 && (content==='1' || content==='2')) {
    while (counter <= length){
      if (content==='1') {
        password += all[Math.floor(Math.random() * all.length)];
      } else if (content==='2') {
        password += alphanumeric[Math.floor(Math.random() * alphanumeric.length)];
      }
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
