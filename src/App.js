import React, { Component } from 'react';
import './App.css';
import Description from './aboutMe.js';
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

class Projects extends Component{
  constructor(props){
    super(props);
    this.state={
      viewed: '☐'
    }
    this.handleClick=this.handleClick.bind(this);
  }

  handleClick(){
    this.setState({
      viewed:'☑',
    });
  }

  render(){
    return(
      <div onClick={this.handleClick} className='projectBox'>Project name: <a target='_blank' href={this.props.link}>{this.props.name}</a> Viewed: {this.state.viewed}</div>
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
