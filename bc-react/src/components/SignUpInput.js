import React, { Component } from 'react';

export default class SignUpInput extends Component {
  constructor(props){
    super(props)
    this.state={
      type: this.props.type || 'text'
    }
  }



  render(){
    return(
      <div className={`form-group ${this.props.errors && 'has-error'}`}>
        <label
          htmlFor={this.props.name}
          className='control-label'
        >
          {this.props.label}
        </label>
        <input
          placeholder={this.props.placeholder}
          type={this.props.type}
          name={this.props.name}
          value={this.props.value}
          onChange={this.props.onChange}
          className='form-control'
        />
        {this.props.errors &&
          <div className='help-block'>{this.props.errors}</div>
        }
      </div>
    )
  }
}
