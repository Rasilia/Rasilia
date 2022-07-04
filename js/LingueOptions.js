//These functions are used in language setting page.

/*
These functions below are used to set language.
Here is template.
function LanguageCode() {
    localStorage.setItem("lang", "LanguageCode")
    document.getElementsByClassName("selected")[0].className = "unselected";
    document.getElementById("LanguageCode").className = "selected";
}
*/
localStorage.setItem("lang", "en")
function en() {
    localStorage.setItem("lang", "en")
    document.getElementsByClassName("selected")[0].className = "unselected";
    document.getElementById("en").className = "selected";
}
function zh_s() {
    localStorage.setItem("lang", "zh_s")
    document.getElementsByClassName("selected")[0].className = "unselected";
    document.getElementById("zh_s").className = "selected";
}
function zh_t() {
    localStorage.setItem("lang", "zh_t")
    document.getElementsByClassName("selected")[0].className = "unselected";
    document.getElementById("zh_t").className = "selected";
}
function it() {
    localStorage.setItem("lang", "it")
    document.getElementsByClassName("selected")[0].className = "unselected";
    document.getElementById("it").className = "selected";
}
function ja() {
    localStorage.setItem("lang", "ja")
    document.getElementsByClassName("selected")[0].className = "unselected";
    document.getElementById("ja").className = "selected";
}
function ml() {
    localStorage.setItem("lang", "ml")
    document.getElementsByClassName("selected")[0].className = "unselected";
    document.getElementById("ml").className = "selected";
}