//PlaceListing gets props from PlaceIndex

import React, { Component } from 'react';

class PlaceListing extends Component {
  render(){
    return(
      <div className="outside">

        <div className="list col-xs-3">
          <ul className="list-background">

            <li className="image">
              <img src={this.props.place.image_url} ></img>
            </li>

            <br></br>

            <li className="fields">
              WHERE: {this.props.place.name}
            </li>

            <li className="fields">
              WHAT KIND: {this.props.place.categories}
            </li>

            <li className="fields">
              HOW GOOD: {this.props.place.yelp_rating}
            </li>

            <li className="fields">
              REVIEWED: {this.props.place.review_count}
            </li>

            <li className="fields">
              HOW MUCH MOOLAH: {this.props.place.price}
            </li>

            <li className="fields">
              ADDRESS: {this.props.place.address_street}
            </li>

            <li className="fields">
              {this.props.place.address_city} ,
              {this.props.place.address_state} ,
              {this.props.place.address_zip}
            </li>

            <li className="fields">
              TELE: {this.props.place.phone}
            </li>
            <hr></hr>
          </ul>
        </div>

      </div>
    )
  }
}

export default PlaceListing;
