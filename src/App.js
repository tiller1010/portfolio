import React, { Component } from 'react';
import './App.css';
import Description from './aboutMe.js';
import Projects from './projectList.js';
import MyFace from './MyFace.jpg';

class Header extends Component{
  render(){
    return(
      <div>
        <img src={MyFace} id='face'/>
        <nav id='navBar'>
          <ul>
            <li>About</li>
            <li>Projects</li>
            <li>Links</li>
            <li>Contact</li>
          </ul>
        </nav>
      </div>
    );
  }
}

class App extends Component {
  constructor(props){
    super();
    this.state={
      show:'Home'
    }
  }
  render() {
    if(this.state.show=='Home'){
      return (
        <div>
          <Header />
          <Description/>
        </div>
      );
    }
    if(this.state.show=='Projects'){
      return(
        <div>
          <Header />
          <Projects name= 'Family Tree' link='https://tiller1010.github.io/familyTree'/>
          <Projects name='Knife Store' link='https://tiller1010.github.io/My-Knife-Project/'/>
        </div>
      );
    }
  }
}

export default App;
