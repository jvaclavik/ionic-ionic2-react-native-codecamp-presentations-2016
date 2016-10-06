app.factory('MoviesService', function ($http, APP_CONFIG) {
    return new (function () {
        var service = this;
        service.data = {};
        service.getMovies = function () {
            var req = {
                method: "GET",
                url: APP_CONFIG.getApiUrl("moviesPopular")
            };
            $http(req).success(function (response) {
                service.data.movies = response.results;
            }).error(function (data, status, headers, config) {
                console.error("error");
            });
        };
        service.getMovies();
    })();
});
