// Assignment Code
const generateBtn = document.querySelector("#generate");
const numbers = [1,2,3,4,5,6,7,8,9]
const lowerCase = ["a","b","c","d","e","f","g","h", "i", "j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
const upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
const specialChar = ["!","@","#","$","%","^","&","(",")"]

// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);