// Assignment code here
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword()
{  
  var charLength = prompt('How many characters');
  if (!(charLength < 8 && charLength > 128))
  {
    alert("please try again, password length must be 8 -128 characters")
    // return null;
    var charLength = prompt("Please re-enetr password length between 8 to 128")
  }
  var letterCase = prompt('Do you want lowerCase, UpperCase, or Both');
  var numericChoice = prompt('Do you want numeric values? yes/no');
  var specialCharChoice = prompt('Do you want special characters? yes/no');
  var password = generatePassword(letterCase, charLength, numericChoice, specialCharChoice);
  console.log(password)
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(letterCase, length, numericChoice, specialCharChoice)
 {
  // Make sure to convert all choices to lowercase for comparision
  var letterCase = letterCase.toLowerCase();
  var numericChoice = numericChoice.toLowerCase();
  var specialCharChoice = specialCharChoice.toLowerCase();
  var characters = '';
  let result = ' ';
  // We want to decide if user want lowercase, uppercase or both
  if (letterCase === 'lowercase')
  {
    characters += 'abcdefghijklmnopqrstuvwxyz';
  }
  else if (letterCase === 'uppercase')
  {
    characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }
  else
  {
    characters += 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }
  // If user choose numericChoice yes, append '0123456789' to characters
  if(numericChoice === 'yes'){
    characters += '0123456789';
  }
  // If user choose specialCharChoice yes, append '~!@#%^&*(){}-_+=?' to characters
  if(specialCharChoice === 'yes'){
    characters += '~!@#%^&*(){}-_+=?';
  }
  const charactersLength = characters.length;
  // Randomization to character string
  for ( let i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}