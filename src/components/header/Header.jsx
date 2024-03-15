import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
    <header>
      <nav>
        <Link className="custom-link " to="/">
          Shop
        </Link>
        <span className="line" />
        <Link className="custom-link " to="/shoppingCart">
          Shopping Cart
        </Link>
        <span className="line" />
        <Link className="custom-link " to="/history">
          History
        </Link>
        <span className="line" />
        <Link className="custom-link " to="/coupons">
          Coupons
        </Link>
      </nav>
    </header>
  );
};

export default Header;
