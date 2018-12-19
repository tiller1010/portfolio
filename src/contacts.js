import React, { Component } from 'react';

class Contacts extends Component{
  render(){
    return(
      <h3 className='window' id='contacts'>
          <div id='emailBox'><span className='contact' id='email'>Email:</span>tiller1010@gmail.com<br/></div>
          <span className='contact' id='meetup'>Meetup:</span><a target='_blank' rel="noopener noreferrer" href='https://www.meetup.com/members/261337114/'>https://www.meetup.com/members/261337114/</a><br/>
          <span className='contact' id='upwork'>Upwork:</span><a target='_blank' rel="noopener noreferrer" href='https://www.upwork.com/freelancers/~01e2adada235766c48'>https://www.upwork.com/freelancers/~01e2adada235766c48</a>.<br/>
          <span className='contact' id='linkedIn'>LinkedIn:</span><a target='_blank' rel="noopener noreferrer" href='https://www.linkedin.com/in/tyler-trout-453b92173/'>https://www.linkedin.com/in/tyler-trout-453b92173/</a>
      </h3>
    );
  }
}

export default Contacts;
