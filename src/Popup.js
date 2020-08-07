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

const popupCloseButtonStyles = {
	position: 'absolute',
	top: '10px',
	right: '10px',
	transition: 'color .25s ease',
	fontSize: '2em',
	cursor: 'pointer'
}

const popupImagePreviewStyles = {
	height: '150px'
}

class Popup extends Component {
	constructor(props){
		super(props);
		this.state = {
			logo: '',
			banner: '',
			email: '' ,
			popupFormStyles: {
				position: 'fixed',
				top: '25%',
				background: 'linear-gradient(to right, #00ba8a, #afe3d0 ,#afe3d0 60%)',
				border: '3px solid #00ba8a',
				borderRadius: '25px',
				padding: '50px'
			}
		}
		this.handleUploadChange = this.handleUploadChange.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleUploadChange(event){
		let key = event.target.name;
		let newState = {};
	    let image = event.target.files[0];
	    if(image){
			newState[key] = image.name;
			this.setState(newState);

	    	// Set preview
	    	let reader = new FileReader();
	    	let frame = document.querySelector(`.${key}-preview`);
			reader.addEventListener('load', function () {
			  frame.style.background = `url(${ reader.result }) no-repeat center center/contain`;
			}, false);
	    	reader.readAsDataURL(image);

	    	// Update form position
	    	if(this.state.logo || this.state.banner){
	    		this.setState({
	    			popupFormStyles: {...this.state.popupFormStyles, top: '2%'}
	    		});
	    	} else {
	    		this.setState({
	    			popupFormStyles: {...this.state.popupFormStyles, top: '16%'}
	    		});
	    	}
		}
	}

	handleChange(event){
		let key = event.target.name;
		let newState = {};
		newState[key] = event.target.value;
		this.setState(newState);
	}

	componentWillUpdate(){
	}

	render(){
		return(
			<div style={popupContainerStyles} className={`popup popup-${this.props.popupOpenStatus}`}>
				<form action="/#/template" method="GET" style={this.state.popupFormStyles}>
					<FontAwesomeIcon icon={faTimesCircle} style={popupCloseButtonStyles} onClick={this.props.dismissPopup}/>
					<h2>Generate a free template?</h2>
					<div>
						<label htmlFor="logo">Upload your logo</label>
						<input type="file" name="logo" onChange={this.handleUploadChange} required/>
					</div>
					<div className="image-preview-container">
						<div style={this.state.logo ? popupImagePreviewStyles : {}} className="logo-preview"></div>
					</div>
					<div>
						<label htmlFor="banner">Upload a banner image</label>
						<input type="file" name="banner" onChange={this.handleUploadChange} required/>
					</div>
					<div className="image-preview-container">
						<div style={this.state.banner ? popupImagePreviewStyles : {}} className="banner-preview"></div>
					</div>
					<div>
						<label htmlFor="email">Enter your email</label>
						<input type="text" name="email" onChange={this.handleChange} value={this.state.email} required/>
					</div>
					{ // Check if form filled
						(this.state.logo && this.state.banner && this.state.email) 
						? <div>
							<input type="submit" value="Generate Now!"/>
						  </div>
						: ''
					}
					{/*

					const reader = new FileReader();
					reader.addEventListener("load", function () {
					  frame.style.backgroundImage = `url(${ reader.result })`;
					}, false);
					file.addEventListener('change',function() {
					  const image = this.files[0];
					  if(image) reader.readAsDataURL(image);
					}, false)
					}

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