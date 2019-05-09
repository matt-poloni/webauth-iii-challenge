import React from 'react';
import { withRouter, NavLink } from 'react-router-dom';

const Navbar = (props) => {
  function signout() {
    localStorage.removeItem('token');
    props.history.push('/signin');
  }

  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      {' | '}
      <NavLink to="/signup">Sign Up</NavLink>
      {' | '}
      <NavLink to="/signin">Sign In</NavLink>
      {' | '}
      <NavLink to="/users">Users</NavLink>
      {' | '}
      <button onClick={signout}>Sign Out</button>
    </nav>
  )
}

export default withRouter(Navbar);