import { useState } from "react";
import "./Navbar.css";

function slideTo(componentID) {
  document.getElementById(componentID)?.scrollIntoView({ behavior: "smooth" });
}
const Navbar = () => {
  const [isMenuOpen, setMenuIsOpen] = useState(false);

  return (
    <nav>
      <div className="logo-container">
        <h3>Safe</h3>
      </div>
      <button
        className="toggle-menu"
        onClick={() => setMenuIsOpen(!isMenuOpen)}
      >
        <span className={!isMenuOpen ? "bar1" : "bar1-close"}></span>
        <span className={!isMenuOpen ? "bar2" : "bar2-close"}></span>
        <span className={!isMenuOpen ? "bar3" : "bar3-close"}></span>

      </button>
      <div className={isMenuOpen ? "nav-links" : "nav-links nav-hidden"}>
        <button className="button-link" onClick={slideTo("home")}>
          Home
        </button>
        <button className="button-link" onClick={slideTo("services")}>
          Serviços
        </button>
        <button className="button-link" onClick={slideTo("about")}>
          Sobre
        </button>
        <button className="button-link" onClick={slideTo("fqa")}>
          FQA
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
