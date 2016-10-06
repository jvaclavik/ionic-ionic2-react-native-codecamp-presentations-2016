app.controller('MoviesDetailCtrl', function ($scope, MoviesService, $stateParams) {
    if($stateParams){
        var movieId = +$stateParams.id;
        $scope.movie = MoviesService.getMovieById(movieId);
    }

    $scope.toggleWatched = function(){
        MoviesService.toggleWatched(movieId);
    };

    $scope.isMovieWatched = function () {
        return MoviesService.isMovieWatched(movieId);
    };
})
