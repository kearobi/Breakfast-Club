import React, {Component} from 'react';

class Email extends Component {
  render(){
    return (
      <div className='email'>
        <hr/>
      <div className='h1'>breakfast club</div>
      <div className='h2'>SAN DIEGO</div>
        <hr/>
      <p>Welcome to <a href='https://breakfast-club.herokuapp.com/'>Breakfast Club</a>!<br/>A weekly get-together for tech professionals in Sunny Sandy Eggo
    </p>
    <p>Questions? Thoughts? Concerns?</p>
    <p>Send them on over to <a href="mailto:breakfastclub.sd@gmail.com?Subject=Questions,%20Thoughts,%20Concerns" target="_top">breakfastclub.sd@gmail.com</a>
  </p>
    </div>
    );
  }
}

export default Email;
