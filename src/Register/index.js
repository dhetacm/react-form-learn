import React, { Component } from "react";

class Register extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: ""
    };
  }

  handleEmailInput = event => {
    this.setState({ email: event.target.value });
  };

  handlePasswordInput = event => {
    this.setState({ password: event.target.value });
  };

  render() {
    return (
      <form>
        <h3>Register</h3>
        <label htmlFor="email">Email</label>
        <input type="email" onChange={this.handleEmailInput} />
        <label htmlFor="password">Password</label>
        <input type="password" onChange={this.handlePasswordInput} />
        <input type="submit" value="Register" />
      </form>
    );
  }
}

export default Register;
