function zh() {
    document.getElementsByClassName("selected")[0].className = "unselected";
    document.getElementById("zh").className = "selected";
    document.getElementById("title").innerHTML = "冬风 | 这里是冬风的个人网站~";
    document.getElementById("Note_and_Show").innerHTML = "选择你要使用的语言";
    document.getElementById("Tip").innerHTML = "如果你已选择完毕，请点击下方“确认”按钮";
    document.getElementById("Confirm").innerHTML = "确认";
}