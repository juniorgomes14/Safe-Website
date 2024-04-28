import React from "react";
import "./Footer.css";
import Logo from "../../assets/logoSafe.png";
import Facebook from "../../assets/Icons/Facebook";
import Instagram from "../../assets/Icons/Instagram";
import LinkedIn from "../../assets/Icons/LinkedIn";
import Location from "../../assets/Icons/Location";
import Phone from "../../assets/Icons/Phone";
import Mail from "../../assets/Icons/Mail";

const Footer = () => {
  return (
    <section className="footer">
      <div className="social-media-container">
        <img src={Logo} alt="logo" className="logo-icon-footer" />
        <p className="footer-description">
        Lorem ipsum dolor sit pellentesque tristique nibh posuere duis sed mi.
        </p>
        <div className="social-media-links">
          <Facebook />
          <LinkedIn />
          <Instagram />
        </div>
      </div>
        <div className="website-tree">
          <p className="footer-title">Site</p>
          <div className="tree-nodes">
            <p>Home</p>
            <p>Serviços</p>
            <p>Sobre</p>
            <p>FQA</p>
          </div>
        </div>
        <div className="contact-tree">
          <p className="footer-title">Contatos</p>
          <div className="tree-nodes">
            <p><Location/>Mindelo, São Vicente, Cabo Verde</p>
            <p><Phone/>+238 999999999</p>
            <p><Mail/>safe@safe.cv</p>
            <p className="dot">.</p>
          </div>
        </div>
        <p className="copyrights">© 2024 Safe. All Rights Reserved. Powered by Nuno Lima</p>
    </section>
  );
};

export default Footer;
