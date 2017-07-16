import React, {Component} from 'react';
import {Link} from 'react-router-dom'

class AdminKey extends Component {
  constructor(props){
    super(props)
    this.state = {show: false}
  }

  handleToggle() {this.setState({show: !this.state.show});}

  render(){
    return (
          <Link to='/admin' className="admin-key">
            <img src='../Images/admin-key.png' title='admin' alt='admin page'/>
            <div className='admin-caption'> admin key </div>
          </Link>
    );
  }
}

export default AdminKey;
