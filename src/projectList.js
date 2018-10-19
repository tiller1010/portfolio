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
      <div onClick={this.handleClick} className='projectBox'>Project name: <a target='_blank' rel="noopener noreferrer" href={this.props.link}>{this.props.name}</a> Viewed: {this.state.viewed}</div>
    );
  }
}

export default Projects;
