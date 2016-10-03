'use strict';

var props = {
  style: 'width:200px',
  classNanme: 'main',
  value: 'yo'
};

var Hi = React.createClass({ displayName: "Hi",
  render: function render() {
    return React.createElement("h1", { "data-attr": "yes" }, "Hi!");
  }
});

ReactDOM.render(React.createElement(Hi, null), document.getElementById('example2'));
//# sourceMappingURL=sayhi.js.map
