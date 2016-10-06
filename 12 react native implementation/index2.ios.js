import React, { Component } from 'react';
import {
    AppRegistry,
    Navigator
} from 'react-native';
var Movies = require("./app/Movies");

class MoviesApp extends Component {
    renderScene(route, navigator) {
        return <route.component route={route} navigator={navigator} />;
    }

    render() {
        const initialRoute = {
            component: Movies
        };
        return (
            <View style={{ flex: 1 }}>
                <Navigator
                    initialRoute={initialRoute}
                    renderScene={this.renderScene}/>
            </View>
        );
    }
}

AppRegistry.registerComponent('MoviesApp', () => MoviesApp);
