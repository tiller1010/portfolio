import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle, faUpload, faChevronRight, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { withRouter } from 'react-router-dom';

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
			message: '' ,
			primaryColor: '' ,
			secondaryColor: '' ,
			popupFormStyles: {
				position: 'fixed',
				top: '25%',
				background: 'linear-gradient(to right, #00ba8a, #afe3d0 ,#afe3d0 60%)',
				border: '3px solid #00ba8a',
				borderRadius: '25px',
				padding: '20px 50px',
				maxHeight: '590px',
				overflowY: 'auto'
			},
			emailMessageSent: false
		}
		this.handleUploadChange = this.handleUploadChange.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleMessageSubmit = this.handleMessageSubmit.bind(this);
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
			  sessionStorage.setItem(key, reader.result);
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
		sessionStorage.setItem(key, event.target.value);
	}

	handleSubmit(event){
		event.preventDefault();
		let xhr = new XMLHttpRequest();
		xhr.open('GET', `http://email-capture.local/api/email-submission/store?email=${encodeURIComponent(this.state.email)}`); // Will need to update this url
		xhr.onreadystatechange = function(){
			if(this.readyState === XMLHttpRequest.DONE && this.status === 200){
				document.querySelector('.templateGeneratorForm').submit();
			}
		}
		xhr.send();
	}

	handleMessageSubmit(event){
		const componentContext = this;
		event.preventDefault();
		let xhr = new XMLHttpRequest();
		xhr.open('GET', `http://email-capture.local/api/email-message/store?email_address=${encodeURIComponent(sessionStorage.getItem('email'))}&message=${encodeURIComponent(this.state.message)}`); // Will need to update this url
		xhr.onreadystatechange = function(){
			if(this.readyState === XMLHttpRequest.DONE && this.status === 200){
				componentContext.setState({
					emailMessageSent: true
				});
			}
		}
		xhr.send();
	}

	componentWillUpdate(){
	}

	render(){

		const { location } = this.props;

		if(!location.pathname.match(/template/)){
			return(
				<div style={popupContainerStyles} className={`popup popup-${this.props.popupOpenStatus}`}>
					<form action="/#/template" method="GET" style={this.state.popupFormStyles} className="templateGeneratorForm">
						<FontAwesomeIcon icon={faTimesCircle} style={popupCloseButtonStyles} onClick={this.props.dismissPopup}/>
						<h2>Generate a free template?</h2>
						<div style={{display: 'flex', alignItems: 'center', flexFlow: 'wrap'}}>
							<div className="tab1inputs">
								<div style={{position: 'relative', marginBottom: '10px', marginRight: '10px'}}>
									<input type="file" name="logo" onChange={this.handleUploadChange} required/>
									<label htmlFor="logo">
										<FontAwesomeIcon icon={faUpload} style={{marginRight: '20px'}}/>
										Upload your logo
									</label>
								</div>
								<div className="image-preview-container">
									<div style={this.state.logo ? popupImagePreviewStyles : {}} className="logo-preview"></div>
								</div>
								<div style={{position: 'relative', marginBottom: '10px', marginRight: '10px'}}>
									<input type="file" name="banner" onChange={this.handleUploadChange} required/>
									<label htmlFor="banner">
										<FontAwesomeIcon icon={faUpload} style={{marginRight: '20px'}}/>
										Upload a banner image
									</label>
								</div>
								<div className="image-preview-container">
									<div style={this.state.banner ? popupImagePreviewStyles : {}} className="banner-preview"></div>
								</div>
							</div>
							<div className="tab2inputs">
								<div style={{position: 'relative', width: '90%', marginBottom: '10px'}}>
									<input type="color" name="primaryColor" onChange={this.handleChange} required/>
									<label htmlFor="primaryColor">Select a primary color</label>
								</div>
								<div style={{position: 'relative', width: '90%', marginBottom: '10px'}}>
									<input type="color" name="secondaryColor" onChange={this.handleChange} required/>
									<label htmlFor="secondaryColor">Select a secondary color</label>
								</div>
							</div>
						</div>
						<div className="emailField">
							<div>
								<label htmlFor="email">Enter your email</label>
								<input type="text" name="email" onChange={this.handleChange} value={this.state.email} required/>
							</div>
						</div>
						{ 	// Check if form filled
							(this.state.logo && this.state.banner && this.state.email) 
							? <div>
								<input type="submit" value="Generate Now!" onClick={this.handleSubmit}/><FontAwesomeIcon icon={faChevronRight} style={{position: 'absolute', right: '30px', bottom: '30px', color: '#fff'}}/>
							  </div>
							: ''
						}
					</form>
				</div>
			);
		} else {
			return (
				<div style={{...popupContainerStyles, height: '100%', zIndex: 100}} className={`popup popup-${this.props.popupOpenStatus}`}>
					{ 	// Check if message sent
						!this.state.emailMessageSent
					? <form action="" method="POST" style={{...this.state.popupFormStyles, maxWidth: '400px', textAlign: 'center', background: '#fff', border: '3px solid #000'}}>
						<FontAwesomeIcon icon={faTimesCircle} style={popupCloseButtonStyles} onClick={this.props.dismissPopup}/>
						<h2>Want to go further?</h2>
						<h3>Let me know what else you want to see here.</h3>
						<div>
							<label htmlFor="message" style={{textAlign: 'left'}}>Message:</label>
							<textarea name="message" style={{resize: 'none', width: '100%'}} onChange={this.handleChange}></textarea>
						</div>
						{ 	// Check if form filled
							(this.state.message) 
							? <div>
								<input type="submit" value="Send" onClick={this.handleMessageSubmit}/><FontAwesomeIcon icon={faChevronRight} style={{position: 'absolute', right: '30px', bottom: '30px', color: '#fff'}}/>
							  </div>
							: ''
						}
					  </form>
					: <div style={{...this.state.popupFormStyles, maxWidth: '400px', textAlign: 'center', background: '#fff', border: '3px solid #000'}}>
						<FontAwesomeIcon icon={faTimesCircle} style={popupCloseButtonStyles} onClick={this.props.dismissPopup}/>
						<h2>Your message has been sent!</h2>
						<FontAwesomeIcon icon={faCheckCircle} style={{color: '#3f1', fontSize: '4em'}}/>
						<h3>I will send you an email reply shortly</h3>
					  </div>
					}
				</div>
			);
		}
	}
}

export default withRouter(Popup);