import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../rtk/slices/productsSlice";
import { addToCart } from "../rtk/slices/cartSlice";

export default function GirlsToys() {
  const dispatch = useDispatch();
  const { products, status } = useSelector((state) => state.products); // Corrected the selector

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  const girlsToys = products.filter((toy) => toy.gender === "girls"); // Ensured 'products' is used

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-pink-700 mb-4">🎀 Girls' Toys</h2>

      {status === "loading" && <p>Loading...</p>}
      {status === "failed" && (
        <p className="text-red-500">Failed to load toys.</p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {girlsToys.length > 0 ? (
          girlsToys.map((toy) => (
            <div
              key={toy.id}
              className="bg-white p-4 rounded-lg shadow-lg flex flex-col items-center"
            >
              <img
                src={toy.image}
                alt={toy.title}
                className="w-full h-40 object-cover rounded"
              />
              <h3 className="text-lg font-semibold mt-2">{toy.title}</h3>
              <p className="text-gray-700">${toy.price}</p>
              <button
                onClick={() => dispatch(addToCart({ ...toy, quantity: 1 }))}
                className="mt-3 bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition"
              >
                🛒 Add to Cart
              </button>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No toys available for girls.</p>
        )}
      </div>
    </div>
  );
}
