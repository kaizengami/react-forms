import React, { useState } from "react";

import { PageWrapper } from "./page.styles";
import Login from "components/Page/Login/Login";
import Steps from "components/Page/Steps/Steps";
import Phone from "components/Page/Phone/Phone";

const Header: React.FC = () => {
  const [step, setStep] = useState(1);
  const [login, setLogin] = useState(false);
  return (
    <PageWrapper>
      {login ? (
        <>
          <Steps step={step} />
          <Phone setStep={setStep} />
        </>
      ) : (
        <Login setLogin={setLogin} />
      )}
    </PageWrapper>
  );
};

export default Header;
