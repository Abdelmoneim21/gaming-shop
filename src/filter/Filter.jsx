import { useEffect, useState } from "react";

export default function Filter({ category }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/toys/")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching data:", error));

    console.log(products);
  }, [category]);

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-center mb-6">
        Products in Category: {category}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-[80%] m-auto">
        {products
          .filter((product) => product.category === category) // Comparing as string
          .map((toy) => (
            <div
              key={toy.id}
              className="bg-white shadow-lg rounded-2xl p-4 flex flex-col items-center text-center transition-transform transform hover:scale-105"
            >
              <img
                src={toy.image}
                alt={toy.title}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h2 className="text-lg font-semibold">{toy.title}</h2>
              <p className="text-gray-500 font-medium mt-2">${toy.price}</p>
              <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
                View Details
              </button>
            </div>
          ))}
      </div>
    </div>
  );
}
