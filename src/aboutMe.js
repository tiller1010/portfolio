import React, { Component } from 'react';

class Description extends Component{
  render(){
    return(
      <div>
        <h3 className='window'>
          <header>Introduction</header><hr/>
          <p>
            Looking for a new web developer that is easy to get along with and is always hungry to learn more? My name is Tyler Trout, and I am a self-taught aspiring web developer. I am looking to achieve my first employment oppritunity.
          </p>
        </h3>
        <h3 className='window rightSide'>
          <header>Experience</header><hr/>
          <p>
            I have over nine months of experience reading excellent coding books, completing challenges provided by various sources, and writing code for my own personal projects. I attend monthly meetups with Coderie and learn from the best!
          </p>
        </h3>
        <h3 className='window leftSide'>
          <header>Skills</header><hr/>
          <p>
            I have skills in HTML, CSS, JavaScript, and more! My framework of choice is React, but I also have the abilities to contain application state in Redux, as well as utilize the tools provided by jQuery. I use several various technologies to assist myself in development. I use Git and GitHub frequently to keep track of changes and upload my work. I use Chrome Dev Tools to inspect the contents of my application and read from the console.
          </p>
        </h3>
        <h3 className='window rightSide'>
          <header>Moving forward</header><hr/>
          <p>
            I love to learn new things and do so every day. As of the beginning of this year, I have learned how to set up my own WordPress sites as well as the basics of developing themes from scratch. Currently, I have been learning some backend technologies such as PHP, SQL, and Node.js. My hope is to one day have the abilities to understand and work on any part of a web application and deliver an exceptional user experience. Coding has always and intrigued and delighted me, and I am excited for what I might create in the future!
          </p>
        </h3>
      </div>
    );
  }
}

export default Description;
