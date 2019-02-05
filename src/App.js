import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import Description from './aboutMe.js';
import Projects from './projectList.js';
import Contacts from './contacts.js'
import LinkIcon from './links.js';
import MyFace from './MyFace.jpg';

class Window extends Component{
  render() {
    return(
      <main>
        <Switch>
          <Route exact path='/portfolio' component={Description}/>
          <Route path='/portfolio/projects' component={Projects}/>
          <Route path='/portfolio/contact' component={Contacts}/>
        </Switch>
      </main>
    );
  }
}

class App extends Component {
  render(){
    return(
      <div>
        <img src={MyFace} id='face' alt='My face'/>
        <h1 id='name'>Tyler Trout</h1>
        <div id='icons'>
          <LinkIcon source='https://image.flaticon.com/icons/png/512/25/25231.png' alternative='GitHub' destination='https://github.com/tiller1010'/>
          <LinkIcon source='https://cdn-images-1.medium.com/max/1200/1*QNimSWsBQxta_xt3XksQaw.png' alternative='SoloLearn' destination='https://www.sololearn.com/Profile/9677467'/>
          <LinkIcon source='http://assets.stickpng.com/thumbs/5847f91ccef1014c0b5e48b8.png' alternative='freeCodeCamp' destination='https://www.freecodecamp.org/tiller1010'/>
          <LinkIcon source='https://files.startupranking.com/startup/thumb/38390_69f954470a75c5911fc23cf91e70453ef07a07aa_edabit_m.jpeg' alternative='edabit' destination='https://edabit.com/user/kCWDEGqZhSpYbmhoZ'/>
        </div>
        <nav id='navBar'>
          <ul>
            <Link to='/portfolio'><li>About</li></Link>
            <Link to='/portfolio/projects'><li>Projects</li></Link>
            <Link to='/portfolio/contact'><li>Contact</li></Link>
          </ul>
        </nav>
        <Window/>
      </div>
    );
  }
}

export default App;
