import styled from "styled-components";
import { ReactComponent as menu } from "../../assets/icon/menu.svg";
import { ReactComponent as arrow } from "../../assets/icon/arrowDown.svg";

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  padding-top: 36px;
  padding-bottom: 146px;

  @media screen and (min-width:768px) {
    padding-bottom:164px;
  }
`;

export const BurgerMenu = styled(menu)`
  padding: 12px 12px;
  background-color: #dcefd8;
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    background-color: #97d28b;
  }

  @media screen and (min-width: 768px) {
    margin-left: auto;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 140px;
  height: 39px;
  border-radius: 500px;
  padding: 10px 16px 10px 16px;
  margin-left: 12px;
  border: none;
  background-color: #97d28b;
  color: #173d33;
  font-weight: 400;
  font-size: 16px;
  line-height: 19.2px;
  cursor: pointer;

  &:hover {
    background-color: #173d33;
    color: #97d28b;
  }

  @media screen and (max-width: 767px) {
    display: none;
  }
`;

export const ArrowDown = styled(arrow)`
  padding: 3px;
  border-radius: 50px;
  background-color: #173d33;

  ${Button}:hover & {
    background-color: #97d28b;
  }
`;
