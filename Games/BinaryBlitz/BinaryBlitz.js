var UserScore = 0;

function HideShowEasy() { 
    document.getElementById("PregameContent").style.display = "None";
    document.getElementById("EasyGameDiv").style.display = "Block"
    EasyNumber();
    UpdateClock();
    document.getElementById("AnswerLabelEasy").textContent = "";
}

function HideShowMedium() {
    document.getElementById("PregameContent").style.display = "None";
    document.getElementById("MediumGameDiv").style.display = "Block"
    MediumNumber();
    UpdateClock();
    document.getElementById("AnswerLabelMedium").textContent = "";
}

function HideShowHard() {
    document.getElementById("PregameContent").style.display = "None";
    document.getElementById("HardGameDiv").style.display = "Block"
    HardNumber();
    UpdateClock();
    document.getElementById("AnswerLabelHard").textContent = "";
}

function HideShowCustom() {
    document.getElementById("PregameContent").style.display = "None";
    document.getElementById("CustomGameDiv").style.display = "Block"
    UpdateClock();
}

function HideShowLecturerOption() {
    document.getElementById("PregameContent").style.display = "None";
    document.getElementById("LecturerGameDiv").style.display = "Block"
}

function ResetPage() {
    document.getElementById("HardGameDiv").style.display = "None";
    document.getElementById("MediumGameDiv").style.display = "None";
    document.getElementById("EasyGameDiv").style.display = "None";
    document.getElementById("CustomGameDiv").style.display = "None";
    document.getElementById("EndGameDiv").style.display = "None";
    document.getElementById("LecturerGameDiv").style.display = "None"
    document.getElementById("PregameContent").style.display = "Block";
    UserScore =0;
    document.getElementById("UserScore").textContent = UserScore;
    clearTimeout(x);
    clock = 180;
    document.getElementById("GameTimer").textContent = clock;
    document.getElementById("AnswerLabelEasy").textContent = "";
    document.getElementById("AnswerLabelMedium").textContent = "";
    document.getElementById("AnswerLabelHard").textContent = "";
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
                document.getElementById("AnswerLabelEasy").textContent = "Correct Answer!";
            }
            else { 
                document.getElementById("SubmissionEasy").value ="";
                document.getElementById("AnswerLabelEasy").textContent = "Incorrect Answer!";
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
                document.getElementById("AnswerLabelMedium").textContent = "Correct Answer!";
            }
            else { 
                document.getElementById("SubmissionMedium").value ="";
                document.getElementById("AnswerLabelMedium").textContent = "Incorrect Answer!";
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
                document.getElementById("AnswerLabelHard").textContent = "Correct Answer!";
            }
            else { 
                document.getElementById("SubmissionHard").value ="";
                document.getElementById("AnswerLabelHard").textContent = "Incorrect Answer!";
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

var clock = 180;
var timeoutvariable = 100;

function UpdateClock() { 
	clock = Math.round(clock*10-1)/10;
	document.getElementById("GameTimer").textContent = clock;
	if(clock > 0)
	{   
        if(clock > 120) {
            document.getElementById("TimeLeftEasy").textContent = "3 Minutes Left!";
            document.getElementById("TimeLeftEasy").style.color = "Black";
            document.getElementById("TimeLeftMedium").textContent = "3 Minutes Left!";
            document.getElementById("TimeLeftMedium").style.color = "Black";
            document.getElementById("TimeLeftHard").textContent = "3 Minutes Left!";
            document.getElementById("TimeLeftHard").style.color = "Black";
        }
        else if (clock > 60) {
            document.getElementById("TimeLeftEasy").textContent = "2 Minutes Left!";
            document.getElementById("TimeLeftEasy").style.color = "#c3c907";
            document.getElementById("TimeLeftMedium").textContent = "2 Minutes Left!";
            document.getElementById("TimeLeftMedium").style.color = "#c3c907"
            document.getElementById("TimeLeftHard").textContent = "2 Minutes Left!";
            document.getElementById("TimeLeftHard").style.color = "#c3c907"
        }
        else if (clock > 30) {
            document.getElementById("TimeLeftEasy").textContent = "1 Minute Left!";
            document.getElementById("TimeLeftEasy").style.color = "#eea526";
            document.getElementById("TimeLeftMedium").textContent = "1 Minute Left!";
            document.getElementById("TimeLeftMedium").style.color = "#eea526";
            document.getElementById("TimeLeftHard").textContent = "1 Minute Left!";
            document.getElementById("TimeLeftHard").style.color = "#eea526";
        }
        else if (clock > 10) {
            document.getElementById("TimeLeftEasy").textContent = "30 Seconds Left!";
            document.getElementById("TimeLeftEasy").style.color="#f03d31"
            document.getElementById("TimeLeftMedium").textContent = "30 Seconds Left!";
            document.getElementById("TimeLeftMedium").style.color="#f03d31"
            document.getElementById("TimeLeftHard").textContent = "30 Seconds Left!";
            document.getElementById("TimeLeftHard").style.color="#f03d31"
        }
        else if (clock <= 10) {
            document.getElementById("TimeLeftEasy").textContent = "10 Seconds Left!";
            document.getElementById("TimeLeftEasy").style.color="#f03d31"
            document.getElementById("TimeLeftMedium").textContent = "10 Seconds Left!";
            document.getElementById("TimeLeftMedium").style.color="#f03d31"
            document.getElementById("TimeLeftHard").textContent = "10 Seconds Left!";
            document.getElementById("TimeLeftHard").style.color="#f03d31"
        }
		x = setTimeout(UpdateClock, timeoutvariable);
	}
	else
	{
        document.getElementById("EasyGameDiv").style.display = "None"
        document.getElementById("MediumGameDiv").style.display = "None"
        document.getElementById("HardGameDiv").style.display = "None"
        document.getElementById("CustomGameDiv").style.display = "None"
        document.getElementById("EndGameDiv").style.display = "Block"
		document.getElementById("FinalScore").textContent = UserScore;
	}
}

var counter =0;

function AddQuestion() {
    /*Show the number of questions here*/
    counter=counter+1;
    $("#QuestionArea").append('<table class="Question"><tr><td colspan="3">Question Number '+ counter +':</td></tr><tr><td>Type:</td><td>&nbsp;&nbsp;<select onchange="QuestionChange('+counter+')" class="Conversion"><option>Binary to Decimal</option><option>Decimal to Binary</option><option>Hexadecimal to Decimal</option><option>Decimal to Hexadecimal</option></select><br> </td></tr><tr><td>Input:</td><td><input class="Input"></td><td class="InputExample">&nbsp;&nbsp;Example: 101010</td></tr><tr><td>Timer:</td><td><input type="number" min="1" max="120" class="Timer"></td><td class="TimerExample">&nbsp;&nbsp;Example: 23 seconds</td></tr><tr><td>Points:</td><td><input type="number" min="1" max="100" class="Points"></td><td class="PointExample">&nbsp;&nbsp;Example: 5 points</td></tr><tr><td colspan="3"><button id="QuestionSave" onclick="SaveQuestion('+counter+')">Submit Button</button><button id="QuestionReset" onclick="ResetQuestion('+counter+')">Reset Button</button><button id="QuestionDelete" onclick="DeleteQuestion('+counter+')">Delete Last Button</button></td></tr></table>');
}
function SaveQuestion(ItemNumber) {
    var choice = document.getElementsByClassName("Conversion")[ItemNumber-1].value;
    var input = document.getElementsByClassName("Input")[ItemNumber-1].value;
    var points = document.getElementsByClassName("Points")[ItemNumber-1].value;
    var timer = document.getElementsByClassName("Timer")[ItemNumber-1].value; 
    var numbers = /^[0-9]+$/;
    if ((input.match(numbers))) {
        if (timer.match(numbers)) {
            if (points.match(numbers)) {
                    if (choice =="Binary to Decimal") {
                    var counter;
                    var count=0;
                    for (counter=0; counter<input.length; counter++) {
                        if (parseInt(input[input.length - (counter+1)]) == 0 | parseInt(input[input.length - (counter+1)]) ==1) {
                            alert("Good Value")
                        }
                        else {
                            alert("Bad Value")
                            break;
                        }
                    }
                }
                     else if (choice =="Decimal to Binary") {
                        var counter;
                        var count=0;
                        for (counter=0; counter<input.length; counter++) {
                            if (parseInt(input[input.length - (counter+1)]) == 0 | parseInt(input[input.length - (counter+1)]) ==1) {
                                alert("Good Value")
                            }
                            else {
                                alert("Bad Value")
                                break;
                            }
                        }
                    }
                    else { /*Hexadecimal Area*/}
                }
                else {
                    alert("Please enter a number for points")
            }
        }
        else {
            alert("Please enter a number for timer")
        }
    }
    else {
        alert("Please enter a number for input")
    }
}

function QuestionChange(ItemNumber) {
    var choice = document.getElementsByClassName("Conversion")[ItemNumber-1].value;
    if (choice == "Binary to Decimal") {
        document.getElementsByClassName("InputExample")[ItemNumber-1].textContent = " Example: 101010";
    }
    else if (choice =="Decimal to Binary") {
        document.getElementsByClassName("InputExample")[ItemNumber-1].textContent = " Example: 145";
    }
    else if (choice=="Hexadecimal to Decimal") {
        document.getElementsByClassName("InputExample")[ItemNumber-1].textContent = " Example: 1E3";
    }
    else {
        document.getElementsByClassName("InputExample")[ItemNumber-1].textContent = " Example: 156";
    }
}

function ResetQuestion(ItemNumber) {
    document.getElementsByClassName("Input")[ItemNumber-1].value = "";
    document.getElementsByClassName("Points")[ItemNumber-1].value = "";
    document.getElementsByClassName("Timer")[ItemNumber-1].value = "";
}

function DeleteQuestion(ItemNumber) {
    var Len = document.getElementsByClassName("Question").length
    var DeleteObject = document.getElementsByClassName("Question")[Len-1];
    DeleteObject.remove();
    counter = counter-1;
}

