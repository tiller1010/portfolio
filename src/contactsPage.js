import React, { Component } from 'react';
import gmailLogo from './images/gmail-logo.png';
import meetupLogo from './images/meetup-logo.svg';
import linkedinLogo from './images/LinkedIn-Logo.png';
import upworkLogo from './images/upwork-logo.png';

const Contact=(props)=>{
  return(
    <a target='_blank' rel="noopener noreferrer" href={props.link}>
      <img className='contactImage' src={props.image} alt='contact' style={{width: props.width, height: props.height, marginTop: props.verticalMargin}}/><br/>
    </a>
  )
}

class Contacts extends Component{
  render(){
    return(
      <div className='animatedContainer'>
        <div className='window box-container animated' id='contacts' style={{visibility:'visible'}}>
          <a href='mailto:tiller1010@gmail.com' rel="noopener noreferrer"><img id='email' src={gmailLogo} alt='email' style={{width:'400px', height:'220px', display:'block', margin:'auto'}}/></a><hr/>
          <Contact verticalMargin='20px' width='300px' height='100px' link='https://www.meetup.com/members/261337114/' image={meetupLogo}/>
          <Contact verticalMargin='20px' width='300px' height='80px' link='https://www.linkedin.com/in/tyler-trout-453b92173/' image={linkedinLogo}/>
          <Contact verticalMargin='35px' width='300px' link='https://www.upwork.com/freelancers/~01e2adada235766c48' image={upworkLogo}/>
        </div>
      </div>
    );
  }
}

export default Contacts;
