
import RoutesConfig from "./routes";
import HeaderNav from "./components/HeaderNav"
import Footer from "./components/Footer";
import Player from "./components/Player";
import "./App.css";

function App() {
  return (
    <div className="App">
      <HeaderNav />
        <RoutesConfig />
      <Player />
      <Footer />
    </div>
  );
}

export default App;
