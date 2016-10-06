$scope.$on("someEvent", function (args) {
  // Called every time someEvent is broadcasted
});

$scope.$broadcast("someEvent", args); // Call event by broadcast


$scope.$on("$ionicView.enter", function () {
  //
});
