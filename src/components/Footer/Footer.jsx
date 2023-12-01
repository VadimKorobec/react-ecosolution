import { Container } from "../Container/Container";
import { Logo } from "../Logo/Logo";



import {
  Line,
  IconWrap,
  Address,
  Link,
  Unicode,
  LogoWrapper,
  ArrowUp,
  Facebook,
  Instagram,
} from "./Footer.styled";

export const Footer = () => {
  return (
    <Container>
      <Line></Line>
      <LogoWrapper>
        <Logo />
        <ArrowUp/>
      </LogoWrapper>
      <IconWrap>
        <a href="https://www.facebook.com/">
         <Facebook/>
        </a>
        <a href="https://www.instagram.com/">
          <Instagram/>
        </a>
      </IconWrap>
      <Address>79005, Ukraine, Lvivstreet. Shota Rustaveli, 7</Address>
      <Link href="mailto:office@ecosolution.com">office@ecosolution.com</Link>
      <Unicode>ecosolution &copy; 2023</Unicode>
    </Container>
  );
};
