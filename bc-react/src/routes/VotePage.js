//just a mock up for now
import React, {Component} from 'react';
import SideBar from '../components/SideBar';
import {updateUser} from '../actions';
import userStore from '../stores/UserStore';

class VotePage extends Component {
  constructor(props){
    super(props)
    this.state={
    }
  }

  render(){

    return (
        <div>
          <SideBar />
          <div className='vote-page FontAmatic'>
            <div className='FontAmatic'>
              Friday, June 30 @ 8:00 AM
            </div>
            <div>
              <br />
            <div>The Mission vs Broken Yolk</div>
            <img src='../Images/bc-default.jpg' alt='breakfast club' />
            <img src='../Images/bc-default.jpg' alt='breakfast club' />
          </div>
        </div>
        </div>
      );
    }
}
export default VotePage;
