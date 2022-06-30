function ml() {
    document.getElementsByClassName("selected")[0].className = "unselected";
    document.getElementById("ml").className = "selected";
    document.getElementsByClassName("confirm_1")[0].id = "gotoML";
    document.getElementById("gotoML").onclick = function() {
        location.href = "lang/ml/"
    }

    document.getElementById("Title").innerHTML = "Rasilia | ";
    document.getElementById("Note_and_Show").innerHTML = "To be translated(Maplinj)";
    document.getElementById("Tip").innerHTML = "To be translated";
    document.getElementById("gotoML").innerHTML = "To be translated";
}

