import React from "react";
import Banner from "./components/banner/Banner";
// import Contact from "./components/contact/Contact";
import Features from "./components/features/Features";
// import Footer from "./components/footer/Footer";
import FooterBottom from "./components/footer/FooterBottom";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
// import Resume from "./components/resume/Resume";
// import Skills from "./components/resume/Skills";
import Contact from "./components/contact/Contact";
import Contact1 from "./components/contact/Contact1";

// import Testimonial from "./components/tesimonial/Testimonial";

function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText px-4">
      <Navbar />
      <div className="max-w-screen-xl mx-auto">
        <Banner />
        <Features />
        <Projects />
        {/* <Resume /> */}
        {/* <Testimonial /> */}
        <Contact1 />
        <Contact />
        {/* <ContactLeft /> */}

        {/* <Footer /> */}
        <FooterBottom />
      </div>
    </div>
  );
}

export default App;
