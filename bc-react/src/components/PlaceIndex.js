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
      places: PlaceStore.getPlaces()
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
          <h2 className="place-list">{this.renderPlaces()}</h2>
      </div>
    )
  }
}
export default PlaceIndex;
