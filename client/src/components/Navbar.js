import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = (props) => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      {' | '}
      <NavLink to="/signup">Sign Up</NavLink>
      {' | '}
      <NavLink to="/signin">Sign In</NavLink>
      {' | '}
      <NavLink to="/users">Users</NavLink>
    </nav>
  )
}

export default Navbar;