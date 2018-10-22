import React, { Component } from 'react';

class Link extends Component{
  render(){
    return(
      <a target='_blank' rel="noopener noreferrer" href={this.props.destination}>
        <img src={this.props.source} alt={this.props.alternative} className='link'/>
      </a>
    );
  }
}

export default Link;
