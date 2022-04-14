import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/cart";
import data from "../../data";
import "./styles.css";

export default function Home() {
  const { addProductToCart, removeProductFromCart } = useContext(CartContext);
  
  const [products] = useState(data);

  return (
    <div>
      <button>Alterar tema</button>
      {products.map((product) => (
        <div className="cart">
          <div className="container">
            <h2>{product.name}</h2>
            <h3>R${product.price},00</h3>
            <button onClick={() => addProductToCart(product.id)}>+</button>
            <button onClick={() => removeProductFromCart(product.id)}>-</button>
          </div>
          <img src={product.image} alt={product.name} />
        </div>
      ))}
      <Link to="/cart">Ver carrinho</Link>
    </div>
  );
}
