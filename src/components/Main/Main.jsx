import { Link } from "react-scroll";

import svgArrow from "../../assets/icon/arrowRightSmall.svg";
import mill from "../../assets/img/mill.jpg";
import { Container } from "../Container/Container";
import {
  Title,
  Text,
  Button,
  Icon,
  Line,
  Adress,
  Unicode,
  TitleWrapper,
  TextWrapper,
  AddressWrapper,
  Img,
  Email,
} from "./Main.styled";

export const Main = () => {
  return (
    <Container id="main">
      <TitleWrapper>
        <Title>RENEWABLE ENERGY FOR ANY TASK</Title>
        <TextWrapper>
          <Text>
            Development and implementation of renewable non-polluting energy
            sources, generating power generation using energy wind, sun, water,
            biomass
          </Text>
          <Link
            to="cases"
            spy={true}
            smooth={true}
            offset={-115}
            duration={1000}
          >
            <Button>
              Learn more
              <Icon src={svgArrow} alt="arrow"></Icon>
            </Button>
          </Link>
        </TextWrapper>
      </TitleWrapper>
      <Line></Line>
      <AddressWrapper>
        <Adress>79005, Ukraine, Lvivstreet. Shota Rustaveli, 7</Adress>
        <Email href="mailto:office@ecosolution.com">
          office@ecosolution.com
        </Email>
        <Unicode>ecosolution &copy; 2023</Unicode>
      </AddressWrapper>
      <Img src={mill} alt="img" />
    </Container>
  );
};
