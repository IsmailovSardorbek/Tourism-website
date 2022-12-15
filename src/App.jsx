import React, { useContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import Hero from "./components/Hero/Hero";
import HolidayInfo from "./components/HolidayInfo/HolidayInfo";
import WindowWidthContext from "./Context";
import AboutUs from "./components/AboutUs/AboutUs";
import Culture from "./components/Culture/Culture";
import SingUp from "./components/SignUp/SignUp";
import Footer from "./components/Footer/Footer";

export default function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  window.addEventListener("resize", () => {
    setWindowWidth(window.innerWidth);
  });

  return (
    <React.Fragment>
      <WindowWidthContext.Provider value={windowWidth}>
        <Navbar />
        <Hero />
      </WindowWidthContext.Provider>
      <HolidayInfo />
      <AboutUs />
      <Culture />
      <SingUp />
      <Footer />
    </React.Fragment>
  );
}
