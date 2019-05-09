import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Users from './components/Users';
import Default from './components/Default';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header>
          <Navbar />
        </header>
        <main>
          <Switch>
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
            <Route
              path="/"
              render={props => (
                <Default {...props} />
              )}
            />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
