var missionsConfig = `
++++HTML++++
<!DOCTYPE html>
<html lang = "en">
<head>
	<title>StylezzTest</title>
    <link rel="stylesheet" href="myCss.css">
</head>
<body>
	<div class="divClass1">
		<p class="textClass" id="myTextA">This is a paragraph!</p>
		<p class="textClass" id="myTextB">This is a paragraph!</p>
		<button class="ButtonClass" id="StartButton">Button</button>
	</div>
</body>
</html>
++++CSS++++
.divClass1 {
	font-size: 20px;
	float: left;
}
.textClass {
	color: blue;
}
#myTextB {
	color: yellow;
}
+++++++++++
`



var missions = [];

function startGame()
{
	generateMissions();
}

function loadMissions()
{
	var lines = missionsConfig.split("\n");
	var newMissionHTML = [];
	var newMissionCSS = [];
	var codeSwitch = true; //true = HTML, false = CSS
	var CSSproperty = {
		type = "",		//class or id
		name = "",		//name of the class or id
		proprties = [],	//the properties as strings
		values = []		//values of all properties
	}
	for(var i = 0; i < lines.length; i++)
	{
		var line = lines[i];
		line = line.trim();
		if(line!="")
		{
			if(line != "+++++++++++")
			{
				//continue mission
				if(line == "++++HTML++++")
				{
					codeSwitch = true
				}
				else if(line == "++++CSS++++")
				{
					codeSwitch = false
				}
				else
				{
					if(codeSwitch)
					{
						newMissionHTML.push(line);
					}
					else
					{
						if(line == "}")
						{
							
						}
					}
				}
			}
			else
			{
				var newMission = {
					HTML : newMissionHTML,
					CSS : newMissionCSS
				}
				missions.push(newMission)
				newMissionHTML = [];
				newMissionCSS = [];
			}
		}
	}
}