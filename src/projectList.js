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
        <h3>My knife project is a interactive store page with a visual shopping cart. The app was made in an object oriented style. Each knife inherits the jQuery slide toggled description.
          <ProjectLink name='Knife Store' link='https://tiller1010.github.io/My-Knife-Project/'/></h3>
        <h3>The family tree project also utilizes an object oriented style, but this project allows for more objects to be created by the user. The user may even insert the url of an image to add their own person to the tree. This project also includes a feature that uses regular expressions to search for all objects that match the given properies.
          <ProjectLink name= 'Family Tree' link='https://tiller1010.github.io/familyTree'/></h3>
      </div>
    );
  }
}

export default Projects;
