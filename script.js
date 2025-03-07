function user(find) {
    var usersignedin = "no"
    var currentusername = "unkown"
    var userdisplay1 = document.getElementById("account").textContent
    var signin_button = document.getElementById("signin_button")
    if(usersignedin == "yes") {
        userdisplay1 == currentusername;
        signin_button.style.display = "none";
        usersignedin = "yes"
    }
}