import React, {Component} from 'react';
import Coverflow from 'reactjs-coverflow';
import SideBar from '../components/SideBar';
import SideBarMini from '../components/SideBarMini';
import Header from '../components/Header';
import MessageBoardToggle from '../components/MessageBoardToggle';

class Photos extends Component {

  prev(e) {
      e.preventDefault();
      this.refs.coverflow.previous();
  }

  next(e) {
      e.preventDefault();
      this.refs.coverflow.next();
  }

  render(){
    return (
      <div className="wrapper">{/* //this is the flex container */}
          <SideBar />{/* //this is a flex item  with a nested flex container */}
        <div className='slideshow-page'>{/* //this is a flex item */}
          <div className='nested'>{/* //this is a nested flex container */}
          <Header />
          <SideBarMini />
          <div className='page-title'>Photos</div>
            <form>
              <button className='entry-button wobble' onClick={this.prev.bind(this)} type="button">&#8592;</button>
                <Coverflow ref="coverflow"
                style={{width: "1100px", height:"600px"}}
                margin={(this.state && this.state.margin + "px") || undefined}
                startPosition={4}
                enableScroll={true}
                animationSpeed={0.8}>
                    <img src='../Images/1.jpg' alt='breakfast club'/>
                    <img src='../Images/2.jpg' alt='breakfast club'/>
                    <img src='../Images/3.jpg' alt='breakfast club'/>
                    <img src='../Images/4.jpg' alt='breakfast club'/>
                    <img src='../Images/5.jpg' alt='breakfast club'/>
                    <img src='../Images/6.jpg' alt='breakfast club'/>
                    <img src='../Images/7.jpg' alt='breakfast club'/>
                    <img src='../Images/8.jpg' alt='breakfast club'/>
                    <img src='../Images/9.jpg' alt='breakfast club'/>
                    <img src='../Images/10.jpg' alt='breakfast club'/>
                    <img src='../Images/11.jpg' alt='breakfast club'/>
                    <img src='../Images/12.jpg' alt='breakfast club'/>
                    <img src='../Images/13.jpg' alt='breakfast club'/>
                </Coverflow>
                <button className='entry-button wobble' onClick={this.next.bind(this)} type="button">&#8594;</button>
            </form>
            <MessageBoardToggle />
            </div>
        </div>
      </div>
      );
    }
}
export default Photos;
