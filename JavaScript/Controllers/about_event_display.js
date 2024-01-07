import EventsService from "../Services/Events_Service.js";

$(document).ready(function(){
    const urlParams = new URLSearchParams(window.location.search);
    const eventsId = urlParams.get('id');
   EventsService.getEventsDetailsbyId(eventsId)
    .then((response)=>{
        EventsService.getEventsDetailsbyId(eventsId)

        let eventsdata = response.data;
        console.log(eventsdata);
        // Set the image source using jQuery
        $(".about-img").attr("src",eventsdata.event_poster); 
        $(".about-events-name").text(eventsdata.event_name);
        $(".about-eventartist-name").text(eventsdata.artist_name);
        $(".about-events-date").text(eventsdata.date);
        $(".about-events-venue").text(eventsdata.venue);
        $(".about-events-time").text(eventsdata.time);
        $(".about-events-des").text(eventsdata.about_event); 
        $(".about-events-terms").text(eventsdata.terms_and_conditions);

        $(document).on('click', '#book-now', function () {
            const urlParams = new URLSearchParams(window.location.search);
            const eventsId = urlParams.get('id');
           EventsService.getEventsDetailsbyId(eventsId)
              .then(response => {
                let event = response.data;
                console.log(event);
                window.location.href = `../HTML/event_addcart.html?id=${eventsId}`;
              })
              .catch(error => {
                console.log(error);
              });
          });
       
    }).catch((error)=>{
        console.log(error);
    })
})





