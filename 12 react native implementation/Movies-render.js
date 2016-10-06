render: function () {
    return (
        <View>
            <LoadingOverlay isVisible={this.state.loading}/>
            <NavigationBar
                tintColor="#08b1ff"
                title={{ title: 'Movie list', tintColor: "#ffffff" }}/>
            <ScrollView>
                <View>
                    <MovieList data={this.state.data}
                                navigator={this.props.navigator}/>
                </View>
            </ScrollView>
        </View>
    );
}