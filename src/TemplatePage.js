import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeSquare, faChevronRight, faChevronLeft, faBars } from '@fortawesome/free-solid-svg-icons';

class TemplatePage extends Component {

	componentWillMount(){
		this.setState({
			email: sessionStorage.getItem('email'),
			logo: sessionStorage.getItem('logo'),
			banner: sessionStorage.getItem('banner'),
			primaryColor: sessionStorage.getItem('primaryColor'),
			secondaryColor: sessionStorage.getItem('secondaryColor')
		})
	}

	componentDidMount(){

		//For carousel
		const carouselImages=document.querySelectorAll('.carouselImage');
		const track=document.querySelector('.carouselTrack');
		const slides=Array.from(track.children);
		const previousButton=document.querySelector('.carouselButtonLeft');
		const nextButton=document.querySelector('.carouselButtonRight');
		const navCircles=document.querySelector('.carouselNav');
		const dots = Array.from(navCircles.children);


		//Display all once loaded
		const displayImages=(image,index)=>{	
			image.style.display='block';
		}

		//Arrangement left to right
		const setSlidePosition=(slide,index)=>{
			let slideSize=slides[0].getBoundingClientRect();
			let slideWidth=slideSize.width;
			slide.style.left=slideWidth*index+'px';
		}

		//Display images in a row
		carouselImages.forEach(displayImages);
		slides.forEach(setSlidePosition);

		const moveToSlide=(track, currentSlide, targetSlide)=>{
			if(targetSlide){
				track.style.transform='translateX(-'+targetSlide.style.left+')';
				currentSlide.classList.remove('currentSlide');
				targetSlide.classList.add('currentSlide');
			}
		}

		const upDateDots=(currentDot, targetDot)=>{
			if(targetDot){
				currentDot.classList.remove('currentSlide')
				targetDot.classList.add('currentSlide')
			}
		}


		nextButton.addEventListener('click', event=>{
			const currentSlide=track.querySelector('.currentSlide');
			const nextSlide=currentSlide.nextElementSibling;
			const currentDot=navCircles.querySelector('.currentSlide');
			const nextDot=currentDot.nextElementSibling;

			moveToSlide(track,currentSlide,nextSlide);
			upDateDots(currentDot, nextDot);
		});

		previousButton.addEventListener('click', event=>{
			const currentSlide=track.querySelector('.currentSlide');
			const previousSlide=currentSlide.previousElementSibling;
			const currentDot=navCircles.querySelector('.currentSlide');
			const previousDot=currentDot.previousElementSibling;

			moveToSlide(track,currentSlide,previousSlide);
			upDateDots(currentDot, previousDot);
		});

		//Indicators to change slide on click
		navCircles.addEventListener('click',event=>{
			const targetDot=event.target.closest('button');
			if(!targetDot) return;
			const currentSlide=track.querySelector('.currentSlide');
			const currentDot=navCircles.querySelector('.currentSlide');
			const targetIndex=dots.findIndex(dot=> dot===targetDot);
			const targetSlide=slides[targetIndex];

			moveToSlide(track, currentSlide, targetSlide);
			upDateDots(currentDot, targetDot);
		})	

		//Fade Slogan
		const slogan = document.getElementById('siteDesc');
		document.addEventListener('scroll',function(){
			slogan.style.opacity=slogan.getBoundingClientRect().top/100;
		});

		// Fix carousel on resize
		window.onresize = function(){
			slides.forEach(setSlidePosition);
		}

	}
	
	render(){

		const currentYear = new Date().getFullYear();

		return (
			<div style={{backgroundColor: this.state.secondaryColor}}>
				<header style={{backgroundColor: this.state.primaryColor}}>
					<div id="logo" style={{background: this.state.logo ? `url(${this.state.logo}) no-repeat center center/cover` : ''}}></div>
					<h1 id='title'>Your Site Title</h1> <div id='siteDesc'>Your tagline</div>
				</header>

				<div id='fixed_utilities' style={{backgroundColor: this.state.primaryColor}}>
					<ul>
						<li className="nav-item">Home</li>
						<li className="nav-item">About</li>
						<li className="nav-item">Contact</li>
						<li>
							<FontAwesomeIcon icon={faEnvelopeSquare} style={{cursor: 'pointer', transform: 'scale(1.5)', margin: '0 10px'}} onClick={this.props.switchType} />
							<span className="email">{this.state.email}</span>
						</li>
					</ul>
					<FontAwesomeIcon icon={faBars} className="hamburger" />
				</div>

				<main>

					<div className="carousel-container">
						<div className='carousel'>
							<div className='carouselTrackContainer'>
								<ul className='carouselTrack'>

									<li className="carouselSlide currentSlide">
										<div className='carouselImage' style={{background: this.state.banner ? `url(${this.state.banner}) no-repeat center center/cover` : '', display: 'block'}}>
										</div>
									</li>

									<li className="carouselSlide">
										<div className='carouselImage' style={{background: "url('https://dummyimage.com/720x400') no-repeat center center/cover"}}>
										</div>
									</li>

									<li className="carouselSlide">
										<div className='carouselImage' style={{background: "url('https://dummyimage.com/720x400') no-repeat center center/cover"}}>
										</div>
									</li>

									<li className="carouselSlide">
										<div className='carouselImage' style={{background: "url('https://dummyimage.com/720x400') no-repeat center center/cover"}}>
										</div>
									</li>

									<li className="carouselSlide">
										<div className='carouselImage' style={{background: "url('https://dummyimage.com/720x400') no-repeat center center/cover"}}>
										</div>
									</li>

									<li className="carouselSlide">
										<div className='carouselImage' style={{background: "url('https://dummyimage.com/720x400') no-repeat center center/cover"}}>
										</div>
									</li>

								</ul>
							</div>
							<div className="carouselButtons">
								<button className='carouselButtonLeft' style={{backgroundColor: this.state.primaryColor}}>
									<FontAwesomeIcon icon={faChevronLeft} style={{cursor: 'pointer', transform: 'scale(1.5)'}} onClick={this.props.switchType} />
								</button>
								<button className='carouselButtonRight' style={{backgroundColor: this.state.primaryColor}}>
									<FontAwesomeIcon icon={faChevronRight} style={{cursor: 'pointer', transform: 'scale(1.5)'}} onClick={this.props.switchType} />
								</button>
							</div>

							<div className='carouselNav'>
								<button className='carouselIndicator currentSlide'></button>
								<button className='carouselIndicator'></button>
								<button className='carouselIndicator'></button>
								<button className='carouselIndicator'></button>
								<button className='carouselIndicator'></button>
								<button className='carouselIndicator'></button>
							</div>
						</div>
					</div>
					{/* End of carousel */}

					<div className="quotes content">
						<p className="quote">Quote 1</p>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget tempus metus. Nulla facilisi.
							Praesent id massa nunc. Vivamus sed malesuada diam. In urna sapien, egestas vitae cursus et, luctus non purus.
							Vivamus id urna non arcu varius venenatis in ullamcorper dui. In hac habitasse platea dictumst.
							Phasellus leo nisl, consectetur at turpis sed, blandit viverra purus.
							<br/>
							<br/>
							Suspendisse potenti. Vivamus venenatis nibh eget lacus aliquet ornare.
							Nullam molestie iaculis risus, quis vulputate ante consequat id.
							Aliquam tempor nisl eget dolor pellentesque viverra. In faucibus risus rutrum, placerat erat elementum, faucibus nisi.
							Aliquam quis augue massa. Nunc suscipit, magna a blandit interdum, erat diam sodales arcu, in viverra turpis ligula sed risus.
							Aenean rutrum, dolor quis tincidunt porta, odio eros ultrices sapien, auctor egestas arcu mi a diam.
							Mauris laoreet porttitor mi ac eleifend. Nullam blandit, purus vel condimentum mollis, massa enim suscipit ex, eget convallis nisl mi vitae urna.
							Nulla facilisi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
							Interdum et malesuada fames ac ante ipsum primis in faucibus.
						</p>
						<p className="quote">Quote 2</p>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget tempus metus. Nulla facilisi.
							Praesent id massa nunc. Vivamus sed malesuada diam. In urna sapien, egestas vitae cursus et, luctus non purus.
							Vivamus id urna non arcu varius venenatis in ullamcorper dui. In hac habitasse platea dictumst.
							Phasellus leo nisl, consectetur at turpis sed, blandit viverra purus.
							<br/>
							<br/>
							Suspendisse potenti. Vivamus venenatis nibh eget lacus aliquet ornare.
							Nullam molestie iaculis risus, quis vulputate ante consequat id.
							Aliquam tempor nisl eget dolor pellentesque viverra. In faucibus risus rutrum, placerat erat elementum, faucibus nisi.
							Aliquam quis augue massa. Nunc suscipit, magna a blandit interdum, erat diam sodales arcu, in viverra turpis ligula sed risus.
							Aenean rutrum, dolor quis tincidunt porta, odio eros ultrices sapien, auctor egestas arcu mi a diam.
							Mauris laoreet porttitor mi ac eleifend. Nullam blandit, purus vel condimentum mollis, massa enim suscipit ex, eget convallis nisl mi vitae urna.
							Nulla facilisi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
							Interdum et malesuada fames ac ante ipsum primis in faucibus.
						</p>
						<p className="quote">Quote 3</p>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget tempus metus. Nulla facilisi.
							Praesent id massa nunc. Vivamus sed malesuada diam. In urna sapien, egestas vitae cursus et, luctus non purus.
							Vivamus id urna non arcu varius venenatis in ullamcorper dui. In hac habitasse platea dictumst.
							Phasellus leo nisl, consectetur at turpis sed, blandit viverra purus.
							<br/>
							<br/>
							Suspendisse potenti. Vivamus venenatis nibh eget lacus aliquet ornare.
							Nullam molestie iaculis risus, quis vulputate ante consequat id.
							Aliquam tempor nisl eget dolor pellentesque viverra. In faucibus risus rutrum, placerat erat elementum, faucibus nisi.
							Aliquam quis augue massa. Nunc suscipit, magna a blandit interdum, erat diam sodales arcu, in viverra turpis ligula sed risus.
							Aenean rutrum, dolor quis tincidunt porta, odio eros ultrices sapien, auctor egestas arcu mi a diam.
							Mauris laoreet porttitor mi ac eleifend. Nullam blandit, purus vel condimentum mollis, massa enim suscipit ex, eget convallis nisl mi vitae urna.
							Nulla facilisi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
							Interdum et malesuada fames ac ante ipsum primis in faucibus.
						</p>
						<p className="quote">Quote 4</p>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget tempus metus. Nulla facilisi.
							Praesent id massa nunc. Vivamus sed malesuada diam. In urna sapien, egestas vitae cursus et, luctus non purus.
							Vivamus id urna non arcu varius venenatis in ullamcorper dui. In hac habitasse platea dictumst.
							Phasellus leo nisl, consectetur at turpis sed, blandit viverra purus.
							<br/>
							<br/>
							Suspendisse potenti. Vivamus venenatis nibh eget lacus aliquet ornare.
							Nullam molestie iaculis risus, quis vulputate ante consequat id.
							Aliquam tempor nisl eget dolor pellentesque viverra. In faucibus risus rutrum, placerat erat elementum, faucibus nisi.
							Aliquam quis augue massa. Nunc suscipit, magna a blandit interdum, erat diam sodales arcu, in viverra turpis ligula sed risus.
							Aenean rutrum, dolor quis tincidunt porta, odio eros ultrices sapien, auctor egestas arcu mi a diam.
							Mauris laoreet porttitor mi ac eleifend. Nullam blandit, purus vel condimentum mollis, massa enim suscipit ex, eget convallis nisl mi vitae urna.
							Nulla facilisi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
							Interdum et malesuada fames ac ante ipsum primis in faucibus.
						</p>
					</div>

					<div className='content'>
						<form id="contactForm" action={`mailto:${this.state.email}`} method="post" encType="text/plain">
							<label htmlFor="Name">Name:</label>
							<input className="contact" type="text" name="Name"/>
							<label htmlFor="Comment">Comment:</label>
							<textarea className="contact" name="Message"></textarea>
							<input type="submit" className="submit" value="Send" style={{backgroundColor: this.state.primaryColor}}/>
						</form>
					</div>

				</main>
				
				<footer>
					<p>Website Template by Tyler Trout { currentYear }</p>
				</footer>

				{/* Start template style */}
				<style type="text/css" dangerouslySetInnerHTML={{__html: `

					textarea,
					input.text,
					input[type="text"],
					input[type="button"],
					input[type="submit"],
					.input-checkbox {
					  -webkit-appearance: none;
					  border-radius: 0;
					}
					
					html{
						position: relative;
					}

					body{
						margin:0;
						left:0;
					}

					header{
						width:100%;
						height:150px;
						color:white;
						border-bottom: solid #000 20px;
					}

					#logo,h1{
						display:inline-block;
					}

					#logo{
						height: 150px;
						width:150px;
						background-repeat: no-repeat;
						background-size:contain;
						margin-right:10px;
					}

					#title{
						position: relative;
						top:-30px;
						margin-left: 30px;
						letter-spacing: 4px;
						font-size: 60px;
						transform: translateY(-15px);
						white-space: nowrap;
						z-index: 11;
					}

					#siteDesc{
						font-size: 50px;
						position: absolute;
						right: 100px;
						font-style: italic;
						top :95px;
					}

					#fixed_utilities{
						position: fixed;
						top:0;
						right:0;
						display: flex;
					    min-width: 100px;
					    justify-content: space-around;
					    align-items: center;
						font-family: arial;
						color: white;
						z-index:10;
					}
					#fixed_utilities ul {
						display: flex;
						list-style: none;
						margin: 0;
						padding: 0;
						justify-content: space-between;
					}
					#fixed_utilities ul li, #fixed_utilities .hamburger{
						padding: 10px;
						cursor: pointer;
						transition: .25s ease color, .25s ease background-color;
					}
					#fixed_utilities .hamburger{
						display: none;
						font-size: 2em;
					}
					#fixed_utilities ul li:hover, #fixed_utilities .hamburger:hover{
						color: #fff;
						background-color: #000;
					}

					/* Start Popup */
					.popup-closed{
					  display: flex;
					  visibility: hidden;
					  opacity: 0;
					}
					.popup-open{
					  display: flex;
					  visibility: visible;
					  opacity: 1;
					}
					.popup svg.fa-times-circle:hover{
					  color: #f00;
					}
					.popup h2{
					    font-family: "Francois One", Helvetica, sans-serif;
					}
					.popup label, .popup input, .popup textarea {
					  display: block;
					  font-family: sans-serif;
					}
					.popup input[type='submit']{
					  position: relative !important;
					  display: block;
					  margin-left: auto;
					  margin-right: -30px;
					  margin-top: 30px;
					  border-radius: 10px;
					  background-color: #0bb327;
					  cursor: pointer;
					  color: #fff;
					  padding: 10px;
					  padding-right: 30px;
					  border: none;
					  transition: background-color .25s ease;
					}
					.popup input[type='submit']:hover{
					  background-color: #10ce30;
					}
					.popup .fa-chevron-right{
						right: 50px !important;
					    bottom: 50px !important;
					}
					.popup-opener{
					  position: fixed;
					  bottom: 50px;
					  right: 0;
					  padding: 10px;
					  background: #fff;
					  color: #000;
					  font-size: 1em;
					  font-family: "Francois One", Helvetica, sans-serif;
					  transition: background .5s ease;
					  border: none;
					  cursor: pointer;
					}
					.popup-opener:hover{
					  background: linear-gradient(to bottom, #fff 80%, #aaa);
					}
					.popup-opener .main-button{
					  display: none;
					}
					.popup-opener .template-button{
					  display: block !important;
					}
					/* End Popup */

					p{
						padding:50px 10px;
						border:solid #55555511;
						font-family:sans-serif;
						font-size: 16px;
						background-color:white;
						text-indent: 22px;
					}
					p.quote{
						font-size: 2em;
						font-style: italic;
					}

					.content{
						border-radius: 15px;
					    padding: 20px;
					    width: 80%;
					    margin: 40px auto;
					    background: white;
					    border: 3px solid #ccc;
					}

					.sub_footer{
						width:80%;
						height:400px;
						margin:auto;
						background: grey;
					}

					footer{
						background-color: white;
						width:100%;
						height:50px;
						line-height: 50px;
						font-family: arial;
						text-align: center;
					}

					.toggleBox{
						height:150px;
						width:200px;
						text-align: center;
						display: none;
						color: white;
						font-family: arial;
						font-size: 25px;
						line-height: 150px;
					}

					/*Carousel Styles*/
					button{
						cursor: pointer;
					}

					.carousel-container{
						background-color: #ccc;

					}

					.carousel{
						position: relative;
						height:450px;
					}

					.carouselImage{
						display: none;
						width:100%;
						height: 100%;
					}

					.carouselTrackContainer{
						position: relative;
						height:100%;
						background: #ccc;
						overflow: hidden;
					}

					.carouselTrack{
						padding:0;
						margin:0;
						list-style:none;
						position: relative;
						height:100%;
						transition: transform 250ms ease-in;
					}

					.carouselSlide{
						position: absolute;
						top:0;
						bottom:0;
						width:100%;
					}

					.carouselButtons{
						position: absolute;
						bottom: 0;
						right: 0;
						width: 40%;
						z-index: 2;
					}

					.carouselButtonLeft{
						width: 40%;
						height: 38px;
						margin: 1px 10px;
						border: 0;
					}

					.carouselButtonRight{
						width: 40%;
						height: 38px;
						margin: 1px 10px;
						border: 0;
					}

					.carousel > button{
						transition: background-color .5s;
					}

					.carousel .carouselButtons > button:hover{
						background-color: #fff;
					}

					.carouselNav{
						transform: translateY(-40px);
						width:100%;
						padding: 11px 0;
						background-color: #cccccccc;

					}

					.carouselIndicator{
						margin:0 15px;
						border:0;
						border-radius: 50%;
						background:grey;
						height:11px;
						width:11px;
						padding: 0;
						transition: background .5s;
					}

					.carouselIndicator:hover{
						background: #fff;
					}

					.carouselIndicator.currentSlide{
						background:black;
					}
					/*End carousel*/

					#address{
						border:solid #55555577;
						width:500px;
						height:100%;
						padding-top: 10px;
						margin-left:40px;
						background-color: white;
					}
					#mapImage{
						transform: translateY(4px);
						width:500px;
					}
					.addressLabel{
						font-family: sans-serif;
						margin-left: 5px;
					}
					.addressValue{
						float:right;
						margin-right: 5px;
					}

					#contactForm{
						font-family: arial;
						background: white;
						padding:12px;
					    display: flex;
					    flex-direction: column;
					    justify-content: center;
					}
					.contact{
						margin:13px;
						padding: 10px 0;
						font-family: arial;
					}
					textarea{
						min-height: 100px;
					}
					.submit{
						cursor: pointer;
						padding: 15px 0;
						color: #fff;
						font-size: 1.5em;
						border: none;
						transition: background-color .5s;
					}
					.submit:hover{
					}

					footer p{
						margin: 0;
						font-size: 1em;
						padding: 0;
					}

					@media only screen and (max-width: 960px){
						header{
							height:120px;
						}
						#logo{
							height:120px;
							width:120px;
						}
						#title{
							position: absolute;
							top:18px;
							transform: translateY(-6px);
							font-size:45px;
						}
						#siteDesc{
							top: 85px;
							font-size: 2em;
						}
					}
					@media only screen and (max-width: 775px){
						#siteDesc{
							top:90px;
							font-size: 30px;
						}
						.carouselButtons{
							width: unset;
							min-width: 60px;
						}
						.carouselButtonLeft, .carouselButtonRight{
							width: 70%;
						}
					}

					@media only screen and (max-width: 580px){
						header{
							height: 80px;
						}
						#logo{
							height:80px;
							width:80px;
						}
						#title{
							transform: translate(-25px,-8px);
							font-size:25px;
						}
						#fixed_utilities{
							font-size:13px;
						}
						#fixed_utilities .nav-item{
							display: none;
						}
						#fixed_utilities .hamburger{
							display: block;
						}
						#siteDesc{
							display: none;
						}
						h2{
							font-size: 16px;
						}
						footer h3{
							font-size: 13px;
						}
						#address{
							width:90%;
							margin:auto;
						}
						#mapImage{
							width:100%;
						}
						.contact{
							margin:5px;
						}
					}

					@media only screen and (max-width: 350px){
						#title{
							transform: translateX(-10px);
						}
						#siteDesc{
							font-size: 21px;
							transform: translate(30px, 10px);
						}
						
					}
				`}}></style>
				{/* End template style */}

			</div>
		);
	}
}

export default TemplatePage;