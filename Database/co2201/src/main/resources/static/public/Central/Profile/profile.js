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
	if (Reload == false) {
	Reload = true;
	Data = document.getElementById("StatTable").innerHTML;
	if (Data == "[]") {
		document.getElementById("StatTable").innerHTML = "No Statistics Available!";
	}
	else {
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