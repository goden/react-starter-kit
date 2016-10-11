import React, { Component } from 'react';


export class Title extends Component {

	constructor(props, context) {

		super(props, context);

		// getInitialState()
		this.state = {
			data: 'This is constructor.',
			counter: 0
		};

	}

	// Require use 'bind()' to bundle tick() to component.
	tick() {
		this.setState({
			counter: this.state.counter + 1
		});
	}


	componentDidMount() {
		this.interval = setInterval(this.tick.bind(this), 1000);
	}

	componentWillUnmount() {
		clearInterval(this.interval);
	}

	render() {
		return <div>
				<h1>{this.props.text} by {this.props.author}</h1>
				<h2>{this.state.data}</h2>
				counter: {this.state.counter}
			</div>
	};
}

// getDeafultProps()
Title.defaultProps = {
	text: 'Hello',
	author: 'Goden'
}
