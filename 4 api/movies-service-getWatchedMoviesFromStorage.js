service.watchedMovies = [];

service.getWatchedMoviesFromStorage = function () {
    try {
        service.watchedMovies = JSON.parse(
          localStorage.getItem("watched_movies")
        ) || [];
    } catch (e) {
        console.warn("Invalid JSON string")
    }
    return service.watchedMovies;
};
