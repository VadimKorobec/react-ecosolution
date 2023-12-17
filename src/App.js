
import { About } from "./components/About/About";
import { Cases } from "./components/Cases/Cases";
import { Contact } from "./components/Contact/Contact";
import { Electricity } from "./components/Electricity/Electricity";
import { FAQ } from "./components/FAQ/FAQ";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import {Carousel} from './components/Carousel/Carousel'

export const App = () => {
  
  return (
    <>
      <Header />
      <Main />
      <About />
      <Electricity />
      <Cases />
      <FAQ />
      <Contact />
      <Footer />
      <Carousel>
        <div className="item item-1">Item 1</div>
        <div className="item item-2">Item 2</div>
        <div className="item item-3">Item 3</div>
      </Carousel>
    </>
  );
};
