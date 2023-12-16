import { useState } from "react";

import { Container } from "../Container/Container";

import ellips from "../../assets/icon/ellipse.svg";
import titles from "../../assets/titles.json";

import {
  Button,
  ButtonWrapper,
  Card,
  CardText,
  CardTitle,
  CardTitleWrapper,
  ContentWrapper,
  GridWrapper,
  Line,
  MinusIcon,
  PlusIcon,
  Text,
  Title,
} from "./FQA.styled";

export const FAQ = () => {
  const [active, setActive] = useState(0);

  return (
    <Container id='faq'>
      <GridWrapper>
        <Title>
          Frequently Asked <br /> Questions
        </Title>
        {titles.map((item, idx) => (
          <Card key={idx}>
            <Line/>
            <ContentWrapper onClick={() => setActive(idx)}>
              <CardTitleWrapper>
                {active === idx ? <PlusIcon /> : <MinusIcon />}
                <CardTitle>{item.title}</CardTitle>
              </CardTitleWrapper >
              {active === idx ? (
                <CardText>
                  Wind turbines and solar panels generate electricity through
                  different mechanisms. Wind turbines harness the kinetic energy
                  of the wind to turn blades, which then drive a generator.
                  Solar panels convert sunlight into electricity through the
                  photovoltaic effect. When integrated into a renewable energy
                  system, these technologies complement each other by providing
                  a continuous and reliable power supply. Wind power is often
                  more abundant during certain times, while solar power is
                  consistent during daylight hours, resulting in a more stable
                  overall energy output.
                </CardText>
              ) : (
                ""
              )}
            </ContentWrapper>
          </Card>
        ))}
        <ButtonWrapper>
          <Text>Didn't find the answer to your question? </Text>
          <Button>
            Contact Us <img src={ellips} alt="ellips" />
          </Button>
        </ButtonWrapper>
      </GridWrapper>
    </Container>
  );
};
