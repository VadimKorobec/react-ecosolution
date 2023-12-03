import styled from "styled-components";
import { ReactComponent as plus } from "../../assets/icon/plus.svg";
import { ReactComponent as minus } from "../../assets/icon/minus.svg";

export const Title = styled.h2`
  font-family: "Oswald", sans-serif;
  font-weight: 400;
  font-size: 36px;
  line-height: 36px;
  color: #173d33;
  text-transform: uppercase;
`;

export const Card = styled.li`
  list-style: none;
  
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 342px;
  cursor: pointer;
  gap: 16px;
  padding-top:16px;
  padding-bottom:16px;
`;

export const CardTitleWrapper = styled.div`
  display: flex;
  align-items:center;
  gap:16px;
`

export const Line = styled.div`
  border-bottom: 1px solid #97d28b;
  width: 342px;
`;

export const PlusIcon = styled(plus)`
  width: 28px;
  height: 28px;
`;

export const MinusIcon = styled(minus)`
  width: 28px;
  height: 28px;
`;

export const CardTitle = styled.h3`
  font-weight: 400;
  font-size: 18px;
  line-height: 21.6px;
  color: #173d33;
  width: 342px;
`;

export const CardText = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 16.8px;
  width:298px;
  color: #173d33;
  margin-left:auto;
  
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction:column;
  width: 328px;
`

export const Text = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 21.6px;
  color: #173d33;
  margin-bottom:12px;
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

