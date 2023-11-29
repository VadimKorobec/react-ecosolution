import arrowRight from "../../assets/img/arrowRightBig.svg";
import arrowLeft from "../../assets/img/arrowLeftBig.svg";
import arrow from "../../assets/img/arrow.svg";

import mills from "../../assets/img/mills.jpg";
import batteries from "../../assets/img/batteries.jpg";
import transformer from "../../assets/img/transformer.jpg";
import mills2 from "../../assets/img/mills-2.jpg";
import station from "../../assets/img/station.jpg";
import { Container } from "../Container/Container";
import {
  Button,
  ButtonWrap,
  Card,
  CardBtn,
  CardIcon,
  CardText,
  CardTextWrap,
  CardTitle,
  CardTitleWrap,
  CardWrapper,
  Count,
  Icon,
  Line,
  Number,
  NumberWrap,
  Title,
  Wrapper,
} from "./Cases.styled";

export const Cases = () => {
  return (
    <Container>
      <Title>Successful cases of our company</Title>
      <Wrapper>
        <NumberWrap>
          <Number>02</Number>
          <Count>/05</Count>
        </NumberWrap>
        <ButtonWrap>
          <Button>
            <Icon src={arrowLeft} alt="arrow" />
          </Button>
          <Button>
            <Icon src={arrowRight} alt="arrow" />
          </Button>
        </ButtonWrap>
      </Wrapper>
      <Card>
        <img src={mills} alt="mills" />
        <CardWrapper>
          <CardTitleWrap>
            <CardTitle>
              Lviv Region, Radekhiv <br /> town Private Enterprise <br />{" "}
              “ZAKHIDNYI BUH”
            </CardTitle>
            <CardBtn>
              <CardIcon src={arrow} alt="arrow" />
            </CardBtn>
          </CardTitleWrap>
          <Line></Line>
          <CardTextWrap>
            <CardText>Wind Power for auto field irrigation</CardText>
            <CardText>July 2023</CardText>
          </CardTextWrap>
        </CardWrapper>
      </Card>
      <div>
        <img src={batteries} alt="batteries" />
        <h3>Zhytomyr city Private Enterprise “Bosch”</h3>
        <img src={arrow} alt="arrow" />
        <p>Solar Panels for industrial use</p>
        <p>November 2023</p>
      </div>
      <div>
        <img src={transformer} alt="transformer" />
        <h3>Rivne city Private Enterprise “Biotech”</h3>
        <img src={arrow} alt="arrow" />
        <p>Thermal modules</p>
        <p>October 2023</p>
      </div>
      <div>
        <img src={mills2} alt="mills" />
        <h3>Kherson city Private Enterprise “HealthyFarm”</h3>
        <img src={arrow} alt="arrow" />
        <p>Wind power</p>
        <p>September 2021</p>
      </div>
      <div>
        <img src={station} alt="station" />
        <h3>Zaporizhia city Private Enterprise “Biotech”</h3>
        <img src={arrow} alt="arrow" />
        <p>Mini nuclear stations</p>
        <p>May 2021</p>
      </div>
    </Container>
  );
};
