$scope.$on('$ionicView.enter', function () {
    ga_storage._trackPageview("/tutorial", "Tutorial");
});
