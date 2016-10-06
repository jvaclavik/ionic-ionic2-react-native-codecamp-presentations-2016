app.constant("APP_CONFIG", {
    debugMode: true,
    storagePrefix: "test_",
    defaultState: "/menu/home",

    apiKey: "4aa883f95999ec813b8bfaf319f3972b",
    apiUrl: "api.themoviedb.org/3/",
    apiEndpoints: {
        moviesPopular: "movie/popular"
    },

    getApiUrl: function (endpoint){
        return "http://" + this.apiUrl + this.apiEndpoints[endpoint] +"?api_key="+ this.apiKey;
    }
});
