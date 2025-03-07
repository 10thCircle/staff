const { addUser, getUser } = require('./database');

function user(find) {
    var usersignedin = "no";
    var currentusername = "unknown";
    var userdisplay1 = document.getElementById("account").textContent;
    var signin_button = document.getElementById("signin_button");

    getUser(find, (error, user) => {
        if (error) throw error;
        if (user) {
            usersignedin = "yes";
            currentusername = usser.username;
            userdisplay1 = currentusername;
            signin_button.style.display = "none";
        }
    });
}

function user(signin) {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    addUser(username, password, (error, results) => {
        if (error) {
            console.error('Error adding user:', error);
            return;
        }
        console.log('User added successfully:', results);
    });
}