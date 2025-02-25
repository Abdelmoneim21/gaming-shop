import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { IoCall } from "react-icons/io5";
import {
  FaUser,
  FaShoppingCart,
  FaBars,
  FaTimes,
  FaSignOutAlt,
} from "react-icons/fa";
import { MdCategory } from "react-icons/md";
import { GiCardboardBox } from "react-icons/gi";
import { BsBoxSeam } from "react-icons/bs";
import { logout } from "../rtk/slices/authSlice"; // Adjust path if needed

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Redux state
  const cartCount = useSelector((state) => state.cart.items);
  const admin = useSelector((state) => state.auth.admin);

  // Handle Scroll Behavior
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (menuOpen) return; // Keep menu open even when scrolling
      setVisible(currentScroll < lastScroll || currentScroll === 0);
      setLastScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuOpen, lastScroll]);

  // Handle Logout
  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <nav
      className={`bg-white shadow-md p-4 fixed w-full top-0 left-0 transition-transform duration-300 z-50 ${
        visible || menuOpen ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="w-1/3">
          <Link to="/">
            <img
              src="/3.png"
              alt="Game Shop Logo"
              className="w-[40%] h-[50%]"
            />
          </Link>
        </div>

        {/* Desktop View: Contact Info & Icons */}
        <div className="hidden md:flex items-center gap-10">
          {/* Call Info */}
          <div className="flex items-center gap-3">
            <IoCall size={24} color="#0e2c6c" />
            <h2 className="text-lg text-[#0e2c6c] font-semibold">
              +201068258565
            </h2>
          </div>

          {/* User & Cart */}
          <div className="flex items-center gap-4">
            {admin ? (
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 text-red-600 font-semibold"
              >
                <FaSignOutAlt size={20} />
                Logout
              </button>
            ) : (
              <Link to="/login">
                <FaUser size={24} color="#0e2c6c" />
              </Link>
            )}
            <div className="border-r-2 h-6"></div>
            <Link to="/cart" className="relative">
              <FaShoppingCart size={24} color="#0e2c6c" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-3 bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#0e2c6c]"
          onClick={() => setMenuOpen(true)}
        >
          <FaBars size={24} />
        </button>
      </div>

      {/* Mobile Sidebar Menu */}
      {menuOpen && (
        <div
          className=" top-0 inset-0 bg-black bg-opacity-50 z-50"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}

      <div
        className={`fixed left-0 top-0 h-[100vh] w-3/4 bg-[#ccc] shadow-lg z-50  transition-transform ${
          menuOpen ? "translate-x-0 " : "-translate-x-full"
        } p-6`}
      >
        {/* Close Button */}
        <button
          className="p-4 bg-[#ccc] inset-0  bg-opacity-50 z-[999]"
          onClick={() => setMenuOpen(false)}
        >
          <FaTimes />
        </button>

        {/* Menu Items */}
        <ul className="flex flex-col gap-6 mt-8 text-purple-700 font-semibold text-lg ">
          <li>
            <Link to="/" className="flex items-center gap-3">
              <GiCardboardBox size={20} />
              Home
            </Link>
          </li>

          <li>
            <Link to="/products" className="flex items-center gap-3">
              <BsBoxSeam size={20} />
              All Products
            </Link>
          </li>

          <li className="flex items-center justify-between">
            <Link to="/categories" className="flex items-center gap-3">
              <MdCategory size={20} />
              Categories
            </Link>
            <span className="text-gray-400">{">"}</span>
          </li>

          <li className="flex items-center justify-between">
            <Link to="/bundles" className="flex items-center gap-3">
              <BsBoxSeam size={20} />
              Bundles
            </Link>
            <span className="text-gray-400">{">"}</span>
          </li>

          <li>
            <Link to="/contact" className="flex items-center gap-3">
              <IoCall size={20} />
              Contact
            </Link>
          </li>

          {admin ? (
            <>
              <li>
                <Link
                  to="/admin/dashboard"
                  className="flex items-center gap-3 text-green-600"
                >
                  <MdCategory size={20} />
                  Admin Dashboard
                </Link>
              </li>
              <li>
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-3 text-red-600"
                >
                  <FaSignOutAlt size={20} />
                  Logout
                </button>
              </li>
            </>
          ) : (
            <li>
              <Link to="/login" className="flex items-center gap-3">
                <FaUser size={20} />
                Log in
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}
