import { Header } from "./component/Header";
import Home from "./component/Home";
import { Why_Us } from "./component/Why_Us";
import { TopBar } from "./component/TopBar";
import AboutUs from "./component/AboutUs";
import Counter from "./component/Counter";
import Services from "./component/Services";
import ContactForm from "./component/ContactForm";
import Departments from "./component/Departments";
import Faq from "./component/Faq";
import Contact from "./component/Contact";
import Footer from "./component/Footer";

function App() {
  return (
    <div className="App">
      <TopBar />
      <Header />
      <Home />
      <Why_Us />
      <AboutUs />
      <Counter />
      <Services />
      <ContactForm />
      <Departments />
      <Faq />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
