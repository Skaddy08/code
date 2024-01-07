import SportsService from "../Services/SportsService.js";

$(document).ready(function(){

    SportsService.getSportsDetails()

    .then((response)=>{

        console.log(response);


        let sports = response;
        for(let sprt of sports){


            let div = `
            <div class="card-container">
            <div class="card">
            <img src='${sprt.sports_poster}' alt = "Image">
            
                
                <div class="overlay">
                    <h2>${sprt.match}</h2>
                    <p class="card-text"> Date : ${sprt.date}</p>
                    <p class="card-text"> Venue : ${sprt.place}</p>
                    <p class="card-text"> Time : ${sprt.time}</p>
                    
                   <button class="book-now-btn btn-danger" sportsId="${sprt.id}">Book Now<button>
                   
                    
                    
                </div>
            </div>

            
        </div>

            
            
            `

            $(".sports_info").append(div)

        }

        $(document).on('click','.book-now-btn',function(){

            let id = $(this).attr("sportsId");
            window.location.href = `../HTML/sports_about.html?id=${id}`;  
          })



    })
    .catch((error)=>{
        console.log(error);
    })


})



  