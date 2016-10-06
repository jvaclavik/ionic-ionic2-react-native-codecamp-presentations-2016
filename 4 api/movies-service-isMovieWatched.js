service.isMovieWatched = function (movieId) {
    return !!~service.watchedMovies.indexOf(movieId)
};
