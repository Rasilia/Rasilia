function en() {
    //Class Modification//
    document.getElementsByClassName("selected")[0].className = "unselected";
    document.getElementById("en").className = "selected";
    document.getElementsByClassName("confirm_1")[0].id = "gotoEN";
    //Entry Translation//
    document.getElementById("Title").innerHTML = "Rasilia | Here Is Rasilia\'s Personal Website~";
    document.getElementById("Note_and_Show").innerHTML = "Please select the language you wanna use.<br><p style='font-size: 40%; color: red;'>Tip: If you\'re sure to use English, please switch into other language once and switch back coz I don\'t know how to fix the bug. Sorry!</p>";
    document.getElementById("Tip").innerHTML = "If you have selected, please click the CONFIRM button below.";
    document.getElementById("gotoEN").innerHTML = "CONFIRM";
}

