//These functions are used in language setting page.

/*
These functions below are used to set language.
Here is template.
function LanguageCode() {
    localStorage.setItem("choice", "LanguageCode")
    document.getElementsByClassName("selected")[0].className = "unselected";
    document.getElementById("LanguageCode").className = "selected";
}
*/


function zh_s() {
    localStorage.setItem("choice", "zh_s")
    document.getElementsByClassName("selected")[0].className = "unselected";
    document.getElementById("zh_s").className = "selected";
}
function zh_t() {
    localStorage.setItem("choice", "zh_t")
    document.getElementsByClassName("selected")[0].className = "unselected";
    document.getElementById("zh_t").className = "selected";
}
function it() {
    localStorage.setItem("choice", "it")
    document.getElementsByClassName("selected")[0].className = "unselected";
    document.getElementById("it").className = "selected";
}
function ja() {
    localStorage.setItem("choice", "ja")
    document.getElementsByClassName("selected")[0].className = "unselected";
    document.getElementById("ja").className = "selected";
}
function ml() {
    localStorage.setItem("choice", "ml")
    document.getElementsByClassName("selected")[0].className = "unselected";
    document.getElementById("ml").className = "selected";
}