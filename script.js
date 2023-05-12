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

function generatePassword()
 {

  passwordLength = createPasswordOptions();
  console.log("passwordlength: " + passwordLength);
  upperCase = captureConfirmOutput("Click OK to confirm including Upper Case?");
  console.log("letterCase: " + upperCase);
  lowerCase = captureConfirmOutput("Click OK to confirm including Lower Case?");
  console.log("letterCase: " + lowerCase);
  specialCharChoice = captureConfirmOutput("Click OK to confirm including special characters");
  console.log("Special Char Choice: " + specialCharChoice);
  numericChoice = captureConfirmOutput("Click OK to confirm including Numbers in password?");
  console.log("numericChoice: " + numericChoice);
  var characters = '';
  var result = ' ';
  if (upperCase === 'yes')
  {
    characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }
  if (lowerCase === 'yes') 
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

  var passwordLength = prompt('How many characters would you like your password to contain (Must be 8 -128 caharacters)');
  check = passwordLength > 8 && passwordLength < 128;
  while(!check)
  {
    alert("please try again, password length must be 8 -128 characters");
    var passwordLength = prompt("Please re-enetr password length between 8 to 128");
    check = passwordLength > 8 && passwordLength < 128;
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
