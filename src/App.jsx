import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Shop from "./pages/shop/Shop";
import "./App.scss";
import ShoppingCart from "./pages/shoppingCart/ShoppingCart";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Shop />} />
        <Route path="/shoppingCart" element={<ShoppingCart />} />
      </Route>
    </Routes>
  );
}

export default App;
