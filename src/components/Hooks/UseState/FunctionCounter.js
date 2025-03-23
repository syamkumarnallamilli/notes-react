import React from "react";
import { useState } from "react";
const HookCounter=()=>{
    const[count,setCount]=useState(0) //initializes the count with 0.
    const increment=()=>{
        setCount(count+1)
        setCount(count+1)
        setCount(count+1)
        setCount(count+1)
    }

    //✅ Works fine in most cases when updating once per event, but fails in multiple updates within the same function.

//         🚨 Issue
// Clicking the button should increase count by 2.

// But React does not immediately update count, so both setCount(count + 1) use the same value.

// Result: The count only increases by 1 instead of 2.



const PrevState = () => {
    setCount(prevCount => prevCount + 1);
    setCount(prevCount => prevCount + 1);
    setCount(prevCount => prevCount + 1);
  };
    
    return(
        <div>
            <h3>function counter</h3>  
             {/* <button onClick={()=>setCount(count+1)}>count {count}</button> When the button is clicked, the state is updated, and the component re-renders. */}
                                     {/* updates the count. */}
            <button onClick={increment}>inctrement {count} </button>
            <button onClick={PrevState}>Prevstate {count} </button>
        </div>
    )
    
}
export default HookCounter

// Initial State → count = 0

// Click Button → setCount(0 + 1), so count becomes 1

// Click Again → setCount(1 + 1), so count becomes 2

// Works Fine, but it has a hidden problem!


// 2️⃣ What Happens When We Call setCount Multiple Times?
// If we call setCount multiple times in a row, React does not update the state immediately. Instead, it batches updates for performance.

// 🔹 Example (Multiple Updates Without prevState)


// const increment = () => {
//     setCount(count + 1);
//     setCount(count + 1);
//     setCount(count + 1);
//   };
  