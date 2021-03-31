<!DOCTYPE html>
<html lang = "en">
<head>
    <title>Profile</title>
    <!--The profile page stylesheets and JavaScript links-->
    <link rel="stylesheet" href="../public/Central/central.css">
    <link rel="stylesheet" href="../public/Central/Profile/profile.css">
    <script src="https://kit.fontawesome.com/ec00a021e5.js" crossorigin="anonymous"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <!--The page's icon is declared here-->
    <link rel="icon" href="../public/Central/Profile/Profile.png">
    <!--External fonts are used these are linked here-->
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
</head>
<body class="profileBody" onload="StartUpOther()">
<!--The sidebar has been created here-->
    <div class="sidenav">
		<img id="SideBar" src="public/Central/Images/Signin.png"><a href="/signIn">Sign In</a>
		<img id="SideBar" src="public/Central/Images/Games.png"><a href="/games">Games</a>
        <img id="SideBar" src="public/Central/Images/Profile.png"><a href="/profile">Profile</a>
        <img id="SideBar" src="public/Central/Images/Leaderboard.png"><a href="/scoreboard">Scoreboard</a>
        <img id="SideBar" src="public/Central/Images/Settings.png"><a href="/settings">Settings</a>
        <img id="SideBar" src="public/Central/Images/About.png"><a href="/about">About</a>
    </div>
    <!--The profile image section-->
    <div class="container">
        <div class="profileHeader">
            <div class=profileImage>
                <img id="profile-pic" alt="">
            </div>
            <div class="profile-nav">
                <h3 id="username">Username</h3>

            </div>
            
        </div>
        <!--The main area section-->
        <div class="main-bd">
            <div class="left-side">
                <div class="profile-side">
                    <h1 id="full-name">John Smith</h1>
                    <div class="user-info">
                        <i class="fas fa-phone"></i><p id="mobile-no">Add your phone number</p><br>
                        <i class="fas fa-envelope"></i><p id="user-mail">Add your email</p>
                    </div>
                    <div class="user-bio">
                        <h3>Bio</h3>
                        <p id="bio">
                        	Add your Bio  
                        </p>

                    </div>
                    <div class="user-status">
                    	<h3>Status</h3>
                    	<p id="status">
                    		Add your status
                    	</p>
                    </div>
                    <div class="other-users">
                    <h3>Users</h3>
                     <form action="/profileVisitor" method="GET">
					    <select style="display:none" id="UsernameSelection" name="Username"></select>
					    <input type="text" placeholder="Username" name="Username"/>
					    <input id="UsernameSubmit" type="submit" value="Visit User" />
					</form>
					</div>
					<div style="display:none" id="AdminButton">
					<h3 id="PermissionHeader">Permissions</h3>
					<button onclick="PermissionChange()" id="PermissionBtn">Add Role</button>
					<br><label id="Outcome"></label>
					</div>
                </div>
            </div>
            <!--The right side of the profile page-->
            <div class="right-side">
                <div class="profile-tabs">
                    <ul>
                    	<li onclick="tabs(0)" class="user-friends active">Friends</li>
                        <li onclick="tabs(1), CustomGame()" class="user-stats">Stats</li>
                    </ul>  
                </div>
                <div class="profile-body">
                   
                    <div id="friendsSection" class="profile-friends tab">
                        <h1>Your Friends</h1>
                    </div>
                     <div class="profile-stats tab">
                        <h1>Your Statistics</h1>
                        <p id="StatTable">
                        
                        </p>

                    </div>
               </div>
          </div>
          </div>
          </div>
          <p id="Hidden"></p>
        <!--The JavaScript page link-->
    <script src="../public/Central/Profile/profileVisitor.js"></script>
</body>
</html>