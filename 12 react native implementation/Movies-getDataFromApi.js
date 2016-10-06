getDataFromApi: function () {
    fetch("http://api.themoviedb.org/3/movie/popular?api_key=4aa883f95999ec813b8bfaf319f3972b")
        .then(response => response.json())
        .then(json => {
            this.setState({
                data: json.results
            });
            console.log(json.results);
        })
        .catch((error) => {
            console.warn(error);
        });
},