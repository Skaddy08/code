import IndexService from "../Services/indexService.js";

$(document).ready(function () {
  IndexService.getmoviesDetails()
    .then((response) => {
      // Get a value
      var storedValue = sessionStorage.getItem("fuction");
      console.log(storedValue);
      

      let moviedata = response;
      for (let mov of moviedata) {
        let display = `

            


        <div class="card">
        <div class="card-image">
          <img src="${mov.poster}" alt="Card Image">
          <div class="overlay">
            <div class="card-info">
              <h3>${mov.movie_name}</h3>
               
              <button class="book-now-btn"  movieId="${mov.id}">Book Now</button>
            </div>
          </div>
        </div>
      </div>

             `;
        $(".movie-display").append(display);
      }
    })
    .catch((error) => {
      console.log(error);
    });

  // Events Controller

  IndexService.getEventsDetails()

    .then((response) => {
      console.log(response);

      let events = response;
      for (let event of events) {
        let div = `
            
                <div class="card">
                <div class="card-image">
                  <img src="${event.event_poster}" alt="Card Image">
                  <div class="overlay">
                    <div class="card-info">
                      <h3>${event.event_name}</h3>
                      
                      <button class="book-now-btn" eventId="${event.id}">Book Now</button>
                    </div>
                  </div>
                </div>
              </div>
        
            
            
            `;

        $(".events_info").append(div);
      }
    })
    .catch((error) => {
      console.log(error);
    });
});

//On click ---> Movie About
$(document).ready(function () {
  $(document).on("click", ".book-now-btn", function () {
    let id = $(this).attr("movieId");

    IndexService.getmoviesDetailsbyId(id)
      .then((response) => {
        let datamovie = response.data;

        console.log(datamovie);
        window.location.href = `../HTML/movie_about.html?id=${id}`;
      })
      .catch((error) => {
        console.error(" error");
      });
  });
});

//On click ---> Event About
$(document).ready(function () {
  $(document).on("click", ".book-now-btn", function () {
    let id = $(this).attr("eventId");

    IndexService.getEventsDetailsbyId(id)
      .then((response) => {
        let dataevent = response.data;

        console.log(dataevent);
        window.location.href = `../HTML/events_about.html?id=${id}`;
      })
      .catch((error) => {
        console.error(" error");
      });
  });
});
