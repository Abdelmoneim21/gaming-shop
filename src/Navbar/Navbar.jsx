import { IoCall } from "react-icons/io5";
import { FaUser, FaShoppingCart, FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md p-4">
      {/* Navbar Container */}
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="w-1/3">
          <Link to="/">
            <h1 className="w-32 md:w-40 text-[#0e2c6c] font-extrabold text-[20px] ">
              BABA <span className="block">ABDO</span>
            </h1>
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
            <Link to="/login">
              <FaUser size={24} color="#0e2c6c" />
            </Link>
            <div className="border-r-2 h-6"></div>
            <Link to="/cart">
              <FaShoppingCart size={24} color="#0e2c6c" />
            </Link>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#0e2c6c]"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <FaBars size={24} />
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 bg-gray-100 p-4 rounded-lg">
          <div className="flex flex-col gap-4">
            {/* Call Info */}
            <div className="flex items-center gap-3">
              <IoCall size={24} color="#0e2c6c" />
              <h2 className="text-lg text-[#0e2c6c] font-semibold">
                +201068258565
              </h2>
            </div>

            {/* User & Cart */}
            <div className="flex items-center gap-4">
              <Link to="/login">
                <FaUser size={24} color="#0e2c6c" />
              </Link>
              <div className="border-r-2 h-6"></div>
              <FaShoppingCart size={24} color="#0e2c6c" />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
