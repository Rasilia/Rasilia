function en() {
    document.getElementsByClassName("selected")[0].className = "";
    document.getElementById("en").className = "selected";
    document.getElementById("title").innerHTML = "Rasilia | Here is Rasilia\'s Personal Website~";
    document.getElementById("Note_and_Show").innerHTML = "Please select the language you wanna use.";
    document.getElementById("Tip").innerHTML = "If you have selected, please click the CONFIRM button below.";
    document.getElementById("Confirm").innerHTML = "CONFIRM";
}

function zh() {
    document.getElementsByClassName("selected")[0].className = "";
    document.getElementById("zh").className = "selected";
    document.getElementById("title").innerHTML = "冬风 | 这里是冬风的个人网站~";
    document.getElementById("Note_and_Show").innerHTML = "选择你要使用的语言";
    document.getElementById("Tip").innerHTML = "如果你已选择完毕，请点击下方“确认”按钮";
    document.getElementById("Confirm").innerHTML = "确认";
}

function mj() {
    document.getElementsByClassName("selected")[0].className = "";
    document.getElementById("mj").className = "selected";
    document.getElementById("title").innerHTML = "Rasilia | ";
    document.getElementById("Note_and_Show").innerHTML = "";
    document.getElementById("Tip").innerHTML = "";
    document.getElementById("Confirm").innerHTML = "";
}

function jp() {
    document.getElementsByClassName("selected")[0].className = "";
    document.getElementById("jp").className = "selected";
    document.getElementById("title").innerHTML = "神木 冬風";
    document.getElementById("Note_and_Show").innerHTML = "";
    document.getElementById("Tip").innerHTML = "";
    document.getElementById("Confirm").innerHTML = "";
}