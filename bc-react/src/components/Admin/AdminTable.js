import React, { Component } from 'react';
import AdminUserIcons from './AdminUserIcons';

class AdminTable extends Component {



  render(){
    return(
      <tr>
        {tableField}
      </tr>
    )
  }
}

export default AdminTable;

//this.props.user because tha'ts where the user's hanging out -- in the props
