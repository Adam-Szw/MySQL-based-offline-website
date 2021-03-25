function SortScores()
{
	console.log("test");
	const Http = new XMLHttpRequest();
	const url='https://localhost:8443/scores?gameName="BitCrush"&ownerSort="user"&showCount=10&scoreSort="hi-score"';
	Http.open("GET", url);
	Http.send();

	Http.onreadystatechange = (e) => {
	  loggedPlayerId = Http.responseText;
	}
}