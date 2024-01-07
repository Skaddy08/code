import movies from "../Services/movies_service.js";

$(document).ready(function () {
  let selectedGenres = [];

  // Function to update movie display based on selected genres
  function updateMovieDisplay() {
    movies.getmoviesDetails()
      .then((response) => {
        let moviedata = response.data;

        // Filter movies based on selected genres
        let filteredMovies = moviedata.filter(movie => {
          if (selectedGenres.length === 0 || selectedGenres.includes("All")) {
            return true; // Show all movies if "All" or no genres are selected
          } else {
            return movie.genre.some(g => selectedGenres.includes(g));
          }
        });

        // Display filtered movies
        $(".movie-display").empty();
        for (let mov of filteredMovies) {
          let display = `
            <div class="card-deck">
              <div class="card mb-3">
                <img src='${mov.poster}' class="img-fluid"  >
                <div class="overlay">
                  <h2>${mov.movie_name}</h2>
                  <button class="movie-about btn btn-outline-danger" data-recordId="${mov.id}">Book now</button>
                </div>
              </div>
            </div>`;
          $(".movie-display").append(display);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // Event listener for checkbox changes
  $(".genre-checkbox").on('change', function () {
    selectedGenres = [];
    $(".genre-checkbox:checked").each(function () {
      selectedGenres.push($(this).val());
    });
    updateMovieDisplay();
  });

  // Initial movie display
  updateMovieDisplay();
});

$(document).ready(function () {
  $(document).on('click', '.movie-about', function () {
    let id = $(this).attr("data-recordId");
    movies.getmoviesDetailsbyId(id)
      .then(response => {
        let datamovie = response.data;
        console.log(datamovie)
        window.location.href = `../HTML/movie_about.html?id=${id}`;
      })
      .catch(error => {
        console.log(error);
      });
  });
});
