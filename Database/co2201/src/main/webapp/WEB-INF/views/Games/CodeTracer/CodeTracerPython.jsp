<!DOCTYPE html>
<html lang = "en">
<head>
 
    <title>Code Tracer Python</title>
    
    <link href="../public/Games/CodeTracer/CodeTracer.css"rel="stylesheet"type="text/css"/>
    <link rel="stylesheet" href="../public/Central/central.css" type="text/css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <!--External fonts are used these are linked here-->
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
 
</head>
<body class="ct-bdy">
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

<div class="grid">
    <div id="topbar">Code Tracer</div>
    <div class="gameMenu">
        <p id="instructions">
            <em>Code Tracer!</em><br> 
            The game that will help you practice you code tracing and debugging skills.<br>
            The game is simple, you will be given a question and 3 codes, from which you must select the code that matches
            what the question is asking for.<br> (Make sure to read the question carefully!)<br>
            You also only get <u>ONE</u> chance, once a answer has been selected it will tell you if you were right or wrong
            and then moves on to the next question. <br>Make sure to look at each code carefully before selecting your answer!
        </p>
        <div class="center-buttons">
            <button id="pyBtn">Python</button>
        </div>
       
    </div>
    <div id="navContent">
        <div id="game1"></div>
        <div id="game2"></div>
    </div>
    
</div>


<script src="../public/Games/CodeTracer/CodeTracer.js"></script>
 

</body>
</html>