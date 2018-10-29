import React, { Component } from 'react';
import './App.css';
import Description from './aboutMe.js';
import Projects from './projectList.js';
import Link from './links.js';
import MyFace from './MyFace.jpg';

class Window extends Component{
  render() {
    if(this.props.show==='Home'){
      return (
        <div className='window'>
          <Description/>
        </div>
      );
    }
    if(this.props.show==='Projects'){
      return(
        <div className='window'>
          <h3>My knife project is a interactive store page with a visual shopping cart. The app was made in an object oriented style. Each knife inherits the jQuery slide toggled description.
          <Projects name='Knife Store' link='https://tiller1010.github.io/My-Knife-Project/'/></h3>
          <h3>The family tree project also utilizes an object oriented style, but this project allows for more objects to be created by the user. The user may even insert the url of an image to add their own person to the tree. This project also includes a feature that uses regular expressions to search for all objects that match the given properies.
            <Projects name= 'Family Tree' link='https://tiller1010.github.io/familyTree'/></h3>
        </div>
      );
    }
    if(this.props.show==='Links'){
      return(
        <div className='window'>
          <Link source='https://image.flaticon.com/icons/png/512/25/25231.png' alternative='GitHub' destination='https://github.com/tiller1010'/>
          <Link source='https://cdn-images-1.medium.com/max/1200/1*QNimSWsBQxta_xt3XksQaw.png' alternative='SoloLearn' destination='https://www.sololearn.com/Profile/9677467'/>
          <Link source='http://assets.stickpng.com/thumbs/5847f91ccef1014c0b5e48b8.png' alternative='freeCodeCamp' destination='https://www.freecodecamp.org/tiller1010'/>
        </div>
      );
    }
    if(this.props.show==='Contact'){
      return(
        <h3 className='window'>
          Email: tiller1010@gmail.com
        </h3>
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
            <li onClick={() => this.navigate('Links')}>Links</li>
            <li onClick={() => this.navigate('Contact')}>Contact</li>
          </ul>
        </nav>
        <Window show={this.state.show}/>
      </div>
    );
  }
}

export default App;
