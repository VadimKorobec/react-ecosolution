import { useState } from "react";
import { Link } from "react-scroll";

import { Container } from "../Container/Container";

import titles from "../../assets/titles.json";

import {
  ArrowDown,
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
    <Container id="faq">
      <GridWrapper>
        <Title>
          Frequently Asked <br /> Questions
        </Title>
        {titles.map((item, idx) => (
          <Card key={idx}>
            <Line />
            <ContentWrapper onClick={() => setActive(idx)}>
              <CardTitleWrapper>
                {active === idx ? <PlusIcon /> : <MinusIcon />}
                <CardTitle>{item.title}</CardTitle>
              </CardTitleWrapper>
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
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-115}
            duration={1000}
          >
            <Button type="button">
              Get in touch <ArrowDown />
            </Button>
          </Link>
        </ButtonWrapper>
      </GridWrapper>
    </Container>
  );
};
