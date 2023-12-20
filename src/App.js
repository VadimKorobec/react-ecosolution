import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { About } from "./components/About/About";
import { Electricity } from "./components/Electricity/Electricity";
import { FAQ } from "./components/FAQ/FAQ";
import { Cases } from "./components/Cases/Cases";
import { Contact } from "./components/Contact/Contact";
import { Footer } from "./components/Footer/Footer";


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
      
    </>
  );
};
