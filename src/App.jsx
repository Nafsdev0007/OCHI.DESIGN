import React from "react";
import Navbar from "./components/navbar";
import LandingPage from "./components/LandingPage";
import Marque from "./components/Marque";
import About from "./components/About";
import PlayingBall from "./components/PlayingBall";
import Featured from "./components/Featured";
import Clients from "./components/Clients";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import LocomotiveScroll from "locomotive-scroll";

const App = () => {

  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div data-scroll-container data-scroll className="w-full h-screen relative bg-[#F1F1F1]  md:pb-4">
      <Navbar />
      <LandingPage />
      <Marque />
      <About />
      <PlayingBall />
      <Featured />
      <Clients />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
