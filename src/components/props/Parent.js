// When Parent wants to send data to Child, it uses props.

// Example: Passing Props from Parent to Child

import React from "react";
import Child from "./child";

function Parent(){
    const Product={
        Name:"laptop",
        price:40000
    
    }
    return(
        <div>
            <h3>Parent Component</h3>
            <Child pro={Product} name1="kuamr..." age="22" desg="developer"/>
            
        </div>
    );
}
export default Parent


//  Child to Parent (Using a Callback Function as Prop)
// 💡 When Child wants to send data to Parent, Parent provides a function that the Child calls.

// Example: Passing Data from Child to Parent


f

