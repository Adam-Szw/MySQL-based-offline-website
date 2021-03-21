<!DOCTYPE html>
<html lang = "en">
<head>
    <title>Sign In Page</title>
    <link rel="stylesheet" href="public/Central/central.css">
    <link rel="icon" href="public/Central/Images/Signin.png">
    <link rel="stylesheet" href="public/Central/signinStyle.css">
    <script src="https://kit.fontawesome.com/ec00a021e5.js" crossorigin="anonymous"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
</head>
<body>
	<form action="/login" method="post">
		User Name : <input type="text" name="username" /><br/>
		Password: <input type="password" name="password" /><br/>
		<input type="submit" value="Sign In" /><br/>
		<input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}" />
	</form>
    <div class="sidenav">
		<img id="SideBar" src="public/Central/Images/Signin.png"><a href="/signIn">Sign In</a>
		<img id="SideBar" src="public/Central/Images/Games.png"><a href="/games">Games</a>
        <img id="SideBar" src="public/Central/Images/Profile.png"><a href="/profile">Profile</a>
        <img id="SideBar" src="public/Central/Images/Leaderboard.png"><a href="/scoreboard">Scoreboard</a>
        <img id="SideBar" src="public/Central/Images/Settings.png"><a href="/settings">Settings</a>
        <img id="SideBar" src="public/Central/Images/About.png"><a href="/about">About</a>
    </div>
<div class="login">
  <div class="login_content">
    <div class="login-form">
      <form action="/Login" class="login_register" id="login-in">
        <h1 class="login_title">Sign In</h1>
        <div class="login_box">
          <div class="login_icon">
            <i class="fas fa-at"></i>
          </div>
          
          <input type="text" placeholder="Email" class="login_input" id="SignInEmail">
        </div>
        <div class="login_box">
          <div class="login_icon">
            <i class="fas fa-lock"></i>
          </div>
          
          <input type="password" placeholder="Password" class="login_input" id="SignInPassword">

        </div>

        <a href="#" class="login_forgot" id="forgot">Forgot Password</a>

        <a href="#" onclick="SignInEmailChecker('SignInEmail','SignInPassword')" class="login_button">Sign In</a>

        <div>
          <span class="login_account">Don't have an Account?</span>
          <span class="login_signin" id="sign-up">Sign Up</span>
        </div>
		<input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}" />
      </form>
      <form action="" class="login_create" id="login-up">
        <h1 class="login_title">Create Account</h1>
        <div class="login_box">
          <div class="login_icon">
          <i class="fas fa-user-circle"></i>
          </div>
          <input type="text" placeholder="Username" class="login_input" id="SignUpUsername">
        </div>

        <div class="login_box">
          <div class="login_icon">
          <i class="fas fa-at"></i>
          </div>
          <input type="text" placeholder="Email" class="login_input" id="SignUpEmail">
        </div>

        <div class="login_box">
          <div class="login_icon">
          <i class="fas fa-lock"></i>
          </div>
          <input type="password" placeholder="Password" class="login_input" id="SignUpPassword">
        </div>

        <a href="#" onclick="SignUpEmailChecker('SignUpUsername','SignUpEmail', 'SignUpPassword')" class="login_button">Sign Up</a>

        <div>
          <span class="login_account">Already have an Account?</span>
          <span class="login_signup" id="sign-in">Sign In</span>
        </div>

      </form>
      <form action="" class="login_forgotten" id="login-fp">
        <h1 class="login_title">Forgot Password</h1>
        <div class="login_box">
          <div class="login_icon">
            <i class="fas fa-at"></i>
          </div>
          
          <input type="text" placeholder="Email" class="login_input" id="ForgottenEmail">
        </div>
        
        <a href="#" onclick="ForgotEmailChecker('ForgottenEmail')" class="login_button">Send Request</a>

        <div>
          <span class="login_account">Already have an Account?</span>
          <span class="login_signup" id="sign-inFP">Sign In</span>
        </div>
      </form>
    </div>
  </div>
</div>
   



<script src="public/Central/signinJS.js"></script>


</body>
</html>