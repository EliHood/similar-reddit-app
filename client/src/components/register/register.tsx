import Typography from "@material-ui/core/Typography";
import React, { Component, Fragment } from "react";
import SignUpForm from "../forms/signUp/signUp";
import GridHoc from "../hoc/grid";
import IsAuth from "../hoc/isAuthenticated";

export interface registerProps {
  onChange: (event: any) => void;
  signUpInit: (event: object) => void;
  addUsername: (event: object) =>  void;
  addEmail: (event: object) => void;
  addPassword: (event: object) => void;
  user?: any;
}
export interface registerState {
  passwordConf: string;
  passErr: string;
}
class Register extends Component<registerProps, registerState> {
  public state: registerState = {
    passwordConf: "",
    passErr: "",
  };

  public handleEmailChange = (e: any) => {
    this.props.addEmail(e.target.value);
  }
  public handleUsernameChange = (e: any) => {
    this.props.addUsername(e.target.value);
  }
  public handlePasswordChange = (e: any) => {
    this.props.addPassword(e.target.value);
  }

  public handleSubmit = (e: any) => {
    e.preventDefault();
    const { username, email, password  } = this.props.user;
    const creds = {
      username,
      email,
      password,
    };
    console.log(creds);
    this.props.signUpInit(creds);

  }
  public render() {
    const { username, email, password, usernameError, passwordError, emailError  } = this.props.user;
    const isEnabled =
    emailError === true && passwordError === true && usernameError === true ? false : true;
    return (
      <Fragment>
        <Typography variant="h4" style={{ letterSpacing: "2px" }}>
          Register
        </Typography>
        {this.props.user.error && <div>{this.props.user.error}</div>}
        <SignUpForm
          submit={this.handleSubmit}
          usernameChange={this.handleUsernameChange}
          emailChange={this.handleEmailChange}
          passwordChange={this.handlePasswordChange}
          username={username}
          password={password}
          email={email}
          usernameError={usernameError}
          passwordError={passwordError}
          emailError={emailError}
          disButton={isEnabled}
        />
      </Fragment>
    );
  }
}
export default GridHoc(IsAuth(Register));
