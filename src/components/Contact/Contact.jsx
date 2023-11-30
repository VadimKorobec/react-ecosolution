import callSvg from "../../assets/img/call.svg";
import smsSvg from "../../assets/img/sms.svg";
import mapSvg from "../../assets/img/map.svg";
import facebookSvg from "../../assets/img/facebook.svg";
import instagramSvg from "../../assets/img/instagram.svg";
import { Address, Icon, IconWrap, Link, LinkWrap, SubTitle, Title } from "./Contact.styled";
import { Container } from "../Container/Container";

export const Contact = () => {
  return (
    <Container>
      <Title>Contact us</Title>
      <SubTitle>Phone</SubTitle>
      <LinkWrap>
        <img src={callSvg} alt="call" />
        <Link href="tel:38 (098) 12 34 567">38 (098) 12 34 567</Link>
      </LinkWrap>
      <LinkWrap>
        <img src={callSvg} alt="call" />
        <Link href="tel:38 (098) 12 34 567">38 (098) 12 34 567</Link>
      </LinkWrap>
      <SubTitle>E-mail</SubTitle>
      <LinkWrap>
        <img src={smsSvg} alt="sms" />
        <Link href="mailto:office@ecosolution.com">office@ecosolution.com</Link>
      </LinkWrap>
      <SubTitle>Address</SubTitle>
      <LinkWrap>
        <img src={mapSvg} alt="map" />
        <Address>79005, Ukraine, Lvivstreet. Shota Rustaveli, 7</Address>
      </LinkWrap>
      <SubTitle>Social Networks:</SubTitle>
      <IconWrap>
        <a href="https://www.facebook.com/">
          <Icon src={facebookSvg} alt="icon" />
        </a>
        <a href="https://www.instagram.com/">
          <Icon src={instagramSvg} alt="icon" />
        </a>
      </IconWrap>
    </Container>
  );
};
