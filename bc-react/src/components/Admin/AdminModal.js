import React, { Component } from 'react';
import {adminAddUser} from '../../actions';
// import {addPlace} from '../../actions';

// goal: make this component generic. Make a single modal that covers both cases and gets anything that's the same from props. for exmaple, there would be prop.startingState and you would put your place in the starting state

class AdminModal extends Component {
  constructor(props){
    super(props)
    this.state = this.props.startingState}

  handleChange(e){
    let target = e.target
      if (this.props.userForm){
        let user = this.state.user
        user[target.name] = target.value
        this.setState({
          user: user
        })
    }else if(this.props.placeForm){
      let place = this.state.place
      place[target.name] = target.value
      this.setState({
        place: place
      })
    }}

//addUser and updateUsers are asynchronous because they're in the store
  handleSubmit(e){
    e.preventDefault();
    if(this.props.userForm){adminAddUser(this.state)}
    // else if (this.props.placeForm){
    // addPlace(this.state)}
}

  userFields(){
      return(
        <div>
        <div className='formGroup'>
          <input
            placeholder='first name'
            type='text'
            name='firstName'
            id='firstName'
            value={this.state.user.firstName}
            onChange={this.handleChange.bind(this)}>
          </input>
        </div>
        <div className='formGroup'>
          <input
            placeholder='last name'
            type='text'
            name='lastName'
            id='lastName'
            value={this.state.user.lastName}
            onChange={this.handleChange.bind(this)}>
          </input>
        </div>
        <div className='formGroup'>
        <input
          placeholder='email address'
          type='email'
          name='email'
          id='email'
          value={this.state.user.email}
          onChange={this.handleChange.bind(this)}>
        </input>
        </div>
        <div className='formGroup'>
        <input
          placeholder='neighborhood'
          type='text'
          name='neighborhood'
          id='neighborhood'
          value={this.state.user.neighborhood}
          onChange={this.handleChange.bind(this)}>
        </input>
        </div>
        <div className='formGroup'>
        <input
          placeholder='password'
          type='password'
          name='password'
          id='password'
          value={this.state.user.password}
          onChange={this.handleChange.bind(this)}>
        </input>
        </div>
        <div className='formGroup'>
        <input
          placeholder='reenter password'
          type='password'
          name='verifyPassword'
          id='verifyPassword'
          value={this.state.user.verifyPassword}
          onChange={this.handleChange.bind(this)}>
        </input>
        <div className='formGroup align-button'>
          <input type='submit' value='submission'></input>
        </div>
        </div>
        <br />
        </div>
      )
  }

  placeFields(){
    return(
    <div>
    <div className='formGroup'>
      <input
        placeholder='Restaurant'
        type='text'
        name='name'
        id='name'
        value={this.state.place.name}
        onChange={this.handleChange.bind(this)}>
      </input>
    </div>
    <div className='formGroup'>
      <input
        placeholder='Yelp Rating'
        type='text'
        name='yelp_rating'
        id='yelp_rating'
        value={this.state.place.yelp_rating}
        onChange={this.handleChange.bind(this)}>
      </input>
    </div>
    <div className='formGroup'>
    <input
      placeholder='Category'
      type='text'
      name='categories'
      id='categories'
      value={this.state.place.categories}
      onChange={this.handleChange.bind(this)}>
    </input>
    </div>
    <div className='formGroup'>
    <input
      placeholder='Price'
      type='text'
      name='price'
      id='price'
      value={this.state.place.price}
      onChange={this.handleChange.bind(this)}>
    </input>
    </div>
    <div className='formGroup'>
    <input
      placeholder='Street Address'
      type='text'
      name='address_street'
      id='address_street'
      value={this.state.place.address_street}
      onChange={this.handleChange.bind(this)}>
    </input>
    </div>
    <div className='formGroup'>
    <input
      placeholder='Phone Number'
      type='text'
      name='phone'
      id='phone'
      value={this.state.place.phone}
      onChange={this.handleChange.bind(this)}>
    </input>
    <div className='formGroup align-button'>
      <input type='submit' value='submission'></input>
    </div>
    </div>
    <br /></div>)}

  render(){

    let fields;
    if (this.props.userForm){
      fields = this.userFields()
    } else if (this.props.placeForm){
      fields = this.placeFields()}

    return (
    <div>
      <div id='modal'>
        <span>&times;</span>
        <form className='form' onSubmit={this.handleSubmit.bind(this)}>
          {fields}
        </form>
      </div>
    </div>
    )
  }
}
export default AdminModal;
