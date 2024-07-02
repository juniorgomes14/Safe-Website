import { useNavigate } from "react-router-dom";
import { useAuth } from "../src/context/AuthContext";
import "./App.css";
import ScrollUpButton from "./components/ScrollUpButton/ScrollUpButton";
import About from "./sections/About/About";
import CallToAction from "./sections/CallToAction/CallToAction";
import FAQ from "./sections/FAQ/FAQ";
import Footer from "./sections/Footer/Footer";
import Landing from "./sections/Landing/Landing";
import Services from "./sections/Services/Services";
import { Navigate } from "react-router-dom";
{
  /* <Comments /> */
}
function App() {
  const Auth = useAuth();

  return Auth.token ? (
    <>
      <Landing />
      <Services />
      <CallToAction />
      <About />
      <FAQ />
      <Footer />
      <ScrollUpButton />
    </>
  ) : (
    <Navigate to="/dashboard" replace />
  );
}

export default App;
