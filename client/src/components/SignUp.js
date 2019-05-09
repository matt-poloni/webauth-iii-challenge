import React from 'react';
import axios from 'axios';

class SignUp extends React.Component {
  state = {
    username: '',
    password: '',
    department: '',
  }
  
    handleChanges = e => {
      const { id, value } = e.target;
      this.setState({
          [id]: value,
      });
    };

    handleSubmit = e => {
      e.preventDefault();
      const url = 'http://localhost:4242/api/register';
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
          department: '',
      })
    };

  render() {
    return (
      <>
        <h2>Sign Up</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="username">Username: </label>
            <input
              id="username"
              type="text"
              value={this.state.username}
              onChange={this.handleChanges}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password: </label>
            <input
              id="password"
              type="password"
              value={this.state.password}
              onChange={this.handleChanges}
              required
            />
          </div>
          <div>
            <label htmlFor="department">Department: </label>
            <input
              id="department"
              type="text"
              value={this.state.department}
              onChange={this.handleChanges}
            />
          </div>
          <button type="submit">Sign Up</button>
        </form>
      </>
    )
  }
}

export default SignUp;