render() { 
    return <input value={this.state.value} onChange={this.handleChange} />
}
handleChange(e) {
    this.setState({value: e.target.value});
}