import React from "react";
import MainCard from "./components/MainCard";
import UseState from "./UseState";
import MovingDot from "./MovingDot";
import ToDoApp from "./ToDoApp";
import Example from "./Useeffect";
import UseffectApi from "./UseffectApi";
import ConsumeContext from "./ConsumeContext";

const tasks = ["code", "eat", "sleep"];

const Basic = (props) => {
  console.log(props);
  const { name, fruits } = props;

  return (
    <div >
      <div style={{ display: "flex", marginTop:"200px", gap: "30px", border: "2px solid green", padding: "30px" ,margin:"30px"}}>
        <div>
          <h1>{name}</h1>
          {tasks.map((t, idx) => (
            <h3 key={idx}>{t}</h3>
          ))}
        </div>

        <div>
          <h1>Fruits</h1>
          <ul>
            {fruits.map((f, idx) => (
              <li key={idx}>{f}</li>
            ))}
          </ul>
        </div>
      </div>

      <div>
        <MainCard />
        <UseState/>
        {/* <MovingDot/> */}
        <ToDoApp/>
        <Example/>
        <UseffectApi/>
        <ConsumeContext/>
      </div>
    </div>
  );
};

export default Basic;
