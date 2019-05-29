import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #222222;
  color: white;
  height: 20px;
  font-size: 10px;
`;

const Footer: React.FC = () => {
  return <FooterWrapper>Support: +234 (1) 4621100</FooterWrapper>;
};

export default Footer;
