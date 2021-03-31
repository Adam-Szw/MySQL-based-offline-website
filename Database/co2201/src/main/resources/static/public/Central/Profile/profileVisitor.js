function getFriends(username)
{
	const Http = new XMLHttpRequest();
	const url='/profile/getFriends?user='+username.toString();
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
					var splitStr = lines[i].split("|");
					newElement.innerHTML = splitStr[1];
					var newElement2sub = document.createElement("a");
					newElement2sub.setAttribute("href", "/profileVisitor?Username="+(splitStr[0]).toString());
					newElement2sub.innerHTML = "Show profile";
					newElement2.appendChild(newElement2sub);
					var mainElement = document.getElementById("friendsSection");
					mainElement.appendChild(newElement);
					mainElement.appendChild(newElement2);
				}
			}
		}
	}
}

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

function StartUpOther() {
	PopulateUsernameDropdown()
	vars = window.location.search;
	vars = vars.split("=");
 	LogOnOther(vars[1]);
	getFriends(vars[1]);
 	getName(vars[1]);
	getPhone(vars[1]);
	getEmail(vars[1]);
	getBio(vars[1]);
	getStatus(vars[1]);
	LoadStats(vars[1]);
	GetUserRole()
}

var id;
function LogOnOther(user) {
		var request = new XMLHttpRequest('GET');
	
		const url='/profileVisitor/username?userName='+user;
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

function getName(user) {
	var request = new XMLHttpRequest('GET');
	
	const url='/profileVisitor/name?userName='+user;
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
function getStatus(user){

	var request = new XMLHttpRequest('GET');
	
	const url='/profileVisitor/status?userName='+user;
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
function getPhone(user){
	var request = new XMLHttpRequest('GET');
	
	const url='/profileVisitor/phone?userName='+user;
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
function getEmail(user){
	var request = new XMLHttpRequest('GET');
	
	const url='/profileVisitor/email?userName='+user;
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
function getBio(user){
	var request = new XMLHttpRequest('GET');
	
	const url='/profileVisitor/bio?userName='+user;
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


function LoadStats(user) {
        var url2='/Profile/GetVisitorStats/'+user;
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
	}
}
}

function GetUserRole() {
	var url2='/games/getRole';
	var xhttp = new XMLHttpRequest();
	xhttp.open("GET", url2);
	xhttp.send();
	xhttp.onreadystatechange = function() {
	if (this.readyState == 4)
		{
		x= xhttp.responseText;
		if (x=="ADMIN") {
			document.getElementById('AdminButton').style.display = "block";
		}
	}
}
}

function PermissionChange() {
	var VisitUser = document.getElementById('username').innerHTML;
	var url2='/profile/ChangeVisitorRole?username='+VisitUser;
	var xhttp = new XMLHttpRequest();
	xhttp.open("GET", url2);
	xhttp.send();
	xhttp.onreadystatechange = function() {
	if (this.readyState == 4)
		{
		document.getElementById('Outcome').textContent = xhttp.responseText;
	}
}}
