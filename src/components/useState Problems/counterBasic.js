import React from "react";
import { useState } from "react";

const CounterApp=()=>{
    const[count,setCount]=useState(0)
    const Increment=()=>{
        setCount(count+1)
        console.log(count)
    }

    
    const Decrement=()=>{
        setCount(count-1)
    }
    const Reset=()=>{
        setCount(0)
    }
    return(
        <div>
            
            <h3>counter app basic</h3>
            <p>Count: {count}</p>
            <button onClick={Increment}>increment</button>
            <button onClick={Decrement}>decrement</button>
            <button onClick={Reset}>Reset</button>
        </div>
    )
}
export default CounterApp