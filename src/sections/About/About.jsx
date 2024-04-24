import React from 'react'
import "./About.css"
import TeamMember from '../../components/TeamMember/TeamMember'
const About = () => {
  return (
    <section id="about">
        <h3 className='about-title'>Equipa</h3>
        <div className="team-members">
            <TeamMember/>
            <TeamMember/>
            <TeamMember/>
        </div>
        
    </section>
  )
}

export default About