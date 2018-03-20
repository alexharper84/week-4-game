<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ" crossorigin="anonymous">
<title>Crystal Collector PseudoCode</title>
</head>
<body>
<header>
<h1>
Crystal Collector Pseudocode
</h1>
</header>
<div class="container">
<ul>
<li>
<h2>
At the start of the game, generate five random numbers. A number displayed in the GUI that the user needs to guess and four number values assigned to each diamond.
<ul>
<li>The random number shown at the start of the game should be between 19 - 120.</li>
<li>Each crystal should have a random hidden value between 1 - 12.</li>
</ul>
</h2>
<code>// Create a string which will hold the lottery number</code>
<br>
<code>var lottoNumber = "";</code>
<br>
<code>// Then initiate a loop to generate 9 separate numbers</code>
<br>
<code>for (var i = 0; i < 9; i++) {</code>
  <br>
  <code>  // For each iteration, generate a new random number between 1 and 9.</code>
  <br>
  <code>  var random = Math.floor(Math.random() * 9) + 1;</code>
  <br>
  <code>  // Take this number and then add it to the rest of the string.</code>
  <br>
  <code>  // In essence, we are iteratively building a string of numbers. (e.g. First: 1, Second: 13, Third: 135, etc.)</code>
  <br>
  <code>  lottoNumber = random + lottoNumber;</code>
  <br>
  <code>}</code>
  <br>

  </li>
  <li>
  <h2>
  Click events/key events used to reveal value of diamond button but also adds value of button to box below the diamonds in a user score box.</h2>
  <div>
  <code><button id="heads">Gem</button></code>
    <br>
  <code><button id="heads">Sapphire</button></code>
    <br>
  <code><button id="heads">Diamond</button></code>
    <br>
  <code><button id="heads">Ruby</button></code>
  </div>
  </li>
  </ul>
</div>


<div class="container mb-4">
  <h1>Here's how the app works:</h1>
  <br>
  * There will be four crystals displayed as buttons on the page.
  <br>
  * The player will be shown a random number at the start of the game.
  <br>
  * When the player clicks on a crystal, it will add a specific amount of points to the player's total score.
  <br>
  * Your game will hide this amount until the player clicks a crystal.
  <br>
  * When they do click one, update the player's score counter.
  <br>
  * The player wins if their total score matches the random number from the beginning of the game.
  <br>
  * The player loses if their score goes above the random number.
  <br>
  * The game restarts whenever the player wins or loses.
  <br>
  * When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.
  <br>
  * The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.
<br>

</div>

<script src="https://code.jquery.com/jquery-3.1.1.slim.min.js" integrity="sha384-A7FZj7v+d/sdmMqp/nOQwliLvUsJfDHW+k9Omg/a/EheAdgtzNs3hpfag6Ed950n" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js" integrity="sha384-DztdAPBWPRXSA/3eYEEUWrWCy7G5KFbe8fFjk5JAIxUYHKkDx6Qin1DkWx51bBrb" crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/js/bootstrap.min.js" integrity="sha384-vBWWzlZJ8ea9aCX4pEW3rVHjgjt7zpkNpZk+02D9phzyeVkE+jo0ieGizqPLForn" crossorigin="anonymous"></script>
  </body>
  </html>



if totalCrystalValue === randomComputerNumber;
  user wins;
if totalCrystalValue < randomComputerNumber;
  user clicks another crystal icon to add to existing value;
else totalCrystalValue > randomComputerNumber;
  user loses;

  gameReset();
