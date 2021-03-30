<!DOCTYPE html>
<html lang = "en">
<head>
    <title>Games</title>
    <link rel="stylesheet" href="public/Central/central.css">
    <link rel="icon" href="public/Central/Images/Games.png">
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
    
    //This section of code is used when the user types into the search box
    $(document).ready(function(){
      $("#SortBox").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#GameSort div").filter(function() {
          document.getElementById("FilterBy2").value = "0";
          $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
      });
    });

    function Sort() {
      //This is the sorting area bit of the code
      var vb = document.getElementById("SortBy2").value;
      document.getElementById("FilterBy2").value = "0";
      Filter();
        var arr=[];
        var anchors = document.getElementsByClassName("grid-item");
        for(var i = 0; i < anchors.length; i++){
        arr.push(anchors[i].innerHTML);
        }

        var arr2=[];
        var anchors2 = document.getElementsByClassName("grid-item");
        for(var i = 0; i < anchors2.length; i++){
        arr2.push(anchors2[i].textContent);
        }
        
        var names = []
        var nameList = []
        var elements = document.getElementsByClassName('grid-item');
        var x = document.getElementsByClassName('grid-item').innerHTML;
        for(var i=0; i<elements.length; i++) names.push(elements[i].textContent)
        {
        nameList = names}
        //The AZ sort option code runs here
        if (vb=="AZSort") {
          nameList.sort();
        }
        //The ZA sort option code runs here
        else if (vb=="ZASort") {
          nameList.sort();
          nameList.reverse();
        }
        for (var y =0; y<nameList.length; y++) {
          for (var b = 0; b < elements.length; b++) {

            if (arr2[b] == nameList[y]) {
              
              var temp = anchors[y].innerHTML;
              anchors[y].innerHTML = arr[b];
              arr[b] = temp;
              break;
            }
      }
    }
  }

  function Filter() {
      var vb = document.getElementById("FilterBy2").value;
      //If the Finished area has been selected
      if (vb=="Fin") {
        var x = document.getElementsByClassName("grid-item");
        Reappear();
        var vb3=document.getElementsByClassName("SortBy2")
        var vb2 = document.getElementsByName("NFin");
        var i;
        for (var y =0; y<vb2.length; y++) {
          for (var b = 0; b < x.length; b++) {
            if (x[b].textContent == vb2[y].textContent) {
              
              x[b].style.display="none";
              break;
            }
      }
    }
      }
      //If the Not Finished area has been selected
      else if (vb=="NFin") {
        var x = document.getElementsByClassName("grid-item");
        Reappear();
        var vb3=document.getElementsByClassName("SortBy2")
        vb3.disabled =true;
        var vb2 = document.getElementsByName("Fin");
        var i;
        for (var y =0; y<vb2.length; y++) {
          for (var b = 0; b < x.length; b++) {

            if (x[b].textContent == vb2[y].textContent) {
              
              x[b].style.display="none";
              break;
            }
      }}}   
      else if (vb=="0") {
        var vb3=document.getElementsByClassName("SortBy2")
        vb3.disabled=false;
        Reappear();
      }
  }

  //This function is called when the program wants all of the items to be shown
  function Reappear() {
    var x = document.getElementsByClassName("grid-item");
        var i;
        for (i = 0; i < x.length; i++) {
          x[i].style.display="block";
        }
  }

  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}; 
    </script>
</head>
<body>
    <!--The sidenav contains all of the links to the other pages-->
    <div class="sidenav">
	  		<img id="SideBar" src="public/Central/Images/Signin.png"><a href="/signIn">Sign In</a>
		<img id="SideBar" src="public/Central/Images/Games.png"><a href="/games">Games</a>
        <img id="SideBar" src="public/Central/Images/Profile.png"><a href="/profile">Profile</a>
        <img id="SideBar" src="public/Central/Images/Leaderboard.png"><a href="/scoreboard">Scoreboard</a>
        <img id="SideBar" src="public/Central/Images/Settings.png"><a href="/settings">Settings</a>
        <img id="SideBar" src="public/Central/Images/About.png"><a href="/about">About</a>
    </div>
    <!--The right side is the majority of the page's content-->
    <div id="RightSide">
      <div id="TopBox">
        <form class="example">
          <input type="text" id="SortBox" onkeyup="myFunction()" placeholder="Search:" autocomplete="off">
        </form>
          <!--Sort by selection area-->
          <div id="SortBy">
            <label>Sort by:</label>
            <select id ="SortBy2" onchange="Sort()">
              <option value="0">Options</option>
              <option value="AZSort" >A-Z</option>
              <option value="ZASort">Z-A</option>
            </select></div>
          <!--Filter by selection are-->
          <div id="FilterBy">
            <label>Filter by:</label>
            <select id="FilterBy2" onchange="Filter()">
              <option value="0">Filters</option>
              <option value="Fin">Finished</option>
              <option value="NFin">Not Finished</option>
            </select></div>
          </div>

    <!--This contains the code for the game grid-->
    <!--The sorting works if the grid names are unique-->
    <div id="GameSort">
      <div class="grid-container">
      <!--Each of the games can be filtered by whether they have been completed or not-->
        <div class="grid-item"><div name="Fin"><a href="/Games/BitCrush"><img id="GameScreen" src="public/Central/Images/cpu_full.png" alt="Bit Crush Game"/></a><br>BitCrush</div></div>
        <div class="grid-item"><div name="Fin"><a href="/Games/BinaryBlitz"><img id="GameScreen" src="public/Central/Images/BinaryImage.jpg" alt="BinaryBlitz Game"/></a><br>BinaryBlitz</div></div>
        <div class="grid-item"><div name="Fin"><a href="../Games/PythonQuizGame"><img id="GameScreen" src="public/Central/Images/Python.png" alt="Python Quiz"/></a><br>Python Quiz </div></div>
        <div class="grid-item"><div name="Fin"><a href="../Games/CodeTracerPython"><img id="GameScreen" src="public/Central/Images/CodeTracer-logo.png" alt="CodeTracer: Python"/></a><br>CodeTracer: Python Edition</div></div>
        <div class="grid-item"><div name="Fin"><a href="../Games/CodeTracerJava"><img id="GameScreen" src="public/Central/Images/CodeTracer-logo.png" alt="CodeTracer: Java"/></a><br>CodeTracer: Java Edition</div></div>
      </div>
    </div>
  </div>
</body>
</html>