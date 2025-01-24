import { MdToys } from "react-icons/md";
import { FaGears } from "react-icons/fa6";
import { FaBirthdayCake } from "react-icons/fa";
import { MdSettingsInputComposite } from "react-icons/md";

function Info() {
  return (
    <div className="info grid  grid-cols-2 w-[85%] m-auto gap-8  mb-[10%]">
      <div className="item flex gap-10 items-center border rounded-xl px-5 py-12 border-[#0e2c6c] hover:scale-[105%] duration-300">
        <div className="icon">
          <MdToys size={50} color="#0e2c6c" />
        </div>
        <div className="text">
          <h1 className="text-semibold text-2xl mb-3">
            &quot; Toys for all ages &quot;
          </h1>
          <p>
            &quot;whether for my toddler or pre-teen, this store has something
            for
            <br></br> everyone. The toys are fun and educational &quot;
          </p>
        </div>
      </div>
      <div className="item flex gap-10 items-center border rounded-xl px-5 py-12 border-[#0e2c6c] hover:scale-[105%] duration-300">
        <div className="icon">
          <FaGears size={50} color="#0e2c6c" />
        </div>
        <div className="text">
          <h1 className="text-semibold text-2xl mb-3">
            &quot;Great service and amazing toys! &quot;
          </h1>
          <p>
            &quot;We had an issue with a toy, and the staff was quick to help.
            My son
            <br></br> is thrilled with his new toy! &quot;
          </p>
        </div>
      </div>
      <div className="item flex gap-10 items-center border rounded-xl px-5 py-12 border-[#0e2c6c] hover:scale-[105%] duration-300">
        <div className="icon">
          <FaBirthdayCake size={50} color="#0e2c6c" />
        </div>
        <div className="text">
          <h1 className="text-semibold text-2xl mb-3">
            &quot;Perfect for birthday gifts! &quot;
          </h1>
          <p>
            &quot;I always find great gifts for my nephews here. The toys are
            unique
            <br></br> and always a hit parties. &quot;
          </p>
        </div>
      </div>
      <div className="item flex gap-10 items-center border rounded-xl px-5 py-12 border-[#0e2c6c] hover:scale-[105%] duration-300">
        <div className="icon">
          <MdSettingsInputComposite size={50} color="#0e2c6c" />
        </div>
        <div className="text">
          <h1 className="text-semibold text-2xl mb-3">
            &quot;My son&apos;s favourite Site! &quot;
          </h1>
          <p>
            &quot;We visit often, and my son is never disappointed. Greate staff
            and
            <br></br> toys that keep him entertained! &quot;
          </p>
        </div>
      </div>
    </div>
  );
}
export default Info;
