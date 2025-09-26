import React from 'react';

function Child(props) {
  const product = {
    id: 1,
    name: "Laptop",
    price: 45000,
    stock: true
  };

  return (
    <div>
      <h3>Child Component</h3>
      <button onClick={() => props.sendData(product)}>
        Send Product to Parent
      </button>
    </div>
  );
}

export default Child;
