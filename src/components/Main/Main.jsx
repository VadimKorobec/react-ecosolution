import mill from '../../assets/img/mill.jpg'
import svgArrow from '../../assets/img/arrowRightSmall.svg'

export const Main = () => {
  return (
    <>
      <h1>RENEWABLE ENERGY FOR ANY TASK</h1>
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
    </>
  );
};
