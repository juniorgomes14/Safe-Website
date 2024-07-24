import "./App.css";
import ScrollUpButton from "./components/ScrollUpButton/ScrollUpButton";
import About from "./sections/About/About";
import CallToAction from "./sections/CallToAction/CallToAction";
import FAQ from "./sections/FAQ/FAQ";
import Footer from "./sections/Footer/Footer";
import Landing from "./sections/Landing/Landing";
import Services from "./sections/Services/Services";

{
  /* <Comments /> */
}
function App() {;
  return (
    <>
      <Landing />
      <Services />
      <CallToAction />
      <About />
      <FAQ />
      <Footer />
      <ScrollUpButton />
    </>
  );
}

export default App;
