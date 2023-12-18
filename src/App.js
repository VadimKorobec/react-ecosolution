
import { About } from "./components/About/About";
import { Carusel } from "./components/Carusel/Carusel";
import { Cases } from "./components/Cases/Cases";
import { Contact } from "./components/Contact/Contact";
import { Electricity } from "./components/Electricity/Electricity";
import { FAQ } from "./components/FAQ/FAQ";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { SimpleSlider } from "./components/SimpleSlider/SimpleSlider";



export const App = () => {
  
  return (
    <>
      <Header />
      <Carusel/>
      <Main />
      <About />
      <Electricity />
      <Cases />
      <FAQ />
      <Contact />
      <Footer />
      <SimpleSlider/>
    </>
  );
};
