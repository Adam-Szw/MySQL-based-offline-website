
var missionsConfig = `

Select ALU | ALU
Select all elements | ALU, DataMemory, SignExtender, ShiftLeft2

`;






var missions = [];

var clock = 8.0;
var difficulty = 0;
var tasks = [];
var selected = [];

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
	clock = Math.max(8.0 - difficulty/2, 0.5);
	difficulty += 1;
	document.getElementById("timer").innerHTML = clock;
}

function updateClock() {
	clock = Math.round(clock*10-1)/10;
	document.getElementById("timer").innerHTML = clock;
	if(clock > 0)
	{
		setTimeout(updateClock, 100);
	}
	else
	{
		console.log("lost");
	}
}

function selectElement() {
	
}