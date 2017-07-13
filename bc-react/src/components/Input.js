//Input gets props from UserSignUp

import React, { Component } from 'react';

export default class Input extends Component {
  constructor(props){
    super(props)
    this.state={
      type: this.props.type || 'text',
      size: this.props.size || '20',
      autoComplete: this.props.autoComplete || 'on',
      className: this.props.className || ''
    }
  }

  render(){
    return(
      <div className={this.state.className}>
        <input
          type={this.state.type}
          size={this.state.size}
          autoComplete={this.state.autoComplete}
          name={this.props.name}
          placeholder={this.props.placeholder}
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
