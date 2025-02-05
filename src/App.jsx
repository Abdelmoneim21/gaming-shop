import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Footer/Footer";
import Header from "./head/header";
import Info from "./info/Info";
import Navbar from "./Navbar/Navbar";
import OurProducts from "./our-products/ourProducts";
import Login from "./Login/Login";
import AllProducts from "./all-products/AllProducts";
import Filter from "./filter/Filter";
import { useState } from "react";
import ProductDetails from "./product-details/ProductDetails";

function App() {
  const [category, setCategory] = useState("");

  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Header />
              <OurProducts category={category} setCategory={setCategory} />
              <Info />
              <Footer />
            </div>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<AllProducts />} />
        <Route path="/filter" element={<Filter category={category} />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default App;
