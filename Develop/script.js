
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
    }//loop to prompt user for a valid entry
    //WHEN asked for character types to include in the password
    //THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
    
    var includeNumeric = confirm("Will you include NUMERIC characters in your new password? Click OK");
    var includeUppercase = confirm("Will you include UPPERCASE characters in your new password? Click OK");
    var includeLowercase = confirm("Will you include LOWERCASE characters in your new password? Click OK");   
    var includeCharacters = confirm("Will you include SPECIAL CHARACTERS in your new password? Click OK");

     //THEN my input should be validated and at least one character type should be selected
         
     if (!includeNumeric && !includeUppercase && !includeLowercase && !includeCharacters) {
        alert("Your password MUST have atleast one character selected");
       includeNumeric = confirm("Will you include NUMERIC characters in your new password? Click OK");
       includeUppercase = confirm("Will you include UPPERCASE characters in your new password? Click OK");
       includeLowercase = confirm("Will you include LOWERCASE characters in your new password? Click OK");        
       includeCharacters = confirm("Will you include SPECIAL CHARACTERS in your new password? Click OK");
       //trying to loop back if no characters are selected
    }   
     
        alert (" Your new password will contain " + passwordLength + " characters")
  

    var passwordCriteria = {
      passwordLength: passwordLength,
      numeric: includeNumeric,
      uppercase: includeUppercase,
      lowercase: includeLowercase,
      characters: includeCharacters
  }

  return passwordCriteria;

}

function generatePassword() {

  var selectedCriteria = passwordCriteria();


  var password= [""];
  //WHEN all prompts are answered
  //THEN a password is generated that matches the selected criteria

  if (selectedCriteria.numeric) {
    for (i = 0; i < passwordNumeric.length; ++i) {
    password.push(passwordNumeric[i]);
    }
  }  

  if (selectedCriteria.uppercase) {
    for (i = 0; i < passwordUppercase.length; ++i) {
    password.push(passwordUppercase[i]);
    }
}

  if (selectedCriteria.lowercase) {
      for (i = 0; i < passwordLowercase.length; ++i) {
      password.push(passwordLowercase[i]);
      }
  }

  if (selectedCriteria.characters) {
    for (i = 0; i < passwordCharacters.length; ++i) {
        password.push(passwordCharacters[i]);
    }
} 

  var criteriaAllPassword = [];

  for (let i = 0; i < selectedCriteria.passwordLength; ++i) {
      var randomPassword = Math.floor(Math.random() * Math.floor(password.length));
       criteriaAllPassword.push(password[randomPassword])
  }

  password = criteriaAllPassword.join("");
 //THEN the password is either displayed in an alert or written to the page
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
