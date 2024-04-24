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
