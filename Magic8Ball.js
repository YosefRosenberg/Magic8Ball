var magicResponse = ["Yes","No","Maybe","Hahahah", "Time will tell!"];
var userResponse = ""

function randomAnswer () {
  randomResponse = Math.floor(Math.random()*magicResponse.length);
  alert(magicResponse[randomResponse]);
}

function magic8Ball() {
  var randomResponse = prompt("Please ask the Magic 8 Ball your question here:");
  do { randomAnswer(); } while(userResponse === "false");
}

magic8Ball();
