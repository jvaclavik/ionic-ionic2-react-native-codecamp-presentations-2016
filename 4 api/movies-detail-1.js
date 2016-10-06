app.controller('MoviesDetailCtrl', function ($scope, MoviesService, $stateParams) {
    if($stateParams){
        var movieId = +$stateParams.id;
        $scope.movie = MoviesService.getMovieById(movieId);
    }
})
