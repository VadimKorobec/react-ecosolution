import plus from "../../assets/img/plus.svg";
// import minus from '../../assets/img/minus.svg'
import ellips from "../../assets/img/ellipse.svg";

import { Container } from "../Container/Container";
import {
  Title,
  Line,
  CardTitle,
  CardText,
  TitleWrap,
  Card,
  Text,
  Button,
} from "./FQA.styled";

export const FAQ = () => {
  return (
    <Container>
      <Title>
        Frequently Asked <br/> Questions
      </Title>
      <Line></Line>
      <Card>
        <TitleWrap>
          <img src={plus} alt="plus" />
          {/* <img src={minus} alt="minus" /> */}
          <CardTitle>
            How do wind turbines and solar panels work together in a renewable
            energy system?
          </CardTitle>
        </TitleWrap>
        <CardText>
          Wind turbines and solar panels generate electricity through different
          mechanisms. Wind turbines harness the kinetic energy of the wind to
          turn blades, which then drive a generator. Solar panels convert
          sunlight into electricity through the photovoltaic effect. When
          integrated into a renewable energy system, these technologies
          complement each other by providing a continuous and reliable power
          supply. Wind power is often more abundant during certain times, while
          solar power is consistent during daylight hours, resulting in a more
          stable overall energy output.
        </CardText>
      </Card>
      <Line></Line>
      <Card>
        <TitleWrap>
          <img src={plus} alt="plus" />
          {/* <img src={minus} alt="minus" /> */}
          <CardTitle>
            What sets EcoSolution's renewable energy solutions apart from others
            on the market?
          </CardTitle>
        </TitleWrap>
        <CardText>
          Wind turbines and solar panels generate electricity through different
          mechanisms. Wind turbines harness the kinetic energy of the wind to
          turn blades, which then drive a generator. Solar panels convert
          sunlight into electricity through the photovoltaic effect. When
          integrated into a renewable energy system, these technologies
          complement each other by providing a continuous and reliable power
          supply. Wind power is often more abundant during certain times, while
          solar power is consistent during daylight hours, resulting in a more
          stable overall energy output.
        </CardText>
      </Card>
      <Line></Line>
      <Card>
        <TitleWrap>
          <img src={plus} alt="plus" />
          {/* <img src={minus} alt="minus" /> */}
          <CardTitle>
            How can businesses and communities benefit from integrating
            renewable energy solutions from EcoSolution?
          </CardTitle>
        </TitleWrap>
        <CardText>
          Wind turbines and solar panels generate electricity through different
          mechanisms. Wind turbines harness the kinetic energy of the wind to
          turn blades, which then drive a generator. Solar panels convert
          sunlight into electricity through the photovoltaic effect. When
          integrated into a renewable energy system, these technologies
          complement each other by providing a continuous and reliable power
          supply. Wind power is often more abundant during certain times, while
          solar power is consistent during daylight hours, resulting in a more
          stable overall energy output.
        </CardText>
      </Card>
      <Line></Line>
      <Card>
        <TitleWrap>
          <img src={plus} alt="plus" />
          {/* <img src={minus} alt="minus" /> */}
          <CardTitle>
            What measures does EcoSolution take to ensure the environmental
            sustainability of its products?
          </CardTitle>
        </TitleWrap>
        <CardText>
          Wind turbines and solar panels generate electricity through different
          mechanisms. Wind turbines harness the kinetic energy of the wind to
          turn blades, which then drive a generator. Solar panels convert
          sunlight into electricity through the photovoltaic effect. When
          integrated into a renewable energy system, these technologies
          complement each other by providing a continuous and reliable power
          supply. Wind power is often more abundant during certain times, while
          solar power is consistent during daylight hours, resulting in a more
          stable overall energy output.
        </CardText>
      </Card>
      <Line></Line>
      <Card>
        <TitleWrap>
          <img src={plus} alt="plus" />
          {/* <img src={minus} alt="minus" /> */}
          <CardTitle>
            How does EcoSolution engage with local communities and support a
            just transition to renewable energy?
          </CardTitle>
        </TitleWrap>
        <CardText>
          Wind turbines and solar panels generate electricity through different
          mechanisms. Wind turbines harness the kinetic energy of the wind to
          turn blades, which then drive a generator. Solar panels convert
          sunlight into electricity through the photovoltaic effect. When
          integrated into a renewable energy system, these technologies
          complement each other by providing a continuous and reliable power
          supply. Wind power is often more abundant during certain times, while
          solar power is consistent during daylight hours, resulting in a more
          stable overall energy output.
        </CardText>
      </Card>
      <Text>Didn't find the answer to your question?</Text>
      <Button>
        Contact Us <img src={ellips} alt="ellips" />
      </Button>
    </Container>
  );
};
