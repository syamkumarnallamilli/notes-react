import React, { useState } from "react";

const ShoppingCart2 = () => {
  const [total, setTotal] = useState(0);

  const addItem = (price) => {
    setTotal(prevTotal => prevTotal + price);
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      <button onClick={() => addItem(50)}>🛒 Add Item ($50)</button>
      <button onClick={() => addItem(30)}>🛒 Add Item ($30)</button>
      <button onClick={() => addItem(20)}>🛒 Add Item ($20)</button>
      <h3>Total Price: ${total}</h3>
    </div>
  );
};

export default ShoppingCart2;
