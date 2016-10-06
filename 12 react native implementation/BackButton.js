import React, { Component } from 'react';
import {
    Image,
    Text,
    View,
    TouchableHighlight,
    StyleSheet
} from 'react-native';

var BackButton = React.createClass({
    render: function () {
        const icon = 'http://i.stack.imgur.com/4ByUK.png';
        return (
            <View>
                <TouchableHighlight onPress={this.props.onPress} underlayColor="transparent">
                    <View style={styles.container}>
                        <Image
                            source={{ uri: icon  }}
                            style={styles.icon}/>
                        <Text style={{ paddingTop: 3, color: this.props.tintColor }}>{this.props.title}</Text>
                    </View>
                </TouchableHighlight>
            </View>
        );
    }
});

module.exports = BackButton;