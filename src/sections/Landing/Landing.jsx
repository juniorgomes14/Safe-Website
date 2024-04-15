import Navbar from "../../components/Navbar/Navbar";
import backgroundImage from "../../assets/safeBackground.jpg";
import aluguerCarros from "../../assets/aluguerCarros.jpg";
import guardarCasa from "../../assets/guardarCasa.jpg";
import administracao from "../../assets/administracao.jpg";
import "./Landing.css";

function Landing() {
  return (
    <div id="landing">
      <Navbar />
      <div className="landing-container">
        <img
          className="background-image"
          src={backgroundImage}
          alt="background"
        ></img>
        <div className="texts">
          <h1 className="title">Este titulo é um teste e mais alguma coisa</h1>
          <p className="description">
            Lorem ipsum dolor sit amet consectetur. Amet diam nulla eu dolor
            phasellus vitae dictumst tellus pellentesque. Egestas quis amet
            nunc.
          </p>
          <button className="cta-button">Contactar Agora</button>
        </div>
        <div className="service-images">
          <div className="top-images">
            <img src={aluguerCarros} alt="aluguerCarros"></img>
          </div>
          <div className="bottom-images">
            <div className="right">
              <img src={guardarCasa} alt="aluguerCarros"></img>
            </div>
            <div className="left">
              <img src={administracao} alt="aluguerCarros"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
