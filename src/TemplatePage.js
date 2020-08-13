import React, { Component } from 'react';

class TemplatePage extends Component {

	componentWillMount(){
		this.setState({
			email: sessionStorage.getItem('email'),
			logo: sessionStorage.getItem('logo'),
			banner: sessionStorage.getItem('banner')
		})
	}
	
	render(){
		return (
			<div>
				<header>
					<div id="logo" style={{background: this.state.logo ? `url(${this.state.logo}) no-repeat center center/cover` : ''}}></div>
					<h1 id='title'>Your Site Title</h1> <div id='siteDesc'>Your tagline</div>
				</header>

				<div id='fixed_utilities'>
					<span className="phone-number">☏ (123)456-7890</span>
					<span className="email">{this.state.email}</span>
				</div>

				<main>

					<div className="carousel-container">
						<div className='carousel'>
							<div className='carouselTrackContainer'>
								<ul className='carouselTrack'>

									<li className="carouselSlide currentSlide">
										<div className='carouselImage' style={{background: this.state.banner ? `url(${this.state.banner}) no-repeat center center/cover` : '', display: 'block'}}>
									{/*
											<div className="banner-content">
											    <p>
											    	<a className="banner-link" href="" aria-label=""></a>
												</p>
											</div>
									*/}
										</div>
									</li>

									<li className="carouselSlide">
										<div className='carouselImage' style={{background: "url('https://dummyimage.com/720x400') no-repeat center center/cover"}}>
									{/*
											<div className="banner-content">
											    <p>
											    	<a className="banner-link" href="" aria-label=""></a>
												</p>
											</div>
									*/}
										</div>
									</li>

									<li className="carouselSlide">
										<div className='carouselImage' style={{background: "url('https://dummyimage.com/720x400') no-repeat center center/cover"}}>
									{/*
											<div className="banner-content">
											    <p>
											    	<a className="banner-link" href="" aria-label=""></a>
												</p>
											</div>
									*/}
										</div>
									</li>

									<li className="carouselSlide">
										<div className='carouselImage' style={{background: "url('https://dummyimage.com/720x400') no-repeat center center/cover"}}>
									{/*
											<div className="banner-content">
											    <p>
											    	<a className="banner-link" href="" aria-label=""></a>
												</p>
											</div>
									*/}
										</div>
									</li>

									<li className="carouselSlide">
										<div className='carouselImage' style={{background: "url('https://dummyimage.com/720x400') no-repeat center center/cover"}}>
									{/*
											<div className="banner-content">
											    <p>
											    	<a className="banner-link" href="" aria-label=""></a>
												</p>
											</div>
									*/}
										</div>
									</li>

									<li className="carouselSlide">
										<div className='carouselImage' style={{background: "url('https://dummyimage.com/720x400') no-repeat center center/cover"}}>
									{/*
											<div className="banner-content">
											    <p>
											    	<a className="banner-link" href="" aria-label=""></a>
												</p>
											</div>
									*/}
										</div>
									</li>

								</ul>
							</div>
							<div className="carouselButtons">
								<button className='carouselButtonLeft'>&lt</button>
								<button className='carouselButtonRight'>&gt</button>
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
						<p>Quote 1</p>
						<p>Quote 2</p>
						<p>Quote 3</p>
						<p>Quote 4</p>
					</div>

					<div className='content'>
						<form id="contactForm" action="#:" method="post" encType="text/plain">
							<label htmlFor="Name">Name:</label>
							<input className="contact" type="text" name="Name"/>
							<label htmlFor="Comment">Comment:</label>
							<textarea className="contact" name="Message"></textarea>
							<input type="submit" className="submit" value="Send"/>
						</form>
					</div>

				</main>
				
				<footer>
					<h3>Website Template by Tyler Trout 2020</h3>
				</footer>
			</div>
		);
	}
}

export default TemplatePage;