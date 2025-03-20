import React from "react";

import PersonLists from "./Person";

const NameList=()=>{
    // const names=['satya','keerthana','syam']


    const persons=[
        {
            id:1,
            name:"satya",
            age:25,
            skill:"Nextjs"
        },
        {
            id:2,
            name:"keerthana",
            age:23,
            skill:"javascript"
        },
        {
            id:3,
            name:"syam",
            age:23,
            skill:"rectjs"
        },
    ];
    // const nameList=names.map(name=><p>{name}</p>)

    const personList = persons.map((person) => (
        <PersonLists key={person.id} person={person} />
      ));
        // <p>
        //  I am {person.name}. I am {person.age} Years Old. I Know {person.skill}.
        // </p>
    
    
    return(
        <div>
             <h3>Name List</h3>
             {personList} 
            {/*<p>{names[0]}</p>
            <p>{names[1]}</p>
            <p>{names[2]}</p> */}


        {/* {
            names.map(name=><p>{name}</p>)
        } */}

         

        </div>
    );
};
export default NameList