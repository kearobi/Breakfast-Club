import React, { Component } from 'react';

class EventChoice extends Component {


  render() {
    return (
      <div>
        <p>Choice {this.props.choice}</p>
        <h4>{this.props.place.name}</h4>
        <img src={this.props.place.image_url} />
      </div>
    );
  }
}

export default EventChoice;
