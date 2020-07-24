import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

const popupContainerStyles = {
	position: 'absolute',
	top: 0,
	left: 0,
	zIndex: 1,
	width: '100%',
	height: '98.7%',
	backgroundColor: '#000000aa',
	transition: 'opacity .25s ease',
	justifyContent: 'center'
}

const popupFormStyles = {
	position: 'fixed',
	top: '25%',
	background: 'linear-gradient(to right, #00ba8a, #afe3d0 ,#afe3d0 60%)',
	border: '3px solid #000',
	borderRadius: '25px',
	padding: '50px'
}

class Popup extends Component {

	render(){
		return(
			<div className="popup" style={popupContainerStyles} className={`popup-${this.props.popupOpenStatus}`}>
				<form action="" method="POST" style={popupFormStyles}>
					<FontAwesomeIcon icon={faTimesCircle} onClick={this.props.dismissPopup}/>
					<div>
						<label htmlFor="logo">Upload your logo</label>
						<input type="file" name="logo"/>
					</div>
					<div>
						<label htmlFor="logo">Upload a banner image</label>
						<input type="file" name="banner"/>
					</div>
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

export default Popup;