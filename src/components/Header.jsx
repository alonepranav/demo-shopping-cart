import React, { useContext } from "react";
import "../styles/header.css";
import { Link } from "react-router-dom";
import { FiShoppingBag } from "react-icons/fi";
import { data } from "../App";


const Header = () => {

  const products = useContext(data);

  return (
    <div className="header">
      <Link to="/" style={{
        color:"#fff"
      }} className="logo">Shopping Website</Link>
      <div className="links">
        <Link to={"/"}>
          <span className="link-text">Home</span>
        </Link>
        <Link to={"/cart"}>
          <p>
            <FiShoppingBag className="link-text" />
            <span className="link-text num">{products.length}</span>
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Header;
