import React, { Component } from 'react';
import { connect } from 'react-redux';

class Users extends Component {
  render() {

    let users = this.props.users.map((user, index) => 
      <li key={index}>{user.username} from {user.hometown}</li>)

    return (
      <div>
        {/* In addition, display the total number of users curently in the store */}
        Total Number of Users: {this.props.numberOfUsers}
          
        {/* {this.props.users.length} */}
          <ul>
            Users! <br /><br />
            
            {/* Write code here that displays the usernames of all users in the Redux store */}
            All Usernames: {users}
              <br /><br />
         </ul>
       </div>
     )
   }
  }

// add mapStateToProps here
const mapStateToProps = (state) => {
  return {
    users: state.users,
    numberOfUsers: state.users.length
  };
};

// connect this component to Redux
export default connect(mapStateToProps)(Users)
