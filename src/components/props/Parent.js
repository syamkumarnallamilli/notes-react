// When Parent wants to send data to Child, it uses props.

// Example: Passing Props from Parent to Child

// import React from "react";
// import Child from "./child";
// import Destructure from "./PropDestructuring";



// function Parent(){
//     const Product={
//         Name:"laptop",
//         price:40000
    
//     }
//     const user = {
//         username: "john_doe",
//         email: "john.doe@example.com",
//         age: 25,
//         posts: ["Hello World!", "My First Post"],
//       };
      
//     return(
//         <div>
//             <h3>Parent Component</h3>
//             <Child pro={Product} name1="kuamr..." age="22" desg="developer"/>
//             <Destructure users={user}/>
            
//         </div>
//     );
// }
// export default Parent




//  Child to Parent (Using a Callback Function as Prop)
// 💡 When Child wants to send data to Parent, Parent provides a function that the Child calls.


// 📌 Steps:
// Define a function in the Parent Component.
// Pass the function to the Child Component as a prop.
// The Child Component calls the function and sends data back.


// Example: Passing Data from Child to Parent

import React from "react";
import Child from "./ParamProp";
const Parent=()=>{
    const handleChild=(data)=>{
        console.log("received data from child", data)
    }
    return(
        <div>
            <h4>Parent Component</h4>
           <Child sendData={handleChild}/>
          
        
        
        </div>
    );
}
export default Parent

