import { useState } from "react";
import { Link } from "react-scroll";

import { Logo } from "../Logo/Logo";
import { BurgerMenu } from "../BurgerMenu/BurgerMenu";

import {
  HeaderWrapper,
  BtnMenu,
  Button,
  ArrowDown,
  Container,
} from "./Header.styled";

export const Header = () => {
  const [open, setOpen] = useState(false);
  const [color, setColor] = useState(false);

  const handleChangeColor = () => {
    if (window.scrollY >= 89) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", handleChangeColor);

  const handleClickMenu = () => {
    setOpen(!open);
  };

  return (
    <HeaderWrapper
      style={
        color ? { backgroundColor: "#ffff" } : { backgroundColor: "#f3f5fa" }
      }
    >
      <Container>
        <Logo />
        {open ? (
          <BurgerMenu onClick={handleClickMenu} />
        ) : (
          <BtnMenu onClick={handleClickMenu} />
        )}
        <Link
          to="contact"
          spy={true}
          smooth={true}
          offset={-115}
          duration={1000}
        >
          <Button type="button">
            Get in touch <ArrowDown />
          </Button>
        </Link>
      </Container>
    </HeaderWrapper>
  );
};
