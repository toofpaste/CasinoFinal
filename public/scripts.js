//Business Logic --------------------------------------------------------------

var secretNumber = Math.floor(Math.random() * 100);
console.log("secretNumber", secretNumber);

function compareNumbers(guessedNumber, secretNumber) {
  if(guessedNumber === secretNumber) {
    $("#textOutput").text("Congratulations, you've WON!")
    console.log("compareNumbers function", "Congratulations, you've WON!")
  } else if (guessedNumber > secretNumber){
    $("#textOutput").text("Guess again, it's lower!");
    console.log("Guess again, it's lower!")
  } else if(guessedNumber < secretNumber) {
    $("#textOutput").text("Guess again, it's higher!");
    console.log("Guess again, it's higher");
  }
  var difference = Math.abs(guessedNumber - secretNumber);
  console.log("difference", difference);
  if(difference < 10) {
    $("span").addClass("burning");
    console.log("You are burning, so close");
  } else if (difference < 50 && difference > 10) {
    $("span").addClass("hot");
    console.log("You're hot");
  } else if (difference < 100 && difference > 50) {
    $("span").addClass("warm");
    console.log("Pretty warm");
  } else if (difference < 250 && difference > 100) {
    $("span").addClass("chilly");
    console.log("You're getting chilly");
  } else if (difference < 500 && difference > 250) {
    $("span").addClass("cold");
    console.log("You're so cold!");
  } else if (difference < 1000 && difference > 500) {
    $("span").addClass("freezing");
    console.log("You're freezing!");
  }
}

//User Interface Logic ---------------------------------------------------------

$(document).ready(function() {
  // $("#userInput").submit(function(event){
  //   event.preventDefault();
  //   var levelInput = $("input:radio[name=level]:checked").val();
  //   console.log("levelInput", levelInput);
  //   secretNumber(levelInput);
  // });
  $("#userInput").submit(function(event) {
    event.preventDefault();
    var guessedNumber = parseInt($("#guessedNumber").val());
    console.log("guessedNumber", guessedNumber);
    // var rangeNumber = parseInt($("input#rangeNumber").val());
    // console.log("rangeNumber", rangeNumber);
    compareNumbers(guessedNumber, secretNumber);
    $("#output").show();
    $("#guessedNumber").val("");
  })
});
