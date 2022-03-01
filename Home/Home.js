import React from "react";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Faq from "../Faq/Faq";
import Packages from "../Packages/Packages";
import Resort from "../Resort/Resort";
import Sports from "../Sports/Sports";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <Packages></Packages>
      <Sports></Sports>
      <Resort></Resort>
      <Faq></Faq>
    </div>
  );
};

export default Home;
