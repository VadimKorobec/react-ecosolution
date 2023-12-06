import { Container } from "../Container/Container";
import { Logo } from "../Logo/Logo";

import {
  Line,
  IconWrap,
  Address,
  Link,
  Unicode,
  ArrowUp,
  Facebook,
  Instagram,
  WrapperUp,
  Section,
  WrapperDown,
} from "./Footer.styled";

export const Footer = () => {
  return (
    <Container>
      <Section>
        <Line></Line>
        <WrapperUp>
          <Logo />
          <ArrowUp />
          <IconWrap>
            <a href="https://www.facebook.com/">
              <Facebook />
            </a>
            <a href="https://www.instagram.com/">
              <Instagram />
            </a>
          </IconWrap>
        </WrapperUp>
        <WrapperDown>
          <Address>79005, Ukraine, Lvivstreet. Shota Rustaveli, 7</Address>
          <Link href="mailto:office@ecosolution.com">
            office@ecosolution.com
          </Link>
          <Unicode>ecosolution &copy; 2023</Unicode>
        </WrapperDown>
      </Section>
    </Container>
  );
};
