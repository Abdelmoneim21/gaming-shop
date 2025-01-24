import "./App.css";
import Footer from "./Footer/Footer";
import Header from "./head/header";
import Info from "./info/Info";
import Navbar from "./Navbar/Navbar";
import OurProducts from "./our-products/ourProducts";
function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <OurProducts />
      <Info />
      <Footer />
    </div>
  );
}

export default App;
