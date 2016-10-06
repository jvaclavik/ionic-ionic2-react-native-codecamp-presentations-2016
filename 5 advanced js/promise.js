var promise = $http(request);

var success = function (response) {
  service.data.movies = response.results
};

var error = function (response) {
  console.error("error");
}

promise.then(success, error);
