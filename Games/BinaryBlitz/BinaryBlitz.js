var UserScore = 0;

function HideShowEasy() { 
    document.getElementById("PregameContent").style.display = "None";
    document.getElementById("EasyGameDiv").style.display = "Block"
    EasyNumber();
    UpdateClock();
}

function HideShowMedium() {
    document.getElementById("PregameContent").style.display = "None";
    document.getElementById("MediumGameDiv").style.display = "Block"
    MediumNumber();
    UpdateClock();
}

function HideShowHard() {
    document.getElementById("PregameContent").style.display = "None";
    document.getElementById("HardGameDiv").style.display = "Block"
    HardNumber();
    UpdateClock();
}

function ResetPage() {
    document.getElementById("HardGameDiv").style.display = "None"
    document.getElementById("MediumGameDiv").style.display = "None"
    document.getElementById("EasyGameDiv").style.display = "None"
    document.getElementById("PregameContent").style.display = "Block";
    UserScore =0;
    document.getElementById("UserScore").textContent = UserScore;
    clearTimeout(x);
    clock = 180;
    document.getElementById("GameTimer").textContent = clock;
}

function ShowHelpEasy() {
    if (document.getElementById("HelpContentEasy").style.display == "none") {
        document.getElementById("HelpContentEasy").style.display = "Block";
    }
    else {
        document.getElementById("HelpContentEasy").style.display = "none";
    }
}

function ShowHelpMedium() {
    if (document.getElementById("HelpContentMedium").style.display == "none") {
        document.getElementById("HelpContentMedium").style.display = "Block";
    }
    else {
        document.getElementById("HelpContentMedium").style.display = "none";
    }
}

function ShowHelpHard() {
    if (document.getElementById("HelpContentHard").style.display == "none") {
        document.getElementById("HelpContentHard").style.display = "Block";
    }
    else {
        document.getElementById("HelpContentHard").style.display = "none";
    }
}

function EasyNumber() {
    var i;
    var text = "";
    for (i = 0; i < 4; i++) {
        var x = Math.round(Math.random())
        if (x==1) {
            text = text + "1";
        }
        else {
            text = text + "0";
        }
    }
    document.getElementById("EasyNumber").textContent = text;
}

function MediumNumber() {
    var i;
    var text = "";
    for (i = 0; i < 8; i++) {
        var x = Math.round(Math.random())
        if (x==1) {
            text = text + "1";
        }
        else {
            text = text + "0";
        }
    }
    document.getElementById("MediumNumber").textContent = text;
}

function HardNumber() {
    var i;
    var text = "";
    for (i = 0; i < 12; i++) {
        var x = Math.round(Math.random())
        if (x==1) {
            text = text + "1";
        }
        else {
            text = text + "0";
        }
    }
    document.getElementById("HardNumber").textContent = text;
}

function CheckNumberEasy() {
    var value = document.getElementById("EasyNumber").textContent;
    var user = document.getElementById("SubmissionEasy").value;
    value = value.split('');
    if (user != "") {
        cputotal = ConvertToDecimal(value);
            if (cputotal == parseInt(user)) {
                EasyNumber();
                document.getElementById("SubmissionEasy").value ="";
                UserScore = UserScore + 1;
                document.getElementById("UserScore").textContent = UserScore;
            }
            else { 
                document.getElementById("SubmissionEasy").value ="";
            }
    }
    else {
        alert("Enter your answer in the submission box")
    }
}

function CheckNumberMedium() {
    var value = document.getElementById("MediumNumber").textContent;
    var user = document.getElementById("SubmissionMedium").value;
    value = value.split('');
    if (user != "") {
        cputotal = ConvertToDecimal(value);
            if (cputotal == parseInt(user)) {
                MediumNumber();
                document.getElementById("SubmissionMedium").value ="";
                UserScore = UserScore + 3;
                document.getElementById("UserScore").textContent = UserScore;
            }
            else { 
                document.getElementById("SubmissionMedium").value ="";
            }
    }
    else {
        alert("Enter your answer in the submission box")
    }
}

function CheckNumberHard() {
    var value = document.getElementById("HardNumber").textContent;
    var user = document.getElementById("SubmissionHard").value;
    value = value.split('');
    if (user != "") {
        cputotal = ConvertToDecimal(value);
            if (cputotal == parseInt(user)) {
                HardNumber();
                document.getElementById("SubmissionHard").value ="";
                UserScore = UserScore+10;
                document.getElementById("UserScore").textContent = UserScore;

            }
            else { 
                document.getElementById("SubmissionHard").value ="";
            }
    }
    else {
        alert("Enter your answer in the submission box")
    }
}

function ConvertToDecimal(value) {
    var counter;
    var count=0;
    for (counter=0; counter<value.length; counter++) {
        count = count + (parseInt(value[value.length - (counter+1)])*(2**counter))
    }
    return count;
}

var clock = 180
var timeoutvariable = 100;

function UpdateClock() { 
	clock = Math.round(clock*10-1)/10;
	document.getElementById("GameTimer").textContent = clock;
	if(clock > 0)
	{
		x = setTimeout(UpdateClock, timeoutvariable);
	}
	else
	{
		alert("Game over")
	}
}