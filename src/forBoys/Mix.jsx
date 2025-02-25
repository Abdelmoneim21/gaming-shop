import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../rtk/slices/productsSlice";
import { addToCart } from "../rtk/slices/cartSlice";
import { Link } from "react-router-dom";

export default function Mix() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const [quantities, setQuantities] = useState({});

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleQuantityChange = (id, value) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: value > 0 ? value : 1, // Prevent negative values
    }));
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">
        🧸 Our Toy Collection
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-4 flex flex-col items-center"
          >
            {/* Product Image */}
            <div className="w-full h-40 sm:h-48 overflow-hidden rounded-lg">
              <Link to={`/product/${product._id}`}>
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
              </Link>
            </div>

            {/* Product Info */}
            <h3 className="text-lg font-semibold mt-3 text-center">
              {product.title}
            </h3>
            <p className="text-gray-600 text-lg font-bold mt-1">
              ${product.price}
            </p>

            {/* Quantity Selector */}
            <div className="flex items-center mt-3 space-x-2">
              <button
                className="px-3 py-1 bg-red-400 text-white rounded-l-lg text-lg"
                onClick={() =>
                  handleQuantityChange(
                    product.id,
                    (quantities[product.id] || 1) - 1
                  )
                }
              >
                ➖
              </button>
              <input
                type="number"
                min="1"
                value={quantities[product.id] || 1}
                onChange={(e) =>
                  handleQuantityChange(product.id, parseInt(e.target.value))
                }
                className="w-12 text-center border border-gray-300 rounded-lg"
              />
              <button
                className="px-3 py-1 bg-green-400 text-white rounded-r-lg text-lg"
                onClick={() =>
                  handleQuantityChange(
                    product.id,
                    (quantities[product.id] || 1) + 1
                  )
                }
              >
                ➕
              </button>
            </div>

            {/* Add to Cart Button */}
            <button
              className="mt-4 bg-blue-500 hover:bg-blue-600 text-white w-full py-2 rounded-lg text-lg font-medium"
              onClick={() =>
                dispatch(
                  addToCart({
                    ...product,
                    quantity: quantities[product.id] || 1,
                  })
                )
              }
            >
              🛒 Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
