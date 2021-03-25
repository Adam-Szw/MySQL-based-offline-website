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
<body class="profileBody" onload="StartUp()">
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
                        <i class="fas fa-phone"></i><p id="mobile-no">+447534xxxx546</p><br>
                        <i class="fas fa-envelope"></i><p id="user-mail">someone@example.com</p>
                    </div>
                    <div class="user-bio">
                        <h3>Bio</h3>
                        <p id="bio">
                            Some text Some text Some text
                            Some text Some text Some text
                            Some text Some text Some text
                            Some text Some text Some text
                            Some text Some text Some text
                        </p>

                    </div>
                    
                </div>
            </div>
            <!--The right side of the profile page-->
            <div class="right-side">
                <div class="profile-tabs">
                    <ul>
                    	<li onclick="tabs(0)" class="user-friends active">Friends</li>
                        <li onclick="tabs(1), CustomGame()" class="user-stats">Stats</li>
                        <li onclick="tabs(2)" class="user-settings">Settings</li>
                    </ul>
                </div>
                <div class="profile-body">
                   
                    <div class="profile-friends tab">
                        <h1>Your Friends</h1>
                        <p>Some text Some text Some text
                            Some text Some text Some text
                            Some text Some text Some text
                            Some text Some text Some text
                            Some text Some text Some text
                            Some text Some text Some text
                            Some text Some text Some text
                            Some text Some text Some text
                            Some text Some text Some text
                            Some text Some text Some text
                        </p>

                       
                    </div>
                     <div class="profile-stats tab">
                        <h1>Your Statistics</h1>
                        <p id="StatTable">
                        
                        </p>

                    </div>
                    <!--The profile settings tab area-->
                    <div class="profile-settings tab">
                        <div class="profile-settings-body">
                            <h1>Profile Settings</h1>
                            <div class="change-details">
                                <h3 class="section-title">
                                    Edit Details
                                </h3>
                                <button type="submit" class="save-details" name="submitBtn" onclick="saveUserData()">Save</button>
                            <div class="grid-profile-container">
                                <div class="form-group">
                                    <label class="form-label">Name</label>
                                    <input type="text" id="user-name" class="form-in" placeholder="Name"/>
                                </div>
                                <div class="form-group">
                                    <label class="form-label">Surname</label>
                                    <input type="text" id="user-surname" class="form-in" placeholder="Surname"/>
                                </div>
                                    
                                <div class="form-group">
                                    <label class="form-label">Email</label>
                                    <input type="text" id="user-email" class="form-in" placeholder="Email"/>
                                </div>
                                    
                                <div class="form-group">
                                    <label class="form-label">Phone</label>
                                    <input type="text" id="user-phone" class="form-in" placeholder="Phone"/>
                                </div>
                            </div>
                            </div>
							<!--The change profile picture section-->
                            <div class="change-pic">
                                <h3 class="section-title">Upload a profile picture</h3>
                                <label for="imageUpload" class="file-upload">
                                     Upload
                                </label>
                                <input id="imageUpload" type="file" name="profile_photo" placeholder="Photo"/>
                            </div>
        					<!--The change profile colours section-->
                            <div class="pro-bg-box">
                                <h3 class="section-title">Change profile colours</h3>
                                <p>Side profile:</p>
                                <select class="profile-backgorund" name="bgcolor">
                                    <option value="#daf5cf">lime-green</option>
                                    <option value="red">red</option>
                                    <option value="blue">blue</option>
                                    <option value="green">green</option>
                                </select>
                                <br>
                                <!--The profile text colour section-->
                                <p>Profile text:</p>
                                <select class="profile-text" name="textcolor">
                                    <option value="black">black</option>
                                    <option value="red">red</option>
                                    <option value="blue">blue</option>
                                    <option value="green">green</option>
                                    <option value="#daf5cf">lime-green</option>
                                </select>
                                <br>
								<!--The profile header colour section-->
                                <p>Profile header:</p>
                                <select class="profile-header-colour" name="headercolor">
                                    <option value="#daf5cf">lime-green</option>
                                    <option value="red">red</option>
                                    <option value="blue">blue</option>
                                    <option value="green">green</option>
                                </select>
                           </div>   
                        </div>
                        </div>   
                    </div>
                </div>
            </div>
        </div>
        <!--The JavaScript page link-->
    <script src="../public/Central/Profile/profile.js"></script>
</body>
</html>