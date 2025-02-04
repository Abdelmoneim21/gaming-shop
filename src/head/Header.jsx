import { MdOutlineMenu } from "react-icons/md";
import { IoHome } from "react-icons/io5";
import { MdOutlineToys, MdCall } from "react-icons/md";
import { TbCategoryPlus } from "react-icons/tb";
import { FaBoxOpen } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";

function Header() {
  const [showCategories, setShowCategories] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="w-[90%] mx-auto mt-6 flex flex-col md:flex-row gap-4">
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

        {/* Sidebar Content (Toggles in Mobile) */}
        <div className={`${sidebarOpen ? "block" : "hidden"} md:block`}>
          <div className="flex items-center px-5 py-3 gap-2 hover:bg-[#feffc6] transition-all">
            <IoHome size={20} color="#0e2c6c" />
            <h1 className="text-lg font-semibold text-[#0e2c6c]">Home</h1>
          </div>

          <Link to="/products">
            <div className="flex items-center px-5 py-3 gap-2 hover:bg-[#feffc6] transition-all">
              <MdOutlineToys size={20} color="#0e2c6c" />
              <h1 className="text-lg font-semibold text-[#0e2c6c]">
                All Products
              </h1>
            </div>
          </Link>

          {/* Categories with Hover Effect */}
          <div
            className="cursor-pointer"
            onMouseEnter={() => setShowCategories(true)}
            onMouseLeave={() => setShowCategories(false)}
          >
            <div className="flex items-center px-5 py-3 gap-2 hover:bg-[#feffc6] transition-all">
              <TbCategoryPlus size={20} color="#0e2c6c" />
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
                  ➤ For Girls
                </h2>
                <h2 className="hover:bg-[#feffc6] transition-all p-2">➤ Mix</h2>
                <h2 className="hover:bg-[#feffc6] transition-all p-2">
                  ➤ Active <span className="px-3">Wheels</span>
                </h2>
              </div>
            )}
          </div>

          <div className="flex items-center px-5 py-3 gap-2 hover:bg-[#feffc6] transition-all">
            <FaBoxOpen size={20} color="#0e2c6c" />
            <h1 className="text-lg font-semibold text-[#0e2c6c]">Bundles</h1>
          </div>

          <div className="flex items-center px-5 py-3 gap-2 hover:bg-[#feffc6] transition-all">
            <MdCall size={20} color="#0e2c6c" />
            <h1 className="text-lg font-semibold text-[#0e2c6c]">Contact</h1>
          </div>
        </div>
      </div>

      {/* Search & Image Section */}
      <div className="flex-1">
        {/* Search Bar */}
        <input
          type="search"
          placeholder="Search"
          className="p-3 bg-gray-200 rounded w-full mb-3"
        />

        {/* Image */}
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
