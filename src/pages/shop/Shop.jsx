import React from "react";
import "./Shop.scss";

const Shop = () => {
  return (
    <main className="shop_main">
      <div className="left_container">
        <p>Shops:</p>
        <button>MediMart Pharmacy</button>
        <button>Health Haven Dispensary</button>
        <button>WellCare Pharmacy </button>
        <button>PharmEase Corner </button>
        <button>Vitality Rx Store</button>
      </div>
      <div className="right_container">
        <div>
          <div className="img__container">
            <img src="" alt="" />
          </div>
          <div className="info">
            <h2>Name</h2>
            <p>Desc</p>
          </div>
          <button>Add to Cart</button>
        </div>
      </div>
    </main>
  );
};

export default Shop;
