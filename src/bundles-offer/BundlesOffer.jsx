import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../rtk/slices/productsSlice";
import { addToCart } from "../rtk/slices/cartSlice";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function BundlesOffer() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const products = useSelector((state) => state.products.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleAddToCart = (product) => {
    dispatch(addToCart({ ...product, id: product._id, quantity: 1 }));

    // SweetAlert Confirmation
    Swal.fire({
      title: "Added to Cart!",
      text: `${product.title} has been added to your cart.`,
      icon: "success",
      confirmButtonText: "Go to Cart",
      confirmButtonColor: "#0e2c6c",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/cart"); // Navigate to cart page
      }
    });
  };

  return (
    <div className="container mx-auto p-4 mt-[150px]">
      {/* Section Title */}
      <h2 className="text-lg text-center text-yellow-500 font-semibold">
        Our Products
      </h2>
      <h1 className="text-3xl font-bold text-center text-purple-700 mb-6">
        Bundles Offer
      </h1>

      {/* Product List */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
        {products.map((product) => (
          <div
            key={product._id}
            className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-4 flex flex-col items-center"
          >
            {/* Product Image */}
            <div className="relative w-full h-32 sm:h-40 flex-shrink-0">
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
            <div className="text-center mt-2">
              <Link to={`/product/${product._id}`}>
                <h3 className="text-lg font-semibold hover:text-purple-600">
                  {product.title}
                </h3>
              </Link>

              {/* Product Pricing */}
              <p className="text-gray-600 text-lg mt-1">
                <span className="line-through text-gray-500 mr-2">
                  LE {Math.round(product.price * 1.4)} EGP
                </span>
                <span className="text-red-600 font-bold">
                  LE {product.price} EGP
                </span>
              </p>

              {/* Add to Cart Button */}
              {!product.soldOut && (
                <button
                  className="mt-2 px-4 py-2 bg-yellow-400 hover:bg-yellow-500 text-black font-medium rounded-lg w-full"
                  onClick={() => handleAddToCart(product)}
                >
                  🛒 Add to Cart
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
