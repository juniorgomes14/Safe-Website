import { useState } from "react";
import Logo from "../../assets/logoSafe.png"
import "./Navbar.css";


const Navbar = () => {
  const [isMenuOpen, setMenuIsOpen] = useState(false);

  function slideTo(componentID) {
    document.getElementById(componentID)?.scrollIntoView({ behavior: "smooth" });
    setMenuIsOpen(false);
  }
  
  function toggleMenu(){
    setMenuIsOpen(()=> !isMenuOpen)
    
  }

  return (
    <nav>
      <div className="logo-container">
        <img src={Logo} alt="logo" className="logo-icon"/>
      </div>
      <button
        className="toggle-menu"
        onClick={toggleMenu}
      >
        <span className={!isMenuOpen ? "bar1" : "bar1-close"}></span>
        <span className={!isMenuOpen ? "bar2" : "bar2-close"}></span>
        <span className={!isMenuOpen ? "bar3" : "bar3-close"}></span>

      </button>
      <div className={isMenuOpen ? "nav-links" : "nav-links nav-hidden"}>
        <button className="button-link" onClick={()=>slideTo("landing")}>
          Home
        </button>
        <button className="button-link" onClick={()=>slideTo("services")}>
          Serviços
        </button>
        <button className="button-link" onClick={()=>slideTo("about")}>
          Sobre
        </button>
        <button className="button-link" onClick={()=>slideTo("faq")}>
          FQA
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
