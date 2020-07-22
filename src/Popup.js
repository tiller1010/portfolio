import React, { Component } from 'react';

class Popup extends Component {
	constructor(){
		super(props);
		this.state = {
			openStatus: 'closed'
		}
	}

	componentDidMount(){
		// Wait 5 seconds before showing
		setTimeout(() => {
			this.setState({
				openStatus: 'open'
			})
		}, 5000)
	}

	render(){
		return(
			<div className="popup">
				<form action="" method="POST">
					<input type="file" name="logo"/>
					<input type="file" name="banner"/>
					{/*
					Find some open source color pickers
					Primary color
					Secondary color
					Tertiary color
					*/}
				</form>
			</div>
		);
	}
}