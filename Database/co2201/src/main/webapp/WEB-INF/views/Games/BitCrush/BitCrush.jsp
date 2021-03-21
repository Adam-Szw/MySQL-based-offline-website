<!DOCTYPE html>
<html lang = "en">
<head>
	<title>BitCrush</title>
    <link rel="stylesheet" href="../public/Central/central.css">
    <link rel="stylesheet" href="../public/Games/BitCrush/BitCrush.css">
	<link rel="stylesheet" href="../public/Games/games.css">
    <script src = "../public/Games/BitCrush/BitCrush.js"></script>
	<!--External fonts are used these are linked here-->
	<link rel="preconnect" href="https://fonts.gstatic.com">
	<link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
</head>
<body>
    <div class="sidenav">
		<img id="SideBar" src="../public/Central/Images/Signin.png"><a href="/signIn">Sign In</a>
		<img id="SideBar" src="../public/Central/Images/Games.png"><a href="/games">Games</a>
        <img id="SideBar" src="../public/Central/Images/Profile.png"><a href="/profile">Profile</a>
        <img id="SideBar" src="../public/Central/Images/Leaderboard.png"><a href="/scoreboard">Scoreboard</a>
        <img id="SideBar" src="../public/Central/Images/Settings.png"><a href="/settings">Settings</a>
        <img id="SideBar" src="../public/Central/Images/About.png"><a href="/about">About</a>
    </div>
	<div id="TopBox">
		<button id="BackButton" onclick="goBack()">Go Back</button>
		<script>
		function goBack() {
		  window.history.back();
		}
		</script> 
	</div>
	<div class="TopBox" id="Game">
		<div id="ImageBox">
			<img id="img" src="../public/Games/BitCrush/Images/picture_full.png">
			<img id="img2" src="../public/Games/BitCrush/Images/picture_empty.png">
		</div>
		<p class="descriptionText">Welcome to BitCrush! The purpose of this game is to test knowledge in Computer Architecture.</p>
		<p class="descriptionText">Click "Start" to begin the game. You will have limited time to pick correct components of a MIPS CPU.</p>
		<p class="descriptionText">To achieve maximum score, answer all questions. Every question is worth 10 points. The response time matters, but only for leaderboard score.</p>
		<p class="descriptionText">Your leaderboard score will be your question points adjusted by response time.</p>
		<p class="descriptionText">The image is from Hennesy & Patterson book covered in the module</p>
		<p class="descriptionText" id="scoreScreenText"></p>
		<button id="StartButton" onclick="startGame()">Start</button>
		<p class="gameText" id="mission"></p>
		<p class="gameText" id="timer"></p>
	</div>
</body>
</html>