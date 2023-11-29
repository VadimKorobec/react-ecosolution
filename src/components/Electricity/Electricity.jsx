import { Container } from "../Container/Container";
import { Line, LineWrap, Numbers, NumbersText, NumbersWrap, Title } from "./Electricity.styled";

export const Electricity = () => {
  return (
    <Container>
      <Title>Electricity we produced for all time</Title>
      <LineWrap>
        <Line></Line>
      </LineWrap>
      <NumbersWrap>
        <Numbers>1.134.147.814</Numbers>
        <NumbersText>kWh</NumbersText>
      </NumbersWrap>
    </Container>
  );
};
