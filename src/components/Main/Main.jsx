import mill from '../../assets/img/mill.jpg'
import svgArrow from '../../assets/img/arrowRightSmall.svg'
import { Container } from '../Container/Container';
import { Title } from './Main.styled';

export const Main = () => {
  return (
    <Container>
      <Title>RENEWABLE ENERGY FOR ANY TASK</Title>
      <p>
        Development and implementation of renewable non-polluting energy
        sources, generating power generation using energy wind, sun, water,
        biomass
      </p>
      <button>
        Learn more<img src={svgArrow} alt="arrow"></img>
      </button>
      <p>79005, Ukraine, Lvivstreet. Shota Rustaveli, 7</p>
      <a href="mailto:office@ecosolution.com">office@ecosolution.com</a>
      <p>ecosolution &copy; 2023</p>
      <img src={mill} alt="mill" />
    </Container>
  );
};
