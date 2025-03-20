import React from "react";
const Child=(Properties)=>{
    return (
        <div >
            <h3>child component</h3>
            <h4>I'm {Properties.name1}</h4>
            <h4>I'am {Properties.age} years old.</h4>
            <h4>I'am a {Properties.desg}</h4>

            <div>
                <h2>product details</h2>
                <p>{Properties.pro.Name}</p>
                <p>Price: {Properties.pro.price}</p>
            </div>
        </div>
        
    )
}
export default Child