var config = {
    debugMode: false,
    apiUrl: "http://saywhopay.joinut.com",
    apiEndpoints: {
        signIn: "/api/auth",
        signUp: "/api/register",

    },
    getApiUrl: function (endpoint){
        return config.apiUrl + config.apiEndpoints[endpoint];
    }
};