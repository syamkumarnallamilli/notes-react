import React from "react";
import { useState } from "react";
const ToggleText=()=>{
    const[toggle,setToggle]=useState(false)
    const toggleText=()=>{
        setToggle(!toggle) //invert the state if toggle is false it becomes true
        console.log(toggle)
    }
    return(
        <div>
            <h3>Toggle Text</h3>
            {toggle && <p>hello</p>}
            <button onClick={toggleText}>
                {toggle ? "hide" : "show"}  
             </button> {/*//it shows hide button because toggle is true depends on function */}
        </div>
    )
}
export default ToggleText