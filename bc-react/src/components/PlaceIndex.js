import React, { Component } from 'react';
import PlaceListing from './PlaceListing'
import PlaceStore from '../stores/PlaceStore'

class PlaceIndex extends Component {
  constructor(props){
    super(props)
    this.state = {
      places: PlaceStore.getPlaces()
    }
  }

  updatePlaces(){
    this.setState({
      Places: PlaceStore.getPlaces()
    })
  }

  componentWillMount(){
    PlaceStore.on('change', this.updatePlaces.bind(this))
  }

  renderPlaces(){
    let placeRender = []
    for(var i=0; i<this.state.places.length; i++){
      let placeId = "place-" + i
      placeRender.push(
        <PlaceListing key={placeId} place={this.state.places[i]}></PlaceListing>
      )
    }
    return placeRender
  }

  render(){
    return(
      <div>
          <h2>Place List</h2>
        <div className="place-list row">
          {this.renderPlaces()}
        </div>
      </div>
    )
  }
}
export default PlaceIndex;
