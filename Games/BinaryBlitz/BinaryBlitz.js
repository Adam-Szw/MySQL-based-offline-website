function HideShowEasy() {
    document.getElementById("PregameContent").style.display = "None";
    document.getElementById("EasyGameDiv").style.display = "Block"
}

function HideShowMedium() {
    document.getElementById("PregameContent").style.display = "None";
    document.getElementById("MediumGameDiv").style.display = "Block"
}

function HideShowHard() {
    document.getElementById("PregameContent").style.display = "None";
    document.getElementById("HardGameDiv").style.display = "Block"
}

function ResetPage() {
    document.getElementById("HardGameDiv").style.display = "None"
    document.getElementById("MediumGameDiv").style.display = "None"
    document.getElementById("EasyGameDiv").style.display = "None"
    document.getElementById("PregameContent").style.display = "Block";
}
