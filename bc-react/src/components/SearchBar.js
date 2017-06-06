import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props){
    super(props)
    this.state = { term: '' }
  }
  render() {
    return (
      <div>
        <input
          size='63'
          type='search'
          placeholder='Search'
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)}
        />
      </div>
    )
  }

  onInputChange(term){
    this.setState({term});
//check cat tinder
  }
}

export default SearchBar;
