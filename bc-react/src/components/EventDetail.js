// import React, { Component } from 'react';
// import Img from 'react-image'
// import VoteButton from '../components/VoteButton';
// import RSVPButton from '../components/RSVPButton';
//
// class EventDetail extends Component {
//   constructor(){
//     super()
//   }
//   dateParser(){
//     var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
//     var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
//     let temp = this.props.data.event.date.split('T')
//     let date = temp[0].split('-')
//     let dayOfWeek = weekday[new Date(date).getDay()]
//     let month = months[new Date(date).getMonth()]
//     let day = new Date(date).getDate()
//     let hourTime = new Date(temp).getHours()
//     let minuteTime = new Date(temp).getMinutes()
//     console.log(dayOfWeek, "," , month, "", day, " @ ", hourTime,":", minuteTime)
//   }
//
//
//   render() {
//     this.dateParser()
//     //need to add a state and set the state, and replace the console log
//     var mappedUsers =  this.props.data.users.map(function(user, i){
//       console.log(user)
//       if (this.props.eventData.users.length == 0){
//         mappedUsers = <p>No RSVPs yet</p>
//       }
//       else {
//         mappedUsers = this.props.eventData.users.map(function(user, i){
//       return (
//         <div key={i}>
//           <p>{user.firstName + " " + user.lastName}</p>
//           <p>{user.email}</p>
//         </div>
//       )}
//     )}
// }
//     return (
//       <div>
//         <h1>Next breakfast club</h1>
//         <div className="eventDate">
//           <p>Voted: {this.props.voted}</p>
//           <p>RSVP: {this.props.rsvp}</p>
//           <p>Date: {this.props.data.event.date}</p>
//         </div>
//         <div className="place1">
//           <h4>{this.props.data.places[0].name}</h4>
//           <img src={this.props.data.places[0].image_url} />
//           <img className="yelp-rating-place-one yelp-rating" src={`../Images/small_${this.props.data.places[0].yelp_rating}.png`} />
//         </div>
//         <div className="place2">
//           <h4>{this.props.data.places[1].name}</h4>
//           {!this.props.voted && <VoteButton choice="1"/>}
//           {!this.props.voted && <VoteButton choice="2"/>}
//           {!this.props.rsvp && this.props.voted && <RSVPButton/>}
//           <img src={this.props.data.places[1].image_url} />
//           <img className="yelp-rating-place-two yelp-rating" src={`../Images/small_${this.props.data.places[1].yelp_rating}.png`} />
//         </div>
//         <div>
//           <h4>Attendees</h4>
//           {mappedUsers}
//         </div>
//       </div>
//       );
//       }
//     }
//
//
// export default EventDetail;
