import React from 'react';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }

  handleChanges = e => {
    this.setState({
        [e.target.name]: e.target.value,
    });
  };

  // handleSubmit = e => {
  //   e.preventDefault();
  //   // submit
  //   this.setState({
  //       username: '',
  //       password: '',
  //   })
  // };

  render() {
    return (
      <div>Sign In form will be here.</div>
    )
  }
}

export default SignIn;