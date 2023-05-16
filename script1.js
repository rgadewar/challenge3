// Assignment code here
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword()
{  
  var password = generatePassword();
  console.log(password)
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(letterCase, length, numericChoice, specialCharChoice)
 {

  passwordLength = createPasswordOptions();
  console.log("passwordlength" + passwordLength);
  letterCase = createPasswordCase("Do you want Upper Case?");
  console.log("letterCase" + letterCase);
  numericChoice = createNumericChoice("Do you want Numbers in password?");
  console.log("numericChoice" + numericChoice);
  specialCharChoice = createSpecialCharChoice("Do you want Special char in password?");
  console.log("Special Char Choice" + specialCharChoice);
  var characters = '';
  var result = ' ';
  if (letterCase === 'yes')
  {
    characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }
  else 
  {
    characters += 'abcdefghijklmnopqrstuvwxyz';
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
  for ( let i = 0; i < passwordLength; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

function createPasswordOptions(){

  var passwordLength = prompt('How would you like length of your password to be? ( Must be 8 -128 caharacters');
  check = passwordLength >9 && passwordLength < 129;
  while(!check)
  {
    alert("please try again, password length must be 8 -128 characters");
    var passwordLength = prompt("Please re-enetr password length between 8 to 128");
    check = passwordLength >= 9 && passwordLength < 129;
  }
    return passwordLength;
}


function captureConfirmOutput(msg)
{
  let text;
  if (confirm(msg) == true) {
    text = "yes";
  } else {
    text = "no";
  }
  return text;
}
