import React, { Component } from 'react';

class Contacts extends Component{
  render(){
    return(
      <h3 className='window' id='contacts'>
          <span className='contact' id='email'>Email:</span>tiller1010@gmail.com<br/>
          <span className='contact' id='meetup'>Meetup:</span> ...<br/>
          <span className='contact' id='upwork'>Upwork:</span> ....<br/>
          <span className='contact' id='linkedIn'>LinkedIn:</span> ...
      </h3>
    );
  }
}

export default Contacts;
