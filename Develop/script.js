// Assignment code here
//GIVEN I need a new, secure password
//WHEN I click the button to generate a password
//THEN I am presented with a series of prompts for password criteria
//WHEN prompted for password criteria
//THEN I select which criteria to include in the password
//WHEN prompted for the length of the password
//THEN I choose a length of at least 8 characters and no more than 128 characters
//WHEN asked for character types to include in the password
//THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
//WHEN I answer each prompt
//THEN my input should be validated and at least one character type should be selected
//WHEN all prompts are answered
//THEN a password is generated that matches the selected criteria
//THEN the password is either displayed in an alert or written to the page


var passwordNumeric = [0,1,2,3,4,5,6,7,8,9];
var passwordUppercase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
var passwordLowercase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
var passwordCharacters = ['#','$','%','&','(',')','*','+',',','-','.','/',':',';','<','=','>','?','@','['];
var passwordLength = []


function passwordCriteria() {

  //WHEN prompted for the length of the password
  //THEN I choose a length of at least 8 characters and no more than 128 characters

    passwordLength = parseInt(prompt("Select the amount of characters for your new password, between 8 and 128"));
    
    while(passwordLength < 8 || passwordLength > 128) {
      alert("Please enter a valid character value between 8 and 128")
      passwordLength = (prompt("Select the amount of characters for your new password, between 8 and 128"));
    }

    //WHEN asked for character types to include in the password
    //THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
    
    var includeNumeric = confirm("Will you include NUMERIC characters in your new password? Click OK");

    var includeUppercase = confirm("Will you include UPPERCASE characters in your new password? Click OK")

    var includeLowercase = confirm("Will you include LOWERCASE characters in your new password? Click OK");
    
    var includeCharacters = confirm("Will you include SPECIAL CHARACTERS in your new password? Click OK");

     //THEN my input should be validated and at least one character type should be selected
    
        
    if (!includeNumeric && !includeUppercase && !includeLowercase && !includeCharacters) {
        alert("Your password MUST have atleast one character selected");
        includeNumeric = confirm("Will you include NUMERIC characters in your new password? Click OK");
        includeUppercase = confirm("Will you include UPPERCASE characters in your new password? Click OK");
        includeLowercase = confirm("Will you include LOWERCASE characters in your new password? Click OK");        
        includeCharacters = confirm("Will you include SPECIAL CHARACTERS in your new password? Click OK");
    }

    function characterChoices (includeNumeric , includeUppercase , includeLowercase , includeCharacters) {
      
      

       alert (" This password contains " + passwordLength + " characters, " + ( includeNumeric = (" Numbers, ")) + 
       (includeUppercase = (" Uppercase Letters, ")) + (includeLowercase = (" Lowercase Letters ")) + " and " + (includeCharacters = (" Special Characters")));
    }

    characterChoices(); 
    
       
      
  

    


return password
  }

   
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
