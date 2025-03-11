import React from "react";
function Items({itemsList}){
    return(
        <div>
            <h3>items list</h3>
            <ul>
                {itemsList.map((itemsList,index) => (
                    <li key={index}>{itemsList}</li>
                ))}
            </ul>
        </div>
    );
}
export default Items