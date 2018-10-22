import React, { Component } from 'react';

class Projects extends Component{
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

export default Projects;
