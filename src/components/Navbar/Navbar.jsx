import "./Navbar.css";

const Navbar = () => {
  const slideToHome = () => { document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' }) }
  const slideToServices = () => { document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' }) }
  const slideToAbout = () => { document.getElementById('About')?.scrollIntoView({ behavior: 'smooth' }) }
  const slideToFQA = () => { document.getElementById('FQA')?.scrollIntoView({ behavior: 'smooth' }) }
  return (
    <nav>
      <div className="logo-container">
        <h3>Safe</h3>
      </div>
      <div className="nav-links">
        <button className="button-link"  onClick={slideToHome}>
          Home
        </button>
        <button className="button-link" onClick={slideToServices}>
          Serviços
        </button>
        <button className="button-link" onClick={slideToAbout}>
          Sobre
        </button>
        <button className="button-link" onClick={slideToFQA}>
          FQA
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
