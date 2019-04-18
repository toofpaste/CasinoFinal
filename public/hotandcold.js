//Business Logic for compareNumbers--------------------------------------------------------------

function compareNumbers(guessedNumber, secretNumber, attempt) {
  if(guessedNumber === secretNumber) {
    $("#underOverOutput").text("Congratulations, you guessed the number!")
    // console.log("compareNumbers function", "Congratulations, you've WON!")
  } else if (guessedNumber > secretNumber){
    $("#underOverOutput").text("It's lower!");
    // console.log("Guess again, it's lower!")
  } else if(guessedNumber < secretNumber) {
    $("#underOverOutput").text("It's higher!");
    // console.log("Guess again, it's higher");
  }
  var difference = Math.abs((guessedNumber/secretNumber));
  // console.log("difference", difference);
  if((guessedNumber === secretNumber)) {
    $("body").removeClass();
    $("#output").removeClass();
    $("body").addClass("success");
    $("#output").addClass("white");
    $("#hotColdOutput").text("");
    if(countAttempts !== 1){
    $("#attemptOutput").text("It took you " + attempt.attempts[attempt.attempts.length - 1].id + " attempts");
  } else $("#attemptOutput").text("It took you 1 attempt");
    // console.log("No text needed");
  } else if(difference >= 0.95 && difference <= 1.05) {
    $("body").removeClass();
    $("#output").removeClass();
    $("body").addClass("within5");
    $("#hotColdOutput").text("You are within 5%");
    // console.log("You are within 10");
  } else if(difference >= 0.9 && difference <= 1.1) {
    $("body").removeClass();
    $("#output").removeClass();
    $("body").addClass("within10");
    $("#hotColdOutput").text("You are within 10%");
    // console.log("You are within 10");
  } else if (difference >= 0.8 && difference <= 1.2) {
    $("body").removeClass();
    $("#output").removeClass();
    $("body").addClass("within20");
    $("#hotColdOutput").text("You are within 20%");
    // console.log("You are within 50");
  } else if (difference >= 0.7 && difference <= 1.3) {
    $("body").removeClass();
    $("#output").removeClass();
    $("body").addClass("within30");
    $("#hotColdOutput").text("You are within 30%");
    // console.log("You are within 50");within10
  } else if (difference >= 0.6 && difference <= 1.4) {
    $("body").removeClass();
    $("#output").removeClass();
    $("body").addClass("within40");
    $("#hotColdOutput").text("You are within 40%");
    // console.log("You are within 100");
  } else if (difference >= 0.5 && difference <= 1.5) {
    $("body").removeClass();
    $("#output").removeClass();
    $("body").addClass("within50");
    $("#hotColdOutput").text("You are within 50%");
    // console.log("You are within 250");
  } else if (difference >= 0.4 && difference <= 1.6) {
    $("body").removeClass();
    $("#output").removeClass();
    $("body").addClass("within60");
    $("#hotColdOutput").text("You are within 60%");
    // console.log("You're within 500");
  } else if (difference >= 0.3 && difference <= 1.7) {
    $("body").removeClass();
    $("#output").removeClass();
    $("body").addClass("within70");
    $("#hotColdOutput").text("You are within 70%");
    // console.log("You're not even within 500!");
  } else if (difference >= 0.2 && difference <= 1.8) {
    $("body").removeClass();
    $("#output").removeClass();
    $("body").addClass("within80");
    $("#hotColdOutput").text("You are within 80%");
    // console.log("You're not even within 500!");
  } else if (difference >= 0.1 && difference <= 1.9) {
    $("body").removeClass();
    $("#output").removeClass();
    $("body").addClass("within90");
    $("#hotColdOutput").text("You are within 90%!");
    // console.log("You're not even within 500!");
  } else {
    $("body").removeClass();
    $("#output").removeClass();
    $("body").addClass("tooFar");
    $("#hotColdOutput").text("You are too far away!");
  }
}

// Business Logic for countAttempts -------------------------------------------

var countAttempts = 0;
function Attempts() {
  this.attempts = [],
  this.currentAttemptId = 1
  countAttempts++;
  // console.log("Attempts", attempt);
}

Attempts.prototype.addAttempt = function(attempt) {
  attempt.id = this.assignAttemptId();
  this.attempts.push(attempt);
}

Attempts.prototype.assignAttemptId = function() {
  this.currentAttemptId += 1;
  return this.currentAttemptId;
}

// User Interface Logic ---------------------------------------------------------

var attempt = new Attempts();

$(document).ready(function() {
  var secretNumber;
    $("#easy").click(function() {
      $("#compareNumbers").removeClass();
      $("#selectLevel").hide();
      $("#compareNumbers").show();
      secretNumber = Math.floor(Math.random() * 100);
      console.log("easySecretNumber", secretNumber);
    });
    $("#medium").click(function() {
      $("#compareNumbers").removeClass();
      $("#selectLevel").hide();
      $("#compareNumbers").show();
      secretNumber = Math.floor(Math.random() * 1000);
      console.log("mediumSecretNumber", secretNumber);
    });
    $("#hard").click(function() {
      $("#compareNumbers").removeClass();
      $("#selectLevel").hide();
      $("#compareNumbers").show();
      secretNumber = Math.floor(Math.random() * 10000);
      // console.log("hardSecretNumber", secretNumber);
    });
  $("#compareNumbers").submit(function(event) {
    event.preventDefault();
    var guessedNumber = parseInt($("#guessedNumber").val());
    console.log("guessedNumber", guessedNumber);
    compareNumbers(guessedNumber, secretNumber, attempt);
    var newAttempt = new Attempts(attempt);
    attempt.addAttempt(newAttempt);
    $("#output").show();
    $("#guessedNumber").val("");
  });
});
