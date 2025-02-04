import { IoCall } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="navbar flex items-center py-3">
      <div className="logo w-[60%]">
        <Link to="/">
          <img
            src="/final_9d3e36c7-8c80-4085-8b23-fc0fb5966366.png"
            alt="logo"
            className="ml-[60%]"
          />
        </Link>
      </div>
      <div className="info flex">
        <div className="call flex items-center gap-3">
          <IoCall size={30} color="#0e2c6c" />
          <h2 className="text-2xl text-[#0e2c6c] font-semibold">
            +201068258565
          </h2>
        </div>
        <div className="user flex ml-[20%] items-center">
          <Link to="/login">
            <FaUser size={30} color="#0e2c6c" className="" />
          </Link>
          <p className="border-r-2 m-3 h-[100%] text-black"></p>
          <FaShoppingCart size={30} color="#0e2c6c" />
        </div>
      </div>
    </div>
  );
}
export default Navbar;
