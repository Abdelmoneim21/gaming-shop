import { MdOutlineMenu } from "react-icons/md";
import { IoHome } from "react-icons/io5";
import { MdOutlineToys } from "react-icons/md";
import { TbCategoryPlus } from "react-icons/tb";
import { FaBoxOpen } from "react-icons/fa";
import { MdCall } from "react-icons/md";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="head flex w-[80%] m-auto gap-4 mt-[30px]">
      <div className="sidebar w-[22%]  rounded-lg shadow-lg border border-gray-200 ">
        <div className="top flex bg-[#692e82] text-[#fff] items-center px-5 py-3 gap-2">
          <MdOutlineMenu size={30} />
          <h1 className="text-xl font-semibold">SHOP BY</h1>
        </div>
        <div className="cat">
          <div className="home flex  items-center px-5 py-3 gap-2 transition-all duration-300 ease-in-out hover:bg-[#feffc6] hover:scale-102 ">
            <IoHome size={20} color="#692e82" />
            <h1 className="text-l font-semibold text-[#692e82] ">Home</h1>
          </div>
          <div className="flex  items-center px-5 py-3 gap-2 transition-all duration-300 ease-in-out hover:bg-[#feffc6] hover:scale-102 mt-3">
            <MdOutlineToys size={20} color="#692e82" />
            <Link to="/products">
              <h1 className="text-l font-semibold text-[#692e82]">
                All Products
              </h1>
            </Link>
          </div>
          <div className="flex  items-center px-5 py-3 gap-2 transition-all duration-300 ease-in-out hover:bg-[#feffc6] hover:scale-102 mt-3">
            <TbCategoryPlus size={20} color="#692e82" />
            <h1 className="text-l font-semibold text-[#692e82]">categories</h1>
          </div>
          <div className="flex  items-center px-5 py-3 gap-2 transition-all duration-300 ease-in-out hover:bg-[#feffc6] hover:scale-102 mt-3">
            <FaBoxOpen size={20} color="#692e82" />
            <h1 className="text-l font-semibold text-[#692e82]">bundles</h1>
          </div>
          <div className="flex  items-center px-5 py-3 gap-2 transition-all duration-300 ease-in-out hover:bg-[#feffc6] hover:scale-102 mt-3">
            <MdCall size={20} color="#692e82" />
            <h1 className="text-l font-semibold text-[#692e82]">contact</h1>
          </div>
        </div>
      </div>
      <div className="content">
        <div className="search ">
          <input
            type="search"
            placeholder="Search"
            className="p-5 bg-[#ddd] rounded mb-3 w-[100%]"
          />
        </div>
        <div className="head-img ">
          <img
            src="/salla-updated.jpg"
            alt="content-image"
            className="rounded-xl"
          />
        </div>
      </div>
    </div>
  );
}
export default Header;
