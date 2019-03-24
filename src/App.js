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
          <Route exact path='/' component={Description}/>
          <Route path='/projects' component={Projects}/>
          <Route path='/contact' component={Contacts}/>
        </Switch>
      </main>
    );
  }
}

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      currentPage: 'about'
    }
    this.currentPageChanger = this.currentPageChanger.bind(this);
    this.currentPageIndicator = this.currentPageIndicator.bind(this);
  }

  currentPageChanger(target){
    this.setState({
      currentPage: target
    })
  }

  currentPageIndicator(page){
    if(page === this.state.currentPage){
      return {borderBottom: 'solid white'}
    }
    else return {}
  }

  render(){
    return(
      <div>
        <div id='faceContainer'>
          <img src={MyFace} id='face' alt='My face'/>
        </div>
        <h1 id='name'>Tyler Trout</h1>
        <div id='icons'>
          <LinkIcon source='https://image.flaticon.com/icons/png/512/25/25231.png' alternative='GitHub' destination='https://github.com/tiller1010'/>
          <LinkIcon source='https://cdn-images-1.medium.com/max/1200/1*QNimSWsBQxta_xt3XksQaw.png' alternative='SoloLearn' destination='https://www.sololearn.com/Profile/9677467'/>
          <LinkIcon source='http://assets.stickpng.com/thumbs/5847f91ccef1014c0b5e48b8.png' alternative='freeCodeCamp' destination='https://www.freecodecamp.org/tiller1010'/>
          <LinkIcon source='https://files.startupranking.com/startup/thumb/38390_69f954470a75c5911fc23cf91e70453ef07a07aa_edabit_m.jpeg' alternative='edabit' destination='https://edabit.com/user/kCWDEGqZhSpYbmhoZ'/>
        </div>
        <a id='blogLink' target='_blank' rel="noopener noreferrer" href='http://tylertroutblog.com'><img id='pencilIcon' src={require('./pencil.png')} alt='pencil icon'/>My Blog</a>
        <nav id='navBar'>
          <ul>
            <Link to='/'><li onClick={()=>this.currentPageChanger('about')} style={this.currentPageIndicator('about')}>About</li></Link>
            <Link to='/projects'><li onClick={()=>this.currentPageChanger('projects')} style={this.currentPageIndicator('projects')}>Projects</li></Link>
            <Link to='/contact'><li onClick={()=>this.currentPageChanger('contact')} style={this.currentPageIndicator('contact')}>Contact</li></Link>
          </ul>
        </nav>
        <Window/>
        <button id='scrollUpBtn' onClick={()=>{window.scrollTo(0, 0);}}>Top</button>
      </div>
    );
  }
}

export default App;
