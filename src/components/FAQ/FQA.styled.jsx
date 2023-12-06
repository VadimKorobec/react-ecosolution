import styled from "styled-components";
import { ReactComponent as plus } from "../../assets/icon/plus.svg";
import { ReactComponent as minus } from "../../assets/icon/minus.svg";

export const GridWrapper = styled.div`
  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto auto auto auto;
    grid-column-gap: 24px;
    padding-bottom:100px;
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
    margin-bottom: 24px;
  }

  @media screen and (min-width: 768px) {
    font-size: 36px;
    line-height: 36px;
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 1;
  }
`;

export const Card = styled.li`
  list-style: none;
  

  @media screen and (min-width: 768px) {
    grid-column-start: 1;
    grid-column-end: 2;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  gap: 16px;
  padding-top: 16px;
  padding-bottom: 16px;

  

  @media screen and (min-width: 768px) {
    width: 342px;
  }
`;

export const CardTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  @media screen and (min-width: 768px) {
    gap: 16px;
  }
`;

export const Line = styled.div`
  border-bottom: 1px solid #97d28b;
  width: 100%;

  @media screen and (min-width: 768px) {
    width: 342px;
  }
`;

export const PlusIcon = styled(plus)`
  width: 16px;
  height: 16px;

  @media screen and (min-width: 768px) {
    width: 28px;
    height: 28px;
  }
`;

export const MinusIcon = styled(minus)`
  width: 16px;
  height: 16px;

  @media screen and (min-width: 768px) {
    width: 28px;
    height: 28px;
  }
`;

export const CardTitle = styled.h3`
  font-weight: 400;
  font-size: 18px;
  line-height: 21.6px;
  color: #173d33;

  @media screen and (min-width: 768px) {
    width: 342px;
  }
`;

export const CardText = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 16.8px;
  color: #173d33;
  margin-left: 18px;

  @media screen and (min-width: 768px) {
    width: 298px;
    margin-left: auto;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 328px;

  @media screen and (max-width:767px) {
    margin:0 auto;
    padding-top:20px;
    padding-bottom:36px;
  }

  @media screen and (min-width: 768px) {
    margin-top: auto;
    margin-bottom: 6px;
  }
`;

export const Text = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 21.6px;
  color: #173d33;
  margin-bottom: 12px;
`;

export const Button = styled.button`
  display: flex;
  padding: 10px 12px 10px 16px;
  border-radius: 500px;
  border: none;
  background-color: #97d28b;
  font-weight: 400;
  font-size: 16px;
  line-height: 19.2px;
  color: #173d33;
  align-items: center;
  gap: 12px;
  margin: 0 auto;
`;
