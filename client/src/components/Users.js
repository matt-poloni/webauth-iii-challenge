import React from 'react';
import axios from 'axios';

class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    }
  }

  componentDidMount() {
    // get users from back end
  }

  render() {
    return (
      <div>Users will be listed here.</div>
    )
  }
}

export default Users;