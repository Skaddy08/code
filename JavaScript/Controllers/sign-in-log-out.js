import SportsService from "../Services/SportsService.js";

// $(document).ready(function(){

//     SportsService.getSportsDetails()

//     .then((response)=>{

//         console.log(response);
//         try {
//             // Attempt to access session storage
//             var userData = sessionStorage.getItem("Username");
//             var userData = sessionStorage.getItem("Id");
//             $(".sign-logout").text("logout");

//             if(userData) {
//                 // User data found in session storage
//                 console.log("User data found:", userData);
//                 // Perform any further actions if needed
//             } else {
//                 // User data not found in session storage
//                 console.log("User data not found.");
//                 // Perform any other actions or redirect to sign-in page
//             }
//         } catch (error) {
//             // Handle any exceptions that may occur
//             console.error("Error accessing session storage:", error);
//             $(".sign-logout").text("sign");

//         }


//     })
//     .catch((error)=>{
//         console.log(error);
//     })


// })

$(document).ready(function() {
    var isLoggedIn = sessionStorage.getItem("function") === "true";

    updateButtonState();

    $(".sign-logout").on("click", function() {
        if (isLoggedIn) {
            // User is logged in, perform logout actions
            sessionStorage.removeItem("function");
            sessionStorage.removeItem("Username");
            sessionStorage.removeItem("Id");
        } else {
            // User is not logged in, redirect to the login page
            window.location.href = "../HTML/login.html";
        }

        // Toggle the user's login state
        isLoggedIn = !isLoggedIn;

        // Update the button state
        updateButtonState();
    });

    function updateButtonState() {
        // Update the button text based on the user's login state
        if (isLoggedIn) {
            $(".sign-logout").text("Logout");
        } else {
            $(".sign-logout").text("Sign In");
        }
    }
   
});

  