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
          <h3>My knife project is a interactive store page with a visual shopping cart. The app was made in an object oriented style. Each knife inherits the jQuery slide toggled description.</h3>
          <Projects name='Knife Store' link='https://tiller1010.github.io/My-Knife-Project/'/>
          <h3>The family tree project also utilizes an object oriented style, but this project allows for more objects to be created by the user. The user may even insert the url of an image to add their own person to the tree. This project also includes a feature that uses regular expressions to search for all objects that match the given properies.</h3>
          <Projects name= 'Family Tree' link='https://tiller1010.github.io/familyTree'/>
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
        <img src={MyFace} id='face' alt='My face'/>
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
