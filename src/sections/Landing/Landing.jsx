import Navbar from "../../components/Navbar/Navbar";
import backgroundImage from "../../assets/safeBackground.jpg";
import carImage from "../../assets/car.jpg";
import houseImage from "../../assets/house.jpg";
import adminImage from "../../assets/admin.jpg";
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
          <h1 className="title">Seus bens estão seguros em mãos confiáveis.</h1>
          <p className="description">
          Emigrante e preocupado com a segurança dos seus bens em Cabo Verde? Nós garantimos cuidados completos, incluindo segurança, manutenção e limpeza.
          </p>
          <button className="cta-button"> <a href="https://wa.me/2389725617" className="link" target="blank">Contactar Agora</a> </button>
        </div>
        <div className="service-images">
          <div className="top-images">
            <img src={carImage} alt="car-image"></img>
          </div>
          <div className="bottom-images">
            <div className="right">
              <img src={houseImage} alt="house-image"></img>
            </div>
            <div className="left">
              <img src={adminImage} alt="admin-image"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
