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
import Cart from "./cart/Cart_";
import Checkout from "./checkout/Checkout";
import BoysToys from "./forBoys/ForBoys";
import GirlsToys from "./forBoys/ForGirls";
import Mix from "./forBoys/Mix";
import AdminDashboard from "./adminDashboard/AdminDashboard";
import ProductForm from "./adminDashboard/ProductForm";

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
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/boys" element={<BoysToys />} />
        <Route path="/girls" element={<GirlsToys />} />
        <Route path="/mix" element={<Mix />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/add" element={<ProductForm />} />
        <Route path="/admin/edit/:id" element={<ProductForm />} />
      </Routes>
    </div>
  );
}

export default App;
