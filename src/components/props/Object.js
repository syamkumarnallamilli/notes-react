import React from "react";
function Obj({details}){
   const{name,price,stock}=details
    return(
        <div style={{border:"1px solid black"}}>
        <h3>product: {name}</h3>
        <p>Price: {price}</p>
        <p>Status:{stock ? "In stock" : "Out of Stock"}</p>
        </div>
    )
}
export default Obj;