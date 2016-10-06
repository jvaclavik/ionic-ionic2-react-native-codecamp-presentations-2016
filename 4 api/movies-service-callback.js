service.getMovies = function (callback) {
    var req = {
        method: "GET",
        url: APP_CONFIG.getApiUrl("moviesPopular")
    };
    $http(req).success(function (response) {
        service.data.movies = response.results;
        if (callback) callback();
    }).error(function (data, status, headers, config) {
        console.error("error");
    });
};

service.getMovies(function(){
    service.getWatchedMoviesFromStorage();
});
