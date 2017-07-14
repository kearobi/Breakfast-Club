//Places passes props to PlaceListing

import React, { Component } from 'react';
import Header from '../components/Header';
import PlaceListing from '../components/PlaceListing'
import placeStore from '../stores/PlaceStore'
import SideBar from '../components/SideBar';
import SideBarMini from '../components/SideBarMini';

class Places extends Component {
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
      <div className="wrapper">{/* //this is the flex container */}
          <SideBar />{/* //this is a flex item  with a nested flex container */}
        <div className='places-page'>{/* //this is a flex item */}
          <div className='nested'>{/* //this is a nested flex container */}
          <SideBarMini />
          <Header />
        <div>
            <h2>Place List</h2>
            <p className="place-list">{this.renderPlaces()}</p>
        </div>
        </div>
        </div>
        <img className='fruit-border' src='../Images/fruit-border.jpg' alt='fruit'></img>
      </div>
    )
  }
}
export default Places;
