import React, {Component} from 'react';
import {View, Text, ListView} from 'react-native';

var MoviesList = React.createClass({
    getInitialState: function () {
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        return {
            dataSource: ds.cloneWithRows(this.props.data),
        };
    },

    renderRow: function (movie) {
        // TODO
    },

    componentWillReceiveProps: function (nextProps) {
        // TODO
    },

    render: function () {
        return (
            <View>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) => this.renderRow(rowData)} />
            </View>
        );
    }
});
module.exports = MoviesList;