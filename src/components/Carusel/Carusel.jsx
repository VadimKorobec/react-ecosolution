import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {
  Card,
  CardIcon,
  CardText,
  CardTextWrap,
  CardTitle,
  CardTitleWrap,
  CardWrapper,
  Img,
  Line,
} from "./Carusel.styled";

const cards = [
  {
    id: 1,
    title: `Lviv Region, Radekhiv town Private Enterprise “ZAKHIDNYI BUH”`,
    img: "/img/mills.jpg",
    dis: `Wind Power for auto field irrigation`,
    data: `July 2023`,
  },
  {
    id: 2,
    title: `Zhytomyr city Private Enterprise “Bosch”`,
    img: `/img/batteries.jpg`,
    dis: `Solar Panels for industrial use`,
    data: `November 2023`,
  },
  {
    id: 3,
    title: `Rivne city Private Enterprise “Biotech”`,
    img: `/img/transformer.jpg`,
    dis: `Thermal modules`,
    data: `October 2023`,
  },
  {
    id: 4,
    title: `Kherson city Private Enterprise “HealthyFarm”`,
    img: `/img/mills-2.jpg`,
    dis: `Wind power`,
    data: `September 2021`,
  },

  {
    id: 5,
    title: `Zaporizhia city Private Enterprise “Biotech”`,
    img: `/img/station.jpg`,
    dis: `Mini nuclear stations`,
    data: `May 2021`,
  },
];

export const Carusel = ({ sliderRef }) => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <Slider ref={sliderRef} {...settings}>
        {cards.map((item) => (
          <Card key={item.id}>
            <Img src={item.img} alt="" />
            <CardWrapper>
              <CardTitleWrap>
                <CardTitle>{item.title}</CardTitle>
                <CardIcon />
              </CardTitleWrap>
              <Line />
              <CardTextWrap>
                <CardText>{item.dis}</CardText>
                <CardText>{item.data}</CardText>
              </CardTextWrap>
            </CardWrapper>
          </Card>
        ))}
      </Slider>
    </>
  );
};
