import React from 'react';
import { withRouter, NavLink } from 'react-router-dom';

const Navbar = (props) => {
  function signout() {
    localStorage.removeItem('token');
    props.history.push('/signin');
  }

  if(localStorage.getItem('token')) {
    return (
      <nav>
        <NavLink to="/users">Users</NavLink>
        {' | '}
        <button onClick={signout}>Sign Out</button>
      </nav>
    )
  } else {
    return (
      <nav>
        <NavLink to="/signup">Sign Up</NavLink>
        {' | '}
        <NavLink to="/signin">Sign In</NavLink>
      </nav>
    )
  }
}

export default withRouter(Navbar);