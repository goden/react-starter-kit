var props = {
  style: 'width:200px',
  classNanme: 'main',
  value: 'yo'
};

var Hi = React.createClass({
  render: function() {
    return <h1 data-attr="yes">Hi!</h1>;
  }
});

ReactDOM.render(
  <Hi />,
  document.getElementById('example2')
);
