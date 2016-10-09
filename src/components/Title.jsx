import React, { Component } from 'react';


export class Title extends Component {

	constructor(props, context) {

		super(props, context);

		this.state = {
			data: 'This is constructor.',
			counter: 0
		};	

	}

	tick() {
		this.setState({
			counter: this.state.counter + 1
		});
	}


	componentDidMount() {
		setInterval(this.tick.bind(this), 1000);     
	}

	render() {
		return <div>
				<h1>{this.props.text} by {this.props.author}</h1>
				<h2>{this.state.data}</h2>
				counter: {this.state.counter}
			</div>
	};
}

Title.defaultProps = {
	text: 'Hello',
	author: 'Goden'
}