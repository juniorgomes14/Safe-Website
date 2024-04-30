import React from "react";
import "./TeamMember.css";
import Placeholder from "../../assets/placeholder.jpg";

const TeamMember = () => {
  return (
    <div className="team-member">
      <img src={Placeholder} alt="team-member-image" />
      <div className="member-info">
        <p className="member-name">Nome da pessoa</p>
        <p className="member-description">
          Descriação da pessoa com alguma coisa e mais{" "}
        </p>
      </div>
    </div>
  );
};

export default TeamMember;
