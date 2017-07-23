import React, {Component} from 'react';
import MessageBoard from './MessageBoard';
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
          <div className="sticky" onClick={ () => this.handleToggle() }>message board
          </div>
          <ToggleDisplay show={this.state.show}>
            <MessageBoard />
          </ToggleDisplay>
        </div>
    );
  }
}

export default MessageBoardToggle;
