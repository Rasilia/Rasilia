localStorage.setItem("lang", "en")

/*function () {
    localStorage.setItem("lang", "")
    var language = localStorage.getItem("lang")
    console.log(language)
}*/

function en() {
    localStorage.setItem("lang", "en")
    document.getElementsByClassName("selected")[0].className = "unselected";
    document.getElementById("en").className = "selected";
    document.getElementsByClassName("confirm_1")[0].id = "gotoEN";
    document.getElementById("gotoEN").onclick = function() {
        location.href = "lang/en/"
    }
}

function zh_s() {
    localStorage.setItem("lang", "zh_s")
    document.getElementsByClassName("selected")[0].className = "unselected";
    document.getElementById("zh_s").className = "selected";
    document.getElementsByClassName("confirm_1")[0].id = "gotozh_s";
    document.getElementById("gotozh_s").onclick = function() {
        location.href = "lang/zh_s/"
    }
}

function zh_t() {
    localStorage.setItem("lang", "zh_t")
    document.getElementsByClassName("selected")[0].className = "unselected";
    document.getElementById("zh_t").className = "selected";
    document.getElementsByClassName("confirm_1")[0].id = "gotozh_t";
    document.getElementById("gotozh_t").onclick = function() {
        location.href = "lang/zh_t/"
    }
}

function it() {
    localStorage.setItem("lang", "it")
    document.getElementsByClassName("selected")[0].className = "unselected";
    document.getElementById("it").className = "selected";
    document.getElementsByClassName("confirm_1")[0].id = "gotoIT";
    document.getElementById("gotoIT").onclick = function() {
        location.href = "lang/it/"
    }
}

function ja() {
    localStorage.setItem("lang", "ja")
    document.getElementsByClassName("selected")[0].className = "unselected";
    document.getElementById("ja").className = "selected";
    document.getElementsByClassName("confirm_1")[0].id = "gotoJA";
    document.getElementById("gotoJA").onclick = function() {
        location.href = "lang/ja/"
    }
}

function ml() {
    localStorage.setItem("lang", "ml")
    document.getElementsByClassName("selected")[0].className = "unselected";
    document.getElementById("ml").className = "selected";
    document.getElementsByClassName("confirm_1")[0].id = "gotoML";
    document.getElementById("gotoML").onclick = function() {
        location.href = "lang/ml/"
    }
}