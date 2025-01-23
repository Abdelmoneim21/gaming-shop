import { MdOutlineMenu } from "react-icons/md";
import { IoHome } from "react-icons/io5";
import { MdOutlineToys } from "react-icons/md";
import { TbCategoryPlus } from "react-icons/tb";
import { FaBoxOpen } from "react-icons/fa";
import { MdCall } from "react-icons/md";

function Header() {
  return (
    <div className="head flex w-[80%] m-auto gap-4">
      <div className="sidebar w-[20%] outline outline-offset-2 outline-gray-600 ">
        <div className="top flex bg-[#692e82] text-[#fff] items-center px-5 py-3 gap-2">
          <MdOutlineMenu size={30} />
          <h1 className="text-xl font-semibold">SHOP BY</h1>
        </div>
        <div className="cat">
          <div className="home flex  items-center px-5 py-3 gap-2 ">
            <IoHome size={20} color="#692e82" />
            <h1 className="text-l font-semibold text-[#692e82]">Home</h1>
          </div>
          <div className="flex  items-center px-5 py-3 gap-2">
            <MdOutlineToys size={20} color="#692e82" />
            <h1 className="text-l font-semibold text-[#692e82]">
              All Products
            </h1>
          </div>
          <div className="flex  items-center px-5 py-3 gap-2">
            <TbCategoryPlus size={20} color="#692e82" />
            <h1 className="text-l font-semibold text-[#692e82]">categories</h1>
          </div>
          <div className="flex  items-center px-5 py-3 gap-2">
            <FaBoxOpen size={20} color="#692e82" />
            <h1 className="text-l font-semibold text-[#692e82]">bundles</h1>
          </div>
          <div className="flex  items-center px-5 py-3 gap-2">
            <MdCall size={20} color="#692e82" />
            <h1 className="text-l font-semibold text-[#692e82]">contact</h1>
          </div>
        </div>
      </div>
      <div className="content">
        <div className="search">
          <input type="search" placeholder="Search" />
        </div>
        <div className="head-img">
          <img src="/public/salla-updated.jpg" alt="content-image" />
        </div>
      </div>
    </div>
  );
}
export default Header;
