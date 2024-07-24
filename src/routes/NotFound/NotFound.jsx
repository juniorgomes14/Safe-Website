import backgroundImage from "../../assets/safeBackground.jpg";
import "./NotFound.css";
import { IoMdReturnLeft } from "react-icons/io";
const NotFound = () => {
  return (
    <div className="notFound-page">
      <div className="not-found-description">
        <h1>Página não encontrada</h1>
        <p>Esta pagina não esta disponivel ou o URL esta incorreto</p>

        <a href=".">
          <button className="dashboard-button">
            Voltar <IoMdReturnLeft className="dashboard-button-icon" />
          </button>
        </a>
      </div>
      <img
        className="login-background"
        src={backgroundImage}
        alt="background"
      />
    </div>
  );
};

export default NotFound;
