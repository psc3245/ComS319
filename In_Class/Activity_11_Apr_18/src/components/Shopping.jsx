import React, { useState, useEffect } from "react";
import items from "./products.json";

const Shop = () => {
  const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  
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
  
  const listItems = items.map((item) => (
    <div key={item.id}>
      <img className="img-fluid" src={item.image} width={100} />
      {item.title}
      {item.category}
      {item.price}
      <button type="button" onClick={() => removeFromCart(item)}>-</button>{" "}
      <button type="button" variant="light" onClick={() => addToCart(item)}>+</button>
    </div>
  ));
  
  const cartItems = cart.map((item) => (
    <div key={item.id}>
      <img className="img-fluid" src={item.image} width={150} />
      {item.title}
      ${item.price}
    </div>
  ));
  
  return (
    <div>
      <div>{listItems}</div>
      <div>Items in Cart:</div>
      <div>{cartItems}</div>
      <div>Order total to pay: {cartTotal}</div>
    </div>
  );
};

export default Shop;