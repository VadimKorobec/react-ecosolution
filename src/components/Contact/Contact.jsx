import { Container } from "../Container/Container";

import mapSvg from "../../assets/img/map.svg";

import {
  Address,
  Call,
  Facebook,
  IconWrap,
  Instagram,
  Link,
  LinkWrap,
  PhoneWrap,
  Sms,
  SmsWrap,
  SubTitle,
  Title,
} from "./Contact.styled";

export const Contact = () => {
  return (
    <Container>
      <Title>Contact us</Title>
      <SubTitle>Phone</SubTitle>
      <PhoneWrap>
        <Link href="tel:38 (098) 12 34 567">
          <Call />
          38 (098) 12 34 567
        </Link>
        <Link href="tel:38 (098) 12 34 567">
          <Call />
          38 (098) 12 34 567
        </Link>
      </PhoneWrap>
      <SubTitle>E-mail</SubTitle>
      <SmsWrap>
        <Link href="mailto:office@ecosolution.com">
          <Sms />
          office@ecosolution.com
        </Link>
      </SmsWrap>
      <SubTitle>Address</SubTitle>
      <LinkWrap>
        <img src={mapSvg} alt="map" />
        <Address>79005, Ukraine, Lvivstreet. Shota Rustaveli, 7</Address>
      </LinkWrap>
      <SubTitle>Social Networks:</SubTitle>
      <IconWrap>
        <a href="https://www.facebook.com/">
          <Facebook />
        </a>
        <a href="https://www.instagram.com/">
          <Instagram />
        </a>
      </IconWrap>
    </Container>
  );
};
