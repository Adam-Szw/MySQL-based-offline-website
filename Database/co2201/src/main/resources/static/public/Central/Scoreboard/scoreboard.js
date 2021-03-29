var listString = "";
var loggedUserRole = "NONE";

function setup()
{
	const Http = new XMLHttpRequest();
	const url='/games/getRole';
	Http.open("GET", url);
	Http.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
	Http.setRequestHeader("Access-Control-Allow-Origin", "*");
	Http.send();
	Http.onreadystatechange = function() {
		if (this.readyState == 4)
		{
			loggedUserRole = Http.responseText;
			if(loggedUserRole!="USER")
			{
				document.getElementById("riskButton").style.display = "inline";
			}
		}
	}
}

function risk()
{
	setup();
	if(loggedUserRole!="USER")
	{
		document.getElementById("ScoresCountSort").style.display = "inline";
		document.getElementById("RiskScores").style.display = "inline";
		document.getElementById("AveragescoreLabel").style.display = "inline";
		document.getElementById("AttemptcountLabel").style.display = "inline";
		var elemRemove = document.getElementsByClassName("usable2");
		for(var i = 0; i < elemRemove.length; i++)
		{
			elemRemove[i].style.display = "inline";
		}
	}
}

function SortScores()
{
	setup();
	const Http = new XMLHttpRequest();
	const url='/scores?gameName='+document.getElementById("GamesSort").value+
	'&ownerSort='+document.getElementById("ScoresSort").value+
	'&showCount='+document.getElementById("ScoresCountSort").value+
	'&scoreSort='+document.getElementById("RiskScores").value;
	Http.open("GET", url);
	Http.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
	Http.setRequestHeader("Access-Control-Allow-Origin", "*");
	Http.send();

	Http.onreadystatechange = function() {
		if (this.readyState == 4)
		{
			listString = Http.responseText;
			var scoreGrid = document.getElementById("ScoreDisplayItems");
			while(scoreGrid.firstChild) {
				scoreGrid.removeChild(scoreGrid.lastChild);
			}
			
			var lines = listString.split("\n");
			for(var i = 0; i < lines.length; i++)
			{
				if(lines[i]!="")
				{
					//create main element
					var splitStr = lines[i].split("|");
					var newSBElement = document.createElement("div");
					newSBElement.classList.add("ScoreboardElement");
					
					//add all score stats
					for(var j = 0; j < splitStr.length; j++)
					{
						var newSBsub = document.createElement("div");
						newSBsub.classList.add("ScoreItem");
						newSBsub.innerHTML = splitStr[j];
						var restricted = false;
						switch(j)
						{
						case 0:
							newSBsub.setAttribute("id", "Rank");
							break;
						case 1:
							newSBsub.setAttribute("id", "Username");
							break;
						case 2:
							newSBsub.setAttribute("id", "Bestscore");
							break;
						case 3:
							newSBsub.setAttribute("id", "Attemptcount");
							restricted = true;
							break;
						case 4:
							newSBsub.setAttribute("id", "Averagescore");
							restricted = true;
							break;
						}
						if(!(restricted && loggedUserRole=="USER"))
						{
							newSBElement.appendChild(newSBsub);
						}
					}
					scoreGrid.appendChild(newSBElement);
				}
			}
		}
	}
}