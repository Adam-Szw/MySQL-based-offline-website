var UserScore = 0;

/*This is the function to start the game and hide the initial view*/
function HideShow(Number, Value, Section, Label) {
    document.getElementById("PregameContent").style.display = "None";
    document.getElementById(Section).style.display = "Block"
    GenerateNumber(Number, Value);
    UpdateClock();
    document.getElementById(Label).textContent = "";
}

/*Hide and show the custom game area*/
function HideShowCustom() {
    document.getElementById("PregameContent").style.display = "None";
    document.getElementById("CustomGameDiv").style.display = "Block"
    stuff = LoadQuestions();
    UpdateClock();
}

/*Hide and show the lecturer game maker*/
function HideShowLecturerOption() {
    document.getElementById("PregameContent").style.display = "None";
    document.getElementById("LecturerGameDiv").style.display = "Block"
}

/*This section resets the page when the user exits it*/
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

/*Each of the practice modes have a help area, this is to hide it or show it*/
function ShowHelp(ItemName) {
    if (document.getElementById(ItemName).style.display == "none") {
        document.getElementById(ItemName).style.display = "Block";
    }
    else {
        document.getElementById(ItemName).style.display = "none";
    }
}

/*This function generates a random binary number*/
function GenerateNumber(ItemName, NumberLength) {
    var i;
    var text = "";
    for (i = 0; i < NumberLength; i++) {
        var x = Math.round(Math.random())
        if (x==1) {
            text = text + "1";
        }
        else {
            text = text + "0";
        }
    }
    document.getElementById(ItemName).textContent = text;
}

/*This section is used to check whether the user input is correcct*/
function CheckNumber(Number, Submission, Label, Value, Score) {
    var value = document.getElementById(Number).textContent;
    var user = document.getElementById(Submission).value;
    value = value.split('');
    if (user != "") {
        cputotal = ConvertToDecimal(value);
            if (cputotal == parseInt(user)) {
                GenerateNumber(Number,Value);
                document.getElementById(Submission).value ="";
                UserScore = UserScore + Score;
                document.getElementById("UserScore").textContent = UserScore;
                document.getElementById(Label).textContent = "Correct Answer!";
            }
            else { 
                document.getElementById(Submission).value ="";
                document.getElementById(Label).textContent = "Incorrect Answer!";
            }
    }
    else {
        alert("Enter your answer in the submission box")
    }
}

/*This section is used to convert a number from binary to decimal*/
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

/*This section is used to run the clock when the user starts a game*/
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

/*This section adds a question to the questionarea section*/
function AddQuestion() {
    /*Show the number of questions here*/
    counter=counter+1;
    $("#QuestionArea").append('<table class="Question"><tr><td colspan="3">Question Number '+ counter +':</td></tr><tr><td>Type:</td><td>&nbsp;&nbsp;<select onchange="QuestionChange('+counter+')" class="Conversion"><option>Binary to Decimal</option><option>Decimal to Binary</option><option>Hexadecimal to Decimal</option><option>Decimal to Hexadecimal</option></select><br> </td></tr><tr><td>Input:</td><td><input class="Input"></td><td class="InputExample">&nbsp;&nbsp;Example: 101010</td></tr><tr><td>Timer:</td><td><input type="number" min="1" max="120" class="Timer"></td><td class="TimerExample">&nbsp;&nbsp;Example: 23 seconds</td></tr><tr><td>Points:</td><td><input type="number" min="1" max="100" class="Points"></td><td class="PointExample">&nbsp;&nbsp;Example: 5 points</td></tr><tr><td colspan="3"><button id="QuestionSave" onclick="SaveQuestion('+counter+')">Submit Button</button><button id="QuestionReset" onclick="ResetQuestion('+counter+')">Reset Button</button><button id="QuestionDelete" onclick="DeleteQuestion('+counter+')">Delete Last Button</button></td></tr></table>');
}

/*This section is used to save a question, each entry must be valid*/
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
                            
                            UploadQuestion(choice, input, points, timer);
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

/*This section is used to change the question labels when the dropdown is changed*/
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

/*This section is called when the user presses the reset button*/
function ResetQuestion(ItemNumber) {
    document.getElementsByClassName("Input")[ItemNumber-1].value = "";
    document.getElementsByClassName("Points")[ItemNumber-1].value = "";
    document.getElementsByClassName("Timer")[ItemNumber-1].value = "";
}

/**This section is used to delete the last question*/
function DeleteQuestion(ItemNumber) {
    var Len = document.getElementsByClassName("Question").length
    var DeleteObject = document.getElementsByClassName("Question")[Len-1];
    DeleteObject.remove();
    counter = counter-1;
}

function UploadQuestion(choice, input, points, timer) {
    const Sender = new XMLHttpRequest();
	const url='http://localhost:8080/games/BinaryBlitz?QuestionID=' + counter +'&Points='+points+'&Time='+timer+'&Input='+input+'&Type='+choice;
	Sender.open("GET", url);
	Sender.send();
    alert("Successful Save")
}

var Questions = [];

/*function LoadQuestions(){
   
    var xhr = new XMLHttpRequest();
    var url2='http://localhost:8080/games/BinaryBlitz/custom';
    xhr.open('GET', url2)

    xhr.onload = function () {
        if (xhr.status === 200) {
            var data = JSON.parse(xhr.responseText);}
        else {
            alert('Request failed. Request status of ' + xhr.status);
        }
    };
    xhr.send();
    alert(data.responseText)
}*/

function LoadQuestions() {
        var xhttp = new XMLHttpRequest();
        var url2='http://localhost:8080/games/BinaryBlitz/custom';
        
        xhttp.open("GET", url2, true); 
        xhttp.send();
        data = xhttp.responseText;
        return data;
}