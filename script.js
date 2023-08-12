// Assignment Code
var generateBtn = document.querySelector("#generate");
const lowerCaseLetters = ['a', 'b','c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's','t', 'u', 'v', 'w', 'x', 'y', 'z'];
const upperCaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const numbersZeroToNine = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const selectedSpecialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '+', '-', '.', '~', '|', '<', '>', '=', '-', '_', '/', ':', ';', '?', '[', ']', '{', '}', '~'];
const includeOptions = ["LOWER_CASE", "UPPER_CASE", "NUMBERS_CASE", "SPECIAL_CASE"]



// Write password to the #password input
function writePassword() {
  
 
  var passwordText = document.querySelector("#password");
  
  var lowerCaseCheckBox = document.querySelector("#lowercase");
  var upperCaseCheckBox = document.querySelector("#uppercase");
  var numberCaseCheckBox = document.querySelector('#numberCase');
  var selectedSpecialCharacters = document.querySelector('#specialCase');
  var passwordLengthInputBox = document.querySelector('#passwordLengthRange');
  var passwordLength;
  var password;
  const includeFlag = []


  if(passwordLengthInputBox.value > 128){
    passwordLength = 128;
  }else if(passwordLengthInputBox.value < 8){
    passwordLength = 8;
  }else{
    passwordLength = Number(passwordLengthInputBox.value)
  }

  if(lowerCaseCheckBox.checked){
    includeFlag.push(includeOptions[0])
  }

  if(upperCaseCheckBox.checked){
    includeFlag.push(includeOptions[1])
  }

  if(numberCaseCheckBox.checked){
    includeFlag.push(includeOptions[2])
  }

  if(selectedSpecialCharacters.checked){
    includeFlag.push(includeOptions[3])
  }




  if(includeFlag.length === 0 ){
    alert('Please select atleast one checkbox')
    password = ''
  }else{
    password = makePassword(passwordLength, includeFlag);
  }
  console.log(passwordLength)

  passwordText.value = password;


}


function makePassword(lengthOfPassword, passwordOptions){
  var password  = '';
  

  for (var i = 0; i < lengthOfPassword; i++) { 
    const option =  passwordOptions[Math.floor(Math.random() * passwordOptions.length)]

    password += slectRandomCharacter(option)
    
  }

  console.log(password)
  return password;
}


function slectRandomCharacter(option){

  switch (option) {
    case "LOWER_CASE":
      return lowerCaseLetters[
        Math.floor(Math.random() * lowerCaseLetters.length)
      ];
      break;
    case "UPPER_CASE":
      return upperCaseLetters[
        Math.floor(Math.random() * upperCaseLetters.length)
      ];
      break;
    case "NUMBERS_CASE":
      return numbersZeroToNine[
        Math.floor(Math.random() * numbersZeroToNine.length)
      ];
      break;
    case "SPECIAL_CASE":
      return selectedSpecialCharacters[
        Math.floor(Math.random() * selectedSpecialCharacters.length)
      ];
      break;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
