var Hi = React.createClass({displayName: "Hi",
  render: function() {
    return React.createElement("h1", null, "Hi!");
  }
});

ReactDOM.render(
  React.createElement(Hi, null),
  document.getElementById('example2')
);

//# sourceMappingURL=sayhi.js.map
