import User from "../Models/addUserModel.js";
import UserService from "../Services/addUserService.js";
import registerUser from "../Authentication/registration.js";

$(document).ready(() => {
  $("#registrationForm").submit((e) => {
    e.preventDefault();
    console.log("register handler");

    let name = $("#username").val();
    let password = $("#password").val();
    let email = $("#email").val();
    let pnumber = $("#contactNumber").val();
    let fullName = $("#fullName").val();
    let dob = $(".dob").val();
    let userhistory=[ ];

    var favArtistArray = [];
    $('input[name="ShahRukhKhan"]:checked').each(function () {
        favArtistArray.push($(this).val());
    });
    $('input[name="SalmanKhan"]:checked').each(function () {
        favArtistArray.push($(this).val());
    });
    $('input[name="HritikRoshan"]:checked').each(function () {
        favArtistArray.push($(this).val());
    });

    var favGenreArray = [];

    $('input[name="Action"]:checked').each(function () {
        favGenreArray.push($(this).val());
    });
    
    $('input[name="Romantic"]:checked').each(function () {
        favGenreArray.push($(this).val());
    });
    
    $('input[name="Thriller"]:checked').each(function () {
        favGenreArray.push($(this).val());
    });
    
    
    



    registerUser();
    let user = new User();
    user.userName = name;
    user.email = email;
    user.password = password;
    user.userFullName = fullName;
    user.date_of_birth = dob;
    user._userNumber = pnumber;
    user._favGenreArray=favGenreArray;
    user._favArtistArray=favArtistArray;
    user._userhistory = userhistory;

    console.log(user);

    UserService.addUserDetails(user)
      .then((response) => {
        window.location.href = `../HTML/login.html`;  
    })
      .catch((error) => {
        console.log(error);
      });
  });
});
