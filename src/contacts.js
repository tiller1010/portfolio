import React, { Component } from 'react';

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
        <h3 className='window animated' id='contacts' style={{visibility:'visible'}}>
          <a href='mailto:tiller1010@gmail.com' rel="noopener noreferrer"><img id='email' src='https://files.readme.io/3aa137c-logo_lockup_gmail_icon_horizontal.png' alt='email' style={{width:'400px', height:'220px', display:'block', margin:'auto'}}/></a><hr/>
          <Contact verticalMargin='20px' width='300px' height='100px' link='https://www.meetup.com/members/261337114/' image='https://secure.meetup.com/s/img/0/logo/svg/logo--script.svg'/>
          <Contact verticalMargin='20px' width='300px' height='80px' link='https://www.linkedin.com/in/tyler-trout-453b92173/' image='https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/1280px-LinkedIn_Logo.svg.png'/>
          <Contact verticalMargin='35px' width='300px' height='160px' link='https://www.upwork.com/freelancers/~01e2adada235766c48' image='https://www.chrisjacobie.com/wp-content/uploads/2018/03/upwork2-300x169.png'/>
        </h3>
      </div>
    );
  }
}

export default Contacts;
