import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons';

const projectHeadingStyle = {
  borderBottom: 'solid black',
  width: '40%',
  marginLeft: '10%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'baseline',
  marginBottom: '20px',
  boxShadow: '0 4px 2px -2px #fff'
}

class ProjectHeading extends Component {
  render(){
    return(
      <div style={projectHeadingStyle}>
        <h2>{this.props.projectType}</h2>
        <FontAwesomeIcon icon={faSyncAlt} style={{cursor: 'pointer', transform: 'scale(1.5)'}} onClick={this.props.switchType} />
    </div>
    )
  }
}

class ProjectFrame extends Component {
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

  componentDidUpdate(prevProps){
    if(this.props.Name !== prevProps.Name)
    this.setState({
      viewed:'☐',
    });
  }

  render(){
    return (
      <div className='projectFrame box-container'>
        {this.props.Description}
        <div style={{display: 'flex', justifyContent: 'center', margin: '12px'}}>
          {this.props.CodeLink ? <a target='_blank' rel="noopener noreferrer" href={this.props.CodeLink}><div className='codeBox'>Code</div></a> : ''}
          <div>
             <a target='_blank' rel="noopener noreferrer" href={this.props.UserLink}>
               <div onClick={this.handleClick} className='projectBox'>{this.props.Name}</div>
            </a>
            <p style={{position:'absolute', right:'10px', bottom: '5px', margin: '0', width:'100px'}}>Viewed: {this.state.viewed}</p>
          </div>
        </div>
      </div>
    );
  }
}

class Projects extends Component{
  constructor(props){
    super(props);
    this.state = {
      projectType: 'Personal'
    }
    this.switchType = this.switchType.bind(this);
  }

  switchType(){
    this.setState({
      projectType: this.state.projectType === 'Personal' ? 'Client\'s' : 'Personal'
    });
    var rotateIcons = document.querySelector('svg.fa-sync-alt');
    var rotateDegrees = 10;
    var rotating = setInterval(() => {
      rotateIcons.style.transform = `rotate(${rotateDegrees}deg) scale(1.5)`;
      rotateDegrees += 10;
      if(rotateDegrees === 360){
        rotateDegrees = 1;
        clearInterval(rotating);
      }
    }, 10);
  }

  render(){
    if(this.state.projectType === 'Personal'){
      return(
        <div className='window animated' style={{visibility:'visible'}}>
          <ProjectHeading projectType={this.state.projectType} switchType={this.switchType}/>
          <ProjectFrame Description='
            Generic Store is an interactive store page with a visual shopping cart
            indicator. The app was made in an object-oriented style. Each object
            contains a title, a brief summary, and a price. The objects are stored in a
            shopping cart in the form of an array. That array is stored in session
            storage, where it is parsed by JSON when the user navigates to the
            checkout page.'
            Name='Generic Store'
            CodeLink='https://github.com/tiller1010/generic-store'
            UserLink='https://tiller1010.github.io/generic-store/'/>
          <ProjectFrame Description='
            The family tree uses an object-oriented style, but
            this project allows for more objects to be created by the user. The
            user may even upload an image by file or URL. When a person is clicked, 
            the box will display that object&#39;s properties, and a line connecting parent to child will be
            drawn on the canvas. This project
            also includes a feature that uses regular expressions to search
            for all mothers and fathers.'
            Name='Family Tree'
            CodeLink='https://github.com/tiller1010/familyTree'
            UserLink='https://tiller1010.github.io/familyTree'/>
          <ProjectFrame Description='
            This website template includes multiple pages and a few neat
            features such as an image slider, a contact form, and a menu that
            animates on mobile devices. The website is responsive and
            changes the appearance of the navigation bar if viewed on
            devices with smaller displays.'
            Name='Website Template'
            CodeLink='https://github.com/tiller1010/template1'
            UserLink='https://tiller1010.github.io/template1'/>
          <ProjectFrame Description='
            Redux vacation is a vacation planner that uses the React-Redux
            library. Redux is used to contain the state of the application in a
            single source of truth. Redux tracks the booking status of the
            flight, destination, and hotel. The user interface will re-render
            every time there is a change of state.'
            Name='Redux Vacation'
            CodeLink='https://github.com/tiller1010/redux-vacation'
            UserLink='https://tiller1010.github.io/redux-vacation/'/>
          <ProjectFrame Description='
            This is my first app that uses backend technology.
            The hospital app is built with PHP and SQL.
            After logging in or making an account, users can submit appointments with their doctor of choice.
            All of which is stored in a database.
            Private doctor accounts can then view the appointments that were submitted to them by pulling from the database.'
            Name='Hospital App'
            CodeLink='https://github.com/tiller1010/hospitalApp'
            UserLink='http://hospitalapp.esy.es'/>
          <ProjectFrame Description="
            This project is a dog personality test. It is built with Node and Express.
            The site uses two APIs: one for finding the dogs' traits and another for googling an image of the dog.
            The traits are ranked based on the users answers and then compared to the API response.
            As an added bonus, this project also uses Sass styles compiled with Grunt."
            Name='Dog Personality'
            CodeLink='https://github.com/tiller1010/dog-personality'
            UserLink='http://dog-personality.herokuapp.com'/>
          <ProjectFrame Description="
            Chitty Chatter is a chat app built with the Laravel framework. The framework makes building
            modern web apps easy and elegant. Laravel has an instant authentication system and the Eloquent ORM. For the front-end, Laravel comes bundled with Bootstrap and Vue. Bootstrap made styling
            quick and painless, and Vue helped me create a real-time chat component. Conversations are dynamic with
            the users' actions being broadcasted to the Pusher API. Users will see when the other user types, sends a message, or
            leaves the conversation."
            Name='Chitty Chatter'
            CodeLink='https://github.com/tiller1010/laravel-social-app'
            UserLink='https://chittychatter.net'/>
        </div>
      );
    }
    else{
        return(
          <div className='window animated' style={{visibility:'visible'}}>
            <ProjectHeading projectType={this.state.projectType} switchType={this.switchType}/>
            <ProjectFrame Description="
              The Gears & Grub event in Erie needed a site that would list all bands, food trucks, and vendors. 
              They also needed to direct visitors to the location of the event, as well as the weather. 
              I built them a Wordpress site so that they could manage updates and posts as well as utilize a few plugins."
              Name='Gears & Grub'
              UserLink='https://gearsandgruberie.com'/>
            <ProjectFrame Description="
              Dobbins Dogs wanted a site that features the new logo and ways for customers to connect.
              The site connects the user through phone, email, and social media.
              I was able to customize my own website template to create this site."
              Name='Dobbins Dogs'
              UserLink='https://dobbinsdogs.com'/>
          </div>
        )
      }
  }
}

export default Projects;