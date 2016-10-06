import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View
} from 'react-native';

class Movies extends Component {
  render() {
    return (
      <View>
        <Text>Hello</Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('Movies', () => Movies);
