//Input gets props from UserSignUp

import React, { Component } from 'react';

export default class Input extends Component {
  constructor(props){
    super(props)
    this.state={
      type: this.props.type || 'text'
    }
  }

  render(){
    return(
      <div>
        <input
          placeholder={this.props.placeholder}
          type={this.props.type}
          name={this.props.name}
          value={this.props.value}
          onChange={this.props.onChange}
        />
        {this.props.errors &&
          <div className='help-block'>{this.props.errors}</div>
        }
      </div>
    )
  }
}
