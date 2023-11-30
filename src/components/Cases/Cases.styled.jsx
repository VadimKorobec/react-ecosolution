import styled from "styled-components";
import {ReactComponent as Arrow } from '../../assets/img/arrow.svg'

export const Title = styled.h2`
  font-family: "Oswald", sans-serif;
  font-weight: 400;
  font-size: 28px;
  line-height: 28px;
  color: #173d33;
  text-transform: uppercase;
  margin-bottom: 24px;
  width:264px;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 19px;
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
`;

export const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 66px;
  height: 66px;
  border: 1px solid #173d33;
  border-radius: 50%;
`;

export const Icon = styled.img`
  width: 36px;
  height: 36px;
  color: #173d33;
`;

export const Card = styled.div`
    background-color: #eaedf1;
`;

export const CardWrapper = styled.div`
  padding: 24px 12px 12px 12px;
`;

export const CardTitleWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items:center;
  margin-bottom: 21px;
`;

export const CardTitle = styled.h3`
  font-weight: 400;
  font-size: 18px;
  line-height: 21.6px;
  color: #173d33;
  height: 66px;
`;


export const CardIcon = styled(Arrow)`
  padding:16px;
  background-color:#97d28b;
  border-radius:50%;
  stroke: #173d33;
  cursor: pointer;

  &:hover  {
    background-color:#173d33;
    stroke: #97d28b;
  }
`;

export const Line = styled.div`
  width: 100%;
  border-bottom: 1px solid #97d28b;
  margin-bottom: 12px;
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
`;

export const CardsWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 36px;
`;

