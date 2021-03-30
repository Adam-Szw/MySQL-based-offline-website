/*The Sign In Page Styles*/

//Show the sign in form by hiding the create account form
$('#login-up').hide();
$('#login-fp').hide();


//When sign up text button is clicked
$('#sign-up').click(function(e){
    e.preventDefault();
    $(this).addClass('active');
    //Show the create account form
    $('#login-up').show();
    //Hide the sign in form
    $('#login-in').hide();

})

//When sign up text button is clicked
$('#sign-inFP').click(function(e){
    e.preventDefault();
    $(this).addClass('active');
    //Show the create account form
    $('#login-in').show();
    //Hide the sign in form
    $('#login-fp').hide();

})


//When sign in text button is clicked
$('#sign-in').click(function(e){
    e.preventDefault();
    $(this).addClass('active');
    //Show the sign in form
    $('#login-in').show();
    //Hide the create account form
    $('#login-up').hide();

})

$('#forgot').click(function(e){
    e.preventDefault();
    $(this).addClass('active');
    $('#login-fp').show();
    $('#login-in').hide();
})

//This function uses REGEX to check that the entered email is in the correct format
function EmailCheck(UserEmail) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(UserEmail);
}

//This function is called when the Sign In button is clicked on
function SignInEmailChecker(EmailBox, PasswordBox) {
    var UserEmail = document.getElementById(EmailBox).value;
    var UserPassword = document.getElementById(PasswordBox).value;
    //The sign in email checker has two components, their email address and their password.
    if (UserEmail == "") {
    	document.getElementsByClass("ErrorMessage")[0].style.display = "Block";
    }
    if (UserPassword =="") {
    	document.getElementsByClass("ErrorMessage")[1].style.display = "Block";
    }
}

//This function is called when the Sign Up button is clicked on
function SignUpEmailChecker(UsernameBox, EmailBox, PasswordBox) {
    var UserEmail = document.getElementById(EmailBox).value;
    var UserPassword = document.getElementById(PasswordBox).value;
    var UserUsername = document.getElementById(UsernameBox).value;
    //The sign up area has three elements, the user's email, the user's password and their username.
    if (UserUsername !='') {
        alert("Good Username")
        if (EmailCheck(UserEmail) == true) {
            alert("Good Email")
            if (UserPassword !='') {
                alert("Good Password")
            }
        }
        else {
            alert("Bad Email")
        }
    }
}

//This function is called when the Forgot Password button is clicked on
function ForgotEmailChecker(EmailBox) {
    var UserEmail = document.getElementById(EmailBox).value;
    //Forget password only has one field, the user's email address
    if (EmailCheck(UserEmail) == true) {
        alert("Good Email")
    }
    else {
        alert("Bad Email")
    }
}

//Function to create the new user, sends the form details of the user to be created
function createNewUser(){
	var username = document.getElementById('newUsername').value;
	var firstName = document.getElementById('newFirstName').value;
	var lastName = document.getElementById('newLastName').value;
	var password = document.getElementById('newPassword').value;
	
	console.log(username);
	
    const Http = new XMLHttpRequest();
	const url='/signIn/newUser?username='+username+'&firstname='+firstName+'&lastname='+lastName+'&password='+password;
	Http.open("POST", url);
	Http.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
	Http.setRequestHeader("Access-Control-Allow-Origin", "*");
	Http.send();
}
