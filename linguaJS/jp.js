function jp() {
    document.getElementsByClassName("selected")[0].className = "unselected";
    document.getElementById("jp").className = "selected";
    document.getElementsByClassName("confirm_1")[0].id = "gotoJP";
    document.getElementById("gotoJP").onclick = function() {
        location.href = "lang/jp/"
    }

    document.getElementById("Title").innerHTML = "神木 冬風 | ";
    document.getElementById("Note_and_Show").innerHTML = "To be translated";
    document.getElementById("Tip").innerHTML = "To be translated";
    document.getElementById("gotoJP").innerHTML = "To be translated";
}

