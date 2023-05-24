// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword()
{  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  // if password value has truthy value only then we show
  if(password){
  passwordText.value = password;
  }
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword()
{
  var passwordLength = prompt('How many characters would you like your password to contain (Must be 8 -128 caharacters) and must be valid number');
  // check = passwordLength >= 8 && passwordLength <= 128 && !isNaN(passwordLength);
  if (!passwordLength) {
    alert("Please enter valid length");
    return;
  }
  else{
  passwordLength = createPasswordOptions(passwordLength);}
  // next prompts are taken only when password length is valid
  if(passwordLength)
    {
    var charChoiceFunc = charInput();
    console.log("charChoiceFunc");
    [specialCharChoice, numericChoice, upperCaseChoice, lowerCaseChoice]
    specialCharChoice = charChoiceFunc[0];
    numericChoice = charChoiceFunc[1];
    upperCaseChoice = charChoiceFunc[2];
    lowerCaseChoice = charChoiceFunc[3]
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
    if (upperCaseChoice)
    {
      characters += upperCaseChars;
    }
    if(lowerCaseChoice )
    {
      characters += lowerCaseChars;
    }
  }
  const charactersLength = characters.length;
  // Randomization to character string
  for ( let i = 0; i < passwordLength; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

function createPasswordOptions(passwordLength)
{
  check = passwordLength >= 8 && passwordLength <= 128;
  while(!check)
  {
    alert("Please try again, password length must be 8 -128 characters and must be valid number");
    var passwordLength = prompt('How many characters would you like your password to contain (Must be 8 -128 caharacters) and must be valid number');
    check = passwordLength >= 8 && passwordLength <= 128;
  }
    return passwordLength;
}

function charInput(){
    specialCharChoice = confirm("Click OK to confirm including special characters");
    console.log("Special Char Choice: " + specialCharChoice);
    numericChoice = confirm("Click OK to confirm including numeric characters ");
    console.log("numericChoice: " + numericChoice);
    upperCaseChoice = confirm("Click OK to confirm including upper characters ");
    console.log("upperCaseChoice: " + upperCaseChoice);
    lowerCaseChoice = confirm("Click OK to confirm including lower characters ");
    console.log("lowerCaseChoice: " + lowerCaseChoice);
    if (!specialCharChoice && !numericChoice && !upperCaseChoice && !lowerCaseChoice)
    { 
      alert("Please enter atleast one character type");
      charInput(); 
    }
    return  [specialCharChoice, numericChoice, upperCaseChoice, lowerCaseChoice];
}