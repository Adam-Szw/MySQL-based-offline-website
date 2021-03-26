var listString = "";

function SortScores()
{
	const Http = new XMLHttpRequest();
	const url='/scores?gameName='+document.getElementById("GamesSort").value+
	'&ownerSort='+document.getElementById("ScoresSort").value+
	'&showCount='+document.getElementById("ScoresCountSort").value+
	'&scoreSort='+document.getElementById("RiskScores").value;
	Http.open("GET", url);
	Http.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
	Http.setRequestHeader("Access-Control-Allow-Origin", "*");
	Http.send();

	Http.onreadystatechange = (e) => {
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
						break;
					case 4:
						newSBsub.setAttribute("id", "Averagescore");
						break;
					}
					newSBElement.appendChild(newSBsub);
				}
				scoreGrid.appendChild(newSBElement);
			}
		}
	}
}