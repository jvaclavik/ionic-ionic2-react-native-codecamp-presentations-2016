var myDivElement = <div className="foo" />;
ReactDOM.render(myDivElement, document.getElementById('example'));

var MyComponent = React.createClass({/*...*/});
var myElement = <MyComponent someProperty={true} />;
ReactDOM.render(myElement, document.getElementById('example'));