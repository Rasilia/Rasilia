import { language, choice, sele } from "./Module.js";

$(document).ready(function() {
    if(localStorage.getItem("lang") != null) {//Check whether "lang" key has value or not
        location.href="Home"
    } else {
        if(choice() == null) {//Check whether "choice" key has value or not
            localStorage.setItem("choice", "en");
            var lang = "en";
            sele();
            language(lang)
        } else {
            var lang = choice();
            sele();
            language()
        }
    }
    $(".lang_sele").click(function() {
        var id = $(this).attr("id");
        localStorage.setItem("choice", id);
        sele();
        language();
    })
})