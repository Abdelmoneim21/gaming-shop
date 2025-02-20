import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUser, FaEnvelope, FaPhone } from "react-icons/fa";

export default function Contact() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    comment: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Your message has been sent!");
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-100">
      <h1 className="text-4xl font-bold text-[#0e2c6c] mb-2">Contact</h1>
      <p className="text-gray-600 mb-6 text-center">
        Questions or comments? Get in touch and we'll be happy to help.
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-lg space-y-4"
      >
        {/* Name & Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center bg-gray-100 rounded-lg p-3">
            <FaUser className="text-gray-500 mr-2" />
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full bg-transparent outline-none"
            />
          </div>

          <div className="flex items-center bg-gray-100 rounded-lg p-3">
            <FaEnvelope className="text-gray-500 mr-2" />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full bg-transparent outline-none"
            />
          </div>
        </div>

        {/* Phone Number */}
        <div className="flex items-center border border-purple-300 rounded-lg p-3">
          <FaPhone className="text-gray-500 mr-2" />
          <input
            type="tel"
            name="phone"
            placeholder="Phone number"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full bg-transparent outline-none"
          />
        </div>

        {/* Comment */}
        <textarea
          name="comment"
          placeholder="Comment"
          value={formData.comment}
          onChange={handleChange}
          required
          className="w-full h-32 bg-gray-100 p-3 rounded-lg outline-none"
        ></textarea>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-[#0e2c6c] text-white py-2 rounded-lg hover:bg-blue-800 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
