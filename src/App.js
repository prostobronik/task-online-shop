import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Slider from "./Components/Slider/Slider";
import "./scss/app.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <Slider />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
