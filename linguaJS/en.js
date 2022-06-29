function en() {
    //Class Modification//
    document.getElementsByClassName("selected")[0].className = "unselected";
    document.getElementById("en").className = "selected";
    window.onload = function() {
        document.getElementById("gotoEN").onclick = function() {
            location.href = "lang/en/"
        }
    }
    var x = document.getElementsByClassName("confirm_1")[0];
    if (x != "gotoEN") {
        document.getElementsByClassName("confirm_1")[0].id = "gotoEN";
        document.getElementById("gotoEN").onclick = function() {
            location.href = "lang/en/"
        }
    } 
    //Entry Translation//
    document.getElementById("Title").innerHTML = "Rasilia | Here Is Rasilia\'s Personal Website~";
    document.getElementById("Note_and_Show").innerHTML = "Please select the language you wanna use.";
    document.getElementById("Tip").innerHTML = "If you have selected, please click the CONFIRM button below.";
    document.getElementById("gotoEN").innerHTML = "CONFIRM";
}

