import callSvg from "../../assets/img/call.svg";
import smsSvg from "../../assets/img/sms.svg";
import mapSvg from "../../assets/img/map.svg";
import facebookSvg from "../../assets/img/facebook.svg";
import instagramSvg from "../../assets/img/instagram.svg";

export const Contact = () => {
  return (
    <>
      <h2>Contact us</h2>
      <h4>Phone</h4>
      <img src={callSvg} alt="call" />
      <a href="tel:38 (098) 12 34 567">38 (098) 12 34 567</a>
      <img src={callSvg} alt="call" />
      <a href="tel:38 (098) 12 34 567">38 (098) 12 34 567</a>
      <h4>E-mail</h4>
      <img src={smsSvg} alt="sms" />
      <a href="mailto:office@ecosolution.com">office@ecosolution.com</a>
      <h4>Address</h4>
      <img src={mapSvg} alt="map" />
      <p>79005, Ukraine, Lvivstreet. Shota Rustaveli, 7</p>
      <h4>Social Networks:</h4>
      <a href="https://www.facebook.com/">
        <img src={facebookSvg} alt="icon" />
      </a>
      <a href="https://www.instagram.com/">
        <img src={instagramSvg} alt="icon" />
      </a>
    </>
  );
};
