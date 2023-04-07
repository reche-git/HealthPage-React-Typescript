import { Header } from "./component/Header";
import Home from "./component/Home";
import { Why_Us } from "./component/Why_Us";
import { TopBar } from "./component/TopBar";
import AboutUs from "./component/AboutUs";
import Counter from "./component/Counter";
import Services from "./component/Services";
import ContactForm from "./component/ContactForm";

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
    </div>
  );
}

export default App;
