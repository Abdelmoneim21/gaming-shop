import { FaFacebook, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <div className="foot bg-[#0e2c6c]  px-[5%] py-[5%] flex justify-center gap-4">
      <div className="links w-[30%]">
        <h1 className="text-2xl font-semibold text-[#ff8808] mb-3">
          QUICK LINKS
        </h1>
        <div className="link-container px-3">
          <p className="hover:border-b-2 w-[30%] duration-100 mb-1 text-[#fff]">
            Home
          </p>
          <p className="hover:border-b-2 w-[30%] duration-100 mb-1 text-[#fff]">
            All Products
          </p>
          <p className="hover:border-b-2 w-[30%] duration-100 mb-1 text-[#fff]">
            Categories
          </p>
          <p className="hover:border-b-2 w-[30%] duration-100 mb-1 text-[#fff]">
            Bundles
          </p>
          <p className="hover:border-b-2 w-[30%] duration-100 mb-1 text-[#fff]">
            Contact
          </p>
        </div>
      </div>
      <div className="description w-[50%]">
        <h1 className="text-2xl font-semibold text-[#ff8808] mb-3">
          DESCRIPTION
        </h1>
        <p className="text-[#fff]">
          A whole world of imagination and creativity awaits, where your kids
          can explore their talents and let their imaginations run wild! Every
          toy here has a story and a new adventure to dive into. We’re all about
          creating a unique experience that lets every child embark on a magical
          journey filled with laughter, challenges, and growth. Our goal? To
          help every little adventurer develop emotionally and intellectually
          while having the best time in a safe and super fun environment!
        </p>
      </div>
      <div className="newsletter">
        <h1 className="text-2xl font-semibold text-[#ff8808] mb-3">
          Newsletter
        </h1>
        <p className="mb-4 text-[#fff]">
          Sign up for our e-mail and be the first who knows our special offers!
        </p>
        <input
          type="email"
          placeholder="Enter please your e-mail"
          className="px-5 py-4 bg-[#dddddd] rounded-xl w-[80%]   "
        />
        <p className="text-[#fff] text-sm mt-3">
          By clicking the button you agree to the{" "}
          <span className="text-[#ff8808]">Privacy Policy</span>
          and <span className="text-[#ff8808]">Terms and Conditions</span>.
        </p>
        <h1 className=" mt-5 text-[#ff8808] text-semibold text-2xl mb-2 ">
          FOLLOW US
        </h1>
        <div className="FOLLOW-ICONS flex gap-7">
          <FaFacebook size={30} color="#fff" />
          <FaInstagram size={30} color="#fff" />
        </div>
      </div>
    </div>
  );
}
export default Footer;
