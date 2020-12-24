import React, { Component } from 'react';
import { connect } from 'react-redux';
// add any needed imports here
class Users extends Component {

  render() {
    const list = this.props.users.map((u) => <li>{u.username}</li>)
    return (
      <div>
        <ul>
          Users!
          {/* Write code here that displays the usernames of all users in the Redux store */}
          {list}
          {/* In addition, display the total number of users curently in the store */}
          {this.props.users.length}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here

const mapStateToProps = (state) => {
 
  return { users: state.users, userCount: state.users.length }
  console.log(state)
}


// connect this component to Redux
export default connect(mapStateToProps)(Users)
