import React, { useState } from 'react';
import Child1 from './Child1';

function Parent1() {
  const [productData, setProductData] = useState(null); // 👈 state to store received data

  const handleChildData = (data) => {
    setProductData(data); // 👈 update state when child sends data
  };

  return (
    <div style={{ border: '1px solid blue', padding: '1rem' }}>
      <h2>Parent Component</h2>
      <Child1 sendData={handleChildData} />

      {/* 👇 Show product details only if data is available */}
      {productData && (
        <div style={{ marginTop: '1rem' }}>
          <h3>Product Received from Child</h3>
          <p><strong>ID:</strong> {productData.id}</p>
          <p><strong>Name:</strong> {productData.name}</p>
          <p><strong>Price:</strong> ₹{productData.price}</p>
          <p><strong>In Stock:</strong> {productData.stock ? "Yes" : "No"}</p>
        </div>
      )}
    </div>
  );
}

export default Parent1;
