function zh() {
    //类修改//
    document.getElementsByClassName("selected")[0].className = "unselected";
    document.getElementById("zh").className = "selected";
    document.getElementsByClassName("confirm_1")[0].id = "gotoZH";
    document.getElementById("gotoZH").onclick = function() {
        location.href = "lang/zh/"
    }
    //条目//
    document.getElementById("Title").innerHTML = "冬风 | 这里是冬风的个人网站~";
    document.getElementById("Note_and_Show").innerHTML = "选择你要使用的语言";
    document.getElementById("Tip").innerHTML = "如果你已选择完毕，请点击下方“确认”按钮";
    document.getElementById("gotoZH").innerHTML = "确认";
}

