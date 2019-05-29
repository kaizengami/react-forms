import React, { useState } from "react";

import {
  StepsWrapper,
  Step,
  StepIcon,
  IconImg,
  IconTitle
} from "./steps.styles";

interface Props {
  step: number;
}

const Steps: React.FC<Props> = () => {
  return (
    <StepsWrapper>
      <Step>
        <StepIcon>
          <IconImg>I</IconImg>
        </StepIcon>
        <IconTitle>Phone</IconTitle>
      </Step>
      <Step>
        <StepIcon>
          <IconImg>N</IconImg>
        </StepIcon>
        <IconTitle>Name</IconTitle>
      </Step>
      <Step>
        <StepIcon>
          <IconImg>A</IconImg>
        </StepIcon>
        <IconTitle>Address</IconTitle>
      </Step>
      <Step>
        <StepIcon>
          <IconImg>C</IconImg>
        </StepIcon>
        <IconTitle>Confirmation</IconTitle>
      </Step>
      <Step>
        <StepIcon>
          <IconImg>S</IconImg>
        </StepIcon>
        <IconTitle>Success</IconTitle>
      </Step>
    </StepsWrapper>
  );
};

export default Steps;
