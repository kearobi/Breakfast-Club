import React, {Component} from 'react';
import MessageBoard2 from '../components/MessageBoard2';
import ToggleDisplay from 'react-toggle-display';

class MessageBoardToggle extends Component {
  constructor(props){
    super(props)
    this.state = {show: false}
  }

  handleToggle() {this.setState({show: !this.state.show});}

  render(){
    return (
        <div>
          <button className="sticky" type='button' onClick={ () => this.handleToggle() }><img src='../Images/chat.png' title='chat' alt='chat'/></button>
          <ToggleDisplay show={this.state.show}>
            <MessageBoard2 />
          </ToggleDisplay>
        </div>
    );
  }
}

export default MessageBoardToggle;
