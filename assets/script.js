// Assignment Code
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;


};

function generatePassword() {
  let passLength = 0;

  // First, we prompt the user for desired length of password, and ensure user input it within defined range. Stops function if user selects 'Cancel'
  while(passLength < 8 || passLength > 128){
    passLength = prompt("How many characters would you like in your password? (8-128 characters allowed): "); 
    console.log(passLength);
    if(passLength === null) {
      return "No Password Generated";
    } else if(passLength < 8 || passLength > 128) {
        alert("Please enter a valid length \n(Somewhere between 16 and 128 characters)");        
    }       
  }

  // Next, we run the user through a series of prompts to determine desired characters to utilize in password including:
  // Lowercase? Uppercase? Numeric? Special?
  let useLower = confirm("Would you like to use lowercase characters? Ok -> Yes, Cancel -> No");
  let useUpper = confirm("Would you like to use UPPERCASE characters? Ok -> Yes, Cancel -> No");
  let useNumeric = confirm("Would you like to use Numeric characters? Ok -> Yes, Cancel -> No");
  let useSpecial = confirm("Would you like to use Special characters? Ok -> Yes, Cancel -> No");

  // Set charactersets for different password parameters
  allLower = "abcdefghijklmnopqrstuvwxyz";
  allUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  allNumeric = "0123456789";
  allSpecial = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

  // Next, define the characterset the password generator will use based on given parameters
  let charSet = "";

  if(useLower) {
    charSet += allLower;
  }

  if(useUpper) {
    charSet += allUpper;
  }

  if(useNumeric) {
    charSet += allNumeric;
  }

  if(useSpecial) {
    charSet += allSpecial;
  }

  console.log(charSet);
  console.log(charSet.length);

  // Finally, we generate a password using the given parameters.
  let passHolder = "";
  for(let i = passLength; i > 0; i--) {
    passHolder += charSet.charAt(Math.floor(Math.random() * charSet.length));
  }
  console.log(passHolder);


  // Verify that the password meets all the selected criteria - I ended up scrapping this project for now.
//  function validatePassword() {
//    if(useLower) {
     
//    }
//  }

  alert("We've generated you're password!  You'll find it in the text box below.");
      return passHolder;
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
