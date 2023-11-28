import svgAsset from '../../assets/img/bgAsset 324 2.svg'
import svgEco from '../../assets/img/ecosolution.svg'
import svgGreen from '../../assets/img/GREENERGY FOR LIFE.svg'
import svgMenu from '../../assets/img/menu.svg'
// import svgEllipse from '../../assets/img/ellipse.svg'
import { Container } from '../Container/Container'
import { HeaderWrapper,BurgerMenu  } from "./Header.styled";
 
export const Header = () => {
    return (
      <Container>
        <HeaderWrapper>
          <div style={{gap:'4px',display:'flex'}}>
            <img src={svgAsset} alt="logo" />
            <img src={svgEco} alt="logo" />
            <img src={svgGreen} alt="logo" />
          </div>
          <BurgerMenu src={svgMenu} alt="menu" />
          {/* <button type="button">
            Get in touch <img src={svgEllipse} alt="ellips" />
          </button> */}
        </HeaderWrapper>
      </Container>
    );
}