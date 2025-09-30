import React, { useContext } from "react";
import { GlobalContext } from "../Hooks/context/UseContext";

const Propcard = ({ name, role, location, img, description }) => {
  const getConsume=useContext(GlobalContext)
  return (
    <div style={{
      border: "1px solid gray",
      borderRadius: "10px",
      width: "360px",
      padding: "15px",
      boxShadow: "0 4px 8px rgba(0,0,0,0.1)"
    }}>
       <h1>Name:{getConsume.name}</h1>
      {/* Top section: image + details + location */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
       
        <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
          <img 
            src={img} 
            alt={name} 
            style={{ width: "50px", height: "50px", borderRadius: "10px" }} 
          />
          <div>
            <h3 style={{ margin: 0 }}>{name}</h3>
            <p style={{ fontWeight: "bold", margin: "5px 0" }}>{role}</p>
          </div>
        </div>
        
        {/* Location aligned right */}
        <p style={{ fontStyle: "italic", margin: 0 }}>{location}</p>
      </div>

      {/* Divider line */}
      <hr style={{ margin: "10px 0", border: "0.5px solid gray" }} />

      {/* Bottom section: description */}
      <p style={{ color: "#555", margin: 0 }}>{description}</p>
    </div>
  );
};

export default Propcard;
