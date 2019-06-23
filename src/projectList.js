import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons'

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

class ProjectLink extends Component{
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
      <div>
         <a target='_blank' rel="noopener noreferrer" href={this.props.link}>
           <div onClick={this.handleClick} className='projectBox'>{this.props.name}</div>
        </a>
        <p style={{textAlign: 'right', marginRight: '10px'}}>Viewed: {this.state.viewed}</p>
    </div>
    );
  }
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
      projectType: this.state.projectType == 'Personal' ? 'Client\'s' : 'Personal'
    })
  }

  render(){
    if(this.state.projectType === 'Personal'){
      return(
        <div className='window animated' style={{visibility:'visible'}}>
          <ProjectHeading projectType={this.state.projectType} switchType={this.switchType}/>
          <h3 className='projectFrame'>
            Generic Store is an interactive store page with a visual shopping cart
            indicator. The app was made in an object-oriented style. Each object
            contains a title, a brief summary, and a price. The objects are stored in a
            shopping cart in the form of an array. That array is stored in session
            storage, where it is parsed by JSON when the user navigates to the
            checkout page.
            <div style={{display: 'flex', justifyContent: 'flex-end', margin: '12px'}}>
              <a target='_blank' rel="noopener noreferrer" href='https://github.com/tiller1010/generic-store'><div className='codeBox'>Code</div></a>
              <ProjectLink name='Generic Store' link='https://tiller1010.github.io/generic-store/'/>
            </div>
          </h3>
          <h3 className='projectFrame'>
            The family tree project also utilizes an object-oriented style, but
            this project allows for more objects to be created by the user. The
            user may even upload an image by file or URL. When clicked, a
            person box will display that person&#39;s properties, and a line will be
            drawn on the canvas, connecting child to parent. This project
            also includes a feature that uses regular expressions to search
            for all mothers and fathers.
            <div style={{display: 'flex', justifyContent: 'flex-end', margin: '12px'}}>
              <a target='_blank' rel="noopener noreferrer" href='https://github.com/tiller1010/familyTree'><div className='codeBox'>Code</div></a>
              <ProjectLink name= 'Family Tree' link='https://tiller1010.github.io/familyTree'/>
            </div>
          </h3>
          <h3 className='projectFrame'>
            This website template includes multiple pages and a few neat
            features such as an image slider, a contact form, and a menu that
            animates on mobile devices. The website is responsive and
            changes the appearance of the navigation bar if viewed on
            devices with smaller displays.
            <div style={{display: 'flex', justifyContent: 'flex-end', margin: '12px'}}>
              <a target='_blank' rel="noopener noreferrer" href='https://github.com/tiller1010/template1'><div className='codeBox'>Code</div></a>
              <ProjectLink name= 'Website Template' link='https://tiller1010.github.io/template1'/>
            </div>
          </h3>
          <h3 className='projectFrame'>
            Redux vacation is a vacation planner that uses the React-Redux
            library. Redux is used to contain the state of the application in a
            single source of truth. Redux tracks the booking status of the
            flight, destination, and hotel. The user interface will re-render
            every time there is a change of state.
            <div style={{display: 'flex', justifyContent: 'flex-end', margin: '12px'}}>
              <a target='_blank' rel="noopener noreferrer" href='https://github.com/tiller1010/redux-vacation'><div className='codeBox'>Code</div></a>
              <ProjectLink name= 'Redux Vacation' link='https://tiller1010.github.io/redux-vacation'/>
            </div>
          </h3>
          <h3 className='projectFrame'>
            This is my first app that uses backend technology. The hospital app is built with PHP and SQL.
            After logging in or making an account, users can submit appointments with their doctor of choice. All of which is stored in a database.
            Private doctor accounts can then view the appointments that were submitted to them by pulling from the database.
            <div style={{display: 'flex', justifyContent: 'flex-end', margin: '12px'}}>
              <a target='_blank' rel="noopener noreferrer" href='https://github.com/tiller1010/redux-vacation'><div className='codeBox'>Code</div></a>
              <ProjectLink name= 'Hospital App' link='http://hospitalapp.esy.es'/>
            </div>
          </h3>
        </div>
      );
    }
    else{
        return(
          <div className='window animated' style={{visibility:'visible'}}>
            <ProjectHeading projectType={this.state.projectType} switchType={this.switchType}/>
              <h3 className='projectFrame'>
                 Siri Thai Truck asked for help customizing their Weebly page. 
                 I got to learn a little bit about how Weebly works and added custom elements and styles.
                 The page now includes new fonts, a slight gradient, and a site icon.
                <div style={{display: 'flex', justifyContent: 'flex-end', margin: '12px'}}>
                  <ProjectLink name= 'Siri Thai Truck' link='http://sirithaitruck.com'/>
                </div>
              </h3>
              <h3 className='projectFrame'>
                The Gears & Grub event in Erie needed a site that would list all bands, food trucks, and vendors. 
                They also needed to direct visitors to the location of the event, as well as the weather. 
                I built them a Wordpress site so that they could manage updates and posts as well as utilize a few plugins.
                <div style={{display: 'flex', justifyContent: 'flex-end', margin: '12px'}}>
                  <ProjectLink name= 'Gears & Grub' link='https://gearsandgruberie.com'/>
                </div>
              </h3>
          </div>
        )
      }
  }
}

export default Projects;
