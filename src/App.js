
import About from "./components/About";
import Border from "./components/Border";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Footer from './components/Footer'
import Newnavbar from './components/Newnavbar'
// import Socialicons from "./components/Socialicons";

function App() {
  return (
    <div className="overflow-hidden">
      <Newnavbar/>
      {/* <Socialicons/> */}
      <Home />
      <Border/>
      <About />
      <Skills />
      <Work />
      <Border/>
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;