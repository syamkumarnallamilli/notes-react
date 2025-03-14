import React from "react";
const Click=()=>{
    const HandleClick=()=>{
        console.log("button clicked")
    }
    return(
        <div>
        <h3>functionEventHandling</h3>
        <button onClick={HandleClick}>function</button>
        </div>
    );
}
export default Click;