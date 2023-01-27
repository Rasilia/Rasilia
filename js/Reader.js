import { language, choice, sele } from "./Module.js"

$(document).ready(function() {
    if(localStorage.getItem("lang") != null) {
        location.href="Home"
    } else {
        if(choice() == null) {
            localStorage.setItem("choice", "en")
            var lang = "en"
            sele()
            language(lang)
        } else {
            var lang = choice()
            sele()
            language()
        }
    }
    $(".lang_sele").click(function() {
        var id = $(this).attr("id")
        localStorage.setItem("choice", id)
        sele()
        language()
    })
})
