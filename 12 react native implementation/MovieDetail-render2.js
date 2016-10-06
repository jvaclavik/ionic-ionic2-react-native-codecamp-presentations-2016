var BackButton = require('./BackButton');

...

render: function () {
    var movie = this.props.route.passProps.movie;
    return (
        <View style={styles.container}>
            <NavigationBar style={styles.navbar} tintColor="#08b1ff"
                            title={{ title: movie.title, tintColor: "#ffffff" }}
                            leftButton={
                                <BackButton onPress={() => this.props.navigator.pop()
                            } 
                            title="Back" 
                            tintColor="#fff" />}
            />
            <ScrollView style={styles.scroll}>
                <Image
                    style={styles.image}
                    source={{uri: "http://image.tmdb.org/t/p/w500/"+movie.backdrop_path}}/>
                <Text style={styles.overview}>{movie.overview}</Text>
            </ScrollView>
        </View>
    );
},