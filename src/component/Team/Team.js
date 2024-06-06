import React from "react";
import { TeamMemebers } from "../Assent/Data";

const Team = () => {
  return (
    <div
      className="team"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill,minmax(300px, 1fr))",
        gap: "20px",
        paddingBottom:"50px",
        paddingTop:"50px"
      }}
    >
      {TeamMemebers.map((el, i) => {
        return (
          <div key={i} className="box">
            <div className="img">
              <img style={{maxWidth:"100%"}} src={el.img} alt="" />
            </div>
            <h2 style={{color:"var(--head-color)",}}>{el.name}</h2>
            <span style={{color:"var(--text-color)"}}>{el.loaction}</span>
            <p style={{color:"var(--text-color)"}}>{el.des}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Team;
