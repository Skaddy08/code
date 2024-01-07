import UserLoginService from "../Services/loginUserService.js"
import UserService from "../Services/addUserService.js";

$(document).ready(() => {
    $('#loginForm').submit((event) => {
        event.preventDefault();
        
        let username = $('#username').val()
        let password = $('#password').val()

        console.log(username, password);

        let ans = 0
        let isloggedIn = false;

        UserService.getUserDetails().then((response) => {
            let userData = response.data;

                    for (let user of userData) {
                        let userName = user._userName;
                        let pass = user._password;
                        let id =  user.id
                        if (username === userName) {
                            if (password === pass) {
                                ans = 1;
                                sessionStorage.setItem("Username", userName);
                                sessionStorage.setItem("Id", id);
                                sessionStorage.setItem("function","true");

                                // sessionStorage.setItem("Name", user._userFullName)
                                
                                console.log(user._userFullName);
                                window.location.href = 'index.html'

                            }
                            break;

                        }
                    }
                    if (ans == 1) {
                        alert("Success")
                    }
                    else {
                        alert("Wrong UserId or Password")
                    }
        }).catch((error) => console.log(error))

    })
})