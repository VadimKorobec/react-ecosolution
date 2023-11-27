import svgAsset from '../../assets/img/bgAsset 324 2.svg'
import svgEco from '../../assets/img/ecosolution.svg'
import svgGreen from '../../assets/img/GREENERGY FOR LIFE.svg'
import svgMenu from '../../assets/img/menu.svg'
import svgEllipse from '../../assets/img/ellipse.svg'
 
export const Header = () => {
    return (
      <>
        <img src={svgAsset} alt="logo" />
        <img src={svgEco} alt="logo" />
        <img src={svgGreen} alt="logo" />
        <img src={svgMenu} alt="menu" />
        <button>Get in touch <img src={svgEllipse} alt="ellips" /></button>
      </>
    );
}