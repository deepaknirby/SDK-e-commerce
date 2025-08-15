import React from "react";

function Navbar({ cartCount }) {
  return (
    <nav className="navbar">
      <h1>SDK</h1>
      <div>Cart: {cartCount}</div>
    </nav>
  );
}

export default Navbar;
