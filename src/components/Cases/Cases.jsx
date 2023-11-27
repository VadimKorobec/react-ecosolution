import arrowRight from "../../assets/img/arrowRightBig.svg";
import arrowLeft from "../../assets/img/arrowLeftBig.svg";
import arrow from "../../assets/img/arrow.svg";

import mills from "../../assets/img/mills.jpg";
import batteries from "../../assets/img/batteries.jpg";
import transformer from "../../assets/img/transformer.jpg";
import mills2 from "../../assets/img/mills-2.jpg";
import station from "../../assets/img/station.jpg";

export const Cases = () => {
  return (
    <>
      <h2>Successful cases of our company</h2>
      <p>02 /05</p>
      <img src={arrowLeft} alt="arrow" />
      <img src={arrowRight} alt="arrow" />
      <div>
        <img src={mills} alt="mills" />
        <h3>Lviv Region, Radekhiv town Private Enterprise “ZAKHIDNYI BUH”</h3>
        <img src={arrow} alt="arrow" />
        <p>Wind Power for auto field irrigation</p>
        <p>July 2023</p>
      </div>
      <div>
        <img src={batteries} alt="batteries" />
        <h3>Zhytomyr city Private Enterprise “Bosch”</h3>
        <img src={arrow} alt="arrow" />
        <p>Solar Panels for industrial use</p>
        <p>November 2023</p>
      </div>
      <div>
        <img src={transformer} alt="transformer" />
        <h3>Rivne city Private Enterprise “Biotech”</h3>
        <img src={arrow} alt="arrow" />
        <p>Thermal modules</p>
        <p>October 2023</p>
      </div>
      <div>
        <img src={mills2} alt="mills" />
        <h3>Kherson city Private Enterprise “HealthyFarm”</h3>
        <img src={arrow} alt="arrow" />
        <p>Wind power</p>
        <p>September 2021</p>
      </div>
      <div>
        <img src={station} alt="station" />
        <h3>Zaporizhia city Private Enterprise “Biotech”</h3>
        <img src={arrow} alt="arrow" />
        <p>Mini nuclear stations</p>
        <p>May 2021</p>
      </div>
    </>
  );
};
