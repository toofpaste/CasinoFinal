function randVal(){
  return Math.floor(Math.random() * 13);
};
function randSuit(){
  return Math.floor(Math.random() * 4);
};


function dealUser(value, suit, suitName, valueName){
  var imagePath = ["spade", "diam", "heart", "club"];
    $("ul.user").append("<li><img src = 'img/" + imagePath[suit] + value + ".jpg'" + " of " + suitName[suit] + "</li>");
};
function dealDeal(value, suit, suitName, valueName){
  var totalDeal = 0;
  var imagePath = ["spade", "diam", "heart", "club"];
  $("ul.deal").append("<li><img src = 'img/" + imagePath[suit] + value + ".jpg'" + " of " + suitName[suit] + "</li>");
};
function addCard(rngVal){
  if(rngVal <= 8){
    return (rngVal + 2);
  }else if(rngVal > 8 && rngVal <= 11){
     return 10;
  }else if(rngVal === 12){
    return 11;
  };
};

function checkWin(totalUser, totalDeal, betTotal){
  $("#reset1").show();
  if (totalUser >= 22){
    $("#bankBal").text("Balance: $" + playerBank)
     $('#name').text("   User: " + totalUser + "    BUST - - - - Dealer Wins");
     $('#bet').text("Bet Amount: $" + betTotal + " Loss Amount: $" + (betTotal));
     $("#bank").text("Bank Balance: $" + playerBank);
   };
   if (totalUser === totalDeal){
     playerBank += betTotal[0];
     $("#bankBal").text("Balance: $" + playerBank)
     $('#name').text("Dealer: " + totalDeal + "  /User: " + totalUser + "    TIE TIE TIE TIE TIE");
     $('#bet').text("Bet Amount: $" + betTotal + " Win Amount: $" + (betTotal));
     $("#bank").text("Bank Balance: $" + playerBank);
   };
   if (totalUser > totalDeal && totalUser <= 21){

     playerBank += (betTotal[0]*2);
     $("#bankBal").text("Balance: $" + playerBank)
    $('#name').text("Dealer: " + totalDeal + "   /User: " + totalUser + "    USER WINS")
    $('#bet').text("Bet Amount: $" + betTotal + " Win Amount: $" + (betTotal * 2));
    $("#bank").text("Bank Balance: $" + playerBank); ;
   };
   if (totalDeal > totalUser && totalDeal <= 21){
     $("#bankBal").text("Balance: $" + playerBank)
    $('#name').text("Dealer: " + totalDeal + "   /User: " + totalUser + "    DEALER WINS HAHAHA");
    $('#bet').text("Bet Amount: $" + betTotal + " Loss Amount: $" + (betTotal));
    $("#bank").text("Bank Balance: $" + playerBank);
   };
   if(totalDeal > 21 && totalUser <= 21){
     playerBank += (betTotal[0]*2);
     $("#bankBal").text("Balance: $" + playerBank)
     $('#name').text("Dealer: " + totalDeal + "   /User: " + totalUser + "    USER WINS:  DEALER BUST");
     $('#bet').text("Bet Amount: $" + betTotal + " Win Amount: $" + (betTotal * 2));
     $("#bank").text("Bank Balance: $" + playerBank);
   };
};
function start(){
  $("#reset1").hide();
  var suitName = ["Spades" , "Hearts", "Diamonds", "Clubs"];
  var valueName = [2, 3, 4, 5, 6, 7 ,8 ,9, 10, "Jack", "Queen", "King", "Ace"];
  //               0  1  2  3  4  5  6  7  8     9        10      11      12
  var totalUser = 0;
  var totalDeal = 0;
  var rngVal = 0;
  var rngSuit = 0;
  var num = 0;
  var betTotal = [];

  $("#plus1").unbind("click").click(function(){
    $("button#dealC").show();
    if(playerBank > 0){
    var clickedNum = 1;
    playerBank = bet(clickedNum, betTotal);
  };
  })


  $("#plus5").unbind("click").click(function(){
    $("button#dealC").show();
    if(playerBank >= 5){
    var clickedNum = 5;
    playerBank = bet(clickedNum, betTotal);
  };
  })



  $("#plus10").unbind("click").click(function(){
    $("button#dealC").show();
    if(playerBank >= 10){
    var clickedNum = 10;
    playerBank = bet(clickedNum, betTotal);
    };
  })



  $("#plus50").unbind("click").click(function(){
    $("button#dealC").show();
    if(playerBank >= 50){
    var clickedNum = 50;
    playerBank = bet(clickedNum, betTotal);
  };
  })



  $("#plus100").unbind("click").click(function(){
    $("button#dealC").show();
    if(playerBank >= 100){
    var clickedNum = 100;
    playerBank = bet(clickedNum, betTotal);
  };
  })


  $("button#dealC").unbind("click").click(function(){
    $("#plus1").hide();
    $("#plus5").hide();
    $("#plus10").hide();
    $("#plus50").hide();
    $("#plus100").hide();
    $("button#dealC").hide();
    $("button#hit").show();
    $("button#stay").show();
      rngVal = randVal();
      totalUser += addCard(rngVal);
      rngSuit = randSuit();
      dealUser(rngVal, rngSuit, suitName, valueName);
      rngVal = randVal();
      totalUser += addCard(rngVal);
      rngSuit = randSuit();
      dealUser(rngVal, rngSuit, suitName, valueName);
      rngVal = randVal();
      totalDeal += addCard(rngVal);
      rngSuit = randSuit();
      dealDeal(rngVal, rngSuit, suitName, valueName);
    });
    $("button#hit").unbind("click").click(function(){
      if(totalUser <= 21){
      rngVal = randVal();
      totalUser += addCard(rngVal);
      rngSuit = randSuit();
      dealUser(rngVal, rngSuit, suitName, valueName);
    }else $("ul.user").append("<li id = 'bustbust'> BUST BUST BUST BUST </li>");;
    });
    $("button#stay").unbind("click").click(function(){
      $("#stay").hide();
      $("#hit").hide();
    while(totalDeal <= 16){
      rngVal = randVal();
      totalDeal += addCard(rngVal);
      rngSuit = randSuit();
      dealDeal(rngVal, rngSuit, suitName, valueName);
    };
    checkWin(totalUser, totalDeal, betTotal);
    });
};

function bet(clickedNum, betTotal){
playerBank -= clickedNum;
betTotal.push(clickedNum);
if(betTotal.length != 1){
betTotal[0] += betTotal.pop();
};
$("#bankBal").text("Balance: $" + playerBank)
$("#printBet").text("BET: $" + betTotal[0]);
return playerBank;
};
  var playerBank = 1000;
$(function(){
  var countClick = 0;

      $("#reset1").unbind("click").click(function(){
        if(playerBank != 0){
        $("#imgButtons").show();
        $("#plus1").show();
        $("#plus5").show();
        $("#plus10").show();
        $("#plus50").show();
        $("#plus100").show();
        $("ul").empty();
        $("ul").empty();
        $("#bet").empty();
        $("#name").empty();
        $("#bank").empty();
        $("#hit").hide();
        $("#stay").hide();
        $("#printBet").empty();
        start();
      }else {$("#loselose").hide();
              $("#loser").show();}
      });


});
