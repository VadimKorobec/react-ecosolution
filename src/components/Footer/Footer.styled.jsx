import styled from "styled-components";

import { ReactComponent as arrow } from "../../assets/icon/arrowAbove.svg";
import { ReactComponent as facebook } from "../../assets/icon/facebook.svg";
import { ReactComponent as instagram } from "../../assets/icon/instagram.svg";

export const Section = styled.section`
position: relative;`;

export const Line = styled.div`
  width: 100%;
  border-bottom: 1px solid #97d28b;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
  }
`;

export const WrapperUp = styled.div`
  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    margin-bottom: 16px;
  }
`;

export const LogoWrapper = styled.div`
  @media screen and (max-width: 767px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 24px;
  }
`;

export const ArrowUp = styled(arrow)`
  padding: 8px;
  border-radius: 50%;
  background-color: #97d28b;
  stroke: #173d33;
  cursor: pointer;

  &:hover {
    background-color: #173d33;
    stroke: #97d28b;
  }

  @media screen and (max-width: 767px) {
    position: absolute;
    right: 0;
    top: 28px;
  }

  @media screen and (min-width: 768px) {
    grid-column-start: 3;
    grid-column-end: 4;
  }
`;

export const IconWrap = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;

  @media screen and (max-width: 767px) {
    margin-top:24px;
    margin-bottom: 24px;
  }

  @media screen and (min-width: 768px) {
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 2;
  }
`;

export const Address = styled.address`
  font-weight: 400;
  font-size: 16px;
  line-height: 19.2px;
  font-style: normal;
  color: #173d33;
  text-align: center;
  margin-bottom: 16px;
`;

export const Email = styled.a`
  display: block;
  font-weight: 400;
  font-size: 16px;
  line-height: 19.2px;
  color: #173d33;
  text-align: center;
  margin-bottom: 16px;
`;

export const Unicode = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height:19.2px;
  color: #173d33;
  text-align: center;
  margin-bottom: 24px;
`;

export const Facebook = styled(facebook)`
  stroke: #173d33;
  cursor: pointer;

  &:hover {
    stroke: #97d28b;
  }
`;

export const Instagram = styled(instagram)`
  stroke: #173d33;
  cursor: pointer;

  &:hover {
    stroke: #97d28b;
  }
`;

export const WrapperDown = styled.div`
  @media screen and (min-width:768px) {
    display: grid;
    grid-template-columns: auto auto auto;
    justify-content:space-between;
  }
`


