import React from "react";
import { Link } from "react-router-dom";

const Public = () => {
  return (
    <section className="public">
      <header>
        <nav>
          <Link to="" />

          <Link to="" />
        </nav>
        <h1>
          Welcome to{" "}
          <span className="nowrap">
            Pharma<span className="blue">Choice</span>
          </span>
        </h1>
      </header>
      <main className="public__main">
        <div>
          <p>
            Located in Beautiful 888, PharmaChoice provides wide range of best
            Drug Stores in Kyiv as you need.
          </p>
          <p>Shops:</p>
          <button>MediMart Pharmacy</button>
          <button>Health Haven Dispensary</button>
          <button>WellCare Pharmacy </button>
          <button>PharmEase Corner </button>
          <button>Vitality Rx Store</button>
        </div>
        <div>
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
      <footer></footer>
    </section>
  );
};

export default Public;
