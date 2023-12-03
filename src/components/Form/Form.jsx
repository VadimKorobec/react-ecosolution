import arrowRight from "../../assets/icon/arrowRightSmall.svg";
import { Button, Forma, Icon, Input, Label, Lina, Line, Textarea } from "./Form.styled";
import { Container } from "../Container/Container";

export const Form = () => {
  return (
    <Container>
      <Forma>
        <Label>* Full name:</Label>
        <Input type="text" />
        <Line></Line>
        <Label>* E-mail:</Label>
        <Input type="text" />
        <Line></Line>
        <Label>* Phone:</Label>
        <Input type="text" />
        <Line></Line>
        <Label>Message:</Label>
        <Textarea></Textarea>
        <Lina></Lina>
        <Button type="submit">
          Send <Icon src={arrowRight} alt="arrow" />
        </Button>
          </Forma>
         
    </Container>
  );
};
