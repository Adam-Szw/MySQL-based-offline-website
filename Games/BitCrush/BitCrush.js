
var missionsConfig = `

Select ALU | ALU
Select ALU and Data Memory | ALU, DataMemory
Select all multiplexors | MuxLeft, MuxTopRight, MuxBottomRight, MuxMiddle
Select Registers | Registers
Select Instruction bits 25-21 | Instruction2521
Select all components | Registers, SignExtend

`;


var startingTime = 15.0;
var decreaseTime = 1.0;



var missions = [];
var clock = startingTime;
var difficulty = 0;
var tasks = [];
var selected = [];

var selectionEnabled = false;

function startGame() {
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
	createMission();
	selectionEnabled = true;
	updateClock();
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
		}
	}
}

function createMission() {
	var seed = Math.floor(Math.random() * missions.length)
	document.getElementById("mission").innerHTML = missions[seed][0];
	tasks = missions[seed][1];
	clock = Math.max(startingTime - (difficulty*decreaseTime), 3);
	difficulty += 1;
	document.getElementById("timer").innerHTML = clock;
}

function updateClock() {
	clock = Math.round(clock*10-1)/10;
	document.getElementById("timer").innerHTML = clock;
	checkWinConditions();
	if(clock > 0)
	{
		setTimeout(updateClock, 100);
	}
	else
	{
		console.log("lost");
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
		console.log("win");
		removeAllSelection();
		createMission();
	}
}

function encodeElement(elem) {
	switch(elem){
	case "PC":
		return 0;
	case "InstructionMemory":
		return 1;
	case "AddLeft":
		return 2;
	case "Instruction2521":
		return 3;
	case "Instruction2016":
		return 4;
	case "Instruction1511":
		return 5;
	case "Instruction150":
		return 6;
	case "Instruction50":
		return 7;
	case "MuxLeft":
		return 8;
	case "Registers":
		return 9;
	case "SignExtend":
		return 10;
	case "ShiftLeft2":
		return 11;
	case "AddRight":
		return 12;
	case "ALU":
		return 13;
	case "ALUControl":
		return 14;
	case "DataMemory":
		return 15;
	case "MuxTopRight":
		return 16;
	case "MuxBottomRight":
		return 17;
	case "MuxMiddle":
		return 18;
	}
}

function selectElement(elem) {
	if(selectionEnabled)
	{
		switch(elem){
		case 0:
			//PC
			document.getElementById("Click-PC").style.backgroundColor = "rgb(204, 0, 0)";
			document.getElementById("Click-PC").style.opacity = 0.7;
			break;
		case 1:
			//InstructionMemory
			document.getElementById("Click-InstructionMemory").style.backgroundColor = "rgb(204, 0, 0)";
			document.getElementById("Click-InstructionMemory").style.opacity = 0.7;
			break;
		case 2:
			//AddLeft
			document.getElementById("Click-AddLeft").style.backgroundColor = "rgb(204, 0, 0)";
			document.getElementById("Click-AddLeft").style.opacity = 0.7;
			break;
		case 3:
			//Instruction2521
			document.getElementById("Click-Instruction2521").style.backgroundColor = "rgb(204, 0, 0)";
			document.getElementById("Click-Instruction2521").style.opacity = 0.7;
			break;
		case 4:
			//Instruction2016
			document.getElementById("Click-Instruction2016").style.backgroundColor = "rgb(204, 0, 0)";
			document.getElementById("Click-Instruction2016").style.opacity = 0.7;
			break;
		case 5:
			//Instruction1511
			document.getElementById("Click-Instruction1511").style.backgroundColor = "rgb(204, 0, 0)";
			document.getElementById("Click-Instruction1511").style.opacity = 0.7;
			break;
		case 6:
			//Instruction150
			document.getElementById("Click-Instruction150").style.backgroundColor = "rgb(204, 0, 0)";
			document.getElementById("Click-Instruction150").style.opacity = 0.7;
			break;
		case 7:
			//Instruction50
			document.getElementById("Click-Instruction50").style.backgroundColor = "rgb(204, 0, 0)";
			document.getElementById("Click-Instruction50").style.opacity = 0.7;
			break;
		case 8:
			//MuxLeft
			document.getElementById("Click-MuxLeft").style.backgroundColor = "rgb(204, 0, 0)";
			document.getElementById("Click-MuxLeft").style.opacity = 0.7;
			break;
		case 9:
			//Registers
			document.getElementById("Click-Registers").style.backgroundColor = "rgb(204, 0, 0)";
			document.getElementById("Click-Registers").style.opacity = 0.7;
			break;
		case 10:
			//SignExtend
			document.getElementById("Click-SignExtend").style.backgroundColor = "rgb(204, 0, 0)";
			document.getElementById("Click-SignExtend").style.opacity = 0.7;
			break;
		case 11:
			//ShiftLeft2
			document.getElementById("Click-ShiftLeft2").style.backgroundColor = "rgb(204, 0, 0)";
			document.getElementById("Click-ShiftLeft2").style.opacity = 0.7;
			break;
		case 12:
			//AddRight
			document.getElementById("Click-AddRight").style.backgroundColor = "rgb(204, 0, 0)";
			document.getElementById("Click-AddRight").style.opacity = 0.7;
			break;
		case 13:
			//ALU
			document.getElementById("Click-ALU").style.backgroundColor = "rgb(204, 0, 0)";
			document.getElementById("Click-ALU").style.opacity = 0.7;
			break;
		case 14:
			//ALUControl
			document.getElementById("Click-ALUControl").style.backgroundColor = "rgb(204, 0, 0)";
			document.getElementById("Click-ALUControl").style.opacity = 0.7;
			break;
		case 15:
			//DataMemory
			document.getElementById("Click-DataMemory").style.backgroundColor = "rgb(204, 0, 0)";
			document.getElementById("Click-DataMemory").style.opacity = 0.7;
			break;
		case 16:
			//MuxTopRight
			document.getElementById("Click-MuxTopRight").style.backgroundColor = "rgb(204, 0, 0)";
			document.getElementById("Click-MuxTopRight").style.opacity = 0.7;
			break;
		case 17:
			//MuxBottomRight
			document.getElementById("Click-MuxBottomRight").style.backgroundColor = "rgb(204, 0, 0)";
			document.getElementById("Click-MuxBottomRight").style.opacity = 0.7;
			break;
		case 18:
			//MuxMiddle
			document.getElementById("Click-MuxMiddle").style.backgroundColor = "rgb(204, 0, 0)";
			document.getElementById("Click-MuxMiddle").style.opacity = 0.7;
			break;
		}
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
			document.getElementById("Click-InstructionMemory").style.opacity = 0.0;
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