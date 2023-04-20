// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  /*passwordText.value = password;*/
  if (password) {
    passwordText.value = password;
  } else {
    passwordText.value = '';
  }
}
/*else {
  passwordText.value = '';
}*/
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
var charCap = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numCharacters = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
var characters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]  //A list of characters
var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "<", ">", "?", "_", "+", "=", "~"];
function generatePassword() {
  var result = "";
  var genArr = [];
  var lengthProm = window.prompt("Select character length between 8 and 128")//Need variable for character length

  if (lengthProm < 8) {
    window.alert("Please select a length of 8 or more.");
    return;
  }
  else if (lengthProm > 128) {
    window.alert("Please select a length of 128 or less");
    return;
  }
  window.alert("You have selected " + lengthProm);


  var lowProm
  var caseProm
  var specialProm
  var typeProm = window.prompt("Length accepted. Do you want to use numeric characters?")    //Need variable for character types

  if (typeProm === "yes") {
    genArr.concat(numCharacters);
    caseProm = window.alert("You chose to include numeric characters.");
  }
  else //if (typeProm !== "yes") 
  {
    //!genArr.concat(numCharacters);
    caseProm = window.alert("You chose not to include numeric characters.");
  }
  caseProm = window.prompt("Do you want all uppercase?('yes' or 'no')")
  if (caseProm === "yes") {
    specialProm = window.alert("You chose to include uppercase");
    genArr.concat(charCap);

  }
  else //if (caseProm !== "yes") 
  {
    specialProm = window.prompt("You chose not to include uppercase");
    //!genArr.concat(charCap);
  }
  specialProm = window.prompt("Do you want to include special characters? ('yes' or 'no')")

  if (specialProm === "yes") {
    genArr.concat(specialChar);
    window.alert("You chose to include special characters")
  }
  else //if (specialProm !== "yes") 
  {
    //!genArr.concat(specialChar);
    window.alert("You chose not to include special characters")
  }
  lowProm = window.prompt("Do you want to include lowercase characters? ('yes' or 'no')")
  if (lowProm === "yes") {
    window.alert("You chose to include lowercase")
    genArr.concat(characters);
  }
  else //if (lowProm != "yes") 
  {
    //!genArr.concat(characters);
    window.alert("You chose not to include lowercase")
  }

  /*
   let typeProm = "Do you want numeric characters added to your password?";
   prefProm = confirm(typeProm);
   window.alert("You have selected " + prefProm);
   let promCap = "Do you want the password capitalized?"
   prefCap = confirm(promCap);
   window.alert("You have selected " + prefCap);
   let promSmall = "Do you want the password all lower-cased?"
   prefSmall = confirm(promSmall);
   window.alert("You have selected " + prefSmall)
   let promSpec = "Do you want to include special characters in your password?";
   prefSpec = confirm(promSpec);
   window.alert("You have selected " + prefSpec);
 
   if (!typeProm && !promCap && !promSmall && !promSpec) {
     window.alert("Denied! You need to have at least one of the choices confirmed");
     genArr = [];
     return;
   }
   else {
     if (prefProm === true) {
       genArr = genArr.concat(numCharacters);
     }
     if (prefCap === true) {
       genArr = genArr.concat(charCap);
     }
     if (prefSmall === true) {
       genArr = genArr.concat(characters);
     }
     if (prefSpec === true) {
       genArr = genArr.concat(specialChar);
     }
   }*/
  //random number generator for selecting characters
  for (var i = 0; i < lengthProm; i++)
    result += genArr[Math.floor(Math.random() * genArr.length)];
  return result;





}   // a dataset to choose between 8 and 128





