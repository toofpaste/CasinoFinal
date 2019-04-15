//Business Logic --------------------------------------------------------------

var secretNumber = Math.floor(Math.random() * 100);
// console.log("secretNumber", secretNumber);

function compareNumbers(guessedNumber, secretNumber) {
  if(guessedNumber === secretNumber) {
    console.log("compareNumbers function", "Congratulations, you've WON!")
  } else if (guessedNumber > secretNumber){
    console.log("Guess again, it's lower!")
  } else if(guessedNumber < secretNumber) {
    console.log("Guess again, it's higher");
  }
};
  // $("#output").text("Congratulations, you've WON!");

  // || number2 >= 0) || (number1 >= 0 && number2 >= 0)) {


  // $("#output").text("Please enter numbers greater than zero.");
  // }	else {
  // 	var total = 0;
  // 	for(var index = 0; index <= number1; index += number2) {
  // 	var result = $("#output").append(index + ", ");



//User Interface Logic ---------------------------------------------------------

$(document).ready(function() {
  $("form#userInput").submit(function(event) {
    event.preventDefault();
    var guessedNumber = parseInt($("input#guessedNumber").val());
    console.log("guessedNumber", guessedNumber);
    compareNumbers(guessedNumber, secretNumber);
  });
});
