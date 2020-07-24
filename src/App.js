import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Switch, Route} from 'react-router-dom';
import './css/App.css';
import Projects from './projectPage.js';
import Contacts from './contactsPage.js'
import LinkIcon from './links.js';
import MyFace from './images/MyFace.png';
import PencilIcon from './images/pencil.png';
import Popup from './Popup.js';

class Window extends Component{
  constructor(props){
    super(props);
    this.state = {
      popupOpenStatus: 'closed'
    }
    this.dismissPopup = this.dismissPopup.bind(this);
  }
  
  componentDidMount(){
    // Wait 5 seconds before showing popup
    setTimeout(() => {
      this.setState({
        popupOpenStatus: 'open'
      })
    }, 1000)
  }

  dismissPopup(){
    this.setState({
      popupOpenStatus: 'closed'
    })
  }

  render() {
    return(
      <main>
        <Popup dismissPopup={this.dismissPopup} popupOpenStatus={this.state.popupOpenStatus}/>
        <Switch>
          <Route path='/' exact component={Projects}/>
          <Route path='/contact' component={Contacts}/>
        </Switch>
      </main>
    );
  }
}

class App extends Component {
  constructor(props){
    super(props);
    this.currentPageChanger = this.currentPageChanger.bind(this);
    this.currentPageIndicator = this.currentPageIndicator.bind(this);
  }

  componentWillMount(){
    this.setState({
      currentPage: 'projects'
    })
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
        <div id='faceContainer' style={{background: 'url(' + MyFace + ') center center/cover'}}></div>
        <div className="title-description">
          <h1 id='name'>Tyler Trout</h1>
          <h2>Web-Developer</h2>
        </div>
        <div id='icons'>
          <LinkIcon source='https://image.flaticon.com/icons/png/512/25/25231.png' alternative='GitHub' destination='https://github.com/tiller1010'/>
          <LinkIcon source='https://cdn-images-1.medium.com/max/1200/1*QNimSWsBQxta_xt3XksQaw.png' alternative='SoloLearn' destination='https://www.sololearn.com/Profile/9677467'/>
          <LinkIcon source='https://s3.amazonaws.com/freecodecamp/curriculum-diagram-full.jpg' alternative='freeCodeCamp' destination='https://www.freecodecamp.org/tiller1010'/>
          <LinkIcon source='https://files.startupranking.com/startup/thumb/38390_69f954470a75c5911fc23cf91e70453ef07a07aa_edabit_m.jpeg' alternative='edabit' destination='https://edabit.com/user/kCWDEGqZhSpYbmhoZ'/>
        </div>
        <a id='blogLink' target='_blank' rel="noopener noreferrer" href='http://tylertroutblog.com'><img id='pencilIcon' src={PencilIcon} alt='pencil icon'/>My Blog</a>
        <nav id='navBar'>
          <ul>
            <Link to='/'><li onClick={()=>this.currentPageChanger('projects')} style={this.currentPageIndicator('projects')}>Projects</li></Link>
            <Link to='/contact'><li onClick={()=>this.currentPageChanger('contact')} style={this.currentPageIndicator('contact')}>Contact</li></Link>
          </ul>
        </nav>
        <Window/>
        <button id='scrollUpBtn' onClick={()=>{
          var scrolling = setInterval(() => {
            var offset = window.pageYOffset;
            window.scrollTo(0, offset - 100);
            if(offset === 0){
              clearInterval(scrolling);
            }
          }, 20)
        }}>Top</button>
      </div>
    );
  }
}

export default App;
