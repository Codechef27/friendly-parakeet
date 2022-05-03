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

 

function generatePassword() {
  var numeric = ["0","1","2","3","4","5","6","7","8","9"];
  var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var characters= ["!","@","#","$","%","^","&","*","(",")","?",":",">","<"];
  var passwordLengthMin = 8;
  var passwordLengthMax = 128;
  var passwordLengthTotal = passwordLengthMin , passwordLengthMax;
  var password = []
  
   // prompt the user (8 characters and no more than 128 characters)
     passwordLengthTotal = parseInt( prompt ("Select the amount of characters for your new password between 8 and 128.") );
     if (passwordLengthMin < 8 ) {
       alert ("please enter a valid numeric value between 8 and 128");
    }
     if (passwordLengthMax > 128 ) {
       alert ("please enter a valid numeric value between 8 and 128")
     }
     // prompt the user (whether or not to include lowercase, uppercase, numeric, and/or special characters)

         for (var i =0; i < passwordLengthTotal; i ++) {
       password.push( numeric + upperCase + lowerCase + characters [Math.floor(Math.random()* numeric + upperCase + lowerCase + characters.length)]);
     }
     password=password.join("");
console.log (password);
 // 2 prompt the user (whether or not to include lowercase, uppercase, numeric, and/or special characters)
 // 3 validate the data (atleast 1 character type selected)
 // 4 display the generated password
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
