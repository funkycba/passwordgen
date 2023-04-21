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
  //var possibleChar = [];
  let lengthProm = window.prompt("Select character length between 8 and 128");//Need variable for character length

  if (lengthProm < 8) {
    window.alert("Please select a length of 8 or more.");
    return;
  }
  else if (lengthProm > 128) {
    window.alert("Please select a length of 128 or less");
    return;
  }
  window.alert("You have selected " + lengthProm);


  var lowProm;
  var caseProm;
  var specialProm;
  var typeProm = window.confirm("Length accepted. Do you want to use numeric characters?");    //Need variable for character types
  //function gitrandom(arr) {
  //  var randomindex = (Math.floor(Math.random() * arr.length));
  //  var randomElement = arr[randomindex];
  //}
  if (typeProm === true) {
    genArr = genArr.concat(numCharacters)
    //possibleChar = possibleChar.concat(numCharacters);
    //genArr.push(gitrandom(numCharacters));
    typeProm = window.alert("You chose to include numeric characters.");
    console.log(genArr);
  }
  else //if (typeProm !== "yes") 
  {
    //!genArr.concat(numCharacters);
    typeProm = window.alert("You chose not to include numeric characters.");
  }
  caseProm = window.confirm("Do you want all uppercase?('yes' or 'no')");
  if (caseProm === true) {
    caseProm = window.alert("You chose to include uppercase");
    //genArr.push(gitrandom(charCap));
    genArr = genArr.concat(charCap);

    console.log(genArr);

  }
  else //if (caseProm !== "yes") 
  {
    caseProm = window.alert("You chose not to include uppercase");
    //!genArr.concat(charCap);
  }
  specialProm = window.confirm("Do you want to include special characters? ('yes' or 'no')");

  if (specialProm === true) {
    //genArr.concat(specialChar);
    //genArr.push(gitrandom(specialChar));
    genArr = genArr.concat(specialChar)
    specialProm = window.alert("You chose to include special characters");
    
    console.log(genArr);
  }
  else //if (specialProm !== "yes") 
  {
    //!genArr.concat(specialChar);
    specialProm = window.alert("You chose not to include special characters");
  }
  lowProm = window.confirm("Do you want to include lowercase characters? ('yes' or 'no')")
  if (lowProm === true) {
    lowProm = window.alert("You chose to include lowercase");
    genArr = genArr.concat(characters);
    //genArr.push(gitrandom(characters));
    console.log(genArr);
  }
  else //if (lowProm != "yes") 
  {
    //!genArr.concat(characters);
    lowProm = window.alert("You chose not to include lowercase");
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
    console.log(genArr);
  return result;





}   // a dataset to choose between 8 and 128





