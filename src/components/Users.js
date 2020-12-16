import React, { Component } from 'react';
import { connect } from 'react-redux'
// add any needed imports here
class Users extends Component {

  render() {
    let users = this.props.users.map(user => <li>{user.username} from {user.hometown}</li>) 
      return (
        <div>
          <p>{this.props.numberOfUsers} User(s)!</p>
          <ul>
            {users}
          </ul>
        </div>
      )
    }
  }
  
  const mapStateToProps = (state) => {
    return { 
      users: state.users,
      numberOfUsers: state.users.length
    }
  }
  
  export default connect(mapStateToProps)(Users);
