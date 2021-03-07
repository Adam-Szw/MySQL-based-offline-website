

//Show the sign in form by hiding the create account form
$('#login-up').hide();


//When sign up text button is clicked
$('#sign-up').click(function(e){
    e.preventDefault();
    $(this).addClass('active');
    //Show the create account form
    $('#login-up').show();
    //Hide the sign in form
    $('#login-in').hide();

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



