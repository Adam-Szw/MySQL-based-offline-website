/*The profile page JavaScript page*/

$('.profile-tabs ul li').click(function() {
    $(this).addClass("active").siblings().removeClass();
})

const tabbtn = document.querySelectorAll('.profile-tabs ul li');

const tab = document.querySelectorAll('.tab');

function tabs(panelIndex){
    tab.forEach(function(node){
        node.style.display = 'none';
    });
    tab[panelIndex].style.display = 'block';
}
tabs(0);

// binds the change to a select element (_ALL_ select elements):
$('.profile-backgorund').change(function () {
    // assigns the value of the selected option to the 'color' variable
    var color = $(this).val()

    /* changes the CSS of the '#selectBox' element, to set the color
       and updates the text of that element to reflect the chosen option/color:
    */
    $('.profile-side').css('background-color', color);

// triggers the change event, to trigger the change-handler on page-load/DOMready
}).change();


$('.profile-text').change(function () {  
    var color = $(this).val()
    $('.profile-side').css('color', color);
    $('.user-info p').css('color', color);
    $('#bio').css('color', color);

}).change();

$('.profile-header-colour').change(function () {
    var color = $(this).val()
    $('.profileHeader').css('background-color', color);
}).change();

function fasterPreview(uploader){
    if(uploader.files && uploader.files[0]){
        $('#profile-pic').attr('src', window.URL.createObjectURL(uploader.files[0]));
    }
}
$('#imageUpload').change(function(){
    fasterPreview(this);
});



function saveUserData(){
    var name = document.getElementById('user-name').value;
    var surname = document.getElementById('user-surname').value;
    document.getElementById('full-name').innerHTML = "";
    $("#full-name").append(name+" "+surname);

    var email = document.getElementById('user-email').value;
    document.getElementById('user-mail').innerHTML = "";
    $("#user-mail").append(email);

    var phone = document.getElementById('user-phone').value;
    document.getElementById('mobile-no').innerHTML = "";
    $("#mobile-no").append(phone);
}

loggedPlayerId = 0;

function LogOn() {
 		//Logon the player
		const Http = new XMLHttpRequest('GET');
		const url='/games/userId';
		Http.open("GET", url);
		
		Http.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
		Http.setRequestHeader("Access-Control-Allow-Origin", "*");
		Http.send();
		
		Http.onreadystatechange = (e) => {
		  loggedPlayerId = Http.responseText;
		}
}

function LoadStats() {
        var url2='/Profile/GetUserStats/'+loggedPlayerId;
        var xhttp = new XMLHttpRequest();
        xhttp.open("GET", url2);
		xhttp.send();
		xhttp.onreadystatechange = function() {
		    if (this.readyState == 4 && this.status == 200) {
		       console.log(xhttp.responseText);
		       document.getElementById("StatTable").innerHTML = "";
		       $("#StatTable").append(xhttp.responseText);
		       var Stats = document.getElementById("StatTable").value;
		    }
		};
}
var Reload = false;
var Data = [];
function CustomGame() {
	Data = document.getElementById("StatTable").innerHTML;
		if (Data == "[]" | Data =="No Statistics Available!") {
			document.getElementById("StatTable").innerHTML = "No Statistics Available!";
		}
		else {
			if (Reload == false) {
			Reload = true;
			Sorter();
			HTMLElement = "<table><tr id='Header'><td>Game ID</td><td>Game Name</td><td>Score</td><td>Date</td></tr><tr>"
			
			var i;
			Count = 0;
			for (i = 0; i < ItemList.length; i++) {
			/*Each game has a length of 10*/
				if (Count === 8) {
					Count = Count+1
					continue;
				}
				else if (Count ===9) {
					Count = 0;
					continue;
				}
				else if (i%10 ==0 & i !=0) {
					HTMLElement = HTMLElement + "</tr><tr>"
				}
				else if (i != 0 & i%2 ==1) {
			  			HTMLElement = HTMLElement + "<td>"+ItemList[i]+"</td>";
			  	}
			  	Count = Count +1
			  }	 
			}
			HTMLElement = HTMLElement + "</tr></table>"
			document.getElementById("StatTable").innerHTML = HTMLElement;
			}
}
 
 
var ItemList = [];
function Sorter() {
    //ItemList is reset at the start of the function
    ItemList = [];
    var String = "";
    //The custom game area starts by stripping the invalid chars
    for (i =0; i<Data.length; i++) {
        var Char = Data[i];
        if ( Char == '"' | Char == ',' |Char == '[' | Char ==']' | Char=='}' | Char=='{' | Char==':') {
            //If the ItemList length isnt 0 then the item is pushed to the list
            if (String.length != 0) {
               ItemList.push(String); 
            }
            String = "";
        }
        else {
            //If the char is valid it is added to the existing string
            String = String.concat(Char)
       
        }
    }
    }
 
 
 
 function StartUp() {
 	LogOn();
 	LoadStats();
 }

//Gets the username and displays it
function getUsername(){
	var request = new XMLHttpRequest('GET');
	
	const url='/profile/username';
	request.open("GET", url);
	request.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
	request.setRequestHeader("Access-Control-Allow-Origin", "*");
	request.send();
	
	
	request.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
			document.getElementById('username').innerHTML = "";
			$("#username").append(this.responseText);
            console.log(this.responseText);
		

        }
    };
	
}

//Gets the first and last name and displays it
function getName(){

	var request = new XMLHttpRequest('GET');
	
	const url='/profile/name';
	request.open("GET", url);
	request.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
	request.setRequestHeader("Access-Control-Allow-Origin", "*");
	request.send();
	

	request.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
			document.getElementById('full-name').innerHTML = "";
			$("#full-name").append(this.responseText);
            console.log(this.responseText);
		
        }
    };
	
}

//Get the phone number and displays it
function getPhone(){
	var request = new XMLHttpRequest('GET');
	
	const url='/profile/phone';
	request.open("GET", url);
	request.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
	request.setRequestHeader("Access-Control-Allow-Origin", "*");
	request.send();
	

	request.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
			if(this.responseText == 0){
			
			}
			
			else{
				document.getElementById('mobile-no').innerHTML = "";
				$("#mobile-no").append(this.responseText);
				console.log(this.responseText);
				
			}

        }
    };
	
}

//Gets the email and displays it
function getEmail(){
	var request = new XMLHttpRequest('GET');
	
	const url='/profile/email';
	request.open("GET", url);
	request.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
	request.setRequestHeader("Access-Control-Allow-Origin", "*");
	request.send();
	
	
	request.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
			if(this.responseText === ""){
				
			}
			else{
				document.getElementById('user-mail').innerHTML = "";
				$("#user-mail").append(this.responseText);
				console.log(this.responseText);
			}
			
			

        }
    };
	
}

//Gets the bio and displays it
function getBio(){
	var request = new XMLHttpRequest('GET');
	
	const url='/profile/bio';
	request.open("GET", url);
	request.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
	request.setRequestHeader("Access-Control-Allow-Origin", "*");
	request.send();

	
	request.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
			if(this.responseText === ""){
				
			}
			else{
				document.getElementById('bio').innerHTML = "";
				$("#bio").append(this.responseText);
				console.log(this.responseText);
			}

        }
    };
	
}

//functions for retriving and displaying user details being called
getUsername();
getName();
getPhone();
getEmail();
getBio();

//Function to save user phone number and email
function saveUserData(loggedPlayerID){
    var email = document.getElementById('user-email').value;
    var phone = document.getElementById('user-phone').value;
	//console.log(phone);
	if(phone === ""){
		phone = 0;
		
	}
	if(email === ""){
		email = "n";
	}

	const Http = new XMLHttpRequest();
	const url='/profile/saveDetails?userId='+loggedPlayerID+'&phoneNo='+phone+'&email='+email;
	Http.open("GET", url);
	Http.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
	Http.setRequestHeader("Access-Control-Allow-Origin", "*");
	Http.send();
	
	setTimeout(function(){
		getPhone();
		getEmail();
		document.getElementById('user-email').value = '';
		document.getElementById('user-phone').value = '';
	},1000)
	
	
		
	
}

//Function to save user bio
function saveUserBio(loggedPlayerID){
	
	
	var bio = document.getElementById('user-bio').value;
	//console.log(bio);

	const Http = new XMLHttpRequest();
	const url='/profile/saveBio?userId='+loggedPlayerID+'&bio='+bio;
	Http.open("GET", url);
	Http.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
	Http.setRequestHeader("Access-Control-Allow-Origin", "*");
	Http.send();
	
	setTimeout(function(){
		getBio();
	},1000)
	

	

}

//Function to save the new password
function saveUserPassword(loggedPlayerID){
	
	
	var password = document.getElementById('user-password').value;
	//console.log(password);

	const Http = new XMLHttpRequest();
	const url='/profile/savePassword?userId='+loggedPlayerID+'&password='+password;
	Http.open("GET", url);
	Http.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
	Http.setRequestHeader("Access-Control-Allow-Origin", "*");
	Http.send();
	
	setTimeout(function(){
		location.reload();
		return false;
	},1000)
	

}


//Function to get current logged in player ID
function getPlayerID (whenDone){
	var loggedPlayerId;
	setTimeout(function () {
		var logPlayerRequest = new XMLHttpRequest();
		const urlA='/games/userId';
		logPlayerRequest.open('GET',urlA);
		logPlayerRequest.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
		logPlayerRequest.setRequestHeader("Access-Control-Allow-Origin", "*");
		logPlayerRequest.send();
		logPlayerRequest.onreadystatechange = function(){
		if (logPlayerRequest.readyState === 4) {
			if (logPlayerRequest.status === 200){
				loggedPlayerId = logPlayerRequest.responseText;
				whenDone(loggedPlayerId);
				}
			} // request is done
		}

      }, 10);
}

//Function to save the data on button click
function sendData(){
	getPlayerID(saveUserData);
}

//Function to save the bio on button click
function sendBio(){
	getPlayerID(saveUserBio);
}

//Function to update the password
function sendPassword(){
	getPlayerID(saveUserPassword);	
}









