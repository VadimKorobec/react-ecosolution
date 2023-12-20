import { useEffect, useState } from "react";
import { Container } from "../Container/Container";
import {
  Line,
  LineWrap,
  Numbers,
  NumbersText,
  NumbersWrap,
  Title,
} from "./Electricity.styled";

export const Electricity = () => {
  const [count, setCount] = useState(1134147814);

  const formatNumber = (number) => {
    return number
      ? number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
      : "";
  };

  useEffect(() => {
    setTimeout(() => {
      setCount(count + 1);
    }, 1000);
  }, [count]);

  return (
    <Container>
      <Title>Electricity we produced for all time</Title>
      <LineWrap>
        <Line />
      </LineWrap>
      <NumbersWrap>
        <Numbers>{formatNumber(count)}</Numbers>
        <NumbersText>kWh</NumbersText>
      </NumbersWrap>
    </Container>
  );
};
