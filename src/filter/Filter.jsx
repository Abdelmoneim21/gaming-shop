import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../rtk/slices/productsSlice";
import { Link } from "react-router-dom";

export default function Filter({ category }) {
  const dispatch = useDispatch();
  const { products, status } = useSelector((state) => state.products);

  // Fetch products when the component mounts or category changes
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [dispatch, status]);

  // Filter products based on the category passed as a prop
  const filteredProducts = products.filter(
    (product) => product.category === category
  );

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center text-[#0e2c6c] mb-6">
        Products in Category: <span className="text-[#ff8808]">{category}</span>
      </h1>

      {status === "loading" && <p className="text-center">Loading...</p>}
      {status === "failed" && (
        <p className="text-center text-red-500">Failed to load products.</p>
      )}

      {filteredProducts.length === 0 ? (
        <p className="text-center text-gray-500">No products available.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-[90%] mx-auto">
          {filteredProducts.map((toy) => (
            <Link to={`/product/${toy.id}`} key={toy.id}>
              <div className="bg-white shadow-lg rounded-2xl p-4 flex flex-col items-center text-center transition-transform transform hover:scale-105 duration-300">
                <img
                  src={toy.image}
                  alt={toy.title}
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <h2 className="text-lg font-semibold text-[#0e2c6c]">
                  {toy.title}
                </h2>
                <p className="text-gray-500 font-medium mt-2">${toy.price}</p>
                <button className="mt-4 bg-[#ff8808] text-white px-4 py-2 rounded-lg hover:bg-[#e67606] transition">
                  View Details
                </button>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
