import React, { Component } from 'react';

class PlaceListing extends Component {
  render(){
    return(
      <div className="col-xs-3">
        <ul>
          <li>
            <img src={this.props.place.image_url} width="200px"></img>
          </li>
          <li>
            {this.props.place.name}
          </li>
          <li>
            {this.props.place.categories}
          </li>
          <li>
            {this.props.place.rating}
          </li>
          <li>
            {this.props.place.review_count}
          </li>
          <li>
            {this.props.place.price}
          </li>
          <li>
            {this.props.place.street}
          </li>
          <li>
            {this.props.place.city}
          </li>
          <li>
            {this.props.place.state}
          </li>
          <li>
            {this.props.place.zip}
          </li>
          <li>
            {this.props.place.phone}
          </li>
        </ul>
      </div>
    )
  }
}

export default PlaceListing;
