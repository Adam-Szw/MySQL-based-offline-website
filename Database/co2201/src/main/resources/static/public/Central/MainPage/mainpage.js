function RandomFact() {
	var RandomFact = Math.floor(Math.random() * 7);;
	if (RandomFact == 0) {
		document.getElementById('FactArea').innerHTML = '<td id="Image"><img src="public/Central/Images/FirstBug.jpg" alt="The First Bug"></td><td id="Fact" style="font-size:20px;">The first computer bug was actually a moth!</td>'
	}
	else if (RandomFact == 1) {	
		document.getElementById('FactArea').innerHTML = '<td id="Image"><img src="public/Central/Images/FirstMouse.jpg" alt="The First Mouse"></td><td id="Fact" style="font-size:20px;">The first computer mouse was made of wood!</td>'
	}
	else if (RandomFact == 2) {
		document.getElementById('FactArea').innerHTML = '<td id="Image"><img src="public/Central/Images/Email.jpg" alt="The Daily Emails"></td><td id="Fact" style="font-size:20px;">More than 80% of daily emails in the U.S. are spam!</td>'
	}
	else if (RandomFact ==3) {
		document.getElementById('FactArea').innerHTML = '<td id="Image"><img src="public/Central/Images/Keyboard.jpg" alt="The Longest Word"></td><td id="Fact" style="font-size:20px;">The word "Typewriter" is the longest word you can type using only one row of the keyboard!</td>'
	}
	else if (RandomFact ==4) {
		document.getElementById('FactArea').innerHTML = '<td id="Image"><img src="public/Central/Images/House.jpg" alt="Bill Gates house"></td><td id="Fact" style="font-size:20px;">Bill Gates&#39; house was designed using a Macintosh computer!</td>'
	}
	else if (RandomFact ==5) {
		document.getElementById('FactArea').innerHTML = '<td id="Image"><img src="public/Central/Images/NASA.jpg" alt="Cape Canaveral"></td><td id="Fact" style="font-size:20px;">NASA&#39;s internet speed is 91 GB per second!</td>'
	}
	else if (RandomFact ==6) {
		document.getElementById('FactArea').innerHTML = '<td id="Image"><img src="public/Central/Images/Bitcoin.jpg" alt="Digital Currency"></td><td id="Fact" style="font-size:20px;">Over 90% of the world&#39s currency is digital!</td>'
		
	}
}

