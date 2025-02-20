import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../rtk/slices/cartSlice"; // Import the action from cartSlice

export default function ProductDetails() {
  const { id } = useParams();
  const dispatch = useDispatch(); // Initialize dispatch

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("Fetching product with ID:", id, typeof id);

    fetch(`http://localhost:8000/toys/${id}`) // Convert ID to a number
      .then((res) => {
        console.log("Response status:", res.status);
        if (!res.ok) {
          throw new Error("Product not found");
        }
        return res.json();
      })
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Fetch error:", error.message);
        setError(error.message);
        setLoading(false);
      });
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      dispatch(addToCart(product)); // Dispatch the action to add the product to the cart
    }
  };

  if (loading) return <p className="text-center">Loading product details...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex flex-col md:flex-row items-center gap-6">
        <img
          src={product.image}
          alt={product.title}
          className="w-full md:w-1/2 rounded-lg shadow-md"
        />
        <div>
          <h1 className="text-3xl font-bold text-[#0e2c6c]">{product.title}</h1>
          <p className="text-gray-500 text-lg mt-2">EGP{product.price}</p>
          <p className="mt-4">{product.description}</p>
          <button
            onClick={handleAddToCart}
            className="mt-6 bg-[#ff8808] text-white px-6 py-3 rounded-lg hover:bg-[#e67606] transition"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
