class HelloWorldView extends React.Component {
    render() {
        return (
            <View style={{flexDirection: 'row', flex: 1}}>
                <View style={{flex: 1, backgroundColor: 'red'}}></View>
                <View style={{flex: 1, backgroundColor: 'green'}}></View>
                <View style={{flex: 1, backgroundColor: 'blue'}}></View>
            </View>
        )
    }
}
