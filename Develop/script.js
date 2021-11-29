// Assignment code here

const all = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()0123456789";
const alphanumeric = all.slice(all.indexOf("a"), all.indexOf("z")) + all.slice(all.indexOf('0'), all.indexOf('9'));
const miscNumbers = all.slice(all.indexOf("!"), all.indexOf("9"));
const alphaMisc = all.slice(all.indexOf('a'), all.indexOf(')'));

const generatePassword = () => {
  var password = "";
  var counter = 0;
  var length = window.prompt("Please specify a length between 8 and 128 characters for your password");
  var content = window.prompt("Please specify '1' for 'all', '2' for 'alphanumeric', '3' for miscellaneous characters and numbers, or '4' for alphabetical and miscellaneous characters")
  if (length >= 8 && length <= 128 && (content==='1' || content==='2' || content==='3' || content==='4')) {
    while (counter <= length){
      if (content==='1') {
        password += all[Math.floor(Math.random() * all.length)];
      } else if (content==='2') {
        password += alphanumeric[Math.floor(Math.random() * alphanumeric.length)];
      } else if (content==='3'){
        password += miscNumbers[Math.floor(Math.random() * miscNumbers.length)];
      } else if (content==='4') {
        password += alphaMisc[Math.floor(Math.random() * alphaMisc.length)];
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
