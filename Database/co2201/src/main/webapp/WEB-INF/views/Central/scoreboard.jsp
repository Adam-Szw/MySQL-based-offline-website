<!DOCTYPE html>
<html lang = "en">
<head>
    <title>Scoreboard</title>
    <link rel="stylesheet" href="../public/Central/central.css">
    <link rel="stylesheet" href="../public/Central/Scoreboard/scoreboard.css">
	<script src = "../public/Central/Scoreboard/scoreboard.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
</head>

<body onload="setup()">
    <div class="sidenav">
	  	<img id="SideBar" src="public/Central/Images/Signin.png"><a href="/signIn">Sign In</a>
		<img id="SideBar" src="public/Central/Images/Games.png"><a href="/games">Games</a>
        <img id="SideBar" src="public/Central/Images/Profile.png"><a href="/profile">Profile</a>
        <img id="SideBar" src="public/Central/Images/Leaderboard.png"><a href="/scoreboard">Scoreboard</a>
        <img id="SideBar" src="public/Central/Images/Settings.png"><a href="/settings">Settings</a>
        <img id="SideBar" src="public/Central/Images/About.png"><a href="/about">About</a>
    </div>
    <div id="RightSide">
		<div class="ContentBox" id="SelectionSetup">
			<div class="MenuElement">
				<label class="usable">Sort by game:</label>
				<select class="usable" id="GamesSort" onchange="SortScores()">
					<option value="0">Select</option>
					<option value="BitCrush">BitCrush</option>
				</select>
			</div>
			<div class="MenuElement">
				<label class="usable">Sort by scores:</label>
				<select class="usable" id="ScoresSort" onchange="SortScores()">
					<option value="user">My Scores</option>
					<option value="friends">Friend Scores</option>
					<option value="all">All Scores</option>
				</select>
			</div>
			<div class="MenuElement">
				<button id="riskButton" onclick="risk()">Enable Risk-Assessment Mode</button>
			</div>
			<div class="MenuElement">
				<label class="usable2">Only show:</label>
				<select class="usable2" id="ScoresCountSort" onchange="SortScores()">
					<option value="10">10</option>
					<option value="20">20</option>
					<option value="40">40</option>
					<option value="1000">All</option>
				</select>
			</div>
			<div class="MenuElement">
				<label class="usable2">Sort by:</label>
				<select class="usable2" id="RiskScores" onchange="SortScores()">
					<option value="hi-score">Best high-score (default)</option>
					<option value="low-score">Lowest high-score</option>
					<option value="avg-score">Lowest average-score</option>
					<option value="attempt-count">Lowest attempt count</option>
				</select>
			</div>
			<div class="MenuElement">
				<button onclick="window.print()">Print results</button>
			</div>
		</div>
		<div class="ContentBox" id="ScoreDisplay">
			<div class="ScoreboardElement">
				<div class="ScoreItem" id="RankLabel">Rank</div>
				<div class="ScoreItem" id="UsernameLabel">Username</div>
				<div class="ScoreItem" id="BestscoreLabel">Best Score</div>
				<div class="ScoreItem" id="AveragescoreLabel">Average Score</div>
				<div class="ScoreItem" id="AttemptcountLabel">Attempt Count</div>
			</div>
		</div>
		<div class="ContentBox" id="ScoreDisplayItems">
		</div>
	</div>
</body>
</html>