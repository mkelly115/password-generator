// Assignment Code
const generateBtn = document.querySelector("#generate");
const numbers = [0,1,2,3,4,5,6,7,8,9]
const lowerCase = ["a","b","c","d","e","f","g","h", "i", "j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
const upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
const specialChar = ["!","@","#","$","%","^","&","(",")"]

// Write password to the #password input
function generatePassword(passwordLength, hasNumbers, hasLowerCase, hasUpperCase, hasSpecialChar) {
  // console.log(passwordLength, hasNumbers, hasLowerCase, hasUpperCase, hasSpecialChar)
let availableCharacters =[]

  if (hasNumbers){
    availableCharacters = availableCharacters.concat(numbers)
  }

  if (hasLowerCase){
   availableCharacters = availableCharacters.concat(lowerCase)
  }

  if (hasUpperCase){
   availableCharacters = availableCharacters.concat(upperCase)
  }

  if (hasSpecialChar){
   availableCharacters = availableCharacters.concat(specialChar)
  }
let password = ""

  if(availableCharacters.length === 0){

  return ""
}
  for (let i = 0; i < passwordLength; i++){
    const randomIndex = Math.floor(Math.random() * availableCharacters.length); 
    password += availableCharacters[randomIndex]
    console.log(i,randomIndex, availableCharacters[randomIndex])
  }

  return password

}

function validatePasswordLength(passwordLength){
   if (!passwordLength){
    return false
   } else if (passwordLength && (Number(passwordLength) <8 || Number(passwordLength) >128)){
    window.alert("Please select a valid password length between 8 and 128 characters")
    return false 
   }
   else {
    return true
   }
}

function writePassword() {
  const passwordLength = prompt("Enter a password length between 8 and 128 characters");
  const validLength = validatePasswordLength(passwordLength)
  if(validLength){

  
  let hasNumbers = confirm("Select OK if you wish to include numbers");
  let hasLowerCase = confirm("Select OK if you wish to include lower case letters");
  let hasUpperCase = confirm("Select OK if you wish to include upper case letters");
  let hasSpecialChar = confirm("Select OK if you wish to include special characters");

  const password = generatePassword(passwordLength, hasNumbers, hasLowerCase, hasUpperCase, hasSpecialChar)

  
  const passwordText = document.querySelector("#password");

  passwordText.value = password;

   }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
