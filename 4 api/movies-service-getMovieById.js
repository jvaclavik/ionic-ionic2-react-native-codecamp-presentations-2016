service.getMovieById = function (id) {
    var selectedMovie = {};
    angular.forEach(service.data.movies, function (movie) {
        if (movie.id == id) selectedMovie = movie;
    });
    return selectedMovie;
};
