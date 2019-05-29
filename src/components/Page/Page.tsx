import React, { useState } from "react";

import { PageWrapper } from "./page.styles";
import Steps from "components/Page/Steps/Steps";
import Phone from "components/Page/Phone/Phone";

const Header: React.FC = () => {
  const [step, setStep] = useState(1);

  return (
    <PageWrapper>
      <Steps step={step} />
      <Phone setStep={setStep} />
    </PageWrapper>
  );
};

export default Header;
