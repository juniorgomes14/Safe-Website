import React from "react";
import "./Footer.css";
import Logo from "../../assets/logoSafe.webp";
import Facebook from "../../assets/Icons/Facebook";
import Instagram from "../../assets/Icons/Instagram";
import LinkedIn from "../../assets/Icons/LinkedIn";
import Location from "../../assets/Icons/Location";
import Phone from "../../assets/Icons/Phone";
import Mail from "../../assets/Icons/Mail";

const Footer = () => {
  function slideTo(componentID) {
    document.getElementById(componentID)?.scrollIntoView({ behavior: "smooth" });
    setMenuIsOpen(false);
  }

  return (
    <section className="footer">
      <div className="social-media-container">
        <img src={Logo} alt="logo" className="logo-icon-footer" />
        <p className="footer-description">
        De França e Cabo Verde para a mundo: criamos soluções seguras. Garantimos serviços completos de proteção, manutenção e limpeza para seus bens.
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
            <p onClick={() => slideTo("landing")}>Home</p>
            <p onClick={() => slideTo("services")}>Serviços</p>
            <p onClick={() => slideTo("about")} >Sobre</p>
            <p onClick={() => slideTo("faq")}>FQA</p>
          </div>
        </div>
        <div className="contact-tree">
          <p className="footer-title">Contatos</p>
          <div className="tree-nodes">
            <p><Location/>Mindelo, São Vicente, Cabo Verde</p>
            <p><Phone/>+238 972 56 17</p>
            <p><Mail/>info@safesolution.cv</p>
            <p className="dot">.</p>
          </div>
        </div>
        <p className="copyrights">© 2024 Safe. All Rights Reserved. Powered by <a href="https://nunolima.netlify.app/" target="blank">Nuno Lima</a></p>
    </section>
  );
};

export default Footer;
