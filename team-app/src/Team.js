import React from "react";
import "./Team.css";
import bhav from "./assets/bhav.jpg";
import ruth from "./assets/ruth.jpg";
import akshaya from "./assets/akshaya.jpg";
import sindhuja from "./assets/sindhuja.jpg";

const teamMembers = [
  { name: "Bhavya Sri", rollNo: "2210030302", role: "Developer", img: bhav },
  { name: "Ruthvika", rollNo: "2210030284", role: "Designer", img: ruth },
  { name: "Akshaya", rollNo: "2210030124", role: "Tester", img: akshaya },
  { name: "Sindhuja", rollNo: "2210030089", role: "Manager", img: sindhuja },
];

const Team = () => {
  return (
    <div className="team-section">
      {teamMembers.map((member, index) => (
        <div className="member-card" key={index}>
          <img src={member.img} alt={member.name} className="member-img" />
          <div className="details">
            <p><strong>{member.name}</strong></p>
            <p>Roll No: {member.rollNo}</p>
            <p>Role: {member.role}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Team;
