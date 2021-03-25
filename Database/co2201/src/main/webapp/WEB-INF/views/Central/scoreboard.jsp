<!DOCTYPE html>
<html lang = "en">
<head>
    <title>Scoreboard</title>
    <link rel="stylesheet" href="../public/Central/central.css">
    <link rel="stylesheet" href="../public/Central/Scoreboard/scoreboard.css">
	<script src = "../public/Central/Scoreboard/scoreboard.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
</head>

<body>
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
				</select>
			</div>
			<div class="MenuElement">
				<label class="usable">Sort by scores:</label>
				<select class="usable" id="ScoresSort" onchange="SortScores()">
					<option value="0">Select</option>
					<option value="1">My Scores</option>
					<option value="2">Friend Scores</option>
					<option value="3">All Scores</option>
				</select>
			</div>
			<div class="MenuElement">
				<button>Enable Risk-Assessment Mode</button>
			</div>
			<div class="MenuElement">
				<label class="usable">Only show:</label>
				<select class="usable" id="ScoresCountSort" onchange="SortScores()">
					<option value="0">10</option>
					<option value="1">20</option>
					<option value="2">40</option>
					<option value="3">All</option>
				</select>
			</div>
			<div class="MenuElement">
				<label class="usable">Sort by:</label>
				<select class="usable" id="RiskScores" onchange="SortScores()">
					<option value="0">Best high-score (default)</option>
					<option value="1">Lowest high-score</option>
					<option value="2">Lowest average-score</option>
					<option value="3">Lowest attempt count</option>
				</select>
			</div>
		</div>
		<div class="ContentBox" id="ScoreDisplay">
			<div class="ScoreboardElement">
				<div class="ScoreItem" id="Rank">Rank</div>
				<div class="ScoreItem" id="Username">Username</div>
				<div class="ScoreItem" id="Bestscore">Best Score</div>
				<div class="ScoreItem" id="Averagescore">Average Score</div>
				<div class="ScoreItem" id="Attemptcount">Attempt Count</div>
			</div>
		</div>
		<div class="ContentBox" id="ScoreDisplay">
			<div class="ScoreboardElement">
				<div class="ScoreItem" id="Rank">1</div>
				<div class="ScoreItem" id="Username">Adam</div>
				<div class="ScoreItem" id="Bestscore">25</div>
				<div class="ScoreItem" id="Attemptcount">11</div>
				<div class="ScoreItem" id="Averagescore">14</div>
				<div class="ScoreItem" id="FullDetails"><button>Click here to see all attempts</button></div>
			</div>
			<div class="ScoreboardElement">
				<div class="ScoreItem" id="Rank">2</div>
				<div class="ScoreItem" id="Username">Alex</div>
				<div class="ScoreItem" id="Bestscore">25</div>
				<div class="ScoreItem" id="Attemptcount">23</div>
				<div class="ScoreItem" id="Averagescore">12</div>
				<div class="ScoreItem" id="FullDetails"><button>Click here to see all attempts</button></div>
			</div>
		</div>
	</div>
</body>
</html>