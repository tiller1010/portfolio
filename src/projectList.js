import React, { Component } from 'react';

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
        Viewed: {this.state.viewed}
    </div>
    );
  }
}

class Projects extends Component{
  render(){
    return(
      <div className='window'>
        <h3 className='projectFrame'>Generic Store is an interactive store page with a visual shopping cart. The app was made in an object oriented style. Each object contains a title, a brief summary, and a price. The objects are stored in a shopping cart in the form of an array. That array is stored in session storage, where it is parsed by JSON when the user navigates to the checkout page.
          <a target='_blank' rel="noopener noreferrer" href='https://github.com/tiller1010/generic-store'><div className='codeBox'>Code</div></a>
          <ProjectLink name='Generic Store' link='https://tiller1010.github.io/generic-store/'/></h3>
        <h3 className='projectFrame'>The family tree project also utilizes an object oriented style, but this project allows for more objects to be created by the user. The user may even insert the url of an image to add their own person to the tree. This project also includes a feature that uses regular expressions to search for all objects that match the given properies.
          <a target='_blank' rel="noopener noreferrer" href='https://github.com/tiller1010/familyTree'><div className='codeBox'>Code</div></a>
          <ProjectLink name= 'Family Tree' link='https://tiller1010.github.io/familyTree'/></h3>
        <h3 className='projectFrame'>This website template includes multiple pages and a few neat features. The website is responsive and should change the appearance of the navigation bar. The website scales to fit on a mobile screen with a media query.
          <a target='_blank' rel="noopener noreferrer" href='https://github.com/tiller1010/template1'><div className='codeBox'>Code</div></a>
          <ProjectLink name= 'Website Template' link='https://tiller1010.github.io/template1'/></h3>
        <h3 className='projectFrame'>Redux vacation is a vacation planner that uses the React-Redux library. Redux is used to contain the state of the application in a single source of truth, tracking the booking status of the flight, destination, and hotel. The user interface will re-render everytime there is a change of state.
          <a target='_blank' rel="noopener noreferrer" href='https://github.com/tiller1010/redux-vacation'><div className='codeBox'>Code</div></a>
          <ProjectLink name= 'Redux Vacation' link='https://tiller1010.github.io/redux-vacation'/></h3>
      </div>
    );
  }
}

export default Projects;
