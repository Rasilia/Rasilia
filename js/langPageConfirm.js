$(document).ready(function() {
    $(".confirm").click(function() {
        localStorage.setItem("lang", localStorage.getItem("choice"));
        localStorage.removeItem("choice");
        location.href="Home";
    })
})