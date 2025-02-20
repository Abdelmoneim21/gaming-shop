import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../rtk/slices/productsSlice";
import { addToCart } from "../rtk/slices/cartSlice";
import { Link } from "react-router-dom";

export default function AllProducts() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const [quantities, setQuantities] = useState({});
  const [sortType, setSortType] = useState("az");

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleQuantityChange = (id, value) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: value > 0 ? value : 1,
    }));
  };

  const sortedProducts = [...products].sort((a, b) => {
    if (sortType === "az") return a.title.localeCompare(b.title);
    if (sortType === "za") return b.title.localeCompare(a.title);
    if (sortType === "low-high") return a.price - b.price;
    if (sortType === "high-low") return b.price - a.price;
    return 0;
  });

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center text-purple-700 mb-6">
        Products
      </h1>

      {/* Sorting Dropdown */}
      <div className="flex justify-end mb-4">
        <label className="mr-2 font-medium text-gray-700">Sort by:</label>
        <select
          className="border border-gray-300 rounded-md px-2 py-1"
          value={sortType}
          onChange={(e) => setSortType(e.target.value)}
        >
          <option value="az">Alphabetically, A-Z</option>
          <option value="za">Alphabetically, Z-A</option>
          <option value="low-high">Price: Low to High</option>
          <option value="high-low">Price: High to Low</option>
        </select>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {sortedProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-4 flex flex-col items-center text-center"
          >
            {/* Clickable Product Image */}
            <Link
              to={`/product/${product.id}`}
              className="w-full h-40 overflow-hidden rounded-lg"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </Link>

            {/* Clickable Product Title */}
            <Link to={`/product/${product.id}`}>
              <h3 className="text-lg font-semibold mt-1 hover:text-blue-600">
                {product.title}
              </h3>
            </Link>

            <p className="text-gray-700 font-bold text-lg mt-1">
              LE {product.price} EGP
            </p>

            {/* Add to Cart Section */}
            <div className="flex items-center mt-3 space-x-2">
              <button
                className="px-3 py-1 bg-red-400 text-white rounded-l-lg"
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
                className="px-3 py-1 bg-green-400 text-white rounded-r-lg"
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
              className="mt-4 bg-yellow-400 hover:bg-yellow-500 text-black w-full py-2 rounded-lg flex items-center justify-center space-x-2 font-medium"
              onClick={() =>
                dispatch(
                  addToCart({
                    ...product,
                    quantity: quantities[product.id] || 1,
                  })
                )
              }
            >
              <span>🛒</span>
              <span>Add to Cart</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
