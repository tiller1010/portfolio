import React, { Component } from 'react';

class LinkIcon extends Component{
  render(){
    return(
      <a target='_blank' rel="noopener noreferrer" href={this.props.destination}>
        <img src={this.props.source} alt={this.props.alternative} className='link'/>
      </a>
    );
  }
}

export default LinkIcon;
