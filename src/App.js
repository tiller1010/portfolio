import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import Description from './aboutMe.js';
import Projects from './projectList.js';
import LinkIcon from './links.js';
import MyFace from './MyFace.jpg';
import Painting from './painting.jpg';

class Window extends Component{
  render() {
    return(
      <main>
        <Switch>
          <Route exact path='/' component={Description}/>
          <Route path='/projects' component={Projects}/>
          <Route path='/contact' render={()=>
            <h3 className='window'>
                Email: tiller1010@gmail.com
            </h3>
          }/>
        </Switch>
      </main>
    );
  }
}

class App extends Component {
  render(){
    return(
      <div>
        <img src={Painting} id='paint' alt='A painting by me'/>
        <img src={MyFace} id='face' alt='My face'/>
        <div id='icons'>
          <LinkIcon source='https://image.flaticon.com/icons/png/512/25/25231.png' alternative='GitHub' destination='https://github.com/tiller1010'/>
          <LinkIcon source='https://cdn-images-1.medium.com/max/1200/1*QNimSWsBQxta_xt3XksQaw.png' alternative='SoloLearn' destination='https://www.sololearn.com/Profile/9677467'/>
          <LinkIcon source='http://assets.stickpng.com/thumbs/5847f91ccef1014c0b5e48b8.png' alternative='freeCodeCamp' destination='https://www.freecodecamp.org/tiller1010'/>
        </div>
        <nav id='navBar'>
          <ul>
            <Link to='/'><li>About</li></Link>
            <Link to='/projects'><li>Projects</li></Link>
            <Link to='/contact'><li>Contact</li></Link>
          </ul>
        </nav>
        <Window/>
      </div>
    );
  }
}

export default App;
