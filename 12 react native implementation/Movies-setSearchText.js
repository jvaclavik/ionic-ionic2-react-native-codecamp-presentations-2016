var MovieSearch = require('./components/MovieSearch');
...
setSearchText: function (searchString) {
    this.setState({searchString: searchString})
    if(searchString.length > 1)
        setTimeout(() =>{
            this.getDataFromApi(searchString);
        },500);
},