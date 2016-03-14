var React = require('react');

const ShowFriends =  React.createClass({
  render: function() {
    var listItems = this.props.names.map(function(name) {
      return <li>{name}</li>;
    });
    retrun (
      <div>
        <h3> Friends </h3>
        <ul>
          {listItems}
        </ul>
      </div>
    )
  }
});

module.exports = ShowFriends;
