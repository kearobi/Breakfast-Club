import React from 'react';
import Icons from './icons';

const UserTable = function(){
  return(
    <div>
      <table className="center">
        <tr>
          <th>ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email Address</th>
          <th>Neighborhood</th>
          <th>Password</th>
          <th></th>
        </tr>
  {/* this is where we'll need to connect to the DB */}
        <tr>
          <td>1</td>
          <td>Gabe</td>
          <td>Giestas</td>
          <td>brazilgabe@gmail.com</td>
          <td>Mission Valley</td>
          <td>helloworld</td>
          <th><Icons /></th>
        </tr>
      </table>
    </div>
    );
  }

export default UserTable;
