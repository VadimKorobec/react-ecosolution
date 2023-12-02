import styled from "styled-components";

export const Title = styled.h2`
  font-family: "Oswald", sans-serif;
  font-weight: 400;
  font-size: 28px;
  line-height: 28px;
  color: #173d33;
  text-transform: uppercase;
  text-align: center;

  @media screen and (max-width: 480px) {
    width: 286px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 24px;
  }

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    font-size: 36px;
    line-height: 36px;
    width: 368px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 24px;
  }
`;

export const LineWrap = styled.div`
  display: flex;
  margin-bottom: 24px;
`;

export const Line = styled.div`
  height: 48px;
  border-left: 1px solid #97d28b;
  position: relative;
  left: 50%;

  @media screen and (min-width: 768px) {
    height: 87px;
  }
`;

export const NumbersWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 480px) {
    width: 303px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 36px;
  }

  @media screen and (min-width: 768px) {
    width: 602px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom:100px;
  }
`;

export const Numbers = styled.p`
  font-family: "Oswald", sans-serif;
  font-weight: 700;
  font-size: 48px;
  line-height: 48px;
  color: #97d28b;

  @media screen and (min-width: 768px) {
    font-size: 100px;
    line-height: 100px;
  }
`;

export const NumbersText = styled.p`
  font-family: "Oswald", sans-serif;
  font-weight: 400;
  font-size: 24px;
  line-height: 24px;
  color: #173d33;

  @media screen and (min-width:768px) {
    font-size:28px;
    line-height: 48px;
    
  }
`;
