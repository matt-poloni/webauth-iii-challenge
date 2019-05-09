import React from 'react';
import axios from 'axios';

class SignIn extends React.Component {
  state = {
    username: '',
    password: ''
  }

  handleChanges = e => {
    const { id, value } = e.target;
    this.setState({ [id]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const url = 'http://localhost:4242/api/login';
    axios.post(url, this.state)
      .then(res => {
        localStorage.setItem('token', res.data.token);
        this.props.history.push('/users');
      })
      .catch(err => {
        console.error(err);
      })
    this.setState({
        username: '',
        password: '',
    })
  };

  render() {
    return (
      <>
        <h2>Sign In</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="username">Username: </label>
            <input
              id="username"
              type="text"
              value={this.state.username}
              onChange={this.handleChanges}
            />
          </div>
          <div>
            <label htmlFor="password">Password: </label>
            <input
              id="password"
              type="text"
              value={this.state.password}
              onChange={this.handleChanges}
            />
          </div>
          <button type="submit">Sign In</button>
        </form>
      </>
    )
  }
}

export default SignIn;