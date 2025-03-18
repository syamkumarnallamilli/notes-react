import React from "react";
import { useState } from "react";
const IncreDecre=()=>{
    const[count,setCount]=useState(0);
    const[stepSize,setStepSize]=useState(1)
        // function Increment(){
        //     setCount(count+1)
        // }

        function Increment(){
            setCount(function(prevCount){
                console.log("before:",prevCount)
                const result=prevCount+stepSize
                console.log("updated:" ,result)
                return result;
                
            })
            
        }
    
        // const Decrement=()=>{
        //     setCount(count-1)

        // }

        const Decrement=()=>{
            setCount((prevCount)=>prevCount-stepSize)
        }
        const reset=()=>{
            setCount(0)
            setStepSize(0)
        }
    return(
        <div style={{textAlign:"center"}}>
            <h1>simple counter</h1>
            <h2>count:{count}</h2>
            <div>
                <label>step size:</label>
                <input
                    type="number" 
                    value={stepSize}
                    onChange={(e)=>setStepSize(Number(e.target.value))
                        
                    }
                
                />
            </div>

            <div>
            <button onClick={Increment} style={{margin:"10px",padding:"10px"}}>+</button>
            <button onClick={Decrement} style={{margin:"10px",padding:"10px"}}>-</button>
            <button onClick={reset} style={{ margin: "10px", padding: "10px", cursor: "pointer" }}>Reset</button>
            </div>
            
        </div>
    )
}
export default IncreDecre;





//  step Size::
//Instead of increasing by 1, we allow users to set step size (e.g., 2, 5, etc.).

// 📝 How It Works
// A new state variable stepSize stores the step value.
// The user can type a number, and the counter will increase/decrease by that amount.