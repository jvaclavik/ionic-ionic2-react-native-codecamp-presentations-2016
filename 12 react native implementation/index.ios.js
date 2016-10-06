'use strict';
var React = require('react-native');
var Movies = require("./app/Movies");
var {
    AppRegistry,
    View,
    Navigator,
    } = React;

function renderScene(route, navigator) {
    return <route.component route={route} navigator={navigator}/>;
}


var Routing = React.createClass({
    configureScene: function () {
        return Navigator.SceneConfigs.FloatFromRight;
    },

    render() {
        const initialRoute = {
            component: Movies
        };

        return (
            <View style={{ flex: 1, }}>
                <Navigator
                    initialRoute={initialRoute}
                    configureScene={this.configureScene}

                    renderScene={renderScene}/>
            </View>
        );
    }
})
AppRegistry.registerComponent('codecampRNMoviesApp', () => Routing);


