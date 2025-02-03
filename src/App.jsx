import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Footer/Footer";
import Header from "./head/header";
import Info from "./info/Info";
import Navbar from "./Navbar/Navbar";
import OurProducts from "./our-products/ourProducts";
import Login from "./Login/Login";
import AllProducts from "./all-products/AllProducts";
function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Header />
              <OurProducts />
              <Info />
              <Footer />
            </div>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<AllProducts />} />
      </Routes>
    </div>
  );
}

export default App;
