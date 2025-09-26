import React, { useState, useEffect, useRef } from "react";

const Counter1 = () => {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef(); // Store previous state

  useEffect(() => {
    prevCountRef.current = count; // Update previous count after render
  });

  const increment = () => {
    console.log("Previous Count:", prevCountRef.current);
    setCount(count + 1);
  };

  return (
    <div style={{border:"1px", backgroundColor:"gray",width:"100%",maxWidth:"100px"}}>
      <h2>Counter: {count}</h2>
      <button onClick={increment}>Increase</button>
    </div>
  );
};

export default Counter1;
