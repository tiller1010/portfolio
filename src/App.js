import React, { Component } from 'react';
import './App.css';
import Description from './aboutMe.js';
import Projects from './projectList.js';
import MyFace from './MyFace.jpg';

class Window extends Component{
  render(){
    return(
      <div className='intro'>
        <img src={MyFace} id='face'/>
        <nav id='navBar'>
          <ul>
            <li>About</li>
            <li>Projects</li>
            <li>Links</li>
            <li>Contact</li>
          </ul>
        </nav>
        <Description/>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Window />
        <Projects name= 'Family Tree' link='https://tiller1010.github.io/familyTree'/>
        <Projects name='Knife Store' link='https://tiller1010.github.io/My-Knife-Project/'/>
      </div>
    );
  }
}

export default App;
