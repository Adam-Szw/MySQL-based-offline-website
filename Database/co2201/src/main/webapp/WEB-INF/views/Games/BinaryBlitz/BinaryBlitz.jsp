<!DOCTYPE html>
<html lang = "en">
<head>
	<!--Games title element-->
    <title>BinaryBlitz</title>
    <!--BinaryBlitz stylesheet and JavaScript links-->
    <link rel="stylesheet" href="../public/Central/central.css">
    <link rel="stylesheet" href="../public/Games/BinaryBlitz/BinaryBlitz.css">
	<link rel="stylesheet" href="../public/Games/games.css">
    <script src = "../public/Games/BinaryBlitz/BinaryBlitz.js"></script>
    <!--BinaryBlitz game icon-->
    <link rel="icon" href="../Central/Images/Games.png">
    <!--This is the link that takes the user to the top of the page-->
    <a href="#" id="back-to-top" class="back-to-top" style="display: inline;">^</a>
    <!--External fonts are used these are linked here-->
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <!--The script contains the code for the back to the top button-->
    <script>
    var link = document.getElementById("back-to-top");
        var amountScrolled = 250;
      
        window.addEventListener('scroll', function(e) {
            if ( window.pageYOffset > amountScrolled ) {
                link.classList.add('show');
            } else {
                link.className = 'back-to-top';
            }
        });
        document.addEventListener("DOMContentLoaded", function(event) { 
                var scrollpos = localStorage.getItem('scrollpos');
                if (scrollpos) window.scrollTo(0, scrollpos);
            });

            window.onbeforeunload = function(e) {
                localStorage.setItem('scrollpos', window.scrollY);
            };

            window.onbeforeunload = function () {
            window.scrollTo(0, 0);
}; 
</script>
</head>
<body onload="Start()">
    <!--Sidebar code-->
    <div class="sidenav">
		 		<img id="SideBar" src="../public/Central/Images/Signin.png"><a href="/signIn">Sign In</a>
		<img id="SideBar" src="../public/Central/Images/Games.png"><a href="/games">Games</a>
        <img id="SideBar" src="../public/Central/Images/Profile.png"><a href="/profile">Profile</a>
        <img id="SideBar" src="../public/Central/Images/Leaderboard.png"><a href="/scoreboard">Scoreboard</a>
        <img id="SideBar" src="../public/Central/Images/Settings.png"><a href="/settings">Settings</a>
        <img id="SideBar" src="../public/Central/Images/About.png"><a href="/about">About</a>
    </div>
    <!--Return to the home page button-->
    <div id="TopBox">
		<button id="BackButton" onclick="goBack()">Go Back</button>
		<script>
		function goBack() {
		  window.history.back();
		}
		</script> 
	</div>
    <!--The game title, score and the timer components-->
	<div id="TopBox">
        <div id="TitleDiv"><img id="Icon" onclick="ResetPage()" src="../public/Games/BinaryBlitz/Images/BinaryBlitzIcon.png"><label id="Title">BinaryBlitz</label></div>
		<div id="ScoreDiv"><label>Score: <label id="UserScore">0</label></label></div>
        <div id="TimerDiv"><label>Time Left: </label><label id="GameTimer">180</label></div>
	</div>
      <!--The pregame area-->
	<div class="TopBox" id="Game">
        <div id="PregameContent">
        <label id="DifficultyLabel">Please select a difficulty:</label><br>
        <!--The BinaryBlitz area has several options, These buttons are used to access them-->
        <button id="EasyGame" onclick="HideShow('EasyNumber',4,'EasyGameDiv','AnswerLabelEasy')">Easy: 4 Bit Conversions</button>
        <button id="MediumGame" onclick="HideShow('MediumNumber',8,'MediumGameDiv','AnswerLabelMedium')">Medium: 8 Bit Conversions</button>
        <button id="HardGame" onclick="HideShow('HardNumber',12,'HardGameDiv','AnswerLabelHard')">Hard: 12 Bit Conversions</button>
        <button id="CustomGame" onclick="HideShowCustom()">Custom: Lecturer Created Mode</button>
        <button style="display:none"id="CustomGame2" onclick="HideShowLecturerOption()">Lecturer: Change Settings</button>
        <!--In the pregame area is some details about how to complete Binary conversions-->
        <div id="ExampleQuestion"><label id="ExampleQuestionTitle">Example Conversion: 10110111 to Decimal:</label>
            <p>
                10110111 is an 8 bit binary (Base 2) number therefore the maximum value can be calculated using (2^8)-1 = 255<br>
                Each value in the binary number represents a power of 2 number <br>
                When calculating a binary number you start on the right-hand side, the first bit has a value of (2^0) which equals 1<br>
                <ol>
                <!--This shows the example question code-->
                <li>First bit: 2^0 = 1 -> 1011011<label id="Highlight">1</label>-> 1</li>
                <li>Second bit: 2^1 = 2 -> 101101<label id="Highlight">1</label>1 -> 2</li>
                <li>Third bit: 2^2 = 4 -> 10110<label id="Highlight">1</label>11 -> 4</li>
                <li>Fourth bit: 2^3 = 8 -> 1011<label id="Highlight">0</label>111 -> 0</li>
                <li>Fifth bit: 2^4 = 16 -> 101<label id="Highlight">1</label>0111 -> 16</li>
                <li>Sixth bit: 2^5 = 32 -> 10<label id="Highlight">1</label>10111 -> 32</li>
                <li>Seventh bit: 2^6 = 64 -> 1<label id="Highlight">0</label>110111 -> 0</li>
                <li>Eight bit: 2^7 = 128 -> <label id="Highlight">1</label>0110111 -> 128</li>
                </ol>
                Therefore 10110111 is equal to 1 + 2 + 4 + 0 + 16 + 32 + 0 + 128 = <strong style="font-size: 18px;">183</strong><br>
                Useful Resource: <a  id="ExtraInfo" href="https://www.khanacademy.org/computing/computers-and-internet/xcae6f4a7ff015e7d:digital-information/xcae6f4a7ff015e7d:binary-numbers/a/bits-and-binary">Khan Academy: Binary Numbers</a>
            </p>
        </div>
        </div>
        <!--This is the section is for the easy game-->
        <div id="EasyGameDiv">
            <label id="TimeLeftEasy" class="TimeLeft">Three minutes left!</label>
            <p id="EasyGameContent">You have selected the easy difficulty... Good Luck!<br>
                These questions will feature 4 bit binary conversions<br>
                <label class="QuestionLabel">Convert <label id="EasyNumber"></label> to Decimal:</label><br>
                Enter your answer here:  <input id="SubmissionEasy"><button id="SubmitButton" onclick="CheckNumber('EasyNumber','SubmissionEasy','AnswerLabelEasy',4,1)">Submit</button>
                <label id="AnswerLabelEasy" class="AnswerLabel">Correct Answer</label><br>
                <button id="HelpButton" onclick="ShowHelp('HelpContentEasy')">Help?</button>
                <div id="HelpContentEasy">
                    <ol>
                        <!--This is the help content-->
                        <li>First bit: 2^0 = 1</li>
                        <li>Second bit: 2^1 = 2</li>
                        <li>Third bit: 2^2 = 4</li>
                        <li style="padding-bottom: 10px;">Fourth bit: 2^3 = 8</li>
                    </ol>
                </div>
            </p>
        </div>
        <!--This section is for the medium game-->
        <div id="MediumGameDiv">
            <label id="TimeLeftMedium" class="TimeLeft">Three minutes left!</label>
            <p id="MediumGameContent">You have selected the medium difficulty... Good Luck!<br>
                These questions will feature 8 bit binary conversions<br>
                <label class="QuestionLabel">Convert <label id="MediumNumber">Place</label> to Decimal:</label><br>
                Enter your answer here:  <input id="SubmissionMedium"><button id="SubmitButton" onclick="CheckNumber('MediumNumber','SubmissionMedium','AnswerLabelMedium',8,3)">Submit</button>
                <label id="AnswerLabelMedium" class="AnswerLabel">Correct Answer</label><br>
                <button id="HelpButton" onclick="ShowHelp('HelpContentMedium')">Help?</button>
                <div id="HelpContentMedium">
                    <ol>
                        <!--This is the help content-->
                        <li>First bit: 2^0 = 1</li>
                        <li>Second bit: 2^1 = 2</li>
                        <li>Third bit: 2^2 = 4</li>
                        <li>Fourth bit: 2^3 = 8</li>
                        <li>Fifth bit: 2^4 = 16</li>
                        <li>Sixth bit: 2^5 = 32</li>
                        <li>Seventh bit: 2^6 = 64</li>
                        <li style="padding-bottom: 10px;">Eight bit: 2^7 = 128</li>
                    </ol>
                </div>
            </p>
        </div>
        <!--This section is for the hard game-->
        <div id="HardGameDiv">
            <label id="TimeLeftHard" class="TimeLeft">Three minutes left!</label>
            <p id="HardGameContent">You have selected the hard difficulty... Good Luck!<br>
                These questions will feature 12 bit binary conversions<br>
                <label class="QuestionLabel">Convert <label id="HardNumber"></label> to Decimal:</label><br>
                Enter your answer here:  <input id="SubmissionHard"><button id="SubmitButton" onclick="CheckNumber('HardNumber','SubmissionHard','AnswerLabelHard',12,10)">Submit</button>
                <label id="AnswerLabelHard" class="AnswerLabel">Correct Answer</label><br>
                <button id="HelpButton" onclick="ShowHelp('HelpContentHard')">Help?</button>
                <div id="HelpContentHard">
                    <ol>
                        <!--This is the help content-->
                        <li>First bit: 2^0 = 1</li>
                        <li>Second bit: 2^1 = 2</li>
                        <li>Third bit: 2^2 = 4</li>
                        <li>Fourth bit: 2^3 = 8</li>
                        <li>Fifth bit: 2^4 = 16</li>
                        <li>Sixth bit: 2^5 = 32</li>
                        <li>Seventh bit: 2^6 = 64</li>
                        <li>Eight bit: 2^7 = 128</li>
                        <li>Ninth bit: 2^8 = 256</li>
                        <li>Tenth bit: 2^9 = 512</li>
                        <li>Eleventh bit: 2^10 = 1024</li>
                        <li style="padding-bottom: 10px;">Twelfth bit: 2^11 = 2048</li>
                    </ol>
                </div>
            </p>
        </div>
        <!--This section is for the custom game-->
        <div id="CustomGameDiv">
            <p id="CustomGameContent">You have selected the custom game mode... Good Luck!<br>
                These questions will feature an assortment of conversions created by the lecturer<br>
                <label class="QuestionLabel" id="CustomQuestionLabel">Convert <label id="CustomNumber"></label></label><label id="Type"></label><br>
                Enter your answer here: <input id="SubmissionCustom"><button id="SubmitButton" onclick="CustomGameNumber()">Submit</button>
                <label id="AnswerLabelCustom" class="AnswerLabel">Correct Answer</label><br>
            </p>
        </div>
        <!--This section is for the end of the game-->
        <div id="EndGameDiv">
            <label style="font-size: larger;">Well Done! -> Thanks for playing the game<br>
            You got a score of <label id="FinalScore">0</label><br>
            <label id="EndGameMain">Press the button below to return to the game homepage!</label><br>
            <button id="EndGameButton" onclick="ResetPage()">End Game</button><br>   
        </div>
        <!--This section is for the user to add questions to the game-->
        <div id="LecturerGameDiv">
            <label id="LecturerCustoms">This is the Lecturer work area:
            <br>Here you can customise the questions for the students.</label><br>
            <button id="AddQuestion" onclick="AddQuestion()">Add question:</button><br>                 
                    <div id="QuestionArea">
                        <!--The questions are added here-->
                    </div>
        </div>
	</div>
</body>
</html>