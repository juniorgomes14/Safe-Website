import React from 'react'
import "./TeamMember.css"
import Placeholder from "../../assets/placeholder.jpg"

const TeamMember = () => {
  return (
    <div className="team-member">
        <img  src={Placeholder} alt="team-member-image"/>
        <p className="member-name">Nome da pessoa</p>
        <p className="member-description">Descriação da pessoa com alguma coisa e mais </p>
    </div>
  )
}

export default TeamMember