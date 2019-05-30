import React, { Component, useState } from "react";

import {
  PhoneWrapper,
  Title,
  Form,
  Input,
  SubmitHidden,
  Submit,
  Error
} from "./phone.styles";

interface Props {
  setStep(step: number): void;
}

interface State {
  active: boolean;
  error: boolean;
}

class Phone extends Component<Props, State> {
  private input: React.RefObject<HTMLInputElement>;
  private error: any;
  constructor(props: Props) {
    super(props);

    this.state = {
      active: false,
      error: false
    };
    this.input = React.createRef();
    this.error = React.createRef();
  }

  submit = (e: any): void => {
    e.preventDefault();

    let value = this.input.current!.value;
    if (value.length < 6) {
      this.error.current.innerHTML = "not valid number";
      this.setState({ error: true });
    } else {
      this.setState({ error: false });
    }
    this.setState({ error: value.length < 6 });
  };

  render() {
    return (
      <PhoneWrapper>
        <Form onSubmit={this.submit}>
          <Title>Phone number:</Title>
          <Input
            type="number"
            name="number"
            autoComplete="off"
            ref={this.input}
            pattern="\(\d{3}\) \d{3}\-\d{4}"
            data-testid="input"
          />
          <SubmitHidden type="submit" id="submit-number" className="hidden" />
        </Form>
        <Error ref={this.error} error={this.state.error} data-testid="error" />
        <Submit htmlFor="submit-number" tabIndex={0}>
          Submit
        </Submit>
      </PhoneWrapper>
    );
  }
}

export default Phone;
