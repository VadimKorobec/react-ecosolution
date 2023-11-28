import { About } from "./components/About/About";
import { Cases } from "./components/Cases/Cases";
import { Contact } from "./components/Contact/Contact";
import { Electricity } from "./components/Electricity/Electricity";
import { FAQ } from "./components/FAQ/FAQ";
import { Footer } from "./components/Footer/Footer";
import { Form } from "./components/Form/Form";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";

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
      <Form />
      <Footer/>
   </>
   
  );
};
