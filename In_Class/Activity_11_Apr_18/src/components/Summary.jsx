import React from "react";

const Summary = ({ summaryData }) => {
  const { name, email, address, cardNumber, expiryDate, cart } = summaryData;
  
  return (
    <div className="p-4 space-y-6">
      <h2 className="text-3xl font-bold">Summary</h2>
      
      {/* User Details */}
      <div className="space-y-2">
        <p><strong>Name:</strong> {name}</p>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Address:</strong> {address}</p>
        <p><strong>Card Number:</strong> **** **** **** {cardNumber.slice(-4)}</p>
        <p><strong>Expiry Date:</strong> {expiryDate}</p>
      </div>
      
      {/* Order Items */}
      <div>
        <h3 className="text-xl font-semibold mb-2">Items Purchased:</h3>
        <ul className="list-disc pl-5">
          {cart.map((item, index) => (
            <li key={index}>{item.title} - ${item.price.toFixed(2)}</li>
          ))}
        </ul>
        <p className="mt-2 font-semibold">
          Total: ${cart.reduce((sum, item) => sum + item.price, 0).toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default Summary;