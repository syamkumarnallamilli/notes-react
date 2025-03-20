import React from "react";

const PersonLists = ({ person }) => {
    console.log("Person received:", person);
  return (
    <div style={{ border: "1px solid red", padding: "10px", margin: "15px" }}>
      
      <p>
        I am <strong>{person.name}</strong>. I am <strong>{person.age}</strong>
        years old. I know <strong>{person.skill}</strong>.
      </p>
    </div>
  );
};

export default PersonLists;
