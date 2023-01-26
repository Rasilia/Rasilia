$(document).ready(function() {
    if(localStorage.getItem("lang") != null) {
        location.href="Home"
    } else {
        localStorage.setItem("choice", "en")
    }
    $("#en").click(function() {
        localStorage.setItem("choice", "en")
        $(".selected").first().attr("class", "unselected")
        $("#en").attr("class", "selected")
        $.getJSON("https://rasilia.top/lang/en.json"), function(contents) {
            $.each(contents, function(id, value) {
                document.getElementById(id).innerHTML = value;
            })
        }
    })
})