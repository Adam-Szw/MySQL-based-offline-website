<!DOCTYPE html>
<html lang = "en">
<head>
    <title>Landing Page</title>
    <!--The CSS & the JS page links-->
    <link rel="stylesheet" href="public/Central/central.css">
    <link rel="icon" href="public/Central/Images/SignIn.png">
    <link rel="stylesheet" href="../public/Central/About/about.css">
    <script src="../public/Central/MainPage/mainpage.js"></script>
    <!--External fonts are used these are linked here-->
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
</head>
<body onload="RandomFact()">
     <!--The sidenav contains all of the links to the other pages-->
    <div class="sidenav">
	  	<img id="SideBar" src="public/Central/Images/Signin.png"><a href="/signIn">Sign In</a>
		<img id="SideBar" src="public/Central/Images/Games.png"><a href="/games">Games</a>
        <img id="SideBar" src="public/Central/Images/Profile.png"><a href="/profile">Profile</a>
        <img id="SideBar" src="public/Central/Images/Leaderboard.png"><a href="/scoreboard">Scoreboard</a>
        <img id="SideBar" src="public/Central/Images/Settings.png"><a href="/settings">Settings</a>
        <img id="SideBar" src="public/Central/Images/About.png"><a href="/about">About</a>
    </div>
	<!--This area contains the page title and the page description-->
	<div class="TopBox" id="PageAreaMainPage">
		<div id="StartUpPage">
			<h1 id="ProjectAbout">Welcome to the Computer Science Games Landing Page!</h3>
			<h3>This website contains games about HTML, CSS, Python & Java</h3>
			<h4>To continue please sign in!</h4>
			<div id="RandomFact">
				<table id="FactTable">
					<tr>
					<td style="font-size:25px;" colspan="2">Did you know that?</td>
					</tr>
					<tr id="FactArea">
					
					</tr>
				</table>
			</div>
		</div>
	</div>
</body>
</html>