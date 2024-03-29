var language = function(lang) {
    if (localStorage.getItem("lang") == null) {
        var lang = localStorage.getItem("choice");
    } else {
        var lang = localStorage.getItem("lang");
    };
    $.getJSON("../lang/" + lang + ".contlang", function(contents) {
        $.each(contents, function(id, value) {
            if (document.getElementById(id) == null) {
                return;
            };
            document.getElementById(id).innerHTML = value;
        })
    })
};

var choice = function() {
    return localStorage.getItem("choice");
};

var sele = function() {
    var code = localStorage.getItem("choice");
    $(".selected").attr("class", "unselected lang_sele");
    $("#" + code).attr("class", "selected lang_sele");
};

export { language, choice, sele };