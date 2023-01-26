$(document).ready(function() {
    if(localStorage.getItem("lang") != null) {
        location.href="Home"
    } else {
        localStorage.setItem("choice", "en")
    }
    $("#en").click(function() {
        localStorage.setItem("choice", "en")
        document.getElementsByClassName("selected")[0].className = "unselected";
        document.getElementById("en").className = "selected";
        $.getJSON("../lang/en.json"), function(contents) {
            $.each(contents, function(id, value) {
                document.getElementById(id).innerHTML = value;
            })
        }
    })
})