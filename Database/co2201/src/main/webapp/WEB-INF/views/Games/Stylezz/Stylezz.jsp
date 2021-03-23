<!DOCTYPE html>
<html lang = "en">
<head>
	<title>Stylezz</title>
	<link rel="stylesheet" href="../public/Central/Stylezz/Stylezz.css">
	<link rel="stylesheet" href="../public/Central/central.css">
	<link rel="stylesheet" href="../public/Games/games.css">
    <script src = "../public/Games/Stylezz/Stylezz.js"></script>
    <link rel="icon" href="../public/Central/Images/Games.png">
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
		<div class="GameBox" id="Gameplay">
			<div class="UIBox" id="TargetBox">
			</div>
			<div class="UIBox" id="CodeBox">
				<div class="CodeBlock" id="HTMLBox">
				</div>
				<div class="CodeBlock" id="CSSBox">
				</div>
			</div>
			<div class="UIBox" id="TimerBox">
			</div>
		</div>
		<div class="GameBox" id="Description">
			<p class="descriptionText">Welcome to Stylezz! This game is about HTML and CSS.</p>
			<p class="descriptionText">Click "Tutorial" to review instructions, alternatively click "Start" to begin game.</p>
			<button class="MenuButton" id="StartButton" onclick="startGame()">Start</button>
			<button class="MenuButton" id="TutorialButton" onclick="displayTutorial()">Tutorial</button>
		</div>
	</div>
</body>
</html>