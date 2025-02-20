import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../rtk/slices/cartSlice"; // Import clearCart action

export default function Checkout() {
  const [paymentMethod, setPaymentMethod] = useState("cash");
  const [cardDetails, setCardDetails] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    name: "",
  });
  const [address, setAddress] = useState({
    fullName: "",
    phone: "",
    streetAddress: "",
  });

  const cartItems = useSelector((state) => state.cart?.cartItems || []);
  const totalPrice = useSelector((state) => state.cart?.totalPrice || 0);
  const dispatch = useDispatch();

  const handlePaymentChange = (method) => {
    setPaymentMethod(method);
    if (method === "cash") {
      setCardDetails({ cardNumber: "", expiryDate: "", cvv: "", name: "" });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (paymentMethod === "credit") {
      setCardDetails({ ...cardDetails, [name]: value });
    } else {
      setAddress({ ...address, [name]: value });
    }
  };

  const sendWhatsAppMessage = () => {
    const adminPhoneNumber = "+201099161140"; // Admin's WhatsApp number

    const cartDetails = cartItems
      .map(
        (item) =>
          `- *${item.title}* (x${item.quantity}): $${
            item.price * item.quantity
          }`
      )
      .join("\n");

    const addressDetails =
      paymentMethod === "cash"
        ? `\n\n📍 *Address:*\n👤 *Full Name:* ${address.fullName}\n📞 *Phone:* ${address.phone}\n🏠 *Street:* ${address.streetAddress}`
        : "";

    const message = `🛒 *New Order Received!*\n\n${cartDetails}\n\n💰 *Total Price:* $${totalPrice}\n🛍️ *Payment Method:* ${paymentMethod.toUpperCase()}${addressDetails}`;

    const whatsappURL = `https://wa.me/${adminPhoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappURL, "_blank");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Submitting Order. Cart Items:", cartItems);

    if (!cartItems || cartItems.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    if (
      paymentMethod === "credit" &&
      (!cardDetails.cardNumber ||
        !cardDetails.expiryDate ||
        !cardDetails.cvv ||
        !cardDetails.name)
    ) {
      alert("Please fill in all credit card details.");
      return;
    }

    sendWhatsAppMessage();
    dispatch(clearCart()); // ✅ Clear cart after checkout
    alert(`Order placed successfully with ${paymentMethod} payment!`);
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <h2 className="text-2xl font-bold text-center mb-6">Checkout</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Payment Method Selection */}
        <div>
          <label className="block text-lg font-semibold mb-2">
            Payment Method
          </label>
          <div className="flex gap-4">
            <button
              type="button"
              className={`px-4 py-2 rounded-md ${
                paymentMethod === "cash"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200"
              }`}
              onClick={() => handlePaymentChange("cash")}
            >
              Cash on Delivery
            </button>
            <button
              type="button"
              className={`px-4 py-2 rounded-md ${
                paymentMethod === "credit"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200"
              }`}
              onClick={() => handlePaymentChange("credit")}
            >
              Credit Card
            </button>
          </div>
        </div>

        {/* Address Fields (Only for Cash on Delivery) */}
        {paymentMethod === "cash" && (
          <div className="space-y-3">
            <div>
              <label className="block font-medium">Full Name</label>
              <input
                type="text"
                name="fullName"
                value={address.fullName}
                onChange={handleInputChange}
                placeholder="John Doe"
                className="w-full p-2 border rounded-md"
                required
              />
            </div>
            <div>
              <label className="block font-medium">Phone Number</label>
              <input
                type="text"
                name="phone"
                value={address.phone}
                onChange={handleInputChange}
                placeholder="+123 456 7890"
                className="w-full p-2 border rounded-md"
                required
              />
            </div>
            <div>
              <label className="block font-medium">Street Address</label>
              <input
                type="text"
                name="streetAddress"
                value={address.streetAddress}
                onChange={handleInputChange}
                placeholder="123 Main St, City, Country"
                className="w-full p-2 border rounded-md"
                required
              />
            </div>
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 rounded-md"
        >
          Confirm Order
        </button>
      </form>
    </div>
  );
}
