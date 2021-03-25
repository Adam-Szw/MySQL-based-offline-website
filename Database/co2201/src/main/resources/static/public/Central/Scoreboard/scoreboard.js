function SortScores()
{
	const Http = new XMLHttpRequest();
	const url='/scores?gameName=BitCrush&ownerSort=all&showCount=10&scoreSort=hi-score';
	Http.open("GET", url);
	Http.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
	Http.setRequestHeader("Access-Control-Allow-Origin", "*");
	Http.send();

	Http.onreadystatechange = (e) => {
	  console.log(Http.responseText);
	}
}