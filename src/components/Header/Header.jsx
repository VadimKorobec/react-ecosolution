import { Logo } from "../Logo/Logo";
import { Container } from "../Container/Container";
import { HeaderWrapper, BtnMenu, Button, ArrowDown } from "./Header.styled";
import { useState } from "react";
import { BurgerMenu } from "../BurgerMenu/BurgerMenu";

export const Header = () => {
  const [open, setOpen] = useState(false);
  

  const handleClickMenu = () => {
    setOpen(!open)
  }

  return (
    <Container>
      <HeaderWrapper>
        <Logo />
        {open ? <BurgerMenu onClick={handleClickMenu} /> : <BtnMenu onClick={handleClickMenu} />}
        <Button type="button">
          Get in touch <ArrowDown />
        </Button>
      </HeaderWrapper>
    </Container>
  );
};
