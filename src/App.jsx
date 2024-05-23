import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Rating from "./components/Rating";
import Purchase from "./components/Purchase";
import Apply from "./components/Apply";
import Browser from "./components/Browser";
import Features from "./components/Features";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Rating />
      <Purchase />
      <Apply />
      <Browser />
      <Features />
      <Footer />
    </>
  );
};

export default App;
