import React from 'react';
import { Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Users from './components/Users';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header>
          <Navbar />
        </header>
        <main>
          <Route
            path="/signup"
            render={props => (
              <SignUp {...props} />
            )}
          />
          <Route
            path="/signin"
            render={props => (
              <SignIn {...props} />
            )}
          />
          <Route
            path="/users"
            render={props => (
              <Users {...props} />
            )}
          />
        </main>
      </div>
    );
  }
}

export default App;
