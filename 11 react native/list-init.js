var React = require('react-native');
var MovieDetail = require('./MovieDetail');


var {
    View,
    Text,
    ListView,
    StyleSheet,
    Image,
    Navigator,
    } = React;


var MoviesList = React.createClass({
    getInitialState: function () {
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        return {
            dataSource: ds.cloneWithRows(this.props.data),
        };
    },


    renderRow: function (rowData) {
        var {
            title,
            poster_path,
            vote_average
            } = rowData;
        var movie = rowData;
        return (

            <View>
                    <View style={styles.item}>
                        <Image style={styles.thumbnail} source={{uri: "http://image.tmdb.org/t/p/w500"+poster_path}}/>
                        <View style={styles.rightContainer}>
                            <Text style={styles.title}>{title}</Text>
                            <Text>{vote_average} / 10</Text>
                        </View>
                    </View>
            </View>
        );
    },

    showMovieDetail: function (movie) {
        this.props.navigator.push({
            title: movie.title,
            component: MovieDetail,
            passProps: {movie}
        });

    },


    componentWillReceiveProps: function (nextProps) {
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(nextProps.data)
        });
    },


    render: function () {
        return (
            <View>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) => this.renderRow(rowData)}
                />
            </View>
        );

    },
});

module.exports = MoviesList;
