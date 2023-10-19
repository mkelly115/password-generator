// Assignment Code
const generateBtn = document.querySelector("#generate");
const numbers = [0,1,2,3,4,5,6,7,8,9]
const lowerCase = ["a","b","c","d","e","f","g","h", "i", "j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
const upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
const specialChar = ["!","@","#","$","%","^","&","(",")"]

// Write password to the #password input
function generatePassword() {



}

function validatePasswordLength(passwordLength){
   console.log(passwordLength)
   if (!passwordLength){
    console.log("emptypassword")
   }

   if (passwordLength && (Number(passwordLength) <8 || Number(passwordLength) >128)){
    console.log("Invalid Length")
   }

}

function writePassword() {
  const passwordLength = prompt("Enter a password length between 8 and 128 characters");
  validatePasswordLength(passwordLength)
//   let hasNumbers = confirm("Will this include numbers?");
//   let hasLowerCase = confirm("Will this include lowercase letters?");
//   let hasUpperCase = confirm("Will this include uppercase letters?");
//   let hasSpecialChar = confirm("Will this include special characters?")

//   console.log (passwordLength)
//   console.log (hasNumbers)
//   console.log (hasLowerCase)
//   console.log (hasUpperCase)

  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
