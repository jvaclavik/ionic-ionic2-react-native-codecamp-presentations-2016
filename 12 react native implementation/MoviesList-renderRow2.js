renderRow: function (rowData) {
    return (
        <View>
            <TouchableHighlight onPress={() => this.showMovieDetail(movie)} underlayColor='#dddddd'>
                <View style={styles.item}>
                    <Image style={styles.thumbnail} source={{uri: "http://image.tmdb.org/t/p/w500"+movie.poster_path}}/>
                    <View style={styles.rightContainer}>
                        <Text style={styles.title}>{movie.title}</Text>
                        <Text>{movie.vote_average} / 10</Text>
                    </View>
                </View>

            </TouchableHighlight>
            <View style={styles.separator}/>
        </View>
    );
}
