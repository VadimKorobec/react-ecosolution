import styled from "styled-components";
import { ReactComponent as Arrow } from "../../assets/icon/arrow.svg";
import { ReactComponent as arrowLeft } from "../../assets/icon/arrowLeftBig.svg";
import { ReactComponent as arrowRight } from "../../assets/icon/arrowRightBig.svg";

export const Title = styled.h2`
  font-family: "Oswald", sans-serif;
  font-weight: 400;
  font-size: 28px;
  line-height: 28px;
  color: #173d33;
  text-transform: uppercase;
  width: 264px;

  @media screen and (max-width: 480px) {
    margin-bottom: 24px;
  }

  @media screen and (min-width: 768px) {
    font-size: 36px;
    line-height: 36px;
    margin-right: 90px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 48px;
    line-height: 48px;
    width: 398px;
  }
`;

export const TitleWrapper = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    margin-bottom: 38px;
  }

  @media screen and (min-width: 1280px) {
    margin-bottom: 120px;
  }
`;

export const LineWrap = styled.div`
  display: flex;

  @media screen and (max-width: 767px) {
    display: none;
  }
`;

export const LineVertical = styled.div`
  height: 48px;
  border-left: 1px solid #97d28b;
  position: relative;
  left: 50%;

  @media screen and (min-width: 768px) {
    height: 65px;
  }

  @media screen and (min-width: 1280px) {
    height: 96px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 767px) {
    margin-bottom: 19px;
  }
`;

export const NumberWrap = styled.div`
  display: flex;
  align-items: flex-end;
`;

export const Number = styled.p`
  font-weight: 300;
  font-size: 28px;
  line-height: 33.6px;
  color: #173d33;
`;

export const Count = styled.p`
  font-weight: 300;
  font-size: 28px;
  line-height: 33.6px;
  color: rgba(23, 61, 51, 0.25);
`;

export const ButtonWrap = styled.div`
  display: flex;
  gap: 12px;

  @media screen and (min-width: 1280px) {
    gap: 24px;
  }
`;

export const ArrowLeft = styled(arrowLeft)`
  stroke: #173d33;
  padding: 14px;
  border: 1.5px solid #173d33;
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    stroke: #97d28b;
    border-color: #97d28b;
  }

  @media screen and (min-width: 768px) {
    margin-left: 126px;
  }

  @media screen and (min-width: 1280px) {
    padding: 24px;
    margin-left: 193px;
  }
`;

export const ArrowRight = styled(arrowRight)`
  stroke: #173d33;
  padding: 14px;
  border: 1.5px solid #173d33;
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    stroke: #97d28b;
    border-color: #97d28b;
  }

  @media screen and (min-width: 1280px) {
    padding: 24px;
  }
`;

export const Icon = styled.img`
  width: 36px;
  height: 36px;
  color: #173d33;
`;

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

export const CardWrapper = styled.div`
  padding: 24px 12px 12px 12px;

  @media screen and (min-width:1280px) {
    padding:36px 48px;
   }
`;

export const CardTitleWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 21px;

  @media screen and (min-width:768px) {
    margin-bottom: 16px;
  }

  @media screen and (min-width:1280px) {
    margin-bottom:36px ;
  }
`;

export const CardTitle = styled.h3`
  font-weight: 400;
  font-size: 18px;
  line-height: 21.6px;
  color: #173d33;
  height: 66px;

  @media screen and (min-width: 768px) {
    font-size: 20px;
    line-height: 24px;
    height: 72px;
  }

  @media screen and (min-width:1280px) {
    font-size: 24px;
    line-height: 28.8px;
  }
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

export const Line = styled.div`
  width: 100%;
  border-bottom: 1px solid #97d28b;
  margin-bottom: 12px;

  @media screen and (min-width:1280px) {
    margin-bottom:24px ;
  }
`;

export const CardTextWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CardText = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 14.4px;
  color: #173d33;

  @media screen and (min-width:768px) {
    font-size: 14px;
    line-height: 16.8px;
  }

  @media screen and (min-width:1280px) {
    font-size: 16px;
    line-height: 19.2px;
  }
`;

export const CardsWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media screen and (max-width: 480px) {
    margin-bottom: 36px;
  }

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    margin-bottom: 107px;
  }

  @media screen and (min-width: 1280px) {
    margin-bottom: 127px;
  }
`;
