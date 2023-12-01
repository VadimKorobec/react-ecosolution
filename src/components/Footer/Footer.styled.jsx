import styled from "styled-components";
import { ReactComponent as arrow } from "../../assets/img/arrowAbove.svg";
import { ReactComponent as facebook } from "../../assets/img/facebook.svg";
import { ReactComponent as instagram } from "../../assets/img/instagram.svg";

export const Line = styled.div`
  width: 100%;
  border-bottom: 1px solid #97d28b;
  margin-bottom: 24px;
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
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
`;

export const IconWrap = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-bottom: 24px;
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

export const Link = styled.a`
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
  line-height: 19.2px;
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
