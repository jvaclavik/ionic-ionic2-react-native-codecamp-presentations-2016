app.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('movies', {
            url: '/movies',
            templateUrl: "views/movies/movies-list.html",
            controller: 'MoviesCtrl'
        })
        //.state('movies-top-rated', {
        //    url: '/movies/top-rated',
        //    templateUrl: "views/movies/movies-list.html",
        //    controller: 'MoviesTopRatedCtrl'
        //})
        //.state('movie-detail', {
        //    url: '/movies/:id',
        //    templateUrl: "views/movies/movies-detail.html",
        //    controller: 'MoviesDetailCtrl'
        //});

    $urlRouterProvider.otherwise('/movies');
});
