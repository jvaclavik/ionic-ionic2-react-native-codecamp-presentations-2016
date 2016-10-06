$stateProvider.state('movies-detail', {
    url: '/movies/:id',
    templateUrl: "views/movies/detail.html",
    controller: 'MovieDetailCtrl'
})
