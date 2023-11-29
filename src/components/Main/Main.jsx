import mill from '../../assets/img/mill.jpg'
import svgArrow from '../../assets/img/arrowRightSmall.svg'
import { Container } from '../Container/Container';
import { Title,Text, Button, Icon, Line, Adress, Link, Unicode, Img } from './Main.styled';

export const Main = () => {
  return (
    <Container>
      <Title>RENEWABLE ENERGY FOR ANY TASK</Title>
      <Text>
        Development and implementation of renewable non-polluting energy
        sources, generating power generation using energy wind, sun, water,
        biomass
      </Text>
      <Button>
        Learn more
        <Icon src={svgArrow} alt="arrow"></Icon>
      </Button>
      <Line></Line>
      <Adress>79005, Ukraine, Lvivstreet. Shota Rustaveli, 7</Adress>
      <Link href="mailto:office@ecosolution.com">office@ecosolution.com</Link>
      <Unicode>ecosolution &copy; 2023</Unicode>
      <Img src={mill} alt="mill" />
    </Container>
  );
};
