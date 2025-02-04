import { useEffect, useState } from "react";

export default function Filter({ category }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/toys/")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch data");
        return res.json();
      })
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, [category]); // Re-fetch when category changes

  // Filtered products based on selected category
  const filteredProducts = products.filter(
    (product) => product.category === category
  );

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center text-[#0e2c6c] mb-6">
        Products in Category:{" "}
        <span className="text-[#ff8808]">{category} years</span>
      </h1>

      {filteredProducts.length === 0 ? (
        <p className="text-center text-gray-500">
          No products available in this category.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-[90%] mx-auto">
          {filteredProducts.map((toy) => (
            <div
              key={toy.id}
              className="bg-white shadow-lg rounded-2xl p-4 flex flex-col items-center text-center transition-transform transform hover:scale-105 duration-300"
            >
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
          ))}
        </div>
      )}
    </div>
  );
}
