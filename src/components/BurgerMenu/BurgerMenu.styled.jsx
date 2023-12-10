import styled from "styled-components";
import { Link } from "react-scroll";
import { ReactComponent as close } from "../../assets/icon/close.svg";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(23, 61, 51, 0.25);
`;

export const ContainerMenu = styled.div`
  position: fixed;
  top: 32px;
  right: 20px;
  width: 320px;
  height: 701px;
  border-radius: 25px;
  background-color: #265246;
`;

export const IconClose = styled(close)`
`;

export const Button = styled.button`
  background-color: #265246;
  cursor: pointer;
`;

export const MenuLink = styled(Link)`
  cursor: pointer;
`;
