getDataFromApi: function(searchString){
    var url = "http://api.themoviedb.org/3/"+ ((searchString) ? 
        'search/movie?api_key=4aa883f95999ec813b8bfaf319f3972b&query='+ searchString 
    : 
        'movie/popular?api_key=4aa883f95999ec813b8bfaf319f3972b');

    fetch(url)
        .then(response => response.json())
        .then(json => {
            this.setState({
                loading: false,
                data: json.results
            });
            console.log(json.results);
        })
        .catch((error) => {
            console.warn(error);
        });
},