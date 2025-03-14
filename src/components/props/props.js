// import React from "react";
// function Properties(value){
//         return(
//             <div>
//             <p>Hi! I'am {value.name}</p>
//             <p> I'am {value.age} years old.</p>
//             {value.children}
//             </div>
//         );
// }
// export default Properties;

//destructuring prop
import React from "react";
function Properties({name,age}){
    // function Properties({props}){
    //     const{name,age}=props
        return(
            <div>
            <p>Hi! I'am {name}</p>
            <p> I'am {age} years old.</p>
            
            </div>
        );
}
export default Properties;