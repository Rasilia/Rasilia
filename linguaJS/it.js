function it() {
    document.getElementsByClassName("selected")[0].className = "unselected";
    document.getElementById("it").className = "selected";
    document.getElementsByClassName("confirm_1")[0].id = "gotoIT";
    document.getElementById("gotoIT").onclick = function() {
        location.href = "lang/it/"
    }

    document.getElementById("Title").innerHTML = "Rasilia | Questo e'il individuale sito web di Rasilia~";
    document.getElementById("Note_and_Show").innerHTML = "To be translated(Italiano)";
    document.getElementById("Tip").innerHTML = "To be translated";
    document.getElementById("gotoIT").innerHTML = "To be translated";
}

