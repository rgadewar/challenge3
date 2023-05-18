// Assignment code here
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword()
{  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  // if password value has trithy value only then we show
  if(password){
  passwordText.value = password;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword()
 {
  passwordLength = createPasswordOptions();
  // next prompts are taken only when password length is valid
  if(passwordLength)
    {
    specialCharChoice = confirm("Click OK to confirm including special characters");
    console.log("Special Char Choice: " + specialCharChoice);
    numericChoice = confirm("Click OK to confirm including numeric characters ");
    console.log("numericChoice: " + numericChoice);
    lowerCaseChoice = confirm("Click OK to confirm including lower characters ");
    console.log("numericChoice: " + numericChoice);
    upperCaseChoice = confirm("Click OK to confirm including upper characters ");
    console.log("numericChoice: " + numericChoice);
    if (!specialCharChoice && !numericChoice && !lowerCaseChoice && !upperCaseChoice){
      alert("Please select at least one character type");
      return '';
    }
    
    // var letterCase = prompt("Please enter case for password (ex. lower, upper, both):", "enter case");
    // // Make sure to convert all choices to lowercase for comparision oLowerCase() is used only if user eneter some case
    // if(letterCase !== null)
    // {
    // letterCase = letterCase.toLowerCase();
    // }
    // var check = letterCase !== "lower" && letterCase !== "upper" && letterCase !=="both"&& letterCase !== null;
    // while(check ||letterCase === null)
    // {
    //   alert("please enter a valid case");
    //   var letterCase = prompt("Please enter case for apssword (ex. lower, upper, both):", "enter case");
    //   check = letterCase !== "lower" && letterCase !== "upper" && letterCase !=="both" && letterCase !== null;
    // } 
    // console.log("Case: " + letterCase);
  }
  // creating password string for randomization
  var characters = '';
  var lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
  var upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var bothCase  = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var numericChars = '0123456789';
  var specialChars = '~!@#%^&*(){}-_+=?'

  var result = ' ';
  // next steps are done only when password length is valid
   if(passwordLength !== undefined)
    {
    // If user choose specialCharChoice yes, concat '~!@#%^&*(){}-_+=?' to characters
    if(specialCharChoice){
      characters += specialChars;
    }
    //If user choose numericChoice yes, concat '0123456789' to characters
    if(numericChoice){
      characters += numericChars;
    }
    if (lowerCaseChoice)
    {
      characters += lowerCaseChars;
    }
    if (upperCaseChoice)
    {
      characters += upperCaseChars;
    }
}
  const charactersLength = characters.length;
  // Randomization to character string
  for ( let i = 0; i < passwordLength; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

function createPasswordOptions(){

  var passwordLength = prompt('How many characters would you like your password to contain (Must be 8 -128 caharacters) and must be valid number');
  // check = passwordLength >= 8 && passwordLength <= 128 && !isNaN(passwordLength);
  if (!passwordLength) return;
  check = passwordLength >= 8 && passwordLength <= 128;

  while(!check)
  {
    alert("Please try again, password length must be 8 -128 characters and must be valid number");
    var passwordLength = prompt('How many characters would you like your password to contain (Must be 8 -128 caharacters) and must be valid number');
    check = passwordLength >= 8 && passwordLength <= 128;
  }
    return passwordLength;
}

