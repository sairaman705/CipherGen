import React from "react";
import Navbar from "./Components/Navbar";
import PasswordGenerator from "./Section1";
import Section2 from "./Section2";
import Accordian from "./Components/Accordian";
import "./Components/Accordian.css";
import About from "./Section4";
import accordianData from "./Utils/accordianData";
import Footer from "./Components/Foonter";

const App = () => {
  return (
    <>
      <Navbar />
      <div id="home">
        <PasswordGenerator />
      </div>

      <div id="section-2">
        <Section2 />
      </div>

      <div id="faq">  
        <Accordian data={accordianData} />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="contact">
        <Footer />
      </div>
    </>
  );
};

export default App;
