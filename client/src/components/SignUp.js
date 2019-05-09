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
  
    handleChanges = e => {
      const { id, value } = e.target;
      this.setState({
          [id]: value,
      });
    };

  // handleSubmit = e => {
  //   e.preventDefault();
  //   // submit
  //   this.setState({
  //       username: '',
  //       password: '',
  //       department: null,
  //   })
  // };

  render() {
    return (
      <div>Sign Up form will be here.</div>
    )
  }
}

export default SignUp;