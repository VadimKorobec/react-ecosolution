import svgAsset from "../../assets/img/bgAsset 324 2.svg";
import svgEco from "../../assets/img/ecosolution.svg";
import svgGreen from "../../assets/img/GREENERGY FOR LIFE.svg";
import arrowAbove from "../../assets/img/arrowAbove.svg";
import facebookSvg from "../../assets/img/facebook.svg";
import instagramSvg from "../../assets/img/instagram.svg";

export const Footer = () => {
  return (
    <>
      <img src={svgAsset} alt="logo" />
      <img src={svgEco} alt="logo" />
      <img src={svgGreen} alt="logo" />
      <img src={arrowAbove} alt="arrow" />
      <a href="https://www.facebook.com/">
        <img src={facebookSvg} alt="icon" />
      </a>
      <a href="https://www.instagram.com/">
        <img src={instagramSvg} alt="icon" />
      </a>
      <address>79005, Ukraine, Lvivstreet. Shota Rustaveli, 7</address>
      <a href="mailto:office@ecosolution.com">office@ecosolution.com</a>
      <p>ecosolution &copy; 2023</p>
    </>
  );
};
