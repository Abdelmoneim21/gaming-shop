import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../rtk/slices/productsSlice";
import { Link } from "react-router-dom";
import { MdOutlineMenu } from "react-icons/md";
import { IoHome } from "react-icons/io5";
import { MdOutlineToys } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import { MdContactSupport } from "react-icons/md";

function Header() {
  const [showCategories, setShowCategories] = useState(false);
  const [showAgeGroups, setShowAgeGroups] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [showSearchResults, setShowSearchResults] = useState(false);

  const dispatch = useDispatch();
  const { products, status } = useSelector((state) => state.products);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  const filteredProducts = products.filter(
    (toy) =>
      toy.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      toy.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const ageGroups = [...new Set(products.map((p) => p.category))];

  return (
    <div className="w-[90%] mx-auto mt-6 flex flex-col md:flex-row gap-4 relative">
      {/* Sidebar */}
      <div className="md:w-[28%] w-full rounded-lg shadow-lg border border-gray-200">
        {/* Sidebar Header */}
        <div
          className="flex bg-[#0e2c6c] text-white items-center px-5 py-3 gap-2 cursor-pointer md:cursor-default"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <MdOutlineMenu size={30} />
          <h1 className="text-xl font-semibold">SHOP BY</h1>
        </div>

        {/* Sidebar Content */}
        <div className={`${sidebarOpen ? "block" : "hidden"} md:block`}>
          <Link to="/">
            <div className="flex items-center px-5 py-3 gap-2 hover:bg-[#feffc6] transition-all">
              <IoHome size={20} color="#0e2c6c" />
              <h1 className="text-lg font-semibold text-[#0e2c6c]">Home</h1>
            </div>
          </Link>

          <Link to="/products">
            <div className="flex items-center px-5 py-3 gap-2 hover:bg-[#feffc6] transition-all">
              <MdOutlineToys size={20} color="#0e2c6c" />
              <h1 className="text-lg font-semibold text-[#0e2c6c]">
                All Products
              </h1>
            </div>
          </Link>

          {/* Categories */}
          <div
            className="cursor-pointer"
            onMouseEnter={() => setShowCategories(true)}
            onMouseLeave={() => setShowCategories(false)}
          >
            <div className="flex items-center px-5 py-3 gap-2 hover:bg-[#feffc6] transition-all">
              <FaPlus size={20} color="#0e2c6c" />
              <h1 className="text-lg font-semibold text-[#0e2c6c]">
                Categories
              </h1>
            </div>
            {showCategories && (
              <div className="text-[#0e2c6c] px-10 space-y-2">
                <h2 className="hover:bg-[#feffc6] transition-all p-2">
                  ➤ Smart Play
                </h2>
                <h2 className="hover:bg-[#feffc6] transition-all p-2">
                  <Link to="/girls">➤ For Girls</Link>
                </h2>
                <h2 className="hover:bg-[#feffc6] transition-all p-2">
                  <Link to="/boys">➤ For Boys</Link>
                </h2>
                <h2 className="hover:bg-[#feffc6] transition-all p-2">
                  <Link to="/mix">➤ Mix</Link>
                </h2>
              </div>
            )}
          </div>

          {/* Shop by Age */}
          <div
            className="cursor-pointer"
            onMouseEnter={() => setShowAgeGroups(true)}
            onMouseLeave={() => setShowAgeGroups(false)}
          >
            <div className="flex items-center px-5 py-3 gap-2 hover:bg-[#feffc6] transition-all">
              <FaPlus size={20} color="#0e2c6c" />
              <h1 className="text-lg font-semibold text-[#0e2c6c]">
                Shop by Age
              </h1>
            </div>
            {showAgeGroups && (
              <div className="text-[#0e2c6c] px-10 space-y-2">
                {ageGroups.map((age) => (
                  <h2
                    key={age}
                    className="hover:bg-[#feffc6] transition-all p-2"
                  >
                    <Link to={`/age/${age}`}>➤ {age} Years</Link>
                  </h2>
                ))}
              </div>
            )}
          </div>

          <div className="flex items-center px-5 py-3 gap-2 hover:bg-[#feffc6] transition-all">
            <MdContactSupport size={20} color="#0e2c6c" />
            <Link to="/contact">
              <h1 className="text-lg font-semibold text-[#0e2c6c]">Contact</h1>
            </Link>
          </div>
        </div>
      </div>

      {/* Search & Image Section */}
      <div className="flex-1 relative">
        {/* Search Bar */}
        <input
          type="search"
          placeholder="Search"
          className="p-3 bg-gray-200 rounded w-full mb-3"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setShowSearchResults(e.target.value.length > 0);
          }}
        />

        {/* Search Results Overlay */}
        {showSearchResults && (
          <div className="absolute top-14 left-0 w-full bg-white shadow-lg rounded-lg max-h-80 overflow-auto z-50 p-3">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <Link
                  key={product._id}
                  to={`/product/${product._id}`}
                  className="block p-2 hover:bg-gray-100 flex items-center gap-2"
                  onClick={() => setShowSearchResults(false)}
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-10 h-10 object-cover rounded"
                  />
                  <span>{product.title}</span>
                </Link>
              ))
            ) : (
              <p className="text-gray-500 text-center">No products found</p>
            )}
          </div>
        )}

        {/* Banner Image */}
        <img
          src="/salla-updated.jpg"
          alt="content-image"
          className="rounded-xl w-full"
        />
      </div>
    </div>
  );
}

export default Header;
