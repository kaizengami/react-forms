import React, { Component, useState } from "react";

import {
  PhoneWrapper,
  Title,
  Form,
  Input,
  SubmitHidden,
  Submit
} from "./phone.styles";

interface Props {
  setStep(step: number): void;
}

interface State {
  active: boolean;
}

class Phone extends Component<Props, State> {
  private input: React.RefObject<HTMLInputElement>;
  constructor(props: Props) {
    super(props);

    this.state = {
      active: false
    };
    this.input = React.createRef();
  }

  submit = (e: any): void => {
    e.preventDefault();

    let value = this.input.current!.value;
    if (value) {
      console.log("not a number");
    } else console.log("is number");
  };

  render() {
    return (
      <PhoneWrapper>
        <Form onSubmit={this.submit}>
          <Title>Phone number:</Title>
          <Input
            type="number"
            name="name"
            autoComplete="off"
            ref={this.input}
          />
          <SubmitHidden type="submit" id="submit-number" className="hidden" />
        </Form>
        <Submit htmlFor="submit-number" tabIndex={0}>
          Submit
        </Submit>
      </PhoneWrapper>
    );
  }
}

export default Phone;
