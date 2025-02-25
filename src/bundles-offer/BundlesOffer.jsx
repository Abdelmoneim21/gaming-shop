import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../rtk/slices/productsSlice";
import { Link } from "react-router-dom";

export default function BundlesOffer() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="container mx-auto p-4">
      {/* Section Title */}
      <h2 className="text-lg text-center text-yellow-500 font-semibold">
        Our Products
      </h2>
      <h1 className="text-3xl font-bold text-center text-purple-700 mb-6">
        Bundles Offer
      </h1>

      {/* Product List */}
      <div className="flex flex-col gap-4 sm:gap-6 md:gap-8">
        {products.map((product) => (
          <div
            key={product._id}
            className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-4 flex flex-row items-center gap-4"
          >
            {/* Product Image */}
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 flex-shrink-0">
              {product.soldOut && (
                <span className="absolute top-2 left-2 bg-gray-700 text-white text-xs px-2 py-1 rounded">
                  Sold out
                </span>
              )}
              {product.onSale && (
                <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                  Sale
                </span>
              )}
              <Link to={`/product/${product._id}`}>
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                />
              </Link>
            </div>

            {/* Product Details */}
            <div className="flex flex-col justify-center">
              <Link to={`/product/${product._id}`}>
                <h3 className="text-lg font-semibold hover:text-purple-600">
                  {product.title}
                </h3>
              </Link>

              {/* Product Pricing */}
              <p className="text-gray-600 text-lg mt-1">
                <span className="line-through text-gray-500 mr-2">
                  LE {product.originalPrice}.00 EGP
                </span>
                <span className="text-red-600 font-bold">
                  LE {product.price}.00 EGP
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
