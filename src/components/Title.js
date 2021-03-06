'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Title = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Title = exports.Title = function (_Component) {
	_inherits(Title, _Component);

	function Title(props, context) {
		_classCallCheck(this, Title);

		// getInitialState()
		var _this = _possibleConstructorReturn(this, (Title.__proto__ || Object.getPrototypeOf(Title)).call(this, props, context));

		_this.state = {
			data: 'This is constructor.',
			counter: 0
		};

		return _this;
	}

	// Require use 'bind()' to bundle tick() to component.


	_createClass(Title, [{
		key: 'tick',
		value: function tick() {
			this.setState({
				counter: this.state.counter + 1
			});
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.interval = setInterval(this.tick.bind(this), 1000);
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			clearInterval(this.interval);
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement("div", null, _react2.default.createElement("h1", null, this.props.text, " by ", this.props.author), _react2.default.createElement("h2", null, this.state.data), "counter: ", this.state.counter);
		}
	}]);

	return Title;
}(_react.Component);

// getDeafultProps()


Title.defaultProps = {
	text: 'Hello',
	author: 'Goden'
};
//# sourceMappingURL=Title.js.map
