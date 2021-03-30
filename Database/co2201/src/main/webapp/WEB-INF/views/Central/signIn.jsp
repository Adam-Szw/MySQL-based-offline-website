<!DOCTYPE html>
<html lang = "en">
<head>
	<!--The SignIn Page title-->
    <title>Sign In Page</title>
    <!--SignIn Page stylesheet links-->
    <link rel="stylesheet" href="../public/Central/central.css">
    <link rel="stylesheet" href="../public/Central/SignIn/signIn.css">
    <!--The SignIn Page icon-->
    <link rel="icon" href="../public/Central/Images/Signin.png">
    <!--The external font links-->
    <script src="https://kit.fontawesome.com/ec00a021e5.js" crossorigin="anonymous"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
</head>
<body>
<!--The page's sidebar-->
    <div class="sidenav">
		<img id="SideBar" src="public/Central/Images/Signin.png"><a href="/signIn">Sign In</a>
		<img id="SideBar" src="public/Central/Images/Games.png"><a href="/games">Games</a>
        <img id="SideBar" src="public/Central/Images/Profile.png"><a href="/profile">Profile</a>
        <img id="SideBar" src="public/Central/Images/Leaderboard.png"><a href="/scoreboard">Scoreboard</a>
        <img id="SideBar" src="public/Central/Images/Settings.png"><a href="/settings">Settings</a>
        <img id="SideBar" src="public/Central/Images/About.png"><a href="/about">About</a>
    </div>
<!--The content of the website-->
<div class="login">
    	<div class="login_content">
    	<!--The log in section of the page-->
    		<div class="login-form">
    			<form action="/login" method="post" class="login_register" id="login-in">
    				<h1 class="login_title">Sign In</h1>
    				<!--Login Box for the username-->
    				<div class="login_box">
    					<div class="login_icon">
    						<i class="fas fa-user-circle"></i>
    					</div>
    					<input type="text" placeholder="Username" name="username" class="login_input" id="SignInUserName">
    				</div>
    				<label class="ErrorMessage">Incorrect username</label>
    				<!--Password Login Box-->
    				<div class="login_box">
    					<div class="login_icon">
            				<i class="fas fa-lock"></i>
         				</div>
          				<input type="password" placeholder="Password" name="password" class="login_input" id="SignInEmail">
        			</div>
        			<label class="ErrorMessage">Incorrect password</label>
        			<input type="submit" class="login_button" id="signIn_button" onclick ="SignInEmailChecker('SignInUserName','SignInEmail')" value="Sign In"><br/>
        			<input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}">

        			<a href="#" class="login_forgot" id="forgot">Forgot Password</a>
        			<div>
        			<!--Links to the other sign up areas-->
          				<span class="login_account">Don't have an Account?</span>
          				<span class="login_signin" id="sign-up">Sign Up</span>
        			</div>
      			</form>
      			<!--The sign up section of the webpage-->
      			<form action="/signIn/newUser"  method="POST" class="login_create" id="login-up">
        			<h1 class="login_title">Create Account</h1>
        			<!--Username Login Box-->
        			<div class="login_box">
          				<div class="login_icon">
          					<i class="fas fa-user-circle"></i>
          				</div>
          				<input type="text" placeholder="Username" name="username" class="login_input" id="newUsername">
        			</div>
        			<!--First name Login Box-->
        			<div class="login_box">
          				<div class="login_icon">
          					<i class="fas fa-user-circle"></i>
          				</div>
          				<input type="text" placeholder="First Name" name="firstname" class="login_input" id="newFirstName">
        			</div>
        			<!--Last name Login Box-->
        			<div class="login_box">
          				<div class="login_icon">
          					<i class="fas fa-user-circle"></i>
          				</div>
          				<input type="text" placeholder="Last Name" name="lastname" class="login_input" id="newLastName">
        			</div>
        			<!--Password Login Box-->
        			<div class="login_box">
          				<div class="login_icon">
          					<i class="fas fa-lock"></i>
          				</div>
          				<input type="password" placeholder="Password" name="password" class="login_input" id="newPassword">
        			</div>
        			<!--The signup button-->
        				<input type="submit" class="login_button" onclick="createNewUser()" id="signUp_button" value="Sign Up" name="signup" /><br/>
        				<!--<a href="#" onclick="SignUpEmailChecker('SignUpUsername','SignUpEmail', 'SignUpPassword')" class="login_button">Sign Up</a>-->
        		    <div>
        		    <!--Links to the other sign up areas-->
        		    	<span class="login_account">Already have an Account?</span>
        		    	<span class="login_signup" id="sign-in">Sign In</span>
       				</div>
      			</form>
      			<!--The forgotten password section of the webpage-->
      			<form action="" class="login_forgotten" id="login-fp">
        			<h1 class="login_title">Forgot Password</h1>
        			<!--Entry box for the password-->
        			<div class="login_box">
          				<div class="login_icon">
          			  		<i class="fas fa-at"></i>
          				</div>
          				<input type="text" placeholder="Email" class="login_input" id="ForgottenEmail">
        			</div>
        				<a href="#" onclick="ForgotEmailChecker('ForgottenEmail')" class="login_button">Send Request</a>
        			<div>
        			<!--Links to the other sign up areas-->
          				<span class="login_account">Already have an Account?</span>
          				<span class="login_signup" id="sign-inFP">Sign In</span>
        			</div>
      			</form>
    		</div>
  		</div>
	</div>
<!--The sign in page JavaScript page link--> 
<script src="../public/Central/SignIn/signIn.js"></script>
</body>
</html>