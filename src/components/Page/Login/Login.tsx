import React, { Component, useState } from "react";

import {
  LoginWrapper,
  Title,
  InputTitle,
  Form,
  Input,
  SubmitHidden,
  Submit,
  Error
} from "./login.styles";

interface Props {
  setLogin(isLoggedIn: boolean): void;
}

interface State {
  error: boolean;
}

class Login extends Component<Props, State> {
  private inputName: React.RefObject<HTMLInputElement>;
  private inputPassword: React.RefObject<HTMLInputElement>;
  private error: React.RefObject<HTMLDivElement>;
  private loginError: string = "username or password is incorrect";
  constructor(props: Props) {
    super(props);

    this.state = {
      error: false
    };
    this.inputName = React.createRef();
    this.inputPassword = React.createRef();
    this.error = React.createRef();
  }

  submit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    let inputName = this.inputName.current!.value;
    let inputPassword = this.inputPassword.current!.value;
    if (inputName.length < 1 || inputPassword.length < 1) {
      // this.error.current.innerHTML = "username or password is incorrect";
      this.setState({ error: true });
    } else {
      this.setState({ error: false });
      this.props.setLogin(true);
    }
  };

  render() {
    return (
      <LoginWrapper>
        <Form onSubmit={this.submit}>
          <Title>Log in:</Title>
          <InputTitle>Name</InputTitle>
          <Input
            type="text"
            name="number"
            autoComplete="off"
            ref={this.inputName}
            data-testid="input-name"
          />
          <InputTitle>Password</InputTitle>
          <Input
            type="text"
            name="number"
            autoComplete="off"
            ref={this.inputPassword}
            data-testid="input-password"
          />
          <SubmitHidden type="submit" id="submit-number" className="hidden" />
        </Form>
        {this.state.error && (
          <Error error={this.state.error}>
            <label>{this.loginError}</label>
          </Error>
        )}
        {/* <Error ref={this.error} error={this.state.error} data-testid="error" /> */}
        <Submit htmlFor="submit-number" tabIndex={0}>
          Submit
        </Submit>
      </LoginWrapper>
    );
  }
}

export default Login;
