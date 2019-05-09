import React from 'react';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      department: null,
    }
  }

  // handleSubmit = e => {
  //   e.preventDefault();
  //   // submit
  //   this.setState({
  //       username: '',
  //       password: '',
  //       department: null,
  //   })
  // };

  handleChanges = e => {
    this.setState({
        [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <div>Sign Up form will be here.</div>
    )
  }
}

export default SignUp;