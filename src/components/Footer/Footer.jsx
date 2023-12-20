import { Container } from "../Container/Container";
import { Logo } from "../Logo/Logo";
import { Link } from "react-scroll";

import {
  Line,
  IconWrap,
  Address,
  Unicode,
  ArrowUp,
  Facebook,
  Instagram,
  WrapperUp,
  Section,
  WrapperDown,
  Email,
} from "./Footer.styled";

export const Footer = () => {
  return (
    <Container>
      <Section>
        <Line></Line>
        <WrapperUp>
          <Logo />
          <Link
            to="main"
            spy={true}
            smooth={true}
            offset={-115}
            duration={1000}
          >
            <ArrowUp />
          </Link>
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
          <Email href="mailto:office@ecosolution.com">
            office@ecosolution.com
          </Email>
          <Unicode>ecosolution &copy; 2023</Unicode>
        </WrapperDown>
      </Section>
    </Container>
  );
};
