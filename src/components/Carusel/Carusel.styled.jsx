import styled from 'styled-components'
import { ReactComponent as Arrow } from "../../assets/icon/arrow.svg";

export const Card = styled.div`
  background-color: #eaedf1;
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    width: 342px;
    height: 322px;
  }

  @media screen and (min-width: 1280px) {
    width: 596px;
    height: 506px;
  }
`;

export const CardTitle = styled.h2`
  font-weight: 400;
  font-size: 18px;
  line-height: 21.6px;
  color: #173d33;
  height: 66px;
 
  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 24px;
    width:194px;
    height: 72px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 24px;
    line-height: 28.8px;
    width:380px;
  }
`;

export const CardTextWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CardIcon = styled(Arrow)`
  padding: 16px;
  background-color: #97d28b;
  border-radius: 50%;
  stroke: #173d33;
  cursor: pointer;

  &:hover {
    background-color: #173d33;
    stroke: #97d28b;
  }
`;

export const Img = styled.img`
    width: 100%;
`;

export const CardWrapper = styled.div`
  padding: 24px 12px 12px 12px;

  @media screen and (min-width: 1280px) {
    padding: 36px 48px;
  }
`;

export const CardText = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 14.4px;
  color: #173d33;

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 16.8px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 16px;
    line-height: 19.2px;
  }
`;

export const Line = styled.div`
  width: 100%;
  border-bottom: 1px solid #97d28b;
  margin-bottom: 12px;

  @media screen and (min-width: 1280px) {
    margin-bottom: 24px;
  }
`;

export const CardTitleWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 21px;

  @media screen and (min-width: 768px) {
    margin-bottom: 16px;
  }

  @media screen and (min-width: 1280px) {
    margin-bottom: 36px;
  }
`;