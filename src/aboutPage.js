import React, { Component } from 'react';
import {Link} from 'react-router-dom';

const bookSeperatorStlye={
  textAlign: 'center',
  width:'90%',
  margin:'100px auto',
  fontFamily:'"Francois One", Helvetica, sans-serif',
  background: 'white',
  letterSpacing: '4px',
  padding:'10px 0',
  transform:'translateY(40px)',
  color:'#0da',
  textShadow: '1px 1px black'
}

class Description extends Component{

  componentDidMount(){
    let frames = document.querySelectorAll('.window');
    const booksRead = document.querySelector('#bookSeperator');
    const canvas = document.getElementById('arrowIndicator');
    const ctx = canvas.getContext('2d');

    document.addEventListener('scroll', function(){
      for(let i=1;i<frames.length;i++){
        if(frames[i].getBoundingClientRect().top<385){
          canvas.style.display='none';
          frames[i].style.visibility='visible';
          frames[i].classList.add('animated');
        }
      }
    })

    ctx.beginPath();
    ctx.moveTo(0,0);
    ctx.lineTo(20,20);
    ctx.lineTo(40,0);
    ctx.lineWidth=6;
    ctx.strokeStyle='#555';
    ctx.stroke();
  }

  render(){
    return(
      <div className='animatedContainer'>
        <div className='window box-container animated' style={{visibility:'visible'}}>
          <header>Introduction</header><hr/>
          <p>
          Do you need a new web developer (or member of your web team)?
          Looking for a candidate who is easy to get along with and always hungry
          to learn more? Allow me to introduce myself...my name is Tyler Trout, and
          I am a self-taught aspiring web developer in search of my first web-related
          employment opportunity.
          </p>
        </div>
        <canvas id='arrowIndicator' height='25' width='40'/>
        <div className='window box-container rightSide'>
          <header>Experience</header><hr/>
          <p>
          I have spent more than a year immersing myself in a strenuous
          self-education regimen: reading excellent coding books (including
          JavaScript: the Definitive Guide, Learning React, JavaScript: the
          Good Parts and WordPress Complete), completing challenges
          provided by various sources, and writing code for my own personal
          projects. I have been supplementing these efforts by attending
          monthly meet-ups with Coderie, so I can learn from the best!
          </p>
        </div>
        <div className='window box-container leftSide'>
          <header>Skills</header><hr/>
          <p>
          I am well-versed in HTML, CSS, JavaScript, and more! My
          framework of choice is React, but I am also able to contain
          application state in Redux, as well as utilize the tools provided by
          jQuery. I use a variety of technologies to assist myself in
          development, indluding Git, GitHub and Chrome Dev Tools.
          </p>
        </div>
        <div className='window box-container rightSide'>
          <header>Moving forward</header><hr/>
          <p>
          I love to learn new things and do so every day. For example, just
          since the beginning of this year, I have learned how to set up my
          own WordPress sites as well as the basics of developing themes
          from scratch. Currently, I am expanding my knowledge of
          backend technologies such as PHP, SQL, and Node.js. My goal is
          to be able to work on any part of a web application and deliver an
          exceptional user experience. Coding has always intrigued and
          delighted me, and I am excited to see what I might create in the
          future!
          </p>
        </div>
        <hr style={{transform:'translateY(50px)'}}/>
        <Link to='/books'><h1 id='booksButton' style={bookSeperatorStlye}>Books I have read:</h1></Link>
      </div>
    );
  }
}

export default Description;
