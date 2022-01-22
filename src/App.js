import "./App.css";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header.js";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
