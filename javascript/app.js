//computer randomly selects a number
//computer randomly selects a number between 1-12 for each crystal
//set initial variables to 0

var userTotal = 0;
var wins = 0;
var losses = 0;

var randomNum = Math.floor(Math.random() * 60) + 18;
var blue = Math.floor(Math.random() * 12) +1;
var pink = Math.floor(Math.random() * 12) +1;
var green = Math.floor(Math.random() * 12) +1;
var purple = Math.floor(Math.random() * 12) +1;

$("#totalNum").html(userTotal);
$("#wins").html(wins);
$("#losses").html(losses);
$("#numToGuess").html(randomNum);

//reset all variables & start new game

var reset = function() {
  userTotal = 0;
  randomNum = Math.floor(Math.random() * 60) + 18;
  blue = Math.floor(Math.random() * 12) + 1;
  pink = Math.floor(Math.random() * 12) + 1;
  green = Math.floor(Math.random() * 12) + 1;
  purple = Math.floor(Math.random() * 12) + 1;
  $("#numToGuess").html(randomNum);
  $("#totalNum").html(userTotal);
  $("#wins").html(wins);
  $("#losses").html(losses);
}

// victory validation

var winCheck = function() {
  if (userTotal == randomNum) {
    wins++;
    alert("You won!");
    $("#wins").html(wins);
    reset();

  } else if (userTotal > randomNum) {
    losses++;
    alert("You lost!");
    $("#losses").html(losses);
    reset();
  }
};

// add click events on the crystals into a sum and send to variable

$("#purple").on("click", function() {
  userTotal = userTotal + purple;
  $("#totalNum").html(userTotal);
  winCheck();
})

$("#green").on("click", function() {
  userTotal = userTotal + green;
  $("#totalNum").html(userTotal);
  winCheck();
})

$("#pink").on("click", function() {
  userTotal = userTotal + pink;
  $("#totalNum").html(userTotal);
  winCheck();
})

$("#blue").on("click", function() {
  userTotal = userTotal + blue;
  $("#totalNum").html(userTotal);
  winCheck();
})
