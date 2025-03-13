import React from 'react';
//  export function Greet(){  // if it is write like this waht function name should give in app.js while import
//     function Greet(){    
//     return(
//         <div>
//     <h1>Function component</h1>;
//     <p>A functional component in React is just a JavaScript function that returns UI (JSX).</p>
//         <h3>Think of it like a vending machine:</h3>

//             <li>You give an input (like pressing a button for a soda).</li>
//             <li>It returns an output (the soda you chose).</li>
//             <li>It does not remember anything – every time you press a button, it gives the same output.</li>


    
//     </div>
//     );
    
    
// }

// arrow function
const Greet=()=>{
    return(
        <>
            <h1>Function component</h1>
            <p>A functional component in React is just a JavaScript function that returns UI (JSX).</p>
            <h3>Think of it like a vending machine:</h3>
            <ul>
                <li>You give an input (like pressing a button for a soda).</li>
                <li>It returns an output (the soda you chose).</li>
                <li>It does not remember anything – every time you press a button, it gives the same output.</li>
            </ul>
        </>
    );
}


 export default Greet; // u can change the name at import in app.js


