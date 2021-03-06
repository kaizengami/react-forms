import styled from "styled-components";

export const StepsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 95%;
  height: 100px;
  text-align: center;
  background-color: #ffffff;
  margin-bottom: 120px;
  padding: 10px 10px;
  padding-right: 40px;
  @media (min-width: 1200px) {
    width: 900px;
    margin: 0 auto;
    margin-bottom: 120px;
  }
`;

export const Step = styled.div`
  display: flex;
  flex-direction: column;
  width: 100px;
`;

export const StepIcon = styled<any>("div")`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: #ccc;
  margin: 0 auto;
  position: relative;
  outline: none;
  color: #fff;
  font-size: 25.6px;

  ${({ active }) =>
    active &&
    `
    background-image: linear-gradient(
    136deg,
    rgb(242, 113, 33) 0%,
    rgb(233, 64, 87) 50%,
    rgb(138, 35, 135) 100%
  );
  `}
`;

export const IconImg = styled.div`
  height: 90px;
  line-height: 60px;
  text-align: center;
`;

export const IconTitle = styled.div`
  position: absolute;
  width: 100px;
  margin-top: 70px;
  font-size: 14px;
  padding-top: 10px;
  text-align: center;
  opacity: 0.7;
`;
