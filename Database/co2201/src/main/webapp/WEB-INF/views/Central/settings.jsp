<!DOCTYPE html>
<html lang = "en">
<head>
	<!--The page title-->
    <title>Settings</title>
	<!--The settings page stylesheets-->
    <link rel="stylesheet" href="../public/Central/Settings/settings.css">
    <link rel="stylesheet" href="../public/Central/central.css">
	<!--The settings page icon-->
    <link rel="icon" href="../public/Central/Images/Settings.png">
    <!--External fonts are used these are linked here-->
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script>

    /*This function is called when the small label is clicked on*/
    function small() {
        var element = document.body;
        element.classList.toggle("small");
    }

    /*This function is called when the medium label is clicked on*/
    function medium() {
        var element = document.body;
        element.classList.toggle("medium");
    }

    /*This function is called when the large label is clicked on*/
    function large() {
        var element = document.body;
        element.classList.toggle("large");
    }

    /*This function is called when the switch is changed to the dark mode*/
    function darkmode() {
        var element = document.body;
        element.classList.toggle("dark-mode");
    }

    function serif() {
    	var element = document.body;
    	element.classList.toggle("serif");
    }

    function sansserif() {
    	var element = document.body;
    	element.classList.toggle("sansserif");
    }
	function bold() {
		var element = document.body;
		element.classList.toggle("bold");
	}
</script>   
</head>
<body>
<!--The page taskbar-->
    <div class="sidenav">
	  	<img id="SideBar" src="public/Central/Images/Signin.png"><a href="/signIn">Sign In</a>
		<img id="SideBar" src="public/Central/Images/Games.png"><a href="/games">Games</a>
        <img id="SideBar" src="public/Central/Images/Profile.png"><a href="/profile">Profile</a>
        <img id="SideBar" src="public/Central/Images/Leaderboard.png"><a href="/scoreboard">Scoreboard</a>
        <img id="SideBar" src="public/Central/Images/Settings.png"><a href="/settings">Settings</a>
        <img id="SideBar" src="public/Central/Images/About.png"><a href="/about">About</a>
    </div>
    <!--The settings page content-->
    <div class="TopBox" id="PageArea">
       <div id="SettingsContent">
        <h1>Settings</h1>
        <table>
        <!--The colour scheme section-->
        <tr><td></td><td>Colour Scheme:</td><td>
        <div onselectstart="return false" class="darkbutton">
            <label class="switch">
                <label for="mode" id = "light">Light Mode</label>
                <label for="mode" id = "dark">Dark Mode</label>
                <input type="checkbox" id = "mode" onclick = "darkmode()">
                <span class="slider"></span>
            </label>   
            </div></td><td></td>
        </tr>
        <!--The text settings section-->
        <tr>
            <td>Text Settings:</td>
            <td>
            <div onselectstart="return false" class="textsize">
                <button class="dropbtn">Text Size</button>
                <div id="size" class ="content">
                    <p onclick = "small()">Small </p>
                    <p onclick = "medium()">medium </p>
                    <p onclick = "large()">large </p>
                </div>
            </div></td>
             <td>Text Type:</td>
            <td>
                <div onselectstart="return false" class="textsize">
                    <button class="dropbtn">Text Type</button>
                    <div id="text" class ="content">
                        <p onclick = "serif()">Serif </p>
                        <p onclick = "sansserif()">Sans-Serif </p>
                        <p onclick = "bold()">Bold </p>
                    </div>
                </div>
            </td>
            </tr>
        <!--The save settings section-->  
        <tr>
            <td colspan="4"><button id="SaveSettings">Save Settings</button></td>
        </tr>
        </div>
        </table> 
    </div>
</body>
</html>