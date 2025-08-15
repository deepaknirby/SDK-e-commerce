import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import Cart from "./components/Cart";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/products").then(res => setProducts(res.data));
  }, []);

  const addToCart = (id) => {
    axios.post("http://localhost:5000/cart", { productId: id })
      .then(res => setCart(res.data.cart));
  };

  return (
    <div>
      <Navbar cartCount={cart.length} />
      <div className="products">
        {products.map(product => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
      <Cart cart={cart} />
    </div>
  );
}

export default App;
