<View>
    <TouchableHighlight onPress={() => this.showMovieDetail(movie)}>
        <View>
            <Image source={{uri: "http://image.tmdb.org/t/p/w500"+poster_path}}/>
            <View>
                <Text>{title}</Text>
                <Text>{vote_average} / 10</Text>
            </View>
        </View>
    </TouchableHighlight>
    <View style={styles.separator}/>
</View>
