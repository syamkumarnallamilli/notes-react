import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Effect ran!');
  },[]);
//[] → run once after the first render

//[count] → run only when count changes



//Cleanup Function

//Sometimes, you need to clean up effects to avoid memory leaks:
// useEffect(() => {
//   const timer = setInterval(() => {
//     console.log("Tick", count);
//   }, 1000);

//   // cleanup function runs before effect re-runs or component unmounts
//   return () => {
//     clearInterval(timer);
//     console.log("Cleanup called");
//   };
// }, []);


//Multiple Effects

//You can have multiple useEffects for separation of concerns:
useEffect(() => {
  console.log("Effect 1: fetching data");
}, []);

useEffect(() => {
  console.log("Effect 2: updating title");
  document.title = `Count is ${count}`;
}, [count]);

  return (
    <div >
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
export default Example



// What is useEffect?

// 👉 useEffect is a React Hook that lets you run side effects in your function components.

// Side effects are things that React cannot do just by rendering UI:

// Fetching data from an API

// Setting up a subscription (e.g., WebSocket, events)

// Manually updating the DOM

// Running timers (setTimeout, setInterval)

// useEffect(() => {
//   // side effect code
//   return () => {
//     // cleanup code (optional)
//   };
// }, [dependencies]);


// Effect function → runs after render

// Cleanup function → runs before the effect re-runs or when component unmounts

// Dependency array → controls when it runs:

// [] → only once (on mount)

// [value] → runs when value changes

// no array → runs after every render