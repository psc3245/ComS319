import React, { useState } from "react";

const Payment = ({ cart, setCart, setStep, setSummaryData }) => {
  const [paymentInfo, setPaymentInfo] = useState({
    name: "",
    email: "",
    address: "",
    cardNumber: "",
    expiryDate: "",
    cvc: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPaymentInfo({ ...paymentInfo, [name]: value });
  };

  const handleSubmit = () => {
    // Basic validation
    for (let key in paymentInfo) {
      if (paymentInfo[key].trim() === "") {
        alert(`Please fill out ${key}`);
        return;
      }
    }
    // Save data and go to summary
    setSummaryData({ ...paymentInfo, cart });
    setStep("summary");
  };

  return (
    <div className="space-y-6 p-4">
      <h2 className="text-3xl font-bold">Payment Details</h2>
      <div className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={paymentInfo.name}
          onChange={handleChange}
          className="border p-2 w-full"
        />
        
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={paymentInfo.email}
          onChange={handleChange}
          className="border p-2 w-full"
        />
        
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={paymentInfo.address}
          onChange={handleChange}
          className="border p-2 w-full"
        />
        
        <input
          type="text"
          name="cardNumber"
          placeholder="Card Number"
          value={paymentInfo.cardNumber}
          onChange={handleChange}
          className="border p-2 w-full"
        />
        
        <input
          type="text"
          name="expiryDate"
          placeholder="Expiry Date (MM/YY)"
          value={paymentInfo.expiryDate}
          onChange={handleChange}
          className="border p-2 w-full"
        />
        
        <input
          type="text"
          name="cvc"
          placeholder="CVC"
          value={paymentInfo.cvc}
          onChange={handleChange}
          className="border p-2 w-full"
        />
      </div>
      
      <button
        onClick={handleSubmit}
        className="bg-green-500 text-white py-2 px-6 rounded mt-4"
      >
        Submit Payment
      </button>
    </div>
  );
};

export default Payment;