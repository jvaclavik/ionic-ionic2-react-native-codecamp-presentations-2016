var MovieAdd = React.createClass({
  render: function() {
    return (
    <form onSubmit={this._handleSubmit}>
      <input ref="title" />
    </form>
    );   
  },
  
  _handleSubmit: function(e) {
    console.log(this.refs.title)  
  }  
});
