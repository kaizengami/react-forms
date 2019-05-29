import React, { useState } from "react";

import { GlobalStyles, AppWrapper, PageWrapper } from "./app.styles";
import Page from "components/Page/Page";
import Footer from "components/Footer/Footer";

const App: React.FC = () => {
  const [login, setCount] = useState(true);

  return (
    <>
      <GlobalStyles />
      <AppWrapper>
        <PageWrapper>
          <Page />
        </PageWrapper>
        <Footer />
      </AppWrapper>
    </>
  );
};

export default App;
