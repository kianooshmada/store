import logo from "./logo.svg";
import { Switch, Route, Link } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductLIst";
import Details from "./components/Details";
import Cart from "./components/Cart";
import Default from "./components/Default";
function App() {
  return (
    <>
      <Navbar />
      <ProductList />
      <Details />
      <Cart />
      <Default />
    </>
  );
}

export default App;
