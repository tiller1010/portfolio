import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Projects extends Component{
  render(){
    return(
      <div className='projectBox'>Project name: <a href={this.props.link}>{this.props.name}</a></div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Projects name= 'Family Tree' link='https://tiller1010.github.io/familyTree'/>
        <Projects name='Knife Store' link='https://github.com/tiller1010/My-Knife-Project'/>
      </div>
    );
  }
}

export default App;
