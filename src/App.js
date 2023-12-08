import { About } from "./components/About/About";
import { BurgerMenu } from "./components/BurgerMenu/BurgerMenu";
import { Cases } from "./components/Cases/Cases";
import { Contact } from "./components/Contact/Contact";
import { Electricity } from "./components/Electricity/Electricity";
import { FAQ } from "./components/FAQ/FAQ";
import { Footer } from "./components/Footer/Footer";

import { Header } from "./components/Header/Header";

import { Main } from "./components/Main/Main";

export const App = () => {
  return (
    <>
      <Header />
      <BurgerMenu/>
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
