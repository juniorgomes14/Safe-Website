import "./App.css";
import CallToAction from "./sections/CallToAction/CallToAction";
import Comments from "./sections/Comments/Comments";
import FAQ from "./sections/FAQ/FAQ";
import Landing from "./sections/Landing/Landing";
import Services from "./sections/Services/Services";
function App() {
  return (
    <>
      <Landing />
      <Services />
      <CallToAction />
      <Comments />
      <FAQ />
    </>
  );
}

export default App;
