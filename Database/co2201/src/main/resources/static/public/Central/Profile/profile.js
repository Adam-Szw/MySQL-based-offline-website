/* Load friends */
function getFriends()
{
	const Http = new XMLHttpRequest();
	const url='/profile/getFriends';
	Http.open("GET", url);
	Http.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
	Http.setRequestHeader("Access-Control-Allow-Origin", "*");
	Http.send();

	Http.onreadystatechange = function() 
	{
		if (this.readyState == 4)
		{
			var listString = Http.responseText;
			var lines = listString.split("\n");
			for(var i = 0; i < lines.length; i++)
			{
				if(lines[i]!="")
				{
					var newElement = document.createElement("p");
					var newElement2 = document.createElement("button");
					var newElement3 = document.createElement("button");
					var splitStr = lines[i].split("|");
					newElement.innerHTML = splitStr[1];
					var newElement2sub = document.createElement("a");
					newElement2sub.setAttribute("href", "/profileVisitor?Username="+(splitStr[0]).toString());
					newElement2sub.innerHTML = "Show profile";
					newElement2.appendChild(newElement2sub);
					var newElement3sub = document.createElement("a");
					newElement3sub.setAttribute("href", "/profile/removeFriend?friendUsername="+(splitStr[0]).toString());
					newElement3sub.innerHTML = "Remove friend";
					newElement3.appendChild(newElement3sub);
					var mainElement = document.getElementById("friendsSection");
					mainElement.appendChild(newElement);
					mainElement.appendChild(newElement2);
					mainElement.appendChild(newElement3);
				}
			}
		}
	}
}

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

function LogOnPersonal() {
 		//Logon the player
		const Http = new XMLHttpRequest('GET');
		const url='/games/userId';
		Http.open("GET", url);
		Http.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
		Http.setRequestHeader("Access-Control-Allow-Origin", "*");
		Http.send();

		Http.onreadystatechange = function() {
		if (this.readyState == 4)
		{
			loggedPlayerId = Http.responseText;
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
		}
		}
}


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
			document.getElementById("StatTable").innerHTML = "";
			Reload = true;
			Sorter();
			SelectElement = "<select id='gamesorter' onchange='SortingByGame()'><option>Options</option>";
			SelectList = []
			HTMLElement = "<table><tr id='Header'><td>Game ID</td><td>Game Name</td><td>Score</td><td>Date</td></tr><tr class='dataRow'>"
			
			var i;
			Count = 0;
			for (i = 0; i < ItemList.length; i++) {
			/*Each game has a length of 10*/
				if (Count == 3) {
					if (!SelectList.includes(ItemList[i])) {
						SelectList.push(ItemList[i]);
						SelectElement = SelectElement + "<option>"+ItemList[i]+"</option>"
					}
				}
			
				
				if (Count === 8) {
					Count = Count+1
					continue;
				}
				else if (Count ===9) {
					Count = 0;
					continue;
				}
				else if (i%10 ==0 & i !=0) {
					HTMLElement = HTMLElement + "</tr><tr class='dataRow'>"
				}
				else if (i != 0 & i%2 ==1) {
					if (Count == 3) {
						HTMLElement = HTMLElement + "<td class='gameLine'>"+ItemList[i]+"</td>";
					}
					else {
			  			HTMLElement = HTMLElement + "<td>"+ItemList[i]+"</td>";
			  		}
			  	}
			  	Count = Count +1
			  }	 
			}		
			SelectElement = SelectElement + "</select>";
			HTMLElement = HTMLElement + "</tr></table>"
			document.getElementById("StatTable").innerHTML = SelectElement +HTMLElement;
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
 
 
 
 function StartUpPersonal() {
 	LogOnPersonal();
	getFriends();
 	PopulateUsernameDropdown();
 }
 

//Gets the username and displays it
function getUsername(){
	var request = new XMLHttpRequest('GET');
	
	const url='/profile/username';
	request.open("GET", url);
	request.timeout = 4000
	request.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
	request.setRequestHeader("Access-Control-Allow-Origin", "*");
	request.send();
	
	
	request.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
			document.getElementById('username').innerHTML = "";
			$("#username").append(this.responseText);
            console.log(this.responseText);
            x = this.responseText;
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

//Gets the status & displays it
function getStatus(){

	var request = new XMLHttpRequest('GET');
	
	const url='/profile/status';
	request.open("GET", url);
	request.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
	request.setRequestHeader("Access-Control-Allow-Origin", "*");
	request.send();
	

	request.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
			if (this.responseText != "") {
	        	document.getElementById('status').innerHTML = "";
				$("#status").append(this.responseText);
	            console.log(this.responseText);
        	}
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
getStatus();

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

function setInputFilter(textbox, inputFilter) {
  ["input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop"].forEach(function(event) {
    textbox.addEventListener(event, function() {
      if (inputFilter(this.value)) {
        this.oldValue = this.value;
        this.oldSelectionStart = this.selectionStart;
        this.oldSelectionEnd = this.selectionEnd;
      } else if (this.hasOwnProperty("oldValue")) {
        this.value = this.oldValue;
        this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
      } else {
        this.value = "";
      }
    });
  });
}

setInputFilter(document.getElementById("user-phone"), function(value) {
  return /^\d*$/.test(value); });


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

//Function to save the new status
function saveUserStatus(loggedPlayerID){
	
	
	var status = document.getElementById('user-status').value;
	//console.log(status);

	const Http = new XMLHttpRequest();
	const url='/profile/saveStatus?userId='+loggedPlayerID+'&status='+status;
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

//Function to update the status
function sendStatus(){
	getPlayerID(saveUserStatus);
}

//Sorts the game depending on the selection box
function SortingByGame() {
	Reappear()
	var showngame = document.getElementById("gamesorter").value;
	if (showngame != "Options") {
		//Collects the page information
		var rows = document.getElementsByClassName("dataRow");
		var rowgames = document.getElementsByClassName("gameLine");
		//Goes through the rows and hides the invalid rows
		for (i = 0; i < rows.length; i++) {
			if (rowgames[i].innerText != showngame) {
				document.getElementsByClassName("dataRow")[i].style.display = "none";
			}
		}
	}	
}

//Makes all of the rows visible
function Reappear() {
	var rows = document.getElementsByClassName("dataRow");
	//Goes through each of the rows and makes them appear
	for (i=0; i<rows.length; i++) {
		document.getElementsByClassName("dataRow")[i].style.display = "table-row";
	}
}

function PopulateUsernameDropdown() {
	var url2='/profile/usernames';
	var xhttp = new XMLHttpRequest();
	xhttp.open("GET", url2);
	xhttp.send();
	xhttp.onreadystatechange = function() {
	if (this.readyState == 4)
		{
		console.log(xhttp.responseText);
		x= xhttp.responseText;
		x = x.split(',');
		for (y=0; y<x.length; y++) {
			z = x[y].split('"')
			if (y==0 | y==x.length-1) {
				HTMLElement += "<option>"+z[1]+"</option>";
			}
			else {
				var result = z.slice(1,-1);
				HTMLElement += "<option>"+result+"</option>";
			}
		}
		document.getElementById('UsernameSelection').innerHTML = HTMLElement;
		document.getElementById('UsernameSelection2').innerHTML = HTMLElement;
	}
}}

function AddFriend() {
	var x = document.getElementById('UsernameBox').value;
	var url2='/profile/addFriend?friendUsername='+x;
	var xhttp = new XMLHttpRequest();
	xhttp.open("GET", url2);
	xhttp.send();
	xhttp.onload = function(){
        if(this.readyState === 4){
            window.location.href = "/profile";
        }
    }
}



