import { useState } from "react";
import "./App.css";
import Placement from "./components/Placement/Placement";
import Products from "./components/Products/Products";

function App() {
  const [cart, setCart] = useState([]);
  const addToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
  };
  return (
    <div className="flex gap-10">
      <Products addToCart = {addToCart}></Products>
      <Placement cart={cart}></Placement>
    </div>
  );
}

export default App;
