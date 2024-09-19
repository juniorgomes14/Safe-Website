import "./App.css";
import ScrollUpButton from "./components/ScrollUpButton/ScrollUpButton";
import About from "./sections/About/About";
import CallToAction from "./sections/CallToAction/CallToAction";
import FAQ from "./sections/FAQ/FAQ";
import Footer from "./sections/Footer/Footer";
import Landing from "./sections/Landing/Landing";
import Services from "./sections/Services/Services";
import ApartmentList from "./components/ApartmentList/ApartmentList";
import SalesPreview from "./sections/SalesPreview/SalesPreview";

{
  /* <Comments /> */
}
function App() {;
  return (
    <>
      <Landing />
      <Services />
      <CallToAction />
      <SalesPreview/>
      <About />
      <FAQ />
      <Footer />
      <ScrollUpButton />
    </>
  );
}

export default App;
