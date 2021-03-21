//The user score is used throughout this game, it is saved to the database at the end of a game
var UserScore = 0;
//This is used to stop and start the game timer
var GameEnd = false;
//This is a check for whether the custom game has been selected
var Custom = false;

function Start() {
    //The created games are loaded for the user to answer
    LoadQuestions();
    CustomGame();
}

/*This is the function to start the game and hide the initial view*/
function HideShow(Number, Value, Section, Label) {
    document.getElementById("PregameContent").style.display = "None";
    document.getElementById(Section).style.display = "Block"
    //A random practice number is generated
    GenerateNumber(Number, Value);
    //The clock is started
    UpdateClock();
    document.getElementById(Label).textContent = "";
}

/*Hide and show the custom game area*/
function HideShowCustom() {
    Custom = true;
    //The created games are loaded for the user to answer
    LoadQuestions();
    CustomGame();
    if (ItemList.length != 0) {
        //Logon the player
        const Http = new XMLHttpRequest();
        const url='http://localhost:8080/Login';
        Http.open("GET", url);
        Http.send();
        //The player details are saved into this variable
        Http.onreadystatechange = (e) => {
        loggedPlayerId = Http.responseText;
        }
        //The pregame content is hidden and the custom game UI is shown
        document.getElementById("PregameContent").style.display = "None";
        document.getElementById("CustomGameDiv").style.display = "Block"
        document.getElementById("AnswerLabelCustom").textContent = "";
        //The first question value is shown
        document.getElementById("CustomNumber").textContent = ItemList[2];
        newstring =  " " + "("+ItemList[1]+")";
        document.getElementById("Type").textContent = newstring;
        UpdateClock();
    }
    else {
        //This alert is shown if the custom game area is empty
        alert("No questions")
    }
}

var ItemList = [];
function CustomGame() {
    //ItemList is reset at the start of the function
    ItemList = [];
    var String = "";
    //The custom game area starts by stripping the invalid chars
    for (i =0; i<Questions.length; i++) {
        var Char = Questions[i];
        if ( Char == '"' | Char == ',' |Char == '[' | Char ==']') {
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

/*Hide and show the lecturer game maker*/
function HideShowLecturerOption() {
    //Each question has 5 elements so the counter is a 5th of the itemlist length
    counter = ItemList.length/5;
    //The lecturer window is shown
    document.getElementById("PregameContent").style.display = "None";
    document.getElementById("LecturerGameDiv").style.display = "Block";
    //Questions are reset
    LoadQuestions();
    CustomGame();

    //This section creates the question html structures
    x = 0;
    counter=0;
    while (x <= ItemList.length-1) {
        //It is repeated for the amount of questions there are -> Shows the existing data
        counter= counter+1;
        $("#QuestionArea").append('<table class="Question"><tr><td colspan="3">Question Number '+ ItemList[x] +':</td></tr><tr><td>Type:</td><td>&nbsp;&nbsp;<select onchange="QuestionChange('+ItemList[x]+')" class="Conversion"><option>Binary to Decimal</option><option>Decimal to Binary</option></select><br> </td></tr><tr><td>Input:</td><td><input class="Input" value="'+ItemList[x+2]+'"></td><td class="InputExample">&nbsp;&nbsp;Example: 101010</td></tr><tr><td>Timer:</td><td><input type="number" min="1" max="120" class="Timer" value="'+ItemList[x+4]+'"></td><td class="TimerExample">&nbsp;&nbsp;Example: 23 seconds</td></tr><tr><td>Points:</td><td><input type="number" min="1" max="100" class="Points" value="'+ItemList[x+3]+'"></td><td class="PointExample">&nbsp;&nbsp;Example: 5 points</td></tr><tr><td colspan="3"><button id="QuestionSave" onclick="SaveQuestion('+ItemList[x]+')">Submit Button</button><button id="QuestionReset" onclick="ResetQuestion('+ItemList[x]+')">Reset Button</button><button id="QuestionDelete" onclick="DeleteQuestion('+ItemList[x]+')">Delete Last Button</button></td></tr></table>');
        x = x+5;
    }
}

/*This section resets the page when the user exits it*/
function ResetPage() {
    //Questions are reset
    LoadQuestions();
    CustomGame();
    //All of the game areas are hidden
    document.getElementById("HardGameDiv").style.display = "None";
    document.getElementById("MediumGameDiv").style.display = "None";
    document.getElementById("EasyGameDiv").style.display = "None";
    document.getElementById("CustomGameDiv").style.display = "None";
    document.getElementById("EndGameDiv").style.display = "None";
    document.getElementById("LecturerGameDiv").style.display = "None"
    //The pregame content area is shown again
    document.getElementById("PregameContent").style.display = "Block";
    document.getElementById("QuestionArea").textContent ="";
    //The score is reset and changed on the game screen
    UserScore =0;
    document.getElementById("UserScore").textContent = UserScore;
    //The timeout is cleared and the clock is set
    clearTimeout(x);
    clock = 180;
    //The labels are reset
    document.getElementById("GameTimer").textContent = clock;
    document.getElementById("AnswerLabelEasy").textContent = "";
    document.getElementById("AnswerLabelMedium").textContent = "";
    document.getElementById("AnswerLabelHard").textContent = "";
    //The boolean variables are reset to false
    GameEnd = false;
    Custom = false;
}

/*Each of the practice modes have a help area, this is to hide it or show it*/
function ShowHelp(ItemName) {
    //The show help area appears in all 3 of the practice modes
    if (document.getElementById(ItemName).style.display == "none") {
        document.getElementById(ItemName).style.display = "Block";
    }
    //The button cycles between visible and not visible
    else {
        document.getElementById(ItemName).style.display = "none";
    }
}

/*This function generates a random binary number*/
function GenerateNumber(ItemName, NumberLength) {
    var i;
    var text = "";
    //The loop is repeated until the NumberLength value is reached
    for (i = 0; i < NumberLength; i++) {
        var x = Math.round(Math.random())
        if (x==1) {
            text = text + "1";
        }
        else {
            text = text + "0";
        }
    }
    //At the end the value is shown
    document.getElementById(ItemName).textContent = text;
}

//The question count is used during the custom game area
var QuestionCount = 4;

//This function calls the the custom number checker
function CustomGameNumber() {
    CheckNumberCustom('CustomNumber','SubmissionCustom','AnswerLabelCustom')
}
  
/*This section is used to check whether the user input is correcct*/
function CheckNumberCustom(Number, Submission, Label) {
    //The values are collected from the user area
    cputotal = 0;
    var value = document.getElementById(Number).textContent;
    var user = document.getElementById(Submission).value;  
    if (user != "") {
        //If the question type is decimal to binary this area will be run
        if (ItemList[QuestionCount-3] == "Decimal to Binary") {
            user = ConvertToDecimal(user);
            cputotal = value;
        }
        //If the question type is binary to decimal this area will be run
        else if (ItemList[QuestionCount-3] == "Binary to Decimal") {
            value = value.split('');
            cputotal = ConvertToDecimal(value);
        }   
        //This check looks at whether the user value and the computer value is identical
            if (parseInt(cputotal) == parseInt(user)) {
                //If the question is correct this area is run
                document.getElementById(Submission).value ="";
                //The lecturer set score is added on
                UserScore = UserScore + parseInt(ItemList[QuestionCount-1]);
                document.getElementById("UserScore").textContent = UserScore;
                document.getElementById(Label).textContent = "Correct Answer!";
                QuestionCount = QuestionCount + 5;
                //If the game still has questions, the next question is shown
                if (QuestionCount < ItemList.length) {
                    document.getElementById("CustomNumber").textContent = ItemList[QuestionCount-2]
                    newstring =  " " + "("+ItemList[QuestionCount-3]+")";
                    document.getElementById("Type").textContent = newstring;
                }
                else {
                //If there are no questions left this area is run
                    GameEnd = true;
                    QuestionCount = 4;
                    document.getElementById("CustomGameDiv").style.display = "None"
                    document.getElementById("EndGameDiv").style.display = "Block"
                    document.getElementById("FinalScore").textContent = UserScore;
                    //The score is saved at the end of the game
                    SaveGame("BinaryBlitz")
                }
            }
            else {
                //The user is shown if the value is incorrect 
                document.getElementById(Submission).value ="";
                document.getElementById(Label).textContent = "Incorrect Answer!";
            }
    }
    else {
        //This alert is shown if nothing is entered
        alert("Enter your answer in the submission box")
    }
}


/*This section is used to check whether the user input is correcct*/
function CheckNumber(Number, Submission, Label, Value, Score) {
    //This is the practice mode game checker
    var value = document.getElementById(Number).textContent;
    var user = document.getElementById(Submission).value;
    //The binary number is split up so that its easier to use
    value = value.split('');
    if (user != "") {
        //The value is converted
        cputotal = ConvertToDecimal(value);
            if (cputotal == parseInt(user)) {
                GenerateNumber(Number,Value);
                document.getElementById(Submission).value ="";
                UserScore = UserScore + Score;
                //If the value is correct, the user will know so
                document.getElementById("UserScore").textContent = UserScore;
                document.getElementById(Label).textContent = "Correct Answer!";
            }
            else { 
                //If the value is incorrect, the user will know so
                document.getElementById(Submission).value ="";
                document.getElementById(Label).textContent = "Incorrect Answer!";
            }
    }
    else {
        //If no value is entered, this alert is shown
        alert("Enter your answer in the submission box")
    }
}

/*This section is used to convert a number from binary to decimal*/
function ConvertToDecimal(value) {
    //This function uses a loop to add the binary values to a count variable
    var counter;
    var count=0;
    for (counter=0; counter<value.length; counter++) {
        count = count + (parseInt(value[value.length - (counter+1)])*(2**counter))
    }
    return count;
}

//The clock is preset to 180 seconds
var clock = 180;
//The variable has 100ms intervals
var timeoutvariable = 100;

/*This section is used to run the clock when the user starts a game*/
function UpdateClock() {
    //The clock label is updated 
	clock = Math.round(clock*10-1)/10;
	document.getElementById("GameTimer").textContent = clock;
	if(clock > 0 & GameEnd == false)
	{   
        //Depending on the clock value, the top right label will change content and colour
        if(clock > 120) {
            document.getElementById("TimeLeftEasy").textContent = "3 Minutes Left!";
            document.getElementById("TimeLeftEasy").style.color = "Black";
            document.getElementById("TimeLeftMedium").textContent = "3 Minutes Left!";
            document.getElementById("TimeLeftMedium").style.color = "Black";
            document.getElementById("TimeLeftHard").textContent = "3 Minutes Left!";
            document.getElementById("TimeLeftHard").style.color = "Black";
        }
        //Depending on the clock value, the top right label will change content and colour
        else if (clock > 60) {
            document.getElementById("TimeLeftEasy").textContent = "2 Minutes Left!";
            document.getElementById("TimeLeftEasy").style.color = "#c3c907";
            document.getElementById("TimeLeftMedium").textContent = "2 Minutes Left!";
            document.getElementById("TimeLeftMedium").style.color = "#c3c907"
            document.getElementById("TimeLeftHard").textContent = "2 Minutes Left!";
            document.getElementById("TimeLeftHard").style.color = "#c3c907"
        }
        //Depending on the clock value, the top right label will change content and colour
        else if (clock > 30) {
            document.getElementById("TimeLeftEasy").textContent = "1 Minute Left!";
            document.getElementById("TimeLeftEasy").style.color = "#eea526";
            document.getElementById("TimeLeftMedium").textContent = "1 Minute Left!";
            document.getElementById("TimeLeftMedium").style.color = "#eea526";
            document.getElementById("TimeLeftHard").textContent = "1 Minute Left!";
            document.getElementById("TimeLeftHard").style.color = "#eea526";
        }
        //Depending on the clock value, the top right label will change content and colour
        else if (clock > 10) {
            document.getElementById("TimeLeftEasy").textContent = "30 Seconds Left!";
            document.getElementById("TimeLeftEasy").style.color="#f03d31"
            document.getElementById("TimeLeftMedium").textContent = "30 Seconds Left!";
            document.getElementById("TimeLeftMedium").style.color="#f03d31"
            document.getElementById("TimeLeftHard").textContent = "30 Seconds Left!";
            document.getElementById("TimeLeftHard").style.color="#f03d31"
        }
        //Depending on the clock value, the top right label will change content and colour
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
        //When the clock is 0, this area is run
        GameEnd = true;
        document.getElementById("EasyGameDiv").style.display = "None"
        document.getElementById("MediumGameDiv").style.display = "None"
        document.getElementById("HardGameDiv").style.display = "None"
        document.getElementById("CustomGameDiv").style.display = "None"
        document.getElementById("EndGameDiv").style.display = "Block"
		document.getElementById("FinalScore").textContent = UserScore;
        //Depending on the custom variable difference pieces of data will be written
        if (Custom == false) {
            SaveGame("BinaryBlitz Practice")
        }
        else {
            SaveGame("BinaryBlitz")
        }
	}
}

//The counter represents the amount of questions
var counter =0;

/*This section adds a question to the questionarea section*/
function AddQuestion() {
    /*Show the number of questions here*/
    counter=counter+1;
    $("#QuestionArea").append('<table class="Question"><tr><td colspan="3">Question Number '+ counter +':</td></tr><tr><td>Type:</td><td>&nbsp;&nbsp;<select onchange="QuestionChange('+counter+')" class="Conversion"><option>Binary to Decimal</option><option>Decimal to Binary</option></select><br> </td></tr><tr><td>Input:</td><td><input class="Input"></td><td class="InputExample">&nbsp;&nbsp;Example: 101010</td></tr><tr><td>Timer:</td><td><input type="number" min="1" max="120" class="Timer"></td><td class="TimerExample">&nbsp;&nbsp;Example: 23 seconds</td></tr><tr><td>Points:</td><td><input type="number" min="1" max="100" class="Points"></td><td class="PointExample">&nbsp;&nbsp;Example: 5 points</td></tr><tr><td colspan="3"><button id="QuestionSave" onclick="SaveQuestion('+counter+')">Submit Button</button><button id="QuestionReset" onclick="ResetQuestion('+counter+')">Reset Button</button><button id="QuestionDelete" onclick="DeleteQuestion('+counter+')">Delete Last Button</button></td></tr></table>');
}

/*This section is used to save a question, each entry must be valid*/
function SaveQuestion(ItemNumber) {
    //The relevant question information is collected
    var choice = document.getElementsByClassName("Conversion")[ItemNumber-1].value;
    var input = document.getElementsByClassName("Input")[ItemNumber-1].value;
    var points = document.getElementsByClassName("Points")[ItemNumber-1].value;
    var timer = document.getElementsByClassName("Timer")[ItemNumber-1].value; 
    //The code uses reduces to check whether the input is valid
    var numbers = /^[0-9]+$/;
    if ((input.match(numbers))) {
        if (timer.match(numbers)) {
            if (points.match(numbers)) {
                    if (choice =="Binary to Decimal") {
                    //This area is run if the binary to decimal number is selected
                    var counter;
                    var count=0;
                    for (counter=0; counter<input.length; counter++) {
                        if (parseInt(input[input.length - (counter+1)]) == 0 | parseInt(input[input.length - (counter+1)]) ==1) {
                            LoadQuestions();
                            CustomGame();
                            UploadQuestion(choice, input, points, timer);
                            LoadQuestions();
                            CustomGame();
                        }
                        else {
                            alert("Bad Value")
                            break;
                        }
                    }
                }
                    else if (choice =="Decimal to Binary") {
                    //This area is run if the decimal to binary number is selected
                        LoadQuestions();
                        CustomGame();
                        UploadQuestion(choice, input, points, timer);
                        LoadQuestions();
                        CustomGame();
                    }
                    else { /*Hexadecimal Area*/}
                }
                else {
                    //This alert is shown for an invalid points entry
                    alert("Please enter a number for points")
            }
        }
        else {
            //This alert is shown for an invalid timer entry
            alert("Please enter a number for timer")
        }
    }
    else {
        //This alert is shown for an invalid input entry
        alert("Please enter a number for input")
    }
}

/*This section is used to change the question labels when the dropdown is changed*/
function QuestionChange(ItemNumber) {
    var choice = document.getElementsByClassName("Conversion")[ItemNumber-1].value;
    //The example is changed depending on the choice dropdown box
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
    //The question boxes are reset
    document.getElementsByClassName("Input")[ItemNumber-1].value = "";
    document.getElementsByClassName("Points")[ItemNumber-1].value = "";
    document.getElementsByClassName("Timer")[ItemNumber-1].value = "";
}

/**This section is used to delete the last question*/
function DeleteQuestion(ItemNumber) {
    var Len = document.getElementsByClassName("Question").length
    var DeleteObject = document.getElementsByClassName("Question")[Len-1];
    DeleteObject.remove();
    //The XML request is created to delete the question
    const Sender = new XMLHttpRequest();
	const url='http://localhost:8080/games/BinaryBlitz/'+counter
	Sender.open("DELETE", url);
	Sender.send();
    counter = counter-1;
}

function UploadQuestion(choice, input, points, timer) {
    if (counter > ItemList.length/5 | (counter ==0 & ItemList.length==0)) {
        //If the question isn't being updated this piece of code is run
        const Sender = new XMLHttpRequest();
        const urlB='http://localhost:8080/games/BinaryBlitz?QuestionID=' + counter +'&Points='+points+'&Time='+timer+'&Input='+input+'&Type='+choice;
        Sender.open("GET", urlB);
        Sender.send();
    }
    else {
        //If the question counter already exists
        //The old question is deleted
        const Sender2 = new XMLHttpRequest();
        const url='http://localhost:8080/games/BinaryBlitz/'+counter
        Sender2.open("DELETE", url);
        Sender2.send();
        //Then the question is added
        const Sender = new XMLHttpRequest();
        const urlB='http://localhost:8080/games/BinaryBlitz?QuestionID=' + counter +'&Points='+points+'&Time='+timer+'&Input='+input+'&Type='+choice;
        Sender.open("GET", urlB);
        Sender.send();
    }
}

//This is the question array
var Questions = new Array();

function LoadQuestions() {
        //The XML is created and the url is defined
        const xhttp = new XMLHttpRequest();
        var url2='http://localhost:8080/games/BinaryBlitz/custom';
        //The request is sent
        xhttp.open("GET", url2); 
        xhttp.send();
        //The content is saved to the questions array
        xhttp.onreadystatechange = (e) => {
            Questions = xhttp.responseText;
        }
}

//This function saves the user score to the db
function SaveGame(type) {
    const Http = new XMLHttpRequest();
    const url='http://localhost:8080/games/BinaryBlitz/saveScore?playerId='+(loggedPlayerId).toString()+'&gameName='+type+'&gameScore='+(UserScore).toString();
    Http.open("GET", url);
    Http.send();
}