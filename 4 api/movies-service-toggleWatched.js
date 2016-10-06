service.toggleWatched = function (id) {
    var occurenceIndex = service.watchedMovies.indexOf(id);
    if (~occurenceIndex)
        service.watchedMovies.splice(occurenceIndex, 1);
    else
        service.watchedMovies.push(+id);
    localStorage.setItem("watched_movies", JSON.stringify(service.watchedMovies));
};
