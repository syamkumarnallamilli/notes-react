import React from "react";
function Items({itemsList}){
    console.log(itemsList)
    return(
        
        <div>
            
            <h3>items list</h3>
            <ul>
                {itemsList.map((ItemsList,index) => (
                    <li key={index}>{ItemsList}</li>
                ))}
            </ul>
            
        </div>
    );
   
}
export default Items