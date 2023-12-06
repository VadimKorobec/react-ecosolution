import arrowRight from "../../assets/icon/arrowRightSmall.svg";
import {
  Button,
  Forma,
  Icon,
  Input,
  Label,
  Lina,
  Line,
  Textarea,
} from "./Form.styled";

export const Form = () => {
  return (
    <Forma>
      <Label>* Full name:</Label>
      <Input type="text" placeholder="John Rosie" />
      <Line></Line>
      <Label>* E-mail:</Label>
      <Input type="text" placeholder="johnrosie@gmail.com" />
      <Line></Line>
      <Label>* Phone:</Label>
      <Input type="text" placeholder="380961234567" />
      <Line></Line>
      <Label placeholder="Your message">Message:</Label>
      <Textarea></Textarea>
      <Lina></Lina>
      <Button type="submit">
        Send <Icon src={arrowRight} alt="arrow" />
      </Button>
    </Forma>
  );
};
