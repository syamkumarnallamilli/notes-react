import React from "react";
import Propcard from "../Propcard";

const people = [
  { id: 1, name: "Alice", role: "Developer", location: "Bangalore", img: "/logo192.png", description: "Alice is a front-end developer with 3 years of experience in React." },
  { id: 2, name: "Bob", role: "Designer", location: "Mumbai", img: "/logo192.png", description: "Bob is a UI/UX designer who loves creating clean interfaces." },
  { id: 3, name: "Charlie", role: "Manager", location: "Delhi", img: "/logo192.png", description: "Charlie is a project manager coordinating multiple teams." },
];

const MainCard = () => {
  return (
    <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
      {people.map((profile) => (
        <Propcard
          key={profile.id}
          name={profile.name}
          role={profile.role}
          location={profile.location}
          img={profile.img}
          description={profile.description}
        />
      ))}
    </div>
  );
};

export default MainCard;
