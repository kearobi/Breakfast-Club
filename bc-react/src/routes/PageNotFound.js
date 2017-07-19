import React, { Component } from 'react';
import {Link} from 'react-router-dom'
class PageNotFound extends Component {
  render() {
    return (
      <div className='MIA'>
        <Link className="go-home" to="/">
          <button className='go-home wobble color'>Go Back to Breakfast Club</button>
        </Link>
        <div>
          PAGE<br />NOT FOUND<br />
          <img src="http://i.imgur.com/QKo4beW.png" alt="rainbow cat" />
        </div>
        <a className="go-home button2" href="https://www.youtube.com/watch?v=4eZyh7OtiIc">
          <button className='go-home wobble color'>Watch Breakfast Club</button>
        </a>
      </div>
    );
  }
}

export default PageNotFound
