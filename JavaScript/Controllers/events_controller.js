import EventsService from "../Services/Events_Service.js"

$(document).ready(function(){

    EventsService.getEventsDetails()

    .then((response)=>{

        console.log(response);


        let events = response;
        for(let event of events){


            let div = `
            <div class="card-container">
            <div class="card">
            <img src='${event.event_poster}' alt = "Image">
            
                
                <div class="overlay">
                    <h2>${event.event_name}</h2>
                    <p class="card-text"> Date : ${event.date}</p>
                    <p class="card-text"> Venue : ${event.venue}</p>
                    <p class="card-text"> Time : ${event.time}</p>
                    
                    <a href="#" class="book-now-btn" eventsId="${event.id}">Book Now</a>
                    
                </div>
            </div>

            
        </div>

            
            
            `

            $(".events_info").append(div)

        }
        $(document).on('click','.book-now-btn',function(){

            let id = $(this).attr("eventsId");
            window.location.href = `../HTML/events_about.html?id=${id}`;  
          })

    })
    .catch((error)=>{
        console.log(error);
    })


})
