import React, { Component } from 'react';
var NavigationBar = require('react-native-navbar');
var MoviesList = require('./components/MoviesList');

import {
    View,
    Navigator,
    ScrollView
} from 'react-native';

var Movies = React.createClass({
    getInitialState: function () {
        this.getDataFromApi();
        return {
            data: [],
        }
    },

    getDataFromApi: function () {
        // Get some data from API
    },

    render: function () {
        // TODO: Show Navbar, ScrollView and MovieList
    }
});
module.exports = Movies;