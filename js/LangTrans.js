import { language } from "./Module.js";

$(".lang_sele").click(function() {
    var id = $(this).attr("id");
    localStorage.setItem("lang", id);
    language();
})