import { AiOutlinePlus, AiOutlineDelete, AiOutlineMinus } from "react-icons/ai";
import React from "react";

export default function CartItem({
  name,
  increment,
  decrement,
  deleteItem,
  price,
  src,
  id,
  qty,
}) {
  return (
    <div className="cart-item">
      <img src={src} alt={name} />
      <div className="text">
        <h4>{name}</h4>
        <p>₹ {price}</p>
      </div>
      <div className="btn-div">
        <button onClick={() => decrement(id)}>
          <AiOutlineMinus />
        </button>
        <p>{qty}</p>
        <button onClick={() => increment(id)}>
          <AiOutlinePlus />
        </button>
      </div>
      <AiOutlineDelete
        className="d"
        onClick={() => deleteItem(id)}
      ></AiOutlineDelete>
    </div>
  );
}
