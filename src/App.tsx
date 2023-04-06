import { Header } from "./component/Header";
import Home from "./component/Home";
import { TopBar } from "./component/TopBar";

function App() {
  return (
    <div className="App">
      <TopBar />
      <Header />
      <Home />
    </div>
  );
}

export default App;
