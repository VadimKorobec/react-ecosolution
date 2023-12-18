

// import mills from "../../assets/img/mills.jpg";
// import batteries from "../../assets/img/batteries.jpg";
// import transformer from "../../assets/img/transformer.jpg";
// import mills2 from "../../assets/img/mills-2.jpg";
// import station from "../../assets/img/station.jpg";
import { Carusel } from "../Carusel/Carusel";
import { Container } from "../Container/Container";
import {
  ArrowLeft,
  ArrowRight,
  ButtonWrap,
  // Card,
  // CardIcon,
  // CardText,
  // CardTextWrap,
  // CardTitle,
  // CardTitleWrap,
  // CardWrapper,
   CardsWrap,
  Count,
  // Line,
  LineVertical,
  LineWrap,
  Number,
  NumberWrap,
  Title,
  TitleWrapper,
  Wrapper,
} from "./Cases.styled";

export const Cases = () => {
  return (
    <Container id="cases">
      <TitleWrapper>
        <Title>Successful cases of our company</Title>
        <LineWrap>
          <LineVertical />
        </LineWrap>
        <Wrapper>
          <NumberWrap>
            <Number>02</Number>
            <Count>/05</Count>
          </NumberWrap>
          <ButtonWrap>
            <ArrowLeft />
            <ArrowRight />
          </ButtonWrap>
        </Wrapper>
      </TitleWrapper>

      <CardsWrap>
        <Carusel />
      </CardsWrap>
    </Container>
  );
};
