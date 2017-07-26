//AdminUsers gets props from AdminPage and passes props to AdminTable, SearchBar, AdminModal

import React, {Component} from 'react';
import SearchBar from './AdminSearchBar';
import AdminModal from './AdminModal';
import AdminTable from './AdminTable';
import Modal from 'react-modal'
//only the most parent component should be responsible for fetching data. Does that mean I should be fetching the data in AdminPage?

//now in our Admin page we have users, and we want to put that into our Search Bar so it can use those props

const customStyle = {
  overlay : {
    position          : 'fixed',
    top               : 0,
    left              : 0,
    right             : 0,
    bottom            : 0,
    backgroundColor   : 'rgba(255, 255, 255, 0.5)',
    zIndex            : 5
  },
  content : {
    top               : '50%',
    left              : '50%',
    right             : 'auto',
    bottom            : 'auto',
    marginRight       : '-50%',
    transform         : 'translate(-50%, -50%)',
    width             : '170px',
    height            : '200px',
    fontFamily        : 'Abel',
    display           : 'flex',
    flexDirection     : 'column',
    alignSelf         : 'center',
    justifyContent    : 'center'
  }
};

class AdminUsers extends Component {
  constructor(props){
    super(props)
    this.state = {users: this.props.users,
                  modal: false}
    this.openModal = this.openModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
    this.closeModalOnSubmit = this.closeModalOnSubmit.bind(this)
  }

  openModal(){
    this.setState({modal: true})
  }

  closeModal(){
    this.setState({modal: false})
  }

  closeModalOnSubmit(modal){
    this.setState(modal)}

  userParams(){
    return(
      { user: {
            firstName: "",
            lastName: "",
            email: "",
            neighborhood: "",
            password: ""
          }})}

  render(){
    return(
      <div className='admin-page'>
        <p>Users</p>
        <div className="search_bar_wrapper">
          <button className="add_button" type="button"
            onClick={this.openModal}>
            + user </button>
          <SearchBar users={this.props.users} userSearchBar={true}/>
        </div>
          <br></br><br></br>
          <AdminTable userList={true} />
          <div className='admin-modal'>
            <Modal
              isOpen={this.state.modal}
              onRequestClose={this.closeModal}
              style={customStyle}
              contentLabel="Modal"
            >
              <AdminModal
                userForm={true}
                startingState={this.userParams()}
                closeModal={this.closeModalOnSubmit}
              />
          </Modal>
          </div>
      </div>
      );
    }
  }
export default AdminUsers;
