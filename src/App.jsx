import "./App.css";
import About from "./sections/About/About";
import CallToAction from "./sections/CallToAction/CallToAction";
import Comments from "./sections/Comments/Comments";
import FAQ from "./sections/FAQ/FAQ";
import Landing from "./sections/Landing/Landing";
import Services from "./sections/Services/Services";
import Footer from "./sections/Footer/Footer"
function App() {
  return (
    <>
      <Landing />
      <Services />
      <CallToAction />
      <Comments />
      <About />
      <FAQ />
      <Footer/>
    </>
  );
}

export default App;
