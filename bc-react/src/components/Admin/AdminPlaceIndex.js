import React, { Component } from 'react';
import AdminPlaceListing from './AdminPlaceListing';
import placeStore from '../../stores/PlaceStore';
import { updatePlaces } from '../../actions.js';

class AdminPlaceIndex extends Component {
  constructor(props){
    super(props)
    this.state = {
      places: placeStore.getPlaces()
    }
    updatePlaces()
  }

  handleUpdatePlaces(){
    this.setState({
      places: placeStore.getPlaces()
    })
  }

  componentWillMount(){
    placeStore.on('change', this.handleUpdatePlaces.bind(this))
  }

  renderPlaces(){
    let placeRender = []
    for(var i=0; i<this.state.places.length; i++){
      let placeId = "place-" + i
      placeRender.push(
        <AdminPlaceListing key={placeId} place={this.state.places[i]} />
      )
    }
    return placeRender
  }

  render(){
    return(
      <div>
      </div>
    )
  }
}
export default AdminPlaceIndex;
