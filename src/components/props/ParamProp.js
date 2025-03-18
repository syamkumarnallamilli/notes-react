import React from "react";
const Child=(Properties)=>{
    const productDetails = {
        id: 101,
        name: "Laptop",
        price: 50000,
        stock: true
      };
    return(
        <div>
           <p>Passing Data from Child to Parent:</p> 
            <button onClick={()=>Properties.sendData(productDetails)}>send data to parent</button>
        </div>
    );

    
}
export default Child;