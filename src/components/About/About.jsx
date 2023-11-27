import men from "../../assets/img/men.jpg";
import man from '../../assets/img/man.jpg'

export const About = () => {
  return (
    <>
      <h2>Main values of our company</h2>
      <p>
        EcoSolution envisions a world where sustainable energy solutions power a
        brighter and cleaner future for all. We aspire to be at the forefront of
        the global shift towards renewable energy, leading the way in innovative
        technologies that harness the power of nature to meet the world's energy
        needs.
      </p>
      <h3>Openness</h3>
      <p>to the world, people, new ideas and projects</p>
      <h3>Responsibility</h3>
      <p>
        we are aware that the results of our work have an impact on our lives
        and the lives of future generations
      </p>
          <img src={men} alt="men" />
          <img src={man} alt="man" />
      <h3>Innovation</h3>
      <p>we use the latest technology to implement non-standard solutions</p>
      <h3>Quality</h3>
      <p>
        we do not strive to be the first among others, but we want to be the
        best in our business
      </p>
    </>
  );
};
