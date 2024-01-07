import movies from "../Services/movies_service.js"

$(document).ready(function(){
    const urlParams = new URLSearchParams(window.location.search);
    const movieId = urlParams.get('id');
    movies.getmoviesDetailsbyId(movieId)
    .then((response)=>{
        movies.getmoviesDetailsbyId(movieId)

        let moviedata=response.data;
        console.log(moviedata);
        // Set the image source using jQuery
        $(".about-img").attr("src",moviedata.poster ); 
        $(".about-mov-name").text(moviedata.movie_name);
        $(".about-mov-rating").text(moviedata.rating);
        $(".about-mov-lang").text(moviedata.language);
        $(".about-mov-genre").text(moviedata.genre);
        $(".about-mov-dur").text(moviedata.movie_duration);
        $(".about-mov-des").text(moviedata.about_movie); 
        
        const castContainer = $(".cast-container");
                moviedata.cast_and_crew.cast.forEach(actor => {
                    castContainer.append(`
                    <div class="col">
                            <img src="${actor.cast_photo}" class="card-img-top" alt="${actor.name}">
                            <div class="card-body">
                                <h5 class="card-title">${actor.name}</h5>
                                <p>${actor.role}</p>
                            </div>
                        </div>
                    `);
                });

                // Set crew details
                const crewContainer = $(".crew-container");
                moviedata.cast_and_crew.crew.forEach(crewMember => {
                    crewContainer.append(`
                    <div class="col">
                            <img src="${crewMember.cast_photo}" class="card-img-top" alt="${crewMember.name}">
                            <div class="card-body">
                                <h5 class="card-title">${crewMember.name}</h5>
                                <p>${crewMember.role}</p>
                            </div>
                            </div>
                    `);
                });
  

       
    }).catch((error)=>{
        console.log(error);
    })
})





