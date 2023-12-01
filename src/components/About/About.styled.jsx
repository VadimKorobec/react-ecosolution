import styled from "styled-components";
import men from "../../assets/img/Men.png";
import man from '../../assets/img/Man.png'

export const Wrapper = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    margin-bottom: 100px;
  }
`;

export const Title = styled.h2`
  font-family: "Oswald", sans-serif;
  font-weight: 400;
  font-size: 28px;
  line-height: 28px;
  color: #173d33;
  text-transform: uppercase;

  @media screen and (max-width: 767px) {
    width: 320px;
    padding-bottom: 24px;
  }

  @media screen and (min-width: 768px) {
    font-size: 36px;
    line-height: 36px;
    width: 272px;
  }
`;

export const TextWrapper = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
  }
`;

export const LineVertical = styled.div`
  @media screen and (min-width: 768px) {
    height: 115px;
    border-left: 1px solid #97d28b;
  }
`;

export const Text = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 19.2px;
  color: #173d33;

  @media screen and (max-width: 767px) {
    margin-bottom: 36px;
  }

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    width: 375px;
    margin-left: 10px;
  }
`;

export const ImgRight = styled.div`
  background-image: url(${men});
  width:342px;
  height:197px;

  @media screen and (max-width: 767.9px) {
    display: none;
  }
`;

export const ImgLeft = styled.div`
  background-image: url(${man});
  width: 342px;
  height: 197px;

  @media screen and (max-width: 767.9px) {
    display: none;
  }
`;

export const CardWrapper = styled.div`
  @media screen and (max-width: 767.9px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 24px;
    grid-row-gap: 24px;
    margin-bottom: 36px;
  }

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 24px;
    grid-row-gap: 24px;
  }
`;

export const Card = styled.div`
  padding: 12px 12px 12px 12px;
  background-color: #eaedf1;

  @media screen and (max-width: 767px) {
    height: 197px;
  }

  @media screen and (min-width: 768px) {
    width: 135px;
    height: 173px;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 33px;
`;

export const CardTitle = styled.h3`
  font-family: "Oswald", sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #173d33;
  text-transform: uppercase;
`;

export const Line = styled.div`
  width: 100%;
  border-bottom: 1px solid #97d28b;
  margin-bottom: 12px;
`;

export const CardText = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 16.8px;
  color: #173d33;
`;
