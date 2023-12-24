import { Container } from "../Container/Container";
import { MessageForm } from "../MessageForm/MessageForm";

import {
  Address,
  Call,
  ContentWrapper,
  Facebook,
  IconWrap,
  Instagram,
  Link,
  LinkWrap,
  Map,
  PhoneWrap,
  Sms,
  SmsWrap,
  SubTitle,
  Title,
  Wrapper,
} from "./Contact.styled";

export const Contact = () => {
  return (
    <Container id="contact">
      <Title>Contact us</Title>
      <Wrapper>
        <ContentWrapper>
          <div>
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
          </div>
          <div>
            <SubTitle>E-mail</SubTitle>
            <SmsWrap>
              <Link href="mailto:office@ecosolution.com">
                <Sms />
                office@ecosolution.com
              </Link>
            </SmsWrap>
          </div>
          <div>
            <SubTitle>Address</SubTitle>
            <LinkWrap>
              <Address>
                <Map style={{height:'24px'}}/>
                79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
              </Address>
            </LinkWrap>
          </div>
          <div>
            <SubTitle>Social Networks:</SubTitle>
            <IconWrap>
              <a href="https://www.facebook.com/">
                <Facebook />
              </a>
              <a href="https://www.instagram.com/">
                <Instagram />
              </a>
            </IconWrap>
          </div>
        </ContentWrapper>
        <MessageForm />
      </Wrapper>
    </Container>
  );
};
