import React, { useState, useEffect } from "react";
import { items } from "../data/Products";
import Payment from "./Payment";
import Summary from "./Summary";

const ShoppingBootstrap = () => {
  const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [step, setStep] = useState("cart");
  const [summaryData, setSummaryData] = useState({});
  
  const addToCart = (item) => {
    setCart([...cart, item]);
  };
  
  const removeFromCart = (item) => {
    let itemFound = false;
    const updatedCart = cart.filter((cartItem) => {
      if (cartItem.id === item.id && !itemFound) {
        itemFound = true;
        return false;
      }
      return true;
    });
    if (itemFound) {
      setCart(updatedCart);
    }
  };
  
  useEffect(() => {
    total();
  }, [cart]);
  
  const total = () => {
    let totalVal = 0;
    for (let i = 0; i < cart.length; i++) {
      totalVal += cart[i].price;
    }
    setCartTotal(totalVal);
  };
  
  const handlePayNow = () => {
    setStep("payment");
  };
  
  function howManyofThis(id) {
    let hmot = cart.filter((cartItem) => cartItem.id === id);
    return hmot.length;
  }
  
  const listItems = items.map((item) => (
    // PRODUCT
    <div className="row border-top border-bottom" key={item.id}>
      <div className="row main align-items-center">
        <div className="col-2">
          <img className="img-fluid" src={item.image} />
        </div>
        <div className="col">
          <div className="row text-muted">{item.title}</div>
          <div className="row">{item.category}</div>
        </div>
        <div className="col">
          <button type="button" variant="light" onClick={() => removeFromCart(item)}>-</button>{" "}
          <button type="button" variant="light" onClick={() => addToCart(item)}>+</button>
        </div>
        <div className="col">
          ${item.price} <span className="close">&#10005;</span>{howManyofThis(item.id)}
        </div>
      </div>
    </div>
  ));
  
  return (
    <div>
      STORE SE/ComS319
      <div className="card">
        {step === "cart" && (
          <div className="row">
            {/* SHOPPING CART */}
            <div className="col-md-8 cart">
              <div className="title">
                <div className="row">
                  <div className="col">
                    <h4>
                      <b>319 Shopping Cart</b>
                    </h4>
                  </div>
                  <div className="col align-self-center text-right text-muted">
                    Products selected {cart.length}
                  </div>
                </div>
              </div>

              <div>{listItems}</div>
            </div>

            <div className="col-md-4 text-end">
              <p className="mb-0 me-5 d-flex align-items-center">
                <span className="small text-muted me-2">Order total:</span>
                <span className="lead fw-normal">${cartTotal}</span>
              </p>
              <button
                type="button"
                style={{ backgroundColor: "green", color: "white" }}
                onClick={handlePayNow}
              >
                Pay Now
              </button>
            </div>
          </div>
        )}

       {/* PAYMENT COMPONENT */}

        {step === "payment" && (
          <Payment
            cart={cart}
            setCart={setCart}
            setStep={setStep}
            setSummaryData={setSummaryData}
            cartTotal={cartTotal}
          />
        )}

       {/* SUMMARY COMPONENT */}

        {step === "summary" && <Summary summaryData={summaryData} />}
      </div>
    </div>
  );
};


export default ShoppingBootstrap;