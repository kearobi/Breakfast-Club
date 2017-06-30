import React, {Component} from 'react';
import Coverflow from 'react-coverflow';
import SideBar from '../components/SideBar';

class Slideshow extends Component {
  render(){
    return (
      <div className='slideshow-page'>
        <SideBar />
        <div className='col-md-12'>
            <Coverflow
              width={960}
              height={480}
              displayQuantityOfSide={2}
              navigation={true}
              enableHeading={false}>
              <img src='../Images/1.jpg' alt=' ' data-action="../Images/1.jpg"/>
              <img src='../Images/2.jpg' alt=' ' data-action="../Images/2.jpg"/>
              <img src='../Images/3.jpg' alt=' ' data-action="../Images/3.jpg"/>
              <img src='../Images/4.jpg' alt=' ' data-action="../Images/4.jpg"/>
              <img src='../Images/5.jpg' alt=' ' data-action="../Images/5.jpg"/>
              <img src='../Images/6.jpg' alt=' ' data-action="../Images/6.jpg"/>
              <img src='../Images/7.jpg' alt=' ' data-action="../Images/7.jpg"/>
              <img src='../Images/8.jpg' alt=' ' data-action="../Images/8.jpg"/>
              <img src='../Images/9.jpg' alt=' ' data-action="../Images/9.jpg"/>
              <img src='../Images/10.jpg' alt=' ' data-action="../Images/10.jpg"/>
              <img src='../Images/11.jpg' alt=' ' data-action="../Images/11.jpg"/>
              <img src='../Images/12.jpg' alt=' ' data-action="../Images/12.jpg"/>
              <img src='../Images/13.jpg' alt=' ' data-action="../Images/13.jpg"/>
            </Coverflow>
            </div>
        </div>
      );
    }
}
export default Slideshow;
