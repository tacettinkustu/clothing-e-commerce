import React, { Component } from "react";
import "./sign-in.styles.scss"
import FormInput from "../form-input/form-input.component";
import CustomBotton from "../custom-button/custom-button.component";

class SignIn extends Component {
  constructor(props){
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }
  

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ email: "", password: "" });
  };

  handleChange = (e) => {
    const {value,name} = e.target;
    this.setState({
        [name]:value,
    })

    e.preventDefault();
  }

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            value={this.state.email}
            handleChange={this.handleChange}
            label="email"
            required
          ></FormInput>
          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="password"
            required
          ></FormInput>

          <CustomBotton type="submit">Sign in</CustomBotton>
        </form>
      </div>
    );
  }
}

export default SignIn;
