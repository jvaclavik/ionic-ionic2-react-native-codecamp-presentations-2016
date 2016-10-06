componentWillReceiveProps: function (nextProps) {
    this.setState({
        dataSource: this.state.dataSource.cloneWithRows(nextProps.data)
    });
},