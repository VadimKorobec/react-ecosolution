import "./SimpleSlider.css";
import Slider from "react-slick";

import "./SimpleSlider.css";
import "./SimpleSlider-theme.css";

// import mills from "../../assets/img/mills.jpg";
// import batteries from "../../assets/img/batteries.jpg";
// import transformer from "../../assets/img/transformer.jpg";
// import mills2 from "../../assets/img/mills-2.jpg";
// import station from "../../assets/img/station.jpg";
import {
  Card,
  CardIcon,
  CardText,
  CardTextWrap,
  CardTitle,
  CardTitleWrap,
  CardWrapper,
  Line,
} from "./SimpleSlider.styled";
import { Container } from "../Container/Container";

export const SimpleSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };
  return (
    <Container>
      <Slider {...settings}>
        <Card>
          {/* <img src={mills} alt="mills" /> */}
          <CardWrapper>
            <CardTitleWrap>
              <CardTitle>
                Lviv Region, Radekhiv <br /> town Private Enterprise <br />
                “ZAKHIDNYI BUH”
              </CardTitle>
              <CardIcon />
            </CardTitleWrap>
            <Line />
            <CardTextWrap>
              <CardText>Wind Power for auto field irrigation</CardText>
              <CardText>July 2023</CardText>
            </CardTextWrap>
          </CardWrapper>
        </Card>
        <Card>
          {/* <img src={batteries} alt="batteries" /> */}
          <CardWrapper>
            <CardTitleWrap>
              <CardTitle>
                Zhytomyr city
                <br /> Private Enterprise “Bosch”
              </CardTitle>
              <CardIcon />
            </CardTitleWrap>
            <Line />
            <CardTextWrap>
              <CardText>Solar Panels for industrial use</CardText>
              <CardText>November 2023</CardText>
            </CardTextWrap>
          </CardWrapper>
        </Card>
        <Card>
          {/* <img src={transformer} alt="transformer" /> */}
          <CardWrapper>
            <CardTitleWrap>
              <CardTitle>
                Rivne city
                <br /> Private Enterprise “Biotech”
              </CardTitle>
              <CardIcon />
            </CardTitleWrap>
            <Line />
            <CardTextWrap>
              <CardText>Thermal modules</CardText>
              <CardText>October 2023</CardText>
            </CardTextWrap>
          </CardWrapper>
        </Card>
        <Card>
          {/* <img src={mills2} alt="mills" /> */}
          <CardWrapper>
            <CardTitleWrap>
              <CardTitle>
                Kherson city <br /> Private Enterprise “HealthyFarm”
              </CardTitle>
              <CardIcon />
            </CardTitleWrap>
            <Line />
            <CardTextWrap>
              <CardText>Wind power</CardText>
              <CardText>September 2021</CardText>
            </CardTextWrap>
          </CardWrapper>
        </Card>
        <Card>
          {/* <img src={station} alt="station" /> */}
          <CardWrapper>
            <CardTitleWrap>
              <CardTitle>
                Zaporizhia city <br /> Private Enterprise “Biotech”
              </CardTitle>
              <CardIcon />
            </CardTitleWrap>
            <Line />
            <CardTextWrap>
              <CardText>Mini nuclear stations</CardText>
              <CardText>May 2021</CardText>
            </CardTextWrap>
          </CardWrapper>
        </Card>
      </Slider>
    </Container>
  );
};
