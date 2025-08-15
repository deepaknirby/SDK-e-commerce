import React, { useEffect, useState } from "react";
import axios from "axios";

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    axios.get("http://localhost:5000/cart").then(res => {
      setCartItems(res.data.cartItems);
      setTotal(res.data.total);
    });
  }, []);

  return (
    <div className="cart">
      <h2>Cart</h2>
      {cartItems.map(item => (
        <div key={item.id} className="cart-item">
          <img src={`/${item.image}`} alt={item.name} />
          <div>{item.name} - ${item.price}</div>
        </div>
      ))}
      <h3>Total: ${total}</h3>
    </div>
  );
}

export default Cart;
