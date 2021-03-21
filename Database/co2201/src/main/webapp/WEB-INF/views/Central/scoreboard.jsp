<!DOCTYPE html>
<html lang = "en">
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Scoreboard</title>
    <link rel="stylesheet" href="CentralHub/scoreboard.css">
    <link rel="icon" href="CentralHub/Images/Leaderboard.png">
    <!--External fonts are used these are linked here-->
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet">
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

    <img id="ScoreboardPic" src="Images/scores.png">

<div class="header">
    <div id="SortByGames">
        <label>Sort by games:</label>
        <select>
            <option value="py">Python</option>
            <option value="html">HTML</option>
            <option value="css">CSS</option>
            <option value="java">Java</option>
        </select></div>
    <div class ="scoreFilter">
        <button class="top10">Top 10</button>
        <button class="friends">Friends</button>
        <button class="allscores">All Scores</button>
    </div>
    <div class="topRow">
        <div>Rank</div>
        <div>Name</div>
        <div>Correct answers</div>
        <div>Wrong answers</div>
        <div>Total Scores</div>
    </div>
</div>

<div class="wrapper">
    <div class="rows">
        <div><img id="crowns" src="Images/Crown 1.png"></div>
        <div><img id="userImg" src="Images/userPic.jpg">Student A</div>
        <div><img id="rightPic" src="Images/right.png"> 220</div>
        <div><img id="wrongPic" src="Images/wrong.jpg">20</div>
        <div> <img id="scorePic" src="Images/totScore.png"> 200</div>

        <div><img id="crowns" src="Images/crown 2.jpg"></div>
        <div><img id="userImg" src="Images/userPic.jpg">Student B</div>
        <div><img id="rightPic" src="Images/right.png">220</div>
        <div><img id="wrongPic" src="Images/wrong.jpg">40</div>
        <div><img id="scorePic" src="Images/totScore.png">180</div>

        <div><img id="crowns" src="Images/crown 3.jpg"></div>
        <div><img id="userImg" src="Images/userPic.jpg">Student C</div>
        <div><img id="rightPic" src="Images/right.png">200</div>
        <div><img id="wrongPic" src="Images/wrong.jpg">30</div>
        <div><img id="scorePic" src="Images/totScore.png">170</div>        
    </div>
</div>

<div class="extraWrapper">
    
    <div class="extras">
        <div>4th</div>
        <div><img id="userImg" src="Images/userPic.jpg">Student D</div>
        <div><img id="rightPic" src="Images/right.png">200</div>
        <div><img id="wrongPic" src="Images/wrong.jpg">35</div>
        <div><img id="scorePic" src="Images/totScore.png">165</div>
    </div>

</div>
</body>
</html>