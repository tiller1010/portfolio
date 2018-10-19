import React, { Component } from 'react';
import './App.css';
import Description from './aboutMe.js';
import Projects from './projectList.js';
import MyFace from './MyFace.jpg';

class Window extends Component{
  render() {
    if(this.props.show==='Home'){
      return (
        <div>
          <Description/>
        </div>
      );
    }
    if(this.props.show==='Projects'){
      return(
        <div>
          <Projects name= 'Family Tree' link='https://tiller1010.github.io/familyTree'/>
          <Projects name='Knife Store' link='https://tiller1010.github.io/My-Knife-Project/'/>
        </div>
      );
    }
  }
}

class App extends Component {
  constructor(props){
    super();
    this.state={
      show:'Home'
    }
    this.navigate=this.navigate.bind(this);
  }

  navigate(page){
    this.setState({
      show: page
    });
  }

  render(){
    return(
      <div>
        <img src={MyFace} id='face'/>
        <nav id='navBar'>
          <ul>
            <li onClick={() => this.navigate('Home')}>About</li>
            <li onClick={() => this.navigate('Projects')}>Projects</li>
            <li>Links</li>
            <li>Contact</li>
          </ul>
        </nav>
        <Window show={this.state.show}/>
      </div>
    );
  }
}

export default App;
