
//container for mission
var currentMission = {
	HTMLCode:[],
	CSSCode:[]
};

function startGame()
{
	//example Structure
	var exampleHTML = {
		type:"div",
		clas:"class_a",
		id:"id_a"
	}
	var exampleHTML2 = {
		type:"p",
		clas:"class_a",
		id:"id_b",
		value:"This is a paragraph!"
	}
	currentMission.HTMLCode.push(exampleHTML);
	currentMission.HTMLCode.push(exampleHTML2);
	
	var exampleCSS = {
		type:"class",
		name:"class_a",
		property:"padding",
		value:"5px"
	}
	currentMission.CSSCode.push(exampleCSS);
	
	var a = document.getElementById("Game");
	console.log(a.innerHTML);
	
	generateMission();
}

function generateMission()
{
	//first, clear current mission and reset win conditions
	currentMission = {
		HTMLCode:[],
		CSSCode:[]
	}
	

}
