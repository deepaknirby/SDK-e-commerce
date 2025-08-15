const express = require("express");
const cors = require("cors");
const products = require("./products");

const app = express();
app.use(cors());
app.use(express.json());

let cart = [];

app.get("/products", (req, res) => {
  res.json(products);
});

app.post("/cart", (req, res) => {
  const { productId } = req.body;
  cart.push(productId);
  res.json({ cart });
});

app.get("/cart", (req, res) => {
  const cartItems = cart.map(id => products.find(p => p.id === id));
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);
  res.json({ cartItems, total });
});

app.listen(5000, () => console.log("Server running on port 5000"));
