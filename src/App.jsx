import "./App.css";
import { Button } from "react-bootstrap";

import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Products from "./components/Products";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      
      <NavBar />
      <Header />
      <Products />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
