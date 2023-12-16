

import mills from "../../assets/img/mills.jpg";
import batteries from "../../assets/img/batteries.jpg";
import transformer from "../../assets/img/transformer.jpg";
import mills2 from "../../assets/img/mills-2.jpg";
import station from "../../assets/img/station.jpg";
import { Container } from "../Container/Container";
import {
  ArrowLeft,
  ArrowRight,
  ButtonWrap,
  Card,
  CardIcon,
  CardText,
  CardTextWrap,
  CardTitle,
  CardTitleWrap,
  CardWrapper,
  CardsWrap,
  Count,
  Line,
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
    <Container id='cases'>
      <TitleWrapper>
        <Title>Successful cases of our company</Title>
        <LineWrap>
          <LineVertical/>
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
        <Card>
          <img src={mills} alt="mills" />
          <CardWrapper>
            <CardTitleWrap>
              <CardTitle>
                Lviv Region, Radekhiv <br /> town Private Enterprise <br />
                “ZAKHIDNYI BUH”
              </CardTitle>
              <CardIcon />
            </CardTitleWrap>
            <Line/>
            <CardTextWrap>
              <CardText>Wind Power for auto field irrigation</CardText>
              <CardText>July 2023</CardText>
            </CardTextWrap>
          </CardWrapper>
        </Card>
        <Card>
          <img src={batteries} alt="batteries" />
          <CardWrapper>
            <CardTitleWrap>
              <CardTitle>
                Zhytomyr city
                <br /> Private Enterprise “Bosch”
              </CardTitle>
              <CardIcon />
            </CardTitleWrap>
            <Line/>
            <CardTextWrap>
              <CardText>Solar Panels for industrial use</CardText>
              <CardText>November 2023</CardText>
            </CardTextWrap>
          </CardWrapper>
        </Card>
        <Card>
          <img src={transformer} alt="transformer" />
          <CardWrapper>
            <CardTitleWrap>
              <CardTitle>
                Rivne city
                <br /> Private Enterprise “Biotech”
              </CardTitle>
              <CardIcon />
            </CardTitleWrap>
            <Line/>
            <CardTextWrap>
              <CardText>Thermal modules</CardText>
              <CardText>October 2023</CardText>
            </CardTextWrap>
          </CardWrapper>
        </Card>
        <Card>
          <img src={mills2} alt="mills" />
          <CardWrapper>
            <CardTitleWrap>
              <CardTitle>
                Kherson city <br /> Private Enterprise “HealthyFarm”
              </CardTitle>
              <CardIcon />
            </CardTitleWrap>
            <Line/>
            <CardTextWrap>
              <CardText>Wind power</CardText>
              <CardText>September 2021</CardText>
            </CardTextWrap>
          </CardWrapper>
        </Card>
        <Card>
          <img src={station} alt="station" />
          <CardWrapper>
            <CardTitleWrap>
              <CardTitle>
                Zaporizhia city <br /> Private Enterprise “Biotech”
              </CardTitle>
              <CardIcon />
            </CardTitleWrap>
            <Line/>
            <CardTextWrap>
              <CardText>Mini nuclear stations</CardText>
              <CardText>May 2021</CardText>
            </CardTextWrap>
          </CardWrapper>
        </Card>
      </CardsWrap>
    </Container>
  );
};
