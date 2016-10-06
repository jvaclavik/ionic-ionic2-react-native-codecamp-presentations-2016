var React = require('react-native');
var {View, Text, TextInput, StyleSheet} = React;

var MovieSearch = React.createClass({
    getInitialState(){
        this.setState({searchString: ""});
        return {};
    },
    
    render: function () {
        return (
            <View style={styles.searchBar}>
                <TextInput
                    style={styles.input}
                    value={this.state.searchString}
                    onChangeText={this.props.onChange}
                    ref="searchString"
                    placeholder="Search"
                    placeholderTextColor="#eee" />
            </View>
        );
    }
});
module.exports = MovieSearch;
