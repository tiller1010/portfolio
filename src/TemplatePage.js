import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeSquare, faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

class TemplatePage extends Component {

	componentWillMount(){
		this.setState({
			email: sessionStorage.getItem('email'),
			logo: sessionStorage.getItem('logo'),
			banner: sessionStorage.getItem('banner')
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
			<div>
				<header>
					<div id="logo" style={{background: this.state.logo ? `url(${this.state.logo}) no-repeat center center/cover` : ''}}></div>
					<h1 id='title'>Your Site Title</h1> <div id='siteDesc'>Your tagline</div>
				</header>

				<div id='fixed_utilities'>
					<FontAwesomeIcon icon={faEnvelopeSquare} style={{cursor: 'pointer', transform: 'scale(1.5)'}} onClick={this.props.switchType} />
					<span className="email">{this.state.email}</span>
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
								<button className='carouselButtonLeft'>
									<FontAwesomeIcon icon={faChevronLeft} style={{cursor: 'pointer', transform: 'scale(1.5)'}} onClick={this.props.switchType} />
								</button>
								<button className='carouselButtonRight'>
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
							<input type="submit" className="submit" value="Send"/>
						</form>
					</div>

				</main>
				
				<footer>
					<p>Website Template by Tyler Trout { currentYear }</p>
				</footer>
			</div>
		);
	}
}

export default TemplatePage;