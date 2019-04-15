//Business Logic --------------------------------------------------------------

var secretNumber = Math.floor(Math.random() * 100);
console.log("secretNumber", secretNumber);

function compareNumbers(guessedNumber, secretNumber) {
  if(guessedNumber === secretNumber) {
    $("#output").text("Congratulations, you've WON!")
    console.log("compareNumbers function", "Congratulations, you've WON!")
  } else if (guessedNumber > secretNumber){
    $("#output").text("Guess again, it's lower!");
    console.log("Guess again, it's lower!")
  } else if(guessedNumber < secretNumber) {
    $("#output").text("Guess again, it's higher!");
    console.log("Guess again, it's higher");
  }
};

//User Interface Logic ---------------------------------------------------------

$(document).ready(function() {
  $("#userInput").submit(function(event) {
    event.preventDefault();
    var guessedNumber = parseInt($("#guessedNumber").val());
    console.log("guessedNumber", guessedNumber);
    // var rangeNumber = parseInt($("input#rangeNumber").val());
    // console.log("rangeNumber", rangeNumber);
    compareNumbers(guessedNumber, secretNumber);
    $("#output").show();
    $("#guessedNumber").val("");
 });
});
