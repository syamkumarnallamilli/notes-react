import React from "react";
import { useState } from "react";
function ShoppingCart(){
    const[cart,setCart]=useState(0)

    const addToCart=()=>{
        setCart((prevCart)=>{
            console.log("Previous Count:", prevCart);
            return prevCart+1
        })

    }

        const removeCart=()=>{
            setCart((prevCart)=>{
                const remove= prevCart>0 ? prevCart-1 : 0;
                console.log("remove cart items count:", cart)
                return remove;
            })
        }
    
    return(
        <div >
            <p>addTOCart</p>

            <p>Items in cart: {cart}</p>

            <button onClick={addToCart}>AddTOCart</button>
            {/* remove from cart */}
            <button onClick={removeCart}>remove</button>
        </div>
    )
}
export default ShoppingCart