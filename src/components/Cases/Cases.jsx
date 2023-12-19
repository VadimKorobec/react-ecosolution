import { useRef } from "react";

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
  const sliderRef = useRef(null);
  

  const handleClickRight = () => {
    sliderRef.current.slickNext();
  };

  const handleClickLeft = () => {
    sliderRef.current.slickPrev()
  };

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
            <ArrowLeft onClick={handleClickLeft} />
            <ArrowRight onClick={handleClickRight} />
          </ButtonWrap>
        </Wrapper>
      </TitleWrapper>
      <CardsWrap>
        <Carusel sliderRef={sliderRef} />
      </CardsWrap>
    </Container>
  );
};
