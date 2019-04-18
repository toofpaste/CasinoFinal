var num = 0;
var betTotal = 0;
function bet(){
  $("#printBet").text("NO BET");
  $("#plus1").click(function(){
    if(account.balance >= 1){
    $("#lever").show();
    num=1;
    betTotal+=1
    $("#printBet").text("BET: $" + betTotal);
    takeMoney(num, betTotal);
  }else $("#printBet").text("BET: $" + betTotal + " NOT ENOUGH FUNDS");
  })

  $("#plus5").click(function(){
    if(account.balance >= 5){
    $("#lever").fadeIn(500);
    num=5;
    betTotal+=5
    $("#printBet").text("BET: $" + betTotal);
    takeMoney(num, betTotal);
  }else $("#printBet").text("BET: $" + betTotal + " NOT ENOUGH FUNDS");
  })

  $("#plus10").click(function(){
    if(account.balance >= 10){
    $("#lever").fadeIn(500);
    num=10;
    betTotal+=10
    $("#printBet").text("BET: $" + betTotal);
    takeMoney(num, betTotal);
  }else $("#printBet").text("BET: $" + betTotal + " NOT ENOUGH FUNDS");
  })

  $("#plus50").click(function(){
    if(account.balance >= 50){
    $("#lever").fadeIn(500);
    num=50;
    betTotal+=50
    $("#printBet").text("BET: $" + betTotal);
    takeMoney(num, betTotal);
  }else $("#printBet").text("BET: $" + betTotal + " NOT ENOUGH FUNDS");
  })

  $("#plus100").click(function(){
    if(account.balance >= 100){
    $("#lever").fadeIn(500);
    num=100;
    betTotal+=100
    $("#printBet").text("BET: $" + betTotal);
    takeMoney(num, betTotal);
  }else $("#printBet").text("BET: $" + betTotal + " NOT ENOUGH FUNDS");
  })
}

function print(i){
  $("ul#list0").html("<li><img src = 'slotimg/"+ (i) + ".png' alt = ''></li>");
  $("ul#list0").fadeIn(150);
  $("ul#list0").fadeOut(150);
}
function printA(i){
  $("ul#alist0").html("<li><img src = 'slotimg/"+ (i) + ".png' alt = ''></li>");
  $("ul#alist0").fadeIn(150);
  $("ul#alist0").fadeOut(150);
}
function printB(i){
  $("ul#blist0").html("<li><img src = 'slotimg/"+ (i) + ".png' alt = ''></li>");
  $("ul#blist0").fadeIn(150);
  $("ul#blist0").fadeOut(150);
}
function spin(){
  var time = 100;
  (function theLoop (i) {
    setTimeout(function () {
      var random = Math.floor(Math.random() * 4) + 1;
      time += 40;
      print(random);
      if (--i) {          // If i > 0, keep going
        theLoop(i);       // Call the loop again, and pass it the current value of i
      }
    }, time);
  })(10);
  var timeA = 100;
  (function theLoop (i) {
    setTimeout(function () {
      var random = Math.floor(Math.random() * 4) + 1;
      timeA += 35;
      printA(random);
      if (--i) {          // If i > 0, keep going
        theLoop(i);       // Call the loop again, and pass it the current value of i
      }
    }, timeA);
  })(15);
  var timeB = 100;
  (function theLoop (i) {
    setTimeout(function () {
      var random = Math.floor(Math.random() * 4) + 1;
      timeB += 30;
      printB(random);
      if (--i) {          // If i > 0, keep going
        theLoop(i);       // Call the loop again, and pass it the current value of i
      }
    }, timeB);
  })(20);

};

function freeze(){
  var col1 = Math.floor(Math.random() * 4) + 1;
  $("ul#list0").html("<li><img  src = 'slotimg/"+ (col1) + ".png' alt = ''></li>");
  $("ul#list0").fadeIn(500);
  return col1;
};
function freezeA(){
  var col2 = Math.floor(Math.random() * 4) + 1;
  $("ul#alist0").html("<li><img src = 'slotimg/"+ (col2) + ".png' alt = ''></li>");
  $("ul#alist0").fadeIn(500);
  return col2;
};
function freezeB(){
  var col3 = Math.floor(Math.random() * 4) + 1;
  $("ul#blist0").html("<li><img src = 'slotimg/"+ (col3) + ".png' alt = ''></li>");
  $("ul#blist0").fadeIn(500);
  return col3;
};


function checkWin(col1, col2, col3, betAmount){
  if (col1 === 1 && col2 === 1 && col3 === 1){
    $("#headline").text("JACKPOT JACKPOT JACKPOT: $" + (betAmount * 250));
    account.balance += betAmount + (betAmount*250);
    localStorage.setItem("bank", account.balance);
  }else if(col1 === col2 && col2 === col3 && col1 === col3){
    $("#headline").text("YOU WIN: $" + (betAmount * 25));
    account.balance += betAmount + (betAmount*25);
    localStorage.setItem("bank", account.balance);
  }else{
    $("#headline").text("LOSER LOSER LOSER");
    if(account.balance <= 0){
      $("#resetBank").fadeIn(1000);
    };
  }
};
var col1 = 0;
var col2 = 1;
var col3 = 2;
function endCheck(){

  var time0 = 3300;
  var timeA = 5800;
  var timeB = 8400;


    setTimeout(function(){
      col1 = freeze();
    }, time0)
    setTimeout(function(){
      col2 = freezeA();
    }, timeA)
    setTimeout(function(){
      col3 = freezeB();
    }, timeB)
    // setTimeout(function(){
    //   checkWin(col1, col2, col3);
    // }, 15000)
};


function takeMoney(betAmount, betTotal){
  account.balance -= betAmount;
  localStorage.setItem("bank", account.balance);
  $("#bal").text("BALANCE: $" + account.balance);
$("#lever").click(function() {
  setTimeout(function(){
    $("#plus1").fadeIn(1000);
    $("#plus5").fadeIn(1000);
    $("#plus10").fadeIn(1000);
    $("#plus50").fadeIn(1000);
    $("#plus100").fadeIn(1000);
    checkWin(col1, col2, col3, betTotal);

  }, 10400)
});
}

var account = {
  balance: localStorage.getItem("bank")
};

$(function() {
  // var foo = localStorage.getItem("bank");
  // console.log(foo);
  if(account.balance <= 0){
    $("#resetBank").fadeIn(1000);
  };
  $("#resetBank").click(function(){
      localStorage.setItem("bank", 1000);
  });
  $("#btnCash").click(function(){
      localStorage.setItem("bank", account.balance);
  });
  $("#lever").hide();
  $("#bal").text("BALANCE: $" + account.balance);
  $("ul#list0").html("<li><img src = 'Slotimg/"+ (1) + ".png' alt = ''></li>");
  $("ul#alist0").html("<li><img src = 'Slotimg/"+ (1) + ".png' alt = ''></li>");
  $("ul#blist0").html("<li><img src = 'Slotimg/"+ (1) + ".png' alt = ''></li>");
  bet();
  var trigger = document.getElementById('trigger');
  var lever = document.getElementById('lever');
  var isOn = true;
  trigger.addEventListener('click', function(event) {

    // $("ul").empty();
    // event.preventDefault();
    lever.className = 'lever active ' + (isOn ? 'off' : 'on');
    setTimeout(function(){
      lever.className = 'lever ' + ('on');
      spin();
    }, 900)
    setTimeout(function(){
    $("ul#list0").hide();
    $("ul#alist0").hide();
    $("ul#blist0").hide();
    $("#headline").empty();
    $("#lever").fadeOut(1000);

    endCheck();
  }, 1500);
    setTimeout(function(){
      bet = 0;
      betTotal = 0;
    }, 9001);

  });


});
