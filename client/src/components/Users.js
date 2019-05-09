import React from 'react';
import axios from 'axios';

class Users extends React.Component {
  state = {
    users: [],
  }

  componentDidMount() {
    const url = 'http://localhost:4242/api/users';
    const token = localStorage.getItem('token');
    const reqConfig = {
      headers: {
        authorization: token,
      }
    }
    axios.get(url, reqConfig)
      .then(res => {
        console.log(res.data);
        const users = res.data;
        this.setState({ users });
      })
      .catch(err => {
        console.error(err);
      })
  }

  render() {
    console.log(this.state.users)
    return (
      <>
        <h2>Users List</h2>
        <p>Username (Department)</p>
        <ul>
          {this.state.users.map(user => (
            <li key={user.id}>
              {`${user.username} (${user.department || 'none'})`}
            </li>
          ))}
        </ul>
      </>
    )
  }
}

export default Users;