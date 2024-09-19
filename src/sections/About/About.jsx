import React from "react";
import "./About.css";
// import TeamMember from "../../components/TeamMember/TeamMember";
const About = () => {
  return (
    <section id="about">
      <h3 className="about-title">Sobre</h3>
      <p className="about-description">
        A Safe Solution é uma empresa de prestação de serviços direcionada
        aos emigrantes no sentido de apoia-los na a manutenção e segurança dos
        seus bens móveis e imóveis, apoia administrativo e jurídico. trata-se de
        uma combinação de vários serviços que na maioria das vezes o emigrante
        procura de forma individualizada de modo a aproveitar as oportunidade.
      </p>
      {/* <div className="team-members">
            <TeamMember/>
            <TeamMember/>
            <TeamMember/>
        </div> */}
    </section>
  );
};

export default About;
