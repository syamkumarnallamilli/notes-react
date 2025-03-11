import React from "react";
function Obj({details}){
    return(
        <div>
        <h3>product: {details.name}</h3>
        <p>Price: {details.price}</p>
        <p>Status:{details.stock ? "In stock" : "Out of Stock"}</p>
        </div>
    )
}
export default Obj;