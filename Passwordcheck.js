// Function for making sure the password and User ID DONT match.
function checkForMatch(password, userID) {
  if (password === userID) {
    return {
      valid: false,
      Reason: "password cannot match user ID"
    }
  }
  else {
    return { valid: true }
  }
};

_____________________________________________________________
// Function for making sure the password does not equal "password".
function checkForPassword(password) {
  if (password === "password") {
    return {
      valid: false,
      Reason: "password cannot equal password"
    }
  }
  else {
    return { valid: true }
  }
};

_____________________________________________________________
// Added function that checks to make sure credentials are more than 6 characters.
function passwordMatchID(password, userID) {
  if (password === "password") {
    return {
      valid: false,
      Reason: "password cannot equal password"
    }
  }
  else {
    return { valid: true }
  }
};

// credential = your userID or password, str = what type of credential it is.
function credentialLength(credential, str) {
  if (credential.length < 6) {
    return {
      valid: false,
      reason: str + "  must be more than 6 characters long"
    }
  } else {
    return {
      valid: true
    }
  }
};
____________________________________________________________
//User ID cannot contain the following characters: !#$. //Function takes the following parameters: User ID and the specific offending character(e.g. !, $, #)
function cantContainCharacter(userId, offendingCharacter) {
  //Identifies if the user ID contains one of the offending characters.
  if (userId.includes(offendingCharacter)) {
    //Returns an object with a value of false if the user ID includes an offending character.
    return {
      valid: false,
      reason: "User ID cannot contain any " + offendingCharacter
    }
  } else {
    //Returns an object with a value of true.
    return {
      valid: true
    }
  }
};
//Function takes parameter of user ID that checks individually for each offending character
function cantContain(userId) {
  //Defines a variable that contains an object indicating whether or not user ID contains the !
  var result = cantContainCharacter(userId, "!");
  //Checks if User ID is invalid if so return the result
  if (result.valid === false)
  {
    return result;
  }
  else // otherwise
  {
    //Assigns new value to the variable determining whether user ID contains #
    result = cantContainCharacter(userId, "#");
    // Checks if User ID contains # if so return the result ... or not!
    if (result.valid === false)
    {
      return result;
    }
    else //otherwise "or not"
    {
      //Because the previous two conditions were met, the third condition passes, it will just return the result. An If/else statement beyond this would be futile.
      result = cantContainCharacter(userId, "$");
      return result;
    }
  }
}
// Password has to contain at least one of: !#$
// Password cannot be "password"
function checkForPassword(password){
  if (password === "password"){
    return {
      valid: false,
      reason: "password cannot equal password"
    }
  } else {
    return {
      valid: true
    }
  }
};
