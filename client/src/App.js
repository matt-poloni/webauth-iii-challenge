import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Users from './components/Users';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header>
          <nav>
            <NavLink to="/signup">Sign Up</NavLink>
            <NavLink to="/signin">Sign In</NavLink>
            <NavLink to="/users">Users</NavLink>
          </nav>
        </header>
        <main>
          <Route
            path="/signup"
            render={SignUp}
          />
          <Route
            path="/signin"
            render={SignIn}
          />
          <Route
            path="/users"
            render={Users}
          />
        </main>
      </div>
    );
  }
}

export default App;
