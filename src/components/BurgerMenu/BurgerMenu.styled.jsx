import styled from "styled-components";
import { Link } from "react-scroll";
import { ReactComponent as close } from "../../assets/icon/close.svg";
import { ReactComponent as arrow } from "../../assets/icon/arrow-right.svg";
import { ReactComponent as facebook } from "../../assets/icon/facebook.svg";
import { ReactComponent as instagram } from "../../assets/icon/instagram.svg";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(23, 61, 51, 0.25);
  pointer-events: initial;
  
`;

export const ContainerMenu = styled.div`
  position: fixed;
  top: 32px;
  right: 20px;
  width: 320px;
  height: 701px;
  border-radius: 25px;
  background-color: #265246;
  padding: 24px 19px;

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    right: 30px;
  }

  @media screen and (min-width: 1280px) {
    top: 24px;
    right: 17.3%;
  }
`;

export const BtnWrapp = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  margin-bottom: 8px;
`;

export const Button = styled.button`
  font-family: "Fira Sans", sans-serif;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #ffffff;
  background-color: #265246;
  cursor: pointer;
  border: none;

  &:hover {
    color: #97d28b;
  }
`;

export const IconClose = styled(close)`
  stroke: #ffffff;
  ${BtnWrapp}:hover & {
    stroke: #97d28b;
  }
`;

export const Line = styled.div`
  border: 1px solid #ffffff;
  margin-bottom: 16px;
`;

export const Item = styled.li`
  list-style: none;
  margin-bottom: 8px;
`;

export const MenuLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: "Fira Sans", sans-serif;
  font-size: 24px;
  font-weight: 400;
  line-height: 28.8px;
  color: rgba(255, 255, 255, 0.25);
  cursor: pointer;

  &:hover {
    color: #97d28b;
  }

  
`;

export const Arrow = styled(arrow)`
  stroke: rgba(255, 255, 255, 0.25);

  ${MenuLink}:hover & {
    stroke: #97d28b;
  }
`;

export const IconWrap = styled.div`
  margin-top: 450px;
  display: flex;
  gap: 8px;
`;

export const Facebook = styled(facebook)`
  stroke: rgba(255, 255, 255, 0.25);
  cursor: pointer;

  &:hover {
    stroke: #97d28b;
  }
`;

export const Instagram = styled(instagram)`
  stroke: rgba(255, 255, 255, 0.25);
  cursor: pointer;

  &:hover {
    stroke: #97d28b;
  }
`;

 