import { useState } from "react";

export default function Checkout() {
  const [paymentMethod, setPaymentMethod] = useState("cash");
  const [cardDetails, setCardDetails] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    name: "",
  });

  const handlePaymentChange = (method) => {
    setPaymentMethod(method);
    if (method === "cash") {
      setCardDetails({ cardNumber: "", expiryDate: "", cvv: "", name: "" });
    }
  };

  const handleCardChange = (e) => {
    setCardDetails({ ...cardDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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

        {/* Credit Card Details (Only if selected) */}
        {paymentMethod === "credit" && (
          <div className="space-y-3">
            <div>
              <label className="block font-medium">Cardholder Name</label>
              <input
                type="text"
                name="name"
                value={cardDetails.name}
                onChange={handleCardChange}
                placeholder="John Doe"
                className="w-full p-2 border rounded-md"
                required
              />
            </div>
            <div>
              <label className="block font-medium">Card Number</label>
              <input
                type="text"
                name="cardNumber"
                value={cardDetails.cardNumber}
                onChange={handleCardChange}
                placeholder="1234 5678 9012 3456"
                className="w-full p-2 border rounded-md"
                required
              />
            </div>
            <div className="flex gap-3">
              <div className="w-1/2">
                <label className="block font-medium">Expiry Date</label>
                <input
                  type="text"
                  name="expiryDate"
                  value={cardDetails.expiryDate}
                  onChange={handleCardChange}
                  placeholder="MM/YY"
                  className="w-full p-2 border rounded-md"
                  required
                />
              </div>
              <div className="w-1/2">
                <label className="block font-medium">CVV</label>
                <input
                  type="text"
                  name="cvv"
                  value={cardDetails.cvv}
                  onChange={handleCardChange}
                  placeholder="123"
                  className="w-full p-2 border rounded-md"
                  required
                />
              </div>
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
