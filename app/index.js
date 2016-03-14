var React = require('react');
var ReactDOM = require('react-dom');
//var routes = require('./config/routes');




//ReactDOM.render(routes, document.getElementById('app'));

function HelloWorld(props) {
  return (
    <div> Hello World {props.name} </div>
  )
}

ReactDOM.render(<HelloWorld name='chetan' />, document.getElementById('app'));
