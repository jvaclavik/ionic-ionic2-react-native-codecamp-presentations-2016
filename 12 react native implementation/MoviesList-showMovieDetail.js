showMovieDetail: function (movie) {
    this.props.navigator.push({
        title: movie.title,
        component: MovieDetail,
        passProps: {movie}
    });
},