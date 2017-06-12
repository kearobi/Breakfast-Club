import React, { Component } from 'react';
import PlaceListing from './PlaceListing'
import placeStore from '../stores/PlaceStore'
import MessageBoard from '../components/MessageBoard';
import SideBar from '../components/SideBar';

class PlaceIndex extends Component {
  constructor(props){
    super(props)
    this.state = {
      places: placeStore.getPlaces()
    }
  }

  updatePlaces(){
    this.setState({
      places: placeStore.getPlaces()
    })
  }

  componentWillMount(){
    placeStore.on('change', this.updatePlaces.bind(this))
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
        <SideBar />
        <div>
            <h2>Place List</h2>
            <h2 className="place-list">{this.renderPlaces()}</h2>
        </div>
      </div>
    )
  }
}
export default PlaceIndex;
