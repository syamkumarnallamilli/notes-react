import React from "react";  
import { useState } from "react";
function NumberAddition(){
    const[num1,setNum1]=useState("")
    const[num2,setNum2]=useState("")
    const[sum,setSum]=useState(0)
    const Addition=()=>{
        setSum((prevSum) => {
            console.log("Previous Sum:", prevSum);
            return prevSum + Number(num1) + Number(num2);
        });
    }
    return(
        <div>
            <h3>Addition</h3>
            <form>
                <input
                    type="number"
                    placeholder="enter number1..."
                    value={num1}
                    onChange={(e)=>setNum1(e.target.value)}
                ></input>
                <input
                    type="number"
                    placeholder="enter number2..."
                    value={num2}
                    onChange={(e)=>setNum2(e.target.value)}
                ></input>

            </form>
            <button type="submit" onClick={Addition}>sum</button>
            
            <p>sum:{sum}</p>
        </div>
    )
}
export default NumberAddition