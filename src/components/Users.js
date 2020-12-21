import React, { Component } from 'react';
import { connect } from 'react-redux';
// add any needed imports here
class Users extends Component {

  render() {
    const { users, userCount } = this.props
    const allUsers = users.map((user, index) => {
      return <li key={index}>{user.username}</li>
    })
    return (
      <div>
        <ul>
          Users!
          { allUsers }
          { userCount }
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  return {
    users: state.users,
    userCount: state.users.length
  }
}

// connect this component to Redux
export default connect(mapStateToProps)(Users);
