function mj() {
    document.getElementsByClassName("selected")[0].className = "unselected";
    document.getElementById("mj").className = "selected";
    document.getElementsByClassName("confirm_1")[0].id = "gotoMJ";
    document.getElementById("gotoMJ").onclick = function() {
        location.href = "lang/mj/"
    }

    document.getElementById("Title").innerHTML = "Rasilia | ";
    document.getElementById("Note_and_Show").innerHTML = "To be translated";
    document.getElementById("Tip").innerHTML = "To be translated";
    document.getElementById("gotoMJ").innerHTML = "To be translated";
}

