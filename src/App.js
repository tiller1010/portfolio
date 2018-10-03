import React, { Component } from 'react';
import './App.css';

class Introduction extends Component{
  render(){
    return(
      <div className='intro'>
        <h3>My name is Tyler Trout. I am a self taught aspiring web developer looking for my first oppritunity at employment. I have been teaching myself Javascript for over four months now.  I understand the fundamentals of HTML & CSS as well as having an understanding of object oriented programming, regular expressions, arrays, and basic lexical scoping in JavaScript.  I understand other technologies such as Git/GitHub, Chrome Dev Tools, and some PHP.  I recently began learning React and am using it to build this portfolio.</h3>
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
        <Introduction/>
        <Projects name= 'Family Tree' link='https://tiller1010.github.io/familyTree'/>
        <Projects name='Knife Store' link='https://github.com/tiller1010/My-Knife-Project'/>
      </div>
    );
  }
}

export default App;
