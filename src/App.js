import Home from "./components/home/Home";
import Section1 from "./components/section1/Section1";
import ContactUs from "./components/contactus/ContactUs"
import AboutMe from "./components/aboutMe/AboutMe";
import Aos from "aos"
import { useEffect } from "react";
import "aos/dist/aos.css"

function App() {
  useEffect(() => {
    Aos.init({duration:2000})
  }, [])
  

  return (
    <div >
      <div data-aos="slide-down">
       <Home />
      </div>
      <div data-aos="flip-down">
        <AboutMe  />
      </div>      
      <div data-aos="flip-up">
       <Section1 />
      </div>
      <div data-aos="slide-up">
        <ContactUs />
      </div>
      
    </div>
  );
}

export default App;
