import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchProducts,
  addProduct,
  editProduct,
  deleteProduct,
} from "../rtk/slices/productsSlice";

export default function AdminDashboard() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const [form, setForm] = useState({
    id: "",
    title: "",
    image: "",
    category: "",
    price: "",
    gender: "",
  });
  const [editing, setEditing] = useState(false);
  const [loading, setLoading] = useState(false); // Loading state for form submission
  const [error, setError] = useState(""); // Error state for form submission

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(""); // Reset previous errors

    try {
      if (editing) {
        await dispatch(editProduct(form)); // Send updated product to Redux
      } else {
        await dispatch(addProduct(form));
      }

      // Reset the form
      setForm({
        id: "",
        title: "",
        image: "",
        category: "",
        price: "",
        gender: "",
      });
      setEditing(false);
    } catch (err) {
      setError("Failed to save the product. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (product) => {
    setForm({
      id: product.id, // Ensure ID is preserved
      title: product.title,
      image: product.image,
      category: product.category,
      price: product.price,
      gender: product.gender,
    });
    setEditing(true);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      dispatch(deleteProduct(id));
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-[#0e2c6c] mb-4">
        Admin Dashboard
      </h1>

      {/* Add / Edit Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-4 rounded-lg shadow-md mb-6"
      >
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={form.title}
          onChange={handleChange}
          className="border p-2 w-full mb-2"
          required
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={form.image}
          onChange={handleChange}
          className="border p-2 w-full mb-2"
          required
        />
        <input
          type="text"
          name="category"
          placeholder="Category"
          value={form.category}
          onChange={handleChange}
          className="border p-2 w-full mb-2"
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={form.price}
          onChange={handleChange}
          className="border p-2 w-full mb-2"
          required
        />
        <select
          name="gender"
          value={form.gender}
          onChange={handleChange}
          className="border p-2 w-full mb-2"
          required
        >
          <option value="">Select Gender</option>
          <option value="boys">Boys</option>
          <option value="girls">Girls</option>
          <option value="unisex">Unisex</option>
        </select>
        <button
          type="submit"
          className="bg-[#ff8808] text-white px-4 py-2 rounded-lg hover:bg-[#e67606]"
        >
          {loading ? "Saving..." : editing ? "Update Product" : "Add Product"}
        </button>
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </form>

      {/* Product Table */}
      <table className="w-full bg-white shadow-md rounded-lg">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2">Title</th>
            <th className="p-2">Price</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.length === 0 ? (
            <tr>
              <td colSpan="3" className="p-4 text-center text-gray-500">
                No products available.
              </td>
            </tr>
          ) : (
            products.map((product) => (
              <tr key={product.id} className="border-t">
                <td className="p-2">{product.title}</td>
                <td className="p-2">${product.price}</td>
                <td className="p-2 flex gap-2">
                  <button
                    onClick={() => handleEdit(product)}
                    className="bg-blue-500 text-white px-2 py-1 rounded-md"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(product.id)}
                    className="bg-red-500 text-white px-2 py-1 rounded-md"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
