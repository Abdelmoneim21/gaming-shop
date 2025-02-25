import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../rtk/slices/cartSlice";
import { Link } from "react-router-dom";

function AgeProducts() {
  const { age } = useParams();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);

  const filteredProducts = products.filter(
    (product) => product.category === age
  );

  return (
    <div className="w-[90%] mx-auto mt-6">
      <h1 className="text-2xl font-bold text-[#0e2c6c] mb-6 text-center">
        Toys for Age {age} Years
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white border border-gray-200 shadow-lg rounded-xl p-4 hover:shadow-xl transition"
            >
              <Link to={`/product/${product._id}`}>
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-40 object-cover rounded-lg"
                />
                <h2 className="text-lg font-semibold text-[#0e2c6c] mt-3 text-center">
                  {product.title}
                </h2>
              </Link>

              <p className="text-center text-gray-700 font-semibold mt-1">
                LE {product.price} EGP
              </p>

              <div className="flex justify-center mt-3">
                <button
                  onClick={() => dispatch(addToCart(product))}
                  className="w-full px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition flex items-center justify-center gap-2"
                >
                  🛒 Add to Cart
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center w-full">
            No toys available for this age group.
          </p>
        )}
      </div>
    </div>
  );
}

export default AgeProducts;
