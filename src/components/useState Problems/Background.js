import React from "react";
import { useState } from "react";
const BackgroundColor =()=>{

    const[color,setColor]=useState("white")
    const handleChange=(event)=>{
        setColor(event.target.value)
        console.log(color)
    }
    return(
        <div style={{backgroundColor:color,border:"1px solid black"}}>
            <p>background dynamically</p>
            <select onChange={handleChange} value={color}>
                
                <option value="white">white</option>
                <option value="Red">Red</option>
                <option value="green">Green</option>
            </select>

            <p style={{ fontSize: "18px", fontWeight: "bold" }}>Current Color: {color}</p>
        </div>
    )
}
export default BackgroundColor