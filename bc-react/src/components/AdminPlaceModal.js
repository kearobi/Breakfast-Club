import React, { Component } from 'react';
// import {addPlace} from '../actions';

class AdminPlaceModal extends Component {
  constructor(props){
    super(props)
    this.state={
      place: {
        name: "",
        yelp_rating: "",
        categories: "",
        price: "",
        address_street: "",
        phone: ""
      }
    }
  }

  handleChange(e){
    let target = e.target
    let place = this.state.place
    place[target.name] = target.value
    this.setState({
      place: place
    })
  }

  handleSubmit(e){
    e.preventDefault();
    // addPlace(this.state)
  }

  render(){
    return (
    <div>
      <div className='modal'>
        <span>&times;</span>
        <form className='form' onSubmit={this.handleSubmit.bind(this)}>
          <div className='formGroup'>
            <input
              placeholder='Name'
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
          <br />
        </form>
      </div>
    </div>
    )
  }
}
export default AdminPlaceModal;
