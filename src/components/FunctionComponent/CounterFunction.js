import React from "react";
import { useState } from "react";
const CounterFunc=()=>{
    const[count,setCount]=useState(0)
    // function handleClick(){
    //     setCount(count+1)
    // }

    //using prevstate
        // const handleClick=()=>{
            
        //     setCount((prevState)=>prevState+1) //correct way
            
        // }

        
        const handleClick = () =>{
            setCount((prevCount) => {
                const newCount = prevCount + 1;
        console.log("After update:", newCount);
        return newCount;
                
              });
        }
        // console.log("Component Rendered, Current Count:", count);
        

    return(
        <div>
            <h3>Function Counter:{count}</h3>
            <button onClick={handleClick}>Increment</button>
        </div>
    )
}
export default CounterFunc;





// Method	When to Use	Pros	Cons
// useEffect	  When you need to run code after state updates	Guarantees the latest value   	Adds extra hook dependency
// setTimeout(() => console.log(count), 0);  	Quick debugging workaround	Works without extra hooks	  Less reliable for complex logic
// setState(prevState => { console.log(prevState);   return prevState + 1; })	When you need the latest state inside setState itself	Uses the correct prevState	Can't access the updated state immediately outside



// Key Difference Between useEffect and This Logic (setCount Callback)
// Feature	  useEffect	   setCount Callback (Your Logic)
// When It Runs 	Runs after render	           Runs immediately during event handling
// Purpose	     Used for side effects (API calls, subscriptions, logging, etc.)	Used to update state safely based on previous state
// Access to Latest State	 Always gets the latest state after a render	    Works inside setState, but the component still renders with the old state before the update
// Re-renders the Component?	No unless state is updated	                  Yes, every time state updates
// Where Logs Appear (console.log)	 Logs appear after the UI updates	Logs appear before the UI updates
// Common Use Cases	    Fetching data, setting up event listeners, updating document title, etc.	Handling state updates based on previous state
