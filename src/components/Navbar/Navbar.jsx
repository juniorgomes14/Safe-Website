import { useState } from "react";
import Logo from "../../assets/logoSafe.webp";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setMenuIsOpen] = useState(false);

  function slideTo(componentID) {
    document
      .getElementById(componentID)
      ?.scrollIntoView({ behavior: "smooth" });
    setMenuIsOpen(false);
  }

  function toggleMenu() {
    setMenuIsOpen(() => !isMenuOpen);
  }

  return (
    <nav>
      <div className="logo-container">
        <a href=".">
          <img src={Logo} alt="logo" className="logo-icon" />
        </a>
      </div>
      <button className="toggle-menu" onClick={toggleMenu}>
        <span className={!isMenuOpen ? "bar1" : "bar1-close"}></span>
        <span className={!isMenuOpen ? "bar2" : "bar2-close"}></span>
        <span className={!isMenuOpen ? "bar3" : "bar3-close"}></span>
      </button>
      <div className={isMenuOpen ? "nav-links" : "nav-links nav-hidden"}>
        <button className="button-link" onClick={() => slideTo("landing")}>
          Home
        </button>
        <button className="button-link" onClick={() => slideTo("services")}>
          Serviços
        </button>
        <button className="button-link" onClick={() => slideTo("about")}>
          Sobre
        </button>
        <button className="button-link" onClick={() => slideTo("faq")}>
          FQA
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
