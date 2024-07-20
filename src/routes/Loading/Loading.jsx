import { CgSpinner } from "react-icons/cg";
import backgroundImage from "../../assets/safeBackground.jpg";
import "./Loading.css";
const Loading = () => {
  return (
    <div className="loading-page">
      <CgSpinner className=" spinner-icon loading-icon" />
      <img
        className="login-background"
        src={backgroundImage}
        alt="background"
      />
    </div>
  )
}

export default Loading
