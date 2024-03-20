import React, { useContext } from "react";
import "../styles/cart.css";
import { data } from "../App";
import CartItem from "./CartItem";

const Cart = ({ increment, decrement, deleteItem }) => {
  const items = useContext(data);

  const totalPrice = items.reduce((a, b) => {
    return a + b.price * b.qty;
  }, 0);

  return (
    <div className="cart">
      <div className="items">
        {items.map((item, i) => (
          <CartItem
            key={i}
            {...{
              ...item,
              increment: increment,
              decrement: decrement,
              deleteItem: deleteItem,
            }}
          />
        ))}
      </div>

      <aside>
        <p>SubTotal : ₹ {totalPrice}</p>
        <p>Shipping : ₹ {300}</p>
        <p>Tax : {"5%"}</p>
        <p>
          Total :₹{" "}
          {totalPrice - (totalPrice * 5) / 100 + (totalPrice > 0 ? 300 : 0)}
        </p>
      </aside>
    </div>
  );
};

export default Cart;
