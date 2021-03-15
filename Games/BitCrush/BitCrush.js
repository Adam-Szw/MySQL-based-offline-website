
//NAME | LEFT, TOP, WIDTH, HEIGHT
var buttonsConfig = `

PC | 23.35, 40, 2, 16
InstructionMemory | 27.1, 44.5, 6.4, 22.3
AddLeft | 28.9, 13.8, 4.8, 20.7
Instruction2521 | 34.3, 42.6, 8.3, 3.1
Instruction2016 | 34.3, 49.7, 8.4, 3.1
Instruction1511 | 34.3, 61.2, 7.9, 3.1
Instruction150 | 34.3, 77.9, 8.1, 3.1
Instruction50 | 45.1, 90.8, 7.2, 3.1
Registers | 44.5, 42.2, 8.7, 30.1
SignExtend | 48.3, 73.4, 4.1, 15.6
ShiftLeft2 | 55.5, 31.2, 3.5, 11.1
AddRight | 59.6, 20.2, 6.3, 20.8
ALU | 58.6, 46.8, 6.3, 20.8
ALUControl | 56.5, 75.1, 4.4, 15.4
DataMemory | 66.4, 51.9, 7.3, 26.4
MuxLeft | 42.3, 54.4, 2.4, 12.9
MuxTopRight | 68.2, 16, 2.1, 16.7
MuxBottomRight | 75.3, 57, 2.1, 12.7
MuxMiddle | 55.8, 57.5, 2.1, 12.8

`

//DESCRIPTION | ELEMENT1, ELEMENT2, ELEMENT3...
var missionsConfig = `

Select ALU | ALU
Select ALU and Data Memory | ALU, DataMemory
Select all multiplexors | MuxLeft, MuxTopRight, MuxBottomRight, MuxMiddle
Select Registers | Registers
Select Instruction bits 25-21 | Instruction2521

`;

var startingTime = 15.0;
var decreaseTime = 1.0;

var elementButtons = [];

var missions = [];
var clock = startingTime;
var difficulty = 0;
var tasks = [];
var selected = [];

var selectionEnabled = false;
var gameEnd = false;

var score = 0;
var responseScore = [];
var questionCount = 0;

var loggedPlayerId;

function startGame() {
	//Logon the player
	const Http = new XMLHttpRequest();
	const url='http://localhost:8080/Login';
	Http.open("GET", url);
	Http.send();

	Http.onreadystatechange = (e) => {
	  loggedPlayerId = Http.responseText;
	}

	elementButtons = [];
	missions = [];
	clock = startingTime;
	difficulty = 0;
	tasks = [];
	selected = [];
	gameEnd = false;
	selectionEnabled = true;
	score = 0;
	responseScore = [];
	questionCount = 0;
	
	document.getElementById("img").style.display = "none";
	document.getElementById("img2").style.display = "block";
	var introText = document.getElementsByClassName("descriptionText");
	for(var i = 0; i < introText.length; i++)
	{
		introText[i].style.display = "none";
	}
	document.getElementById("StartButton").style.display = "none";
	var introText = document.getElementsByClassName("gameText");
	for(var i = 0; i < introText.length; i++)
	{
		introText[i].style.display = "block";
	}
	loadMissions();
	loadButtons();
	createMission();
	updateClock();
}

function loadButtons() {
	var lines = buttonsConfig.split("\n");
	for(var i = 0; i < lines.length; i++)
	{
		if(lines[i]!="")
		{
			var splitStr = lines[i].split("|");
			var elementName = splitStr[0];
			elementName.trim();
			var elementCoords = splitStr[1].split(",");
			for(var j = 0; j < elementCoords.length; j++)
			{
				elementCoords[j] = elementCoords[j].trim();
			}
			elementButtons.push([elementName, elementCoords]);
		}
	}
	
	for(var i = 0; i < elementButtons.length; i++)
	{
		var elemButton = document.createElement("div");
		elemButton.classList.add("ClickBox");
		elemButton.setAttribute("id", "Click"+(elementButtons[i][0]).trim());
		elemButton.style.left = elementButtons[i][1][0]+"%";
		elemButton.style.top = elementButtons[i][1][1]+"%";
		elemButton.style.width = elementButtons[i][1][2]+"%";
		elemButton.style.height = elementButtons[i][1][3]+"%";
		elemButton.setAttribute("onmouseover", "selectElement("+i+")");
		elemButton.setAttribute("onmouseleave", "deselectElements()");
		elemButton.setAttribute("onmousedown", "addSelection("+i+")");
		document.getElementById("ImageBox").appendChild(elemButton);
	}
}

function loadMissions() {
	var lines = missionsConfig.split("\n");
	for(var i = 0; i < lines.length; i++)
	{
		if(lines[i]!="")
		{
			var splitStr = lines[i].split("|");
			var missionsStr = splitStr[0];
			var targetsArr = splitStr[1].split(",");
			for(var j = 0; j < targetsArr.length; j++)
			{
				targetsArr[j] = targetsArr[j].trim();
			}
			missions.push([missionsStr, targetsArr]);
			questionCount += 1;
		}
	}
}

function scoreScreen() {
	gameEnd = true;
	selectionEnabled = false;
	document.getElementById("img").style.display = "block";
	document.getElementById("img2").style.display = "none";
	var introText = document.getElementsByClassName("gameText");
	for(var i = 0; i < introText.length; i++)
	{
		introText[i].style.display = "none";
	}
	document.getElementById("StartButton").style.display = "block";
	
	var totalResponse = 0.0;
	for(var i = 0; i < responseScore.length; i++)
	{
		totalResponse += responseScore[i];
	}
	var avgResponse = totalResponse / questionCount * 100;
	avgResponse = Math.round(avgResponse*100)/100;
	var avgResponseScore = Math.round((100-avgResponse)*100)/100;
	
	var t = document.getElementById("scoreScreenText");
	t.innerHTML = "Game finished!"+
	"<br>You answered "+responseScore.length+"/"+questionCount+" questions."+
	"<br>Your score was: "+score+
	"<br>Your average response time was: "+avgResponseScore+"% of time given"+
	"<br>This brings your total leaderboard score to: "+score*avgResponse/100+
	"<br>Click start game to play again.";
	t.style.display = "block";
	
	const Http = new XMLHttpRequest();
	const url='http://localhost:8080/games/BitCrush?playerId='+(loggedPlayerId).toString()+'&gameName=BitCrush&gameScore='+(score).toString();
	Http.open("GET", url);
	Http.send();
}

function createMission() {
	if(missions.length > 0)
	{
		var seed = Math.floor(Math.random() * missions.length)
		document.getElementById("mission").innerHTML = missions[seed][0];
		tasks = missions[seed][1];
		missions.splice(seed, 1);
		clock = Math.max(startingTime - (difficulty*decreaseTime), 3);
		difficulty += 1;
		document.getElementById("timer").innerHTML = clock;
	}
	else
	{
		scoreScreen();
	}
}

function updateClock() {
	clock = Math.round(clock*10-1)/10;
	document.getElementById("timer").innerHTML = clock;
	checkWinConditions();
	if(clock > 0 && !gameEnd)
	{
		setTimeout(updateClock, 100);
	}
	else
	{
		console.log("game over");
		scoreScreen();
	}
}

function checkWinConditions() {
	var tasksArr = [];
	for(var i = 0; i < tasks.length; i++)
	{
		tasksArr.push(encodeElement(tasks[i]));
	}
	if(tasksArr.sort().join(',') === selected.sort().join(','))
	{
		console.log("correct");
		var a = parseFloat(clock/Math.max(startingTime - (difficulty*decreaseTime), 3));
		a = Math.round(a*100)/100;
		responseScore.push(a);
		score += parseFloat(10);
		removeAllSelection();
		createMission();
	}
}

function encodeElement(elem) {
	for(var i = 0; i < elementButtons.length; i++)
	{
		if(elementButtons[i][0].trim() == elem)
		{
			return i;
		}
	}
}

function selectElement(elem) {
	if(selectionEnabled)
	{
		document.getElementById("Click"+(elementButtons[elem][0]).trim()).style.backgroundColor = "rgb(204, 0, 0)";
		document.getElementById("Click"+(elementButtons[elem][0]).trim()).style.opacity = 0.7;
	}
}

function deselectElements()
{
	if(selectionEnabled)
	{
		var clickBoxes = document.getElementsByClassName("ClickBox");
		for(var i = 0; i < clickBoxes.length; i++)
		{
			clickBoxes[i].style.backgroundColor = "transparent";
		}
		for(var i = 0; i < selected.length; i++)
		{
			selectElement(selected[i]);
		}
	}
}

function addSelection(elem)
{
	if(selectionEnabled)
	{
		if(selected.includes(elem))
		{
			removeSelection(elem);
		}
		else
		{
			selected.push(elem);
		}
	}
}

function removeSelection(elem)
{
	var newSelected = [];
	for(var i = 0; i < selected.length; i++)
	{
		if(selected[i] != elem)
		{
			newSelected.push(selected[i]);
		}
	}
	selected = newSelected;
}

function removeAllSelection()
{
	selected = [];
	deselectElements();
}