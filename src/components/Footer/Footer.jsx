import svgAsset from "../../assets/img/bgAsset 324 2.svg";
import svgEco from "../../assets/img/ecosolution.svg";
import svgGreen from "../../assets/img/GREENERGY FOR LIFE.svg";
import arrowAbove from "../../assets/img/arrowAbove.svg";
import facebookSvg from "../../assets/img/facebook.svg";
import instagramSvg from "../../assets/img/instagram.svg";
import {Container} from '../Container/Container'
import { LogoWrap,Line, Wrapper, Icon, IconWrap, Address, Link, Unicode } from "./Footer.styled";

export const Footer = () => {
  return (
    <Container>
      <Line></Line>
      <Wrapper>
        <LogoWrap>
          <img src={svgAsset} alt="logo" />
          <img src={svgEco} alt="logo" />
          <img src={svgGreen} alt="logo" />
        </LogoWrap>
        <Icon src={arrowAbove} alt="arrow" />
      </Wrapper>
      <IconWrap>
        <a href="https://www.facebook.com/">
          <img src={facebookSvg} alt="icon" />
        </a>
        <a href="https://www.instagram.com/">
          <img src={instagramSvg} alt="icon" />
        </a>
      </IconWrap>
      <Address>79005, Ukraine, Lvivstreet. Shota Rustaveli, 7</Address>
      <Link href="mailto:office@ecosolution.com">office@ecosolution.com</Link>
      <Unicode>ecosolution &copy; 2023</Unicode>
    </Container>
  );
};
