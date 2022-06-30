function zh_t() {
    //類修改//
    document.getElementsByClassName("selected")[0].className = "unselected";
    document.getElementById("zh_t").className = "selected";
    document.getElementsByClassName("confirm_1")[0].id = "gotozh_t";
    document.getElementById("gotozh_t").onclick = function() {
        location.href = "lang/zh_t/"
    }
    //條目//
    document.getElementById("Title").innerHTML = "冬風 | 這裡是冬風的個人網站~";
    document.getElementById("Note_and_Show").innerHTML = "選擇你要使用的語言";
    document.getElementById("Tip").innerHTML = "如果你已確認完畢，請點擊下方“確認”按鈕";
    document.getElementById("gotozh_t").innerHTML = "確認";
}

