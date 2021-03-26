<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link href="../public/Games/games.css" rel="stylesheet">
  <link rel="stylesheet" href="../public/Central/central.css">
  <link rel="stylesheet" href="../public/Games/PythonQuizGame/styles.css">
  <script defer src="../public/Games/PythonQuizGame/script.js"></script>
  <link rel="icon" href="../public/Central/Images/Games.png">
  <title>Quiz App</title>
    <!--External fonts are used these are linked here-->
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
</head>
<body>
  <div class="sidenav" >
		 		<img id="SideBar" src="../public/Central/Images/Signin.png"><a href="/signIn">Sign In</a>
		<img id="SideBar" src="../public/Central/Images/Games.png"><a href="/games">Games</a>
        <img id="SideBar" src="../public/Central/Images/Profile.png"><a href="/profile">Profile</a>
        <img id="SideBar" src="../public/Central/Images/Leaderboard.png"><a href="/scoreboard">Scoreboard</a>
        <img id="SideBar" src="../public/Central/Images/Settings.png"><a href="/settings">Settings</a>
        <img id="SideBar" src="../public/Central/Images/About.png"><a href="/about">About</a>
    </div>

  <div class="container"id="Game">
  	<div id="start-content">
  		<p>Welcome to the Python quiz game!</p>
  	</div>
  	<div style="display:none" id="endgame-content">
  		<p>Thanks for playing the Python quiz game!</p>
  		<p id="endgamescore">You got a score of 0</p>
  		<button id="EndGame"><a href="/games" >End Game</a></button>
  	</div>
    <div id="question-container" class="hide">
    <p id="right_answers">Score: </p>
      <div id="question">Question</div>
      <div id="answer-buttons" class="btn-grid">
        <button class="btn">Answer 1</button>
        <button class="btn">Answer 2</button>
        <button class="btn">Answer 3</button>
        <button class="btn">Answer 4</button>
      </div>
    </div>
    <div class="controls">
      <button id="start-btn" class="start-btn btn">Start</button>
      <button id="next-btn" class="next-btn btn hide">Next</button>
    </div>  
     <p id ="countdown"><label id="timer">Time:</label></p>
  </div>
</body>
</html>