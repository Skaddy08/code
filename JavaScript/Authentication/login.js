
import User from "../Models/addUserModel.js";
import UserService from "../Services/addUserService.js";


function loginUser() {
  const enteredUsername = document.getElementById("username").value;
  const enteredPassword = document.getElementById("password").value;

  // Simple validation
  if (!enteredUsername || !enteredPassword) {
    alert("Please fill in both username and password.");
    return;
  }
  //session storage vale
  let user = new User();
  UserService.addUserDetails(user)

  // Check if the entered username and password match any user
  const matchedUser = users.users.find(
    (user) =>
      user._userName === enteredUsername && user._password === enteredPassword
  );

  if (matchedUser) {
    // Store user information in Session Storage
    sessionStorage.setItem("loggedInUser", JSON.stringify(matchedUser));

    // Redirect or perform other actions for a successful login
    alert("Login successful!");
  } else {
    alert("Invalid username or password.");
  }
}
