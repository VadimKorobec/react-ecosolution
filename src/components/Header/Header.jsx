import { Logo } from "../Logo/Logo";
import { Container } from "../Container/Container";
import {
  HeaderWrapper,
  BurgerMenu,
  Button,
  ArrowDown,
  
} from "./Header.styled";

export const Header = () => {
  return (
    <Container>
      <HeaderWrapper>
        <Logo />
        <BurgerMenu />
        <Button type="button">
          Get in touch <ArrowDown />
        </Button>
      </HeaderWrapper>
    </Container>
  );
};
